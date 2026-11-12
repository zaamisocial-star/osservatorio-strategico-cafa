#!/usr/bin/env python3
import datetime
import json
import os
import pathlib
import sys

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
    giorni = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Domenica", "Sabato"]
    display_date = f"{giorni[today.weekday()]} {today.day} {mes[today.month - 1]} {today.year}"

    prompt = f"""
Agisci come analista strategico per Andrea Cafà (Presidente di CIFA Italia e di FonARCom, sistema bilaterale Epar / SanArCom).
Esegui una ricerca web sulle notizie e sugli atti pubblicati nelle ultime 24-48 ore (fino al {date_str}) sui 5 pilastri:
1. formazione-politiche-attive
2. relazioni-industriali-cnel
3. bilateralita-welfare-sicurezza
4. ia-competenze-pmi
5. ecosistema-cifa-fonarcom

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

    new_edition = json.loads(raw_text)

    data_path = pathlib.Path(__file__).resolve().parent.parent / "data" / "editions.json"
    with open(data_path, "r", encoding="utf-8") as f:
        data = json.load(f)

    data["meta"]["lastUpdated"] = datetime.datetime.now(datetime.timezone.utc).isoformat()
    editions = [ed for ed in data.get("editions", []) if ed.get("date") != date_str]
    editions.insert(0, new_edition)
    data["editions"] = editions[:30]

    with open(data_path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"Edizione {date_str} aggiornata con successo in data/editions.json")

if __name__ == "__main__":
    main()
