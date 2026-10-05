# Plan des chapitres (32) — ids, ordre, domaines, compétences

Progression : on **montre et nomme** d'abord (avion → cabine), puis on lit le **cadre industriel**, puis on reconnaît les **outils**, puis on **agit** (gestes), puis les **systèmes**, et la sécurité/FOD est **présente dès le début** (chap. m1, a4, b1, c4) avant son traitement complet (domaine G) ; les chapitres G sont accessibles sans prérequis lourd.

| ordre | id | domaine | titre | comps | prérequis |
|---|---|---|---|---|---|
| 10 | m1 | M | Le métier d'intégrateur cabine | C1 | — |
| 20 | a1 | A | L'avion et ses grandes parties | C1 | m1 |
| 30 | a2 | A | Le fuselage : peau, cadres, lisses, planchers | C1 | a1 |
| 40 | a3 | A | Se repérer dans l'avion : axes, stations, côtés, zones | C1 | a2 |
| 50 | a4 | A | Cabine, cockpit, soutes, portes et issues | C1 | a3 |
| 60 | b1 | B | Anatomie de la cabine : structure, habillage, équipement, système | C1,C4 | a4 |
| 70 | b2 | B | Rails, plancher et sièges | C1,C3,C4 | b1 |
| 80 | b3 | B | Plafond, PSU et rangements (hatracks) | C1,C4,C5 | b1 |
| 90 | b4 | B | Parois, fenêtres et cloisons | C2,C4 | b1 |
| 100 | b5 | B | Galleys et toilettes : les monuments | C3,C4,C5 | b1 |
| 110 | b6 | B | Équipements passagers, secours et interfaces | C4,C5 | b3 |
| 120 | c1 | C | Le dossier de travail | C1 | b1 |
| 130 | c2 | C | Identifier : référence, P/N, S/N, lot, indice | C1 | c1 |
| 140 | c3 | C | Configuration, conformité, non-conformité, autocontrôle | C1,C4 | c2 |
| 150 | c4 | C | Qualité aéronautique et coactivité | C1,C2,C3 | c3 |
| 160 | d1 | D | Atlas : tournevis, clés, douilles, pinces | C4 | b1 |
| 170 | d2 | D | Clés dynamométriques et serrage prescrit | C4 | d1 |
| 180 | d3 | D | Mesurer et contrôler | C1,C4 | d1 |
| 190 | d4 | D | Manutention, protections, EPI/EPC, consommables, rangement et inventaire | C2,C3 | d1 |
| 200 | e1 | E | La méthode : préparer et identifier | C1 | c3,d4 |
| 210 | e2 | E | Protéger et acheminer | C2,C3 | e1 |
| 220 | e3 | E | Présenter, positionner, ajuster | C4 | e2 |
| 230 | e4 | E | Fixer : visserie, freinage, serrage selon prescription | C4 | d2,e3 |
| 240 | e5 | E | Contrôler, nettoyer, inventorier, tracer | C1,C4 | e4 |
| 250 | f1 | F | Faisceaux électriques et connecteurs | C5 | b3 |
| 260 | f2 | F | Cheminer, fixer, protéger : colliers, passages, détrompage | C5 | f1 |
| 270 | f3 | F | Réseaux d'eau, d'air, d'oxygène, métallisation, interfaces mécaniques | C5 | f2 |
| 280 | g1 | G | FOD : comprendre | C1,C2 | a4 |
| 290 | g2 | G | FOD : prévenir, inventorier, réagir | C1,C4 | g1 |
| 300 | g3 | G | TMS et manutention | C3 | m1 |
| 310 | g4 | G | Protection du produit, coactivité, sécurité au poste | C2,C3 | c4 |
| 320 | g5 | G | Droit et devoir d'arrêt : alerter et communiquer | C1 | c3 |

Affectation de rédaction (lots) :
1. m1, a1, a2 · 2. a3, a4, b1 · 3. b2, b3, b4 · 4. b5, b6, c1 · 5. c2, c3, c4 · 6. d1, d2 · 7. d3, d4 · 8. e1, e2, e3 · 9. e4, e5, f1 · 10. f2, f3, g1 · 11. g2, g3 · 12. g4, g5.

## Figures partagées et propriété
Chaque lot **crée ses propres figures** (préfixe de l'id du chapitre : `a2-…`). Un chapitre peut **référencer** une figure d'un autre lot uniquement si elle figure dans le tableau ci-dessous (ids garantis) :

| figure | propriétaire | usage |
|---|---|---|
| `a1-avion-vue-ensemble` | lot 1 | a1, a4, g1 |
| `a2-section-fuselage` | lot 1 | a2, a4, b1 |
| `a3-axes-xyz` | lot 2 | a3, c1 |
| `b1-section-cabine` | lot 2 | b1 → tous les chapitres B, g1 |
| `b1-niveaux-structure-habillage-equipement-systeme` | lot 2 | b1, c3 |

Le lot 2 produit `b1-section-cabine` **en premier** ; les autres lots ne dépendent pas des figures des autres lots sauf celles ci-dessus.

## Textes réglementaires et métier à ne pas trahir
- Référentiel : voir `docs/CONTENT-GUIDE.md` §5.
- Les chapitres C (dossier, identification, configuration) enseignent des **notions génériques** de documentation industrielle aéronautique ; les formats exacts Airbus ne sont pas inventés : exemples fictifs préfixés `EX-`.
- Les chapitres D/E/F/G n'énoncent **aucune valeur** de couple, de jeu, de tension, de pression.
