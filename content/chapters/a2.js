// Chapitre a2 — Le fuselage : peau, cadres, lisses, planchers
CA.addChapter({
  id: 'a2',
  domain: 'A',
  order: 30,
  title: "Le fuselage : peau, cadres, lisses, planchers",
  short: "Comment le tube est construit, pourquoi il est rond, et pourquoi on ne perce jamais sa structure",
  minutes: 45,
  comps: ['C1'],
  prereq: ['a1'],
  sources: ['wiki-fuselage', 'wiki-semi-monocoque', 'erau-aerospace-structures', 'faa-amt-airframe', 'faa-ac-43-13-1b', 'easa-cs-25', 'wiki-rivet', 'rncp40664', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Expliquer en quelques phrases pourquoi le fuselage d'un avion de ligne est une structure semi-monocoque, et nommer ses pièces : peau, cadres, lisses, traverses de plancher, contrefiches.",
    "Retrouver ces pièces sur une coupe transversale et sur un morceau de fuselage en perspective.",
    "Expliquer ce qu'est la pressurisation, pourquoi le fuselage est rond et pourquoi un vol correspond à un cycle de contraintes pour la structure.",
    "Décrire la fabrication du fuselage en tronçons assemblés par des jonctions.",
    "Classer ce qu'on voit derrière un panneau de cabine en structure, habillage, équipement ou système.",
    "Justifier avec des arguments pourquoi on ne perce, ne coupe ni ne raye jamais la structure, et dire quoi faire à la place.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Quand tu déposeras un panneau de paroi, tu verras apparaître des tôles, des anneaux, des baguettes, des rangées de rivets, et tout un tas de pièces plus ou moins brillantes. La question qui compte est simple : « Est-ce que j'ai le droit de toucher à ça ? » Pour y répondre, il faut savoir distinguer ce qui tient l'avion, la **structure**, de tout ce qui s'y attache.",
    "La structure du fuselage est calculée comme un ensemble. Chaque trou, chaque épaisseur, chaque rivet a été étudié pour que la pièce encaisse les efforts d'un vol, d'un atterrissage, d'une turbulence, et cela pendant des dizaines de milliers de vols. Un trou de plus, une rayure profonde ou une entaille faite « juste pour passer un câble » n'est pas un défaut esthétique : c'est une modification de la structure, que personne ne sait calculer ni suivre.",
    "Savoir comment le fuselage est construit te donne donc un réflexe, plus fort que n'importe quelle règle récitée : devant une pièce de structure, tu sais pourquoi tu ne la perces pas, tu sais où fixer à la place, et tu sais qui prévenir quand quelque chose te paraît anormal.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'a2-section-fuselage',
    intro: "Voici une tranche de fuselage, coupée en travers et regardée de l'arrière vers l'avant : le côté gauche de l'avion est à gauche de l'image. Seule la structure est dessinée, sans sièges ni panneaux. La silhouette debout te donne l'échelle.",
    look: [
      "De l'extérieur vers l'intérieur, combien de couches distingues-tu ? Laquelle est la plus fine ?",
      "Repère les petits blocs sombres régulièrement espacés tout autour de la peau. Qu'est-ce qui, à ton avis, les relie entre eux dans le sens de la longueur ?",
      "Où est le sol sur lequel marche la silhouette ? Qu'est-ce qui le porte ?",
      "Combien d'étages y a-t-il ? Qu'y a-t-il au-dessous de la silhouette ?",
      "La fenêtre est-elle un simple trou dans la tôle, ou autre chose ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Un tube léger : le principe semi-monocoque",
      fig: 'a2-eclate-structure',
      p: [
        "Le fuselage doit être à la fois solide et léger. Pour y arriver, on n'utilise pas de grosses poutres, mais une coque mince renforcée. Reprenons les trois grands principes qu'ont connus les constructeurs. Dans une structure **à treillis**, un squelette de tubes porte tout et une toile recouvre l'ensemble : c'est le principe des premiers avions. Dans une structure **monocoque**, la peau seule est assez épaisse pour tout porter, comme une coquille d'œuf : elle est trop lourde et trop fragile à la moindre entaille. La solution adoptée sur les avions de ligne est entre les deux : la structure **[[semi-monocoque]]**, où une peau mince est raidie de l'intérieur par une ossature.",
        "Regarde la figure : à droite, le fuselage tel qu'on le voit de l'extérieur, parcouru de lignes de petits points, les rivets ; à gauche, la peau du côté proche est retirée pour montrer l'ossature. Une canette de boisson vide est une bonne image : sa paroi mince résiste très bien tant qu'elle est intacte et lisse, mais un léger pli la fait s'écraser. Ajoute des anneaux et des baguettes à l'intérieur, et la coque supporte bien plus.",
        "La **[[peau]]** (n° 1, *skin*) est la tôle mince qui enveloppe le fuselage : elle ferme l'avion, retient l'air sous pression et participe à la résistance de l'ensemble. Son épaisseur se compte en quelques millimètres au plus, bien moins que ce qu'on imagine. La plupart des fuselages d'avions de ligne sont en alliage d'aluminium ; certains avions récents ont un fuselage en matériaux composites, mais le principe reste le même : une peau mince, raidie par une ossature.",
        "Les **[[cadre]]s** (n° 2, *frames*) sont des anneaux placés en travers du fuselage, à intervalles réguliers : ils donnent sa forme ronde à la section et reprennent les efforts qui s'exercent sur la peau. Les **[[lisse]]s** (n° 3, *stringers*) sont de longues baguettes profilées, fixées sous la peau dans le sens de la longueur : elles la raidissent et l'empêchent de se gondoler, comme les nervures d'un store. Les cadres et les lisses se croisent, comme les cercles et les méridiens d'un globe. L'ensemble travaille comme un tout : aucune pièce ne vaut sans les autres.",
        "Ces pièces sont attachées entre elles par des fixations, le plus souvent des rivets (n° 6) : de l'extérieur, leurs rangées dessinent l'ossature sous la peau. Là où l'avion est plus chargé, on ajoute des pièces plus fortes, par exemple des longerons, poutres longitudinales plus robustes que les lisses.",
      ],
      table: {
        head: ["Pièce", "Direction", "Rôle", "En anglais"],
        rows: [
          ["Peau", "Enveloppe", "Ferme l'avion, retient la pression, travaille avec l'ossature", "Skin"],
          ["Cadre", "En travers (anneau)", "Donne la forme ronde, reprend les efforts de la peau", "Frame"],
          ["Lisse", "Dans la longueur", "Raidit la peau, l'empêche de se gondoler", "Stringer"],
          ["Traverse de plancher", "En travers, à l'horizontale", "Porte le plancher de la cabine", "Floor beam"],
          ["Rivet", "Point de fixation", "Assemble peau, cadres et lisses", "Rivet"],
        ],
      },
    },
    {
      h: "La coupe en détail : cadres, lisses, fenêtres",
      fig: 'a2-section-fuselage',
      p: [
        "Revenons à la coupe d'ouverture. De l'extérieur vers l'intérieur, tu retrouves la peau (n° 1) ; contre elle, la série de petits blocs sombres, les lisses (n° 3), vues de bout puisque la coupe les traverse ; puis l'anneau du cadre (n° 2). Ensemble, ils forment le cylindre du fuselage.",
        "À hauteur d'un passager assis, une **fenêtre** (n° 4) est découpée dans la paroi. Retire de la matière à une tôle sous contrainte, et tu l'affaiblis : c'est pourquoi le bord de l'ouverture est renforcé par un **encadrement** épais, qui remplace la matière retirée et porte les vitres. Les portes, plus grandes encore, ont des renforts du même genre. Tu retiendras que partout où l'on perce la peau, la structure est renforcée autour.",
        "Dans les chapitres suivants, tu auras souvent besoin de dire où se trouve ton intervention. Tu utiliseras pour cela les cadres, qu'on numérote le long du fuselage. Pour l'instant, retiens qu'ils sont à intervalles réguliers et qu'ils donnent à la structure son rythme : une rangée de sièges, un hublot, un panneau sont posés par rapport à eux.",
      ],
    },
    {
      h: "Les planchers : un étage porté par les cadres",
      p: [
        "Sur la coupe, tu as vu une grande poutre horizontale à mi-hauteur : c'est la **[[traverse de plancher]]** (n° 7, *floor beam*). Elle est attachée de chaque côté à un cadre et traverse tout le fuselage d'un bord à l'autre. Elle porte les **rails de sièges** (n° 6, *seat tracks*), profilés qui courent sur toute la longueur de la cabine, et les **panneaux de plancher** (n° 5) qu'on pose entre les rails et sur lesquels on marche. Pour éviter qu'elle fléchisse, la traverse est soutenue par des **[[Contrefiche de plancher|contrefiches]]** (n° 8, *floor struts*), barres presque verticales qui l'appuient sur le bas du cadre.",
        "Les [[rail de siège|rails de siège]] sont des pièces de structure : on y accroche les sièges et certains meubles, ils encaissent les efforts d'un siège plein en cas de choc, et c'est parce qu'ils sont sur toute la longueur de la cabine qu'une compagnie peut déplacer les rangées sans rien percer. Tu les étudieras en détail plus tard ; retiens dès maintenant qu'on ne les raye pas et qu'on ne s'y appuie pas avec un outil.",
        "Plus bas, le **plancher de soute** (n° 9, *cargo floor*) sépare la soute du fond du fuselage, et tout en bas, le **fond de cale** (n° 10, *[[fond de cale|bilge]]*) est le point le plus bas du fuselage. C'est là que s'accumulent l'eau de condensation et tout ce qui tombe à travers les planchers. Pour toi, c'est important : un objet qui tombe dans un rail ou dans une fente finit souvent là, hors de portée de vue. C'est l'une des raisons pour lesquelles on ne laisse rien tomber.",
      ],
    },
    {
      h: "Pourquoi un tube rond : la pressurisation",
      fig: 'a2-pressurisation',
      p: [
        "À l'altitude de croisière d'un avion de ligne, l'air est beaucoup trop rare pour qu'on puisse y respirer normalement. Les avions de ligne maintiennent donc, dans une partie du fuselage, une pression d'air bien plus élevée qu'à l'extérieur : c'est la **[[pressurisation]]**. Elle est réglée pour que l'on se sente à une altitude modérée ; le règlement de certification européen limite l'altitude équivalente de la cabine à environ 2 400 m (8 000 ft) au plus.",
        "La figure montre la zone pressurisée en bleu clair (n° 1). Elle va de la cloison étanche avant (n° 2), juste derrière le radôme (n° 4), à la cloison étanche arrière (n° 3), bombée, à l'arrière de la cabine. Elle englobe le poste de pilotage, la cabine et les soutes. En dehors : le radôme, le cône arrière (n° 5) et, au milieu du ventre, le caisson de voilure et le logement de train (n° 6).",
        "Conséquence : le fuselage se comporte comme un ballon. À l'altitude de croisière, chaque mètre carré de paroi est poussé vers l'extérieur par une force de l'ordre de quelques tonnes. D'où la forme **ronde** : un cylindre est la forme qui supporte le mieux cette poussée, qui se répartit également dans toutes les directions ; une forme à angles, elle, se déformerait. D'où aussi la cloison arrière **bombée** : une calotte bombée résiste bien mieux à la pression qu'une plaque plate.",
        "Il y a un second effet, plus discret. Au sol, l'écart de pression est nul. En montant, il augmente, puis reste stable en croisière, puis diminue à la descente (partie basse de la figure). Un vol correspond donc à **un cycle** : la structure est tendue, puis relâchée. Les métaux se fatiguent quand on les sollicite des milliers de fois : une toute petite fissure peut apparaître à un endroit où la tôle est entaillée, puis grandir un peu à chaque vol. C'est la **[[fatigue]]**.",
        "C'est une leçon apprise de façon dramatique : dans les années 1950, les premiers avions de ligne à réaction à fuselage pressurisé ont subi des ruptures dues à la fatigue, qui ont démarré aux angles d'ouvertures. Depuis, les fenêtres des avions de ligne ont des **angles arrondis**, et la structure est inspectée régulièrement pour détecter des fissures avant qu'elles ne grandissent.",
      ],
      callout: { kind: 'info', text: "Les limites exactes de la zone pressurisée dépendent de l'avion : la figure en donne le principe. Retiens la logique : le fuselage est un grand réservoir d'air, gonflé et dégonflé à chaque vol, et la moindre entaille y devient une amorce de fissure." },
    },
    {
      h: "Un fuselage en tronçons",
      fig: 'a2-troncons',
      p: [
        "Un fuselage de plusieurs dizaines de mètres ne se construit pas d'un bloc. Il est fabriqué par **[[tronçon]]s** (*sections*), des morceaux de tube dont chacun a sa propre peau, ses cadres et ses lisses. On les assemble ensuite bout à bout. Sur la figure, cinq tronçons sont écartés les uns des autres : la pointe avant (n° 1) qui contient le poste de pilotage, le tronçon avant (n° 2), le tronçon central (n° 3) qui reçoit les ailes et le train principal, le tronçon arrière (n° 4) et le cône arrière avec la dérive (n° 5). Le nombre de tronçons et leur découpage changent d'un avion à l'autre.",
        "La ligne qui fait le tour du fuselage, à l'endroit où deux tronçons se rejoignent, est une **[[jonction]]** (n° 6). Le détail du bas montre le principe d'une jonction vue en coupe. Les deux tôles de peau (n° 7) arrivent bout à bout ; du côté intérieur, une bande de métal, l'**[[éclisse]]** (n° 8, *splice strap*), est posée à cheval sur les deux tôles. Des fixations (n° 9), rivets ou pièces équivalentes, traversent la peau et l'éclisse et les serrent l'une contre l'autre. C'est l'éclisse qui fait passer l'effort d'un tronçon à l'autre.",
        "Pour toi, une jonction est une zone de structure **particulièrement dense** en fixations et en pièces. Elle peut passer derrière tes panneaux : on le reconnaît à une rangée de fixations plus serrée qui fait le tour du fuselage. Ce n'est pas un endroit où l'on accroche quoi que ce soit au hasard.",
      ],
    },
    {
      h: "Structure, habillage, équipement, système : classer ce qu'on voit",
      fig: 'a2-paroi-ouverte',
      p: [
        "Voici la paroi droite d'une cabine, vue depuis l'allée. À gauche de l'image, elle est habillée, comme la voit le passager. À droite, les panneaux sont déposés. Ce que tu découvres derrière relève de quatre catégories, que tu dois apprendre à distinguer d'un coup d'œil.",
        "La **[[structure]]** est ce qui tient l'avion et encaisse les efforts : ici, la peau (n° 1), les cadres (n° 2), les lisses (n° 3) et l'encadrement de la fenêtre (n° 4). Elle est calculée, et on n'y touche pas sans prescription précise. L'**[[habillage]]** est ce qui couvre, isole ou décore : le panneau d'habillage (n° 8), qui encadre le hublot et se dépose pour accéder à ce qui est derrière, mais aussi le matelas isolant (n° 5), qui coupe le froid et le bruit. L'**[[équipement]]** est ce qu'on installe ou retire selon la configuration choisie par la compagnie : le siège (n° 9), par exemple. Le **[[système]]** est ce qui transporte de l'énergie, des fluides ou des signaux : le faisceau électrique orange (n° 6) et ses petits supports et colliers (n° 7).",
        "Certaines pièces sont ambiguës. Un support fixé sur un cadre appartient au système qu'il tient (il retient le faisceau), alors que le cadre, lui, est de la structure. Un rail de siège est de la structure, mais le siège qui s'y verrouille est un équipement. Cette distinction est le fil rouge des chapitres sur la cabine, qui y reviendront avec une figure dédiée.",
        "Quel intérêt pratique ? **Chaque catégorie appelle un réflexe.** Une structure, on ne la perce ni ne la raye. Un habillage, on le manipule avec soin, car il est fragile et visible. Un équipement, on le pose et dépose selon sa définition. Un système, on le fait cheminer sans tension ni frottement. Savoir dans quelle catégorie tu te trouves, c'est savoir quel geste t'est permis.",
      ],
      table: {
        head: ["Ce que tu vois (n°)", "Catégorie", "Réflexe"],
        rows: [
          ["Peau (1), cadre (2), lisse (3), encadrement de fenêtre (4)", "Structure", "Ne pas percer, ne pas rayer, ne pas s'y appuyer avec un outil"],
          ["Panneau d'habillage (8), matelas isolant (5)", "Habillage", "Manipuler avec soin, protéger, déposer et reposer selon le dossier"],
          ["Siège (9)", "Équipement", "Poser et déposer selon la configuration"],
          ["Faisceau (6), support et collier (7)", "Système", "Faire cheminer sans tension, ne pas pincer"],
        ],
      },
    },
    {
      h: "Pourquoi on ne perce ni ne raye jamais la structure",
      p: [
        "C'est la règle la plus importante du chapitre, et elle est tout sauf arbitraire. Quatre raisons s'additionnent.",
        "**1. La concentration des contraintes.** Quand une tôle sous contrainte porte un trou, une entaille ou une rayure, les efforts ne se répartissent plus régulièrement : ils s'accumulent autour du défaut, comme l'eau d'une rivière autour d'un pilier. C'est là qu'une fissure démarre. Et avec la pressurisation, la tôle subit cet effort un vol après l'autre : la fissure grandit lentement, parfois pendant des années, avant d'être visible.",
        "**2. Le calcul d'ensemble.** Chaque trou de la structure a une position, un diamètre et un espacement choisis par les ingénieurs ; chaque pièce transmet l'effort à la suivante. Un trou supplémentaire ou une pièce affaiblie change le chemin des efforts, d'une manière que personne n'a étudiée.",
        "**3. La protection contre la corrosion.** Les pièces de structure sont protégées par des traitements de surface et des peintures. Une rayure ouvre ce revêtement, laisse passer l'humidité (la cabine est un lieu où la condensation existe) et la corrosion s'installe, souvent là où on ne la voit pas.",
        "**4. La traçabilité.** Une modification de structure doit être étudiée, autorisée et enregistrée. Un trou non déclaré est une modification sans trace : personne ne le surveillera.",
        "Que fais-tu alors quand tu as besoin de fixer quelque chose ? Tu utilises les **points de fixation prévus** : rails, inserts, trous existants, supports livrés avec le dossier. Si les points prévus ne correspondent pas à ta pièce, tu ne corriges pas en perçant : tu t'arrêtes et tu préviens ton chef d'équipe, car c'est probablement une erreur de pièce, de position ou de définition, et c'est aux méthodes de trancher. Les réparations de structure, elles, relèvent d'équipes dédiées, qui travaillent avec des documents d'ingénierie spécifiques, en général un manuel de réparation de structure. Tu n'y touches pas.",
        "Enfin, tu deviens aussi un **observateur** : en déposant un panneau, tu verras des choses que personne d'autre ne voit à cet instant. Une rayure, un trou que tu ne connais pas, un dépôt blanc poudreux, une trace d'humidité, un rivet qui semble de travers : tu ne le nettoies pas, tu ne le touches pas, tu le signales, comme appris dans le chapitre sur le métier.",
      ],
      callout: { kind: 'warn', text: "Ce qui est valable pour la structure l'est pour les protections de surface : une rayure dans une peinture de cadre n'est pas « juste de la peinture ». Elle peut être une porte d'entrée à la corrosion. Si tu abîmes quelque chose sur une pièce de structure, même légèrement, tu le dis tout de suite." },
    },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: "Semi-monocoque", en: "Semi-monocoque", def: "Structure en forme de coque dont la peau mince est raidie de l'intérieur par des cadres et des lisses ; peau et ossature travaillent ensemble.", tip: "Mono = une seule coque ; semi = elle a quand même une ossature." },
    { fr: "Peau", en: "Skin", def: "Tôle mince qui enveloppe le fuselage : elle ferme l'avion, retient la pression et participe à la résistance de la structure." },
    { fr: "Cadre", en: "Frame", def: "Anneau de structure placé en travers du fuselage, répété à intervalles réguliers : il donne la forme ronde à la section et reprend les efforts de la peau.", tip: "Un cadre = un cerceau de tonneau." },
    { fr: "Lisse", en: "Stringer", def: "Longue baguette profilée fixée sous la peau dans le sens de la longueur : elle raidit la peau et l'empêche de se gondoler." },
    { fr: "Traverse de plancher", en: "Floor beam", def: "Poutre horizontale attachée à deux côtés d'un cadre : elle traverse le fuselage et porte le plancher de la cabine." },
    { fr: "Contrefiche de plancher", en: "Floor strut", def: "Barre presque verticale qui soutient une traverse de plancher en l'appuyant sur le bas du cadre." },
    { fr: "Rail de siège", en: "Seat track", def: "Profilé de plancher qui court sur la longueur de la cabine et sur lequel on accroche les sièges ; c'est une pièce de structure." },
    { fr: "Fond de cale", en: "Bilge", def: "Point le plus bas du fuselage, sous le plancher de soute : l'eau de condensation et ce qui tombe à travers les planchers finissent là." },
    { fr: "Pressurisation", en: "Pressurisation", def: "Maintien, dans une partie du fuselage, d'une pression d'air plus élevée qu'à l'extérieur, pour que l'on puisse respirer en altitude." },
    { fr: "Fatigue (de structure)", en: "Fatigue", def: "Fissuration progressive d'un métal soumis à des efforts répétés, même modestes : elle démarre souvent sur un trou, une entaille ou une rayure." },
    { fr: "Tronçon", en: "Fuselage section", def: "Morceau de tube du fuselage, fabriqué avec sa propre peau, ses cadres et ses lisses, assemblé ensuite avec les autres." },
    { fr: "Jonction", en: "Section joint", def: "Ligne qui fait le tour du fuselage, à l'endroit où deux tronçons sont fixés l'un à l'autre ; zone dense en fixations." },
    { fr: "Éclisse", en: "Splice strap (butt strap)", def: "Bande de métal posée à cheval sur deux tôles à leur jonction, qui fait passer l'effort de l'une à l'autre." },
    { fr: "Structure", en: "Structure", def: "Ensemble des pièces qui tiennent l'avion et encaissent les efforts : peau, cadres, lisses, planchers, rails, encadrements. On n'y touche pas sans prescription." },
    { fr: "Habillage", en: "Lining (trim)", def: "Éléments qui couvrent, isolent ou décorent la structure : panneaux de paroi et de plafond, revêtements, matelas isolants." },
    { fr: "Équipement", en: "Equipment", def: "Élément qui s'installe ou se retire selon la configuration choisie par la compagnie : siège, galley, rangement." },
    { fr: "Système", en: "System", def: "Ensemble qui transporte de l'énergie, des fluides ou des signaux : réseau électrique, eau, air, oxygène, avec leurs câbles, tuyaux et supports." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Mercredi, 9 h 30 : derrière le panneau, avec Samia",
    body: [
      "Un panneau de paroi vient d'être déposé dans la partie avant de la cabine, et Samia te propose de regarder derrière avant qu'on ne l'habille de nouveau. « Dis-moi ce que tu vois, et dans quelle catégorie tu le ranges. » Tu commences par les grandes pièces. Un anneau vertical à intervalles réguliers : un cadre, donc structure. Des baguettes horizontales contre la tôle : des lisses, structure aussi. « Et la tôle elle-même ? » Tu réponds : la peau, vue de l'intérieur. « Bien. Ce que tu viens de nommer, tu ne le perces pas, tu ne le rayes pas, tu ne t'y appuies pas avec un outil. »",
      "Elle te montre ensuite un paquet de câbles orange tenu sur chaque cadre par un petit support et un collier. « Système. Et le support, tu le ranges où ? » Tu hésites : il est fixé sur un cadre, mais il tient un faisceau. « Il appartient au système qu'il tient, répond Samia. Le cadre, lui, est de la structure. Si tu dois déplacer un support, tu ne perces pas le cadre : tu utilises les emplacements prévus. » Plus bas, un matelas isolant matelassé remplit l'espace entre deux cadres : habillage.",
      "Avant de remettre le panneau, tu remarques une toute petite tache blanche et poudreuse sur le bas d'un cadre. Samia ne la touche pas : elle la photographie à côté d'une règle, note l'emplacement et la signale au chef d'équipe. « Je ne sais pas si c'est de la corrosion et ce n'est pas à moi de trancher. Ce qui compte, c'est que quelqu'un qui sait la regarde avant que le panneau soit refermé. » Tu comprends que, derrière un panneau, tu es parfois la seule personne à voir ce qu'il cache.",
    ],
    doc: {
      title: "Relevé derrière un panneau déposé — document fictif pédagogique",
      lines: [
        ["Zone", "Cabine, côté droit, partie avant (zone fictive A)"],
        ["Panneau déposé", "EX-31020-04"],
      ],
      table: {
        head: ["Élément observé", "Catégorie", "Observation"],
        rows: [
          ["Cadre", "Structure", "Rien à signaler"],
          ["Lisse", "Structure", "Rien à signaler"],
          ["Matelas isolant", "Habillage", "Rien à signaler"],
          ["Faisceau et colliers", "Système", "Rien à signaler"],
          ["Bas d'un cadre", "Structure", "Dépôt blanc poudreux, signalé au chef d'équipe, non touché"],
        ],
      },
      note: "Relevé imaginé pour apprendre : le format réel est choisi par l'entreprise.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Lire une coupe de fuselage, de la peau au sol de la soute",
    fig: 'a2-section-fuselage',
    steps: [
      { label: "L'enveloppe", text: "On commence par l'extérieur : la peau, une tôle mince qui ferme l'avion. Elle est lisse dehors, et de l'autre côté on lui a fixé des pièces qui la raidissent.", hl: ['peau'] },
      { label: "Les baguettes qui la raidissent", text: "Contre la face intérieure de la peau, régulièrement réparties, les lisses (vues ici de bout) empêchent la tôle de se gondoler et reprennent les efforts dans le sens de la longueur.", hl: ['lisse'] },
      { label: "L'anneau qui donne la forme", text: "Plus à l'intérieur, le cadre est un anneau qui garde la section ronde et reprend les efforts de la peau. Il est répété à intervalles réguliers tout le long du fuselage.", hl: ['cadre'] },
      { label: "Une ouverture renforcée", text: "La fenêtre est découpée dans la peau : le bord de l'ouverture est renforcé par un encadrement épais, car on a retiré de la matière à une zone sous contrainte.", hl: ['fenetre'] },
      { label: "L'étage des passagers", text: "À mi-hauteur, la traverse de plancher relie les deux côtés d'un cadre. Elle porte les rails de sièges et les panneaux sur lesquels on marche. Deux contrefiches l'empêchent de fléchir.", hl: ['traverse', 'rail', 'plancher-cabine', 'contrefiche'] },
      { label: "L'étage du dessous", text: "Sous la cabine, le plancher de soute ; tout en bas, le fond de cale. Ce qui tombe à travers le plancher cabine peut finir là.", hl: ['plancher-soute', 'fond-de-cale'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    { id: 'a2-a1', type: 'hottap', fig: 'a2-section-fuselage',
      q: "Sur la coupe du fuselage, touche la pièce demandée.",
      targets: [
        { prompt: "L'anneau qui donne sa forme ronde au fuselage", part: 'cadre' },
        { prompt: "La poutre horizontale qui porte le plancher de la cabine", part: 'traverse' },
        { prompt: "Le profilé sur lequel s'accrochent les sièges", part: 'rail' },
        { prompt: "La barre qui soutient la traverse par en dessous", part: 'contrefiche' },
        { prompt: "Le point le plus bas du fuselage", part: 'fond-de-cale' },
      ],
      concept: "Pièces d'une coupe de fuselage",
      explain: "Le cadre est l'anneau dessiné tout autour ; la traverse est la poutre horizontale à mi-hauteur ; le rail est le petit profilé posé sur la traverse ; la contrefiche est la barre quasi verticale sous la traverse ; le fond de cale est tout en bas, sous le plancher de soute. En retrouvant les pièces par leur fonction, tu les retiendras mieux que par leur numéro." },
    { id: 'a2-a2', type: 'sort',
      q: "Classe chaque élément de la cabine dans sa catégorie.",
      bins: ["Structure", "Habillage", "Équipement", "Système"],
      items: [
        { t: "Cadre", bin: 0, why: "Anneau de structure : il tient la forme du fuselage et encaisse les efforts." },
        { t: "Panneau de paroi", bin: 1, why: "Il couvre la structure et se dépose pour accéder à ce qui est derrière." },
        { t: "Siège passager", bin: 2, why: "Il est posé ou déposé selon la configuration choisie par la compagnie." },
        { t: "Faisceau électrique", bin: 3, why: "Il transporte de l'électricité et des signaux le long de l'avion." },
        { t: "Matelas isolant", bin: 1, why: "Il garnit l'espace entre cadres pour couper le froid et le bruit : c'est de l'habillage." },
        { t: "Rail de siège", bin: 0, why: "C'est une pièce de plancher qui encaisse les efforts d'un siège : structure, même si le siège est un équipement." },
        { t: "Collier tenant le faisceau sur un cadre", bin: 3, why: "Il appartient au système qu'il tient ; c'est le cadre qui est de la structure." },
        { t: "Galley", bin: 2, why: "Gros meuble livré fini, installé selon la configuration : équipement." },
      ],
      concept: "Structure, habillage, équipement, système",
      explain: "Quatre questions t'aident : est-ce que ça tient l'avion (structure) ? ça couvre ou ça isole (habillage) ? ça se pose ou se retire selon la configuration (équipement) ? ça transporte énergie, fluides ou signaux (système) ? Les cas limites, comme le collier fixé sur un cadre, se rangent d'après ce qu'ils tiennent." },
    { id: 'a2-a3', type: 'hotfind', fig: 'a2-paroi-ouverte',
      q: "Sur cette paroi, touche toutes les pièces de structure : celles que tu ne perces et ne rayes jamais. Les autres sont des leurres.",
      targets: ['peau', 'cadre', 'lisse', 'encadrement'],
      notes: {
        peau: "La peau est la tôle extérieure, vue ici par sa face intérieure : elle retient la pression.",
        cadre: "Les cadres sont les montants verticaux régulièrement espacés : ils donnent sa forme à la section.",
        lisse: "Les lisses sont les baguettes horizontales contre la peau : elles raidissent la tôle.",
        encadrement: "L'encadrement de fenêtre est la pièce épaisse qui borde l'ouverture : il remplace la matière retirée dans la peau.",
      },
      concept: "Repérer la structure derrière un panneau",
      explain: "Les quatre pièces de structure sont la peau, les cadres, les lisses et l'encadrement de fenêtre. Le matelas isolant et le panneau sont de l'habillage, le faisceau et ses supports sont un système, le siège est un équipement : ce sont les leurres de la figure." },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Penser que le fuselage est une simple tôle roulée en tube, et que les cadres et les lisses sont des « renforts facultatifs ».",
      why: "La peau seule est trop mince pour porter les efforts d'un vol : c'est l'ensemble peau, cadres et lisses qui travaille. Retirer ou affaiblir l'une des pièces, c'est changer la répartition des efforts.",
      better: "Se représenter la structure comme un tout : une peau mince qui n'est solide que parce qu'elle est raidie de l'intérieur, comme une canette." },
    { error: "Confondre cadre et lisse.",
      why: "Les deux sont des pièces d'ossature, mais elles n'ont ni la même direction ni le même rôle. Se tromper d'un mot dans un document ou au téléphone peut envoyer quelqu'un à la mauvaise pièce.",
      better: "Cadre = anneau en travers, comme les cerceaux d'un tonneau. Lisse = baguette dans la longueur, comme les lames d'un store." },
    { error: "Percer un petit trou dans un cadre ou dans un rail « pour y passer un collier, c'est minuscule ».",
      why: "Un petit trou est exactement l'endroit où démarre une fissure de fatigue, et il change le chemin des efforts. La taille du trou n'a rien à voir avec sa dangerosité.",
      better: "Utiliser les emplacements prévus. S'ils ne conviennent pas, s'arrêter et prévenir, car c'est sans doute l'élément ou la position qui sont en cause." },
    { error: "Considérer qu'une rayure sur une pièce de structure est un simple défaut d'aspect.",
      why: "Une rayure peut ouvrir la protection contre la corrosion et créer une amorce de fissure. Sur la structure, l'aspect importe moins que le fond : c'est le métal en dessous qui compte.",
      better: "Ne pas frotter, ne pas retoucher de sa propre initiative ; signaler l'endroit et la nature de la marque, avec une photo si l'entreprise le prévoit." },
    { error: "Classer un support fixé sur un cadre dans la structure, « parce qu'il est vissé dessus ».",
      why: "On range une pièce d'après ce qu'elle fait, pas d'après l'endroit où elle est fixée. Un support qui tient un faisceau fait partie du système.",
      better: "Se demander à quoi la pièce sert : tenir l'avion (structure), couvrir (habillage), être posée selon la config (équipement), transporter (système)." },
    { error: "Penser que la pressurisation ne concerne que les pilotes et le confort des passagers.",
      why: "La pressurisation est une contrainte permanente sur la structure : chaque vol tend puis relâche la peau, et c'est ce qui rend les entailles dangereuses sur la durée.",
      better: "Se rappeler qu'un fuselage est un réservoir d'air gonflé et dégonflé à chaque vol, et que la fatigue est lente et silencieuse." },
    { error: "Croire que tout ce qui est brillant ou métallique derrière un panneau est de la structure, et donc qu'on n'y touche pas : ou l'inverse.",
      why: "Des supports, des colliers, des clips sont métalliques et ne sont pas de la structure. À l'inverse, certaines pièces de structure sont peintes en gris ou en vert.",
      better: "Identifier chaque pièce d'après sa forme et sa fonction, pas d'après sa couleur ou son aspect." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Le support qui ne tombe pas en face",
      fig: 'a2-paroi-ouverte',
      context: [
        "14 h 05. Tu dois fixer un support de faisceau sur un cadre, comme prévu dans ton instruction de travail. Les trous du support, que tu présentes contre le cadre, tombent à environ un centimètre à côté des trous existants. Il n'y a aucun défaut visible sur le cadre ni sur le support.",
        "Karim, qui travaille à côté, te dit : « Perce juste un nouveau trou dans le cadre, là, en face de ceux du support. Il a l'air solide, ça ne se voit pas, et on gagne vingt minutes. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je laisse le support en place sans percer, je vérifie la référence de la pièce sur mon document, et je préviens mon chef d'équipe de l'écart constaté.", ok: true,
          why: "Un trou qui ne tombe pas en face est un symptôme : mauvaise pièce, mauvaise position, mauvaise définition. Ce n'est pas à toi de corriger la structure. En vérifiant la référence puis en alertant, tu donnes aux méthodes ce qu'il leur faut pour trancher." },
        { t: "Je perce le nouveau trou : c'est petit et ça passe.", ok: false,
          why: "Un trou, même petit, dans un cadre est une modification de structure non étudiée, sans trace : amorce de fissure et changement du chemin des efforts. La taille ne rend pas l'acte anodin." },
        { t: "Je force le support à la main pour qu'il se mette en face des trous.", ok: false,
          why: "Tu déformes la pièce et tu mets le support sous contrainte permanente. Le faisceau qu'il tient sera lui aussi sous tension, et le problème de définition n'est pas réglé." },
        { t: "J'agrandis les trous du support pour qu'ils tombent sur ceux du cadre.", ok: false,
          why: "Tu modifies une pièce livrée sans autorisation : le support n'est plus conforme à sa référence, et la fixation n'est plus celle étudiée." },
      ],
      debrief: "Règle de métier : quand les points de fixation prévus ne correspondent pas, on s'arrête. On vérifie ce qu'on peut vérifier (la référence, la position), puis on prévient. Les vingt minutes économisées ne valent rien face à un trou que personne ne surveillera pendant toute la vie de l'avion.",
    },
    {
      title: "Le dépôt blanc au bas du cadre",
      context: [
        "10 h 50. Tu viens de déposer un panneau de paroi pour accéder à un connecteur. En bas du cadre, près du plancher, tu remarques un dépôt blanc, poudreux, d'une paume de large, et une tache sombre d'humidité sur la peau, juste à côté. Ce n'est pas dans ta zone de travail du jour, et personne n'a l'air de l'avoir vu.",
        "Une collègue de l'équipe voisine passe et te dit : « Ça, c'est juste de la poussière humide. Passe un coup de chiffon, ça partira. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je ne touche à rien, je note l'endroit précis, je prends une photo si c'est prévu, et je préviens mon chef d'équipe avant de refermer.", ok: true,
          why: "Un dépôt blanc poudreux sur du métal peut être de la corrosion, mais ce n'est pas à toi de diagnostiquer. En le laissant intact et en le signalant avant que le panneau soit refermé, tu permets à quelqu'un de compétent de l'examiner pendant qu'il est visible." },
        { t: "Je passe un chiffon pour nettoyer : si ça part, c'était de la poussière.", ok: false,
          why: "Nettoyer détruit l'indice et peut étaler un produit qui aggrave le dommage. Si c'était de la corrosion, personne ne le saura plus." },
        { t: "Je continue mon travail et je laisse un message à l'équipe voisine, qui est probablement mieux placée.", ok: false,
          why: "Un message passé par un collègue sans appartenance à la zone peut se perdre. Le signalement va à ton chef d'équipe, qui sait à qui le transmettre." },
        { t: "Je referme le panneau : ce n'est pas ma zone, et je ne veux pas bloquer mon avancement.", ok: false,
          why: "Une fois le panneau refermé, personne ne le verra plus : c'est le pire moment pour se taire. Tu es peut-être la dernière personne à voir cette zone avant des mois." },
      ],
      debrief: "Règle de métier : devant une trace inhabituelle sur la structure, on ne nettoie pas, on ne retouche pas, on ne ferme pas. On décrit, on localise et on prévient. Voir derrière un panneau est un privilège de ton métier, et il s'accompagne d'une responsabilité : ce que tu observes, personne d'autre ne l'observera.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    { id: 'a2-q1', type: 'mcq',
      q: "Pourquoi le fuselage d'un avion de ligne est-il une structure semi-monocoque ? Choisis une réponse.",
      options: [
        { t: "Parce qu'une peau mince seule serait trop fragile : elle est raidie par des cadres et des lisses, qui travaillent avec elle.", ok: true, why: "Peau, cadres et lisses forment un ensemble léger et solide, comme une canette renforcée de l'intérieur." },
        { t: "Parce que la peau est assez épaisse pour tout porter, sans aucune ossature.", ok: false, why: "C'est la définition d'une structure monocoque, trop lourde et trop sensible aux entailles pour un avion de ligne." },
        { t: "Parce que le fuselage est un squelette de tubes recouvert d'une simple toile.", ok: false, why: "C'est le principe du treillis, utilisé sur les premiers avions." },
        { t: "Parce que le fuselage est fait de deux moitiés collées dans la longueur.", ok: false, why: "Le terme n'a rien à voir avec une division en deux moitiés : « semi » dit que la coque a besoin d'une ossature." },
      ],
      concept: "Principe semi-monocoque",
      explain: "Une structure semi-monocoque marie une peau mince et une ossature interne. L'avantage est la légèreté : on obtient beaucoup de rigidité pour peu de masse." },
    { id: 'a2-q2', type: 'hotid', fig: 'a2-eclate-structure',
      q: "Sur ce morceau de fuselage, choisis le nom de chaque pièce surlignée.",
      targets: [{ part: 'cadre' }, { part: 'lisse' }, { part: 'traverse' }, { part: 'rivets' }],
      concept: "Reconnaître les pièces en perspective",
      explain: "Les cadres sont les anneaux ; les lisses sont les baguettes parallèles à l'axe qui les croisent ; la traverse est la poutre horizontale qui porte le plancher ; les rivets sont les rangées de petits points qui fixent la peau à l'ossature." },
    { id: 'a2-q3', type: 'multi',
      q: "Coche toutes les raisons pour lesquelles un trou ou une rayure dans la structure est dangereux.",
      options: [
        { t: "Les efforts s'accumulent autour du défaut, où une fissure peut démarrer", ok: true, why: "C'est la concentration de contraintes : un défaut devient un point de départ de fissure." },
        { t: "À chaque vol, la structure est tendue puis relâchée : une fissure peut grandir lentement", ok: true, why: "C'est la fatigue : les cycles de pressurisation répètent l'effort des milliers de fois." },
        { t: "Le revêtement de protection est ouvert, ce qui peut laisser la corrosion s'installer", ok: true, why: "La protection de surface est une partie de la défense de la structure." },
        { t: "Le trou rend la pièce plus légère, donc l'avion consomme plus", ok: false, why: "Un trou retire un peu de masse : ce n'est pas lui qui pose problème, c'est l'effet sur la contrainte." },
        { t: "La rayure rend la peau plus rigide", ok: false, why: "Une entaille n'ajoute aucune rigidité ; elle affaiblit, au contraire, le point où elle se trouve." },
      ],
      concept: "Pourquoi on ne perce ni ne raye la structure",
      explain: "Trois mécanismes s'additionnent : l'accumulation des efforts autour du défaut, la répétition de ces efforts à chaque vol, et l'ouverture de la protection anticorrosion. La taille du défaut n'est pas le sujet." },
    { id: 'a2-q4', type: 'order',
      q: "Remets dans l'ordre les phases d'un cycle de pressurisation, du début à la fin d'un vol.",
      items: [
        "Au sol : l'écart de pression entre la cabine et l'extérieur est nul",
        "En montée : l'air extérieur se raréfie, l'écart de pression augmente",
        "En croisière : l'écart de pression reste à peu près stable",
        "À la descente : l'écart de pression diminue",
        "À l'arrivée : l'écart est de nouveau nul, la structure est relâchée",
      ],
      concept: "Cycle de pressurisation",
      explain: "Le cycle suit le profil du vol : l'écart monte, se stabilise, puis redescend. C'est cette alternance, répétée à chaque vol, qui sollicite la structure et peut provoquer de la fatigue." },
    { id: 'a2-q5', type: 'hottap', fig: 'a2-pressurisation',
      q: "Sur la figure, touche l'élément demandé.",
      targets: [
        { prompt: "La paroi bombée qui ferme la zone pressurisée à l'arrière de la cabine", part: 'cloison-arriere' },
        { prompt: "Le capot du nez, qui n'est pas pressurisé", part: 'nez' },
        { prompt: "La partie du fuselage derrière la cloison arrière, hors pression", part: 'cone-arriere' },
        { prompt: "Le volume bleu, où l'on maintient une pression plus forte que dehors", part: 'zone-pressurisee' },
      ],
      concept: "Zones pressurisées et non pressurisées",
      explain: "La cloison arrière est la paroi bombée ; le radôme est le capot du nez, avant la cloison avant ; le cône arrière est derrière la cloison arrière ; la zone pressurisée est le volume bleu qui englobe poste, cabine et soutes." },
    { id: 'a2-q6', type: 'match',
      q: "Associe chaque pièce de structure à son rôle.",
      pairs: [
        { l: "Cadre", r: "Anneau en travers qui garde la forme ronde du fuselage" },
        { l: "Lisse", r: "Baguette dans la longueur qui raidit la peau" },
        { l: "Traverse de plancher", r: "Poutre horizontale qui porte le plancher de la cabine" },
        { l: "Contrefiche", r: "Barre qui soutient la traverse en l'appuyant sur le cadre" },
        { l: "Éclisse", r: "Bande qui relie deux tôles à la jonction de deux tronçons" },
      ],
      concept: "Rôle des pièces de structure",
      explain: "Chaque pièce transmet l'effort à la suivante : la peau au cadre et à la lisse, le cadre à la traverse, la traverse aux contrefiches, et d'un tronçon à l'autre par l'éclisse. Connaître le rôle, c'est comprendre pourquoi on ne la modifie pas." },
    { id: 'a2-q7', type: 'mcq',
      q: "Pourquoi les fenêtres d'un avion de ligne ont-elles des angles arrondis ? Choisis une réponse.",
      options: [
        { t: "Parce que les angles vifs concentrent les efforts, et que la fatigue y démarre plus vite.", ok: true, why: "C'est l'enseignement tiré des ruptures par fatigue des premiers avions pressurisés : un angle vif est un point d'accumulation de contraintes." },
        { t: "Parce que c'est plus joli et plus facile à fabriquer.", ok: false, why: "L'esthétique n'y est pour rien : la forme est dictée par la résistance de la structure." },
        { t: "Parce que la vitre tient mieux dans une forme ronde.", ok: false, why: "La vitre n'est pas le sujet : c'est la tôle autour de l'ouverture qui peut se fissurer." },
        { t: "Parce que le hublot est ainsi plus facile à nettoyer.", ok: false, why: "Ce n'est pas un critère de conception structurale." },
      ],
      concept: "Concentration de contraintes et formes d'ouvertures",
      explain: "Un angle vif fait « monter » localement la contrainte, comme un coin dans lequel l'eau s'accumule. Les formes arrondies répartissent l'effort. C'est pourquoi on n'ouvre jamais la structure avec des angles ou des trous improvisés." },
    { id: 'a2-q8', type: 'input',
      q: "Lis le relevé ci-dessous. Combien d'éléments de structure y figurent ? Écris le nombre en chiffres.",
      doc: {
        title: "Relevé de dépose d'un panneau — document fictif pédagogique",
        lines: [["Zone", "Cabine, côté gauche, partie arrière (zone fictive C)"]],
        table: {
          head: ["Élément observé", "Observation"],
          rows: [
            ["Cadre", "Rien à signaler"],
            ["Matelas isolant", "Petite déchirure"],
            ["Lisse", "Rien à signaler"],
            ["Faisceau", "Un collier absent"],
            ["Peau (face intérieure)", "Rien à signaler"],
            ["Support de faisceau", "Rien à signaler"],
          ],
        },
        note: "Relevé imaginé pour apprendre : le format réel est choisi par l'entreprise.",
      },
      answers: ['3', 'trois'],
      concept: "Classer des éléments lus dans un relevé",
      explain: "Les trois éléments de structure sont le cadre, la lisse et la peau. Le matelas isolant est de l'habillage ; le faisceau et son support sont du système. Lire un relevé en rangeant chaque ligne dans sa catégorie est un réflexe que tu utiliseras tous les jours." },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "Le fuselage est une structure semi-monocoque : une peau mince raidie de l'intérieur par des cadres (anneaux en travers) et des lisses (baguettes dans la longueur), assemblés par des rivets. L'ensemble travaille comme un tout.",
    "Le plancher de la cabine repose sur des traverses fixées aux cadres et soutenues par des contrefiches ; les rails de sièges sont de la structure. Sous la cabine : plancher de soute et fond de cale, où s'accumule ce qui tombe.",
    "Le fuselage est rond parce qu'il est pressurisé : c'est un réservoir d'air gonflé et dégonflé à chaque vol. Un vol égale un cycle ; la répétition de ces cycles provoque la fatigue, qui démarre sur les trous, entailles et angles vifs.",
    "Le fuselage est fabriqué par tronçons, assemblés par des jonctions renforcées par des éclisses : ce sont des zones denses en fixations.",
    "On range ce qu'on voit en quatre catégories : structure, habillage, équipement, système. Chaque catégorie appelle un réflexe ; la structure ne se perce ni ne se raye.",
    "Quand les points de fixation prévus ne correspondent pas, ou quand tu observes une trace anormale derrière un panneau, tu ne corriges ni ne nettoies : tu décris, tu localises, tu préviens avant de refermer.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'a3', teaser: "Tu sais comment le fuselage est construit. Au chapitre suivant, tu apprends à t'y repérer : les trois axes, les stations, la gauche et la droite, les zones. Tu pourras alors dire précisément où se trouve ce que tu cherches, et comprendre où on t'envoie." },

  // Oral ──────────────────────────────────────────────────────────
  oral: [
    { q: "Explique à un collègue débutant comment est construit le fuselage d'un avion de ligne : ses pièces, leur rôle et le principe de la structure.",
      expected: [
        "Structure semi-monocoque : peau mince raidie par une ossature",
        "Cadres : anneaux en travers, donnent la forme ronde",
        "Lisses : baguettes dans la longueur, raidissent la peau",
        "Planchers : traverses fixées aux cadres, rails de sièges, contrefiches",
      ],
      model: "Le fuselage est un tube à structure semi-monocoque : une peau mince, qui ne serait pas assez solide seule, est raidie de l'intérieur par une ossature. Les cadres sont des anneaux placés en travers à intervalles réguliers : ils donnent la forme ronde. Les lisses sont des baguettes qui courent dans la longueur, contre la peau. Le tout est assemblé par des rivets. Le plancher de la cabine repose sur des traverses fixées aux cadres, soutenues par des contrefiches, et on y fixe les rails de sièges. Sous la cabine, on trouve le plancher de soute et le fond de cale." },
    { q: "Explique pourquoi un fuselage est rond et comment la pressurisation explique qu'on ne perce jamais la structure.",
      expected: [
        "Pressurisation : pression plus forte à l'intérieur qu'à l'extérieur en altitude",
        "Forme ronde et cloison arrière bombée : meilleure résistance à la pression",
        "Un vol = un cycle ; la répétition provoque la fatigue",
        "Un trou ou une rayure concentre les efforts et amorce une fissure",
      ],
      model: "En altitude, l'air est trop rare pour respirer, alors on maintient dans le fuselage une pression plus forte qu'à l'extérieur. Le fuselage se comporte comme un ballon : la forme ronde et la cloison arrière bombée résistent le mieux à cette poussée. À chaque vol, la structure est tendue puis relâchée : c'est un cycle, et la répétition de ces cycles provoque de la fatigue. Un trou ou une rayure concentre les efforts et peut amorcer une fissure qui grandit à chaque vol. C'est pourquoi on ne perce ni ne raye jamais la structure." },
    { q: "Tu as déposé un panneau et tu vois quatre choses : un cadre, un matelas isolant, un faisceau et un siège. Classe-les et dis le réflexe attaché à chaque catégorie.",
      expected: [
        "Cadre : structure, on ne perce pas, on ne raye pas",
        "Matelas isolant : habillage, manipuler avec soin",
        "Faisceau : système, cheminement sans tension ni frottement",
        "Siège : équipement, posé et déposé selon la configuration",
      ],
      model: "Le cadre est de la structure : je ne le perce pas, je ne le raye pas, je ne m'y appuie pas avec un outil. Le matelas isolant est de l'habillage : je le manipule avec soin et je le remets comme il était. Le faisceau est un système : je le fais cheminer sans le tendre ni le pincer. Le siège est un équipement : on le pose ou on le dépose selon la configuration choisie par la compagnie. Pour chaque catégorie, savoir où je suis me dit quel geste est permis." },
  ],

  // Matrice ───────────────────────────────────────────────────────
  matrix: [
    { savoir: "Je connais les pièces du fuselage (peau, cadres, lisses, traverses, contrefiches, rails) et leur rôle.",
      savoirFaire: "Je sais retrouver ces pièces sur une coupe ou derrière un panneau déposé, et dire où se situe mon intervention par rapport à elles.",
      comp: 'C1', ex: ['a2-a1', 'a2-q2', 'a2-q6'],
      proof: "Identification des pièces sur la coupe et sur la vue en perspective ; justifie la capacité à repérer son intervention dans l'aéronef, sans la certifier." },
    { savoir: "Je sais classer un élément en structure, habillage, équipement ou système, et je connais le réflexe associé à chaque catégorie.",
      savoirFaire: "Je sais reconnaître la structure avant de toucher, de fixer ou de démonter quoi que ce soit derrière un panneau.",
      comp: 'C4', ex: ['a2-a2', 'a2-a3', 'a2-q8'],
      proof: "Classement d'éléments et repérage de la structure sur la paroi ouverte : prépare le geste de fixer ou démonter en connaissant ce qui ne se perce pas." },
    { savoir: "Je comprends la pressurisation, la fatigue et la concentration de contraintes.",
      savoirFaire: "Je sais justifier pourquoi on ne perce ni ne raye la structure, utiliser les points de fixation prévus et signaler tout écart.",
      comp: 'C1', ex: ['a2-q3', 'a2-q4', 'a2-q7'],
      proof: "Choix des raisons d'un risque structurel, ordre d'un cycle de pressurisation et explication de la forme des ouvertures ; renforce la rigueur attendue avant toute intervention." },
  ],
});
