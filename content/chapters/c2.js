// Chapitre c2 — Identifier : référence, P/N, S/N, lot, indice (lot 5)
// Notions génériques d'identification industrielle. Toutes les références sont fictives (préfixe EX-).
CA.addChapter({
  id: 'c2',
  domain: 'C',
  order: 130,
  title: "Identifier : référence, P/N, S/N, lot, indice",
  short: "Lire une étiquette, puis comparer dossier, contenant et pièce",
  minutes: 40,
  comps: ['C1'],
  prereq: ['c1'],
  sources: ['rncp40664', 'cqpm-0289-observatoire', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Lire une étiquette d'identification et dire à quelle question répond chaque champ : désignation, P/N, indice, S/N, lot, quantité, date.",
    "Distinguer ce qui identifie un type de pièce (la référence), une version (l'indice), une fabrication (le lot) et un exemplaire (le numéro de série).",
    "Trouver l'identification selon la nature de la pièce : gravure, plaque, encre, repère de faisceau, sachet, étiquette volante.",
    "Comparer caractère par caractère trois sources — le dossier, l'étiquette, la pièce — et repérer celle qui ne concorde pas.",
    "Expliquer ce que prouve la lecture d'un code-barres, et ce qu'elle ne prouve pas.",
    "Reconnaître une pièce qui a perdu son identité et dire pourquoi on ne la devine pas.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Dans une cabine, beaucoup de pièces se ressemblent comme des sœurs. Deux supports de panneau peuvent avoir la même forme, la même couleur, le même poids dans la main, et ne différer que par un trou décalé de quelques millimètres ou par une épaisseur. Ton œil ne voit pas la différence. L'avion, lui, la « verra » : un panneau qui force à la pose, un jour qui apparaît entre deux habillages, une fixation qui ne travaille pas comme prévu.",
    "La seule façon sûre de savoir ce que tu tiens, c'est de **lire** son identification et de la comparer à ce que ton dossier demande. Ce geste prend une minute. Il évite de redéposer un panneau déjà fermé. Et il rend possible autre chose : le jour où un fabricant découvre un défaut sur une série de pièces, il faut retrouver dans quels avions elles sont montées. On n'y arrive que si chaque pose a été faite avec une pièce identifiée, et notée.",
    "Le référentiel de branche du CQP range d'ailleurs la conformité aux gammes parmi ses critères d'évaluation. Identifier la pièce avant de la poser en est la première preuve visible : l'évaluateur te regarde lire, pas seulement visser.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'c2-etiquette-fictive',
    intro: "Voici une étiquette comme on en trouve collée sur un sachet ou un carton de pièces. Elle est inventée pour ce cours (tout y commence par EX-), mais ses rubriques sont celles que tu liras à l'atelier. Avant d'aller plus loin, observe-la comme tu observerais un objet inconnu.",
    look: [
      "Quelle ligne te dit en français courant ce qu'est la pièce ? Suffirait-elle pour aller chercher la bonne pièce au magasin ?",
      "Trois lignes contiennent un code commençant par EX-. À ton avis, lequel est partagé par toutes les pièces du même modèle, et lequel n'appartient qu'à cette pièce-là ?",
      "À droite de la référence, une seule lettre : C. Que peut bien indiquer une lettre isolée à côté d'une référence ?",
      "En bas, deux dessins illisibles pour toi. Qui, ou quoi, les lit ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Le nom ne suffit pas : la désignation",
      fig: 'c2-etiquette-fictive',
      p: [
        "Regarde la ligne **DESC** (n° 2) : « SUPPORT DE PANNEAU ». C'est la [[Désignation]], le nom en clair de la pièce. Elle est faite pour les humains : d'un coup d'œil, elle te confirme que tu n'as pas pris un collier de câble à la place d'un support. Mais elle ne choisit rien. Dans une même cabine, de nombreuses pièces différentes s'appellent « support de panneau ».",
        "La ligne **MFR** (n° 1) nomme le [[Fabricant]]. Deux fabricants peuvent produire le même type de pièce ; l'information sert surtout quand on recherche l'origine d'un défaut.",
        "Beaucoup d'étiquettes industrielles sont rédigées en anglais abrégé, parce que les pièces voyagent d'un pays à l'autre. Ce n'est pas un code secret : une demi-douzaine d'abréviations reviennent presque partout, et tu les connaîtras toutes à la fin de ce chapitre.",
      ],
      callout: { kind: 'info', text: "L'ordre des champs, leur disposition et parfois leurs intitulés changent d'un fabricant à l'autre. Ce chapitre t'apprend les **questions** auxquelles une étiquette répond. Le format exact utilisé sur ton site, tu le découvriras sur de vraies étiquettes, avec ton formateur ou ton tuteur." },
    },
    {
      h: "La référence (P/N) : quel type de pièce ?",
      p: [
        "La [[Référence]], *part number* en anglais, abrégée **P/N** (n° 3), identifie un **type** de pièce. Toutes les pièces fabriquées selon la même définition portent la même référence, qu'il en existe trois ou trois mille. C'est elle que cite ta nomenclature ; c'est elle que tu cherches en premier.",
        "Une référence se lit **en entier**. Dans notre exemple fictif, `EX-48213-07` et `EX-48213-08` sont deux pièces différentes, alors que seul le dernier chiffre change. Ce que signifie la fin d'une référence — une variante, un côté, une finition — dépend du système de numérotation de chaque entreprise : n'essaie pas de le deviner. Retiens que **chaque caractère compte**, et que les différences se logent le plus souvent à la fin, là où l'œil fatigué ne va plus.",
        "Cas classique en cabine : la [[Pièce symétrique]]. Un support du côté gauche et un support du côté droit sont l'image l'un de l'autre dans un miroir. Posés sur l'établi, ils semblent identiques. Ils portent pourtant deux références distinctes, qui peuvent ne différer que d'un caractère, et l'un ne se monte pas à la place de l'autre : les trous ne tombent pas en face.",
      ],
    },
    {
      h: "L'indice : quelle version ?",
      p: [
        "Une pièce évolue au fil du temps : on déplace un trou, on change une matière, on corrige une cote. Pour ne pas confondre l'ancienne version et la nouvelle, la définition porte un [[Indice]] (*revision*, **REV** sur l'étiquette, n° 4) : une lettre ou un chiffre qui avance à chaque modification. Tu as déjà rencontré l'indice dans le cartouche d'un plan. Ici, il est sur la pièce ou sur son étiquette, et il dit **selon quelle version elle a été fabriquée**.",
        "La bonne version n'est pas « la plus récente ». C'est celle que demande **ton dossier, pour ton avion**. Un sachet marqué `REV D` alors que ta nomenclature exige l'indice C n'est pas une bonne surprise : c'est un écart. La version D est peut-être acceptable, peut-être pas. Cette décision appartient à ceux qui définissent la pièce, pas à celle qui la pose. Toi, tu constates que les deux ne concordent pas, et tu le dis **avant** de poser.",
      ],
      callout: { kind: 'warn', text: "L'indice d'un **plan** et l'indice d'une **pièce** ne sont pas forcément la même chose, et les entreprises ne les gèrent pas toutes de la même façon. La règle qui ne change pas : tu compares ce que tu lis sur la pièce à ce que la nomenclature de ton dossier exige, ligne pour ligne, sans traduire l'un par l'autre." },
    },
    {
      h: "Lot et numéro de série : la fabrication et l'exemplaire",
      fig: 'c2-pn-sn-lot',
      p: [
        "Sur cette figure, six supports et une seule référence (n° 1). À l'œil, impossible de les distinguer. Pourtant ils ne sont pas nés le même jour. Trois ont été fabriqués ensemble : ils forment le [[Lot]] `EX-L2406` (n° 2). Les trois autres viennent d'une fabrication plus tardive, le lot `EX-L2411` (n° 3). Un lot (*batch* en anglais) regroupe les pièces produites dans les mêmes conditions : même matière, même réglage de machine, même période.",
        "Chaque support porte en plus un [[Numéro de série]] (*serial number*, **S/N**) : un numéro que **lui seul** possède parmi toutes les pièces de même référence. Le S/N `EX-000412` désigne un exemplaire unique, comme une plaque d'immatriculation désigne une voiture précise et non un modèle.",
        "Toutes les pièces n'ont pas les deux. Les équipements que l'on suit un par un pendant toute leur vie portent en général un numéro de série. La petite visserie et les consommables n'en ont pas : on ne grave pas un numéro sur chaque rondelle. Ils sont suivis par lot.",
        "À quoi sert tout cela une fois la pièce posée ? À pouvoir **remonter le fil**. Si le fabricant découvre qu'un réglage était faux pendant la fabrication du lot `EX-L2411`, il faut retrouver ces pièces-là, et seulement celles-là, dans les avions où elles sont montées. Voilà pourquoi ta fiche de suivi te demande parfois de **relever** un numéro de série ou de lot : tu ne remplis pas une case pour faire plaisir à quelqu'un, tu attaches une pièce précise à un avion précis.",
      ],
      table: {
        head: ['Identifiant', 'Question', 'Qui le partage ?', 'Sur la figure'],
        rows: [
          ['Référence (P/N)', 'Quel type de pièce ?', 'Toutes les pièces de même définition', 'Les six supports'],
          ['Indice (REV)', 'Quelle version ?', 'Toutes les pièces faites selon cette version', 'Non dessiné : il se lit sur l\'étiquette'],
          ['Lot', 'Quelle fabrication ?', 'Les pièces produites ensemble', 'Trois supports par cadre'],
          ['Numéro de série (S/N)', 'Quel exemplaire ?', 'Personne : il est unique', 'Un seul support'],
        ],
      },
    },
    {
      h: "Quantité et dates : les deux champs qu'on oublie",
      p: [
        "**QTY** (n° 6 de l'étiquette) est la [[Quantité]] contenue dans le sachet ou le carton. Elle sert deux fois. Avant de commencer : as-tu assez de pièces pour finir l'opération ? Après : si le sachet en annonçait quatre, que tu en as posé trois et qu'il est vide, la quatrième est quelque part dans la zone, et il faut la retrouver.",
        "**DATE** (n° 8) situe la fabrication. Pour un support en métal, elle sert à l'historique. Pour un produit qui vieillit — mastic, colle, peinture — l'étiquette porte aussi une [[Date de péremption]]. Passé cette date, le produit ne s'utilise plus tel quel, même si le pot n'a jamais été ouvert et paraît parfait : ses propriétés ne sont plus garanties, et aucun coup d'œil ne permet de le vérifier.",
      ],
    },
    {
      h: "Où lire l'identification ?",
      fig: 'c2-marquage-piece',
      p: [
        "L'identification n'est pas toujours sur une étiquette collée. Elle se trouve là où la pièce peut la porter sans être abîmée ni gênée dans sa fonction. Les six vignettes montrent les cas que tu rencontreras ; avant de chercher, demande-toi donc **quel genre de pièce** tu as en main.",
      ],
      list: [
        "**Gravure (n° 1).** La référence est inscrite dans la matière : c'est un [[Marquage direct]]. Il suit la pièce partout, même sans emballage, mais il peut être petit, peu contrasté, ou caché une fois la pièce montée.",
        "**Plaque (n° 2).** Sur un équipement, une [[Plaque signalétique]] fixée au boîtier porte en général la référence et le numéro de série. C'est elle qu'on relève sur la fiche de suivi.",
        "**Encre (n° 3).** Imprimée ou tamponnée, souvent au dos d'un panneau d'habillage, du côté qui ne se verra plus. Elle peut pâlir au frottement ou sous un solvant.",
        "**Repère de faisceau (n° 4).** Un manchon ou une petite étiquette serrée autour du câble porte son [[Repère]]. Sans lui, deux faisceaux de même diamètre sont indiscernables.",
        "**Sachet étiqueté (n° 5).** Pour la visserie, l'identité est sur le sachet et nulle part ailleurs. Une vis sortie du sachet et posée sur la servante n'est plus qu'une vis.",
        "**Étiquette volante (n° 6).** Une [[Étiquette volante]], attachée par un lien, ne dit pas ce qu'est la pièce : elle donne son **statut**. Ici, « attente » : cette pièce n'est pas utilisable pour l'instant.",
      ],
      callout: { kind: 'tip', text: "Pour lire le dos d'un panneau, on ne le retourne pas sur le sol : on le pose face visible sur une surface propre et protégée. Chercher une référence ne doit pas créer une rayure." },
    },
    {
      h: "Codes-barres et codes 2D : la même information, pour une machine",
      p: [
        "Au bas de l'étiquette (n° 9), deux dessins que tu ne peux pas lire : un [[Code-barres]] et un [[Code 2D]]. Ils ne contiennent rien de mystérieux. Ce sont les mêmes caractères que ceux écrits en clair — le plus souvent la référence, le numéro de série ou le lot — traduits dans une forme qu'un lecteur optique déchiffre en une fraction de seconde.",
        "Le code-barres classique aligne des barres et des espaces de largeurs différentes ; il code une suite assez courte de caractères. Le code 2D est une grille de petites cases sombres et claires : il contient davantage d'informations sur une surface plus petite, ce qui permet de le marquer sur une pièce étroite. Deux familles sont très répandues : le **QR code**, reconnaissable à ses trois carrés dans les coins, et le **Data Matrix**, bordé de deux côtés pleins qui forment un L.",
        "Ce que le scan t'apporte : pas de faute de frappe, pas de zéro pris pour la lettre O, une saisie immédiate dans le système. Ce qu'il ne t'apporte pas : la preuve que le contenu correspond à l'étiquette. Le lecteur lit **l'étiquette**. Si une pièce a été rangée dans le mauvais sachet, le scan sera parfaitement juste… à propos du sachet. La comparaison avec la pièce reste ton travail.",
      ],
    },
    {
      h: "Comparer trois sources avant de poser",
      fig: 'c2-comparer-trois-sources',
      p: [
        "Avant de poser, trois sources doivent dire la même chose. Le **dossier** dit ce qui est demandé. L'**étiquette** du contenant dit ce qui est annoncé. La **pièce** dit ce qu'elle est. Deux sources d'accord ne suffisent pas : sur la figure, la nomenclature et l'étiquette concordent parfaitement, et c'est la pièce qui ne suit pas.",
        "Pour comparer deux suites de caractères, l'œil triche : il reconnaît le début et « complète » la fin tout seul. Trois astuces d'atelier l'en empêchent. Lis par **petits groupes** (`EX` – `48213` – `07`) plutôt que d'un seul trait. Vérifie **la fin en premier**, là où se cachent les variantes. Et méfie-toi des caractères jumeaux : `0` et `O`, `1` et `I`, `8` et `B`, `5` et `S`. Si un caractère reste douteux, on ne tranche pas au jugé : on cherche une autre source, ou on demande.",
        "La comparaison suit un ordre précis, du document vers la pièce, parce que c'est le document qui fait foi :",
      ],
      list: [
        "D'abord la nomenclature : trouve la ligne par son repère (ici `REP 12`), lis la référence et l'indice demandés.",
        "Ensuite l'étiquette du contenant : même référence ? même indice ?",
        "Puis la pièce elle-même, sortie du contenant : même référence ? même indice ?",
        "Enfin, si la gamme le demande, relève le numéro de série ou de lot **à ce moment-là**, la pièce et son étiquette sous les yeux.",
      ],
      callout: { kind: 'tip', text: "Pose le document **à côté** de la pièce, pas dans ta mémoire. Recopier une référence de tête, même à trente secondes d'intervalle, c'est ouvrir la porte aux chiffres inversés." },
    },
    {
      h: "Quand l'identité manque, se lit mal ou ne concorde pas",
      p: [
        "Trois situations reviennent à l'atelier. L'**étiquette illisible** : encre effacée, étiquette déchirée, code rayé. La **pièce orpheline** : sortie de son sachet, retrouvée sur une servante, sans rien qui dise d'où elle vient. Le **désaccord** : l'étiquette annonce une chose et la pièce en porte une autre.",
        "Dans les trois cas, la pièce a perdu ce qui la rendait utilisable : une [[Identification]] **prouvée**. Elle est peut-être parfaitement bonne. Mais « peut-être » n'est pas une information que l'on monte dans un avion. La ressemblance avec la pièce d'à côté, le souvenir d'un collègue, l'endroit où on l'a trouvée ne remplacent pas une identification.",
        "Ce que tu fais alors ne demande aucune autorisation. Tu **ne la poses pas**. Tu la mets **à part**, pour qu'elle ne retourne pas parmi les pièces bonnes. Tu la marques comme pièce non identifiée — c'est exactement le rôle de l'étiquette volante de la vignette n° 6. Et tu préviens ton chef d'équipe. La suite (retrouver son origine, la faire contrôler, l'écarter) suit la procédure de ton entreprise ; le chapitre suivant t'en donne la logique générale.",
      ],
    },
  ],

  // fiches de reconnaissance : où se trouve l'identification
  parts: [
    {
      fig: 'c2-marquage-piece', part: 'gravure',
      fr: 'Marquage direct gravé', en: 'Direct part marking (engraved)',
      fn: "Inscrit la référence, parfois l'indice, dans la matière même de la pièce.",
      where: "Sur une face plane d'une pièce métallique ou plastique rigide, souvent une face qui sera cachée après montage.",
      interfaces: "Se compare à la ligne de la nomenclature et à l'étiquette du contenant.",
      risks: "Petit et peu contrasté : un 8 se lit 3, un 0 se lit O. Illisible sous une couche de peinture ou de mastic.",
      vigilance: "Lis-le avant montage, sous un bon éclairage, en inclinant la pièce pour faire jouer la lumière.",
      mistakes: "Se contenter de l'étiquette du sachet parce que la gravure est « trop petite pour être lue ».",
    },
    {
      fig: 'c2-marquage-piece', part: 'plaque',
      fr: 'Plaque signalétique', en: 'Data plate (nameplate)',
      fn: "Carte d'identité d'un équipement : référence, numéro de série, souvent fabricant et date.",
      where: "Fixée sur le boîtier ou le bâti de l'équipement, sur une face accessible avant installation.",
      interfaces: "Son numéro de série se relève sur la fiche de suivi quand la gamme le demande.",
      risks: "Devient inaccessible une fois l'équipement en place ; une plaque arrachée ou repeinte fait perdre l'identité de l'équipement.",
      vigilance: "Relève ce qu'on te demande **avant** de présenter l'équipement, et ne colle ni ne peins rien dessus.",
      mistakes: "Recopier la référence dans la case du numéro de série, parce que les deux lignes se suivent sur la plaque.",
    },
    {
      fig: 'c2-marquage-piece', part: 'encre',
      fr: "Marquage à l'encre", en: 'Ink marking',
      fn: "Identifie les pièces qu'on ne peut pas graver sans les abîmer, comme les panneaux d'habillage.",
      where: "Au dos de la pièce, côté non visible en cabine.",
      interfaces: "Se compare à la nomenclature ; c'est souvent la seule identification du panneau une fois déballé.",
      risks: "S'efface au frottement ou au contact d'un solvant ; un marquage à moitié effacé invite à « compléter » de tête.",
      vigilance: "Manipule le dos avec des gants propres et ne nettoie pas la zone marquée sans y être invitée par l'instruction.",
      mistakes: "Identifier un panneau à sa forme (« c'est celui avec le hublot ») sans regarder son dos.",
    },
    {
      fig: 'c2-marquage-piece', part: 'manchon',
      fr: 'Repère de faisceau', en: 'Harness identification sleeve',
      fn: "Dit quel câble ou quel faisceau on a en main parmi des dizaines qui se ressemblent.",
      where: "Autour du faisceau, près de ses extrémités, parfois répété le long du parcours.",
      interfaces: "Renvoie au schéma ou à l'instruction qui dit où ce faisceau chemine et où il se branche.",
      risks: "Glisse, tourne ou se retrouve masqué par un collier ; deux faisceaux voisins sont alors intervertis.",
      vigilance: "Lis le repère des deux côtés avant de fixer, et ne le recouvre pas avec un collier.",
      mistakes: "Suivre le faisceau « à la couleur » ou « à la longueur » au lieu de lire son repère.",
    },
    {
      fig: 'c2-marquage-piece', part: 'sachet',
      fr: 'Sachet étiqueté', en: 'Labelled bag',
      fn: "Porte à la place des pièces la référence et le lot de la petite visserie et des petits composants.",
      where: "Livré au poste avec les pièces de l'opération.",
      interfaces: "Sa quantité annoncée sert de compte de départ ; son lot se relève si la fiche de suivi le prévoit.",
      risks: "Deux sachets ouverts côte à côte : les contenus se mélangent, et plus rien ne les sépare.",
      vigilance: "Un seul sachet ouvert à la fois ; ne sors que le nombre de pièces de l'opération ; garde le sachet jusqu'au relevé.",
      mistakes: "Vider le sachet dans une coupelle « pour aller plus vite » et jeter l'étiquette avec lui.",
    },
    {
      fig: 'c2-marquage-piece', part: 'volante',
      fr: 'Étiquette volante', en: 'Hang tag',
      fn: "Donne le statut d'une pièce : en attente, non identifiée, à contrôler.",
      where: "Attachée par un lien à la pièce elle-même, jamais à son seul emballage.",
      interfaces: "Renvoie à la personne ou au document qui dira quoi faire de la pièce.",
      risks: "Une étiquette tombée ou retirée « pour ne pas gêner » remet la pièce en circulation.",
      vigilance: "Ne retire jamais une étiquette de statut que tu n'as pas posée ; si elle te gêne, demande.",
      mistakes: "Lire « attente » comme « en attente d'être posée » et monter la pièce.",
    },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: 'Identification', en: 'Identification', abbr: '', def: "Ensemble des inscriptions qui prouvent ce qu'est une pièce : référence, indice, numéro de série ou de lot.", tip: "Une pièce sans identification est un objet, pas une pièce avion." },
    { fr: 'Désignation', en: 'Description', abbr: 'DESC', def: "Nom en clair d'une pièce, lisible par tous mais trop vague pour la choisir." },
    { fr: 'Référence', en: 'Part number', abbr: 'P/N', def: "Code qui identifie un type de pièce ; toutes les pièces de même définition le portent.", tip: "P/N = le modèle. Tous les jumeaux ont le même." },
    { fr: 'Indice', en: 'Revision', abbr: 'REV', def: "Lettre ou chiffre qui indique la version de la définition selon laquelle la pièce a été fabriquée.", tip: "Le bon indice est celui du dossier, pas le plus récent." },
    { fr: 'Numéro de série', en: 'Serial number', abbr: 'S/N', def: "Numéro propre à un seul exemplaire parmi toutes les pièces de même référence.", tip: "S/N = la plaque d'immatriculation de la pièce." },
    { fr: 'Lot', en: 'Batch', abbr: '', def: "Groupe de pièces ou quantité de produit fabriqués ensemble, dans les mêmes conditions.", tip: "Même fournée de pain : même lot." },
    { fr: 'Fabricant', en: 'Manufacturer', abbr: 'MFR', def: "Entreprise qui a fabriqué la pièce ; son nom ou son code figure sur l'étiquette." },
    { fr: 'Quantité', en: 'Quantity', abbr: 'QTY', def: "Nombre de pièces contenues dans le sachet ou le carton étiqueté." },
    { fr: 'Repère', en: 'Item number', abbr: 'REP', def: "Numéro ou code court qui désigne une ligne de la nomenclature, une bulle du plan ou un élément sur l'avion, comme un faisceau." },
    { fr: 'Pièce symétrique', en: 'Handed part (left-hand / right-hand)', abbr: '', def: "Pièce qui existe en version gauche et en version droite, images l'une de l'autre dans un miroir, avec deux références distinctes." },
    { fr: 'Marquage direct', en: 'Direct part marking', abbr: '', def: "Identification inscrite sur la pièce elle-même, par gravure ou à l'encre, et non sur une étiquette rapportée." },
    { fr: 'Plaque signalétique', en: 'Data plate', abbr: '', def: "Plaque fixée sur un équipement, qui porte sa référence et son numéro de série." },
    { fr: 'Étiquette volante', en: 'Hang tag', abbr: '', def: "Étiquette attachée par un lien à une pièce pour indiquer son statut, par exemple en attente." },
    { fr: 'Code-barres', en: 'Barcode', abbr: '', def: "Suite de barres et d'espaces qu'un lecteur optique traduit en caractères." },
    { fr: 'Code 2D', en: 'Two-dimensional code', abbr: '', def: "Grille de petites cases lisible par un lecteur optique ; les familles QR code et Data Matrix sont les plus courantes.", tip: "Trois carrés dans les coins : QR. Deux bords pleins en L : Data Matrix." },
    { fr: 'Date de péremption', en: 'Expiry date', abbr: '', def: "Date après laquelle un produit qui vieillit, comme un mastic ou une colle, ne doit plus être utilisé tel quel." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Mardi, 7 h 40 : quatre supports et un intrus",
    body: [
      "Tu commences la pose des supports de panneau entre deux cadres de la zone EX-B. La nomenclature de ton dossier demande, au repère 12, la référence `EX-48213-07` à l'indice C, quantité 4. Au magasin, on t'a remis un sachet. Tu lis son étiquette **avant** de l'ouvrir.",
      "Référence, groupe par groupe : `EX` – `48213` – `07`. Elle concorde. Indice C : il concorde. Quantité 4 : c'est ce qu'il te faut. Tu ouvres le sachet au-dessus de ta coupelle et tu sors **une** pièce. Sur l'aile du support, gravé petit : `EX-48213-07 C`. Troisième source d'accord.",
      "La fiche de suivi a une case « lot » pour cette opération. Tu y recopies `EX-L2406` maintenant, le sachet sous les yeux, pas en fin de poste quand il sera parti à la poubelle.",
      "Au troisième support, quelque chose t'arrête : il brille un peu plus que les autres. Même forme, mêmes trous à première vue. Tu le retournes et tu lis en commençant par la fin : `08`. La gravure complète dit `EX-48213-08 C`. Un intrus dans le bon sachet.",
      "Tu ne le poses pas. Tu ne le remets pas dans le sachet non plus : tu le mets à part, tu préviens ta cheffe d'équipe et tu lui montres les deux gravures côte à côte. Il te manque une pièce pour finir l'opération. C'est contrariant. C'est beaucoup moins grave qu'un support faux derrière un panneau fermé.",
      "Bilan : quatre lectures de gravure, deux minutes. Sans la troisième source, l'intrus était posé, et l'étiquette — parfaitement juste — n'aurait rien vu.",
    ],
    doc: {
      title: "Étiquette du sachet — document fictif pédagogique",
      lines: [
        ['MFR', 'EX-ATELIER NORD'],
        ['DESC', 'SUPPORT DE PANNEAU'],
        ['P/N', 'EX-48213-07'],
        ['REV', 'C'],
        ['LOT', 'EX-L2406'],
        ['QTY', '4'],
        ['DATE', '2026-03'],
      ],
      note: "Pas de ligne S/N : ces supports sont suivis par lot. L'étiquette décrit ce que le sachet doit contenir, pas ce qu'il contient réellement.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Comparer pas à pas : nomenclature, étiquette, pièce",
    fig: 'c2-comparer-trois-sources',
    steps: [
      { label: "Partir du repère", text: "Tu ne pars ni de la pièce ni du sachet : tu pars du dossier. Dans la nomenclature, tu cherches la ligne de ton opération par son repère, ici REP 12. C'est lui qui relie la ligne à un emplacement du plan.", hl: ['nomen-rep'] },
      { label: "Lire la référence demandée", text: "Sur cette ligne, la référence exigée : EX-48213-07. Lis-la en trois groupes et garde le doigt dessus, ou pose une règle sous la ligne : tu vas y revenir deux fois.", hl: ['nomen-pn'] },
      { label: "Lire l'indice demandé", text: "Toujours sur la même ligne : indice C. Tu as maintenant les deux informations que les autres sources devront répéter à l'identique.", hl: ['nomen-ind'] },
      { label: "Passer à l'étiquette", text: "Sur le sachet : P/N EX-48213-07, REV C. Commence par la fin de la référence (07), puis remonte. Les deux champs concordent avec le dossier. À ce stade, beaucoup s'arrêtent. Pas toi.", hl: ['etiq-pn', 'etiq-ind'] },
      { label: "Sortir la pièce", text: "Tu sors la pièce et tu lis sa gravure, là encore par la fin : 08. Puis l'indice : C. L'indice concorde ; la référence, non.", hl: ['piece-pn', 'piece-ind'] },
      { label: "Conclure", text: "Deux sources sur trois disent 07, la pièce dit 08. C'est la pièce qui sera montée dans l'avion, pas son étiquette : elle n'est pas celle que demande le dossier. Tu ne la poses pas, tu la mets à part et tu signales ce que tu as lu, caractère pour caractère.", hl: ['nomen-pn', 'piece-pn'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    {
      id: 'c2-a1', type: 'hottap', fig: 'c2-etiquette-fictive',
      concept: "Champs d'une étiquette",
      q: "Touche sur l'étiquette le champ qui répond à chaque question posée.",
      targets: [
        { prompt: "Quel champ identifie le type de pièce, celui que cite la nomenclature ?", part: 'pn' },
        { prompt: "Quel champ dit selon quelle version la pièce a été fabriquée ?", part: 'indice' },
        { prompt: "Quel champ cet exemplaire est-il le seul à porter ?", part: 'sn' },
        { prompt: "Quel champ permettrait de retrouver toutes les pièces fabriquées en même temps que celle-ci ?", part: 'lot' },
        { prompt: "Quelle zone un lecteur optique sait-il lire, mais pas toi ?", part: 'code' },
      ],
      explain: "P/N : le type. REV : la version. S/N : l'exemplaire unique. LOT : la fabrication commune. Les codes du bas reprennent ces mêmes informations sous une forme lisible par une machine ; ils n'ajoutent rien que tu ne puisses lire en clair au-dessus.",
    },
    {
      id: 'c2-a2', type: 'sort',
      concept: "Type, fabrication, exemplaire",
      q: "Classe chaque description : parle-t-elle d'un type de pièce, d'une fabrication ou d'un seul exemplaire ?",
      bins: ['Un type de pièce (référence)', 'Une fabrication (lot)', 'Un seul exemplaire (S/N)'],
      items: [
        { t: "Ce que la nomenclature écrit en face du repère 12", bin: 0, why: "La nomenclature demande un type de pièce : elle cite une référence, pas un exemplaire précis." },
        { t: "Le code imprimé au dos de tous les panneaux latéraux d'un même modèle", bin: 0, why: "Commun à tous les panneaux de ce modèle : c'est leur référence." },
        { t: "Le code qui change entre deux sachets de vis de même référence livrés à six mois d'écart", bin: 1, why: "Même type de vis, deux fabrications différentes : c'est le numéro de lot qui change." },
        { t: "Ce que cite un fabricant quand il rappelle les pièces produites pendant que sa machine était mal réglée", bin: 1, why: "Il vise une fabrication entière, ni tout le type ni une seule pièce : un lot." },
        { t: "Le numéro relevé sur la plaque d'un boîtier, différent de celui du boîtier voisin pourtant identique", bin: 2, why: "Deux boîtiers de même référence, deux numéros différents : c'est le numéro de série." },
        { t: "Ce qui permet d'écrire : c'est cet équipement-là, et pas un autre, qui est monté à cette place", bin: 2, why: "Seul le numéro de série désigne un exemplaire unique." },
      ],
      explain: "Trois niveaux emboîtés, du plus large au plus étroit : la référence couvre toutes les pièces d'un type, le lot celles d'une fabrication, le numéro de série une seule. Pour savoir de quel niveau on parle, demande-toi : combien de pièces partagent cette inscription ?",
    },
    {
      id: 'c2-a3', type: 'input',
      concept: "Rechercher une information dans un document",
      q: "Ta fiche de suivi demande le numéro de lot des supports posés au repère 12. Lis le bon de livraison et saisis ce numéro de lot.",
      doc: {
        title: "Bon de livraison au poste — document fictif pédagogique",
        table: {
          head: ['REP', 'DESC', 'P/N', 'REV', 'LOT ou S/N', 'QTY'],
          rows: [
            ['11', 'CALE', 'EX-48190-02', 'A', 'LOT EX-L2398', '8'],
            ['12', 'SUPPORT DE PANNEAU', 'EX-48213-07', 'C', 'LOT EX-L2406', '4'],
            ['13', 'SUPPORT DE PANNEAU', 'EX-48213-08', 'C', 'LOT EX-L2407', '4'],
            ['14', 'BOÎTIER', 'EX-60031-01', 'B', 'S/N EX-000958', '1'],
          ],
        },
        note: "Document inventé pour l'exercice : toutes les références commencent par EX-.",
      },
      answers: ['EX-L2406', 'L2406'],
      explain: "On entre dans le tableau par le repère, pas par la désignation : deux lignes s'appellent « support de panneau ». La ligne 12 donne le lot EX-L2406. La ligne 13 porte une référence qui finit par 08 et un lot qui finit par 07 : c'est le piège du jour, et c'est pour cela qu'on lit une ligne entière en suivant du doigt.",
    },
    {
      id: 'c2-a4', type: 'hotfind', fig: 'c2-comparer-trois-sources',
      concept: "Comparaison à trois sources",
      q: "Les trois sources de la figure devraient concorder. Touche le ou les champs qui ne correspondent pas à ce que demande la nomenclature.",
      targets: ['piece-pn'],
      notes: { 'piece-pn': "La gravure finit par 08 alors que la nomenclature et l'étiquette disent 07. Un seul chiffre, une autre pièce." },
      explain: "Un seul champ ne concorde pas : la référence gravée sur la pièce. Les deux indices lus (étiquette et pièce) valent C, comme le dossier. L'étiquette est juste, mais elle décrit un sachet ; c'est la pièce qui serait montée. D'où la règle : on va jusqu'à la troisième source.",
    },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Lire le début de la référence, reconnaître « 48213 » et s'arrêter là.", why: "Les variantes d'une même famille partagent le début ; ce qui les sépare est à la fin. Tu valides la famille, pas la pièce.", better: "Lire par groupes jusqu'au dernier caractère, et vérifier la fin en premier." },
    { error: "Choisir une pièce sur sa désignation : « il me faut un support de panneau, en voilà un ».", why: "La désignation est commune à de nombreuses pièces différentes ; elle ne dit ni la variante ni le côté.", better: "Entrer dans la nomenclature par le repère et prendre la référence écrite sur cette ligne." },
    { error: "Se réjouir d'un indice « plus récent » que celui du dossier et poser la pièce.", why: "Rien ne dit que la nouvelle version convient à ton avion : un trou a pu être déplacé pour une autre configuration.", better: "Constater que l'indice ne concorde pas et le signaler avant la pose, avec les deux indices exacts." },
    { error: "Jeter le sachet ou le carton dès l'ouverture, puis remplir la case « lot » en fin de poste.", why: "L'étiquette est partie à la benne ; il ne reste que ta mémoire, ou la tentation de recopier le lot du sachet voisin.", better: "Relever le lot ou le numéro de série au moment de la pose, puis seulement jeter le contenant." },
    { error: "Ouvrir deux sachets de visserie proche et piocher dans les deux.", why: "Hors du sachet, deux vis presque identiques ne portent plus aucune identité ; un mélange ne se trie pas à l'œil.", better: "Un sachet ouvert à la fois, refermé avant d'ouvrir le suivant ; ne sortir que le compte de l'opération." },
    { error: "Recopier la référence dans la case « numéro de série » de la fiche de suivi.", why: "La trace dit alors que tous les avions portent le même exemplaire : elle ne permet plus de retrouver celui-ci.", better: "Repérer d'abord les intitulés P/N et S/N sur la plaque, puis recopier chaque ligne dans sa case." },
    { error: "Considérer qu'une pièce « passée au scan » est vérifiée.", why: "Le lecteur a lu l'étiquette du contenant. Il n'a aucun moyen de savoir ce qu'il y a dedans.", better: "Après le scan, sortir la pièce et lire son propre marquage." },
    { error: "Compléter de tête un marquage à moitié effacé : « ça doit être un 7 ».", why: "Tu fabriques une identité au lieu de la lire ; si tu te trompes, personne ne le saura avant longtemps.", better: "Chercher une autre source pour ce caractère ; s'il n'y en a pas, traiter la pièce comme non identifiée." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Le panneau dont l'encre a pâli",
      fig: 'c2-marquage-piece',
      context: [
        "Mercredi, 14 h 10. Tu dois poser un panneau latéral au repère 15. La nomenclature demande `EX-52107-02`, indice B. Le panneau t'attend sur son chariot, déjà déballé par l'équipe du matin : plus de carton, plus d'étiquette.",
        "Tu le poses face visible sur la table protégée et tu regardes son dos. Le marquage à l'encre est là, mais frotté : tu lis nettement `EX-5210`, puis deux caractères brouillés, puis `-02`. Pas d'indice lisible.",
        "Ton collègue Mehdi passe : « C'est le même que celui que j'ai posé hier au repère 14, regarde, même hublot, même découpe. Vas-y. »",
      ],
      question: "Que fais-tu de ce panneau ?",
      options: [
        { t: "Je le pose : le début et la fin de la référence concordent, et Mehdi confirme que c'est le bon modèle.", why: "Tu as deux caractères illisibles et aucun indice. Le début et la fin concordaient aussi entre 07 et 08 dans la leçon. Et le panneau du repère 14 n'est pas celui du repère 15 : deux panneaux voisins peuvent être symétriques ou différer d'une découpe." },
        { t: "Je repasse les caractères manquants au feutre pour que le marquage soit de nouveau lisible, puis je pose.", why: "Tu écris sur la pièce ce que tu supposes : tu fabriques une identité. Le suivant lira ton feutre comme un marquage d'origine." },
        { t: "Je ne le pose pas ; je cherche une autre source (carton, bon de livraison) et, faute de preuve, je le mets à part, marqué « non identifié », et je préviens mon chef d'équipe.", ok: true, why: "Une identification se lit en entier ou ne vaut rien. Si le carton ou le bon de livraison permet de prouver la référence et l'indice, le doute est levé proprement ; sinon, la pièce attend à l'écart, étiquetée, et quelqu'un d'habilité décide." },
        { t: "Je le présente à l'emplacement : s'il tombe en face des fixations, c'est que c'est le bon.", why: "Un panneau d'un autre indice peut se monter parfaitement et différer par ce que tu ne vois pas : une matière, un renfort, une découpe destinée à un équipement. Et le présenter, c'est déjà risquer de marquer l'habillage voisin pour rien." },
      ],
      debrief: "Ce qui manque ici, ce n'est pas un panneau, c'est une preuve. La forme, le hublot, l'avis d'un collègue expérimenté sont des indices ; aucun n'est une identification. La règle de métier : une référence partiellement lue n'est pas lue, et un indice absent n'est pas « sûrement le bon ». Chercher une deuxième source prend cinq minutes ; déposer un panneau posé par erreur prend une demi-journée et abîme rarement moins d'une pièce.",
    },
    {
      title: "Cinq vis sans sachet",
      context: [
        "Vendredi, 13 h 45, fin de poste. En rangeant ta servante, tu trouves cinq vis dans le fond d'une coupelle. Elles sont propres, neuves. Deux sachets entamés sont posés à côté : l'un étiqueté `EX-70412-05`, l'autre `EX-70412-06`. À l'œil, les vis des deux sachets ont la même tête et le même diamètre ; la longueur diffère à peine.",
        "Ta collègue Inès, pressée de partir : « Remets-les dans le sachet le moins rempli, c'est forcément de là qu'elles viennent. »",
      ],
      question: "Que fais-tu des cinq vis ?",
      options: [
        { t: "Je les remets dans le sachet le moins rempli : c'est le plus logique.", why: "« Logique » n'est pas « prouvé ». Si une seule vient de l'autre sachet, tu viens de créer un sachet juste sur l'étiquette et faux à l'intérieur : le piège parfait pour la personne qui l'ouvrira lundi." },
        { t: "Je les compare une à une aux vis des deux sachets et je les répartis selon leur longueur.", why: "Tu deviens à toi seule un service de contrôle, sans moyen de mesure prévu ni exigence sous les yeux. Deux longueurs proches se confondent, et rien ne dit que la longueur est la seule différence entre les deux références." },
        { t: "Je ne les remets dans aucun sachet : je les isole dans un contenant marqué « non identifié », je préviens mon chef d'équipe, et je vérifie mon compte de vis posées aujourd'hui.", ok: true, why: "Hors de leur sachet, ces vis n'ont plus d'identité : elles ne peuvent redevenir des pièces avion que par une décision qui ne t'appartient pas. Et cinq vis en trop posent une seconde question : sont-elles vraiment en trop, ou manquent-elles quelque part dans l'avion ?" },
        { t: "Je les jette à la poubelle de l'atelier : cinq vis, ce n'est rien.", why: "Tu fais disparaître la seule trace d'une anomalie. Si ces vis manquent sur un panneau posé ce matin, personne ne le saura. Et une pièce avion ne quitte pas le circuit par la poubelle d'atelier." },
      ],
      debrief: "Deux leçons dans cette coupelle. La première : pour la visserie, l'identité **est** le sachet ; une vis qui en sort ne peut pas y retourner sur une supposition. La seconde : une pièce en trop est une information, pas un rebut. Avant de quitter le poste, tu recomptes ce que tu as posé par rapport à ce que la gamme demandait. Le contenant « non identifié » et la suite donnée dépendent des règles de ton site ; le réflexe d'isoler et de dire, lui, vaut partout.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    {
      id: 'c2-q1', type: 'mcq', fig: 'c2-pn-sn-lot',
      concept: "Référence, lot, numéro de série",
      q: "Regarde les deux supports n° 4 et n° 5 de la figure. Choisis ce qui permet de les distinguer l'un de l'autre.",
      options: [
        { t: "Leur référence (P/N)", why: "Les six supports portent la même référence : elle dit qu'ils sont du même type, pas lequel est lequel." },
        { t: "Leur numéro de lot", why: "Les n° 4 et 5 sont dans le même cadre : ils viennent de la même fabrication et portent le même lot." },
        { t: "Leur numéro de série (S/N)", ok: true, why: "EX-000411 pour l'un, EX-000412 pour l'autre : seul le numéro de série sépare deux pièces de même référence et de même lot." },
        { t: "Leur désignation", why: "La désignation est le nom en clair, « support de panneau » pour les six : elle distingue encore moins que la référence." },
      ],
      explain: "Même type (une référence), même fabrication (un lot), deux exemplaires (deux numéros de série). Plus on descend dans les niveaux, moins il y a de pièces qui partagent l'inscription ; au dernier niveau, il n'en reste qu'une.",
    },
    {
      id: 'c2-q2', type: 'hotfind', fig: 'c2-pn-sn-lot',
      concept: "Retrouver un lot",
      q: "Le fabricant signale un défaut de fabrication sur le lot EX-L2411. Touche chacune des pièces à retrouver (les pièces elles-mêmes, pas les cadres).",
      targets: ['p527', 'p528', 'p529'],
      notes: {
        p527: "S/N EX-000527 : dans le cadre du lot EX-L2411, donc concernée.",
        p528: "S/N EX-000528 : même fabrication, concernée.",
        p529: "S/N EX-000529 : même fabrication, concernée.",
      },
      explain: "Le rappel vise une fabrication : les trois pièces du lot EX-L2411, et elles seules. Les trois autres ont la même référence mais viennent d'une autre fabrication. Sans relevé du lot à la pose, il aurait fallu vérifier les six, dans tous les avions où cette référence est montée.",
    },
    {
      id: 'c2-q3', type: 'input',
      concept: "Entrer dans une nomenclature par la référence",
      q: "Tu tiens une pièce gravée EX-48213-08. À quel repère de cette nomenclature correspond-elle ? Saisis le numéro du repère.",
      doc: {
        title: "Extrait de nomenclature — document fictif pédagogique",
        table: {
          head: ['REP', 'P/N', 'IND', 'DÉSIGNATION', 'QTÉ'],
          rows: [
            ['10', 'EX-48190-02', 'A', 'CALE', '8'],
            ['12', 'EX-48213-07', 'C', 'SUPPORT DE PANNEAU', '4'],
            ['13', 'EX-48213-08', 'C', 'SUPPORT DE PANNEAU', '4'],
            ['15', 'EX-52107-02', 'B', 'PANNEAU LATÉRAL', '1'],
          ],
        },
        note: "Document inventé pour l'exercice.",
      },
      answers: ['13', 'REP 13', 'REP13'],
      explain: "Deux lignes portent la même désignation ; seule la fin de la référence les sépare. La pièce gravée 08 va au repère 13. Posée au repère 12, elle aurait porté le bon nom, le bon indice, et la mauvaise référence.",
    },
    {
      id: 'c2-q4', type: 'multi',
      concept: "Indice non concordant",
      q: "Ta nomenclature demande EX-48213-07 à l'indice C. Le sachet livré est étiqueté P/N EX-48213-07, REV D. Coche toutes les affirmations justes.",
      options: [
        { t: "La référence concorde, l'indice ne concorde pas : il y a un écart.", ok: true, why: "C'est exactement le constat : un champ sur deux diffère de ce que le dossier exige." },
        { t: "D vient après C : la pièce est une version améliorée, je peux la poser.", why: "Un indice plus avancé dit seulement que la définition a changé, pas que le changement convient à ton avion." },
        { t: "Je ne pose pas tant que quelqu'un d'habilité n'a pas dit quoi faire de cet écart.", ok: true, why: "La décision d'accepter une autre version appartient à ceux qui définissent la pièce ; ton rôle est de ne pas la devancer." },
        { t: "Je signale ce que j'ai lu, avec les deux indices exacts et le repère concerné.", ok: true, why: "Un signalement utile contient des faits vérifiables : ce que demande le dossier, ce que porte le sachet, à quel repère." },
        { t: "Je corrige le D en C sur l'étiquette pour qu'elle corresponde au dossier.", why: "Tu rendrais l'étiquette fausse et l'écart invisible : la pièce resterait à l'indice D, mais plus personne ne le saurait." },
      ],
      explain: "Le bon indice n'est ni le plus ancien ni le plus récent : c'est celui du dossier. Devant un indice différent, on constate, on ne pose pas, on signale avec précision. On ne modifie jamais une étiquette pour la faire coller au document.",
    },
    {
      id: 'c2-q5', type: 'order',
      concept: "Ordre de la comparaison",
      q: "Remets dans l'ordre les étapes de l'identification d'une pièce avant sa pose.",
      items: [
        "Trouver dans la nomenclature la ligne de l'opération par son repère",
        "Lire sur cette ligne la référence et l'indice demandés",
        "Lire la référence et l'indice sur l'étiquette du contenant",
        "Sortir la pièce et lire son propre marquage",
        "Relever le numéro de lot ou de série demandé par la fiche de suivi",
        "Jeter le contenant vide",
      ],
      explain: "On part du document, parce que c'est lui qui fait foi, puis on descend vers le contenant et enfin vers la pièce. Le relevé se fait quand la pièce et son étiquette sont encore sous les yeux ; le contenant ne part à la benne qu'ensuite.",
    },
    {
      id: 'c2-q6', type: 'match',
      concept: "Abréviations d'étiquette",
      q: "Relie chaque abréviation d'étiquette à la question à laquelle elle répond.",
      pairs: [
        { l: 'MFR', r: "Qui l'a fabriquée ?" },
        { l: 'DESC', r: "Comment s'appelle-t-elle en clair ?" },
        { l: 'P/N', r: "De quel type de pièce s'agit-il ?" },
        { l: 'REV', r: "Selon quelle version a-t-elle été faite ?" },
        { l: 'S/N', r: "De quel exemplaire précis s'agit-il ?" },
        { l: 'QTY', r: "Combien y en a-t-il dans ce contenant ?" },
      ],
      explain: "MFR pour manufacturer, DESC pour description, P/N pour part number, REV pour revision, S/N pour serial number, QTY pour quantity. Les intitulés peuvent varier d'un fabricant à l'autre ; les six questions, elles, restent les mêmes.",
    },
    {
      id: 'c2-q7', type: 'mcq',
      concept: "Ce que prouve un scan",
      q: "Tu scannes le code 2D d'un sachet. L'écran affiche la référence attendue, en vert. Choisis ce que ce résultat prouve.",
      options: [
        { t: "Que l'étiquette de ce sachet porte bien la référence attendue.", ok: true, why: "Le lecteur a lu l'étiquette, sans erreur de saisie : c'est tout ce qu'il peut affirmer." },
        { t: "Que les pièces du sachet sont à la bonne référence.", why: "Le lecteur ne voit pas à travers le plastique : une pièce mal ensachée passe au vert comme les autres." },
        { t: "Que les pièces sont conformes et peuvent être posées.", why: "Identité et bon état sont deux questions différentes, et le scan ne répond déjà pas à la première pour la pièce elle-même." },
        { t: "Que le lot a déjà été enregistré sur ta fiche de suivi.", why: "Selon l'outil, le scan peut alimenter un enregistrement, mais l'écran vert dont on parle ici confirme une lecture, pas ton relevé." },
      ],
      explain: "Un code-barres ou un code 2D est une étiquette écrite pour une machine. Il supprime les fautes de frappe ; il ne remplace pas la troisième source, la pièce, que seul un humain va lire.",
    },
    {
      id: 'c2-q8', type: 'hotid', fig: 'c2-marquage-piece',
      concept: "Supports d'identification",
      q: "Pour chaque vignette mise en évidence, choisis dans la liste le nom du support d'identification.",
      targets: [{ part: 'plaque' }, { part: 'manchon' }, { part: 'volante' }, { part: 'gravure' }],
      explain: "La plaque signalétique identifie un équipement (référence et numéro de série). Le repère de faisceau entoure un câble. L'étiquette volante, attachée par un lien, donne un statut et non une identité. La gravure est un marquage direct, dans la matière.",
    },
    {
      id: 'c2-q9', type: 'mcq',
      concept: "Date de péremption",
      q: "Un pot de mastic, jamais ouvert, porte une date de péremption dépassée d'une semaine. Son aspect est normal. Choisis la bonne conduite.",
      options: [
        { t: "Je ne l'utilise pas et je le remets au circuit prévu (magasin ou chef d'équipe), en signalant la date.", ok: true, why: "Passé la date, les propriétés ne sont plus garanties ; ce que devient le pot se décide ailleurs qu'au poste." },
        { t: "Jamais ouvert, donc intact : je l'utilise.", why: "Un produit vieillit dans son pot fermé ; c'est justement pour cela qu'il porte une date." },
        { t: "J'en étale un peu sur une chute : s'il durcit normalement, il est bon.", why: "Un essai sur un coin d'établi ne mesure ni l'adhérence ni la tenue dans le temps ; tu n'as ni le moyen ni l'exigence pour conclure." },
        { t: "Une semaine, c'est dans la marge : les dates sont toujours prudentes.", why: "Tu inventes une tolérance que personne n'a écrite. S'il existe une marge, ce n'est pas au poste qu'elle se décide." },
      ],
      explain: "La date de péremption est une information d'identification comme les autres : elle se lit avant usage et se compare à la date du jour. Un produit hors date ne s'utilise pas tel quel ; la décision de l'écarter ou de le faire réexaminer appartient au circuit prévu par l'entreprise.",
    },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "La désignation nomme, la référence (P/N) identifie le type, l'indice (REV) la version, le lot la fabrication, le numéro de série (S/N) l'exemplaire unique.",
    "Une référence se lit en entier, par groupes, en vérifiant la fin : deux pièces différentes peuvent ne se séparer que par le dernier caractère.",
    "Le bon indice est celui que demande le dossier pour cet avion, pas le plus récent.",
    "Avant de poser, trois sources doivent concorder : le dossier, l'étiquette du contenant, le marquage de la pièce.",
    "Un scan prouve ce que dit l'étiquette, pas ce que contient le sachet.",
    "Le lot ou le numéro de série se relève au moment de la pose, étiquette sous les yeux : c'est ce qui permet de retrouver la pièce plus tard.",
    "Pour la visserie, l'identité est le sachet : une vis qui en sort n'y retourne pas sur une supposition.",
    "Une pièce dont l'identification manque, se lit mal ou ne concorde pas ne se pose pas : on la met à part, on la marque, on prévient.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'c3', teaser: "Tu sais maintenant prouver ce qu'est une pièce. Reste à savoir si c'est la bonne **pour cet avion**, et quoi faire quand le réel et le prévu ne coïncident plus : c'est la configuration, la conformité et la non-conformité." },

  // Oral blanc
  oral: [
    {
      q: "Explique à un collègue qui débute la différence entre une référence, un lot et un numéro de série, avec un exemple.",
      expected: [
        "La référence (P/N) identifie un type de pièce, commun à toutes les pièces de même définition",
        "Le lot regroupe les pièces fabriquées ensemble, dans les mêmes conditions",
        "Le numéro de série (S/N) n'appartient qu'à un seul exemplaire",
        "Un exemple concret montrant l'emboîtement des trois",
        "L'utilité : retrouver des pièces précises si un défaut est découvert",
      ],
      model: "La référence, ou P/N, c'est le modèle : tous les supports identiques ont la même. Le lot, c'est la fournée : les supports fabriqués ensemble, le même jour, avec la même matière. Le numéro de série, c'est l'exemplaire : un seul support au monde le porte. Par exemple, six supports de même référence peuvent venir de deux lots de trois, et chacun a son propre numéro de série. Ça sert à remonter le fil : si le fabricant annonce un défaut sur un lot, on retrouve exactement ces pièces-là, à condition d'avoir relevé le lot à la pose.",
    },
    {
      q: "Tu trouves une pièce sans étiquette sur ta servante. Que fais-tu, et pourquoi ?",
      expected: [
        "Je ne la pose pas et je ne la remets pas avec les pièces bonnes",
        "Je cherche une autre source d'identification (marquage sur la pièce, contenant, bon de livraison)",
        "Sans preuve, je la mets à part et je la marque comme non identifiée",
        "Je préviens mon chef d'équipe",
        "Je me demande si elle manque quelque part : je vérifie mon compte",
      ],
      model: "Je ne la pose pas, et je ne la range pas non plus dans un sachet au hasard. Je regarde d'abord si elle porte un marquage, une gravure ou de l'encre, et si un contenant ou un bon de livraison permet de prouver ce qu'elle est. Si je n'ai aucune preuve, elle n'a plus d'identité : je la mets à part dans un contenant marqué, pour que personne ne la prenne pour une pièce bonne, et je préviens mon chef d'équipe. Je vérifie aussi mon compte de pièces posées, parce qu'une pièce en trop sur la servante, c'est peut-être une pièce qui manque dans l'avion.",
    },
    {
      q: "L'étiquette du sachet a été scannée et acceptée. Pourquoi lis-tu quand même le marquage de la pièce ?",
      expected: [
        "Le scan lit l'étiquette, pas le contenu du sachet",
        "Une pièce peut avoir été rangée dans le mauvais contenant",
        "C'est la pièce qui est montée dans l'avion, pas son étiquette",
        "La comparaison porte sur trois sources : dossier, étiquette, pièce",
      ],
      model: "Parce que le lecteur n'a vu que l'étiquette. Il me garantit que je n'ai pas fait de faute de saisie et que ce sachet est bien celui que le dossier attend. Mais il ne sait pas ce qu'il y a dedans : si une pièce d'une référence voisine a été glissée dans le sachet, le scan reste vert. Or c'est la pièce que je vais fixer dans l'avion, pas le sachet. Je compare donc trois choses : ce que demande la nomenclature, ce qu'annonce l'étiquette, et ce que porte la pièce, en lisant la référence jusqu'au dernier caractère.",
    },
  ],

  // Matrice de certification
  matrix: [
    {
      savoir: "Signification des champs d'identification : désignation, P/N, indice, S/N, lot, quantité, date.",
      savoirFaire: "Lire une étiquette ou un document fictif et en extraire l'information demandée par la fiche de suivi.",
      comp: 'C1',
      ex: ['c2-a1', 'c2-a3', 'c2-q3', 'c2-q6'],
      proof: "Recherches d'information réussies dans les documents fictifs du chapitre (lot du repère 12, repère d'une référence donnée).",
    },
    {
      savoir: "Méthode de comparaison à trois sources : dossier, contenant, pièce ; lecture complète d'une référence et de son indice.",
      savoirFaire: "Vérifier, avant la pose, que la pièce préparée est celle que demande le dossier, et repérer un écart de référence ou d'indice.",
      comp: 'C1',
      ex: ['c2-a4', 'c2-q4', 'c2-q5', 'c2-q7'],
      proof: "Écart repéré sur la figure de comparaison ; ordre des étapes reconstitué ; conduite correcte devant un indice non concordant.",
    },
    {
      savoir: "Emboîtement référence / lot / numéro de série et utilité du relevé pour retrouver une pièce.",
      savoirFaire: "Désigner les pièces concernées par un lot donné et relever l'identifiant au bon moment de l'opération.",
      comp: 'C1',
      ex: ['c2-a2', 'c2-q1', 'c2-q2'],
      proof: "Pièces d'un lot retrouvées sur la figure ; classement type / fabrication / exemplaire réussi.",
    },
    {
      savoir: "Supports d'identification selon la nature de la pièce ; statut d'une pièce non identifiée ; date de péremption.",
      savoirFaire: "Chercher l'identification au bon endroit et écarter du poste une pièce ou un produit dont l'identité ou la validité n'est pas prouvée.",
      comp: 'C1',
      ex: ['c2-q8', 'c2-q9'],
      proof: "Supports d'identification nommés sur la figure ; décision argumentée dans les deux situations professionnelles.",
    },
  ],
});
