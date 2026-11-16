#!/usr/bin/env python3
import datetime
import json
import os
import pathlib
import sys
import urllib.parse
import urllib.request


def verify_and_resolve_url(url):
    if not url or not isinstance(url, str):
        return None
    url = url.strip()
    if not url.startswith(("http://", "https://")):
        return None
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (compatible; OsservatorioStrategicoVerifier/1.0)"},
        )
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
Esegui una ricerca web sulle notizie e sugli atti pubblicati nelle ultime 24-48 ore (fino al {date_str}) sia sulle fonti istituzionali e tecnico-giuridiche italiane sia sulle MAGGIORI TESTATE ECONOMICHE MONDIALI e sugli organismi internazionali (Financial Times, The Wall Street Journal, Bloomberg, The Economist, Reuters, Harvard Business Review / Harvard Business School, MIT Sloan Management Review, Fortune, Forbes, Les Echos, Handelsblatt, World Economic Forum - WEF, OCSE/OECD, OIL/ILO, Cedefop, Commissione Europea) sui 5 pilastri strategici:
1. formazione-politiche-attive: Fondi Paritetici Interprofessionali, Fondo Nuove Competenze (FNC), GOL, SIISL, formazione obbligatoria e continua di lavoratori e datori di lavoro (Nuovo Accordo Stato-Regioni ex D.Lgs. 81/08) e attività di studio e orientamento del Centro Studi #IlLavoroContinua di CIFA Italia.
2. relazioni-industriali-cnel: Contrattazione collettiva (CCNL), misurazione della rappresentanza tramite flussi INPS UniEmens, contrasto al dumping contrattuale e Archivio Nazionale CNEL.
3. bilateralita-welfare-sicurezza: Fondi destinati al welfare aziendale e contrattuale, fondi sanitari integrativi iscritti all'Anagrafe Ministero della Salute (focus specifico ambito SanArCom), fringe benefit e conversione premi di risultato in welfare (art. 51 TUIR), ente bilaterale Epar, bandi e circolari INAIL.
4. ia-competenze-pmi: Osservatorio sulle AI (Osservatorio nazionale IA presso il Ministero del Lavoro, Osservatorio AI del Dipartimento Data & AI di UniEticPMI e osservatori internazionali OCSE/WEF/ILO/Cedefop), Alta Formazione universitaria, master e competenze manageriali per le PMI (focus specifico ambito Consorzio UniEticPMI e grandi business school / testate economiche mondiali), Legge n. 132/2025, D.Lgs. n. 179/2026 e AI Act UE.
5. ecosistema-cifa-fonarcom: Posizionamenti istituzionali, avvisi, regolamenti e iniziative di Andrea Cafà, CIFA Italia, FonARCom, Confsal, UniEticPMI, Osservatorio AI, SanArCom, Epar e Centro Studi #IlLavoroContinua.

REGOLA OBBLIGATORIA DI TRADUZIONE IN ITALIANO:
- Ogni articolo, studio o rapporto proveniente da testate economiche mondiali o fonti estere deve SEMPRE essere tradotto e sintetizzato integralmente in lingua italiana (title, keyFact, strategicImpact, sources[].name, primaryDocuments[].title), indicando la testata estera e la dicitura "[Tradotto in Italiano]".

REGOLA TASSATIVA E INDEROGABILE SUI LINK:
- In `sources`, inserisci solo gli URL esatti degli articoli o comunicati specifici (mai la homepage di un sito).
- In `primaryDocuments` ("Documenti Primari e Atti Citati"), inserisci un valore in `url` ESCLUSIVAMENTE se hai il link diretto, certo, reale e verificato al documento originale (es. PDF) o alla specifica pagina web che lo contiene. Se non hai questa informazione certa, reale e verificata, imposta `"url": null` (non inventare né inserire mai URL generici di portali o sezioni).

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
        raw_text = raw_text.split("
", 1)[1].rsplit("```", 1)[0].strip()

    new_edition = sanitize_edition_links(json.loads(raw_text))

    data_path = pathlib.Path(__file__).resolve().parent.parent / "data" / "editions.json"
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
