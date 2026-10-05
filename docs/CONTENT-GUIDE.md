# Guide de rédaction — RMBD Cabin Integration Academy

Ce guide est le **contrat** entre les rédacteurs de contenu et le moteur de l'application.
Tout chapitre doit passer `node tools/build.mjs --check` sans erreur avant d'être considéré comme livré.

## 0. Public, ton, posture

- Public : **une personne qui entre dans le métier d'intégrateur cabine aéronautique et qui ne connaît presque rien** à l'avion, à l'industrie ni aux outils. Elle lit sur smartphone, souvent par séquences de 10–20 minutes.
- Tutoiement (« tu »). Phrases courtes. Un terme technique n'est jamais utilisé avant d'avoir été **montré** (figure), **nommé** (FR/EN), **expliqué** (à quoi ça sert).
- Ordre obligatoire pour toute notion nouvelle : **MONTRÉE → NOMMÉE → EXPLIQUÉE → CONTEXTUALISÉE → UTILISÉE → ÉVALUÉE**. Aucun exercice ne porte sur une notion non enseignée dans le chapitre ou un chapitre précédent (champ `prereq`).
- Style : manuel professionnel (Delagrave / MemoForma), concret, imagé, avec des exemples d'atelier. Pas de slogans. Pas de formules répétées d'un chapitre à l'autre (« stoppe, protège, demande », « à confirmer dans le dossier » en boucle). Une incertitude se formule **une fois**, précisément, là où elle porte.
- Pas de jargon sans explication, pas de « etc. » vague, pas de définitions circulaires.

## 1. Règles de fiabilité — PAS DOCUMENTÉ = PAS INVENTÉ

1. **Enseigne tout ce qui est connaissance aéronautique générale établie** (structure semi-monocoque, cadres/lisses, fonctions d'un PSU, types d'empreintes de vis, principe d'une clé dynamométrique, FOD…). Ne transforme pas le support en succession de réserves.
2. **N'invente jamais** : valeur de couple, jeu, tolérance, référence Airbus, numéro de procédure, convention de repérage propre à Airbus, nom d'outil interne, configuration d'un programme précis, durée de cursus, calendrier de certification.
3. Quand un point dépend du dossier ou du cursus, dis-le **une fois**, précisément (« la valeur de serrage se lit dans l'instruction de travail applicable, jamais de mémoire ») et explique **comment on la trouve**.
4. Les documents fictifs (plans, nomenclatures, étiquettes, fiches de lot) portent la mention « **document fictif — pédagogique** ». Toute référence fictive utilise le préfixe `EX-` (ex. `EX-48213-07`) pour ne jamais ressembler à une vraie référence.
5. Aucune documentation confidentielle Airbus n'est utilisée, reproduite ou demandée.
6. Pas de chiffre sans source ou sans justification : un ordre de grandeur général (« un A320 fait environ 37 m de long ») doit être connu et sûr ; dans le doute, ne pas écrire de chiffre.
7. Sources : `sources: ['id',…]` référence des identifiants de `content/sources.js`. Les points sensibles (réglementaire, chiffres) citent leur source.

## 2. Structure d'un chapitre (13 rubriques obligatoires)

Fichier : `content/chapters/<id>.js` ; il appelle `CA.addChapter({...})`.

```js
CA.addChapter({
  id: 'a1',                 // minuscule + chiffres, unique ; préfixe de tous les ids d'exercice
  domain: 'A',              // 'M' métier, 'A'..'G' (voir §6)
  order: 10,                // ordre global dans le parcours (unique)
  title: "L'avion et ses grandes parties",
  short: "Fuselage, voilure, empennage, moteurs, trains",   // 1 ligne pour la carte du parcours
  minutes: 35,              // durée réaliste de travail
  comps: ['C1'],            // compétences RNCP touchées (C1..C5)
  prereq: [],               // ids de chapitres requis
  sources: ['rncp40664'],   // ids de content/sources.js

  // 1. Ce que tu vas apprendre
  objectives: ["Nommer les 6 grandes parties…", "…"],          // 3 à 6, verbes d'action observables
  // 2. Pourquoi c'est important dans l'avion
  why: ["paragraphe concret…", "…"],                           // exemples réels d'atelier/avion
  // 3. Découverte visuelle
  discover: { fig: 'a1-avion-vue-ensemble', intro: "Avant de lire…", look: ["Observe… ?", "…"] },
  // 4. Explication simple — blocs successifs
  explain: [
    { h: "Titre court", p: ["paragraphe", "…"], list: ["…"], table: { head: ['A','B'], rows: [['…','…']] },
      fig: 'id-figure', callout: { kind: 'tip'|'warn'|'info'|'doc', text: "…" } },
  ],
  // fiches d'anatomie / de reconnaissance (obligatoires pour les chapitres B et D ; facultatives ailleurs)
  parts: [ { fig:'id', part:'rail', fr:'', en:'', fn:'fonction', where:'localisation', interfaces:'…', risks:'…', vigilance:'…', mistakes:'erreur de débutant' } ],
  // 5. Vocabulaire FR/EN (8 à 16 termes ; alimente le glossaire et les cartes de révision)
  vocab: [ { fr:'Cadre', en:'Frame', abbr:'', def:"définition simple, concrète", tip:"astuce mnémotechnique (optionnel)" } ],
  // 6. Exemple concret
  example: { title:"Une matinée dans la zone…", body:["…"], doc: DOC /* optionnel : document fictif */ },
  // 7. Démonstration / schéma commenté pas à pas
  demo: { title:"…", fig:'id', steps:[ { label:"Étape", text:"…", hl:['part-id','…'] } ] },   // ≥4 étapes, hl = parts de la figure à surligner
  // 8. Activité (exercices interactifs non évalués ; 2 à 4 ; au moins 2 types différents)
  activities: [ EXO, … ],
  // 9. Erreurs fréquentes
  mistakes: [ { error:"ce que fait le débutant", why:"pourquoi c'est un problème", better:"ce qu'on fait à la place" } ],   // ≥4
  // 10. Situation professionnelle
  situations: [ { title, context:["…"], fig:'id?', question, options:[{t, ok, why}], debrief } ],   // 1 à 2
  // 11. Mini-évaluation avec correction expliquée (6 à 9 items, ≥3 types d'exercice, ≤50 % de QCM simples)
  quiz: [ EXO, … ],
  // 12. Ce qu'il faut retenir
  retain: ["…", "…"],      // 4 à 8 phrases autonomes (servent aussi de cartes de révision)
  // 13. Passage au chapitre suivant
  next: { id: 'a2', teaser: "Tu sais nommer les grandes parties ; au chapitre suivant tu ouvres le fuselage…" },
  // Oral blanc (2 à 3 questions par chapitre)
  oral: [ { q:"Explique à un collègue…", expected:["élément attendu 1","…"], model:"réponse modèle en 4-6 phrases" } ],
  // Lignes de la matrice de certification (voir §5)
  matrix: [ { savoir:"…", savoirFaire:"…", comp:'C1', ex:['a1-q3','a1-a2'], proof:"…" } ],
});
```

Chaque rubrique doit contenir une **matière propre au chapitre**. Treize titres suivis de paragraphes interchangeables = chapitre rejeté.

### Mises en forme de texte autorisées dans toutes les chaînes
- `**gras**`, `*italique*`, `` `code / référence fictive` ``.
- `[[Terme]]` : lien vers l'entrée du glossaire (le terme doit exister dans `vocab` d'un chapitre ou dans `content/glossary/`). À utiliser à la **première occurrence** d'un terme défini.
- Pas de HTML.

## 3. Exercices (`EXO`)

Chaque exercice : `id` unique préfixé par l'id du chapitre (`a1-q3`, `a1-a2`), `type`, `q` (consigne **qui annonce le type de réponse** : « Choisis une réponse », « Coche toutes les… », « Remets dans l'ordre… »), `explain` (correction expliquée), `concept` (étiquette courte de la notion évaluée), optionnel `fig`, `doc`.

| type | champs | notes |
|---|---|---|
| `mcq` | `options:[{t, ok?, why}]` | 3–4 options, **une seule** `ok:true`. **Chaque** option a un `why` : pour les mauvaises, l'erreur plausible de débutant démasquée. |
| `multi` | `options:[{t, ok?, why}]` | 4–6 options, ≥2 correctes. |
| `order` | `items:[…]` (dans le bon ordre) | 3–7 éléments ; `explain` justifie l'ordre. |
| `match` | `pairs:[{l, r}]` | 3–6 paires ; `r` doit être discriminant. |
| `sort` | `bins:['Structure',…]`, `items:[{t, bin:0, why}]` | classer en catégories ; `bin` = index. |
| `input` | `answers:['EX-48213-07']`, `doc?` | réponse saisie (comparaison insensible à la casse/espaces/tirets) ; utile pour **rechercher une info dans un document fictif**. |
| `hotid` | `fig`, `targets:[{part}]`, `pool?:[part ids]` | la partie est surlignée ; l'apprenant choisit son nom dans la liste (`pool` ou toutes les parties de la figure). |
| `hottap` | `fig`, `targets:[{prompt, part}]` | l'apprenant **touche** la partie demandée sur la figure. |
| `hotfind` | `fig`, `targets:['part',…]`, `notes:{part:'pourquoi'}` | trouver toutes les anomalies / objets étrangers / erreurs (parties touchables). Le reste de la figure = leurres. |

`doc` (document fictif affichable dans n'importe quel exercice ou exemple) :
```js
doc: { title:"Fiche de lot — document fictif pédagogique", lines:[['P/N','EX-48213-07'],['S/N','EX-000412'],…], table?:{head:[…],rows:[[…]]}, note?:"…" }
```

Qualité des exercices : distracteurs = erreurs plausibles d'un débutant (confusions réelles) ; jamais « vérifier » vs « continuer sans vérifier » ; jamais de piège sémantique gratuit ; la correction explique **pourquoi**, pas seulement quoi ; on varie les formes ; chaque exercice se rattache à une notion enseignée.

## 4. Figures

- Fichier `assets/fig/<id>.svg` + déclaration dans `content/figs/<groupe>.js` :
```js
CA.addFigures([{
  id:'a1-avion-vue-ensemble', file:'a1-avion-vue-ensemble.svg',
  title:"Avion de ligne, vue de côté", caption:"…", alt:"description fonctionnelle complète pour lecteur d'écran",
  purpose:"apprentissage visé", chapters:['a1'],
  provenance:"Schéma original RMBD — création pédagogique", rights:"© RMBD, usage pédagogique",
  parts:[ { id:'fuselage', n:1, fr:'Fuselage', en:'Fuselage', fn:'une phrase' }, … ]
}]);
```
- **Pas de photo ni d'image générée.** Schémas originaux uniquement (provenance « Schéma original RMBD »). Aucun logo, aucune livrée de compagnie, aucun dessin d'un programme précis présenté comme tel : le schéma est générique.
- `viewBox="0 0 1000 H"` (H entre 420 et 760). **Tout texte ≥ 36 unités** (lisible sur 360 px) ; peu de mots dans le SVG : on utilise des **badges numérotés** (cercle + chiffre) et la légende HTML générée depuis `parts`. Pas de police externe.
- Chaque partie nommée = un groupe `<g data-part="id">…</g>` (id = `parts[].id`), **grand et touchable** (≥ 60×60 unités). Chaque partie a un badge `<g class="badge" data-badge="id" transform="translate(x y)"><circle class="bd" r="26"/><text class="bn">n</text></g>` rangé dans `<g class="badges">`.
- Classes **uniquement** (pas de couleurs en dur) : voir `assets/fig/README.md` et `assets/app.css` (section « Figures »).
- Racine : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 H" role="img" aria-labelledby="t d"><title id="t">…</title><desc id="d">…</desc>`.
- Sois **exact** : un schéma faux est pire que pas de schéma. Si une proportion est approximative, c'est un schéma de principe (le préciser dans `caption`).

## 5. Matrice de certification (RNCP40664)

Référentiel (source : France compétences, fiche RNCP40664, décision du 23/05/2025) :
- **BC01 — Préparation et mise en œuvre des opérations de protection et d'acheminement des éléments dans une structure aéronautique** : C1 Préparer, organiser et repérer son intervention dans l'aéronef · C2 Installer les protections des éléments à intégrer et de l'environnement · C3 Acheminer les éléments sur la zone d'intervention.
- **BC02 — Installation des éléments dans une structure aéronautique** : C4 Positionner, assembler, régler, fixer et/ou démonter les éléments · C5 Cheminer et connecter les différents systèmes (eau, air, oxygène, électricité, métallisations).

Chaque ligne `matrix` : `savoir` (ce que l'apprenant sait), `savoirFaire` (ce qu'il sait faire), `comp` (C1..C5), `ex` (ids d'exercices **du chapitre** qui l'entraînent, ≥1), `proof` (preuve d'apprentissage produite dans l'app — jamais une certification). La correspondance doit être **justifiée par le contenu réellement enseigné**.
Une auto-évaluation n'est jamais une certification ; un score n'est jamais une preuve de maîtrise professionnelle.

## 6. Domaines et chapitres

M Métier · A L'avion et son environnement · B La cabine · C L'environnement industriel · D Outillage et matériel · E Gestes et logique d'intégration · F Systèmes et interfaces · G FOD, qualité et sécurité.
La liste des chapitres, ids et affectations est dans `docs/PLAN-CHAPITRES.md`.

## 7. Vérification

```
node tools/build.mjs --check            # valide tout le contenu, signale erreurs et avertissements
node tools/build.mjs --check a1 a2      # limite l'affichage aux chapitres demandés
node tools/build.mjs                    # valide + génère assets/content.js, version.json, sw.js
```
Les **erreurs** bloquent. Les **avertissements** (chiffres suspects, mention Airbus, répétition) doivent être relus et justifiés ou corrigés.

## 8. Conventions de figures (compléments)
- Vues de côté : **avant (nez) à gauche**. Vues de dessus : avant à gauche également. Coupe transversale : vue **depuis l'arrière vers l'avant** (côté gauche LH à gauche de l'écran), à rappeler dans `caption`.
- Un même `data-part` peut apparaître dans plusieurs groupes `<g>` d'une même figure (deux vues du même objet) ; il doit être déclaré une seule fois dans `parts[]`.
- Exemple de référence graphique et de déclaration : `assets/fig/a1-avion-vue-ensemble.svg` (le lot 1 écrit sa déclaration `content/figs/a1.js` et peut améliorer le dessin).
- Contrôle visuel obligatoire : `node tools/render-fig.mjs <id>` puis `Read /tmp/claude-0/figs/<id>-360.png` (lisibilité smartphone) ; corriger tout chevauchement de badges, texte coupé, partie illisible.

## 9. Sources disponibles (`sources: [...]`)
`rncp40664` `rncp36363` `cqpm-0289-observatoire` `afpa-cqp-integrateur-cabine` `aerometiers-mecanicien-cabine` `faa-amt-general` `faa-amt-airframe` `faa-ac-43-13-1b` `easa-cs-25` `sae-as9146` `iaqg-9100` `iso-6789-1` `skybrary-fod` `skybrary-dirty-dozen` `ntsb-sa-054-fod` `airbus-a320-family` `airbus-a320-facts-figures` `airbus-a320-airspace-cabin` `airbus-safety-first` `inrs-tms` `inrs-activite-physique` `inrs-manutention` `inrs-epi` `inrs-coactivite` `ctn-manutention-r4541` `ctn-droit-retrait-l4131` `wiki-fuselage` `wiki-semi-monocoque` `erau-aerospace-structures` `wiki-airline-seat` `wiki-galley` `wiki-torque-wrench` `wiki-pied-a-coulisse` `wiki-vis-de-fixation` `wiki-screw-drives` `wiki-rivet` `wiki-wire-harness` `wiki-debris-aeronautique` `rmbd-original`.
Le contenu de `docs/referentiel-notes.md` est la référence sur le CQP (critères d'évaluation du référentiel de branche : méthodes, moyens, liens professionnels, contraintes environnementales dont la **recherche de FOD**). Ne cite aucun chiffre de session AFPA comme universel (630 h, dates) : ce sont les chiffres d'une session.

## 10. Étalon de qualité (à imiter, avec tes propres sujets)

**À éviter (générique, creux) :**
> « Le plancher est un élément important de la cabine. Il supporte les équipements. Toute intervention dépend de la définition applicable. »

**À écrire (montré, nommé, expliqué, contextualisé) :**
> « Regarde le **rail de siège** (*seat track*, n° 3 sur la figure) : c'est un profilé d'aluminium qui court tout le long du plancher, avec une rangée d'encoches rondes puis étroites, comme une fermeture éclair géante. Le pied du siège possède des **tétons** (*stud fittings*) : on les engage dans la partie large, on fait glisser jusqu'à la bonne position, et un verrou vient bloquer le tout. C'est ce qui permet à une compagnie de **changer la disposition des rangées** d'un avion à l'autre sans percer le plancher. Conséquence pour toi : un rail est une pièce **structurale** qui encaisse les efforts d'un siège plein en cas de choc ; on ne s'y appuie pas avec un outil, on ne le raye pas, et un caillou ou une vis tombés dedans sont du FOD très difficile à retrouver. »

**Exercice utile** : « Sur la figure, touche le rail de siège. » / « Une compagnie veut passer de 6 à 5 sièges de front : quelle propriété du rail le permet ? » (distracteurs : « il est soudé au siège », « il est en plastique souple » = confusions réelles).
**Exercice à proscrire** : « Face à un doute, que fais-tu ? A) Je vérifie B) Je continue sans vérifier ».

**Pour les situations professionnelles** : un contexte précis (heure, zone, état du produit, ce que tu vois, ce que dit le collègue), une question de décision, 3–4 options crédibles, un débrief qui argumente **pourquoi** et nomme la règle de métier. Pas de pièges administratifs gratuits.

**Mesure de réussite d'un chapitre** : une personne qui n'a jamais vu une cabine, après avoir lu et fait les exercices, doit pouvoir **expliquer le sujet à voix haute** (c'est ce que teste l'oral blanc) et **reconnaître l'objet sur une figure**.
