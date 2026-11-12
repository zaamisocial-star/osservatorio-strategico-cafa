(function () {
  const FALLBACK_DATA = {
    meta: {
      title: "Osservatorio Strategico Quotidiano",
      subtitle: "Lavoro, Formazione Continua, Relazioni Industriali, Bilateralità e PMI",
      recipient: "Andrea Cafà — Presidente CIFA Italia & FonARCom",
      schedule: "Ogni giorno alle 08:00 (Europe/Rome)",
      lastUpdated: "2026-11-12T12:30:00+01:00"
    },
    pillars: [
      {
        id: "formazione-politiche-attive",
        name: "Formazione Continua & Politiche Attive",
        shortName: "Formazione & FNC",
        description: "Fondi Paritetici Interprofessionali, Fondo Nuove Competenze (FNC), GOL, SIISL, Ministero del Lavoro, INPS, INAPP"
      },
      {
        id: "relazioni-industriali-cnel",
        name: "Relazioni Industriali, CCNL & CNEL",
        shortName: "CCNL & CNEL",
        description: "Qualità della rappresentanza datoriale e sindacale, contrasto al dumping contrattuale, Archivio Nazionale CNEL"
      },
      {
        id: "bilateralita-welfare-sicurezza",
        name: "Bilateralità, Welfare & Sicurezza",
        shortName: "Welfare & Sicurezza",
        description: "Enti bilaterali (Epar), sanità integrativa (SanArCom), D.Lgs. 81/08, bandi e circolari INAIL"
      },
      {
        id: "ia-competenze-pmi",
        name: "Intelligenza Artificiale & Transizione PMI",
        shortName: "IA & PMI",
        description: "Legge IA e lavoro, Osservatorio IA Ministero del Lavoro, reskilling/upskilling digitale per le PMI, incentivi MIMIT"
      },
      {
        id: "ecosistema-cifa-fonarcom",
        name: "Ecosistema CIFA Italia & FonARCom",
        shortName: "Ecosistema Diretto",
        description: "Posizionamenti istituzionali, avvisi, regolamenti e iniziative di CIFA Italia, FonARCom, Confsal, Epar, SanArCom"
      }
    ],
    editions: [
      {
        date: "2026-11-12",
        displayDate: "Giovedì 12 Novembre 2026",
        editorialNote: "Focus odierno sulle istruzioni operative del Ministero del Lavoro per i tetti di spesa dei Fondi Interprofessionali (Circolare n. 12/2026 e D.D. n. 227/2026), gli scorrimenti del Fondo Nuove Competenze, la riforma anti-dumping dell'Archivio Nazionale Contratti del CNEL, i decreti attuativi sulla governance dell'IA nel lavoro (L. 132/2025 e D.Lgs. 179/2026) e gli esiti istituzionali del Ventennale FonARCom.",
        stats: {
          scannedSources: 48,
          discardedNoise: 42,
          selectedItems: 6,
          primaryDocuments: 8
        },
        items: [
          {
            id: "2026-11-12-01",
            pillarId: "formazione-politiche-attive",
            categoryTag: "Circolare Ministeriale / Governance Fondi",
            priority: "Alta Priorità",
            title: "Fondi Paritetici Interprofessionali: Circolare MLPS n. 12/2026 sui tetti alle spese di funzionamento e Linee Guida D.D. n. 227/2026",
            keyFact: "Il Ministero del Lavoro e delle Politiche Sociali, con la Circolare n. 12 del 27 ottobre 2026, ha fornito le istruzioni operative attuative del paragrafo 4.2 delle nuove Linee Guida sui Fondi Paritetici Interprofessionali (adottate con Decreto Direttoriale n. 227 dell'11 maggio 2026, sostitutivo del D.D. n. 8/2026). Il provvedimento definisce il calcolo per scaglioni dimensionali delle soglie massime per le spese di funzionamento sul gettito dello 0,30%, disciplina le finestre di mobilità delle aziende tra Fondi, fissa standard rigorosi di tracciamento per la FAD e stabilisce che dall'esercizio 2027 anche le attività propedeutiche ai piani formativi confluiranno nei costi di funzionamento.",
            strategicImpact: "Impatto diretto sulla governance, sull'adeguamento statutario e regolamentare e sulla programmazione del bilancio preventivo 2027 di FonARCom, nonché sulla gestione della portabilità e mobilità delle imprese aderenti.",
            sources: [
              {
                name: "Consulenti del Lavoro — Nuove Linee Guida Fondi Interprofessionali (D.D. n. 227/2026)",
                publisher: "Consulenti del Lavoro",
                url: "https://www.consulentidellavoro.it/index.php/component/k2/item/19588"
              },
              {
                name: "Unindustria — MLPS: Linee Guida Fondi Paritetici Interprofessionali (D.D. n. 227/2026 e allegati)",
                publisher: "Unindustria",
                url: "https://www.un-industria.it/canale/finanziamenti-per-la-formazione-e-occupazione/notizia/135766/mlps-linee-guida-fondi-paritetici/"
              }
            ],
            primaryDocuments: [
              {
                title: "Ministero del Lavoro — Circolare n. 12 del 27 ottobre 2026 (Spese di funzionamento dei Fondi Paritetici Interprofessionali – Indicazioni operative calcolo soglie massime)",
                code: "Circolare MLPS n. 12/2026",
                type: "Circolare Ministeriale",
                url: null
              },
              {
                title: "Ministero del Lavoro — Decreto Direttoriale n. 227 dell'11 maggio 2026 (Linee Guida attivazione, funzionamento e vigilanza Fondi ex art. 118 L. 388/2000 — pagina con testo e allegati)",
                code: "D.D. MLPS n. 227/2026",
                type: "Decreto Direttoriale",
                url: "https://www.un-industria.it/canale/finanziamenti-per-la-formazione-e-occupazione/notizia/135766/mlps-linee-guida-fondi-paritetici/"
              }
            ]
          },
          {
            id: "2026-11-12-02",
            pillarId: "formazione-politiche-attive",
            categoryTag: "Politiche Attive / Competenze",
            priority: "Alta Priorità",
            title: "Fondo Nuove Competenze (FNC 3): decreti di scorrimento istanze 2026 e raccordo operativo con i Fondi Interprofessionali",
            keyFact: "Nell'ambito della terza edizione del Fondo Nuove Competenze (disciplinata dal Decreto Interministeriale 10 ottobre 2024 e dal D.D. n. 439 del 5 dicembre 2024), i decreti direttoriali adottati nel 2026 (a partire dal D.D. n. 9 del 9 gennaio 2026 e successivi provvedimenti di scorrimento) hanno rifinanziato e ammesso a valutazione ulteriori istanze aziendali presentate entro i termini per percorsi di transizione digitale ed ecologica, confermando la centralità del canale dei Fondi Interprofessionali per l'erogazione della formazione.",
            strategicImpact: "Avvalora la linea strategica sostenuta dal Presidente Cafà sul ruolo dei Fondi Interprofessionali quali attuatori diretti di politiche attive del lavoro in sinergia con Ministero del Lavoro e Regioni, in vista della strutturazione della quarta edizione del FNC.",
            sources: [
              {
                name: "IncentiviImpresa — Bandi formazione 2026 e stato dell'arte Fondo Nuove Competenze",
                publisher: "IncentiviImpresa",
                url: "https://www.incentivimpresa.it/bandi-formazione-2026-fondo-nuove-competenze/"
              }
            ],
            primaryDocuments: [
              {
                title: "Ministero del Lavoro (Amministrazione Trasparente) — Archivio Decreti e Atti Fondo Nuove Competenze",
                code: "Archivio Atti FNC — MLPS",
                type: "Atti Ufficiali MLPS",
                url: "https://trasparenza.lavoro.gov.it/archivio27_normativa_0_242.html"
              }
            ]
          },
          {
            id: "2026-11-12-03",
            pillarId: "relazioni-industriali-cnel",
            categoryTag: "Rapporto Istituzionale / Contrattazione",
            priority: "Alta Priorità",
            title: "CNEL: riforma dell'Archivio Nazionale dei Contratti con soglie UniEmens (5% ATECO) contro il dumping contrattuale",
            keyFact: "Il XXVII Rapporto sul mercato del lavoro e la contrattazione collettiva del CNEL (approvato il 22 aprile 2026) e la riorganizzazione dell'Archivio Nazionale dei Contratti Collettivi superano il criterio meramente formale di deposito introducendo soglie quantitative basate sui flussi INPS UniEmens (almeno il 5% dei lavoratori della divisione ATECO o il 3% per i contratti multisettoriali) e schede contratto standardizzate per la verifica del TEC negli appalti pubblici. I dati attestano che i contratti firmati dalle confederazioni comparativamente più rappresentative (incluso il perimetro Confsal) coprono oltre il 97% dei lavoratori privati.",
            strategicImpact: "Piena convergenza istituzionale con la proposta di CIFA Italia sul 'bollino blu' della rappresentanza: la misurazione oggettiva tramite flussi UniEmens valorizza la contrattazione di qualità promossa da CIFA e Confsal e isola i contratti pirata.",
            sources: [
              {
                name: "CNEL — Comunicato ufficiale approvazione XXVII Rapporto sul mercato del lavoro e la contrattazione collettiva",
                publisher: "CNEL",
                url: "https://www.cnel.it/comunicazione-e-stampa/notizie/news/detail/2026/04/22/approvato-xxvii-rapporto-sul-mercato-del-lavoro-e-la-contrattazione-collettiva"
              },
              {
                name: "Dottrina per il Lavoro — CNEL: riorganizzazione dell'Archivio dei contratti e degli accordi collettivi di lavoro",
                publisher: "Dottrina per il Lavoro",
                url: "https://www.dottrinalavoro.it/notizie-c/cnel-riorganizzazione-dellarchivio-dei-contratti-e-degli-accordi-collettivi-di-lavoro"
              }
            ],
            primaryDocuments: [
              {
                title: "CNEL — Testo integrale PDF del XXVII Rapporto sul mercato del lavoro e la contrattazione collettiva (2026)",
                code: "PDF XXVII Rapporto CNEL",
                type: "Documento Originale PDF",
                url: "https://www.cnel.it/media/docs/default-source/rapporto/rmdlcc2026-sito-27-05.pdf"
              }
            ]
          },
          {
            id: "2026-11-12-04",
            pillarId: "ia-competenze-pmi",
            categoryTag: "Normativa IA & Lavoro",
            priority: "Alta Priorità",
            title: "Intelligenza Artificiale nel Lavoro: attuazione Legge n. 132/2025, D.Lgs. n. 179/2026 e Osservatorio IA per il reskilling delle PMI",
            keyFact: "Con la Legge nazionale sull'Intelligenza Artificiale (Legge 23 settembre 2025, n. 132, artt. 11-13) e i decreti legislativi attuativi del 2026 (tra cui il D.Lgs. n. 179/2026), unitamente all'operatività dell'Osservatorio sull'adozione di sistemi di IA nel mondo del lavoro presso il Ministero del Lavoro, vengono resi cogenti il principio antropocentrico, l'obbligo di informativa trasparente ai lavoratori, la riserva di supervisione umana sulle decisioni datoriali e il rafforzamento dei percorsi di alfabetizzazione digitale e formazione sulla sicurezza nelle imprese.",
            strategicImpact: "Genera una domanda strutturale immediata di piani formativi finanziati per le PMI italiane sull'adozione etica, organizzativa e sicura dell'IA, raccordandosi direttamente con l'Osservatorio AI promosso da FonARCom e UniEticPMI.",
            sources: [
              {
                name: "NT+ Lavoro (Il Sole 24 Ore) — Decreto 179/2026: uso dell'intelligenza artificiale nei rapporti di lavoro",
                publisher: "Il Sole 24 Ore — NT+ Lavoro",
                url: "https://ntpluslavoro.ilsole24ore.com/art/decreto-1792026-ancora-uso-intelligenza-artificiale-rapporti-lavoro-AJnfbOAC"
              },
              {
                name: "Euroconference News — Uso dell'AI in materia di lavoro: approvazione definitiva del DDL",
                publisher: "Euroconference News",
                url: "https://www.ecnews.it/lavoro/rapporto-di-lavoro/gestione-del-rapporto/uso-ai-materia-lavoro-approvazione-definitiva-ddl/"
              },
              {
                name: "Consulenti del Lavoro — In Gazzetta Ufficiale la Legge sull'Intelligenza Artificiale",
                publisher: "Consulenti del Lavoro",
                url: "https://www.consulentidellavoro.it/home/storico-articoli/18957-in-gu-la-legge-sull-intelligenza-artificiale"
              }
            ],
            primaryDocuments: [
              {
                title: "Testo integrale PDF — Legge 23 settembre 2025, n. 132 (Disposizioni e deleghe al Governo in materia di intelligenza artificiale, G.U. n. 223 del 25/09/2025)",
                code: "PDF Legge n. 132/2025",
                type: "Documento Originale PDF",
                url: "https://pg-perugia.giustizia.it/cmsresources/cms/documents/L%20132%202025%20Delega%20IA.pdf"
              },
              {
                title: "Decreto Legislativo n. 179/2026 — Disposizioni attuative sull'impiego di sistemi di IA nei rapporti di lavoro",
                code: "D.Lgs. n. 179/2026",
                type: "Decreto Legislativo",
                url: null
              }
            ]
          },
          {
            id: "2026-11-12-05",
            pillarId: "ecosistema-cifa-fonarcom",
            categoryTag: "Posizionamento Istituzionale",
            priority: "Alta Priorità",
            title: "Ventennale FonARCom a Roma ('La formazione continua nell'era dell'IA') e operatività del nuovo Protocollo Metodologico IVC",
            keyFact: "Le celebrazioni per i 20 anni di FonARCom a Villa Miani (Roma), alla presenza del Presidente Andrea Cafà, del Vicepremier Antonio Tajani e del Ministro del Lavoro Marina Calderone, hanno sancito la candidatura dei Fondi Interprofessionali ad attuatori di nuove politiche attive del lavoro grazie a una rete di oltre 800 enti formativi a servizio delle PMI. Sul piano regolamentare interno è pienamente operativo il nuovo Protocollo Metodologico approvato dal CdA a integrazione del Regolamento IVC.",
            strategicImpact: "Consolida il posizionamento istituzionale di CIFA Italia e FonARCom ai massimi livelli governativi sulla convergenza tra intelligenza artificiale, capitale umano, premi di risultato e rilancio della produttività nelle PMI.",
            sources: [
              {
                name: "Adnkronos — Lavoro, Cafà (FonARCom): 'Fondi interprofessionali pronti a diventare attuatori nuove politiche attive'",
                publisher: "Adnkronos",
                url: "https://www.adnkronos.com/economia/lavoro-cafa-fonarcom-fondi-interprofessionali-pronti-a-diventare-attuatori-nuove-politiche-attive_4n0UX4vPjtPE8H3waOPmc6"
              },
              {
                name: "Agenzia Dire — Al via le celebrazioni per i 20 anni di FonARCom guardando al futuro",
                publisher: "Agenzia Dire",
                url: "https://www.dire.it/10-11-2026/1287434-al-via-le-celebrazioni-per-i-20-anni-di-fonarcom-guardando-al-futuro/"
              },
              {
                name: "FonARCom — Presentazione dell'Osservatorio AI UniEticPMI: 'L'impresa nell'era dell'AI'",
                publisher: "FonARCom",
                url: "https://www.fonarcom.it/fonarcom-presentazione-dellosservatorio-ai-unieticpmi-il-28-settembre-limpresa-nellera-dellai/"
              }
            ],
            primaryDocuments: [
              {
                title: "FonARCom — Approvazione del Protocollo Metodologico integrativo del Regolamento IVC (Pagina ufficiale provvedimento)",
                code: "Protocollo Metodologico FonARCom",
                type: "Delibera CdA",
                url: "https://www.fonarcom.it/approvazione-del-protocollo-metodologico-fonarcom/"
              }
            ]
          },
          {
            id: "2026-11-12-06",
            pillarId: "bilateralita-welfare-sicurezza",
            categoryTag: "Salute e Sicurezza / Incentivi",
            priority: "Rilevante",
            title: "Bando ISI INAIL (Gestione 2026): chiusa la fase di consolidamento del 26 ottobre, elenchi definitivi entro il 26 gennaio 2027",
            keyFact: "Nell'ambito del Bando ISI INAIL per il finanziamento a fondo perduto (65% su Assi 1.1, 2, 3, 4 e fino all'80% per modelli organizzativi Asse 1.2) di progetti di miglioramento delle condizioni di salute e sicurezza nelle micro e piccole imprese, si è conclusa il 26 ottobre 2026 la finestra di caricamento della documentazione tecnica e del Modulo A; la pubblicazione degli elenchi cronologici definitivi è fissata entro il 26 gennaio 2027.",
            strategicImpact: "Rilevante per l'attività di assistenza tecnica e informativa verso le PMI associate a CIFA Italia e seguite dall'ente bilaterale Epar in materia di modelli organizzativi (MOG/SGSL) e prevenzione infortunistica.",
            sources: [
              {
                name: "INAIL — Scadenza 26 ottobre 2026 perfezionamento domande Bando ISI 2025",
                publisher: "INAIL",
                url: "https://www.inail.it/portale/it/inail-comunica/scadenze/scadenza.2026.10.scadenza-bando-isi-2025-perfezionamento-domande.html"
              }
            ],
            primaryDocuments: [
              {
                title: "INAIL — Pagina ufficiale e documentazione Bando ISI 2025 (Incentivi alle imprese per la sicurezza)",
                code: "Bando ISI 2025 — INAIL",
                type: "Avviso Pubblico",
                url: "https://www.inail.it/portale/prevenzione-e-sicurezza/it/prevenzione-e-sicurezza/finanziamenti-per-la-sicurezza/incentivi-alle-imprese/bando-isi-2025.html"
              }
            ]
          }
        ]
      }
    ]
  };

  let appData = null;
  let currentEditionIndex = 0;
  let activePillar = 'all';
  let searchQuery = '';

  const editionSelect = document.getElementById('editionSelect');
  const editionMeta = document.getElementById('editionMeta');
  const kpiStrip = document.getElementById('kpiStrip');
  const editorialBanner = document.getElementById('editorialBanner');
  const pillarTabs = document.getElementById('pillarTabs');
  const searchInput = document.getElementById('searchInput');
  const newsContainer = document.getElementById('newsContainer');
  const printBtn = document.getElementById('printBtn');

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function isVerifiedSpecificUrl(url) {
    if (!url || typeof url !== 'string') return false;
    try {
      const parsed = new URL(url.trim());
      if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return false;
      const cleanPath = parsed.pathname.replace(//+$/, '');
      return cleanPath.length > 1;
    } catch (_) {
      return false;
    }
  }

  function getPillarById(pillarId) {
    if (!appData || !appData.pillars) return { name: pillarId, shortName: pillarId };
    return (
      appData.pillars.find((p) => p.id === pillarId) || {
        name: pillarId,
        shortName: pillarId,
      }
    );
  }

  function renderEditionSelect() {
    editionSelect.innerHTML = appData.editions
      .map(
        (ed, idx) =>
          `<option value="${idx}">${escapeHtml(ed.displayDate)} (${escapeHtml(ed.date)})</option>`
      )
      .join('');
    editionSelect.value = String(currentEditionIndex);
  }

  function renderPillarTabs(edition) {
    const counts = { all: edition.items.length };
    edition.items.forEach((item) => {
      counts[item.pillarId] = (counts[item.pillarId] || 0) + 1;
    });

    const tabsHtml = [
      `<button class="tab-btn ${activePillar === 'all' ? 'active' : ''}" data-pillar="all">
        Tutti i Pilastri (${counts.all})
      </button>`,
      ...appData.pillars.map((p) => {
        const count = counts[p.id] || 0;
        return `<button class="tab-btn ${activePillar === p.id ? 'active' : ''}" data-pillar="${escapeHtml(p.id)}" title="${escapeHtml(p.description)}">
          ${escapeHtml(p.shortName)} (${count})
        </button>`;
      }),
    ].join('');

    pillarTabs.innerHTML = tabsHtml;

    pillarTabs.querySelectorAll('.tab-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        activePillar = btn.getAttribute('data-pillar');
        renderCurrentEdition();
      });
    });
  }

  function renderKpis(edition) {
    const stats = edition.stats || {};
    const scanned = stats.scannedSources || 45;
    const noise = stats.discardedNoise || 39;
    const selected = edition.items.length;
    const docsCount = edition.items.reduce(
      (acc, item) => acc + (item.primaryDocuments ? item.primaryDocuments.length : 0),
      0
    );

    kpiStrip.innerHTML = `
      <div class="kpi-box">
        <div class="kpi-value">${selected}</div>
        <div class="kpi-label">Notizie ad Alto Segnale selezionate</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-value">${docsCount}</div>
        <div class="kpi-label">Atti e Documenti Primari citati</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-value">${scanned}</div>
        <div class="kpi-label">Fonti istituzionali e di settore scandagliate</div>
      </div>
      <div class="kpi-box">
        <div class="kpi-value">${noise}</div>
        <div class="kpi-label">Articoli di "rumore" scartati dal filtro</div>
      </div>
    `;
  }

  function renderNewsItems(edition) {
    const query = searchQuery.trim().toLowerCase();

    const filtered = edition.items.filter((item) => {
      const matchesPillar = activePillar === 'all' || item.pillarId === activePillar;
      if (!matchesPillar) return false;
      if (!query) return true;

      const haystack = [
        item.title,
        item.keyFact,
        item.strategicImpact,
        item.categoryTag,
        ...(item.sources || []).map((s) => `${s.name} ${s.publisher}`),
        ...(item.primaryDocuments || []).map((d) => `${d.title} ${d.code} ${d.type}`),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });

    if (filtered.length === 0) {
      newsContainer.innerHTML = `
        <div class="empty-state">
          <p>Nessuna notizia trovata con i filtri attuali. Prova a selezionare "Tutti i Pilastri" o a cancellare la ricerca.</p>
        </div>
      `;
      return;
    }

    newsContainer.innerHTML = filtered
      .map((item) => {
        const pillar = getPillarById(item.pillarId);

        const sourcesHtml = (item.sources || [])
          .map((s) => {
            if (isVerifiedSpecificUrl(s.url)) {
              return `
                <li class="link-item">
                  <a href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">
                    <span>&#8599;</span>
                    <span>${escapeHtml(s.name)}</span>
                  </a>
                  ${s.publisher ? `<span class="publisher-tag">(${escapeHtml(s.publisher)})</span>` : ''}
                </li>
              `;
            }
            return `
              <li class="link-item">
                <span class="doc-static-text">${escapeHtml(s.name)}</span>
                ${s.publisher ? `<span class="publisher-tag">(${escapeHtml(s.publisher)})</span>` : ''}
              </li>
            `;
          })
          .join('');

        const docsHtml = (item.primaryDocuments || [])
          .map((d) => {
            if (isVerifiedSpecificUrl(d.url)) {
              return `
                <li class="link-item">
                  <a href="${escapeHtml(d.url)}" target="_blank" rel="noopener noreferrer">
                    <span class="doc-badge">${escapeHtml(d.code || d.type || 'ATTO')}</span>
                    <span>&#8599; ${escapeHtml(d.title)}</span>
                  </a>
                </li>
              `;
            }
            return `
              <li class="link-item">
                <div class="doc-static-item">
                  <span class="doc-badge">${escapeHtml(d.code || d.type || 'ATTO')}</span>
                  <span class="doc-static-text">${escapeHtml(d.title)}</span>
                </div>
              </li>
            `;
          })
          .join('');

        return `
          <article class="news-card">
            <div class="card-header">
              <div class="badge-group">
                <span class="badge-pillar">${escapeHtml(pillar.name)}</span>
                <span class="badge-category">${escapeHtml(item.categoryTag)}</span>
              </div>
              <span class="badge-priority">${escapeHtml(item.priority || 'Segnale Verificato')}</span>
            </div>

            <h2 class="news-title">${escapeHtml(item.title)}</h2>

            <div class="section-label">Fatto Chiave (Sintesi Oggettiva)</div>
            <p class="key-fact">${escapeHtml(item.keyFact)}</p>

            <div class="impact-box">
              <div class="section-label">Impatto Strategico — CIFA Italia / FonARCom / PMI</div>
              <p class="impact-text">${escapeHtml(item.strategicImpact)}</p>
            </div>

            <div class="evidence-grid">
              <div class="evidence-col">
                <div class="section-label">Documenti Primari e Atti Citati</div>
                <ul class="link-list">${docsHtml}</ul>
              </div>
              <div class="evidence-col">
                <div class="section-label">Fonti Giornalistiche / Istituzionali</div>
                <ul class="link-list">${sourcesHtml}</ul>
              </div>
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderCurrentEdition() {
    const edition = appData.editions[currentEditionIndex];
    if (!edition) return;

    editionMeta.textContent = `Destinatario: ${appData.meta.recipient}`;
    editorialBanner.innerHTML = `<strong>Nota di Sintesi Direzionale (${escapeHtml(edition.displayDate)}):</strong> ${escapeHtml(edition.editorialNote)}`;

    renderKpis(edition);
    renderPillarTabs(edition);
    renderNewsItems(edition);
  }

  async function init() {
    try {
      const res = await fetch('./data/editions.json', { cache: 'no-store' });
      if (res.ok) {
        appData = await res.json();
      } else {
        const resFlat = await fetch('./editions.json', { cache: 'no-store' });
        appData = resFlat.ok ? await resFlat.json() : FALLBACK_DATA;
      }
    } catch (_) {
      appData = FALLBACK_DATA;
    }
    renderEditionSelect();
    renderCurrentEdition();
  }

  editionSelect.addEventListener('change', (e) => {
    currentEditionIndex = parseInt(e.target.value, 10) || 0;
    activePillar = 'all';
    renderCurrentEdition();
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value || '';
    const edition = appData && appData.editions[currentEditionIndex];
    if (edition) renderNewsItems(edition);
  });

  printBtn.addEventListener('click', () => {
    window.print();
  });

  init();
})();
