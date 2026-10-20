# NOTE DE PASSATION — MÉDIAS / CLAUDE

**Projet :** RMBD Cabin Integration Academy  
**Dépôt :** `ben2flandre-coder/cabin-academy` — branche `main`  
**Date :** 9 octobre 2026

## 1. État vérifié du dépôt

- **8 illustrations WebP** dans `assets/media/`.
- **20 schémas SVG individuels** (`T01.svg` à `T20.svg`) dans `assets/media/technical/`.
- **Manifeste** : `assets/media/technical/manifest.json`.
- **Interfaces de consultation** : `atlas.html` et `media.html`.
- **Registre de recette** : `MEDIA_QA.md`.

Ces fichiers sont présents dans le dépôt GitHub. Cette vérification **ne vaut pas** validation de leur qualité visuelle ni de leur disponibilité publique sur GitHub Pages.

## 2. Limites et points de vigilance

Selon `MEDIA_QA.md`, `media.html` présente aussi 60 vignettes SVG générées côté navigateur à partir de six motifs génériques : **elles ne constituent pas 60 ressources techniques distinctes**.

Les 20 SVG sont des illustrations pédagogiques génériques et **non des documents constructeur approuvés**. Le registre ne confirme aucune banque photographique tierce assortie de droits et provenances vérifiés.

Ne déduire des schémas génériques aucune valeur de couple, tolérance, affectation électrique, instruction d'assemblage ou règle de sécurité. La documentation technique applicable et les consignes de l'organisme de formation prévalent.

## 3. Répartition des responsabilités

**Claude** : architecture et développement de la plateforme, intégration des médias dans les séquences, navigation, interactions, progression pédagogique, tests, publication et déploiement.

**ChatGPT** : conception, enrichissement et livraison de ressources iconographiques : atlas techniques, vues détaillées, schémas explicatifs, équipements cabine, outillage, assemblages, gestes professionnels et situations de contrôle.

## 4. Consignes d'intégration à Claude

1. Conserver les chemins et identifiants existants, sauf migration explicitement coordonnée.
2. Associer chaque média à une notion, un objectif pédagogique et, lorsque pertinent, une compétence **BC01 / BC02**.
3. Distinguer clairement **validé / à améliorer / à remplacer**, sans présenter les illustrations génériques comme des instructions Airbus approuvées.
4. Prévoir zoom, légendes et consultation lisible sur smartphone.
5. Éviter doublons, illustrations décoratives et comptages trompeurs.
6. Vérifier les liens, téléchargements, performances et affichage après intégration.
7. Référencer la provenance, les droits, le statut de validation et l'usage pédagogique de chaque nouveau média.

## 5. Statut

**Bibliothèque existante et inventoriée ; réception qualitative, contrôle métier et validation fonctionnelle restant à réaliser.**

Cette note est une passation opérationnelle pour coordonner l'intégration par Claude et la production iconographique par ChatGPT.
