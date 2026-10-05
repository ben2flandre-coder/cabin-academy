// Figures du chapitre b6 — Équipements passagers, secours et interfaces
CA.addFigures([
  {
    id: 'b6-equipements-secours', file: 'b6-equipements-secours.svg',
    title: "Équipements de secours : formes et emplacements-types",
    caption: "Schéma de principe, avant de l'avion à gauche. Les emplacements montrés sont des exemples : le nombre et la place exacte de chaque équipement dépendent de la configuration de la cabine et de la réglementation.",
    alt: "Cabine vue de dessus, avant à gauche, avec ses issues, le balisage lumineux le long du couloir et les sièges d'équipage près des portes. Six équipements portatifs sont dessinés en grand et reliés à un emplacement possible : extincteur, bouteille d'oxygène avec masque, trousse de premiers secours, mégaphone, gilet de sauvetage sous un siège passager, torche au siège d'équipage.",
    purpose: "Reconnaître la silhouette des équipements de secours portatifs et comprendre qu'ils sont répartis près des issues et des postes d'équipage.",
    chapters: ['b6'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'issue', n: 1, fr: 'Issues de secours', en: 'Emergency exits', fn: "Portes et issues par lesquelles la cabine s'évacue ; tout le balisage y conduit." },
      { id: 'balisage', n: 2, fr: 'Balisage lumineux au sol', en: 'Floor proximity escape path marking', fn: "Suite de repères lumineux près du plancher qui guide vers les issues quand la fumée cache le haut de la cabine." },
      { id: 'siege-equipage', n: 3, fr: "Sièges d'équipage", en: 'Attendant seats', fn: "Sièges repliables du personnel de cabine, placés près des issues." },
      { id: 'extincteur', n: 4, fr: 'Extincteur portatif', en: 'Portable fire extinguisher', fn: "Permet à l'équipage d'attaquer un début de feu en cabine." },
      { id: 'oxygene', n: 5, fr: "Bouteille d'oxygène portative", en: 'Portable oxygen bottle', fn: "Réserve d'oxygène avec masque, que l'on peut emporter auprès d'une personne." },
      { id: 'trousse', n: 6, fr: 'Trousse de premiers secours', en: 'First aid kit', fn: "Matériel de soins de première urgence." },
      { id: 'megaphone', n: 7, fr: 'Mégaphone', en: 'Megaphone', fn: "Porte-voix autonome pour diriger une évacuation si la sonorisation ne fonctionne plus." },
      { id: 'gilet', n: 8, fr: 'Gilet de sauvetage', en: 'Life vest', fn: "Gilet gonflable individuel, rangé à portée de main de chaque occupant." },
      { id: 'torche', n: 9, fr: 'Torche', en: 'Flashlight (torch)', fn: "Lampe portative rangée au poste d'équipage, pour une cabine sans lumière." }
    ]
  },
  {
    id: 'b6-balisage-issue', file: 'b6-balisage-issue.svg',
    title: "Une issue de secours et son balisage",
    caption: "Schéma de principe d'une porte vue de l'intérieur de la cabine. La forme de la porte, la place de la poignée et celle du toboggan varient selon l'avion et le type d'issue.",
    alt: "Porte de cabine vue de l'intérieur. Au-dessus, un panneau lumineux marqué EXIT ; au plafond, un éclairage de secours. Sur la porte : un hublot, la poignée de commande, une étiquette d'utilisation avec une flèche et, en bas, le carter du toboggan. Au sol, le balisage lumineux longe le couloir, un repère bas signale l'issue, et une zone en pointillé devant la porte doit rester dégagée.",
    purpose: "Identifier les éléments qui signalent une issue et comprendre pourquoi chacun doit rester visible, lisible et dégagé.",
    chapters: ['b6'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'panneau-issue', n: 1, fr: "Panneau d'issue", en: 'Exit sign', fn: "Signal lumineux qui indique l'issue de loin, au-dessus des têtes." },
      { id: 'eclairage-secours', n: 2, fr: 'Éclairage de secours', en: 'Emergency light', fn: "Éclairage alimenté par sa propre réserve d'énergie : il fonctionne même si l'avion n'a plus de courant." },
      { id: 'porte', n: 3, fr: 'Porte (issue)', en: 'Door (exit)', fn: "L'ouverture elle-même ; elle sert à l'embarquement et à l'évacuation." },
      { id: 'poignee', n: 4, fr: 'Poignée de commande', en: 'Door operating handle', fn: "Commande l'ouverture de la porte ; on n'y touche pas sans y être autorisé." },
      { id: 'placard', n: 5, fr: "Étiquette d'utilisation", en: 'Placard', fn: "Indique le geste à faire et son sens ; elle doit être au bon endroit et dans le bon sens." },
      { id: 'toboggan', n: 6, fr: 'Carter du toboggan', en: 'Escape slide housing', fn: "Renferme le toboggan gonflable plié, prêt à se déployer quand la porte est armée." },
      { id: 'balisage-sol', n: 7, fr: 'Balisage au sol et repère bas', en: 'Floor path marking and low exit marker', fn: "Guide vers l'issue au ras du plancher, là où l'air reste le plus clair en cas de fumée." },
      { id: 'zone-acces', n: 8, fr: "Zone d'accès à l'issue", en: 'Exit access area', fn: "Espace devant la porte qui doit rester libre de tout objet." }
    ]
  },
  {
    id: 'b6-siege-equipage', file: 'b6-siege-equipage.svg',
    title: "Le siège d'équipage (strapontin)",
    caption: "Schéma de principe, de face et de côté. De côté, l'assise est dessinée relevée ; le pointillé montre sa position abaissée. Le rangement, l'interphone et le nombre de fixations varient selon le modèle.",
    alt: "Siège d'équipage fixé contre une cloison. De face : appui-tête, dossier, assise abaissée, harnais à quatre sangles réunies dans une boucle centrale, combiné d'interphone sur la cloison, rangement sous l'assise. De côté : les fixations du siège sur la cloison, l'assise relevée contre le dossier et, en pointillé, sa position abaissée ; une flèche montre qu'elle remonte seule.",
    purpose: "Nommer les parties d'un siège d'équipage et comprendre pourquoi il se replie et pourquoi il porte un harnais.",
    chapters: ['b6'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'appui-tete', n: 1, fr: 'Appui-tête', en: 'Headrest', fn: "Soutient la tête de l'occupant." },
      { id: 'dossier', n: 2, fr: 'Dossier', en: 'Backrest', fn: "Partie verticale du siège, plaquée contre la cloison ou le monument." },
      { id: 'assise', n: 3, fr: 'Assise rabattable', en: 'Folding seat pan', fn: "Se relève seule quand personne n'est assis, pour libérer le passage vers l'issue." },
      { id: 'harnais', n: 4, fr: 'Harnais', en: 'Harness', fn: "Sangles d'épaules et de ceinture qui retiennent l'occupant." },
      { id: 'boucle', n: 5, fr: 'Boucle centrale', en: 'Buckle', fn: "Réunit toutes les sangles et les libère d'un seul geste." },
      { id: 'interphone', n: 6, fr: "Combiné d'interphone", en: 'Interphone handset', fn: "Permet à l'équipage de se parler d'un poste à l'autre et de faire des annonces." },
      { id: 'rangement', n: 7, fr: 'Rangement du poste', en: 'Stowage compartment', fn: "Logement proche du siège où peuvent se trouver torche, gilet ou autres équipements du poste." },
      { id: 'fixations', n: 8, fr: 'Fixations du siège', en: 'Seat attachments', fn: "Relient le siège à la cloison ou au monument qui le porte." }
    ]
  },
  {
    id: 'b6-interfaces-equipement', file: 'b6-interfaces-equipement.svg',
    title: "Un équipement et ses interfaces",
    caption: "Schéma de principe d'un équipement quelconque. Tous les équipements n'ont pas toutes les interfaces : un extincteur portatif n'a qu'un support et une étiquette ; un panneau d'issue a un support, un connecteur et une étiquette.",
    alt: "Équipement monté sur un support fixé à la structure. Interface mécanique : le support et quatre fixations. Interface électrique : un connecteur et son faisceau, complétés par une tresse de métallisation entre le support et la structure. Interface fluide : un tuyau et son raccord. Interface d'usage : l'étiquette avec sa flèche et une zone d'accès en pointillé autour de l'équipement.",
    purpose: "Classer les liaisons d'un équipement en quatre familles : mécanique, électrique, fluide, usage.",
    chapters: ['b6'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'equipement', n: 1, fr: 'Équipement', en: 'Equipment (unit)', fn: "L'appareil lui-même, avec sa référence propre." },
      { id: 'mecanique', n: 2, fr: 'Interface mécanique', en: 'Mechanical interface', fn: "Support et fixations : ce qui tient l'équipement en place." },
      { id: 'electrique', n: 3, fr: 'Interface électrique', en: 'Electrical interface', fn: "Connecteur et faisceau : l'alimentation et les signaux." },
      { id: 'metallisation', n: 4, fr: 'Tresse de métallisation', en: 'Bonding strap', fn: "Liaison conductrice entre l'équipement (ou son support) et la structure." },
      { id: 'fluide', n: 5, fr: 'Interface fluide', en: 'Fluid interface (air, oxygen)', fn: "Tuyau et raccord : l'air ou l'oxygène qui arrive à l'équipement." },
      { id: 'usage', n: 6, fr: "Interface d'usage", en: 'Access and marking', fn: "Étiquette lisible et zone d'accès libre : ce qui permet de trouver l'équipement et de s'en servir." }
    ]
  }
]);
