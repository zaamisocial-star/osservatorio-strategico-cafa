#!/usr/bin/env python3
import datetime
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET


USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"

# Feed pubblici gratuiti e senza login (Substack, Blog accademici, Centri Studi dei 100 Esperti)
FREE_PUBLIC_EXPERT_FEEDS = [
    ("Antonio Aloisi (Substack Workable Futures)", "https://antonioaloisi.substack.com/feed"),
    ("Franca Maino & Maurizio Ferrera (Secondo Welfare)", "https://www.secondowelfare.it/feed/"),
    ("Massimo Baldini / Tindara Addabbo / Paola Profeta (lavoce.info)", "https://lavoce.info/feed/"),
]


def verify_and_resolve_url(url):
    if not url or not isinstance(url, str):
        return None
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        return None
    try:
        req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        with urllib.request.urlopen(req, timeout=12) as resp:
            if resp.status != 200:
                return None
            final_url = resp.geturl()
            parsed = urllib.parse.urlparse(final_url)
            clean_path = parsed.path.rstrip("/")
            if len(clean_path) <= 1:
                return None
            return final_url
    except Exception:
        return None


def fetch_anonymous_expert_signals(experts_path):
    """
    Raccoglie segnali pubblici in forma 100% anonima, gratuita e senza login:
    1. Feed RSS diretti e Substack degli esperti (senza login)
    2. Google News RSS con filtro social/blog pubblici (linkedin.com/posts, x.com, substack.com, bsky.app)
    3. OpenAlex Public API (api.openalex.org) per nuovi working paper e studi dei 100 esperti
    """
    signals = []
    try:
        with open(experts_path, "r", encoding="utf-8") as f:
            experts_data = json.load(f)
    except Exception:
        experts_data = {"themes": []}

    # 1. Lettura diretta Feed RSS / Substack pubblici senza login
    for feed_label, feed_url in FREE_PUBLIC_EXPERT_FEEDS:
        try:
            req = urllib.request.Request(feed_url, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(req, timeout=10) as resp:
                if resp.status == 200:
                    root = ET.fromstring(resp.read())
                    for item in root.findall(".//item")[:3]:
                        title = (item.findtext("title") or "").strip()
                        link = (item.findtext("link") or "").strip()
                        if title and link:
                            signals.append(f"[Feed Pubblico No-Login: {feed_label}] {title} -> {link}")
        except Exception:
            continue

    # 2. Interrogazione Google News RSS per post pubblici e uscite stampa dei 100 esperti (senza login)
    all_names = []
    for th in experts_data.get("themes", []):
        for exp in th.get("italia", []) + th.get("europa_uk", []):
            all_names.append(exp["name"])

    # Campionamento a blocchi per interrogare Google News RSS senza autenticazione
    for i in range(0, min(len(all_names), 30), 6):
        batch = all_names[i : i + 6]
        query = " OR ".join(f'"{name}"' for name in batch)
        rss_url = f"https://news.google.com/rss/search?q={urllib.parse.quote(query)}&hl=it&gl=IT&ceid=IT:it"
        try:
            req = urllib.request.Request(rss_url, headers={"User-Agent": USER_AGENT})
            with urllib.request.urlopen(req, timeout=10) as resp:
                if resp.status == 200:
                    root = ET.fromstring(resp.read())
                    for item in root.findall(".//item")[:2]:
                        title = (item.findtext("title") or "").strip()
                        link = (item.findtext("link") or "").strip()
                        if title and link:
                            signals.append(f"[Google News RSS No-Login] {title} -> {link}")
        except Exception:
            continue

    return "\n".join(signals[:25])


def sanitize_edition_links(edition):
    for item in edition.get("items", []):
        verified_sources = []
        for src in item.get("sources", []):
            real_url = verify_and_resolve_url(src.get("url"))
            if real_url:
                src["url"] = real_url
                verified_sources.append(src)
        item["sources"] = verified_sources

        for doc in item.get("primaryDocuments", []):
            real_doc_url = verify_and_resolve_url(doc.get("url"))
            doc["url"] = real_doc_url
    return edition


def main():
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY non configurata nei GitHub Secrets. Salto la generazione cloud.")
        sys.exit(0)

    from google import genai
    from google.genai import types

    base_dir = pathlib.Path(__file__).resolve().parent.parent
    experts_path = base_dir / "data" / "experts_100.json"
    anonymous_signals = fetch_anonymous_expert_signals(experts_path)

    with open(experts_path, "r", encoding="utf-8") as f:
        experts_registry = json.load(f)

    experts_summary = []
    for th in experts_registry.get("themes", []):
        it_names = ", ".join(e["name"] for e in th.get("italia", []))
        eu_names = ", ".join(e["name"] for e in th.get("europa_uk", []))
        experts_summary.append(f"- {th['themeName']}: ITALIA [{it_names}] | EUROPA/UK [{eu_names}]")
    experts_prompt_block = "\n".join(experts_summary)

    client = genai.Client(api_key=api_key)
    today = datetime.date.today()
    date_str = today.strftime("%Y-%m-%d")

    mes = [
        "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno",
        "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
    ]
    giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"]
    display_date = f"{giorni[today.weekday()]} {today.day} {mes[today.month - 1]} {today.year}"

    prompt = f"""
Agisci come analista strategico per Andrea Cafà (Presidente di CIFA Italia, di FonARCom e del Consorzio Universitario UniEticPMI, vertice di riferimento per Epar, SanArCom, l'Osservatorio AI UniEticPMI e il Centro Studi #IlLavoroContinua).
Esegui una ricerca web sulle notizie, sugli atti e sugli interventi pubblici pubblicati nelle ultime 24-48 ore (fino al {date_str}) sia sulle fonti istituzionali italiane sia sulle MAGGIORI TESTATE ECONOMICHE MONDIALI (Financial Times, Wall Street Journal, Bloomberg, The Economist, Reuters, Harvard Business Review / HBS, MIT Sloan, Fortune, Forbes, Les Echos, Handelsblatt, WEF, OCSE/OECD, OIL/ILO, Cedefop, Commissione Europea) sui 5 pilastri strategici:
1. formazione-politiche-attive: Fondi Interprofessionali, FNC, GOL, SIISL, formazione lavoratori e datori di lavoro (Nuovo Accordo Stato-Regioni) e Centro Studi #IlLavoroContinua.
2. relazioni-industriali-cnel: Contrattazione collettiva (CCNL), rappresentanza UniEmens, contrasto al dumping e Archivio CNEL.
3. bilateralita-welfare-sicurezza: Fondi destinati al welfare e sanità integrativa (ambito SanArCom), fringe benefit e premi di risultato (art. 51 TUIR), Epar, bandi INAIL e sicurezza sul lavoro.
4. ia-competenze-pmi: Osservatorio sulle AI (MLPS e Dipartimento Data & AI UniEticPMI), Alta Formazione per le PMI (Consorzio UniEticPMI), L. 132/2025, D.Lgs. 179/2026 e AI Act UE.
5. ecosistema-cifa-fonarcom: Iniziative di Andrea Cafà, CIFA Italia, FonARCom, Confsal, UniEticPMI, SanArCom, Epar e Centro Studi #IlLavoroContinua.

MONITORAGGIO OBBLIGATORIO DEI 100 ESPERTI (WEB & SOCIAL PUBBLICI SENZA LOGIN):
Monitora inoltre le uscite pubbliche (articoli, studi, interviste e post pubblici indicizzati su LinkedIn, Substack, X, Bluesky e blog accademici senza login) dei seguenti 100 esperti:
{experts_prompt_block}

Segnali raccolti dai feed pubblici no-login:
{anonymous_signals}

Quando uno o più di questi 100 esperti esce pubblicamente su uno dei 5 temi, inseriscilo tra le notizie selezionate!

REGOLA OBBLIGATORIA DI TRADUZIONE IN ITALIANO:
- Ogni articolo, studio, paper o post social proveniente da testate economiche mondiali o dagli esperti europei/UK in lingua straniera deve SEMPRE essere tradotto e sintetizzato integralmente in lingua italiana.

REGOLA TASSATIVA E INDEROGABILE SUI LINK:
- In `sources`, inserisci solo gli URL esatti degli articoli, post pubblici o comunicati specifici (mai la homepage di un sito).
- In `primaryDocuments` ("Documenti Primari e Atti Citati"), inserisci un valore in `url` ESCLUSIVAMENTE se hai il link diretto, certo, reale e verificato al documento originale (es. PDF) o alla specifica pagina web che lo contiene. Se non hai questa informazione certa, reale e verificata, imposta `"url": null`.

Restituisci ESCLUSIVAMENTE un oggetto JSON valido (senza markdown fence) per l'edizione odierna con le chiavi: date, displayDate, editorialNote, stats, items.
"""

    response = client.models.generate_content(
        model="gemini-2.5-pro",
        contents=prompt,
        config=types.GenerateContentConfig(
            tools=[types.Tool(google_search=types.GoogleSearch())],
            temperature=0.1,
        ),
    )

    raw_text = response.text.strip()
    if raw_text.startswith("```"):
        raw_text = raw_text.split("\n", 1)[1].rsplit("```", 1)[0].strip()

    new_edition = sanitize_edition_links(json.loads(raw_text))

    data_path = base_dir / "data" / "editions.json"
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    data["meta"]["lastUpdated"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    editions = [ed for ed in data.get("editions", []) if ed.get("date") != date_str]
    editions.insert(0, new_edition)
    data["editions"] = editions[:30]

    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Edizione {date_str} aggiornata e verificata con successo in data/editions.json")


if __name__ == "__main__":
    main()
