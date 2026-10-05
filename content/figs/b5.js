// Figures du chapitre b5 — Galleys et toilettes : les monuments
CA.addFigures([
  {
    id: 'b5-galley-vue', file: 'b5-galley-vue.svg',
    title: "Un galley vu de face",
    caption: "Schéma de principe, générique : le nombre de chariots, de fours et de conteneurs change d'un galley à l'autre. Tout ce qui est mobile (chariots, conteneurs) est retenu par un verrou.",
    alt: "Galley vu de face. En haut : quatre conteneurs standard et un tableau électrique. Au milieu : deux fours, une machine à boissons chaudes, un évier avec robinet. Un plan de travail horizontal. En bas : cinq chariots de service côte à côte, chacun retenu par un verrou rabattu devant lui, et un compartiment poubelle à volet.",
    purpose: "Reconnaître et nommer les éléments de la face avant d'un galley, et distinguer ce qui est fixe de ce qui est amovible.",
    chapters: ['b5'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'conteneurs', n: 1, fr: 'Conteneurs standard', en: 'Standard units (containers)', fn: "Boîtes amovibles qui contiennent le matériel de service ; elles glissent dans leur logement et sont verrouillées." },
      { id: 'tableau', n: 2, fr: 'Tableau électrique du galley', en: 'Galley control panel', fn: "Regroupe les commandes et les protections électriques des appareils du galley." },
      { id: 'four', n: 3, fr: 'Four', en: 'Oven', fn: "Appareil électrique amovible (un « insert ») qui réchauffe les repas." },
      { id: 'boissons', n: 4, fr: 'Machine à boissons chaudes', en: 'Beverage maker', fn: "Cafetière ou bouilloire : un insert raccordé à l'électricité et à l'eau." },
      { id: 'evier', n: 5, fr: 'Évier et robinet', en: 'Sink and faucet', fn: "Point d'eau du galley : arrivée d'eau potable au robinet, départ de l'eau usée par la bonde." },
      { id: 'plan-travail', n: 6, fr: 'Plan de travail', en: 'Work deck', fn: "Surface horizontale où l'équipage prépare le service ; elle sépare les chariots (en bas) des appareils (en haut)." },
      { id: 'verrous', n: 7, fr: 'Verrous de retenue', en: 'Retainers (latches)', fn: "Petits loquets pivotants qui se rabattent devant chaque chariot pour l'empêcher de sortir de son logement." },
      { id: 'chariots', n: 8, fr: 'Chariots de service', en: 'Trolleys (carts)', fn: "Meubles roulants amovibles, aux dimensions standardisées, qui portent repas et boissons jusqu'aux passagers." },
      { id: 'poubelle', n: 9, fr: 'Compartiment poubelle', en: 'Waste compartment', fn: "Reçoit les déchets par un volet ; le bac se retire par la porte du bas." }
    ]
  },
  {
    id: 'b5-galley-interfaces', file: 'b5-galley-interfaces.svg',
    title: "Les interfaces d'un galley (vue en coupe)",
    caption: "Schéma de principe, vu de côté : les proportions et le trajet des réseaux sont simplifiés. Le nombre et la forme des fixations, comme le parcours réel des tuyaux, dépendent de l'avion et du monument.",
    alt: "Coupe d'un galley installé, vu de côté. Deux ferrures le retiennent au plancher ; deux bielles inclinées le relient à la structure au-dessus du plafond. Un faisceau électrique arrive par le haut sur un connecteur ; un conduit souple relie le dessus du meuble à la ventilation. Un tuyau d'eau potable monte de sous le plancher jusqu'au robinet ; un tuyau de vidange descend de l'évier, traverse le plancher et rejoint le mât de drainage sous le fuselage.",
    purpose: "Situer les cinq interfaces d'un monument — fixation basse, fixation haute, eau, électricité, ventilation — et comprendre ce que chacune relie.",
    chapters: ['b5'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'monument', n: 1, fr: 'Monument (ici un galley)', en: 'Monument (galley)', fn: "Le meuble complet, livré équipé, qui se pose en cabine en une seule pièce." },
      { id: 'fixation-basse', n: 2, fr: 'Fixations basses', en: 'Floor fittings', fn: "Ferrures qui retiennent le pied du monument sur le plancher (rails ou points de fixation prévus)." },
      { id: 'fixation-haute', n: 3, fr: 'Fixations hautes (bielles)', en: 'Tie rods', fn: "Barres articulées qui relient le haut du monument à la structure et l'empêchent de basculer." },
      { id: 'structure', n: 4, fr: "Structure de l'avion", en: 'Aircraft structure', fn: "Partie résistante du fuselage sur laquelle s'accrochent les bielles, au-dessus du plafond." },
      { id: 'plancher', n: 5, fr: 'Plancher cabine', en: 'Cabin floor', fn: "Porte le monument et reçoit ses fixations basses ; les réseaux passent en dessous." },
      { id: 'eau-alim', n: 6, fr: "Alimentation en eau potable", en: 'Potable water supply', fn: "Tuyau sous pression qui amène l'eau du réservoir de l'avion jusqu'au robinet et aux machines." },
      { id: 'vidange', n: 7, fr: "Vidange (eau usée)", en: 'Drain line', fn: "Tuyau qui emporte l'eau de l'évier, par simple écoulement, hors du galley." },
      { id: 'mat-drainage', n: 8, fr: 'Mât de drainage', en: 'Drain mast', fn: "Petit profilé réchauffé sous le fuselage par lequel l'eau usée est rejetée à l'extérieur." },
      { id: 'elec', n: 9, fr: 'Raccordement électrique', en: 'Electrical connection', fn: "Faisceau et connecteur qui apportent le courant aux appareils du galley." },
      { id: 'ventilation', n: 10, fr: 'Ventilation', en: 'Ventilation duct', fn: "Conduit souple qui relie le monument au réseau d'air pour évacuer chaleur et odeurs." }
    ]
  },
  {
    id: 'b5-toilettes-plan', file: 'b5-toilettes-plan.svg',
    title: "Une cellule de toilettes vue de dessus",
    caption: "Schéma de principe : la disposition intérieure (côté de la cuvette, sens de la porte, place du lavabo) varie selon le modèle de toilettes et sa position dans la cabine. Le détecteur de fumée, dessiné en pointillé, est au plafond.",
    alt: "Cellule de toilettes vue de dessus : une petite pièce fermée dont un côté arrondi longe la paroi de l'avion. Porte pliante et verrou côté couloir. À l'intérieur : cuvette, meuble lavabo avec vasque, miroir le long de la cloison, poubelle à volet intégrée au meuble, détecteur de fumée au plafond. Une arrivée d'eau entre dans la cellule, un tuyau d'évacuation en sort.",
    purpose: "Nommer les éléments d'une cellule de toilettes et repérer ses raccordements.",
    chapters: ['b5'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'cellule', n: 1, fr: 'Cellule (coque)', en: 'Lavatory module (shell)', fn: "Enveloppe fermée, livrée tout équipée, qui forme la pièce." },
      { id: 'porte', n: 2, fr: 'Porte', en: 'Lavatory door', fn: "Ferme la cellule côté couloir ; souvent pliante pour prendre moins de place en s'ouvrant." },
      { id: 'verrou', n: 3, fr: 'Verrou de porte', en: 'Door lock', fn: "Se ferme de l'intérieur, affiche « occupé », et peut être ouvert de l'extérieur par l'équipage en cas d'urgence." },
      { id: 'cuvette', n: 4, fr: 'Cuvette', en: 'Toilet bowl', fn: "Reçoit les déchets, emportés vers un réservoir d'eaux usées." },
      { id: 'lavabo', n: 5, fr: 'Lavabo', en: 'Washbasin', fn: "Vasque et robinet pour se laver les mains ; alimenté en eau potable." },
      { id: 'miroir', n: 6, fr: 'Miroir', en: 'Mirror', fn: "Fixé sur la cloison au-dessus du lavabo ; surface fragile et très visible." },
      { id: 'poubelle', n: 7, fr: 'Poubelle à volet', en: 'Waste bin (with flap)', fn: "Reçoit les papiers ; son volet se referme seul pour qu'un début de feu manque d'air." },
      { id: 'detecteur', n: 8, fr: 'Détecteur de fumée', en: 'Smoke detector', fn: "Au plafond : il alerte l'équipage si de la fumée apparaît dans la cellule." },
      { id: 'eau', n: 9, fr: "Arrivée d'eau", en: 'Water supply', fn: "Raccordement de la cellule au réseau d'eau potable de l'avion." },
      { id: 'evacuation', n: 10, fr: 'Évacuation', en: 'Waste line', fn: "Tuyau qui conduit le contenu de la cuvette vers le réservoir d'eaux usées." }
    ]
  },
  {
    id: 'b5-monument-acheminement', file: 'b5-monument-acheminement.svg',
    title: "Acheminer un monument : où poser les mains ?",
    caption: "Schéma de principe. Les mains montrent quatre prises possibles : deux sont prévues pour l'effort, deux abîment le monument. Un objet est resté dans un compartiment.",
    alt: "Monument sanglé sur un chariot de manutention, vu de côté, sur un plancher protégé ; protections sur les angles. Quatre mains : sur la poignée de manutention basse, sur la barre de poussée du chariot, sur une poignée de porte du meuble, sur un raccord qui dépasse du dessus. Une clé plate est restée au fond d'un compartiment vide.",
    purpose: "Distinguer les prises prévues pour la manutention de celles qui endommagent le monument, et repérer un objet oublié dans une cavité.",
    chapters: ['b5'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'chariot', n: 1, fr: 'Chariot de manutention', en: 'Handling dolly', fn: "Porte le monument à la place des bras ; sa barre de poussée sert à le guider." },
      { id: 'sangle', n: 2, fr: "Sangle d'arrimage", en: 'Tie-down strap', fn: "Maintient le monument contre le chariot pour qu'il ne bascule pas pendant le trajet." },
      { id: 'protection-sol', n: 3, fr: 'Protection de plancher', en: 'Floor protection', fn: "Recouvre le plancher sur le trajet pour encaisser le roulage et les chocs." },
      { id: 'protection-angles', n: 4, fr: "Protections d'angles", en: 'Corner protectors', fn: "Habillent les arêtes du monument : elles protègent à la fois le meuble et ce qu'il pourrait heurter." },
      { id: 'prise-point', n: 5, fr: 'Main sur la poignée de manutention', en: 'Hand on handling point', fn: "Bonne prise : un point prévu pour reprendre l'effort, en partie basse." },
      { id: 'prise-timon', n: 6, fr: 'Main sur la barre de poussée', en: 'Hand on push bar', fn: "Bonne prise : on pousse le chariot, pas le monument." },
      { id: 'prise-poignee-porte', n: 7, fr: 'Main sur une poignée de porte', en: 'Hand on door handle', fn: "Mauvaise prise : une poignée de porte est faite pour ouvrir une porte, pas pour tirer le meuble entier." },
      { id: 'prise-raccord', n: 8, fr: 'Main sur un raccord', en: 'Hand on a fitting', fn: "Mauvaise prise : un raccord tordu ou fêlé, c'est une fuite ou un branchement impossible." },
      { id: 'outil-oublie', n: 9, fr: 'Outil oublié dans une cavité', en: 'Tool left in a cavity (FOD)', fn: "Objet étranger : une fois le monument en place, plus personne ne le verra." }
    ]
  }
]);
