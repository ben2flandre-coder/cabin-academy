# Architecture — RMBD Cabin Integration Academy

Compagnon de formation CQP Intégrateur cabine (RNCP40664), smartphone d'abord. PWA statique, JS vanilla, sans framework ni bundler. Publié sur GitHub Pages (branche `main`, racine, `.nojekyll`) : https://ben2flandre-coder.github.io/cabin-academy/

## Principes non négociables
- PAS DOCUMENTÉ = PAS INVENTÉ : aucune valeur Airbus/constructeur (couple, tolérance, procédure), aucun calendrier/barème/durée de certification inventés, pas de faux pourcentages.
- Ne jamais écrire « validé » sans preuve. Images IA = « à valider », génériques.
- Les exercices de l'appli sont fictifs : jamais comptés comme expérience réalisée (carnet : observé / réalisé avec aide / réalisé sous contrôle / autonomie constatée, validée par le tuteur).
- C1–C5 = numérotation de travail de l'appli (la fiche RNCP ne numérote pas). BC01 = C1–C3, BC02 = C4–C5.
- Le centre de formation (Balma, 09/11/2026→30/03/2027, source : fiche organisme) et la doc applicable priment.

## Arborescence
- `content/chapters/*.js` : un chapitre = `CA.addChapter({...})`, 13 rubriques didactiques. Plan et ids : `docs/PLAN-CHAPITRES.md` (32 chapitres).
- `content/figs/*.js` : `CA.addFigures` (SVG inline interactifs ou rasters IA `content/figs/media-ia.js`). SVG dans `assets/fig/`, images WebP dans `assets/media/img/`.
- `content/glossary/`, `content/sources.js`, `content/cases/` (cas pratiques transversaux, schéma CONTENT-GUIDE §11, **aucun écrit**).
- `assets/js/*.js` : moteur, chargé par ordre numérique (core, store, content, progress, ui, figure, exercise, router, home, chapter, review, library, journal, certification, cases, settings, pwa, boot).
- `tools/build.mjs` : valide le contenu (13 rubriques, seuils de mots, exercices, matrice RNCP, liens glossaire, rasters) puis génère `assets/content.js`, `assets/version.json`, `sw.js`, `index.html`. Options : `--check [ids]`, `--lenient`, `--fixture`.
- `tools/e2e.mjs` : Playwright, 258 contrôles (routes 360/390/412/paysage, 9 types d'exercices, carnet, export/import, stockage absent/corrompu, SW install/offline/mise à jour, remplacement ancien cache `rmbd-cabin-v4.1.1`).
- `docs/` : AGENT-BRIEF, CONTENT-GUIDE (règles de rédaction), PLAN-CHAPITRES, referentiel-notes (sources RNCP), MEDIA_QA, NOTE_PASSATION_MEDIAS_CLAUDE.

## Données et PWA
- localStorage : `rmbd-ca:v1`, `rmbd-ca:backup`, `rmbd-ca:corrupt-<date>` ; export/import JSON validé strictement. Données **locales par appareil**, aucune synchro (PC↔mobile = export/import).
- Répétition espacée Leitner : 1/3/7/14/30/60 jours. Progression = exercices faits (pas « lu »).
- Service worker : précache versionné `rmbd-ca-<version>` (~220 fichiers), navigation network-first sans cache, purge des anciens caches, bandeau « Nouvelle version disponible », Réglages : Vérifier les mises à jour / Réparer l'appli (garde les données).
- Version = `YYYY.MM.DD-<hash10>`.

## 9 types d'exercices
mcq, multi, order, match, sort, input, hotid, hottap, hotfind (hot* interdits sur rasters IA).

## Flux de publication (release)
1. `node tools/build.mjs` (doit passer sans erreur) 2. `node tools/e2e.mjs` (tout vert) 3. commit 4. push `main` **uniquement sur accord explicite de Benoît** 5. vérifier le site public (version, SW actif) 6. prévenir Cylia par mail pour les étapes importantes.

## Médias
Générés par GPT (prompts écrits par Claude, livraisons intégrées par Claude pour économiser les tokens). Provenance + `status:'à valider'` + `check[]` obligatoires. Légende numérotée depuis `parts[]`.
