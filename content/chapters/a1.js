// Chapitre a1 — L'avion et ses grandes parties
CA.addChapter({
  id: 'a1',
  domain: 'A',
  order: 20,
  title: "L'avion et ses grandes parties",
  short: "Fuselage, voilure, empennage, moteurs, trains, surfaces mobiles : nommer et situer",
  minutes: 40,
  comps: ['C1'],
  prereq: ['m1'],
  sources: ['airbus-a320-facts-figures', 'airbus-a320-family', 'wiki-fuselage', 'erau-aerospace-structures', 'faa-amt-airframe', 'rncp40664', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Distinguer aéronef, aérostat, aérodyne et avion, et placer l'avion de ligne dans cette famille.",
    "Expliquer les quatre forces qui s'exercent sur un avion en vol et dire dans quelle situation elles s'équilibrent.",
    "Nommer, en français et en anglais, les dix grandes parties d'un avion de ligne et dire à quoi sert chacune.",
    "Associer chaque surface mobile (aileron, gouverne de profondeur, gouverne de direction, volet, bec, spoiler) au mouvement qu'elle provoque.",
    "Situer la cabine dans le fuselage et nommer les locaux qui l'entourent : poste de pilotage, soutes, cloison étanche, cône arrière.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Tu travailleras à l'intérieur d'un tube de métal, mais ce tube n'est qu'une partie d'un avion. Dès le premier jour, on te dira « va chercher ça côté aile », « l'équipe est à l'arrière », « attention, la gouverne bouge » : sans carte de l'avion dans la tête, ces phrases n'ont aucun sens et tu risques d'aller au mauvais endroit, ou de te trouver où tu n'as pas à être.",
    "Connaître les grandes parties sert aussi la sécurité. Certaines parties sont faites pour bouger (gouvernes, volets, trains), d'autres sont fragiles (carénages, radôme), d'autres encore sont des zones où l'on ne pose rien : on ne s'appuie pas sur une surface mobile, on ne dépose pas un outil sur une nacelle moteur, on ne passe pas sous une zone balisée. Tu ne respecteras ces règles que si tu sais reconnaître ce qu'on te montre.",
    "Enfin, comprendre ce qui fait voler un avion t'explique la logique de tout le reste : pourquoi chaque pièce de cabine est pesée, pourquoi on cherche des matériaux légers, pourquoi les fixations sont étudiées. Un avion est un compromis entre solidité et poids ; ton travail, au centimètre près, en fait partie.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'a1-avion-vue-ensemble',
    intro: "Voici un avion de ligne dessiné sous trois angles : de côté, de dessus et de face. Avant de lire, laisse ton regard parcourir l'image comme si tu faisais le tour de l'appareil à pied.",
    look: [
      "Sur la vue de côté, repère les endroits où il y a des fenêtres, et ceux où il n'y en a pas. Qu'y a-t-il, à ton avis, derrière les zones sans fenêtres ?",
      "Combien de moteurs vois-tu, et où sont-ils accrochés ? Compare avec la vue de dessus.",
      "Sur la vue de dessus, les ailes sont-elles droites ou inclinées vers l'arrière ? Et sur la vue de face, restent-elles à plat ?",
      "À l'arrière, une pièce est verticale et une autre horizontale. Laquelle est la plus grande ?",
      "Sur quoi l'avion repose-t-il quand il est au sol ? Combien de points d'appui comptes-tu sur la vue de côté ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Aéronef, aérodyne, avion : de quoi parle-t-on ?",
      fig: 'a1-familles-aeronefs',
      p: [
        "Commençons par les mots, car on les confond souvent. Un [[aéronef]] (*aircraft*) est un appareil capable de se déplacer dans l'air. C'est le mot le plus général : un ballon, un planeur et un avion de ligne sont tous des aéronefs.",
        "On les range en deux grandes familles selon la manière dont ils se tiennent en l'air. Les **aérostats** (en haut de la figure) sont **plus légers que l'air**, comme un morceau de bois flotte sur l'eau : une grande enveloppe remplie d'air chaud ou d'un gaz léger les fait monter. Ce sont le ballon (n° 1), qui va où le vent le pousse, et le dirigeable (n° 2), qui possède des moteurs et des gouvernes pour être dirigé.",
        "Les [[aérodyne]]s (en bas) sont **plus lourds que l'air**. Rien ne les fait flotter : ils tiennent en l'air grâce à l'air qui s'écoule autour d'une **aile**. Quand l'aile est fixe, c'est un planeur (n° 3, sans moteur) ou un [[avion]] (n° 4, avec des moteurs). Quand l'aile tourne, c'est un hélicoptère (n° 5) : son rotor est une aile qui tourne, ce qui lui permet de rester sur place.",
        "Un avion est donc un aérodyne à aile fixe, propulsé par un ou plusieurs moteurs. Le mot « avion de ligne » désigne un avion conçu pour transporter des passagers sur des vols réguliers : c'est celui dont tu aménageras la cabine. Dans la suite, « l'avion » désigne par défaut ce type d'appareil, à deux moteurs sous les ailes, qui est la configuration la plus répandue sur les moyen-courriers.",
      ],
    },
    {
      h: "Pourquoi un avion vole : quatre forces",
      fig: 'a1-quatre-forces',
      p: [
        "Un avion en vol subit quatre forces. Les deux premières sont verticales : le **poids** (n° 2) tire l'avion vers le bas ; la [[portance]] (*lift*, n° 1) le pousse vers le haut. Les deux autres sont horizontales : la [[poussée]] (*thrust*, n° 3), fournie par les moteurs, le tire vers l'avant ; la [[traînée]] (*drag*, n° 4), qui est la résistance de l'air, le retient vers l'arrière.",
        "D'où vient la portance ? De l'air qui s'écoule autour des ailes. Une aile a un profil particulier, arrondi dessus et plus plat dessous, et elle est légèrement inclinée par rapport au sens du vent relatif : l'air qui la contourne est dévié vers le bas, et en retour il pousse l'aile vers le haut. Retiens deux choses. D'abord, la portance **n'existe que si l'avion avance** : c'est pour cela qu'il lui faut une longue piste pour décoller et que ses moteurs doivent fournir de la poussée. Ensuite, ce ne sont pas les moteurs qui « soulèvent » l'avion : ils le font avancer, et c'est l'avancée qui crée la portance sur les ailes.",
        "Dans un vol horizontal à vitesse constante, les forces s'équilibrent deux à deux : la portance égale le poids, la poussée égale la traînée. C'est ce que montre la figure, avec des flèches de même longueur. Pour monter, descendre, accélérer ou ralentir, les pilotes modifient cet équilibre : plus de poussée, une aile plus inclinée, des surfaces mobiles sorties.",
        "Pour ton métier, retiens surtout le **poids**. Pour voler, tout ce qui pèse doit être porté par la portance, et ce qui est porté consomme du carburant. Voilà pourquoi on cherche partout des matériaux légers, pourquoi un panneau de cabine ne ressemble pas à une planche mais à un sandwich léger, et pourquoi chaque ajout non prévu (un support en plus, un produit en trop) compte. La cabine est un grand lieu où l'on gagne ou perd des kilogrammes.",
      ],
      table: {
        head: ["Force", "Sens", "D'où elle vient", "Ce que cela t'apprend"],
        rows: [
          ["Portance (lift)", "Vers le haut", "L'air qui s'écoule autour des ailes", "Elle n'existe qu'en avançant ; elle dépend de la forme des ailes"],
          ["Poids (weight)", "Vers le bas", "La masse de tout ce que l'avion emporte", "Chaque kilogramme à bord doit être porté : on pèse tout"],
          ["Poussée (thrust)", "Vers l'avant", "Les moteurs", "Elle fait avancer l'avion ; sans elle, pas de portance"],
          ["Traînée (drag)", "Vers l'arrière", "La résistance de l'air", "Les formes lisses réduisent la traînée : on ne laisse pas dépasser ce qui n'est pas prévu"],
        ],
      },
    },
    {
      h: "Vue d'ensemble : les dix grandes parties",
      fig: 'a1-avion-vue-ensemble',
      p: [
        "Revenons à la figure d'ouverture. Elle montre les dix parties que tu dois savoir nommer, en français et en anglais, et situer sans hésiter. Nous allons les parcourir de l'avant vers l'arrière, puis détailler celles qui t'intéressent le plus.",
        "Le **[[fuselage]]** (n° 1, *fuselage*) est le corps de l'avion : un long tube qui loge les pilotes, les passagers et le fret, et sur lequel tout le reste est fixé. À l'avant, le **poste de pilotage** (n° 2, *flight deck*, familièrement *cockpit*) est le local d'où l'équipage conduit l'avion, séparé de la cabine par une cloison et une porte. Au-dessus, la **cabine passagers** (n° 3, *passenger cabin*) est la partie haute du fuselage, repérable à sa rangée de hublots : c'est ta future zone de travail. Sous le plancher de la cabine, la **soute** (n° 4, *cargo hold*) reçoit les bagages et le fret, chargés par des portes placées sur le flanc. Les **portes** (n° 5, *doors*) servent à entrer, sortir, ravitailler et évacuer.",
        "À l'arrière, la **dérive** (n° 6, *vertical stabilizer* ou *fin*) est la pièce verticale, et le **stabilisateur horizontal** (n° 7, *horizontal stabilizer* ou *tailplane*) est la petite aile horizontale. Ensemble, elles forment l'**[[empennage]]**, comme les plumes d'une flèche. La **[[voilure]]** (n° 8, *wing*) désigne les deux ailes. Les **moteurs** (n° 9, *engines*) sont logés dans des **nacelles** (*nacelles*), accrochées sous les ailes. Les **[[train d'atterrissage|trains d'atterrissage]]** (n° 10, *landing gear*) portent l'avion au sol.",
        "Quelques ordres de grandeur, pour garder les proportions en tête. Les données publiques d'une famille d'avions moyen-courriers très répandue, l'A320neo, donnent environ **37,6 m de longueur**, **35,8 m d'envergure** (la largeur d'une aile à l'autre) et **11,8 m de hauteur**. C'est à peu près la longueur de deux autobus articulés mis bout à bout. Un avion de ligne est donc aussi large qu'il est long : regarde la vue de dessus de la figure, les deux dimensions sont voisines. Ces chiffres sont des ordres de grandeur pour un avion donné ; d'autres avions sont plus petits ou plus grands.",
      ],
    },
    {
      h: "Le fuselage de l'intérieur",
      fig: 'a1-dans-le-fuselage',
      p: [
        "Coupons maintenant le fuselage dans sa longueur, comme une tranche de gâteau. Le fuselage n'est pas un grand volume vide : il est partagé en locaux, chacun avec sa fonction. Lis la figure de l'avant vers l'arrière.",
        "Tout à l'avant, le **nez** (n° 1) se termine par le **radôme** (*radome*), capot qui abrite l'antenne du radar météo : une coque légère, fragile, qu'on ne manipule pas. Juste derrière, le **poste de pilotage** (n° 2). Sous lui, sur beaucoup d'avions de ligne, la **soute électronique** (n° 3, *avionics bay*) regroupe des calculateurs et des équipements électriques.",
        "Vient la **cabine passagers** (n° 4), posée sur le **plancher cabine** (n° 5). Ce plancher, que tu connaîtras très bien, est une séparation capitale : au-dessus, les passagers et ce que tu installes ; au-dessous, les **soutes** (n° 6 et 8, avant et arrière) et, au milieu, le **caisson central de voilure et le logement de train** (n° 7), c'est-à-dire la structure qui relie les deux ailes et la case où se range le train principal. Les ailes ne passent donc pas dans la cabine : elles sont sous le plancher.",
        "À l'arrière de la cabine, une paroi bombée, la **cloison étanche arrière** (n° 9, *rear pressure bulkhead*), ferme le volume où l'air est maintenu sous pression en vol. Derrière elle, le **cône arrière** (n° 10, *tail cone*) porte l'empennage. On y trouve en général le **groupe auxiliaire de puissance** (*APU*), un petit moteur qui fournit électricité et air quand les gros moteurs sont arrêtés. Tout ce qui est derrière la cloison n'est plus de la cabine : si on te dit « à l'arrière », la question « avant ou après la cloison étanche ? » est la première à poser.",
        "Pourquoi cette organisation ? Parce que chaque volume a un usage et des contraintes. Les passagers occupent le niveau supérieur, le fret le niveau inférieur, et les zones techniques sont mises à l'écart du public. Le chapitre suivant explique comment la structure du fuselage tient tout cela ensemble.",
      ],
    },
    {
      h: "La voilure, l'empennage et les moteurs",
      p: [
        "**La voilure** crée la portance. Une aile de ligne est creuse : elle contient du carburant et sert de support aux moteurs. Elle est « en flèche », c'est-à-dire inclinée vers l'arrière, une forme adaptée aux vitesses élevées des avions de ligne. Son intérieur est une charpente de poutres et de nervures, recouverte d'une peau ; on n'y travaille pas depuis la cabine, mais elle est très proche, sous le plancher, au niveau du caisson central.",
        "**L'empennage** stabilise l'avion, comme les plumes d'une flèche. La dérive empêche l'avion de « partir de travers » ; le stabilisateur horizontal empêche le nez de monter ou de plonger tout seul. Chacun porte à l'arrière une surface mobile, vue plus loin, qui sert à piloter : la gouverne de direction pour la dérive, la gouverne de profondeur pour le stabilisateur.",
        "**Les moteurs** fournissent la poussée. Sur un avion de ligne moderne, ce sont des turboréacteurs à double flux : ils aspirent l'air par l'avant, le compriment, y brûlent du carburant, puis expulsent les gaz vers l'arrière ; par action et réaction, l'avion avance. Chaque moteur est enveloppé d'une **nacelle** (*nacelle*), carénage profilé qui canalise l'air et protège le moteur, et il est accroché sous l'aile par un **mât** (*pylon*). Autour des moteurs, des zones sont signalées comme dangereuses à certains moments ; tu respectes le balisage de ton entreprise et tu ne te fies pas à ton impression que « c'est éteint ».",
        "**Les trains d'atterrissage** portent l'avion au sol : un **train avant** sous le nez, qui sert aussi à diriger l'avion à basse vitesse, et des **trains principaux** sous les ailes ou à leur proximité, qui encaissent la plus grande partie du poids. Les jambes absorbent le choc à l'atterrissage, les roues freinent. En vol, les trains rentrent dans des logements fermés par des trappes, ce qui réduit la traînée. Pour toi, retiens que tout le poids de l'avion passe par ces points : on ne s'en approche pas pour s'y appuyer et on ne laisse rien dans leur zone.",
      ],
    },
    {
      h: "Les surfaces mobiles : ce qui bouge et pourquoi",
      fig: 'a1-surfaces-mobiles',
      p: [
        "Une partie de l'avion est faite pour **bouger**. La figure les montre vues de dessus. Elles se répartissent en deux familles : les **gouvernes**, qui servent à piloter, et les surfaces qui modifient la portance de l'aile aux basses vitesses.",
        "Un avion peut tourner autour de trois axes. Le **roulis** est l'inclinaison d'une aile vers le bas : il est commandé par les **ailerons** (n° 4, *ailerons*), placés au bout des ailes ; quand l'un monte, l'autre descend. Le **tangage** est le mouvement du nez vers le haut ou le bas : il est commandé par la **gouverne de profondeur** (n° 5, *elevator*), au bord arrière du stabilisateur. Le **lacet** est le pivotement du nez vers la gauche ou la droite : il est commandé par la **gouverne de direction** (n° 6, *rudder*), sur la dérive, qu'on voit dans l'encart.",
        "Les autres surfaces servent surtout au décollage et à l'atterrissage, quand l'avion va lentement et que l'aile doit porter malgré tout. Les **becs** (n° 1, *slats*) s'avancent devant l'aile ; les **volets** (n° 3, *flaps*) reculent et s'abaissent derrière : ensemble, ils augmentent la portance à basse vitesse. Les **spoilers** (n° 2) sont des panneaux qui se lèvent sur le dessus de l'aile : ils cassent la portance et freinent l'avion, surtout à l'atterrissage.",
        "Ces surfaces sont actionnées par des systèmes de puissance de l'avion. Quand l'avion est alimenté, elles peuvent bouger, y compris quand tu es dans la cabine ou sur une plateforme à proximité. La règle de métier est simple : tu ne t'appuies pas sur une surface mobile, tu n'y poses rien, tu respectes les balisages et les consignes de l'équipe qui les fait fonctionner.",
      ],
      table: {
        head: ["Surface (anglais)", "Où", "Effet", "Mouvement de l'avion"],
        rows: [
          ["Aileron (aileron)", "Bout de chaque aile, bord arrière", "Une monte, l'autre descend", "Roulis : l'avion s'incline"],
          ["Gouverne de profondeur (elevator)", "Bord arrière du stabilisateur", "Monte ou descend", "Tangage : le nez monte ou plonge"],
          ["Gouverne de direction (rudder)", "Bord arrière de la dérive", "Pivote à gauche ou à droite", "Lacet : le nez tourne à gauche ou à droite"],
          ["Bec (slat)", "Bord avant de l'aile", "S'avance", "Plus de portance à basse vitesse"],
          ["Volet (flap)", "Bord arrière de l'aile, vers le fuselage", "Recule et s'abaisse", "Plus de portance à basse vitesse"],
          ["Spoiler", "Dessus de l'aile", "Se lève", "Casse la portance, freine"],
        ],
      },
    },
    {
      h: "Où est ta cabine ?",
      p: [
        "Récapitulons en plaçant ton futur lieu de travail. La cabine est **dans le fuselage**, dans sa partie haute, au-dessus du plancher cabine, entre le poste de pilotage à l'avant et la cloison étanche arrière. Elle est entourée de la peau du fuselage, percée de hublots et de portes. Sous elle, les soutes et le caisson central ; devant, le poste de pilotage ; derrière, la cloison étanche et le cône arrière.",
        "Quand on te dit « vers l'avant », on parle du côté du nez ; « vers l'arrière », du côté de la dérive. Les mots *nez* et *queue* (en anglais *nose* et *tail*) suffisent pour s'orienter. Le chapitre sur le repérage dans l'avion ajoutera les mots pour la gauche, la droite, les zones et les stations.",
        "Retiens aussi que beaucoup de ce que tu installeras dans la cabine est **pesé** : sièges, rangements, galleys. Un avion est un compromis entre solidité et poids, et la cabine est un des endroits où ce compromis se joue.",
      ],
      callout: { kind: 'tip', text: "Pour mémoriser les dix parties, récite-les en faisant le tour de l'avion dans ta tête : nez et poste de pilotage, cabine et soute, portes, aile et moteur, trains, puis dérive et stabilisateur. Les deux dernières ont un nom de flèche : empennage." },
    },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: "Aérodyne", en: "Heavier-than-air aircraft", def: "Aéronef plus lourd que l'air, qui se maintient en l'air grâce à l'air qui s'écoule autour d'une aile fixe ou tournante : avion, planeur, hélicoptère.", tip: "Dyne vient du grec « force » : c'est la force de l'air qui le porte." },
    { fr: "Avion", en: "Aeroplane (airplane)", def: "Aérodyne à aile fixe et à moteur : les moteurs le font avancer, et l'air qui passe sur les ailes le porte." },
    { fr: "Fuselage", en: "Fuselage", def: "Corps de l'avion : long tube qui loge l'équipage, les passagers et le fret, et sur lequel les ailes, l'empennage et les trains sont fixés." },
    { fr: "Voilure", en: "Wing", def: "Ensemble des deux ailes : elles créent la portance, portent les moteurs et contiennent du carburant." },
    { fr: "Empennage", en: "Empennage (tail assembly)", def: "Ensemble de l'arrière : dérive et stabilisateur horizontal ; il stabilise l'avion.", tip: "Comme les plumes (« penne ») d'une flèche." },
    { fr: "Dérive", en: "Vertical stabilizer (fin)", def: "Plan vertical de l'arrière : il empêche l'avion de partir de travers. Elle porte la gouverne de direction." },
    { fr: "Stabilisateur horizontal", en: "Horizontal stabilizer (tailplane)", def: "Petite aile horizontale de l'arrière : elle empêche le nez de monter ou de plonger tout seul. Elle porte la gouverne de profondeur." },
    { fr: "Nacelle", en: "Nacelle", def: "Carénage profilé qui enveloppe un moteur, le protège et canalise l'air ; elle est accrochée sous l'aile par un mât." },
    { fr: "Train d'atterrissage", en: "Landing gear", def: "Jambes, amortisseurs et roues qui portent l'avion au sol : un train avant sous le nez et des trains principaux près des ailes." },
    { fr: "Portance", en: "Lift", def: "Force dirigée vers le haut, créée par l'air qui s'écoule autour des ailes ; elle n'existe que si l'avion avance." },
    { fr: "Poussée", en: "Thrust", def: "Force qui fait avancer l'avion, fournie par les moteurs." },
    { fr: "Traînée", en: "Drag", def: "Force de résistance de l'air qui s'oppose à l'avancée de l'avion." },
    { fr: "Gouverne", en: "Control surface", def: "Surface mobile qui sert à piloter : aileron, gouverne de profondeur, gouverne de direction." },
    { fr: "Volet", en: "Flap", def: "Panneau du bord arrière de l'aile qui recule et s'abaisse pour augmenter la portance aux basses vitesses." },
    { fr: "Soute", en: "Cargo hold", def: "Volume situé sous le plancher de la cabine, où l'on charge les bagages et le fret par des portes placées sur le flanc." },
    { fr: "Cloison étanche", en: "Pressure bulkhead", def: "Paroi qui ferme le volume du fuselage où l'air est maintenu sous pression ; il y en a une à l'avant et une, bombée, à l'arrière." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Jeudi, 8 h : le tour de l'avion avec Samia",
    body: [
      "Avant de te laisser entrer dans la cabine, ta tutrice Samia te fait faire le tour de l'avion à pied, en hangar. « On commence par le nez. Qu'est-ce que c'est, ce capot ? » Tu hésites : le radôme. « Bien. On n'y pose rien, on n'y appuie rien : c'est léger et ça casse. » Vous longez le flanc : hublots, première porte, deuxième porte. Samia s'arrête : « Entre les deux portes, la cabine ; sous tes pieds, la soute ; et sous la soute, personne ne travaille, mais l'eau de condensation y finit. Retiens qu'il y a trois niveaux. »",
      "Sous l'aile, un balisage orange entoure le moteur. Karim, un collègue, le contourne largement. « Le moteur est éteint, non ? » dis-tu. Samia secoue la tête : « C'est ce que tout le monde croit. Je ne sais pas si l'avion est alimenté ce matin, ni qui travaille là-haut : le balisage me le dit pour moi. Si je le franchis sans demander, je décide à la place de quelqu'un qui sait. » Au passage, elle te fait toucher le bord de la nacelle de la main, doucement, puis t'explique qu'on ne posera jamais un outil dessus.",
      "À l'arrière, vous arrivez sous la dérive. Samia lève la tête : « Vertical : la dérive. Horizontal : le stabilisateur. Les deux portent à leur arrière une gouverne qui bouge. » Elle ajoute, pour terminer : « Derrière la dernière rangée de sièges, il y a une cloison bombée : la cloison étanche. Derrière, le cône arrière, et on y met un petit moteur, l'APU. Ce n'est pas la cabine. Si quelqu'un te dit « à l'arrière » et que tu hésites entre avant et après la cloison, demande. » Le tour a duré vingt minutes. Tu n'as touché à rien d'important, et tu sais mieux où tu vas que si tu avais lu une demi-heure.",
    ],
    doc: {
      title: "Fiche de reconnaissance de l'avion — document fictif pédagogique",
      lines: [
        ["Partie", "Consigne de la visite"],
        ["Radôme (nez)", "Ne pas appuyer, ne rien poser"],
        ["Moteur et nacelle", "Respecter le balisage ; ne rien poser sur la nacelle"],
        ["Surfaces mobiles (ailerons, volets, gouvernes)", "Ne pas s'y appuyer, ne pas y poser d'outil"],
        ["Trains d'atterrissage", "Ne pas s'y appuyer, ne rien laisser dans la zone"],
        ["Cabine", "Entrer par les plateformes d'accès uniquement"],
      ],
      note: "Fiche imaginée pour apprendre : les consignes réelles sont celles de ton entreprise et de ton chef d'équipe.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Un vol, vu par les parties de l'avion",
    fig: 'a1-avion-vue-ensemble',
    steps: [
      { label: "Au sol : les trains portent", text: "L'avion est sur ses trains : un train avant sous le nez, des trains principaux sous les ailes. Tout le poids passe par ces points, ce qui est la raison de leur robustesse. Les passagers montent par les portes, les bagages vont dans la soute.", hl: ['trains', 'portes', 'soute'] },
      { label: "Au décollage : les moteurs poussent", text: "Les moteurs, dans leurs nacelles sous les ailes, fournissent la poussée : l'avion accélère sur la piste. Plus il va vite, plus l'air qui s'écoule autour des ailes crée de portance.", hl: ['moteur', 'voilure'] },
      { label: "Quand la portance dépasse le poids", text: "Dès que la portance devient plus grande que le poids, l'avion quitte le sol. La voilure fait le travail, et le fuselage, avec la cabine et la soute, est simplement porté.", hl: ['voilure', 'fuselage'] },
      { label: "En vol : l'arrière stabilise", text: "En croisière, la dérive et le stabilisateur horizontal gardent l'avion droit : l'avion ne part pas de travers et le nez ne bascule pas tout seul.", hl: ['derive', 'stabilisateur'] },
      { label: "Dans le fuselage", text: "Pendant tout ce temps, les passagers sont dans la cabine, séparés du poste de pilotage par une cloison et une porte ; le poste de pilotage reste à l'avant, d'où l'équipage conduit l'avion.", hl: ['cabine', 'cockpit'] },
      { label: "À l'atterrissage : les trains encaissent", text: "L'avion revient au sol. Les trains absorbent le choc de l'arrivée et les roues freinent. Le chemin du vol se termine là où il a commencé.", hl: ['trains'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    { id: 'a1-a1', type: 'hotid', fig: 'a1-avion-vue-ensemble',
      q: "Pour chaque partie surlignée sur l'avion, choisis son nom dans la liste.",
      targets: [{ part: 'derive' }, { part: 'stabilisateur' }, { part: 'moteur' }, { part: 'trains' }, { part: 'soute' }],
      concept: "Reconnaître les grandes parties de l'avion",
      explain: "La dérive est la pièce verticale ; le stabilisateur est la petite aile horizontale à l'arrière ; le moteur est le cylindre suspendu sous l'aile ; les trains sont les jambes à roues ; la soute est le volume sous le plancher cabine, avec ses portes sur le flanc. Retrouve-les d'abord par leur forme, puis par leur place." },
    { id: 'a1-a2', type: 'match',
      q: "Associe chaque partie de l'avion au rôle qui la décrit le mieux.",
      pairs: [
        { l: "Voilure", r: "Crée la portance, porte les moteurs et contient du carburant" },
        { l: "Dérive", r: "Empêche l'avion de partir de travers" },
        { l: "Stabilisateur horizontal", r: "Empêche le nez de monter ou de plonger tout seul" },
        { l: "Train d'atterrissage", r: "Porte l'avion au sol et encaisse le choc à l'atterrissage" },
        { l: "Nacelle", r: "Enveloppe le moteur et canalise l'air autour de lui" },
      ],
      concept: "Rôle des grandes parties",
      explain: "Chaque partie répond à une fonction : porter (voilure, trains), stabiliser (dérive, stabilisateur), propulser (moteur dans sa nacelle). Quand tu connais la fonction, tu retrouves plus facilement le nom, même sans avoir la figure sous les yeux." },
    { id: 'a1-a3', type: 'sort',
      q: "Classe chaque élément dans la force à laquelle il se rattache.",
      bins: ["Portance", "Poids", "Poussée", "Traînée"],
      items: [
        { t: "L'air qui s'écoule autour des ailes", bin: 0, why: "C'est l'origine de la portance : sans écoulement, pas de force vers le haut." },
        { t: "Le carburant et les bagages embarqués", bin: 1, why: "Plus l'avion emporte de masse, plus son poids augmente." },
        { t: "Les moteurs sous les ailes", bin: 2, why: "Ils fournissent la force qui fait avancer l'avion." },
        { t: "La résistance de l'air contre le fuselage", bin: 3, why: "Tout ce qui avance dans l'air est freiné par lui : c'est la traînée." },
        { t: "Un panneau de cabine plus lourd que prévu", bin: 1, why: "Ce n'est pas anodin : une masse supplémentaire s'ajoute au poids à porter." },
        { t: "Les volets sortis à basse vitesse", bin: 0, why: "Ils augmentent la portance de l'aile quand l'avion va lentement." },
        { t: "Un élément qui dépasse du fuselage sans être prévu", bin: 3, why: "Il perturbe l'écoulement de l'air et augmente la traînée." },
      ],
      concept: "Les quatre forces",
      explain: "Chaque force a son origine : l'air autour des ailes pour la portance, la masse embarquée pour le poids, les moteurs pour la poussée, la résistance de l'air pour la traînée. Un ajout dans la cabine pèse ; un défaut à l'extérieur freine. Les deux coûtent du carburant." },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Croire que ce sont les moteurs qui soulèvent l'avion.",
      why: "Les moteurs fournissent la poussée, qui fait avancer ; c'est l'air qui s'écoule autour des ailes qui crée la portance. Sans vitesse, une aile ne porte pas.",
      better: "Retenir le lien : les moteurs font avancer, l'avancée crée la portance, la portance tient l'avion." },
    { error: "Confondre la dérive et le stabilisateur horizontal, ou croire que la dérive fait monter et descendre l'avion.",
      why: "La dérive est verticale et agit sur le lacet (virage gauche-droite) ; le stabilisateur horizontal agit sur le tangage. En confondre une, c'est se tromper de pièce dans un document ou dans un plan.",
      better: "Dérive = verticale, comme l'aileron d'un requin. Stabilisateur = horizontal, comme une petite aile." },
    { error: "Confondre cabine et fuselage, ou penser que tout l'espace derrière la dernière rangée de sièges fait partie de la cabine.",
      why: "Le fuselage est le tube entier : poste de pilotage, cabine, soutes, cône arrière. La cabine n'en est qu'une partie, entre le poste de pilotage et la cloison étanche arrière.",
      better: "Quand on te dit « à l'arrière », demander : avant ou après la cloison étanche ?" },
    { error: "S'appuyer sur une surface mobile, une nacelle ou un train, ou y poser un outil « juste une seconde ».",
      why: "Ces pièces sont conçues pour leur fonction, pas pour porter un poids ponctuel. Une surface alimentée peut bouger, et un outil posé sur une nacelle ou une surface tombe ou se coince.",
      better: "Garder ses outils dans le bac ou à la main ; respecter les balisages ; ne jamais s'appuyer sur ce qui peut bouger ou se déformer." },
    { error: "Penser que le poids ne concerne que le carburant et les passagers.",
      why: "Tout ce qui est à bord compte : un panneau, un câble, un support en trop. Chaque kilogramme à porter coûte du carburant à chaque vol, pour toute la vie de l'avion.",
      better: "Ne rien ajouter qui ne soit prévu, ne pas laisser de matériel dans l'avion, et traiter les écarts de masse comme des écarts à signaler." },
    { error: "Croire que les ailes passent par la cabine, ou que les moteurs sont dans le fuselage.",
      why: "Sur un avion de ligne à moteurs sous les ailes, les ailes sont fixées au fuselage par le caisson central, sous le plancher cabine. Les moteurs sont dans des nacelles accrochées sous les ailes.",
      better: "Se représenter l'avion en trois niveaux : cabine au-dessus, soutes et caisson central en dessous, ailes de part et d'autre du caisson." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Le raccourci sous le balisage",
      context: [
        "13 h 15. Tu dois aller de la zone logistique à la plateforme d'accès côté droit, où ton chef d'équipe t'attend avec un carton de visserie. Un cordon orange est tendu autour de la zone sous la voilure et le moteur, de ce côté. Pour contourner, il faut marcher une vingtaine de mètres le long du mur. Karim te rattrape : « Passe sous le cordon, c'est quatre pas au lieu de vingt. Il n'y a personne. »",
        "Tu regardes : en effet, personne n'est visible, aucun bruit de moteur. Mais tu ne sais pas pourquoi le cordon a été mis là ce matin.",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je contourne par l'allée, quitte à perdre une minute, et je demande ensuite à mon chef d'équipe ce que signalait le balisage.", ok: true,
          why: "Un balisage dit qu'il y a un danger ou une opération en cours, même invisible : une surface mobile peut être alimentée, quelqu'un peut travailler au-dessus. Tu n'as pas à deviner ce qui s'y passe. Contourner coûte une minute ; franchir sans savoir peut coûter bien plus." },
        { t: "Je passe sous le cordon rapidement, en regardant bien en l'air.", ok: false,
          why: "Tu regardes ce que tu peux voir, pas ce qui peut démarrer ou tomber. Un cordon n'est pas une invitation à évaluer le risque soi-même." },
        { t: "Je soulève le cordon pour passer, je le remets en place ensuite.", ok: false,
          why: "Tu entres dans une zone que d'autres ont fermée, sans qu'ils le sachent. Le remettre en place ne change rien à l'entrée." },
        { t: "Je demande à Karim de passer le premier, pour vérifier que la zone est sûre.", ok: false,
          why: "Tu transfères le risque à un collègue au lieu de le respecter. La sécurité d'une zone se règle par l'équipe qui l'a balisée, pas par un essai." },
      ],
      debrief: "Règle de métier : un balisage ne se discute pas, il se contourne. Tu ne peux pas savoir seule pourquoi une zone est fermée, et tu n'as pas à le savoir pour la respecter. Le gain de temps est minuscule face au risque d'un moteur, d'une surface mobile ou d'un travail en hauteur dont tu ignores tout.",
    },
    {
      title: "« Les cartons sont à l'arrière »",
      context: [
        "9 h 40. Ton chef d'équipe te demande d'aller chercher « les cartons de panneaux, à l'arrière de l'avion, derrière la dernière rangée ». Tu montes dans l'avion par la porte arrière. Au bout de la cabine, tu vois une cloison bombée, avec une petite porte. Devant la cloison, aucun carton. Derrière elle, tu devines un local étroit, encombré d'équipements, un peu froid.",
        "Un collègue passe et te dit : « Va voir derrière la cloison, c'est là qu'on met tout ce qui ne sert pas. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je m'arrête devant la cloison et je demande à mon chef d'équipe de préciser où sont les cartons, avant et après la cloison étanche, plutôt que d'ouvrir la porte.", ok: true,
          why: "La cloison étanche sépare la cabine du cône arrière : ce n'est plus la cabine. Une zone technique, où se trouvent des équipements et des accès réservés, ne se visite pas par curiosité. Une question coûte trente secondes ; entrer dans un local où l'on n'a rien à faire peut gêner une autre équipe ou abîmer quelque chose." },
        { t: "J'entre derrière la cloison : « derrière la dernière rangée », c'est exactement là.", ok: false,
          why: "Tu confonds l'arrière de la cabine et l'arrière du fuselage. La dernière rangée est devant la cloison ; ce qui est derrière n'est pas de la cabine et peut ne pas être accessible à ton poste." },
        { t: "Je redescends sur la plateforme et je cherche des cartons à l'extérieur, sous l'avion, par la soute arrière.", ok: false,
          why: "La soute est sous le plancher, accessible par des portes extérieures et réservée au fret. Tu t'éloignes de la demande sans l'avoir clarifiée." },
        { t: "Je rapporte les premiers cartons que je trouve dans l'avion, en pensant que ça ira.", ok: false,
          why: "Des cartons de panneaux sont préparés pour une tâche précise ; en prendre d'autres sans vérifier crée une erreur de pièce qu'on découvre à la pose." },
      ],
      debrief: "Règle de métier : « à l'arrière » ne veut rien dire sans repère. Avant ou après la cloison étanche ? Dans la cabine ou dans la soute ? Connaître la structure du fuselage te permet de poser la bonne question, au lieu de deviner. Demander n'est pas un manque d'autonomie : c'est la façon d'être sûre.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    { id: 'a1-q1', type: 'mcq',
      q: "Choisis la définition correcte d'un avion.",
      options: [
        { t: "Un aérodyne à aile fixe, propulsé par un ou plusieurs moteurs.", ok: true, why: "Il est plus lourd que l'air (aérodyne), tient grâce à ses ailes fixes et avance grâce à ses moteurs." },
        { t: "Un aérostat qui flotte parce qu'il est plus léger que l'air.", ok: false, why: "C'est la définition d'un ballon ou d'un dirigeable. Un avion est plus lourd que l'air." },
        { t: "Un aérodyne dont l'aile tourne, comme un hélicoptère.", ok: false, why: "Cela décrit une voilure tournante. L'avion a des ailes fixes." },
        { t: "Un aéronef sans moteur qui descend en planant.", ok: false, why: "C'est un planeur. L'avion a au moins un moteur." },
      ],
      concept: "Aéronef, aérodyne, avion",
      explain: "On passe du plus général au plus précis : aéronef (tout ce qui se déplace dans l'air), aérodyne (plus lourd que l'air), avion (aérodyne à aile fixe et à moteur). Les hélicoptères sont des aérodynes à voilure tournante." },
    { id: 'a1-q2', type: 'multi',
      q: "Coche tout ce que fait la voilure d'un avion de ligne.",
      options: [
        { t: "Elle crée la portance", ok: true, why: "C'est sa fonction première : l'air qui s'écoule autour d'elle produit la force qui tient l'avion en l'air." },
        { t: "Elle contient du carburant", ok: true, why: "L'intérieur creux d'une aile de ligne sert de réservoir." },
        { t: "Elle porte les moteurs, accrochés sous elle par un mât", ok: true, why: "Sur un avion à moteurs sous les ailes, les nacelles sont fixées sous la voilure." },
        { t: "Elle loge les passagers et le fret", ok: false, why: "Ce sont le rôle du fuselage : cabine pour les passagers, soute pour le fret." },
        { t: "Elle empêche l'avion de partir de travers", ok: false, why: "Cette fonction appartient à la dérive, à l'arrière." },
      ],
      concept: "Rôles de la voilure",
      explain: "La voilure porte (portance), stocke (carburant) et supporte (moteurs). Les rôles de loger les personnes et de stabiliser l'avion reviennent respectivement au fuselage et à l'empennage." },
    { id: 'a1-q3', type: 'hottap', fig: 'a1-surfaces-mobiles',
      q: "Touche, sur la figure, la surface mobile demandée.",
      targets: [
        { prompt: "La surface qui fait incliner l'avion d'un côté (roulis)", part: 'aileron' },
        { prompt: "La surface qui fait monter ou plonger le nez (tangage)", part: 'profondeur' },
        { prompt: "La surface qui fait pivoter le nez à gauche ou à droite (lacet)", part: 'direction' },
        { prompt: "Le panneau qui se lève sur le dessus de l'aile pour casser la portance", part: 'spoiler' },
      ],
      concept: "Surfaces mobiles et mouvements",
      explain: "Les ailerons sont au bout des ailes (roulis), la gouverne de profondeur est au bord arrière du stabilisateur (tangage), la gouverne de direction est sur la dérive (lacet), les spoilers sont sur le dessus de l'aile. Les orange sont les gouvernes de pilotage." },
    { id: 'a1-q4', type: 'order',
      q: "Remets dans l'ordre, de l'avant vers l'arrière, les locaux du fuselage.",
      items: [
        "Nez et radôme",
        "Poste de pilotage",
        "Cabine passagers",
        "Cloison étanche arrière",
        "Cône arrière",
      ],
      concept: "Locaux du fuselage, de l'avant vers l'arrière",
      explain: "Le fuselage commence par le nez avec son radôme, puis le poste de pilotage, la cabine, la cloison étanche arrière qui ferme le volume sous pression, et enfin le cône arrière avec l'empennage. La cabine se situe entre le poste et la cloison arrière." },
    { id: 'a1-q5', type: 'mcq',
      q: "Pourquoi le poids d'une pièce de cabine compte-t-il pour un avion ? Choisis une réponse.",
      options: [
        { t: "Parce que tout ce qui est à bord doit être porté par la portance, ce qui consomme du carburant à chaque vol.", ok: true, why: "Plus la masse à porter augmente, plus il faut de portance et donc de poussée. Les kilogrammes se paient à chaque vol." },
        { t: "Parce qu'une pièce trop lourde ferait tomber le plancher.", ok: false, why: "Ce n'est pas le sujet : le plancher est dimensionné pour supporter des charges. Le poids compte pour la consommation et l'équilibre." },
        { t: "Parce que le poids ne joue que sur le décollage.", ok: false, why: "Le poids s'exerce en permanence en vol, et la portance doit l'équilibrer en croisière." },
        { t: "Parce que les moteurs doivent pousser vers le haut.", ok: false, why: "Les moteurs poussent vers l'avant ; ce sont les ailes qui portent. Le poids supplémentaire exige donc plus de portance, donc plus d'énergie." },
      ],
      concept: "Rôle du poids",
      explain: "Le poids est la force qu'il faut équilibrer à tout moment du vol. Moins une cabine pèse, plus l'avion consomme peu et peut emporter de passagers ou de carburant. Un ajout non prévu n'est jamais neutre." },
    { id: 'a1-q6', type: 'hotid', fig: 'a1-dans-le-fuselage',
      q: "Pour chaque local surligné dans le fuselage, choisis son nom.",
      targets: [{ part: 'plancher' }, { part: 'cloison-arriere' }, { part: 'caisson' }, { part: 'soute-electronique' }],
      concept: "Reconnaître les locaux du fuselage",
      explain: "Le plancher cabine est la ligne claire qui court sous les sièges ; la cloison étanche arrière est la paroi bombée à l'arrière de la cabine ; le caisson central est le bloc du ventre, entre les deux soutes, qui reçoit les ailes et le train ; la soute électronique est le local sous le poste de pilotage." },
    { id: 'a1-q7', type: 'match',
      q: "Associe chaque gouverne ou surface au mouvement qu'elle provoque.",
      pairs: [
        { l: "Aileron", r: "Roulis : l'avion s'incline d'un côté" },
        { l: "Gouverne de profondeur", r: "Tangage : le nez monte ou plonge" },
        { l: "Gouverne de direction", r: "Lacet : le nez tourne à gauche ou à droite" },
        { l: "Volet", r: "Plus de portance à basse vitesse" },
        { l: "Spoiler", r: "Casse la portance et freine" },
      ],
      concept: "Fonctions des surfaces mobiles",
      explain: "Les trois gouvernes pilotent l'avion autour de ses trois axes ; les volets, comme les becs, aident à porter lentement ; les spoilers font l'inverse en cassant la portance pour freiner. Retiens-les par paires : une surface, un mouvement." },
    { id: 'a1-q8', type: 'hotfind', fig: 'a1-surfaces-mobiles',
      q: "Touche toutes les surfaces qui servent à augmenter la portance quand l'avion vole lentement. Les autres sont des leurres.",
      targets: ['bec', 'volet'],
      notes: {
        bec: "Les becs s'avancent devant l'aile pour qu'elle continue de porter à basse vitesse, au décollage et à l'atterrissage.",
        volet: "Les volets reculent et s'abaissent derrière l'aile pour augmenter la portance à basse vitesse.",
      },
      concept: "Becs, volets et portance à basse vitesse",
      explain: "Becs et volets augmentent la portance. Le spoiler fait l'inverse en la cassant pour freiner. L'aileron, la gouverne de profondeur et la gouverne de direction servent à piloter, pas à porter : ce sont les leurres de la figure." },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "Un aéronef se déplace dans l'air. Un aérostat est plus léger que l'air (ballon, dirigeable) ; un aérodyne est plus lourd et tient grâce à ses ailes. Un avion est un aérodyne à aile fixe et à moteur.",
    "Quatre forces s'exercent sur un avion : la portance (vers le haut, créée par l'air autour des ailes, uniquement quand l'avion avance), le poids (vers le bas), la poussée (des moteurs) et la traînée (résistance de l'air). En vol horizontal à vitesse constante, elles s'équilibrent deux à deux.",
    "Les dix parties d'un avion de ligne : fuselage, poste de pilotage, cabine, soute, portes, dérive, stabilisateur horizontal, voilure, moteur dans sa nacelle, trains d'atterrissage. Dérive et stabilisateur forment l'empennage.",
    "La cabine est dans la partie haute du fuselage, entre le poste de pilotage et la cloison étanche arrière. Sous le plancher cabine : les soutes et le caisson central. Derrière la cloison : le cône arrière, qui n'est pas la cabine.",
    "Les surfaces mobiles ont chacune un rôle : ailerons (roulis), gouverne de profondeur (tangage), gouverne de direction (lacet) ; becs et volets (portance à basse vitesse) ; spoilers (casser la portance, freiner). On ne s'y appuie pas, on n'y pose rien.",
    "Ordres de grandeur pour un avion moyen-courrier de la famille A320neo : environ 37,6 m de long, 35,8 m d'envergure, 11,8 m de haut. Le poids se paie en carburant : chaque ajout non prévu compte.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'a2', teaser: "Tu sais nommer les grandes parties de l'avion et situer la cabine dans le fuselage. Au chapitre suivant, tu ouvres le fuselage : comment est-il construit, pourquoi il est rond, ce que sont les cadres et les lisses, et pourquoi on ne perce jamais sa structure." },

  // Oral ──────────────────────────────────────────────────────────
  oral: [
    { q: "Explique à un proche, sans dessin, comment un avion de ligne tient en l'air : quelles forces, d'où elles viennent et quand elles s'équilibrent.",
      expected: [
        "Quatre forces : portance, poids, poussée, traînée",
        "La portance vient de l'air autour des ailes et n'existe que si l'avion avance",
        "La poussée vient des moteurs et fait avancer ; elle ne soulève pas directement",
        "En vol horizontal à vitesse constante : portance égale poids, poussée égale traînée",
      ],
      model: "Un avion subit quatre forces. Le poids le tire vers le bas ; la portance le pousse vers le haut ; la poussée des moteurs le fait avancer ; la traînée, qui est la résistance de l'air, le freine. La portance vient de l'air qui s'écoule autour des ailes, donc elle n'existe que si l'avion avance. Les moteurs ne soulèvent pas l'avion : ils le font avancer, et c'est l'avancée qui crée la portance. Quand l'avion vole droit et à vitesse constante, la portance est égale au poids et la poussée est égale à la traînée : tout s'équilibre." },
    { q: "Fais le tour d'un avion de ligne à voix haute : nomme les dix grandes parties dans l'ordre que tu veux, en disant à quoi sert chacune.",
      expected: [
        "Fuselage, poste de pilotage, cabine, soute, portes",
        "Voilure, moteur dans sa nacelle, trains d'atterrissage",
        "Dérive et stabilisateur horizontal (empennage)",
        "Une fonction par partie : loger, porter, propulser, stabiliser",
      ],
      model: "Je commence par le nez : le fuselage est le tube qui contient le poste de pilotage à l'avant, la cabine au-dessus et la soute en dessous, avec des portes sur le flanc. Les ailes forment la voilure : elles créent la portance, portent le carburant et les moteurs, qui sont dans des nacelles sous les ailes et fournissent la poussée. Sous l'avion, les trains d'atterrissage le portent au sol. À l'arrière, la dérive verticale et le stabilisateur horizontal forment l'empennage : ils stabilisent l'avion." },
    { q: "Un collègue te dit « le matériel est à l'arrière ». Explique pourquoi la phrase est ambiguë et comment tu la clarifies, en utilisant ce que tu sais du fuselage.",
      expected: [
        "Arrière de la cabine ou arrière du fuselage, après la cloison étanche",
        "Le cône arrière n'est pas la cabine",
        "La soute est sous le plancher cabine",
        "On demande une précision plutôt que de deviner",
      ],
      model: "« À l'arrière » ne dit pas où exactement. Le fuselage est divisé : la cabine s'arrête à la cloison étanche arrière, et derrière il y a le cône arrière, qui n'est pas la cabine. En dessous du plancher, il y a aussi la soute arrière. Alors je demande : avant ou après la cloison étanche ? Dans la cabine ou dans la soute ? Je préfère poser la question plutôt que d'ouvrir une porte ou d'aller dans un local où je n'ai rien à faire." },
  ],

  // Matrice ───────────────────────────────────────────────────────
  matrix: [
    { savoir: "Je sais nommer, en français et en anglais, les dix grandes parties d'un avion de ligne et leur fonction.",
      savoirFaire: "Je sais reconnaître la partie dont on me parle sur un schéma ou sur l'avion, et la situer par rapport à ma zone de travail.",
      comp: 'C1', ex: ['a1-a1', 'a1-a2', 'a1-q6'],
      proof: "Identification des parties sur la figure d'ensemble et sur la coupe du fuselage ; justifie la capacité à repérer son intervention dans l'aéronef, sans la certifier." },
    { savoir: "Je connais les surfaces mobiles, ce qu'elles commandent, et pourquoi on ne s'y appuie pas.",
      savoirFaire: "Je sais respecter les zones balisées autour des surfaces mobiles, des nacelles et des trains.",
      comp: 'C1', ex: ['a1-q3', 'a1-q7', 'a1-q8'],
      proof: "Association des gouvernes aux mouvements et décision sur un balisage ; prépare la prise en compte de l'environnement de l'avion, une des familles de critères du référentiel de branche." },
    { savoir: "Je comprends les quatre forces et le rôle du poids dans la conception de l'avion et de la cabine.",
      savoirFaire: "Je sais expliquer pourquoi on ne laisse rien dans l'avion et pourquoi chaque ajout non prévu compte.",
      comp: 'C1', ex: ['a1-a3', 'a1-q5'],
      proof: "Classement des éléments par force et justification du rôle du poids ; relie le geste d'atelier à la logique de l'avion." },
  ],
});
