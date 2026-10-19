// Chapitre e1 — La méthode : préparer et identifier (domaine E, lot 8)
CA.addChapter({
  id: 'e1',
  domain: 'E',
  order: 200,
  title: "La méthode : préparer et identifier",
  short: "Cinq temps pour chaque geste ; poste, dossier, moyens, pièce et zone vérifiés avant de commencer",
  minutes: 45,
  comps: ['C1'],
  prereq: ['c3', 'd4'],
  sources: ['rncp40664', 'cqpm-0289-observatoire', 'ntsb-sa-054-fod', 'skybrary-dirty-dozen', 'inrs-epi', 'rmbd-original'],

  // 1
  objectives: [
    "Dérouler dans l'ordre les cinq temps d'un geste d'intégration et dire ce que chacun produit.",
    "Classer une information selon sa source : observée, identifiée ou prescrite.",
    "Organiser un poste en zones et y repérer ce qui manque ou n'est pas à sa place.",
    "Vérifier outils, consommables et EPI selon trois critères : présent, en état, valide.",
    "Identifier une pièce en partant de la nomenclature, puis retrouver sa zone dans l'avion.",
    "Relever l'état initial d'une zone et décider, liste en main, si le geste peut démarrer.",
  ],

  // 2
  why: [
    "Dans une cabine, on ne « retourne pas chercher la douille » comme dans un garage. Entre ta zone et le magasin, il y a une passerelle, une porte d'avion, des collègues qui travaillent dans le couloir, parfois un autre bâtiment. Chaque aller-retour coûte du temps, fait passer devant des surfaces fragiles et laisse un poste ouvert sans personne. La préparation sert à faire ces trajets une fois, avant, et les mains vides de tout ce qui n'est pas utile.",
    "Elle sert aussi à ne pas poser la mauvaise pièce. Beaucoup d'éléments de cabine existent en version gauche et en version droite : deux panneaux presque jumeaux, images l'un de l'autre dans un miroir. Monté du mauvais côté, le panneau « rentre presque » ; on s'en aperçoit à la dernière fixation, quand il faut tout déposer, ou plus tard, quand une autre équipe ne trouve plus le sien.",
    "Enfin, c'est ce que l'on regardera chez toi. Le référentiel de branche du CQP range ses critères d'évaluation en quatre familles : les méthodes utilisées, les moyens utilisés (leur disponibilité et leur validité), les liens professionnels, les contraintes d'environnement. Trois des quatre se jouent avant même que tu aies touché la pièce.",
  ],

  // 3
  discover: {
    fig: 'e1-methode-cinq-temps',
    intro: "Avant de lire, regarde cette frise. Elle revient dans tous les chapitres du domaine E : chaque geste que tu apprendras (protéger, présenter, fixer, contrôler) sera découpé de cette façon.",
    look: [
      "Combien de cases se suivent, et dans quel ordre ? Laquelle te paraît la plus courte à faire, laquelle la plus longue ?",
      "La case 3 et la case 4 ont l'air de dire la même chose. Quelle différence devines-tu entre « contrôler » et « passer en revue les erreurs à éviter » ?",
      "La bande du bas est reliée aux cinq cases par des pointillés. Qu'est-ce que cela change par rapport à une sixième case placée au bout ?",
    ],
  },

  // 4
  explain: [
    {
      h: "Cinq temps, et une sortie toujours ouverte",
      fig: 'e1-methode-cinq-temps',
      p: [
        "Cinq cases, quatre flèches, toujours de gauche à droite : c'est la [[Méthode en cinq temps]]. Elle vaut pour un panneau à poser comme pour une vis à serrer ou un connecteur à brancher. Chaque temps répond à une question et laisse quelque chose derrière lui.",
      ],
      table: {
        head: ['Temps', 'La question que tu te poses', 'Ce que tu as produit à la fin'],
        rows: [
          ['1 · Avant', "Ai-je tout ce qu'il faut pour aller au bout sans m'interrompre ?", "Un dossier lu, un poste prêt, une pièce identifiée, une zone connue"],
          ['2 · Action', "Quelle est la prochaine étape écrite ?", "Le geste, dans l'ordre de l'instruction"],
          ['3 · Contrôle', "Ce que je vois correspond-il à ce qui est demandé ?", "Une comparaison point par point entre le résultat et la demande"],
          ['4 · Erreurs à éviter', "Suis-je tombée dans un des pièges connus de ce geste ?", "Un second passage, ciblé sur les erreurs que d'autres ont déjà faites"],
          ['5 · Trace', "Quelqu'un qui n'était pas là peut-il savoir ce qui a été fait ?", "Un écrit : quoi, par qui, quand, avec quoi, et ce qui a été constaté"],
        ],
      },
    },
    {
      h: "Pourquoi deux temps pour vérifier",
      p: [
        "Le contrôle (3) et les erreurs à éviter (4) ne cherchent pas la même chose. Le contrôle vérifie ce à quoi tu as pensé : la pièce est en place, les fixations sont toutes là. Le quatrième temps traque ce à quoi on ne pense pas spontanément : le panneau droit monté à gauche, la pièce posée tête en bas, la protection oubliée derrière, l'outil resté dans la zone.",
        "Ces pièges, tu les découvres une première fois pendant le temps « avant » : ils sont souvent signalés dans l'instruction, ou rappelés par ton tuteur. Tu les repasses en revue une fois le geste fait, à un moment où corriger ne coûte encore que quelques minutes. Chaque chapitre du domaine E te donnera la liste des pièges propres à son geste.",
        "La bande du bas (n° 6) n'est pas un sixième temps : c'est une sortie. À n'importe quel moment, une condition qui manque ou un [[Écart]] entre ce que tu vois et ce que dit le dossier suspend le geste. Suspendre ne veut pas dire lâcher la pièce et partir : tu la laisses dans un état stable, puis tu vas chercher une réponse auprès de quelqu'un qui a l'autorité pour la donner (chef d'équipe, tuteur, qualité, selon l'organisation de ton atelier).",
      ],
    },
    {
      h: "Trois regards : observé, identifié, prescrit",
      fig: 'e1-trois-regards',
      p: [
        "Avant d'utiliser une information, demande-toi d'où elle vient. Il n'existe que trois sources, et elles n'ont pas la même valeur.",
      ],
      list: [
        "**Observé** : tes sens te le disent, ici et maintenant. Le sol est propre. Le panneau voisin porte une rayure. Une alvéole de la servante est vide. Ce que tu observes s'appelle un [[Constat]] : il se décrit (où, quoi, grand comment), il ne se juge pas.",
        "**Identifié** : un marquage l'affirme, et tu l'as comparé au dossier. La référence de l'étiquette est celle de la nomenclature ; la date de l'étiquette collée sur la clé n'est pas dépassée. Identifier, c'est toujours comparer deux écrits. Lire une étiquette sans la comparer à rien n'identifie rien.",
        "**Prescrit** : un document applicable le fixe, et rien sur place ne peut te le donner. La valeur de serrage d'une vis, le jeu demandé entre deux panneaux, l'ordre des étapes, le produit de nettoyage autorisé. Une [[Prescription]] ne se devine pas, ne se déduit pas de la pièce d'à côté et ne se demande pas « à peu près » à un collègue.",
      ],
      table: {
        head: ['Information', 'Source', 'Pourquoi'],
        rows: [
          ["Le plancher de la zone est protégé", 'Observé', "Tu le vois ; tu vois aussi s'il manque une plaque"],
          ["Ce panneau est destiné au côté gauche", 'Identifié', "Marquage LH de la pièce comparé à la ligne de nomenclature"],
          ["La clé dynamométrique est utilisable aujourd'hui", 'Identifié', "Date de son étiquette comparée à la date du jour"],
          ["La valeur à laquelle serrer cette vis", 'Prescrit', "Elle est écrite dans l'instruction, nulle part sur la vis"],
          ["La rayure du panneau voisin est acceptable ou non", 'Prescrit', "Les critères d'acceptation sont dans un document ; toi, tu constates et tu signales"],
        ],
      },
      callout: { kind: 'warn', text: "L'erreur classique consiste à faire glisser une information d'une case à l'autre. « Les autres vis ont l'air serrées comme ça » : tu as observé, tu crois tenir une prescription. « C'est le même panneau qu'hier » : tu as observé une ressemblance, tu crois avoir identifié. La parade tient en une question : qui me le dit, mes yeux, un marquage ou un document ?" },
    },
    {
      h: "Lire le dossier avant d'agir",
      p: [
        "Le domaine C t'a montré ce que contient un dossier de travail. Ici, tu apprends à le lire *pour agir*. Première règle : tu le lis **en entier une fois avant de toucher quoi que ce soit**, comme on lit une recette jusqu'au bout avant d'allumer le four. C'est ainsi que tu découvres à temps qu'il faudra un second opérateur à l'étape 4, ou un outil que tu n'as pas.",
        "Deuxième règle : tu le lis avec six questions en tête, et tu ne commences pas tant qu'une réponse manque.",
      ],
      list: [
        "**Quoi ?** Quel élément, en quelle quantité, sous quelles références dans la nomenclature.",
        "**Où ?** Quel avion, quelle zone, quel côté, quel repère dans la cabine.",
        "**Dans quel état dois-tu trouver la zone ?** Ce qui doit déjà être posé, ou déjà déposé, avant ton geste.",
        "**Avec quoi ?** Outils, moyens de contrôle, protections, consommables, nombre de personnes.",
        "**Comment, et dans quel ordre ?** Les étapes, avec les valeurs prescrites qui les accompagnent.",
        "**Qu'est-ce qui prouve que c'est bon ?** Les contrôles demandés et ce qu'il faudra écrire.",
      ],
      callout: { kind: 'doc', text: "Vérifie aussi que ce dossier est bien le tien : il s'applique à un avion donné, dans une configuration donnée, à un indice donné (chapitre c3). Deux avions voisins sur la même ligne peuvent recevoir des cabines différentes. Le dossier de l'avion d'à côté est un excellent document, pour l'avion d'à côté. Quant au format exact (noms des documents, cases, visas), il dépend de l'entreprise et du programme et t'est présenté au poste : les extraits de ce cours sont fictifs et marqués `EX-`." },
    },
    {
      h: "Préparer le poste : chaque chose a une adresse",
      fig: 'e1-poste-prepare',
      p: [
        "La figure montre un [[Poste de travail]] en cabine, vu de dessus, paroi en haut. Un poste préparé est un espace découpé en zones où chaque objet a une adresse. L'intérêt n'est pas de faire joli : un objet **hors de son adresse se voit tout de suite**.",
      ],
      table: {
        head: ['Zone', "Ce qu'on y met", "Ce qu'on n'y met jamais"],
        rows: [
          ["Zone d'intervention (1)", "La pièce en cours de pose, l'outil que tu as en main", "Les outils « pour tout à l'heure », les emballages"],
          ['Documents (2)', "Le dossier ouvert à la bonne page, lisible sans quitter la zone", "Un outil posé dessus, un gobelet"],
          ['Outils (3)', "La servante : le meuble à tiroirs où chaque outil a son alvéole", "Un outil personnel, que personne n'a inventorié"],
          ['Pièces (4)', "Les pièces dans leur emballage, avec leur étiquette, séparées par repère", "Des pièces déballées d'avance « pour gagner du temps »"],
          ['Bac à chutes (5)', "Emballages, chutes d'adhésif, protections retirées", "Une pièce douteuse : elle se signale, elle ne se jette pas"],
          ['Passage (6)', "Rien", "Même un carton vide, même « deux minutes »"],
        ],
      },
    },
    {
      h: "Ce que les quatre anomalies t'apprennent",
      p: [
        "Quatre anomalies se sont glissées sur la figure (n° 7 à 10). La plus instructive est l'alvéole vide (8), parce qu'elle est à la fois une anomalie et une aide. La mousse découpée à la forme de chaque outil rend l'absence visible d'un coup d'œil et dit *quel* outil chercher. Sans alvéole, tu ne saurais même pas qu'il manque quelque chose. L'outil est d'ailleurs sur la figure : c'est la clé posée dans la [[Zone d'intervention]] (7), à l'endroit exact où un panneau va venir se refermer.",
        "L'équerre sans étiquette (9) et la chute d'adhésif (10) racontent la même histoire à plus petite échelle : un objet sorti de son adresse perd son identité ou devient un corps étranger. Les recommandations publiques de prévention des objets oubliés en maintenance aéronautique insistent sur ces deux réflexes, que tu retrouveras au domaine G : inventorier ses outils avant et après le travail, et ne rien poser là où ce n'est pas prévu.",
        "En cabine, le poste est étroit et partagé. Préparer, c'est donc aussi **limiter** : tu n'apportes que ce que le geste demande. Chaque objet en plus est un objet à surveiller, à compter et à ressortir.",
      ],
    },
    {
      h: "Outils, consommables, EPI : présent, en état, valide",
      p: [
        "Pour chaque moyen cité par le dossier, trois vérifications, toujours les mêmes.",
      ],
      table: {
        head: ['Famille', 'Présent ?', 'En état ?', 'Valide ?'],
        rows: [
          ['Outils à main', "Le type et la taille demandés, pas « celui qui ressemble »", "Embout net, mors non usés, manche entier", "Outil inventorié dans la servante"],
          ['Outils qui mesurent ou qui serrent à une valeur', "Le bon instrument, dans la bonne plage", "Propre, sans trace de chute", "Étiquette de validité lisible, date non dépassée"],
          ['Consommables', "Le produit nommé par le dossier, pas un « équivalent »", "Emballage fermé, étiquette lisible", "Date de péremption non dépassée"],
          ['Protections', "En quantité suffisante pour toute la zone", "Entières, propres dessus et dessous", "Du type prévu pour cette surface"],
          ['EPI', "Ceux que la zone et le geste imposent", "Ni déchirés ni fissurés, à ta taille", "Selon les consignes d'entretien de l'atelier"],
        ],
      },
    },
    {
      h: "Pourquoi une date sur un outil ou sur un pot",
      p: [
        "Un instrument de mesure ou une clé dynamométrique dérive avec l'usage et les chocs. Il est donc vérifié périodiquement, et une [[Étiquette de validité]] indique jusqu'à quand son indication est digne de confiance. Passé cette date, il mesure peut-être encore juste, mais plus personne ne peut le prouver : tout ce que tu contrôlerais avec lui serait à refaire.",
        "Même logique pour un [[Consommable]], c'est-à-dire un produit qui se consomme pendant le travail (adhésif, produit de nettoyage, colle, mastic). Après sa [[Date de péremption]], il peut avoir changé sans que cela se voie dans le pot.",
        "Un moyen manquant, abîmé ou périmé ne se remplace pas par ce qu'on a sous la main. Tu le remets dans le circuit prévu (magasin, responsable de l'outillage) et tu obtiens le bon. Pour les EPI, la règle de prévention est la même partout : ils complètent les protections collectives, ils ne les remplacent pas, et un EPI abîmé ne protège plus.",
      ],
    },
    {
      h: "Identifier la pièce : comparer, dans l'ordre",
      fig: 'e1-identifier-piece',
      p: [
        "La figure montre un panneau vu de dos avec ses marquages, et à droite son étiquette agrandie (fictive) au-dessus de la ligne de nomenclature. Identifier, c'est faire le chemin **du dossier vers la pièce**, jamais l'inverse. Tu pars de ce qui est demandé, puis tu regardes si la pièce y répond. Dans l'autre sens, on finit toujours par trouver que « ça correspond à peu près ».",
      ],
      list: [
        "**Référence (P/N)**, caractère par caractère, jusqu'au dernier suffixe. `EX-48213-07` et `EX-48213-08` sont deux pièces différentes ; ce peut être le même panneau en version gauche et en version droite.",
        "**Indice** : la version de définition de la pièce doit être celle que le dossier accepte.",
        "**Côté et sens** : le [[Marquage de côté]] (LH pour gauche, RH pour droite, toujours définis en regardant vers l'avant de l'avion) et la [[Flèche de sens]] (FWD, vers l'avant). Toutes les pièces n'en portent pas ; dans ce cas, c'est le plan qui donne l'orientation.",
        "**Interface** : le nombre et la position des points de fixation doivent être ceux de l'emplacement. C'est une vérification observée, qui recoupe l'identification.",
        "**État** : ni choc, ni rayure, ni coin écrasé, ni emballage percé. Un défaut vu maintenant est un défaut d'approvisionnement ; vu après la pose, il devient le tien.",
        "**Quantité** : autant de pièces que le demande la nomenclature. Une pièce en trop à la fin est un signal d'alarme, pas un bonus.",
      ],
      callout: { kind: 'warn', text: "L'étiquette reste avec la pièce jusqu'à la pose. Une pièce déballée, sans étiquette, hors de son bac (n° 9 sur la figure du poste) ne peut plus être identifiée : personne ne peut prouver ce qu'elle est. Elle ne se pose pas « parce qu'elle ressemble » ; elle se met de côté et se signale." },
    },
    {
      h: "S/N et lot : pour retrouver, pas pour choisir",
      p: [
        "Le numéro de série (S/N) et le numéro de lot ne servent pas à choisir la pièce. Ils servent à la **retrouver** plus tard : si un défaut est découvert sur une série, on saura dans quels avions sont montés les exemplaires concernés. Tu les recopies dans la trace quand elle le demande, pendant que l'étiquette est encore sous tes yeux, et non de mémoire une fois le panneau plaqué contre la paroi.",
      ],
    },
    {
      h: "Identifier la zone, connaître ses conditions d'accès",
      p: [
        "La bonne pièce au mauvais endroit reste une erreur. Tu identifies la zone comme tu identifies la pièce : en partant du dossier. Il te donne un avion, un côté, une position le long de la cabine (les repères du chapitre a3). Sur place, tu retrouves cette position avec les repères que le dossier utilise, pas en comptant « la quatrième fenêtre après la porte ». Dans une cabine en cours d'aménagement, sans sièges ni numéros de rangées, tout se ressemble ; il suffit de compter depuis le mauvais bout pour se tromper.",
        "Une [[Condition d'accès]] est ce qui doit être vrai pour que tu puisses entrer dans la zone et y travailler. Certaines s'observent, d'autres te sont données.",
      ],
      table: {
        head: ['Condition', 'Comment tu la connais'],
        rows: [
          ["Tu es affectée à cet avion, à cette zone, aujourd'hui", "Donné : chef d'équipe, briefing de prise de poste"],
          ["L'accès est en place et sûr : passerelle, plateforme, éclairage", "Observé sur place"],
          ["L'état d'énergie est connu : avion sous tension ou non, réseaux sous pression ou non", "Donné au briefing ou affiché ; jamais supposé"],
          ["Les autres métiers présents sont identifiés, vos gestes sont compatibles", "Donné au briefing, puis vérifié en parlant aux voisins"],
          ["Ce qui devait être fait avant ton geste l'est réellement", "Identifié dans le dossier (étapes précédentes visées), puis observé"],
          ["La zone est protégée et propre", "Observé ; c'est l'objet du chapitre suivant"],
        ],
      },
      callout: { kind: 'info', text: "Pourquoi l'état d'énergie te concerne-t-il, toi qui poses un panneau ? Parce que derrière ce panneau passent des faisceaux électriques et parfois des tuyauteries. Savoir si l'avion est alimenté change ce que tu as le droit de déplacer, de débrancher ou de frôler avec un outil métallique." },
    },
    {
      h: "L'état initial : la photo d'avant",
      p: [
        "Dernière vérification : dans quel état trouves-tu la zone ? L'[[État initial]] est tout ce qui est vrai *avant* ton premier geste. C'est l'état des lieux d'un logement que l'on loue : on le fait en entrant, pas en rendant les clés.",
        "Commence par une photo mentale, méthodique : de haut en bas, de gauche à droite, toujours dans le même sens. Qu'est-ce qui est déjà posé ? Qu'est-ce qui est protégé ? Y a-t-il un défaut visible sur ce qui entoure ta zone (rayure, tache, choc, protection déchirée) ? Y a-t-il un objet qui n'a rien à faire là ?",
        "Ce que tu trouves d'anormal, tu le signales **avant** de commencer et tu le fais noter selon la pratique de l'atelier. La raison est très concrète. Une rayure trouvée à 7 h sur le panneau voisin est un constat. La même rayure découverte à 11 h, après ton intervention, est une question : « c'est toi ? ». Et tu n'auras aucun moyen de répondre.",
      ],
    },
    {
      h: "La liste « avant » : six lignes, aucune case vide",
      fig: 'e1-checklist-avant',
      p: [
        "Tout ce chapitre tient sur une [[Liste de vérification]] de six lignes. Celle de la figure, `EX-CL-01`, est fictive ; ton atelier a peut-être la sienne, ou te demande de l'avoir en tête. Peu importe le support : ce sont les six familles qui comptent.",
      ],
      list: [
        "**Dossier applicable** : le bon avion, la bonne configuration, le bon indice ; lu en entier.",
        "**Zone prête** : identifiée, accessible, état d'énergie connu, état initial relevé.",
        "**Outils valides** : présents, en état, date de validité non dépassée.",
        "**Pièces conformes** : référence, indice, côté, état, quantité.",
        "**Protections** : disponibles et adaptées à la zone.",
        "**Coordination** : briefing fait, voisins prévenus de ce que tu vas faire.",
      ],
      callout: { kind: 'tip', text: "Sur la figure, la ligne 3 n'est pas cochée : le geste ne démarre pas, même pour « les étapes qui n'ont pas besoin de cet outil ». Un geste commencé puis interrompu laisse dans l'avion un état que personne n'a prévu : panneau présenté mais non fixé, vis engagées mais non serrées, poste ouvert sans opérateur. C'est dans ces états intermédiaires que naissent les oublis. Et cocher une case, c'est affirmer « je l'ai vérifié moi-même, aujourd'hui », pas « ça doit être bon »." },
    },
  ],

  // 5
  vocab: [
    { fr: 'Méthode en cinq temps', en: 'Five-step method', def: "Découpage de tout geste d'intégration : avant, action, contrôle, erreurs à éviter, trace, avec la possibilité de s'arrêter et de questionner à chaque temps.", tip: "A-A-C-E-T : « Avant d'Agir, Contrôle, Évite, Trace »." },
    { fr: 'Poste de travail', en: 'Workstation', def: "L'espace organisé autour de la zone d'intervention : documents, outils, pièces, bac à chutes et passage, chacun à sa place." },
    { fr: "Zone d'intervention", en: 'Work area', def: "L'endroit précis de l'avion où le geste se fait ; on n'y laisse que la pièce en cours et l'outil tenu en main." },
    { fr: 'Liste de vérification', en: 'Checklist', def: "Suite de points à contrôler un par un avant de commencer ; une case se coche quand on a vérifié soi-même, pas quand on suppose." },
    { fr: 'Constat', en: 'Finding', def: "Ce que l'on observe sur place et que l'on décrit sans le juger : où, quoi, de quelle taille.", tip: "Un constat commence par « je vois », jamais par « je pense »." },
    { fr: 'Prescription', en: 'Requirement', def: "Ce qu'un document applicable impose : une valeur, une limite, une méthode, un ordre d'opérations. Elle se lit, elle ne se devine pas." },
    { fr: 'Écart', en: 'Discrepancy', def: "Différence entre ce que tu trouves (pièce, zone, mesure) et ce que demande le dossier. Un écart suspend le geste jusqu'à une réponse autorisée." },
    { fr: "Condition d'accès", en: 'Access condition', def: "Ce qui doit être vrai pour entrer dans la zone et y travailler : affectation, accès sûr, état d'énergie connu, coactivité réglée, étapes précédentes faites." },
    { fr: 'État initial', en: 'As-found condition', def: "L'état de la zone et de ce qui l'entoure avant ton premier geste, défauts déjà présents compris.", tip: "L'état des lieux d'entrée d'un logement." },
    { fr: 'Consommable', en: 'Consumable', def: "Produit qui se consomme pendant le travail et ne reste pas tel quel : adhésif, chiffon, produit de nettoyage, colle, mastic." },
    { fr: 'Date de péremption', en: 'Expiry date', def: "Date après laquelle un consommable ne doit plus être utilisé, parce que ses propriétés ne sont plus garanties." },
    { fr: 'Étiquette de validité', en: 'Calibration label', def: "Étiquette portée par un outil qui mesure ou qui serre à une valeur ; elle indique jusqu'à quelle date sa vérification périodique reste valable." },
    { fr: 'Marquage de côté', en: 'Side marking', abbr: 'LH/RH', def: "Indication du côté de l'avion auquel une pièce est destinée : LH (left hand, gauche) ou RH (right hand, droite), en regardant vers l'avant." },
    { fr: 'Flèche de sens', en: 'Direction arrow', def: "Flèche marquée sur une pièce, souvent accompagnée de FWD (vers l'avant) ou UP (vers le haut), qui indique comment l'orienter une fois montée." },
  ],

  // 6
  example: {
    title: "Mardi, 7 h 05 : un panneau de paroi, côté gauche",
    body: [
      "Ibrahim, ton chef d'équipe, te confie la pose d'un panneau de paroi côté gauche. Tu ouvres le dossier au pupitre et tu le lis jusqu'au bout avant de bouger. L'extrait ci-dessous est fictif.",
      "Première découverte : l'étape 4 demande deux opérateurs. Tu préviens Ibrahim tout de suite ; il te réserve Léa à partir de 8 h. Découvert à l'étape 4, ce besoin t'aurait laissée seule, un panneau à bout de bras.",
      "Au bac de pièces, tu pars de la nomenclature : `EX-48213-07`, indice C, côté LH, quantité 1. L'étiquette du panneau dit `EX-48213-07`, indice C. Le marquage LH est au dos, la flèche FWD aussi. Quatre points de fixation, comme sur l'emplacement. Tu recopies le S/N `EX-000412` sur la fiche de suivi pendant que l'étiquette est sous tes yeux.",
      "À la servante, la clé dynamométrique demandée est bien dans son alvéole, mais la date de son étiquette de validité est passée depuis vendredi. Tu ne la prends pas : tu la rapportes au magasin, qui t'en remet une valide. Dix minutes.",
      "Dans la zone, tu fais ta photo d'avant. Plancher protégé, panneau voisin en place, avec une rayure fine près du bord. Tu la montres à Ibrahim, qui la fait noter. Tu n'as encore rien posé, et tu as déjà évité trois ennuis : un geste à deux commencé seule, un serrage que personne n'aurait pu prouver, une rayure qui serait devenue la tienne.",
    ],
    doc: {
      title: "Extrait d'instruction de travail — document fictif pédagogique",
      lines: [
        ['Document', 'EX-IT-2210 · indice B'],
        ['Avion', 'EX-AC-07'],
        ['Zone', 'Cabine, côté gauche (LH), repère EX-Z3'],
        ['Élément', 'Panneau de paroi EX-48213-07 · indice C · quantité 1'],
        ['Moyens', "Tournevis à embout prescrit ; clé dynamométrique en cours de validité ; jauge d'épaisseur"],
        ['Étape 4', 'Présentation du panneau : 2 opérateurs'],
        ['Contrôle', 'Jeu et affleurement avec le panneau voisin : valeurs au paragraphe 5 du document EX-IT-2210'],
      ],
      note: "Références, repères et numéros de paragraphe inventés pour l'exercice.",
    },
  },

  // 7
  demo: {
    title: "Identifier un panneau en huit regards",
    fig: 'e1-identifier-piece',
    steps: [
      { label: "Partir de la demande", text: "Tu lis d'abord la ligne de nomenclature : c'est elle qui dit ce qu'il faut poser. Ici : `EX-48213-07`, côté LH. Tu gardes cette ligne sous les yeux pendant toute la suite.", hl: ['nomenclature'] },
      { label: "Trouver l'étiquette", text: "Tu cherches l'étiquette d'identification sur la pièce ou sur son emballage. Pas d'étiquette, pas d'identification : la pièce est mise de côté.", hl: ['etiquette'] },
      { label: "Comparer la référence", text: "Tu compares le P/N à la nomenclature caractère par caractère, suffixe compris. Le doigt sur la ligne aide vraiment : l'œil saute volontiers le dernier chiffre.", hl: ['pn', 'nomenclature'] },
      { label: "Vérifier l'indice", text: "L'indice de la pièce (ici C) doit être celui que le dossier accepte. Une pièce de bonne référence mais d'un autre indice ne se pose pas sans réponse autorisée.", hl: ['indice'] },
      { label: "Lire le côté", text: "Le marquage LH confirme que ce panneau va à gauche de l'avion, quand on regarde vers l'avant. Il recoupe ce que dit la nomenclature.", hl: ['cote', 'nomenclature'] },
      { label: "Lire le sens", text: "La flèche FWD indique le bord qui regardera l'avant de l'avion. Sans elle, tu pourrais présenter le panneau retourné et t'en apercevoir seulement aux fixations.", hl: ['sens'] },
      { label: "Recouper par l'interface", text: "Tu comptes les points de fixation et tu regardes leur position : ils doivent correspondre à ceux de l'emplacement. C'est ton œil qui confirme ce que l'étiquette affirme.", hl: ['fixations'] },
      { label: "Relever pour la trace", text: "La pièce est acceptée : tu recopies maintenant le S/N et le lot là où la trace les demande. Dans dix minutes, l'étiquette sera contre la paroi.", hl: ['sn', 'lot'] },
    ],
  },

  // 8
  activities: [
    {
      id: 'e1-a1', type: 'hotfind', fig: 'e1-poste-prepare',
      q: "Ce poste a l'air rangé. Touche les quatre anomalies qui devraient t'arrêter avant de commencer.",
      targets: ['outil-hors-place', 'alveole-vide', 'piece-non-identifiee', 'chute-au-sol'],
      notes: {
        'outil-hors-place': "Une clé posée dans la zone d'intervention : c'est là qu'un panneau va se refermer. Un outil est dans ta main ou dans son alvéole.",
        'alveole-vide': "Une alvéole vide signale un outil manquant et dit lequel. Tant qu'il n'est pas retrouvé, le poste n'est pas prêt.",
        'piece-non-identifiee': "Une équerre déballée, sans étiquette, hors du bac : plus personne ne peut prouver ce qu'elle est.",
        'chute-au-sol': "Un morceau d'adhésif dans le passage : il glisse sous le pied, colle à une semelle et voyage dans l'avion.",
      },
      explain: "Les six zones (intervention, documents, outils, pièces, bac à chutes, passage) sont normales : ce sont des adresses. Les quatre anomalies sont des objets hors de leur adresse, ou une adresse vide. C'est tout l'intérêt d'un poste organisé : l'anomalie saute aux yeux.",
      concept: "Organisation du poste",
    },
    {
      id: 'e1-a2', type: 'sort',
      q: "Classe chaque information selon sa source : tes sens, un marquage comparé au dossier, ou un document.",
      bins: ['Observé', 'Identifié', 'Prescrit'],
      items: [
        { t: "Il y a un carton dans le passage", bin: 0, why: "Tu le vois. Aucun document n'est nécessaire pour le constater." },
        { t: "Le pot de mastic est encore utilisable", bin: 1, why: "Tu compares la date de péremption de son étiquette à la date du jour." },
        { t: "Le jeu à laisser entre deux panneaux", bin: 2, why: "C'est une valeur fixée par l'instruction ; elle n'est écrite sur aucun des deux panneaux." },
        { t: "Le coin de l'emballage est écrasé", bin: 0, why: "Tu le vois et tu peux le toucher : c'est un constat, à décrire et à signaler." },
        { t: "Cette pièce est à l'indice C", bin: 1, why: "L'étiquette l'affirme ; tu le compares à l'indice que demande la nomenclature." },
        { t: "Le nombre de personnes nécessaires pour présenter l'élément", bin: 2, why: "Le dossier le fixe ; « on y arrive bien tout seul » est une opinion, pas une prescription." },
        { t: "Le panneau voisin est déjà en place", bin: 0, why: "Tu le vois. En revanche, savoir s'il devait l'être se lit dans le dossier." },
      ],
      explain: "Observé : tes sens, ici et maintenant. Identifié : un marquage que tu as comparé à ce que demande le dossier. Prescrit : une valeur, une limite ou une méthode qui n'existe que dans un document. Quand tu hésites, demande-toi ce que tu devrais avoir en main pour répondre : rien, une étiquette, ou l'instruction.",
      concept: "Observé, identifié, prescrit",
    },
    {
      id: 'e1-a3', type: 'order',
      q: "Remets dans l'ordre les cinq étapes de la préparation, de la prise de poste au démarrage du geste.",
      items: [
        "Lire le dossier en entier et vérifier qu'il s'applique à ton avion",
        "Réunir les moyens et identifier les pièces là où ils sont stockés",
        "Rejoindre la zone et vérifier ses conditions d'accès",
        "Relever l'état initial et signaler ce qui est déjà abîmé",
        "Passer la liste « avant » : démarrer si aucune case n'est vide",
      ],
      explain: "Le dossier vient en premier : c'est lui qui dit quels moyens réunir et quelle zone rejoindre. Outils et pièces se vérifient là où ils sont stockés, pour ne pas monter dans l'avion un outil périmé ou une mauvaise référence. Dans la zone, on vérifie qu'on peut y travailler avant de l'examiner. La liste se passe en dernier, parce qu'elle récapitule tout le reste.",
      concept: "Ordre de la préparation",
    },
    {
      id: 'e1-a4', type: 'input',
      q: "Compare chaque étiquette à ce que demande la nomenclature. Écris le repère (10, 20 ou 30) de la pièce que tu ne poses pas en l'état.",
      doc: {
        title: "Nomenclature et étiquettes du bac — document fictif pédagogique",
        table: {
          head: ['Repère', 'La nomenclature demande', "L'étiquette de la pièce dit"],
          rows: [
            ['10', 'EX-48213-07 · indice C · LH', 'EX-48213-07 · indice C · LH'],
            ['20', 'EX-48213-08 · indice C · RH', 'EX-48213-08 · indice B · RH'],
            ['30', 'EX-51740-02 · indice A', 'EX-51740-02 · indice A'],
          ],
        },
        note: "Références inventées pour l'exercice.",
      },
      answers: ['20', 'repère 20', 'repere 20'],
      explain: "Au repère 20, la référence et le côté sont bons, mais l'étiquette porte l'indice B alors que la nomenclature demande l'indice C. C'est un écart : la pièce est mise de côté et signalée. Peut-être que l'indice B est accepté, peut-être pas ; cette décision appartient à quelqu'un d'autorisé, pas à toi. Remarque que l'erreur se cache au milieu de la ligne, là où l'œil passe vite.",
      concept: "Comparer étiquette et nomenclature",
    },
  ],

  // 9
  mistakes: [
    { error: "Lire le dossier étape par étape, au fur et à mesure du travail.", why: "Tu découvres au milieu du geste qu'il faut un second opérateur, un outil absent ou une pièce déjà posée par une autre équipe. La pièce reste alors dans un état intermédiaire que personne n'a prévu.", better: "Lire tout le dossier une fois avant de réunir quoi que ce soit, avec les six questions : quoi, où, état attendu, avec quoi, comment, quelle preuve." },
    { error: "Prendre la pièce dans le bac, puis chercher dans la nomenclature une ligne qui lui ressemble.", why: "En partant de la pièce, on trouve toujours une ligne « qui correspond à peu près ». Deux références voisines, ou deux versions gauche et droite, passent sans être vues.", better: "Partir de la ligne de nomenclature, puis vérifier que la pièce y répond : référence, indice, côté, sens, interface." },
    { error: "Déballer toutes les pièces d'avance et jeter les emballages, étiquettes comprises.", why: "Une pièce nue ne peut plus être identifiée ni protégée, et son numéro de série est perdu pour la trace.", better: "Laisser chaque pièce dans son emballage, avec son étiquette, jusqu'au moment de la présenter ; relever S/N et lot avant que l'étiquette ne disparaisse." },
    { error: "Remplacer l'outil manquant ou périmé par « le même » emprunté au voisin.", why: "L'outil du voisin appartient à un autre inventaire : il manquera chez lui, et rien ne dit qu'il est du bon type ni encore valide. Et l'outil manquant, lui, est toujours quelque part.", better: "Chercher d'abord l'outil manquant, le signaler s'il reste introuvable, puis obtenir un outil vérifié par le circuit prévu." },
    { error: "Se repérer en comptant les hublots ou les cadres depuis la porte.", why: "Dans une cabine sans sièges, compter depuis le mauvais bout ou sauter un hublot masqué suffit à poser au mauvais emplacement.", better: "Utiliser les repères que donne le dossier, et recouper par l'interface : les points de fixation de l'emplacement doivent être ceux de la pièce." },
    { error: "Cocher la liste « avant » par habitude, parce que « c'était bon hier ».", why: "La validité d'un outil, l'état d'énergie de l'avion ou la présence d'une autre équipe changent d'un jour à l'autre, parfois d'une heure à l'autre.", better: "Cocher une ligne seulement après l'avoir vérifiée soi-même, aujourd'hui ; laisser vide ce qui n'est pas vérifié." },
    { error: "Remarquer une rayure ou une protection déchirée en arrivant, et ne rien dire pour ne pas perdre de temps.", why: "Après ton intervention, plus rien ne permet de dire que le défaut était là avant toi. Et le défaut, lui, reste dans l'avion.", better: "Signaler le constat avant le premier geste et le faire noter : où, quoi, à quelle heure." },
    { error: "Monter « tout ce qui pourrait servir » dans la cabine.", why: "Chaque objet apporté doit être surveillé, compté et ressorti ; dans un poste étroit, le surplus finit dans le passage ou derrière un panneau.", better: "N'apporter que ce que le dossier demande pour ce geste, et le ranger par zones." },
  ],

  // 10
  situations: [
    {
      title: "L'alvéole vide et le voisin serviable",
      context: [
        "Mercredi, 7 h 40. Tu prépares la pose d'un cache en partie basse de paroi. En ouvrant le tiroir de la servante, tu vois une alvéole vide : celle du tournevis que demande ton instruction. La servante a servi à l'équipe de nuit.",
        "Karim, qui travaille deux mètres plus loin sur le plafond, a vu ta tête. Il te tend son propre tournevis : « Prends le mien, c'est exactement le même, tu me le rends à la pause. »",
      ],
      fig: 'e1-poste-prepare',
      question: "Quelle est ta première action ?",
      options: [
        { t: "Accepter le tournevis de Karim après avoir vérifié que l'embout est le bon, et commencer.", why: "L'embout est peut-être bon, mais le vrai problème reste entier : un outil de ta servante est quelque part, peut-être dans l'avion. Et le tournevis de Karim manquera à son propre inventaire." },
        { t: "Refuser poliment et commencer par les étapes qui ne demandent pas de tournevis.", why: "Tu laisses de côté l'outil manquant et tu ouvres un geste que tu ne pourras pas finir : deux problèmes au lieu d'un." },
        { t: "Traiter l'alvéole vide comme un outil manquant : le chercher dans la zone, prévenir ton chef d'équipe s'il reste introuvable, puis obtenir un outil par le circuit prévu.", ok: true, why: "Une alvéole vide n'est pas d'abord un problème d'approvisionnement : c'est un outil dont personne ne sait où il est. Il doit être retrouvé ou déclaré avant que des panneaux se referment dans la zone." },
        { t: "Aller au magasin chercher un autre tournevis identique, sans rien dire pour ne pas accuser l'équipe de nuit.", why: "Tu règles ton besoin, pas l'anomalie. Signaler un outil manquant n'accuse personne : cela déclenche une recherche tant qu'elle est encore simple." },
      ],
      debrief: "La mousse à alvéoles est faite pour cela : rendre l'absence visible. La règle de métier est que le poste n'est pas prêt tant qu'un outil manque à l'inventaire, parce qu'un outil perdu dans une cabine est un corps étranger en puissance. L'emprunt entre servantes déplace le trou d'un inventaire à l'autre et le rend invisible. Karim voulait rendre service ; le bon service, ici, est de t'aider à chercher.",
    },
    {
      title: "Deux panneaux jumeaux, une seule étiquette",
      context: [
        "Jeudi, 9 h 15. Le bac de pièces contient deux panneaux de paroi qui se ressemblent comme deux gouttes d'eau : un pour le côté gauche, un pour le côté droit. Le premier porte son étiquette : `EX-48213-08`, RH. Le second a perdu la sienne ; il reste un morceau de colle sur l'emballage. Aucun marquage n'est lisible au dos.",
        "Ta nomenclature demande `EX-48213-07`, LH. Léa, qui t'aide ce matin, hausse les épaules : « L'autre est le droit, donc celui-ci est forcément le gauche. On le pose ? »",
      ],
      fig: 'e1-identifier-piece',
      question: "Que fais-tu du panneau sans étiquette ?",
      options: [
        { t: "Le poser : par élimination, ce ne peut être que le panneau gauche.", why: "L'élimination suppose que le bac ne contient que ces deux références et que personne ne s'est trompé avant toi. Tu n'as rien identifié : ni la référence, ni l'indice." },
        { t: "Le présenter à son emplacement : s'il rentre, c'est le bon.", why: "Une version voisine ou un autre indice peut très bien « rentrer ». L'interface recoupe une identification, elle ne la remplace pas ; et tu aurais manipulé en cabine une pièce inconnue." },
        { t: "Écrire toi-même `EX-48213-07` au marqueur sur l'emballage pour régulariser.", why: "Tu fabriquerais une identification que rien ne prouve. La personne suivante croirait un marquage qui ne vient que de ta supposition." },
        { t: "Le mettre de côté, le signaler comme pièce non identifiée, et ne rien poser tant qu'une pièce identifiée n'est pas disponible.", ok: true, why: "Sans étiquette ni marquage, la pièce n'a plus d'identité prouvable. Ce sont les personnes autorisées qui décideront comment la réidentifier ou la remplacer." },
      ],
      debrief: "Identifier, c'est comparer deux écrits : la nomenclature et un marquage. Ici il n'y a plus qu'un écrit. Le raisonnement de Léa est une observation habile, pas une identification, et il ne dit rien de l'indice ni du numéro de série qu'il faudra tracer. Le temps perdu ce matin est sans commune mesure avec celui d'une dépose, si la pièce se révélait être autre chose.",
    },
  ],

  // 11
  quiz: [
    {
      id: 'e1-q1', type: 'hotid', fig: 'e1-methode-cinq-temps',
      q: "Pour chaque élément surligné de la frise, choisis son nom dans la liste.",
      targets: [{ part: 'controle' }, { part: 'erreurs' }, { part: 'trace' }, { part: 'arret' }],
      explain: "Le contrôle compare le résultat à la demande ; les erreurs à éviter repassent les pièges connus du geste ; la trace écrit ce qui a été fait et constaté. La bande du bas n'est pas un temps : c'est l'arrêt-question, possible depuis n'importe quelle case.",
      concept: "Les cinq temps",
    },
    {
      id: 'e1-q2', type: 'mcq', fig: 'e1-checklist-avant',
      q: "Sur cette liste fictive, seule la ligne « Outils valides » n'est pas cochée : la clé dynamométrique a une date dépassée. Choisis la décision qui convient.",
      options: [
        { t: "Commencer la présentation du panneau ; la clé ne sert qu'au serrage final, elle aura le temps d'arriver.", why: "Si elle n'arrive pas, le panneau reste présenté mais non fixé : un état intermédiaire que personne n'a prévu et que la relève devra deviner." },
        { t: "Ne pas démarrer, remettre la clé au circuit prévu et obtenir un outil valide ; cocher la ligne ensuite.", ok: true, why: "Une case vide se traite avant de commencer. Le geste part quand il peut aller jusqu'au bout." },
        { t: "Utiliser la clé quand même : une semaine de dépassement ne change rien à sa précision.", why: "Peut-être, mais personne ne peut le prouver ; tout serrage fait avec elle serait à refaire." },
        { t: "Cocher la ligne : l'outil est présent et en bon état, c'est l'essentiel.", why: "La ligne dit « valides ». Présent et en état ne suffisent pas pour un outil qui serre à une valeur." },
      ],
      explain: "Les trois critères sont présent, en état, valide. Pour un outil qui mesure ou qui serre à une valeur, la validité est ce qui permet de faire confiance à son indication. Et un geste ne s'ouvre pas s'il risque de s'interrompre à mi-chemin.",
      concept: "Liste « avant »",
    },
    {
      id: 'e1-q3', type: 'match',
      q: "Associe chaque zone du poste à ce qu'elle contient quand le poste est bien préparé.",
      pairs: [
        { l: "Zone d'intervention", r: "La pièce en cours de pose et l'outil que tu tiens" },
        { l: "Zone documents", r: "Le dossier ouvert à la bonne page" },
        { l: "Servante", r: "Chaque outil dans son alvéole" },
        { l: "Zone pièces", r: "Les éléments emballés, étiquetés, séparés par repère" },
        { l: "Bac à chutes", r: "Les emballages et les protections retirées" },
        { l: "Passage", r: "Rien, à aucun moment" },
      ],
      explain: "Chaque zone est une adresse. La zone d'intervention ne contient que le geste en cours ; tout ce qui attend (outils, pièces, documents) a sa propre adresse à côté, et le passage reste vide pour circuler, acheminer et évacuer.",
      concept: "Organisation du poste",
    },
    {
      id: 'e1-q4', type: 'multi',
      q: "Tu vas chercher la clé dynamométrique demandée par ton instruction. Coche toutes les vérifications qui relèvent du temps « avant ».",
      options: [
        { t: "C'est le type de clé et la plage que demande l'instruction.", ok: true, why: "Critère « présent » : le bon instrument, pas un instrument qui ressemble." },
        { t: "Son étiquette de validité est lisible et sa date n'est pas dépassée.", ok: true, why: "Critère « valide » : c'est ce qui rend son indication digne de confiance." },
        { t: "Elle est propre et ne porte pas de trace de chute.", ok: true, why: "Critère « en état » : un choc peut fausser l'outil sans que cela se voie à l'usage." },
        { t: "Un collègue s'en est servi hier sans problème.", why: "C'est une observation rapportée. Elle ne dit rien de sa validité aujourd'hui." },
        { t: "La valeur de serrage de ma vis est gravée sur le manche.", why: "Ce qui est gravé sur un outil décrit l'outil. La valeur à appliquer est une prescription : elle se lit dans l'instruction." },
      ],
      explain: "Présent, en état, valide : trois vérifications que tu fais toi-même, sur l'outil, avant de partir. Le témoignage d'un collègue et les inscriptions de l'outil ne remplacent ni l'étiquette de validité ni l'instruction.",
      concept: "Présent, en état, valide",
    },
    {
      id: 'e1-q5', type: 'hottap', fig: 'e1-identifier-piece',
      q: "Touche sur la figure l'élément qui répond à chaque question.",
      targets: [
        { prompt: "Ce que tu lis en premier, avant même de regarder la pièce", part: 'nomenclature' },
        { prompt: "Le marquage qui t'empêche de monter ce panneau du mauvais côté de l'avion", part: 'cote' },
        { prompt: "Ce qui t'indique quel bord du panneau regarde l'avant de l'avion", part: 'sens' },
        { prompt: "Le numéro qui distingue cet exemplaire de tous les autres panneaux de même référence", part: 'sn' },
      ],
      explain: "On part de la nomenclature, puis on confronte la pièce. Le marquage LH/RH donne le côté, la flèche FWD donne le sens. Le S/N ne sert pas à choisir la pièce : il sert à retrouver cet exemplaire précis, c'est pourquoi on le recopie dans la trace.",
      concept: "Identifier une pièce",
    },
    {
      id: 'e1-q6', type: 'mcq',
      q: "En faisant ta photo d'avant, tu remarques une rayure fine sur le panneau voisin de ta zone. Tu n'as encore rien touché. Choisis la bonne conduite.",
      options: [
        { t: "La signaler et la faire noter avant de commencer.", ok: true, why: "Notée avant ton premier geste, elle est un constat daté. C'est aussi le seul moment où tu peux prouver qu'elle n'est pas de ton fait." },
        { t: "Commencer, puis la mentionner dans la trace à la fin du travail.", why: "À la fin, rien ne distingue une rayure ancienne d'une rayure faite pendant ton intervention." },
        { t: "La faire disparaître avec un chiffon et un peu de produit.", why: "Tu interviens sur une surface sans prescription, au risque d'aggraver. Dire si la rayure est acceptable ou réparable n'est pas ton rôle ici." },
        { t: "Ne rien faire : ce panneau ne fait pas partie de ta tâche.", why: "L'état initial couvre ce qui entoure ta zone. Le panneau voisin est celui que tes outils et ta pièce vont frôler." },
      ],
      explain: "Un défaut trouvé avant est un constat ; le même défaut trouvé après est une question sans réponse. Tu décris (où, quoi), tu signales, tu fais noter. Juger si le défaut est acceptable relève d'un document et d'une personne autorisée.",
      concept: "État initial",
    },
    {
      id: 'e1-q7', type: 'order',
      q: "Remets dans l'ordre les vérifications qui identifient une pièce, de la première à la dernière.",
      items: [
        "Lire la ligne de nomenclature",
        "Comparer la référence de l'étiquette, caractère par caractère",
        "Vérifier l'indice",
        "Vérifier le côté et le sens",
        "Contrôler l'état de la pièce",
        "Recopier S/N et lot dans la trace",
      ],
      explain: "On part de la demande, puis on va du plus discriminant au plus fin : la référence élimine les mauvaises pièces, l'indice les mauvaises versions, le côté et le sens les mauvaises orientations. L'état se regarde sur une pièce dont on sait déjà que c'est la bonne. On ne recopie le S/N que d'une pièce acceptée.",
      concept: "Ordre d'identification",
    },
    {
      id: 'e1-q8', type: 'mcq',
      q: "Un collègue expérimenté te dit : « Pour ces vis-là, serre comme les autres de la rangée, elles sont toutes pareilles. » Choisis ce que vaut cette information.",
      options: [
        { t: "C'est une prescription : elle vient de quelqu'un qui connaît le métier.", why: "L'expérience d'un collègue est précieuse pour le geste, mais une valeur de serrage n'existe que dans le document applicable." },
        { t: "C'est une identification : il a reconnu les vis.", why: "Identifier, c'est comparer un marquage au dossier. Ici, personne n'a rien comparé." },
        { t: "C'est une observation rapportée ; la valeur reste à lire dans l'instruction.", ok: true, why: "Il a observé une ressemblance. La ressemblance entre deux vis ne dit ni leur référence ni la valeur demandée à cet emplacement." },
        { t: "C'est suffisant si je vérifie à la main que les autres vis sont bien serrées.", why: "Ta main n'est pas un instrument de mesure, et les autres vis ne sont pas forcément soumises à la même prescription." },
      ],
      explain: "Une valeur, une limite, une méthode : c'est du prescrit. La question à se poser est toujours la même : qui me le dit, mes yeux, un marquage ou un document ? Ici, ce sont les yeux d'un autre.",
      concept: "Observé, identifié, prescrit",
    },
    {
      id: 'e1-q9', type: 'mcq',
      q: "Hier soir, un collègue t'a dit que l'avion était hors tension. Ce matin, ton geste demande d'écarter un faisceau derrière un panneau. Choisis ce que tu fais de cette information.",
      options: [
        { t: "Elle date d'hier : je fais confirmer l'état d'énergie au briefing ou à l'affichage du jour avant de toucher au faisceau.", ok: true, why: "Une condition d'accès se connaît au moment où l'on entre dans la zone. D'autres équipes ont travaillé entre-temps." },
        { t: "Elle suffit : personne ne remet un avion sous tension pendant la nuit.", why: "D'autres équipes travaillent à d'autres horaires, et des essais peuvent demander de l'alimenter." },
        { t: "Je regarde si les lumières de la cabine sont allumées : éteintes, tout est hors tension.", why: "L'éclairage éteint ne prouve rien pour les autres circuits. C'est une observation qui ne répond pas à la question posée." },
        { t: "Peu importe : un panneau n'est pas un équipement électrique.", why: "Le panneau, non ; ce qui passe derrière, oui. C'est justement le faisceau que tu vas déplacer." },
      ],
      explain: "L'état d'énergie est une condition d'accès donnée, jamais supposée ni déduite d'un indice. Comme la validité d'un outil, elle a une date : celle du moment où quelqu'un d'autorisé te l'a confirmée.",
      concept: "Conditions d'accès",
    },
  ],

  // 12
  retain: [
    "Tout geste d'intégration se déroule en cinq temps : avant, action, contrôle, erreurs à éviter, trace. L'arrêt-question est possible à chacun d'eux.",
    "Une information vient de tes sens (observée), d'un marquage comparé au dossier (identifiée) ou d'un document (prescrite). Une valeur ne se déduit jamais d'une observation.",
    "Le dossier se lit en entier avant d'agir, avec six questions : quoi, où, dans quel état, avec quoi, comment, quelle preuve.",
    "Un poste préparé donne une adresse à chaque objet ; une alvéole vide ou un objet hors de sa zone doit t'arrêter.",
    "Chaque moyen se vérifie trois fois : présent, en état, valide. Un outil périmé ou manquant passe par le circuit prévu, pas par le voisin.",
    "Identifier une pièce, c'est partir de la nomenclature et comparer : référence, indice, côté, sens, interface, état, quantité. Sans étiquette, pas d'identité.",
    "Les conditions d'accès (affectation, accès sûr, état d'énergie, coactivité, étapes précédentes) se vérifient le jour même, pas de mémoire.",
    "L'état initial se relève et se signale avant le premier geste : après, plus rien ne prouve ce qui était déjà là.",
  ],

  // 13
  next: { id: 'e2', teaser: "Ton dossier est lu, ton poste est prêt, ta pièce est identifiée. Reste à l'amener jusqu'à sa zone sans rien abîmer en route : ni elle, ni la cabine qu'elle traverse. C'est le chapitre suivant : protéger, puis acheminer." },

  // Oral
  oral: [
    {
      q: "Explique à un nouveau collègue la méthode en cinq temps, et dis-lui pourquoi il y a un temps « erreurs à éviter » après le contrôle.",
      expected: [
        "Les cinq temps dans l'ordre : avant, action, contrôle, erreurs à éviter, trace",
        "Ce que produit chaque temps (poste prêt, geste, comparaison, second passage, écrit)",
        "Le contrôle vérifie ce à quoi on a pensé, le 4e temps traque les pièges connus",
        "L'arrêt-question est possible à tout moment, en laissant la pièce dans un état stable",
      ],
      model: "Chaque geste se découpe en cinq temps. Avant : je lis le dossier, je prépare mon poste, j'identifie la pièce et la zone. Action : je fais le geste dans l'ordre écrit. Contrôle : je compare ce que j'ai fait à ce qui était demandé. Erreurs à éviter : je repasse les pièges connus de ce geste, par exemple une inversion gauche-droite ou un outil resté dans la zone, parce que le contrôle ne vérifie que ce à quoi j'ai pensé. Trace : j'écris ce qui a été fait, avec quoi, et ce que j'ai constaté. À n'importe quel temps, si une condition manque ou si ce que je vois ne correspond pas au dossier, je mets la pièce en sécurité et je pose la question à une personne autorisée.",
    },
    {
      q: "On te confie la pose d'un élément en cabine. Décris ta préparation jusqu'au moment où tu peux commencer.",
      expected: [
        "Lecture complète du dossier et vérification qu'il s'applique à cet avion",
        "Moyens réunis et vérifiés : présents, en état, valides",
        "Pièce identifiée en partant de la nomenclature (référence, indice, côté, sens, état)",
        "Zone identifiée, conditions d'accès vérifiées, état initial relevé et signalé",
        "Liste « avant » passée : aucune case vide",
      ],
      model: "Je commence par lire le dossier en entier et je vérifie qu'il concerne bien mon avion et sa configuration. J'en tire la liste de ce qu'il me faut : pièces, outils, protections, consommables, nombre de personnes. Je réunis les moyens et je vérifie pour chacun qu'il est présent, en état et valide, par exemple la date de l'étiquette d'une clé dynamométrique. J'identifie la pièce en partant de la nomenclature : référence, indice, côté, sens, état, et je relève son numéro de série. Dans l'avion, je retrouve la zone avec les repères du dossier, je vérifie mes conditions d'accès, dont l'état d'énergie et les autres équipes, et je relève l'état initial en signalant tout défaut déjà présent. Si aucune ligne de ma liste n'est vide, je peux commencer.",
    },
    {
      q: "Quelle différence fais-tu entre ce que tu observes, ce que tu identifies et ce qui est prescrit ? Donne un exemple de chaque et dis ce que tu fais d'un écart.",
      expected: [
        "Observé : constaté par les sens, se décrit sans se juger",
        "Identifié : marquage comparé au dossier",
        "Prescrit : valeur ou méthode fixée par un document, jamais devinée",
        "Un exemple pour chaque source",
        "Un écart suspend le geste et se signale à une personne autorisée",
      ],
      model: "Ce que j'observe, ce sont mes sens qui me le disent : par exemple, une rayure sur le panneau voisin. Je la décris, je ne décide pas si elle est grave. Ce que j'identifie, c'est un marquage que j'ai comparé au dossier : la référence et l'indice de l'étiquette sont ceux de la nomenclature. Ce qui est prescrit n'existe que dans un document : la valeur de serrage ou le jeu à respecter. Je ne la déduis ni de la pièce d'à côté ni de ce que me dit un collègue. Si je trouve un écart entre ce que je vois et ce que demande le dossier, je suspends le geste, je laisse la pièce dans un état stable et je le signale à mon chef d'équipe ou à la qualité, qui décident.",
    },
  ],

  // Matrice
  matrix: [
    { savoir: "Connaît les cinq temps d'un geste d'intégration et l'ordre d'une préparation.", savoirFaire: "Ordonne les étapes de sa préparation et situe l'arrêt-question dans la méthode.", comp: 'C1', ex: ['e1-q1', 'e1-a3', 'e1-q2'], proof: "Frise de la méthode identifiée sans erreur et ordre de préparation reconstitué dans l'application." },
    { savoir: "Connaît les zones d'un poste de travail et les trois critères de vérification des moyens (présent, en état, valide).", savoirFaire: "Repère sur un schéma de poste les objets manquants ou hors de leur place ; trie les vérifications pertinentes pour un outil.", comp: 'C1', ex: ['e1-a1', 'e1-q3', 'e1-q4'], proof: "Quatre anomalies du poste trouvées ; association zones-contenus réussie." },
    { savoir: "Sait ce qu'apportent la référence, l'indice, le marquage de côté, la flèche de sens, le S/N et le lot.", savoirFaire: "Compare une étiquette à une nomenclature fictive et repère l'écart ; retrouve sur une pièce les marquages utiles.", comp: 'C1', ex: ['e1-a4', 'e1-q5', 'e1-q7'], proof: "Écart d'indice détecté dans le document fictif ; marquages désignés sur la figure." },
    { savoir: "Distingue une information observée, identifiée ou prescrite ; connaît les conditions d'accès et le rôle de l'état initial.", savoirFaire: "Classe des informations selon leur source et choisit la conduite adaptée face à un constat ou à une condition non confirmée.", comp: 'C1', ex: ['e1-a2', 'e1-q6', 'e1-q8', 'e1-q9'], proof: "Tri des sept informations et décisions argumentées dans les questions de mise en situation." },
  ],
});
