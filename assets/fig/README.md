# Figures SVG — conventions

Les figures sont **inlinées** dans la page par l'application (pas de balise `<img>`), ce qui permet : thème clair/sombre, surbrillance des parties (`.hl`), exercices tactiles (`hottap`, `hotfind`), et zoom.
Le style vit dans `assets/figures.css` : **n'utilise que ces classes**, aucune couleur en dur.

Gabarit :

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 620" class="fig" role="img" aria-labelledby="t d">
  <title id="t">Titre court</title>
  <desc id="d">Description fonctionnelle complète pour lecteur d'écran.</desc>
  <rect class="bgp" width="1000" height="620"/>
  <g data-part="rail"> … formes avec classes sk/st/fl/in/eq/eq2/gl/mt/mt2/dk/wh/sy … </g>
  <g class="badges">
    <g class="badge" data-badge="rail" transform="translate(500 300)"><circle class="bd" r="26"/><text class="bn">1</text></g>
  </g>
</svg>
```

Classes de remplissage (avec trait ink) : `sk` peau/carter · `st` structure · `fl` plancher/rails · `in` habillage · `eq`/`eq2` équipement · `gl` vitrage · `mt`/`mt2` métal (outils, visserie) · `dk` sombre (caoutchouc, noir) · `wh` blanc · `sy` trait « système » orange (câbles, tuyaux ; fill none) · `syf` rempli orange · `okf` / `badf` vert / rouge (bonnes pratiques / erreurs).
Traits : `ln` (3) · `ln2` (5) · `thin` (1,5) · `dash` · `dim` (cotes, flèches bleues) + `dimf` (têtes de flèche) · `ax` / `axf` (axes rouges).
Textes : `t` (40) · `tb` gras · `ts` (36, minimum autorisé) · `tl` (48) ; modificateurs `tc` (centré), `te` (fin à droite), `ta` (bleu), `tr` (rouge). **Aucun texte < 36 unités.**
Badges : `badge` + `bd` + `bn` (voir gabarit). Les badges sont masqués dans les exercices d'identification.
Interactions (gérées par l'app) : `.hl` surbrillance, `.sel`, `.good`, `.miss`, `.wrong`.

Règles :
- 1 partie nommée = 1 `<g data-part="id">` ; `id` identique à `parts[].id` de la déclaration dans `content/figs/*.js`.
- Chaque partie touchable ≥ 60 × 60 unités ; éviter les recouvrements (le plus petit élément est dessiné **en dernier**, donc au-dessus).
- `viewBox` largeur 1000, hauteur 420 à 760 ; marges ≥ 20.
- Pas de `<style>`, pas de `<script>`, pas de `<image>`, pas de `<foreignObject>`, pas d'attribut `on*`, pas de police externe, pas de couleur hex en dur (sauf dans `stop-color` impossible → évite les dégradés).
- Dessin générique : jamais de logo, de livrée, d'immatriculation ni de réplique d'un appareil précis.
