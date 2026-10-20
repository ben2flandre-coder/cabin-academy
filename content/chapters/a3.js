// Chapitre a3 — Se repérer dans l'avion : axes, stations, côtés, zones
CA.addChapter({
  id: 'a3',
  domain: 'A',
  order: 40,
  title: "Se repérer dans l'avion : axes, stations, côtés, zones",
  short: "Avant, arrière, gauche, droite, hauteur, cadres, stations, rangées : dire et lire précisément où se trouve un objet",
  minutes: 45,
  comps: ['C1'],
  prereq: ['a2'],
  sources: ['rncp40664', 'faa-amt-airframe', 'wiki-fuselage', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Associer les trois axes X, Y et Z à une direction de l'avion (nez-queue, bout d'aile à bout d'aile, bas-haut) et dire à quelle question chacun répond.",
    "Dire de quel côté de l'avion se trouve un objet (LH ou RH) quelle que soit la façon dont tu es tournée, et expliquer pourquoi ta propre gauche ne sert pas de référence.",
    "Situer un point le long du fuselage de deux manières : par les numéros des cadres voisins et par une station mesurée depuis un plan d'origine.",
    "Lire sur un plan de cabine fictif la position d'un siège (rangée, lettre, côté) et celle de la porte la plus proche.",
    "Appliquer cinq questions de lecture à tout plan que tu reçois : quelle vue, où est l'avant, quel côté, quelle unité, que dit la légende.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Dans un avion, « là-bas » ne veut rien dire. La cabine d'un monocouloir mesure plus de vingt mètres de long, elle est symétrique, et deux collègues qui se parlent n'y sont presque jamais tournés dans le même sens. Si tu demandes à quelqu'un de « poser le panneau à droite » alors qu'il regarde vers la queue, il le posera de l'autre côté, et c'est toi qui auras raison pendant qu'il aura raison aussi.",
    "Le repérage n'est pas une affaire de politesse. Beaucoup de pièces de cabine existent en deux versions, l'une pour le côté gauche et l'autre pour le côté droit, images l'une de l'autre dans un miroir. Elles se ressemblent à s'y méprendre, et une seule des deux entre à sa place. Se tromper de côté, c'est donc perdre du temps au mieux, forcer une pièce au pire, et dans tous les cas faire une anomalie qu'il faudra déclarer.",
    "Enfin, tout ce que tu liras dans ton métier suppose que tu sais te repérer : un ordre de travail qui dit « rangée 4, côté gauche, entre deux cadres », une étiquette marquée RH, une consigne de sécurité « zone avant, porte 1 ». Ce chapitre te donne les mots et la méthode. Les valeurs exactes (où commence la numérotation, dans quelle unité) changent d'un avion à l'autre et se lisent dans le dossier de l'avion : ici tu apprends le raisonnement, avec des plans fictifs.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'a3-axes-xyz',
    intro: "Voici le même avion dessiné deux fois, de côté puis de dessus. Trois traits rouges le traversent. Avant de lire quoi que ce soit, regarde où ils sont et comment ils se croisent.",
    look: [
      "Quel trait suit le fuselage du nez à la queue ? Lequel part d'un bout d'aile à l'autre ? Lequel monte vers le haut ?",
      "Dans la vue de dessus, une moitié de l'avion est colorée. Laquelle est-ce, en haut ou en bas de l'image ? Et pourquoi un petit personnage est-il dessiné près du nez, tourné vers lui ?",
      "Les flèches bleues FWD et AFT pointent dans des sens opposés. Dans quel sens regarderais-tu si tu voulais savoir où est la gauche de l'avion ?",
      "Les trois traits se croisent-ils vraiment au même point ? Qu'est-ce que cela te suggère sur la manière dont on décrit une position ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Trois axes pour tout situer",
      fig: 'a3-axes-xyz',
      p: [
        "Pour dire où est un objet dans une pièce, tu donnes trois informations : à quelle distance du mur du fond, à quelle distance du mur de gauche, à quelle hauteur du sol. Les ingénieurs font la même chose avec l'avion : ils le plongent dans trois directions perpendiculaires, qu'on appelle des **axes**. Le [[axe X (longitudinal)|X]] (n° 1) suit le fuselage, du nez vers la queue. L'[[axe Y (transversal)|Y]] (n° 2) traverse l'avion en largeur, d'un bout d'aile à l'autre. L'[[axe Z (vertical)|Z]] (n° 3) va du bas vers le haut. Chacun répond à une question différente.",
        "Les noms français et anglais disent ce que fait l'axe. *Longitudinal* vient de « longueur » : X est l'axe de la longueur. *Lateral* (transversal) : Y est l'axe du côté. *Vertical* : Z est l'axe de la hauteur. Quand un plan ou un ordre de travail écrit « position X, Y, Z », il donne simplement : où dans la longueur, où dans la largeur, à quelle hauteur.",
        "Retiens deux limites importantes, qui reviendront dans tout le chapitre. D'abord, une flèche d'axe montre une **direction**, pas un sens « positif » : savoir de quel côté les nombres augmentent est une convention du constructeur de chaque avion. Ensuite, l'endroit où les trois axes se croisent (l'**origine**) est lui aussi choisi par le constructeur, souvent près du nez ou en avant de lui. Pour toi, l'important est de comprendre qu'il existe une règle commune à toutes les équipes, et qu'elle est écrite dans le dossier du programme.",
      ],
      table: {
        head: ["Axe", "Direction", "Question à laquelle il répond", "Exemple de phrase d'atelier"],
        rows: [
          ["X (longitudinal)", "Du nez à la queue", "À quelle distance de l'avant ?", "« Le galley est vers l'arrière, après la dernière porte. »"],
          ["Y (transversal)", "D'un bout d'aile à l'autre", "À quelle distance du milieu, vers la gauche ou la droite ?", "« Le siège est côté droit, contre le hublot. »"],
          ["Z (vertical)", "Du bas vers le haut", "À quelle hauteur ?", "« La bagagerie est au-dessus des sièges, le rail au niveau du plancher. »"],
        ],
      },
    },
    {
      h: "Les trois axes, en perspective",
      fig: 'img-a3-axes-reperage',
      p: [
        "Les mêmes trois axes, sur un avion vu en perspective. Le repère 1 suit le fuselage du nez à la queue : c'est l'axe longitudinal. Le repère 2 traverse l'envergure d'une aile à l'autre : c'est l'axe transversal. Le repère 3 monte à la verticale à travers le fuselage : c'est l'axe vertical. Chaque trait a une pointe à chaque bout, parce qu'il indique une direction et non un sens positif.",
        "Pourquoi deux dessins ? La vue de côté et la vue de dessus sont celles des plans, et tu devras les lire. La perspective, elle, te montre que les trois axes sont perpendiculaires et se croisent en un seul point : n'importe quel endroit de l'avion se retrouve en comptant des pas dans ces trois directions. Cette illustration est générique : elle ne dit ni où est l'origine, ni de quel côté les nombres augmentent.",
      ],
    },
    {
      h: "Avant, arrière, gauche, droite : l'observateur de référence",
      fig: 'a3-gauche-droite',
      p: [
        "L'avant et l'arrière se règlent vite : l'**avant** (*forward*, abrégé FWD) est du côté du nez, l'**arrière** (*aft*, abrégé AFT) du côté de la queue. Ces deux directions ne dépendent de personne. La gauche et la droite, en revanche, dépendent toujours de quelqu'un qui regarde dans une direction. Si deux personnes se font face, ta droite est la gauche de l'autre. Il faut donc choisir une fois pour toutes un observateur imaginaire.",
        "La convention est universelle dans l'aéronautique : l'**observateur de référence** est placé dans l'avion et **regarde vers l'avant**, vers le nez (n° 4 sur la figure). Sa main gauche désigne le **côté gauche de l'avion**, noté **LH** (*left-hand side*). Sa main droite désigne le **côté droit**, noté **RH** (*right-hand side*). Ces mots désignent des moitiés d'avion entières, du nez à la queue : le côté LH est le même, que tu sois assise en haut de l'escalier ou tout au fond.",
        "Le piège se voit sur la figure. Le deuxième personnage est tourné vers la queue (n° 5) : son bras gauche tendu pointe donc vers le côté **RH** de l'avion. Sa gauche à lui n'est plus celle de l'avion. C'est la situation de quelqu'un qui travaille dos au nez, penché sur une paroi, ou de quelqu'un qui vient d'entrer par la porte arrière et regarde la cabine dans l'autre sens. Le réflexe à prendre : **ne jamais dire « à gauche » ou « à droite » tout court**. On dit « côté gauche de l'avion », « LH », ou on se retourne mentalement face au nez avant de répondre.",
        "Ce repérage se lit aussi sur les pièces. Beaucoup de pièces sont symétriques : un panneau de paroi gauche est l'image dans un miroir du panneau de paroi droit, avec des trous, des encoches et des formes qui ne sont pas interchangeables. Elles portent en général une marque LH ou RH, parfois une flèche FWD qui indique comment les orienter une fois posées. Ce que cette marque désigne, c'est **le côté de l'avion où la pièce va**, pas le côté où tu la tiens ou où elle repose sur le chariot.",
      ],
      callout: { kind: 'tip', text: "Un moyen simple de ne plus se tromper : pour trouver LH, pose-toi mentalement sur le siège du pilote, face au nez, et lève ta main gauche. Tu lèves toujours le bras LH de l'avion. Si tu es face à la queue, ta main gauche sert à désigner RH." },
    },
    {
      h: "Haut, bas, vers l'intérieur : les autres mots de direction",
      p: [
        "Sur l'axe Z, les mots sont ceux de la vie courante : **haut** (*up*), **bas** (*down*), au-dessus (*above*), en dessous (*below*). Dans une cabine, « au-dessus du plancher » veut dire dans la cabine, « en dessous » veut dire dans les soutes. Rien de plus simple, mais une habitude est à prendre : quand tu parles d'un objet haut, précise si tu parles de sa position **sur l'avion** (près du plafond) et non de la hauteur à laquelle tu dois lever le bras sur ton escabeau.",
        "Deux autres mots te serviront pour tout ce qui se trouve vers les côtés. **Intérieur** et **extérieur** se disent *inboard* (INBD) et *outboard* (OUTBD) : vers le milieu de l'avion, ou vers le bout de l'aile. Sur une aile, un moteur « intérieur » est plus près du fuselage qu'un moteur « extérieur ». En cabine, on emploie plutôt des mots concrets : **côté hublot** (ou côté paroi) et **côté allée**. Ils décrivent la position à l'intérieur d'une rangée de sièges sans avoir besoin de dire gauche ou droite, ce qui est pratique quand il s'agit de désigner d'abord le siège puis son côté.",
        "Il y a enfin les mots **avant de** et **derrière** (*forward of*, *aft of*) : « le galley est derrière la porte 2 » signifie plus vers la queue que la porte 2. Ils s'emploient toujours par rapport à un repère que tout le monde voit. Dire « derrière le galley » n'aide pas quelqu'un qui ne sait pas où est le galley.",
      ],
      list: [
        "**Avant / arrière** : FWD / AFT, selon la direction du nez et de la queue.",
        "**Gauche / droite** : LH / RH, vus par un observateur qui regarde vers l'avant.",
        "**Haut / bas** : UP / DOWN, selon l'axe Z.",
        "**Intérieur / extérieur** : INBD / OUTBD, vers le milieu ou vers le bord de l'avion.",
        "**Côté hublot / côté allée** : mots de cabine pour situer un siège à l'intérieur d'une rangée.",
      ],
    },
    {
      h: "Le long du fuselage : cadres numérotés et stations",
      fig: 'a3-stations-cadres',
      p: [
        "Les axes disent dans quelles directions on mesure. Reste à donner une valeur. Le long de l'axe X, deux méthodes complémentaires existent, et tu dois les connaître toutes les deux, parce que les documents emploient l'une ou l'autre selon ce qu'ils veulent dire.",
        "**Première méthode : les cadres.** Tu connais déjà les [[cadre]]s (chapitre a2) : ce sont les anneaux de structure qui se répètent tout au long du fuselage. Comme ils sont nombreux et régulièrement espacés, on les numérote dans l'ordre (n° 1 sur la figure). Un cadre devient alors une borne, comme un numéro de rue. Tu situes un objet en citant les deux cadres qui l'encadrent : « entre le cadre 7 et le cadre 8 ». L'espace compris entre deux cadres voisins s'appelle un **intervalle** (n° 2). L'équipement du dessin (n° 3) est dans l'intervalle 7-8. L'avantage est énorme : les cadres sont visibles de l'intérieur de l'avion, et tu peux les compter du doigt.",
        "**Deuxième méthode : la [[station]].** Le constructeur place, sur le plan de l'avion, un **plan d'origine** (*reference datum*, n° 4) : un plan vertical imaginaire, perpendiculaire à l'axe X, souvent au nez ou un peu en avant. À partir de lui, il pose une règle imaginaire le long de l'avion (n° 5). La station d'un point (n° 6) est la distance entre ce plan d'origine et le point, mesurée le long de l'axe X. Chaque cadre a donc aussi sa station. La station est plus précise que le numéro de cadre : elle permet de situer un point qui n'est pas sur un cadre, entre deux cadres, ou à un endroit où il n'y a pas de cadre du tout.",
        "Les deux se rejoignent dans les documents : on trouve souvent une table qui donne, pour chaque numéro de cadre, la station correspondante. Sur la figure, qui est une **méthode** et non un avion réel, la flèche part du plan d'origine et s'arrête sur le cadre 7 : sa station se lit sur la règle. Le nombre de cadres, leur numérotation, la place du plan d'origine et l'unité des graduations sont ici inventés ; dans la réalité, ils sont fixés par le constructeur pour chaque avion et se lisent dans le dossier du programme. Retiens la logique : **cadre = borne visible, station = distance mesurée depuis une origine commune**.",
        "Pour la largeur et la hauteur, la logique est la même. La position latérale se mesure comme une distance depuis le plan vertical qui coupe l'avion en deux dans sa longueur, à gauche ou à droite ; la position en hauteur, comme une distance depuis un plan horizontal de référence. Dans la littérature générale, tu rencontreras les mots anglais *buttock line* (BL) et *waterline* (WL) pour ces deux repères. Pour ton travail en cabine, la plupart des consignes se contenteront de la rangée, du côté et d'un cadre ; garde simplement l'idée qu'un point précis de l'avion se définit toujours par trois nombres : X, Y, Z.",
      ],
      table: {
        head: ["Méthode", "Ce qu'elle donne", "Comment on la lit sur l'avion", "Précision"],
        rows: [
          ["Numéro de cadre", "Une borne : « entre le cadre 7 et le cadre 8 »", "On compte les cadres, visibles de l'intérieur", "Bonne pour dire « dans ce secteur »"],
          ["Station", "Une distance depuis le plan d'origine", "On la lit dans le dossier ou sur le plan, pas sur l'avion", "Fine : situe aussi un point entre deux cadres"],
        ],
      },
      callout: { kind: 'doc', text: "Dans le dossier du programme, trois choses se lisent et ne se devinent pas : où est le plan d'origine, dans quelle unité sont les stations, et de quel côté les numéros de cadres augmentent. Si ton ordre de travail cite un cadre ou une station, vérifie dans quel repère il est écrit avant de te mettre en route." },
    },
    {
      h: "Les zones : découper l'avion en secteurs de travail",
      p: [
        "Les axes et les stations donnent des coordonnées précises. Mais pour distribuer le travail, personne ne dit « à la station 18,6 ». On découpe l'avion en **zones** (*zones*) : des volumes délimités, qui portent un nom ou un numéro, et à l'intérieur desquels on situe ensuite le travail. Une zone est à une coordonnée ce qu'un quartier est à une adresse.",
        "Il existe deux familles de zones. La première est celle du **dossier technique** : l'industrie aéronautique découpe l'avion en grandes zones numérotées par centaines (grossièrement : le bas du fuselage, le haut du fuselage, l'empennage, les moteurs, les ailes, les trains, les portes), subdivisées en sous-zones. Tu n'as pas à les apprendre par cœur : on te dira dans quelle zone se trouve ta tâche et le dossier te donnera le plan de cette zone. La seconde est celle de l'**organisation du chantier** : zone avant, zone milieu, zone arrière, ou même « zone entre la porte 1 et la porte 2 ». Elle est choisie par l'équipe pour se répartir le travail et prévenir les autres de ses interventions.",
        "Dans les deux cas, le principe est le même : une zone se nomme avec **trois informations** — la partie de l'avion (cabine, soute, cockpit), le côté (LH, RH, ou les deux) et la position dans la longueur (par rapport à une porte ou à un cadre). « Cabine, côté LH, entre la porte 1 et la porte 2 » ne laisse aucun doute. « Au fond à gauche » en laisse trois.",
        "Les zones ont aussi un usage de sécurité : quand plusieurs équipes se partagent la cabine, on se prévient par zone (« je démonte le plafond en zone milieu »), et on protège la zone d'une équipe en ne laissant personne y travailler au-dessus. C'est le sujet de la coactivité, que tu retrouveras au chapitre suivant pour la zone des portes.",
      ],
    },
    {
      h: "Dans la cabine : rangées, lettres, allée, portes",
      fig: 'a3-plan-cabine',
      p: [
        "Regarde le plan fictif. Dans la cabine, un système plus simple que les stations existe pour désigner un siège : la **rangée** (*row*) et la **lettre**. Les rangées sont numérotées de l'avant vers l'arrière, la plus proche du nez portant le numéro 1. Dans la rangée, les sièges sont désignés par des lettres. Sur le plan, les lettres A, B, C vont du côté LH vers l'allée (n° 2) et D, E, F de l'allée vers le côté RH : le siège 2A (n° 8) est donc côté gauche contre le hublot, le 2F (n° 9) côté droit contre le hublot, le 4C (n° 10) côté gauche au bord de l'allée, le 4D (n° 11) juste en face, de l'autre côté de l'allée.",
        "Cette numérotation est la plus courante sur les avions monocouloirs à six sièges de front, avec A du côté gauche : c'est un **usage de la compagnie**, pas une règle absolue. Certaines compagnies sautent des numéros de rangée, d'autres n'emploient pas toutes les lettres. La seule manière sûre de s'en assurer est de lire le **plan de cabine** de l'avion concerné (en anglais *cabin layout*, abrégé couramment en **LOPA**, *layout of passenger accommodation*), qui donne le numéro de chaque rangée et de chaque siège.",
        "Les **portes** se repèrent par leur côté et par leur ordre depuis l'avant : on dit « porte avant gauche » ou « première porte, côté LH ». Les documents les numérotent en principe de l'avant vers l'arrière, avec une lettre ou un mot pour le côté, mais la notation exacte (1L, L1, « porte 1 gauche »…) varie selon les constructeurs et les compagnies. Sur le plan fictif, la porte avant gauche est la n° 3, la porte avant droite la n° 4, l'arrière gauche la n° 5 et l'arrière droite la n° 6. Une porte est un excellent repère : elle est visible de loin, et son numéro ne change pas quand on déplace une rangée de sièges.",
        "Enfin, **la flèche de l'avant** (n° 1) est le premier élément à chercher sur un plan. Dans les figures de cette application, l'avant est toujours dessiné à gauche, et le côté RH est donc en haut de l'image sur une vue de dessus. Mais ce n'est pas une règle universelle : un autre plan peut être tourné autrement. C'est la flèche FWD qui fait foi, pas la place du nez sur la page.",
      ],
    },
    {
      h: "Lire un plan sans se tromper : cinq questions",
      p: [
        "Quand tu reçois un plan, un schéma de zone ou une page d'ordre de travail, pose-toi toujours les cinq mêmes questions, dans cet ordre.",
        "**1. Quelle vue est-ce ?** Vue de côté, vue de dessus, coupe regardée vers l'avant ou vers l'arrière : le titre ou la légende le dit. Dans une coupe en travers, par exemple, regarder « vers l'avant » ou « vers l'arrière » inverse la place du côté gauche. **2. Où est la flèche FWD ?** Sans elle, il est impossible de savoir où sont l'avant, et donc la gauche et la droite. **3. De quel côté parle-t-on ?** LH ou RH, et comment est-il marqué ? Sur une pièce symétrique, le marquage prévaut sur ton intuition. **4. Dans quelle unité sont les nombres ?** Un numéro de cadre, une station, une rangée ne sont pas la même chose, et deux stations peuvent être écrites dans des unités différentes. **5. Que dit la légende ?** Les symboles (porte, siège équipage, issue) changent d'un plan à l'autre.",
        "Si une de ces cinq réponses manque, ce n'est pas à toi de la deviner. Un plan sans flèche, une pièce sans marquage, une zone dont la limite n'est pas claire : tu poses la question à ta tutrice ou au chef d'équipe **avant** de commencer, parce qu'une pièce posée du mauvais côté se démonte, mais le temps passé ne se rattrape pas.",
      ],
      callout: { kind: 'info', text: "Les plans, les cadres et les stations de ce chapitre sont fictifs : ils montrent une méthode. Le sens dans lequel les numéros de cadres augmentent, la place du plan d'origine, l'unité des stations et la façon de noter les portes sont des choix de chaque constructeur ; ils se lisent dans le dossier du programme sur lequel tu travailles." },
    },
  ],

  // fiches de repérage ─────────────────────────────────────────────
  parts: [
    { fig: 'a3-axes-xyz', part: 'axe-x', fr: "Axe X (longitudinal)", en: "X axis (longitudinal axis)",
      fn: "Situer un point dans la longueur de l'avion, du nez à la queue ; sert de support aux stations et à la numérotation des cadres.",
      where: "Il suit l'avion sur toute sa longueur, au milieu du fuselage.",
      interfaces: "Il se lit avec les cadres numérotés, les stations et le plan d'origine ; sur un plan de cabine, il correspond au sens des rangées.",
      risks: "Se tromper de sens de numérotation : croire que les cadres augmentent vers l'arrière alors que le dossier dit l'inverse.",
      vigilance: "Chercher dans le dossier l'origine, l'unité et le sens des nombres avant d'interpréter un repère.",
      mistakes: "Compter les cadres à partir du mauvais bout de la cabine." },
    { fig: 'a3-axes-xyz', part: 'gauche', fr: "Côté gauche (LH)", en: "Left-hand side (LH)",
      fn: "Désigner la moitié gauche de l'avion, telle que la voit un observateur qui regarde vers le nez.",
      where: "Toute la moitié gauche de l'avion, du nez à la queue : portes, sièges, parois, ailes.",
      interfaces: "S'associe au marquage LH des pièces symétriques, aux numéros de portes et aux lettres de sièges.",
      risks: "Pièce symétrique posée du mauvais côté ; équipe envoyée à la mauvaise porte.",
      vigilance: "Se placer mentalement face au nez avant de dire gauche ou droite ; lire le marquage LH ou RH sur la pièce.",
      mistakes: "Utiliser sa propre gauche alors qu'on regarde vers la queue." },
    { fig: 'a3-stations-cadres', part: 'station', fr: "Station", en: "Station (STA)",
      fn: "Donner la position d'un point le long de l'axe X sous forme d'une distance depuis le plan d'origine.",
      where: "Elle ne se voit pas sur l'avion : elle se lit sur le plan ou dans la table qui relie cadres et stations.",
      interfaces: "Liée aux numéros de cadres, au plan d'origine et à l'unité choisie par le constructeur.",
      risks: "Confondre station et numéro de cadre ; mal convertir une unité.",
      vigilance: "Lire l'unité et l'origine indiquées dans le dossier ; ne jamais convertir de tête sans le noter.",
      mistakes: "Prendre un numéro de cadre pour une station, ou l'inverse." },
    { fig: 'a3-plan-cabine', part: 's4c', fr: "Siège 4C (exemple de repérage)", en: "Seat 4C",
      fn: "Illustrer comment un siège se désigne : rangée 4 comptée depuis l'avant, lettre C, côté gauche au bord de l'allée.",
      where: "Rangée 4, côté LH, côté allée.",
      interfaces: "Rails de sièges (chapitre b2), allée, voisins de rangée ; la lettre dépend du plan de cabine de la compagnie.",
      risks: "Confondre 4C et 4D, qui se font face de part et d'autre de l'allée.",
      vigilance: "Contrôler sur le plan de cabine de l'avion que la lettre correspond bien au côté attendu.",
      mistakes: "Supposer que la lettre A est toujours à gauche sans lire le plan." },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: "Axe X (longitudinal)", en: "X axis (longitudinal axis)", abbr: "X", def: "Direction qui va du nez à la queue de l'avion : elle sert à dire à quelle distance de l'avant se trouve un objet.", tip: "Longitudinal = « dans la longueur »." },
    { fr: "Axe Y (transversal)", en: "Y axis (lateral axis)", abbr: "Y", def: "Direction qui va d'un bout d'aile à l'autre : elle sert à dire de combien un objet est écarté du milieu, à gauche ou à droite." },
    { fr: "Axe Z (vertical)", en: "Z axis (vertical axis)", abbr: "Z", def: "Direction qui va du bas vers le haut : elle sert à dire à quelle hauteur se trouve un objet.", tip: "Z, comme zénith." },
    { fr: "Avant", en: "Forward", abbr: "FWD", def: "Direction du nez de l'avion. Sur un plan, la flèche FWD te la montre." },
    { fr: "Arrière", en: "Aft", abbr: "AFT", def: "Direction de la queue de l'avion, à l'opposé du nez." },
    { fr: "Côté gauche", en: "Left-hand side", abbr: "LH", def: "Moitié gauche de l'avion, du nez à la queue, vue par un observateur qui regarde vers l'avant.", tip: "LH = Left Hand : regarde vers le nez et lève ta main gauche." },
    { fr: "Côté droit", en: "Right-hand side", abbr: "RH", def: "Moitié droite de l'avion, du nez à la queue, vue par un observateur qui regarde vers l'avant." },
    { fr: "Observateur de référence", en: "Reference observer", def: "Personne imaginaire placée dans l'avion et tournée vers le nez : c'est sa gauche et sa droite qui servent de référence, pas les tiennes." },
    { fr: "Intérieur / extérieur", en: "Inboard / outboard", abbr: "INBD / OUTBD", def: "Vers le milieu de l'avion, ou vers son bord (bout d'aile, paroi) ; s'emploie pour tout ce qui est réparti de part et d'autre du centre." },
    { fr: "Plan d'origine", en: "Reference datum", def: "Plan vertical imaginaire, fixé par le constructeur au nez de l'avion ou près de lui, d'où partent toutes les mesures le long de l'axe X." },
    { fr: "Station", en: "Station", abbr: "STA", def: "Distance entre le plan d'origine et un point de l'avion, mesurée le long de l'axe X." },
    { fr: "Intervalle de cadres", en: "Frame bay", def: "Espace compris entre deux cadres voisins : on y situe un objet en citant les deux numéros qui l'encadrent." },
    { fr: "Zone", en: "Zone", def: "Volume délimité de l'avion, qui porte un nom ou un numéro, utilisé pour situer une tâche ou répartir le travail." },
    { fr: "Rangée", en: "Row", def: "Ligne de sièges placés côte à côte dans la largeur de la cabine ; les rangées sont numérotées en général de l'avant vers l'arrière." },
    { fr: "Allée", en: "Aisle", def: "Couloir de circulation qui court dans la longueur de la cabine entre les sièges ; il relie les portes entre elles." },
    { fr: "Plan de cabine", en: "Cabin layout (LOPA)", abbr: "LOPA", def: "Plan qui donne la disposition de la cabine d'un avion : rangées, sièges, monuments, portes ; il se lit avec sa légende." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Mardi, 7 h 20 : un panneau, deux côtés, un malentendu évité",
    body: [
      "Samia, ta tutrice, te tend une fiche d'intervention : poser un panneau d'habillage « RH », rangée 4, entre deux cadres. Deux panneaux identiques à première vue attendent sur un chariot, au fond de la cabine. L'un porte une étiquette LH, l'autre RH. Tu entres par la porte arrière, tu regardes la cabine : le nez est devant toi, au bout de l'allée, et tu es tournée vers l'avant. Le côté RH est à ta droite. Tu prends le panneau marqué RH, tu le portes jusqu'à la rangée 4 et tu le présentes côté droit.",
      "Samia te fait recommencer, mais cette fois en sens inverse : « Imagine que tu sois entrée par la porte avant et que tu regardes vers la queue. Où est RH ? » Tu hésites, puis tu réponds : « Toujours le même côté de l'avion : celui qui est à ma gauche, maintenant. » Elle hoche la tête : « Voilà. La pièce ne sait pas où tu es tournée. Le marquage dit où elle va. »",
      "Elle te montre ensuite la fiche : la position est donnée par le côté, la rangée et l'intervalle entre deux cadres, avec le sens de numérotation précisé en bas. « Compte les cadres du doigt avant de poser, et vérifie le sens dans la légende. Si le plan n'indique pas de flèche FWD, tu ne commences pas. »",
    ],
    doc: {
      title: "Fiche d'intervention — document fictif pédagogique",
      lines: [
        ["Pièce", "Panneau d'habillage, marquage RH"],
        ["Référence", "EX-25210-04"],
        ["Zone", "Cabine, avant"],
        ["Côté", "RH (droit, observateur face au nez)"],
        ["Position", "Rangée 4, entre les cadres 7 et 8 (schéma fictif)"],
        ["Repère", "Numérotation des cadres croissante vers l'arrière (plan fictif EX-LOPA-01)"],
      ],
      note: "Document inventé pour l'exercice : un vrai document suit les rubriques et les repères choisis par l'entreprise et par le constructeur.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Retrouver le siège 4D sur un plan de cabine",
    fig: 'a3-plan-cabine',
    steps: [
      { label: "Chercher la flèche de l'avant", text: "Avant de lire un seul numéro, repère la flèche FWD en haut à gauche : le nez est à gauche de l'image. Tu en déduis que, sur ce plan vu de dessus, le côté RH est en haut et le côté LH en bas.", hl: ['avant'] },
      { label: "Compter les rangées depuis l'avant", text: "Les rangées sont numérotées de l'avant vers l'arrière : la rangée 1 est la plus proche du nez, à gauche de l'image. Va jusqu'à la rangée 4, la quatrième colonne de sièges.", hl: ['avant', 's4d'] },
      { label: "Trouver l'allée", text: "L'allée est la bande beige au milieu. Elle sépare les sièges A, B, C (en bas, côté LH) des sièges D, E, F (en haut, côté RH).", hl: ['allee'] },
      { label: "Choisir la lettre D", text: "D est la lettre la plus proche de l'allée, de l'autre côté : le 4D est donc au bord de l'allée, côté droit, en face du 4C.", hl: ['s4d', 's4c'] },
      { label: "Conclure : côté et repère", text: "Le siège 4D est en rangée 4, côté RH, au bord de l'allée. Pour le retrouver depuis la porte, la porte avant droite est la plus proche : le chemin passe par l'allée, rangée par rangée.", hl: ['s4d', 'porte-av-rh'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    { id: 'a3-a1', type: 'hottap', fig: 'a3-axes-xyz',
      q: "Touche, sur la figure, l'élément demandé.",
      targets: [
        { prompt: "L'axe qui mesure la hauteur d'un objet", part: 'axe-z' },
        { prompt: "L'axe qui va d'un bout d'aile à l'autre", part: 'axe-y' },
        { prompt: "Le côté gauche de l'avion (LH)", part: 'gauche' },
      ],
      concept: "Axes et côtés",
      explain: "Z est vertical : il monte du bas vers le haut. Y est transversal : il coupe l'avion en largeur. Le côté LH est la moitié de l'avion située à gauche d'une personne qui regarde vers le nez ; sur la vue de dessus, il est coloré, en bas de l'image, parce que l'avant est à gauche de l'image." },
    { id: 'a3-a2', type: 'hottap', fig: 'a3-plan-cabine',
      q: "Sur le plan de cabine, touche ce que l'on te demande.",
      targets: [
        { prompt: "Le siège 4C", part: 's4c' },
        { prompt: "La porte arrière gauche", part: 'porte-ar-lh' },
        { prompt: "L'allée", part: 'allee' },
        { prompt: "Le siège 2F", part: 's2f' },
      ],
      concept: "Lire un plan de cabine : rangée, lettre, côté",
      explain: "Le 4C est en rangée 4, côté LH (en bas), au bord de l'allée. La porte arrière gauche est tout à droite de l'image (arrière) et en bas (LH). L'allée est la bande beige centrale. Le 2F est en rangée 2, côté RH (en haut), contre le hublot." },
    { id: 'a3-a3', type: 'order',
      q: "Remets dans l'ordre les cinq questions à te poser en recevant un plan.",
      items: [
        "Quelle vue est représentée (côté, dessus, coupe) ?",
        "Où est la flèche FWD ?",
        "De quel côté (LH ou RH) parle-t-on ?",
        "Dans quelle unité sont les nombres (cadre, station, rangée) ?",
        "Que dit la légende des symboles ?",
      ],
      concept: "Méthode de lecture d'un plan",
      explain: "On commence par la vue, car elle conditionne tout le reste. Vient la flèche FWD, qui fixe l'avant et donc la gauche et la droite. Ensuite seulement on peut interpréter un côté, puis une valeur (cadre ou station), et enfin les symboles de la légende. Lire dans un autre ordre fait courir le risque d'interpréter un nombre ou un côté dans le mauvais repère." },
    { id: 'a3-a4', type: 'input', fig: 'a3-stations-cadres',
      q: "Observe la fiche fictive qui relie les cadres à leurs stations. Quelle est la station du cadre 7 ? Écris la valeur sans l'unité.",
      doc: {
        title: "Table cadres - stations — document fictif pédagogique",
        table: {
          head: ["Cadre", "Station (graduations fictives)"],
          rows: [["5", "14,3"], ["6", "16,4"], ["7", "18,6"], ["8", "20,7"], ["9", "22,9"]],
        },
        note: "Valeurs inventées pour l'exercice. Dans un vrai dossier, l'unité et le plan d'origine sont précisés par le constructeur.",
      },
      answers: ['18,6', '18.6'],
      concept: "Lire une station dans une table cadres-stations",
      explain: "La table donne la station de chaque cadre : le cadre 7 est à 18,6 graduations du plan d'origine. Sur la figure, la flèche qui part du plan d'origine s'arrête sur ce cadre. Remarque que deux cadres voisins sont séparés de 2 graduations environ : la station fournit une mesure bien plus fine que le seul numéro." },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Dire « à gauche » ou « à droite » sans préciser de quel point de vue.",
      why: "Ta gauche n'est celle de l'avion que si tu regardes vers le nez. Dos au nez, tout est inversé ; la personne qui t'écoute n'est pas forcément orientée comme toi. L'erreur est discrète et ne se voit qu'au montage.",
      better: "Dire « côté gauche de l'avion » ou LH, et vérifier mentalement l'orientation : face au nez, main gauche levée." },
    { error: "Choisir une pièce symétrique d'après la forme ou la ressemblance.",
      why: "Les pièces gauche et droite se ressemblent à s'y méprendre, mais elles sont images l'une de l'autre dans un miroir : trous, encoches et profils sont inversés. La mauvaise ne s'adapte pas, et on la force.",
      better: "Lire le marquage LH ou RH de la pièce et celui de la fiche d'intervention ; s'ils ne concordent pas, ne pas poser." },
    { error: "Confondre numéro de cadre, station et numéro de rangée.",
      why: "Ce sont trois échelles différentes : le cadre est une borne numérotée, la station une distance depuis une origine, la rangée un repère de cabine qui change avec la configuration des sièges. Un nombre pris pour un autre envoie au mauvais endroit.",
      better: "Toujours lire de quel repère parle le nombre (« cadre 7 », « station 18,6 », « rangée 4 ») et ne rien convertir de tête." },
    { error: "Supposer que les numéros augmentent vers l'arrière, ou que l'origine est au nez.",
      why: "C'est souvent vrai, mais le sens de numérotation et la place de l'origine sont des choix du constructeur : les lire dans le dossier ne prend qu'une minute, se tromper coûte beaucoup plus.",
      better: "Lire dans le dossier, avant de compter, le sens de numérotation des cadres et la place du plan d'origine." },
    { error: "Penser que le nez est toujours à gauche de l'image sur un plan.",
      why: "C'est la convention de cette application, pas une règle générale. Un plan tourné autrement fait lire RH pour LH sans que rien ne choque l'œil.",
      better: "Chercher la flèche FWD et la prendre pour référence ; si elle manque, demander avant de poser quoi que ce soit." },
    { error: "Considérer que la lettre A est toujours à gauche et que les rangées se suivent toujours sans trou.",
      why: "C'est l'usage le plus fréquent sur les monocouloirs, mais ce sont des choix de compagnie : certaines sautent des rangées, d'autres n'emploient pas toutes les lettres. Un siège désigné par un numéro faux, c'est un siège faux.",
      better: "Lire le plan de cabine de l'avion concerné, pas celui d'un autre avion ni celui de ta mémoire." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Entrée par l'arrière, dos au nez",
      context: [
        "Il est 6 h 50 et le chantier se prépare. Le chef d'équipe te confie un chariot de trois panneaux de paroi, tous marqués RH. Il te dit simplement : « Pose-les en zone milieu, du côté droit. » Tu entres par la porte arrière et tu longes l'allée vers l'avant, mais pour manœuvrer le chariot tu avances à reculons : tu regardes donc la queue, et le nez est derrière toi.",
        "Arrivée en zone milieu, tu hésites : de ton point de vue, le côté « droit » est celui où ton épaule droite pointe, qui n'est plus celui du chef d'équipe. Autour de toi, des collègues travaillent déjà côté LH. Les panneaux RH sont lourds : tu ne veux pas les déplacer deux fois.",
      ],
      question: "De quel côté de l'allée poses-tu les panneaux marqués RH ?",
      options: [
        { t: "Du côté de ma main droite, puisque c'est ce que le chef a dit.", ok: false, why: "Tu travailles dos au nez : ta droite est le côté LH de l'avion. Les panneaux seraient posés du mauvais côté, sur des parois qui ne les reçoivent pas." },
        { t: "Je me retourne mentalement face au nez : RH est le côté qui sera à ma droite dans cette position, c'est-à-dire à ma gauche maintenant.", ok: true, why: "C'est le raisonnement juste : RH est un côté de l'avion, pas de ta personne. Le marquage des panneaux et la consigne désignent le même côté, quelle que soit ton orientation." },
        { t: "Du côté où il n'y a personne qui travaille, pour ne pas gêner.", ok: false, why: "Le critère de gêne ne dit rien du côté où va la pièce : les panneaux RH ne se posent que côté RH, même si c'est là qu'on travaille déjà. La coactivité se règle en parlant, pas en changeant de côté." },
        { t: "Je pose le premier panneau à droite et je regarde s'il rentre : s'il ne rentre pas, je le mets de l'autre côté.", ok: false, why: "Essayer une pièce symétrique sur le mauvais côté, c'est forcer une forme qui n'est pas faite pour elle et risquer de l'abîmer ou d'abîmer la paroi." },
      ],
      debrief: "RH désigne un côté de l'avion défini par un observateur qui regarde le nez : il ne bouge pas quand tu te retournes. Le bon réflexe est de te tourner mentalement vers l'avant, de lever ta main droite, de vérifier ce qui est de ce côté, puis de comparer avec le marquage de la pièce. Si tu as le moindre doute, tu peux aussi te servir d'un repère fixe : la porte avant RH, par exemple, est toujours du bon côté.",
    },
    {
      title: "Un plan sans flèche",
      context: [
        "Karim te passe, depuis le bureau d'études, un plan de zone en papier pour poser un cache sur la paroi de la rangée 12. Le plan est une vue de dessus, avec des rangées de sièges, des portes et des lettres, mais aucune flèche d'avant, et la légende est coupée par un coin de feuille.",
        "Karim est parti en réunion et le chef d'équipe n'est pas joignable avant 10 h. Tu connais les plans de ce chantier : l'avant est souvent à gauche. Mais pas toujours.",
      ],
      question: "Que fais-tu avant de poser le cache ?",
      options: [
        { t: "Je pars du principe que l'avant est à gauche, comme sur les autres plans.", ok: false, why: "« Souvent » n'est pas « toujours ». Si l'avant est de l'autre côté, RH et LH s'inversent et le cache est posé du mauvais côté." },
        { t: "Je cherche sur le plan un élément dont le côté est écrit sans ambiguïté (une porte marquée LH ou RH, un siège équipage) pour en déduire l'orientation, puis je confirme avec le chef d'équipe ou le bureau d'études avant de poser.", ok: true, why: "Un repère écrit lève le doute sans deviner ; la confirmation évite qu'une erreur de lecture se transforme en pose. Tu peux avancer sur autre chose en attendant." },
        { t: "Je demande à un collègue d'une autre équipe ce qu'il en pense, et je pose si lui aussi dit « à gauche ».", ok: false, why: "Deux avis sans source ne valent pas un plan lisible. Ton collègue n'a pas vu la zone sur le plan et peut se tromper comme toi." },
        { t: "Je pose le cache provisoirement, en le fixant légèrement, et je ferai vérifier plus tard.", ok: false, why: "Une pièce « provisoire » posée sur la mauvaise paroi laisse des traces, et le geste sera à refaire. Mieux vaut attendre une réponse que corriger après coup." },
      ],
      debrief: "Un plan sans flèche d'avant n'est pas exploitable seul : tu ne peux savoir ni où est le nez, ni où est la gauche. L'indice le plus sûr est un élément dont le côté est écrit (porte LH, marquage, siège équipage), puis la confirmation par quelqu'un qui connaît le plan. Se faire confirmer une orientation ne retarde jamais le chantier d'autant qu'une pièce montée à l'envers.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    { id: 'a3-q1', type: 'mcq',
      q: "Choisis une réponse. Tu travailles face à la queue et tu tends le bras gauche. De quel côté de l'avion pointes-tu ?",
      options: [
        { t: "Le côté LH, puisque c'est mon bras gauche.", ok: false, why: "Ce serait vrai seulement face au nez. Dos au nez, ta gauche pointe vers le côté droit de l'avion." },
        { t: "Le côté RH.", ok: true, why: "L'observateur de référence regarde vers l'avant. Tourné vers l'arrière, tu es inversée : ta gauche désigne le côté RH." },
        { t: "Le côté avant.", ok: false, why: "Avant et arrière sont des directions du nez et de la queue ; un bras gauche désigne un côté, pas l'avant." },
        { t: "On ne peut pas savoir sans le plan.", ok: false, why: "On peut savoir : il suffit de la règle de l'observateur qui regarde vers le nez." },
      ],
      concept: "Gauche et droite de l'avion",
      explain: "LH et RH sont définis par rapport à un observateur qui regarde vers l'avant, jamais par rapport à ta position. Si tu regardes vers l'arrière, ta gauche pointe donc vers RH." },
    { id: 'a3-q2', type: 'match',
      q: "Associe chaque axe à la question à laquelle il répond.",
      pairs: [
        { l: "Axe X (longitudinal)", r: "À quelle distance de l'avant ?" },
        { l: "Axe Y (transversal)", r: "À quelle distance du milieu, à gauche ou à droite ?" },
        { l: "Axe Z (vertical)", r: "À quelle hauteur ?" },
      ],
      concept: "Les trois axes",
      explain: "X est dans la longueur (nez-queue), Y dans la largeur (d'un côté à l'autre) et Z dans la hauteur. Un point précis se décrit par ses trois positions, même si, en cabine, on se contente souvent de la rangée, du côté et d'un cadre." },
    { id: 'a3-q3', type: 'hotid', fig: 'a3-stations-cadres',
      q: "Pour chaque élément surligné sur la figure, choisis son nom dans la liste.",
      targets: [{ part: 'origine' }, { part: 'station' }, { part: 'intervalle' }, { part: 'cadres' }],
      pool: ['origine', 'station', 'intervalle', 'cadres', 'echelle', 'objet'],
      concept: "Cadres, plan d'origine, station",
      explain: "Le trait pointillé vertical marqué 0 est le plan d'origine. La flèche horizontale est une station : la distance entre ce plan et un point. L'espace éclairci entre deux cadres est un intervalle. Les traits verticaux régulièrement espacés et numérotés sont les cadres." },
    { id: 'a3-q4', type: 'hotfind', fig: 'a3-plan-cabine',
      q: "Sur le plan, touche tous les sièges situés du côté gauche de l'avion (LH). Les autres sont des leurres.",
      targets: ['s2a', 's4c', 's5a'],
      notes: {
        's2a': "Le 2A est côté LH, contre le hublot : les lettres A, B, C sont du côté gauche.",
        's4c': "Le 4C est côté LH, au bord de l'allée.",
        's5a': "Le 5A est côté LH, contre le hublot.",
      },
      concept: "Côté LH sur un plan de cabine",
      explain: "L'avant est à gauche de l'image : le côté RH est donc en haut et le côté LH en bas. Les sièges du bas (lettres A, B, C) sont côté gauche de l'avion. Les 1F, 2F et 4D sont en haut, donc côté droit." },
    { id: 'a3-q5', type: 'multi',
      q: "Coche toutes les affirmations vraies à propos des stations et des cadres.",
      options: [
        { t: "Un numéro de cadre est une borne visible de l'intérieur de l'avion.", ok: true, why: "Les cadres sont de vraies pièces de structure, qu'on peut compter du doigt." },
        { t: "La station est une distance mesurée depuis un plan d'origine, le long de l'axe X.", ok: true, why: "C'est sa définition : un nombre, dans une unité, depuis une origine choisie par le constructeur." },
        { t: "La station permet de situer un point entre deux cadres.", ok: true, why: "Parce qu'elle est une distance, elle n'est pas limitée aux bornes que sont les cadres." },
        { t: "Le plan d'origine est toujours placé au milieu de l'avion.", ok: false, why: "Il est en général au nez ou près de lui, et c'est le constructeur qui le fixe ; il se lit dans le dossier." },
        { t: "Les numéros de cadres augmentent forcément vers l'arrière.", ok: false, why: "C'est fréquent, pas obligatoire : le sens de numérotation est une convention à lire dans le dossier." },
      ],
      concept: "Cadres et stations",
      explain: "Deux idées à retenir : le cadre est une borne numérotée, visible ; la station est une distance depuis une origine. Où est l'origine et dans quel sens vont les numéros : cela ne se devine pas, cela se lit." },
    { id: 'a3-q6', type: 'sort',
      q: "Classe chaque affirmation : est-elle vraie pour tous les avions, ou se lit-elle dans le dossier du programme ?",
      bins: ["Vrai pour tous les avions", "À lire dans le dossier du programme"],
      items: [
        { t: "LH est le côté gauche d'un observateur qui regarde vers le nez", bin: 0, why: "C'est la convention générale de l'aéronautique pour LH et RH." },
        { t: "L'avion se décrit par trois axes X, Y et Z", bin: 0, why: "Le principe des trois directions est universel." },
        { t: "La place du plan d'origine des stations", bin: 1, why: "Elle est choisie par le constructeur pour chaque avion." },
        { t: "Le sens dans lequel les numéros de cadres augmentent", bin: 1, why: "C'est une convention propre à chaque programme." },
        { t: "L'unité dans laquelle sont écrites les stations", bin: 1, why: "Elle varie d'un constructeur et d'un document à l'autre." },
        { t: "La notation d'une porte (1L, L1, porte 1 gauche)", bin: 1, why: "Le nom exact est un choix du constructeur ou de la compagnie." },
      ],
      concept: "Convention générale ou convention du constructeur",
      explain: "Ce qui est lié à la géométrie de l'avion (trois axes, observateur face au nez) est commun à tous. Les nombres, les origines, les unités et les notations sont des choix du constructeur ou de la compagnie : on ne les devine pas, on les lit." },
    { id: 'a3-q7', type: 'input',
      q: "Lis la fiche fictive d'intervention. Dans quelle rangée dois-tu poser la pièce ? Écris seulement le numéro.",
      doc: {
        title: "Fiche d'intervention — document fictif pédagogique",
        lines: [
          ["Pièce", "Cache de paroi, marquage LH"],
          ["Référence", "EX-25222-01"],
          ["Position", "Rangée 5, côté LH, siège A"],
          ["Repère", "Plan de cabine EX-LOPA-01"],
        ],
        note: "Document inventé pour l'exercice.",
      },
      answers: ['5'],
      concept: "Lire une position dans un document fictif",
      explain: "La fiche donne la rangée (5), le côté (LH) et la lettre (A). Sur le plan, le siège 5A est dans la rangée la plus à l'arrière, côté LH, contre le hublot : la pièce se pose donc sur la paroi qui est à gauche de l'avion, en face du siège 5A." },
    { id: 'a3-q8', type: 'mcq',
      q: "Choisis une réponse. On te dit « le panneau va à droite, entre les cadres 31 et 32 ». Que dois-tu vérifier avant de t'y rendre ?",
      options: [
        { t: "Que ma droite à moi est bien le côté où je dois poser.", ok: false, why: "Ta droite n'est qu'une orientation personnelle. Le côté de l'avion est défini par l'observateur qui regarde le nez." },
        { t: "Que « à droite » désigne RH, et dans quel sens les cadres sont numérotés dans le dossier.", ok: true, why: "Il y a deux conventions à lire : le côté (RH ou LH, vu de face) et le sens de numérotation des cadres, deux choix de l'avion et du constructeur." },
        { t: "Que les cadres 31 et 32 existent bien sur tous les avions.", ok: false, why: "La numérotation est propre à chaque avion : un autre programme peut utiliser d'autres numéros pour le même endroit." },
        { t: "Rien : un numéro de cadre ne prête pas à confusion.", ok: false, why: "Un numéro seul ne dit pas de quel côté ni dans quel sens on compte, donc il peut conduire à la mauvaise paroi." },
      ],
      concept: "Lire une consigne de position",
      explain: "Une consigne de position combine un côté et un repère le long de X. Chacun a sa convention. Tu les confirmes toutes les deux avant de te déplacer, car une pièce symétrique posée sur le mauvais côté ne rentre pas." },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "Un avion se repère avec trois axes : X dans la longueur (nez-queue), Y dans la largeur (d'un côté à l'autre), Z dans la hauteur. Une flèche d'axe montre une direction ; le sens positif et l'origine sont des choix du constructeur.",
    "LH et RH sont définis par un observateur qui regarde vers le nez : le côté gauche de l'avion ne change pas, quelle que soit ta position. Ta propre gauche ne compte pas.",
    "Le long de X, on situe un point soit par les cadres numérotés qui l'encadrent (une borne visible), soit par une station (une distance depuis un plan d'origine), plus fine.",
    "Cadres, stations, origine, unités et notation des portes sont fixés par le constructeur : ils se lisent dans le dossier du programme et ne se devinent pas.",
    "En cabine, un siège se désigne par sa rangée (comptée depuis l'avant) et sa lettre ; la lettre A est du côté gauche dans l'usage courant, mais le plan de cabine de l'avion fait foi.",
    "Avant de lire un plan : quelle vue, où est la flèche FWD, quel côté, quelle unité, que dit la légende. S'il manque une réponse, on demande avant de commencer.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'a4', teaser: "Tu sais maintenant dire où se trouve un objet : de quel côté, à quel cadre, dans quelle rangée. Au chapitre suivant, tu parcours les lieux eux-mêmes : poste de pilotage, cabine, soutes, portes et issues. Tu apprends ce qui est pressurisé et ce qui ne l'est pas, à quoi sert chaque porte, et pourquoi on ne bloque jamais une issue." },

  // Oral blanc ─────────────────────────────────────────────────────
  oral: [
    {
      q: "Un collègue te dit « pose-le à droite ». Explique-lui pourquoi cette phrase peut être ambiguë et ce que tu réponds.",
      expected: ["La gauche et la droite dépendent de la direction dans laquelle on regarde", "Dans l'avion, LH et RH sont définis par un observateur qui regarde vers le nez", "Je demande ou je reformule en disant côté LH ou RH de l'avion"],
      model: "« À droite » dépend de la direction dans laquelle on regarde : si je te fais face, ma droite est ta gauche. Dans l'avion, on a donc fixé une règle : le côté droit, noté RH, est celui d'un observateur qui regarde vers le nez, et le côté gauche, LH, l'autre. Je ne dis jamais « à droite » tout court : je réponds « côté RH de l'avion ? » pour être sûre qu'on parle de la même chose. Et si la pièce porte un marquage LH ou RH, c'est lui qui désigne le côté où elle va, pas ma position quand je la porte.",
    },
    {
      q: "Explique à quelqu'un qui ne connaît pas l'avion la différence entre un numéro de cadre et une station.",
      expected: ["Le cadre est une pièce numérotée, visible de l'intérieur", "La station est une distance depuis un plan d'origine, le long de l'axe X", "Origine, unité et sens de numérotation sont à lire dans le dossier"],
      model: "Les cadres sont les anneaux de structure du fuselage : on les numérote, donc chacun sert de borne, et on peut les compter du doigt. La station est une distance : on part d'un plan d'origine choisi par le constructeur, souvent au nez, et on mesure jusqu'au point, le long de l'axe X. Le numéro de cadre dit « dans ce secteur », la station peut dire précisément « à cette distance », même entre deux cadres. Où est l'origine, dans quelle unité et dans quel sens vont les numéros, je le lis dans le dossier du programme.",
    },
    {
      q: "Tu reçois un plan de cabine en vue de dessus. Décris comment tu retrouves le siège 3E et la porte la plus proche.",
      expected: ["Je cherche d'abord la flèche FWD et la vue", "Les rangées se comptent depuis l'avant ; la lettre donne la position dans la rangée", "Je lis la légende et je repère la porte voisine du même côté"],
      model: "Je cherche d'abord la flèche FWD, pour savoir où est l'avant et donc la gauche et la droite. Je compte ensuite les rangées depuis l'avant jusqu'à la troisième, puis je vais à la lettre E, qui est du côté droit, au milieu du bloc de trois sièges. Je regarde la légende pour être sûre des symboles, et je cherche la porte la plus proche du même côté, que je désigne par son côté et son ordre depuis l'avant.",
    },
  ],

  // Matrice de certification ───────────────────────────────────────
  matrix: [
    { savoir: "Les trois axes, les côtés LH et RH définis par l'observateur qui regarde vers le nez, et les mots de direction (FWD, AFT, INBD, OUTBD).", savoirFaire: "Dire sans ambiguïté de quel côté et dans quelle direction se trouve un élément, quelle que soit sa propre orientation.", comp: 'C1', ex: ['a3-a1', 'a3-q1', 'a3-q2', 'a3-q4'], proof: "Réussite des exercices de repérage visuel ; réponse orale à la question sur « à droite »." },
    { savoir: "Cadres numérotés, plan d'origine, station : ce qu'ils mesurent et ce qui se lit dans le dossier du programme.", savoirFaire: "Situer un point le long du fuselage par un intervalle de cadres ou par une station lue dans une table fictive.", comp: 'C1', ex: ['a3-a4', 'a3-q3', 'a3-q5', 'a3-q6'], proof: "Lecture d'une table cadres-stations fictive et identification des éléments sur la figure." },
    { savoir: "Repérage de cabine : rangées, lettres, allée, portes, plan de cabine, méthode de lecture d'un plan.", savoirFaire: "Retrouver un siège, un côté et une porte sur un plan fictif, et reconnaître quand un plan ne peut pas être exploité.", comp: 'C1', ex: ['a3-a2', 'a3-a3', 'a3-q7', 'a3-q8'], proof: "Réussite des exercices de lecture de plan et de fiche d'intervention fictifs." },
  ],
});
