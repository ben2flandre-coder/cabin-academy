// Bibliothèque de sources — RMBD Cabin Integration Academy
// Chaque URL a été ouverte et lue (WebFetch) le 2026-10-05 ; aucune valeur chiffrée n'est reprise des sources techniques.
// kind : officiel | institutionnel | constructeur | general | rmbd
CA.addSources([
  // ---------- Référentiel et formation ----------
  {
    id: "rncp40664",
    title: "CQP Intégrateur cabine aéronautique — fiche RNCP40664",
    publisher: "France compétences",
    url: "https://www.francecompetences.fr/recherche/rncp/40664/",
    kind: "officiel", lang: "fr", accessed: "2026-10-05",
    supports: "intitulé, niveau, certificateur, dates de décision/validité, deux blocs de compétences (C1 à C5) et modalités d'évaluation de la certification (chap. m1, matrice de certification de tous les chapitres)",
    note: "Fiche officielle du répertoire national : blocs RNCP40664BC01 et BC02, libellés des compétences, accès par formation continue, contrat de professionnalisation ou VAE. Elle décrit la certification, pas le contenu d'une formation ; aucune durée de cursus n'y figure."
  },
  {
    id: "rncp36363",
    title: "CQP Intégrateur cabine aéronautique — fiche RNCP36363 (version précédente, inactive)",
    publisher: "France compétences",
    url: "https://www.francecompetences.fr/recherche/rncp/36363/",
    kind: "officiel", lang: "fr", accessed: "2026-10-05",
    supports: "historique du titre : la fiche RNCP40664 remplace RNCP36363 (m1, notes de référentiel)",
    note: "Fiche d'une certification de même nom, statut inactif, décision du 25/04/2022, échéance 25/04/2025, remplacée par RNCP40664. À citer seulement pour expliquer pourquoi deux numéros circulent ; le numéro valable est RNCP40664."
  },
  {
    id: "cqpm-0289-observatoire",
    title: "Référentiel CQPM MQ 2010 0289 — Intégrateur cabine aéronautique",
    publisher: "Observatoire de la métallurgie (UIMM)",
    url: "https://www.observatoire-metallurgie.fr/sites/default/files/cqpm-pdf/R%C3%A9f%C3%A9rentiel%20CQPM%20GTN%200289_07012024_0.pdf",
    kind: "officiel", lang: "fr", accessed: "2026-10-05",
    supports: "libellés des compétences, critères d'évaluation (méthodes, moyens, relations professionnelles, contraintes environnementales dont la recherche de FOD) et modalités d'évaluation (m1, c3, g1)",
    note: "Référentiel de la branche métallurgie, en PDF d'une dizaine de pages : compétences regroupées en deux blocs (BDC0274, BDC0275) et critères d'évaluation observables. Texte professionnel, dense ; à lire avec le formateur. Une ancienne version de 2010 existe aussi sur le même site."
  },
  {
    id: "afpa-cqp-integrateur-cabine",
    title: "CQP Intégrateur cabine aéronautique — fiche formation",
    publisher: "AFPA",
    url: "https://www.afpa.fr/certificat-de-qualification-professionnelle/cqp-integrateur-cabine-aeronautique",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "exemple public d'un parcours de formation vers le CQP : modules, volumes horaires, lieu et date de session (m1)",
    note: "Fiche commerciale d'un organisme : durée annoncée, trois modules et une période en entreprise, prérequis, tarif, session à Balma. Décrit l'offre d'un organisme, pas le référentiel ; les volumes et dates peuvent changer et ne valent pas pour d'autres centres."
  },
  {
    id: "aerometiers-mecanicien-cabine",
    title: "Mécanicien·ne cabine — fiche métier",
    publisher: "Aérométiers",
    url: "https://www.aerometiers.fr/metiers/mecanicienne-cabine",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "présentation grand public du métier proche de l'intégrateur cabine : pose d'éléments d'habillage, équipements de cabine, employeurs (m1)",
    note: "Fiche métier en français, accessible à une débutante ; cite le CQPM Intégrateur cabine parmi les formations. Aucun ONISEP spécifique à ce métier n'a été trouvé : cette fiche le remplace. Intitulé du métier légèrement différent."
  },

  // ---------- Références aéronautiques ----------
  {
    id: "faa-amt-general",
    title: "Aviation Maintenance Technician Handbook – General (FAA-H-8083-30)",
    publisher: "Federal Aviation Administration (FAA)",
    url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/amtg_handbook.pdf",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "notions générales d'atelier : outils à main, mesure, visserie, matériaux, manutention au sol, documentation (d1, d2, d3, e4)",
    note: "Manuel public de l'administration américaine (très gros PDF, environ 90 Mo, publié sur la page des manuels de maintenance de la FAA). En anglais, niveau technicien ; sert de référence générale, pas de document de travail Airbus. La page FAA qui liste les manuels est consultable pour retrouver l'édition en vigueur."
  },
  {
    id: "faa-amt-airframe",
    title: "Aviation Maintenance Technician Handbook – Airframe (FAA-H-8083-31)",
    publisher: "Federal Aviation Administration (FAA)",
    url: "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/FAA-H-8083-31B_Aviation_Maintenance_Technician_Handbook.pdf",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "structure d'un avion de ligne (semi-monocoque, cadres, lisses), cabine et systèmes de bord (a1, a2, a4, b1)",
    note: "Manuel public de la FAA pour la cellule (très gros PDF, environ 110 Mo). En anglais ; pensé pour les avions certifiés aux États-Unis, il donne le vocabulaire et les principes généraux, pas des procédures de montage d'un programme précis."
  },
  {
    id: "faa-ac-43-13-1b",
    title: "AC 43.13-1B — Acceptable Methods, Techniques, and Practices: Aircraft Inspection and Repair",
    publisher: "Federal Aviation Administration (FAA)",
    url: "https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentid/99861",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "existence et statut des pratiques acceptables d'inspection et de réparation, notamment pour la visserie et le câblage (d2, e4, f2) ; référence seulement, aucune valeur reprise",
    note: "Page FAA de la circulaire (émise en 1998, avec modification 1). Texte conçu pour des aéronefs civils et des zones non pressurisées, quand l'instruction du constructeur manque ; il ne remplace jamais l'instruction de travail applicable. En anglais."
  },
  {
    id: "easa-cs-25",
    title: "Easy Access Rules for Large Aeroplanes (CS-25)",
    publisher: "EASA",
    url: "https://www.easa.europa.eu/en/document-library/easy-access-rules/online-publications/easy-access-rules-large-aeroplanes-cs-25",
    kind: "officiel", lang: "en", accessed: "2026-10-05",
    supports: "cadre européen de certification des avions de transport : sièges, ceintures, issues de secours, protection incendie, pressurisation (a4, b2, b6)",
    note: "Version en ligne des spécifications de certification pour avions de grande capacité. La page consultée porte la révision de janvier 2023 ; des amendements plus récents existent, à vérifier sur le site de l'EASA. Texte réglementaire, long et en anglais : pour savoir où une exigence est écrite, pas pour l'apprendre."
  },
  {
    id: "sae-as9146",
    title: "AS9146 — Foreign Object Damage (FOD) Prevention Program: Requirements for Aviation, Space, and Defense Organizations",
    publisher: "SAE International",
    url: "https://saemobilus.sae.org/standards/as9146-foreign-object-damage-fod-prevention-program-requirements-aviation-space-defense-organizations",
    kind: "officiel", lang: "en", accessed: "2026-10-05",
    supports: "existence d'une norme de programme de prévention FOD pour les organismes aéronautiques, spatiaux et de défense (g1, g2)",
    note: "Page éditeur : titre, date (avril 2017, reconduite en 2022) et périmètre. La norme complète est payante ; seul le résumé est public."
  },
  {
    id: "iaqg-9100",
    title: "Série de normes IAQG 9100 (management de la qualité pour l'aéronautique, l'espace et la défense)",
    publisher: "International Aerospace Quality Group (IAQG)",
    url: "https://iaqg.org/standards/",
    kind: "officiel", lang: "en", accessed: "2026-10-05",
    supports: "cadre qualité de l'industrie aéronautique : normes 9100, 9110 (organismes de maintenance), 9120 (distributeurs) (c4)",
    note: "Page de présentation des normes publiées par l'IAQG, en anglais. Les textes des normes sont payants ; la page ne donne que les titres et le rôle de chacune."
  },
  {
    id: "iso-6789-1",
    title: "ISO 6789-1:2017 — Outils d'assemblage pour vis et écrous : outils dynamométriques à main, partie 1",
    publisher: "ISO",
    url: "https://www.iso.org/standard/62549.html",
    kind: "officiel", lang: "en", accessed: "2026-10-05",
    supports: "existence d'une norme sur les exigences et les essais de conformité des outils dynamométriques à main (types I indicateurs et II à déclenchement) (d2)",
    note: "Page éditeur en anglais : titre, périmètre, statut. La partie 2 traite des certificats d'étalonnage. Norme complète payante ; aucune valeur de couple n'y est reprise ici."
  },
  {
    id: "skybrary-fod",
    title: "Foreign Object Debris (FOD)",
    publisher: "SKYbrary",
    url: "https://skybrary.aero/articles/foreign-object-debris-fod",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "définition du FOD et catégories (piste, aire de trafic, maintenance), causes, méthodes de prévention (g1, g2)",
    note: "Article de la base de connaissances SKYbrary sur la sécurité aérienne. Écrit surtout du point de vue de l'aérodrome ; la partie maintenance est courte. En anglais, accessible."
  },
  {
    id: "skybrary-dirty-dozen",
    title: "The Human Factors \"Dirty Dozen\"",
    publisher: "SKYbrary",
    url: "https://skybrary.aero/articles/human-factors-dirty-dozen",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "les douze facteurs humains à l'origine d'erreurs en maintenance (communication, distraction, fatigue, pression, normes…), contre-mesures (g2, g5)",
    note: "Article SKYbrary rattachant la liste à Gordon Dupont (Transport Canada, 1993) ; chaque facteur est suivi de contre-mesures. En anglais, vocabulaire simple."
  },
  {
    id: "ntsb-sa-054-fod",
    title: "Safety Alert SA-054 — Control Foreign Object Debris",
    publisher: "National Transportation Safety Board (NTSB)",
    url: "https://www.ntsb.gov/Advocacy/safety-alerts/Documents/SA-054.pdf",
    kind: "institutionnel", lang: "en", accessed: "2026-10-05",
    supports: "pratiques de prévention FOD en maintenance : inventaire des outils avant et après, protection des zones, contenants, nettoyage, second contrôle visuel (g1, g2)",
    note: "Alerte de sécurité de juin 2016 (quelques pages), avec cinq cas d'accidents liés à des objets oubliés. En anglais ; recommandations adressées aux mécaniciens, lisibles par une débutante."
  },

  // ---------- Constructeur (pages publiques Airbus) ----------
  {
    id: "airbus-a320-family",
    title: "A320 Family — page produit",
    publisher: "Airbus",
    url: "https://www.airbus.com/en/products-services/commercial-aircraft/passenger-aircraft/a320-family",
    kind: "constructeur", lang: "en", accessed: "2026-10-05",
    supports: "présentation grand public de la famille A320 : variantes A319/A320/A321, capacité en sièges et rayon d'action (a1, a4)",
    note: "Page commerciale publique avec un tableau comparatif (sièges, capacité maximale, rayon d'action). Elle n'affiche ni longueur ni envergure. Chiffres de la version neo, susceptibles d'être mis à jour."
  },
  {
    id: "airbus-a320-facts-figures",
    title: "Airbus A320 Family — Facts and Figures (avril 2025)",
    publisher: "Airbus",
    url: "https://www.airbus.com/sites/g/files/jlcbta136/files/2025-04/Airbus-A320-Family-Facts-and-Figures-April-2025.pdf",
    kind: "constructeur", lang: "en", accessed: "2026-10-05",
    supports: "dimensions générales publiques de l'A320neo (longueur, envergure, hauteur) pour fixer des ordres de grandeur (a1, a3)",
    note: "Plaquette PDF publique : tableau des dimensions générales, pas de dimensions de cabine précises. Document daté d'avril 2025."
  },
  {
    id: "airbus-a320-airspace-cabin",
    title: "A320 Family Airspace cabin",
    publisher: "Airbus",
    url: "https://www.aircraft.airbus.com/en/aircraft/airspace-cabin/a320-family-airspace-cabin",
    kind: "constructeur", lang: "en", accessed: "2026-10-05",
    supports: "éléments visibles d'une cabine passagers moderne : bagageries, éclairage d'ambiance, largeur de siège, divertissement (b1, b3)",
    note: "Page commerciale publique qui présente les bagageries Airspace XL, l'éclairage et les sièges. Vocabulaire marketing ; aucun détail d'installation."
  },
  {
    id: "airbus-safety-first",
    title: "Safety First — le magazine de sécurité des vols d'Airbus",
    publisher: "Airbus",
    url: "https://safetyfirst.airbus.com/",
    kind: "constructeur", lang: "en", accessed: "2026-10-05",
    supports: "culture de sécurité : articles publics sur les opérations cabine, la maintenance et les opérations au sol (g2, g5)",
    note: "Magazine public d'Airbus, en anglais, avec un fonds d'articles consultables. Cherche un article par thème ; les articles sont écrits pour des exploitants, pas pour des débutants."
  },

  // ---------- Santé et sécurité au travail ----------
  {
    id: "inrs-tms",
    title: "Troubles musculosquelettiques (TMS) — ce qu'il faut retenir",
    publisher: "INRS",
    url: "https://www.inrs.fr/risques/tms-troubles-musculosquelettiques/ce-qu-il-faut-retenir.html",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "définition des TMS (muscles, tendons, nerfs), facteurs de risque, démarche de prévention (g3)",
    note: "Page d'entrée de l'INRS sur les TMS, avec renvois vers les statistiques, la réglementation et les publications. En français, claire pour une débutante."
  },
  {
    id: "inrs-activite-physique",
    title: "Activité physique et manutentions : ce qu'il faut retenir",
    publisher: "INRS",
    url: "https://www.inrs.fr/risques/activite-physique/ce-qu-il-faut-retenir.html",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "effort physique au travail, douleurs, TMS et prévention par l'organisation du travail (g3, d4)",
    note: "Page de synthèse de l'INRS sur les risques liés à l'activité physique ; renvoie vers des outils d'évaluation. Généraliste, pas propre à l'aéronautique."
  },
  {
    id: "inrs-manutention",
    title: "Manutention manuelle — aide-mémoire juridique TJ 18",
    publisher: "INRS",
    url: "https://www.inrs.fr/media.html?refINRS=TJ+18",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "obligations liées à la manutention manuelle : évaluer et réduire le risque, formation aux gestes et postures, surveillance médicale (g3, d4)",
    note: "Brochure juridique de 16 pages (juin 2016) à télécharger depuis la page. Ton réglementaire ; un lecteur débutant s'appuiera plutôt sur la page INRS « activité physique »."
  },
  {
    id: "inrs-epi",
    title: "Protection individuelle (EPI) — ce qu'il faut retenir",
    publisher: "INRS",
    url: "https://www.inrs.fr/demarche/protection-individuelle/ce-qu-il-faut-retenir.html",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "définition d'un EPI, priorité à la protection collective, obligations de l'employeur, formation, entretien (d4, g4)",
    note: "Page de l'INRS en français : EPI fournis gratuitement, choix concerté avec les utilisateurs, mise au rebut d'un EPI abîmé. Pas de liste d'EPI propre à un poste de cabine."
  },
  {
    id: "inrs-coactivite",
    title: "Entreprises extérieures — cadre réglementaire (plan de prévention)",
    publisher: "INRS",
    url: "https://www.inrs.fr/risques/entreprises-exterieures/cadre-reglementaire.html",
    kind: "institutionnel", lang: "fr", accessed: "2026-10-05",
    supports: "plan de prévention quand plusieurs entreprises interviennent sur un même site, rôle de l'entreprise utilisatrice et de l'entreprise extérieure (c4, g4)",
    note: "Page de l'INRS sur les articles R. 4511-1 et suivants du Code du travail. Parle d'entreprises extérieures ; la coactivité entre équipes d'un même site n'y est pas détaillée."
  },
  {
    id: "ctn-manutention-r4541",
    title: "Code du travail — manutention manuelle (art. R4541-1, R4541-2 et R4541-8)",
    publisher: "Ministère du Travail — Code du travail numérique",
    url: "https://code.travail.gouv.fr/code-du-travail/r4541-2",
    kind: "officiel", lang: "fr", accessed: "2026-10-05",
    supports: "définition réglementaire de la manutention manuelle (R4541-2) ; champ d'application (R4541-1) ; information et formation aux gestes et postures (R4541-8) (g3, d4)",
    note: "Texte du Code du travail sur le site officiel du ministère ; chaque article a sa page (r4541-1, r4541-2, r4541-8). Légifrance, plus connu, a refusé l'accès lors de la vérification, d'où cette source."
  },
  {
    id: "ctn-droit-retrait-l4131",
    title: "Code du travail — droit d'alerte et droit de retrait (art. L4131-1)",
    publisher: "Ministère du Travail — Code du travail numérique",
    url: "https://code.travail.gouv.fr/code-du-travail/l4131-1",
    kind: "officiel", lang: "fr", accessed: "2026-10-05",
    supports: "obligation d'alerter l'employeur en cas de danger grave et imminent et possibilité de se retirer de la situation (g5)",
    note: "Texte de l'article L4131-1 sur le site officiel du ministère, avec renvois vers des fiches pratiques. Texte juridique : ne décide pas à la place de l'entreprise ce qui est un danger grave et imminent."
  },

  // ---------- Encyclopédie et cours ouverts ----------
  {
    id: "wiki-fuselage",
    title: "Fuselage",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/Fuselage",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "structure semi-monocoque, peau rivetée sur des cadres et des lisses, matériaux du fuselage (a1, a2)",
    note: "Article en français avec une section sur les types de structure (treillis, monocoque, semi-monocoque). Encyclopédie collaborative : sert à fixer le vocabulaire, pas de référence réglementaire."
  },
  {
    id: "wiki-semi-monocoque",
    title: "Semi-monocoque",
    publisher: "Wikipedia (English)",
    url: "https://en.wikipedia.org/wiki/Semi-monocoque",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "définition de la structure semi-monocoque (coque portante renforcée), rôle des lisses et des cadres (a2)",
    note: "Courte page en anglais, avec des exemples d'avions légers ; donne l'équivalent anglais des termes (frames, stringers, longerons)."
  },
  {
    id: "erau-aerospace-structures",
    title: "Introduction to Aerospace Flight Vehicles — chap. 9, Aerospace Structures",
    publisher: "Embry-Riddle Aeronautical University (manuel ouvert, J. G. Leishman)",
    url: "https://eaglepubs.erau.edu/introductiontoaerospaceflightvehicles/chapter/aerospace-structures/",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "fuselage semi-monocoque : peau porteuse, cadres, lisses/longerons, rivets (a2)",
    note: "Chapitre de manuel ouvert (licence Creative Commons) avec schémas, plus conceptuel qu'atelier. En anglais, niveau ingénieur par endroits ; ne pas en reprendre de figures sans respecter la licence."
  },
  {
    id: "wiki-airline-seat",
    title: "Airline seat",
    publisher: "Wikipedia (English)",
    url: "https://en.wikipedia.org/wiki/Airline_seat",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "sièges passagers : constitution générale, fixation sur des rails au plancher, classes de cabine, pas et largeur de siège (b2)",
    note: "Article en anglais, illustré, utile pour le vocabulaire (pitch, recline, tracks). Ne traite pas la certification des sièges."
  },
  {
    id: "wiki-galley",
    title: "Galley (kitchen) — section sur les galleys d'avion",
    publisher: "Wikipedia (English)",
    url: "https://en.wikipedia.org/wiki/Galley_(kitchen)",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "rôle d'un galley d'avion : stockage et service de repas et boissons, sièges de personnel, rangement de matériel de secours (b5)",
    note: "Page généraliste sur les cuisines (navires, avions) ; seule la section aéronautique intéresse. Pas de détail sur l'installation."
  },
  {
    id: "wiki-torque-wrench",
    title: "Clé dynamométrique",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/Cl%C3%A9_dynamom%C3%A9trique",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "principe de la clé dynamométrique et familles (à déclenchement, à lecture directe) (d2)",
    note: "Article en français décrivant les types d'outils et leurs usages. Il contient aussi un tableau de couples d'usage courant : ne jamais l'utiliser pour serrer sur avion."
  },
  {
    id: "wiki-pied-a-coulisse",
    title: "Pied à coulisse",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/Pied_%C3%A0_coulisse",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "composition et lecture d'un pied à coulisse (vernier, cadran, numérique) ; mesures extérieure, intérieure, profondeur (d3)",
    note: "Article en français complet sur l'instrument et sa lecture ; vocabulaire du métrologue, quelques passages historiques inutiles pour la pratique."
  },
  {
    id: "wiki-vis-de-fixation",
    title: "Vis de fixation — têtes et empreintes",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/Vis_de_fixation",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "empreintes de vis : six pans creux (Allen), six lobes (Torx), cruciforme Phillips et Pozidriv (d1, e4)",
    note: "Section de la page consacrée aux têtes de vis, avec les codes d'empreinte. En français ; généraliste, non aéronautique."
  },
  {
    id: "wiki-screw-drives",
    title: "List of screw drives",
    publisher: "Wikipedia (English)",
    url: "https://en.wikipedia.org/wiki/List_of_screw_drives",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "noms anglais des empreintes (Phillips, Pozidriv, Torx, hex socket) et risques de mauvais outil comme la détérioration de la tête (d1)",
    note: "Page en anglais avec tailles et comparaisons ; utile pour le vocabulaire FR/EN. Texte généraliste."
  },
  {
    id: "wiki-rivet",
    title: "Rivet",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/Rivet",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "rivets pleins et rivets aveugles, principe de l'assemblage permanent, dépose (a2, d1)",
    note: "Article en français sur le rivet en général ; l'aéronautique y est peu développée. Utile pour comprendre la fixation de la peau sur les cadres."
  },
  {
    id: "wiki-wire-harness",
    title: "Wire harness",
    publisher: "Wikipedia (English)",
    url: "https://en.wikipedia.org/wiki/Wire_harness",
    kind: "general", lang: "en", accessed: "2026-10-05",
    supports: "faisceau de câbles : assemblage de fils protégés et fixés ensemble, essais électriques et mécaniques (f1, f2)",
    note: "Page en anglais sur les faisceaux, avec un passage sur l'aéronautique. Mentionne la norme IPC/WHMA-A-620 ; description générale."
  },
  {
    id: "wiki-debris-aeronautique",
    title: "Débris (aéronautique)",
    publisher: "Wikipédia (français)",
    url: "https://fr.wikipedia.org/wiki/D%C3%A9bris_(a%C3%A9ronautique)",
    kind: "general", lang: "fr", accessed: "2026-10-05",
    supports: "définition française du FOD, conséquences, mesures de prévention en maintenance (outils numérotés, contrôle des inventaires) (g1)",
    note: "Article en français sur les débris d'aéronefs et de pistes ; les chiffres de coût cités sont anciens (2008), ne pas les reprendre."
  },

  // ---------- RMBD ----------
  {
    id: "rmbd-original",
    kind: "rmbd",
    title: "Création pédagogique RMBD",
    publisher: "RMBD Risk Management",
    lang: "fr", accessed: "2026-10-05",
    supports: "schémas originaux, exercices, documents fictifs",
    note: "Contenu pédagogique créé par RMBD pour cette plateforme : schémas génériques, exercices et documents fictifs (références préfixées EX-). Il n'est pas officiel, ne remplace aucune documentation de l'entreprise ni du constructeur, et ne constitue pas une certification."
  }
]);
