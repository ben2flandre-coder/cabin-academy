// Figures du chapitre d1 — Atlas : tournevis, clés, douilles, pinces
// Schémas de principe originaux : aucune marque, aucune dimension gravée.
CA.addFigures([
  {
    id: 'd1-tournevis-anatomie', file: 'd1-tournevis-anatomie.svg',
    title: "Anatomie d'un tournevis et profils de pointes",
    caption: "Schéma de principe. En haut : les trois parties d'un tournevis. En bas : cinq pointes agrandies, de côté puis en bout (l'épaisseur et la longueur réelles varient selon la taille). Les noms Phillips, Pozidriv et Torx sont des noms de forme entrés dans l'usage.",
    alt: "En haut, un tournevis vu de côté avec ses trois parties : le manche à gauche, la tige ronde au milieu, la pointe à droite. En bas, cinq pointes agrandies, chacune dessinée de côté puis en bout : pointe plate en forme de spatule ; pointe Phillips effilée aux flancs en pente ; pointe Pozidriv plus trapue aux ailes droites avec de petites nervures entre les ailes ; pointe six lobes de type Torx, droite et à bout plat ; pointe six pans droite à section hexagonale.",
    purpose: "Nommer les trois parties d'un tournevis et reconnaître la forme de cinq pointes.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'manche', n: 1, fr: 'Manche', en: 'Handle', fn: "Ce que tu tiens : il grossit ta main pour que tu puisses faire tourner la pointe." },
      { id: 'tige', n: 2, fr: 'Tige', en: 'Shank', fn: "Barre d'acier qui transmet la rotation du manche à la pointe." },
      { id: 'pointe', n: 3, fr: 'Pointe', en: 'Tip', fn: "Extrémité qui s'engage dans l'empreinte de la vis : sa forme doit épouser cette empreinte." },
      { id: 'p-plat', n: 4, fr: 'Pointe plate', en: 'Slotted tip', fn: "Spatule rectangulaire qui entre dans la fente d'une vis à tête fendue." },
      { id: 'p-phillips', n: 5, fr: 'Pointe cruciforme Phillips', en: 'Phillips tip', fn: "Croix effilée aux flancs en pente, pour l'empreinte Phillips." },
      { id: 'p-pozidriv', n: 6, fr: 'Pointe cruciforme Pozidriv', en: 'Pozidriv tip', fn: "Croix plus trapue, à ailes droites et petites nervures entre les ailes, pour l'empreinte Pozidriv." },
      { id: 'p-torx', n: 7, fr: 'Pointe six lobes', en: 'Six-lobe (Torx-type) tip', fn: "Pointe en étoile à six lobes arrondis, pour l'empreinte six lobes." },
      { id: 'p-hex', n: 8, fr: 'Pointe six pans', en: 'Hex tip', fn: "Pointe à section hexagonale, pour l'empreinte six pans creux." }
    ]
  },
  {
    id: 'd1-empreintes-vis', file: 'd1-empreintes-vis.svg',
    title: "Huit têtes de vis vues de dessus : les empreintes",
    caption: "Schéma de principe : les formes sont exactes dans l'esprit, pas à l'échelle d'une taille précise. Les noms de marque (Phillips, Pozidriv, Torx, Torq-set) désignent ici des formes d'empreinte.",
    alt: "Huit têtes de vis rondes vues de dessus, sur deux rangées de quatre. Rangée du haut : empreinte à fente (une rainure droite qui traverse la tête) ; empreinte cruciforme Phillips (croix dont les branches s'affinent vers l'extérieur) ; empreinte cruciforme Pozidriv (croix à branches droites avec quatre fins traits rayonnants à 45 degrés entre les branches) ; empreinte six lobes (étoile à six lobes arrondis). Rangée du bas : empreinte six pans creux (creux hexagonal) ; empreinte cruciforme à branches décalées (quatre branches qui ne sont pas alignées deux à deux, comme les ailes d'un moulin) ; empreinte à trois ailes (trois branches décalées, à 120 degrés) ; tête hexagonale posée sur une rondelle, que l'on entraîne par l'extérieur.",
    purpose: "Reconnaître huit empreintes de vis d'après leur forme.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'fente', n: 1, fr: 'Empreinte à fente', en: 'Slotted drive', fn: "Une rainure droite traverse la tête ; elle s'entraîne avec une pointe plate." },
      { id: 'phillips', n: 2, fr: 'Empreinte Phillips', en: 'Phillips drive', fn: "Croix aux branches qui s'affinent vers l'extérieur, angles intérieurs arrondis." },
      { id: 'pozidriv', n: 3, fr: 'Empreinte Pozidriv', en: 'Pozidriv drive', fn: "Croix aux branches droites, avec quatre petits traits à 45° entre les branches : c'est le signe qui la distingue." },
      { id: 'torx', n: 4, fr: 'Empreinte six lobes', en: 'Six-lobe (Torx-type) drive', fn: "Étoile à six lobes arrondis, creusée dans la tête." },
      { id: 'hexcreux', n: 5, fr: 'Empreinte six pans creux', en: 'Hex socket drive', fn: "Creux hexagonal ; il s'entraîne avec une clé mâle ou un embout six pans." },
      { id: 'torqset', n: 6, fr: 'Empreinte cruciforme décalée', en: 'Offset cross (Torq-set-type) drive', fn: "Quatre branches décalées, comme les ailes d'un moulin ; elle demande son propre outil." },
      { id: 'triwing', n: 7, fr: 'Empreinte à trois ailes', en: 'Tri-wing drive', fn: "Trois branches décalées à 120°, qui forment un Y ; elle demande son propre outil." },
      { id: 'hexext', n: 8, fr: 'Tête hexagonale (entraînement par l’extérieur)', en: 'External hex head', fn: "Pas d'empreinte creuse : la tête elle-même a six faces, saisies par une clé ou une douille." }
    ]
  },
  {
    id: 'd1-prise-correcte', file: 'd1-prise-correcte.svg',
    title: "Six prises d'outil : deux correctes, quatre fautives",
    caption: "Schéma de principe, jeux exagérés pour être visibles. En haut, une clé plate sur un écrou six pans, vue de dessus ; en bas, un embout dans l'empreinte d'une vis, vue en coupe, avec l'axe de la vis en pointillé.",
    alt: "Six vignettes. En haut, trois clés à fourche vues de dessus sur un écrou six pans. Première : la fourche a la bonne taille et l'écrou est au fond, les deux mâchoires portent sur toute la longueur de deux pans opposés. Deuxième : la fourche est trop grande, l'écrou a tourné dans le jeu et seules deux arêtes touchent les mâchoires. Troisième : la fourche a la bonne taille mais n'est engagée que du bout, les mâchoires ne tiennent qu'une petite partie des pans. En bas, trois embouts de vissage dans la tête d'une vis, vus en coupe. Quatrième : l'embout remplit l'empreinte et il est dans l'axe de la vis. Cinquième : l'embout est trop petit, il touche le fond mais laisse un vide sur les côtés. Sixième : l'embout a la bonne taille mais il est incliné, il ne porte que d'un côté.",
    purpose: "Juger à l'œil si un outil épouse la fixation : taille, profondeur d'engagement, axe.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'fourche-fond', n: 1, fr: 'Clé de bonne taille, engagée à fond', en: 'Right-size spanner, fully engaged', fn: "Les deux mâchoires portent sur toute la longueur de deux pans : l'effort se répartit, les arêtes sont épargnées." },
      { id: 'fourche-grande', n: 2, fr: 'Clé trop grande', en: 'Oversize spanner', fn: "L'écrou flotte dans la fourche : seules deux arêtes touchent, elles s'écrasent et s'arrondissent." },
      { id: 'fourche-bout', n: 3, fr: 'Clé engagée du bout', en: 'Spanner engaged at the tip only', fn: "Bonne taille mais mal enfoncée : les mâchoires ne tiennent qu'un bout de pan, la clé peut glisser." },
      { id: 'embout-fond', n: 4, fr: 'Embout adapté, dans l’axe', en: 'Matching bit, in line', fn: "L'embout remplit l'empreinte et suit l'axe de la vis : il porte partout." },
      { id: 'embout-petit', n: 5, fr: 'Embout trop petit', en: 'Undersize bit', fn: "Il touche le fond mais laisse du vide sur les côtés : il porte mal et mâche l'empreinte." },
      { id: 'embout-incline', n: 6, fr: 'Embout incliné', en: 'Tilted bit', fn: "La bonne taille, mais hors de l'axe : il ne porte que d'un côté et tend à ressortir." }
    ]
  },
  {
    id: 'd1-cles-types', file: 'd1-cles-types.svg',
    title: "Cinq clés à main",
    caption: "Schéma de principe, sans dimension gravée. Les proportions et les angles sont simplifiés ; chaque clé existe en de nombreuses tailles.",
    alt: "Cinq clés dessinées à plat, l'une sous l'autre. Première : clé plate à fourche, avec une ouverture en U à chaque bout, de tailles différentes et légèrement inclinées. Deuxième : clé à œil, avec un anneau fermé à chaque bout dont l'intérieur est en étoile à douze pointes. Troisième : clé mixte, une fourche d'un côté et un œil de même taille de l'autre. Quatrième : clé à molette, avec un mors fixe, un mors mobile et une petite vis moletée dans la tête. Cinquième : clé mâle six pans en forme de L, de section hexagonale.",
    purpose: "Reconnaître cinq clés à main d'après leurs extrémités.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'cle-plate', n: 1, fr: 'Clé plate (à fourche)', en: 'Open-end spanner', fn: "Une ouverture en U à chaque bout : elle se glisse de côté sur deux faces d'un écrou." },
      { id: 'cle-oeil', n: 2, fr: 'Clé à œil', en: 'Box-end (ring) spanner', fn: "Un anneau fermé à chaque bout : il entoure complètement l'écrou ou la tête." },
      { id: 'cle-mixte', n: 3, fr: 'Clé mixte', en: 'Combination spanner', fn: "Une fourche d'un côté, un œil de la même taille de l'autre." },
      { id: 'cle-molette', n: 4, fr: 'Clé à molette', en: 'Adjustable spanner', fn: "Un mors fixe et un mors mobile que l'on règle avec une vis moletée." },
      { id: 'cle-male', n: 5, fr: 'Clé mâle six pans', en: 'Hex key', fn: "Barre hexagonale coudée en L, qui entre dans une empreinte six pans creux." }
    ]
  },
  {
    id: 'd1-douilles-cliquet', file: 'd1-douilles-cliquet.svg',
    title: "Cliquet, douilles et accessoires",
    caption: "Schéma de principe. La bande du milieu montre la chaîne d'entraînement pièces écartées, sur un même axe : de la main à la fixation, chaque pièce s'accouple à la suivante par un carré ou une empreinte.",
    alt: "Trois bandes. En haut, un cliquet vu de dessus : un manche, une tête ronde, un petit levier inverseur sur la tête et, en pointillé, le carré d'entraînement situé dessous. Au milieu, la chaîne d'entraînement vue de côté, pièces écartées sur un même axe : la tête du cliquet avec son carré mâle muni d'une bille, une rallonge (carré femelle, barre, carré mâle), un cardan articulé, puis une douille dont le carré femelle est dessiné en pointillé. En bas, vues en bout : une douille six pans au creux hexagonal, une douille douze pans au creux en étoile à douze pointes, le dos d'une douille avec son trou carré, puis un porte-embout et un embout de vissage à corps hexagonal.",
    purpose: "Reconnaître les éléments d'une chaîne cliquet - douille et savoir avec quoi chacun s'accouple.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'cliquet', n: 1, fr: 'Cliquet', en: 'Ratchet handle', fn: "Poignée à tête ronde qui entraîne dans un seul sens et revient librement dans l'autre." },
      { id: 'inverseur', n: 2, fr: 'Inverseur de sens', en: 'Direction lever', fn: "Petit levier sur la tête du cliquet : il choisit le sens dans lequel le cliquet entraîne." },
      { id: 'carre', n: 3, fr: "Carré d'entraînement", en: 'Drive square', fn: "Tenon carré (mâle) ou trou carré (femelle) par lequel s'accouplent cliquet, rallonge, cardan et douille." },
      { id: 'rallonge', n: 4, fr: 'Rallonge', en: 'Extension bar', fn: "Barre à deux carrés, qui éloigne la poignée de la fixation, en ligne droite." },
      { id: 'cardan', n: 5, fr: 'Cardan', en: 'Universal joint', fn: "Articulation entre deux carrés : elle permet un angle entre la poignée et la douille." },
      { id: 'douille6', n: 6, fr: 'Douille six pans', en: 'Six-point socket', fn: "Cylindre creux à creux hexagonal, qui entoure un écrou ou une tête hexagonale." },
      { id: 'douille12', n: 7, fr: 'Douille douze pans', en: 'Twelve-point socket', fn: "Cylindre creux dont le creux est une étoile à douze pointes ; elle s'engage dans plus de positions." },
      { id: 'porte-embout', n: 8, fr: 'Porte-embout', en: 'Bit holder', fn: "Pièce à carré qui reçoit un embout et transforme le cliquet en tournevis." },
      { id: 'embout', n: 9, fr: 'Embout de vissage', en: 'Screwdriver bit', fn: "Pointe interchangeable à tige hexagonale : plate, cruciforme, six lobes, six pans…" }
    ]
  },
  {
    id: 'd1-pinces', file: 'd1-pinces.svg',
    title: "Cinq pinces",
    caption: "Schéma de principe, sans dimension. Les poignées sont colorées par commodité de dessin : une couleur ne prouve rien sur l'isolation électrique d'une pince réelle.",
    alt: "Cinq pinces dessinées de profil, poignées à gauche et mors à droite. En haut à gauche, une pince universelle : bec large à bout carré avec une zone striée, un creux arrondi et des tranchants près de l'axe. En haut à droite, une pince à becs longs : deux becs fins qui s'effilent. Au milieu à gauche, une pince coupante diagonale : bec court et pointu dont toute la longueur est un tranchant. Au milieu à droite, une pince multiprise : poignées longues, mors striés inclinés et parallèles, et une glissière à crans dans la tête qui permet de changer l'ouverture. En bas, une pince-étau : un corps droit terminé par une vis de réglage moletée, un mors fixe, un mors mobile, une poignée basse et un petit levier de déverrouillage.",
    purpose: "Reconnaître cinq pinces d'après la forme de leurs mors et savoir à quoi elles servent.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'p-universelle', n: 1, fr: 'Pince universelle', en: 'Combination pliers', fn: "Mors plats striés, creux arrondi et tranchants près de l'axe : tient, plie légèrement, coupe un fil." },
      { id: 'p-becs', n: 2, fr: 'Pince à becs longs', en: 'Long-nose pliers', fn: "Deux becs fins et effilés : saisit un petit élément dans un endroit étroit." },
      { id: 'p-coupante', n: 3, fr: 'Pince coupante diagonale', en: 'Diagonal cutting pliers', fn: "Bec court dont les deux faces sont des tranchants : coupe un fil ou un collier." },
      { id: 'p-multiprise', n: 4, fr: 'Pince multiprise', en: 'Slip-joint (adjustable) pliers', fn: "Mors striés et glissière à crans : l'ouverture se règle pour saisir un objet gros ou rond." },
      { id: 'p-etau', n: 5, fr: 'Pince-étau', en: 'Locking pliers', fn: "Se verrouille sur l'objet par une vis de réglage et un levier : elle tient sans que la main serre." }
    ]
  },
  {
    id: 'd1-etat-outil', file: 'd1-etat-outil.svg',
    title: "Six outils à main : lesquels écarter ?",
    caption: "Schéma de principe, défauts volontairement exagérés. Les pointillés montrent la forme d'origine de l'outil. Sur un vrai outil, un défaut peut être plus discret : c'est pourquoi on regarde avant chaque emploi.",
    alt: "Six vignettes d'outils à main dessinés verticalement. Première ligne, trois tournevis : un tournevis plat dont la pointe est droite, aux angles nets ; un tournevis plat dont la pointe est arrondie et évasée, avec en pointillé la forme qu'elle devrait avoir ; un tournevis dont le manche est fendu par une fissure. Seconde ligne, trois clés plates vues de dessus : une clé dont les deux flancs de la bouche sont parallèles ; une clé dont la bouche est évasée, les flancs s'écartant vers l'ouverture, avec en pointillé la bouche d'origine ; une clé dont la poignée est prolongée par un tube sombre glissé dessus.",
    purpose: "Repérer un outil usé, déformé ou détourné, et le distinguer d'un outil en bon état.",
    chapters: ['d1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'tv-net', n: 1, fr: 'Tournevis plat à pointe nette', en: 'Slotted screwdriver, sound tip', fn: "Pointe droite aux angles vifs : elle s'engage au fond de la fente et porte sur toute sa largeur." },
      { id: 'tv-arrondi', n: 2, fr: 'Tournevis plat à pointe arrondie', en: 'Slotted screwdriver, rounded tip', fn: "Pointe évasée et arrondie par l'usage ou par un mauvais emploi : elle ne tient plus dans la fente." },
      { id: 'tv-fendu', n: 3, fr: 'Tournevis à manche fendu', en: 'Screwdriver with cracked handle', fn: "Manche fissuré : il peut se briser ou glisser, et laisser des éclats." },
      { id: 'cle-nette', n: 4, fr: 'Clé plate à bouche nette', en: 'Open-end spanner, sound jaws', fn: "Flancs parallèles : les mâchoires portent à plat sur les pans de l'écrou." },
      { id: 'cle-evasee', n: 5, fr: 'Clé plate à bouche évasée', en: 'Open-end spanner, spread jaws', fn: "Les mâchoires se sont écartées : la clé ne tient plus que sur les arêtes de l'écrou et peut l'arrondir." },
      { id: 'cle-tube', n: 6, fr: 'Clé prolongée par un tube', en: 'Spanner with pipe extension', fn: "Un tube glissé sur la poignée pour « faire levier » : c'est un détournement, l'effort n'est plus maîtrisé." }
    ]
  }
]);
