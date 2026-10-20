// Chapitre a4 — Cabine, cockpit, soutes, portes et issues
CA.addChapter({
  id: 'a4',
  domain: 'A',
  order: 50,
  title: "Cabine, cockpit, soutes, portes et issues",
  short: "Les volumes de l'avion, ce qui est pressurisé, les portes, les issues de secours et la zone des portes en chantier",
  minutes: 45,
  comps: ['C1'],
  prereq: ['a3'],
  sources: ['rncp40664', 'easa-cs-25', 'airbus-a320-airspace-cabin', 'faa-amt-airframe', 'skybrary-fod', 'inrs-coactivite', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Découper l'avion en volumes (poste de pilotage, cabine, soutes, baie avionique, logements de train, cône arrière) et dire lesquels sont pressurisés.",
    "Distinguer porte passagers, porte de service, porte de soute, porte du poste de pilotage et issue sur l'aile, et dire à quoi sert chacune.",
    "Nommer les éléments d'une zone de porte (vantail, poignée, levier d'armement, bloc toboggan, seuil, signe d'issue, siège équipage) et expliquer pourquoi on n'y touche pas sans autorisation.",
    "Expliquer pourquoi une issue ne doit jamais être bloquée, même avion à l'arrêt et cabine vide, et repérer sur un schéma ce qui la gêne.",
    "Reconnaître dans la zone des portes les risques propres au chantier : chute, coactivité, pièces posées au mauvais endroit, objets étrangers.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Une cabine n'est pas une boîte posée n'importe où : c'est la partie d'un grand volume fermé, entouré d'autres volumes qui ont chacun leurs règles. Au-dessus du plancher, les passagers ; en dessous, les bagages et le fret ; à l'avant, un local où l'équipage conduit l'avion ; à l'arrière, une cloison bombée qui retient l'air sous pression. Savoir dans quel volume tu es, et ce qui se trouve de l'autre côté de la paroi, te permet de comprendre pourquoi certaines zones sont réservées à d'autres équipes et pourquoi un trou percé n'importe où n'est jamais anodin.",
    "Les portes concentrent trois enjeux à la fois. Ce sont les entrées de tout ce que tu poses (panneaux, sièges, galleys arrivent par elles), les sorties de ceux qui sont dans l'avion, et, en cas d'accident, les issues de secours. Une zone de porte encombrée par un chantier ralentit tout le monde le matin ; la même zone encombrée au mauvais moment peut retarder une évacuation. D'où une règle qui ne souffre pas d'exception : on ne bloque pas une issue, même quand l'avion est vide, même « juste cinq minutes ».",
    "Enfin, la zone des portes est un endroit où tu vas passer beaucoup de temps sans y travailler vraiment : c'est là que tu entres avec tes outils, que tu poses un chariot, que tu croises les autres équipes. Les petits objets qui y tombent — une vis, un morceau de ruban — se glissent dans le seuil ou sous le plancher. Ce chapitre te donne le plan des lieux, le vocabulaire en français et en anglais, et les premiers réflexes de prudence autour des portes.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'a4-volumes',
    intro: "Voici un avion de ligne dessiné de profil, comme si on avait ouvert son fuselage. Regarde d'abord où se trouve chaque zone, puis la ligne rouge verticale à chaque bout : elle marque une limite très importante.",
    look: [
      "Où se trouve le poste de pilotage par rapport à la cabine ? Qu'est-ce qui les sépare ?",
      "Qu'y a-t-il juste au-dessous du plancher de la cabine ? Combien de volumes différents vois-tu sous les pieds des passagers ?",
      "Les deux traits rouges marquent les limites d'une zone. À ton avis, qu'est-ce qui diffère entre l'intérieur et l'extérieur de ces traits ?",
      "Repère le radôme et le cône arrière : sont-ils entre les traits rouges ou en dehors ? Qu'est-ce que cela t'apprend sur la façon dont l'avion est découpé ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Les volumes de l'avion, de l'avant vers l'arrière",
      fig: 'a4-volumes',
      p: [
        "Reprenons ce que tu as vu au chapitre a1, avec plus de détail. À l'avant, la pointe du nez est un capot léger, le **radôme** (n° 11, *radome*), qui abrite l'antenne du radar météo. Juste derrière lui, une paroi bombée, la **cloison étanche avant** (n° 9, *forward pressure bulkhead*), ferme à l'avant le volume où l'air est maintenu sous pression.",
        "Dans ce volume, le **poste de pilotage** (n° 1, *flight deck*, familièrement *cockpit*) est tout à l'avant, séparé de la cabine par une cloison et une porte renforcée. Derrière lui s'étend la **cabine** (n° 2, *cabin*), au-dessus du **plancher** (n° 3, *cabin floor*). Ce plancher est la grande séparation de l'avion : au-dessus, les gens ; au-dessous, ce qu'on charge.",
        "Sous le plancher, quatre volumes se succèdent. À l'avant, la **baie avionique** (n° 4, *avionics bay*), local technique où des calculateurs et des équipements électriques sont rangés sur des étagères. Puis la **soute avant** (n° 5, *forward cargo compartment*), pour bagages et fret. Au milieu, là où les ailes rejoignent le fuselage, le **caisson central de voilure** (n° 6, *centre wing box*), partie de la structure des ailes qui traverse l'avion, et le **logement du train principal** (n° 7, *main landing gear bay*), la case où le train se range en vol. Derrière : la **soute arrière** (n° 8, *aft cargo compartment*).",
        "À l'arrière, la cabine se termine par le **fond étanche arrière** (n° 10, *aft pressure bulkhead*), une paroi bombée, et derrière lui s'étend le **cône arrière** (n° 12, *tail cone*), qui porte l'empennage et abrite souvent le petit moteur auxiliaire qui fournit électricité et air quand les gros moteurs sont arrêtés.",
      ],
      callout: { kind: 'info', text: "La place exacte de la baie avionique, des soutes et des logements de train change d'un avion à l'autre : la figure donne le principe d'un avion de ligne à aile basse. Le dossier de ton avion en donne la disposition réelle." },
    },
    {
      h: "Pressurisé ou non : ce que la ligne rouge change pour toi",
      p: [
        "Tu as appris au chapitre a2 que le fuselage est un grand réservoir d'air, gonflé et dégonflé à chaque vol. La **zone pressurisée** (*pressurised zone*) est le volume que ferment, entre les deux traits rouges de la figure, la peau, la cloison avant et le fond arrière. Sur la plupart des avions de ligne, elle contient le poste de pilotage, la cabine, la baie avionique et les soutes. Elle est refroidie ou chauffée, ventilée, et on y respire normalement en altitude. Hors de cette zone : le radôme, le cône arrière, le logement de train et le caisson de voilure, isolé par ses propres parois. Pas d'air conditionné, pas de pression, des variations de température bien plus fortes.",
        "Pourquoi est-ce important pour un intégrateur ? D'abord parce que **tout ce que tu installes en cabine vit dans la zone pressurisée**, donc sous la peau qui est tendue à chaque vol : on n'y perce pas sans prescription, on n'y laisse pas de saleté qui pourrait gêner une étanchéité. Ensuite parce que les zones hors pression sont d'autres métiers : tu n'as aucune raison d'y entrer sans y être affectée. Enfin parce que les limites des volumes sont aussi des limites de responsabilité : « dans la soute » ou « derrière la cloison » veulent dire autre chose que « en cabine ».",
        "Voici le tableau qui résume les volumes que tu viens de voir. Il indique pour chacun s'il est pressurisé et ce qu'il y a d'important à retenir.",
      ],
      table: {
        head: ["Volume", "Pressurisé ?", "À retenir pour toi"],
        rows: [
          ["Poste de pilotage", "Oui", "Local de l'équipage de conduite ; zone sensible, séparée de la cabine par une porte renforcée."],
          ["Cabine", "Oui", "Ta zone de travail : tout ce qu'on y installe vit sous la peau qui travaille."],
          ["Baie avionique", "Oui, sur la plupart des avions", "Calculateurs et équipements électriques ; zone technique, hors de ton périmètre."],
          ["Soutes avant et arrière", "Oui, sur la plupart des avions", "Sous le plancher : tout ce qui tombe à travers un plancher s'y retrouve."],
          ["Caisson de voilure et logement de train", "Non", "Structure des ailes et case du train : fermées par leurs propres parois."],
          ["Radôme et cône arrière", "Non", "Capot léger du nez ; arrière avec empennage et groupe auxiliaire. Ce ne sont pas la cabine."],
        ],
      },
    },
    {
      h: "La cabine vue de l'intérieur : ce que tu vas aménager",
      fig: 'img-a3-coupe-cabine',
      p: [
        "Cette coupe regarde la cabine de l'arrière vers l'avant. Au fond, la cloison qui la sépare des locaux de l'avant ; sur les côtés, les hublots, les bagageries et les sièges ; au sol, une allée centrale. Le plancher est ouvert pour montrer ses poutres. Tout cela vit dans le volume pressurisé que tu viens d'étudier, entre la peau (repère 1) et l'allée.",
        "Retiens deux choses pour la suite. D'abord, la cabine se compose de couches : structure verte, isolant jaune, habillage clair. Ensuite, chaque porte que tu as vue donne sur ce couloir central : l'allée est le chemin d'évacuation, et les sièges, les bagageries et les panneaux qui la bordent ne doivent jamais le gêner. Le chapitre b1 reprend cette coupe élément par élément.",
      ],
    },
    {
      h: "Le poste de pilotage : le voisin sensible",
      p: [
        "Le poste de pilotage est le local d'où l'équipage de conduite pilote l'avion. On y trouve les sièges des pilotes, les commandes de vol, les écrans et les panneaux de commande, et de grandes vitres à l'avant. Il est dans la zone pressurisée, juste derrière le radôme, de plain-pied avec la cabine ; il en est séparé par une cloison et par une **porte renforcée** (*flight deck door*, repérée n° 7 sur la figure des portes, plus bas), conçue pour résister à une intrusion forcée et verrouillable depuis l'intérieur.",
        "Pour un intégrateur cabine, le poste de pilotage est un **voisin sensible**. Les équipements qui s'y trouvent commandent l'avion : un objet qui tombe derrière un panneau ou entre deux commandes peut gêner un mouvement. C'est le cas typique que les spécialistes du FOD — nous y reviendrons au chapitre g1 — citent pour expliquer pourquoi un petit objet n'a rien d'anodin. La règle simple : tu n'y travailles que si tu y es affectée, et tu y restes accompagnée de la personne qui t'y a envoyée.",
        "Dans la cabine, tu rencontreras la limite du poste de pilotage sous trois formes : la porte (n° 7), la cloison qui l'entoure, et les équipements voisins (galley avant, toilettes, siège équipage). Ces éléments te serviront de repères dans les chapitres suivants.",
      ],
    },
    {
      h: "Les soutes : sous tes pieds, le fret et les réseaux",
      p: [
        "Sous le plancher, les **soutes** (*cargo compartments*) reçoivent les bagages et le fret. Elles se chargent par des **portes de soute** placées sur le flanc du fuselage, à un niveau plus bas que le plancher de la cabine : on n'y accède donc pas depuis la cabine. Selon les avions, on y charge des conteneurs ou des bagages en vrac. Leur plancher est lui aussi une structure, avec ses propres limites.",
        "Pour toi, trois points comptent. Le premier : **une soute n'est pas un débarras**. On n'y stocke ni outils ni cartons de chantier, qui pourraient gêner un chargement ou rester oubliés. Le deuxième : **ce qui tombe à travers un plancher finit dessous**. Le plancher cabine n'est pas étanche : une vis, un collier, une chute de ruban qui passent entre deux panneaux terminent dans le volume inférieur, jusqu'au fond de cale dont tu as entendu parler au chapitre a2. Le troisième : **les réseaux traversent**. Sous le plancher passent des câbles, des tuyaux d'eau et des conduits d'air qui rejoignent la cabine ; un raccord abîmé en cabine peut se révéler tout en bas, loin du lieu de la faute.",
      ],
    },
    {
      h: "Les portes : cinq familles à ne pas confondre",
      fig: 'a4-portes-issues',
      p: [
        "La figure montre l'avion vu de dessus, avant à gauche, côté LH en bas : tu viens d'apprendre à te repérer. Les ouvertures de la cabine se répartissent en cinq familles, qu'il faut reconnaître au premier regard.",
        "La **porte passagers** (n° 1, *passenger door*) est celle par laquelle on embarque et on débarque. Elle est en général du côté gauche de l'avion — c'est l'usage le plus courant, pas une règle absolue — et c'est aussi une issue de secours. En face, la **porte de service** (n° 2, *service door*) sert à approvisionner les galleys et à faire entrer les équipes de nettoyage, du côté où ne s'accoste pas la passerelle des passagers ; c'est elle aussi une issue. Au-dessus de l'aile, l'**issue sur l'aile** (n° 3, *overwing emergency exit*) est une petite ouverture qui ne sert qu'à évacuer : on sort sur l'aile puis on rejoint le sol par son bord arrière.",
        "Plus bas que le plancher, la **porte de soute** (n° 4, *cargo door*) charge les bagages. Elle ne donne **pas** dans la cabine, et elle est plus basse que les portes passagers. Enfin, tout à l'avant, la **porte du poste de pilotage** (n° 7) sépare le cockpit de la cabine. Les deux **toboggans** orange (n° 5) rappellent que chaque porte de la cabine, côté passagers ou côté service, peut recevoir un toboggan d'évacuation. L'**allée** (n° 6) et ses passages transversaux relient la cabine à ces issues.",
        "Le nombre, la place et le type de ces ouvertures dépendent de l'avion. Un avion plus long a plus de portes et d'issues ; un avion plus petit, moins. C'est une raison pour laquelle un avion ne peut pas recevoir autant de sièges qu'une compagnie le souhaite : **le nombre maximal de passagers est limité par les issues disponibles**. La configuration de la cabine, que tu verras au chapitre suivant, découle d'abord de ce calcul.",
      ],
      table: {
        head: ["Ouverture", "Nom anglais", "Sert à", "Donne dans la cabine ?"],
        rows: [
          ["Porte passagers", "Passenger door", "Embarquer, débarquer, évacuer", "Oui"],
          ["Porte de service", "Service door", "Approvisionner les galleys, nettoyer, évacuer", "Oui"],
          ["Issue sur l'aile", "Overwing exit", "Évacuer seulement", "Oui"],
          ["Porte de soute", "Cargo door", "Charger bagages et fret", "Non : elle ouvre sur la soute, sous le plancher"],
          ["Porte du poste de pilotage", "Flight deck door", "Séparer le cockpit de la cabine", "C'est une porte interne à l'avion"],
        ],
      },
    },
    {
      h: "Une porte passagers vue de l'intérieur",
      fig: 'a4-porte-anatomie',
      p: [
        "Approche-toi mentalement d'une porte, côté cabine. Le **vantail** (n° 1, *door leaf*) est la partie mobile : fermée, il fait partie de la paroi pressurisée, aussi étanche que la peau qui l'entoure. Sa conception est volontairement particulière : l'encadrement est plus petit que le vantail, de sorte que la pression de la cabine **plaque la porte contre son cadre**. Plus l'avion monte, plus elle serre. C'est ce qui rend impossible l'ouverture d'une porte en vol, et ce qui oblige à la manœuvrer d'une façon particulière : on ne la tire pas simplement vers soi.",
        "Un petit **hublot de porte** (n° 2) permet de regarder dehors avant d'ouvrir : passerelle en place ? véhicule contre la porte ? feu, eau, débris ? La **poignée de manœuvre** (n° 3, *door operating handle*) commande le déverrouillage et l'ouverture. Au bas du vantail, le **bloc toboggan** (n° 5, *slide pack*) est un carter qui contient le toboggan plié et sa bouteille de gonflage. Entre les deux, le **levier d'armement** (n° 4, *slide arming lever*) a deux positions : **armé**, l'ouverture de la porte déclenche le toboggan ; **désarmé**, la porte s'ouvre sans le déclencher.",
        "Ce levier est à retenir : c'est lui qui fait la différence entre une ouverture normale (embarquement) et une évacuation. Un toboggan qui se gonfle par erreur, c'est un événement sérieux : blessures possibles, toboggan à reconditionner, intervention de maintenance. Dans un chantier, l'état d'armement des portes est une information que l'on contrôle et que l'on note, pas une valeur qu'on suppose. Tu ne manœuvres ni la poignée ni le levier sans formation et sans l'autorisation de la personne qui en a la charge.",
        "Autour du vantail, trois éléments complètent la zone. Le **seuil de porte** (n° 6, *door sill*) est la bordure basse sur laquelle la porte fermée vient s'étanchéifier : on le protège pendant le chantier, car une rayure ou un choc peut compromettre l'étanchéité. Le **passage** (n° 7, *exit passageway*) est la surface de plancher qui mène de l'allée à la porte. Le **signe lumineux** (n° 8, *exit sign*) indique l'issue, même dans la fumée ou l'obscurité. Une **poignée d'assistance** (n° 9, *assist handle*) permet à l'équipage de se tenir pendant l'évacuation. Le **siège équipage** (n° 10, *cabin attendant seat*) est un siège rabattable : celui qui l'occupe est celui qui ouvre la porte.",
      ],
      callout: { kind: 'warn', text: "Une porte ouverte en chantier donne sur le vide : le seuil est très au-dessus du sol, et une chute y est grave. Tant que la passerelle n'est pas en place et fixée, ou qu'une protection antichute n'est pas posée, on ne s'approche pas du bord. La personne qui a ouvert la porte reste responsable de ce qu'il y a derrière." },
    },
    {
      h: "Les issues de secours : principes",
      p: [
        "Une **issue de secours** (*emergency exit*) est toute ouverture prévue pour évacuer les occupants en urgence : les portes passagers et de service en sont, ainsi que les issues sur l'aile. Les règles de certification des avions de transport (en Europe, le règlement CS-25) fixent leurs types selon leur taille et leur place, leur nombre en fonction du nombre de passagers, leur répartition le long de la cabine, et le soin à apporter à leur signalisation. Tu n'as pas à connaître ces exigences chiffrées : elles se lisent dans le dossier de certification. Ce que tu dois retenir, c'est ce qu'elles protègent.",
        "Le principe de base est une démonstration : un avion de ligne rempli de passagers doit pouvoir être évacué en un temps très court, de l'ordre d'une minute et demie, **en n'utilisant qu'une partie des issues**, parce qu'en cas d'incendie ou de choc, certaines seront inutilisables. Pour que cette démonstration reste vraie en service, il faut trois choses : que les issues soient **libres**, que le chemin jusqu'à elles soit **dégagé**, et qu'on les **voie** même dans la fumée. D'où les signes lumineux, le balisage lumineux près du sol, les portes marquées, et les consignes d'affichage.",
        "**Ne jamais bloquer une issue** signifie donc beaucoup plus que ne pas se tenir devant. Cela couvre : le vantail et son débattement (rien ne doit gêner son ouverture), l'espace devant la porte (rien posé au sol), les passages qui y mènent (cartons, chariots, câbles), les signes et les marquages (une protection de chantier ne doit pas les masquer, ou alors elle doit être retirée avant le départ), et les dispositifs de secours (toboggan, poignées, extincteurs voisins). Et la règle vaut aussi avion arrêté, cabine vide : un début d'incendie, un malaise, un blessé sur le chantier demandent la même chose, une sortie rapide et libre.",
        "Cette règle ne veut pas dire « ne rien déposer en cabine ». Elle veut dire que **les matériels de chantier ont une place prévue, loin des issues**. Un chariot d'outils se range le long d'un meuble, hors du passage ; des cartons s'empilent dans une zone de stockage, pas devant la porte ; un câble de rallonge passe au-dessus du seuil par un cheminement protégé, pas à même le sol.",
      ],
      callout: { kind: 'doc', text: "Les types d'issues, leurs dimensions minimales, leur nombre et leur répartition sont fixés par la réglementation de certification et par le dossier de l'avion. Ces valeurs n'apparaissent pas dans ce cours : elles ne se devinent pas, elles se lisent." },
    },
    {
      h: "La zone d'une porte pendant un chantier",
      fig: 'a4-zone-porte',
      p: [
        "Voici la scène que tu verras tous les jours : une porte ouverte, une passerelle accostée, et autour, un chantier qui avance. La figure rassemble les bons et les mauvais usages dans un même schéma. Prends-la comme un jeu des sept erreurs : certaines choses sont à leur place, d'autres sont des problèmes.",
        "Ce qui est à sa place : la **passerelle** (n° 1) accostée devant la porte ouverte ; le **vantail** (n° 2) plaqué le long du fuselage et maintenu ; la **protection de seuil** (n° 3) qui évite aux passages et aux chariots de marquer le seuil ; le **chariot à outils** (n° 4), rangé le long d'un meuble, hors du passage ; le **bac à déchets FOD** (n° 5), où chutes et emballages vont tout de suite.",
        "Ce qui ne va pas : des **cartons** (n° 6) déposés entre l'allée et la porte, qui barrent le chemin de sortie ; une **rallonge** (n° 7) en travers du seuil, qui fait trébucher et empêche de refermer la porte ; de la **visserie au sol** (n° 8), des corps étrangers qui rouleront dans le seuil ou sous le plancher ; un **panneau** (n° 9) appuyé contre le vantail ouvert, qui peut tomber, se marquer et abîmer la porte. Chaque erreur est une cause différente, mais toutes se règlent de la même façon : en ramenant la chose à sa place, ou en la signalant à celui qui l'a posée.",
        "La zone des portes est un lieu de **coactivité** : plusieurs équipes y passent en même temps, des personnes avec des pièces, des chariots, des câbles, parfois des véhicules de service au pied de la passerelle. Les consignes de coactivité, vues au chapitre c4 et g4, visent à ce que chacun puisse faire son travail sans gêner celui des autres. Dans cette zone, elles se traduisent par quelques habitudes : annoncer qu'on passe avec une pièce, ne rien déposer dans le passage, et ne pas laisser un objet là où il pourrait tomber sur quelqu'un.",
      ],
    },
    {
      h: "Le FOD à la porte : un premier regard",
      p: [
        "Tu connais le mot FOD depuis le chapitre m1 : tout objet qui ne doit pas être dans l'avion. La zone de porte est l'un de ses endroits favoris, pour trois raisons très concrètes. Tout passe par là : outils, emballages, chutes de matière, gants, boîtes de visserie. Le seuil et les rails de plancher qui l'entourent forment des rainures où un petit objet se glisse et disparaît. Et, comme les gens y passent vite, personne ne se baisse pour ramasser ce qui est tombé.",
        "Voilà pourquoi un **bac à déchets** (n° 5 sur la figure précédente) est placé à portée de main : tout ce qui est jeté y va tout de suite. Une vis perdue, elle, ne doit pas être jetée au hasard : on la cherche, on la signale, on ne l'oublie pas. Le chapitre g1 explique pourquoi un objet apparemment inoffensif peut avoir de graves conséquences ; le chapitre g2 enseigne les méthodes d'inventaire et de recherche. Pour l'instant, retiens une habitude : **un objet par terre près d'une porte est toujours un sujet, jamais un détail**.",
      ],
    },
    {
      h: "Les mots du chapitre, en français et en anglais",
      p: [
        "Les documents que tu liras (dossiers, étiquettes, consignes d'équipementiers) sont souvent bilingues ou en anglais. Voici les mots de la zone des portes, tels que tu les trouveras.",
      ],
      table: {
        head: ["Français", "Anglais", "Où le trouver"],
        rows: [
          ["Poste de pilotage", "Flight deck, cockpit", "Plans, consignes, signalisation de zone"],
          ["Cabine", "Cabin", "Tous les documents"],
          ["Soute", "Cargo compartment, hold", "Plans, marquage des portes de soute"],
          ["Porte passagers", "Passenger door", "Plans de cabine, marquages de porte"],
          ["Porte de service", "Service door", "Plans de cabine"],
          ["Issue de secours", "Emergency exit", "Signes lumineux, affichages"],
          ["Issue sur l'aile", "Overwing exit", "Plans, consignes aux passagers"],
          ["Toboggan", "Slide (escape slide)", "Bloc au bas de la porte, étiquettes"],
          ["Armé / désarmé", "Armed / disarmed", "Levier d'armement, étiquettes de porte"],
          ["Seuil", "Sill", "Dossiers de protection de zone"],
        ],
      },
    },
  ],

  // fiches ─────────────────────────────────────────────────────────
  parts: [
    { fig: 'a4-porte-anatomie', part: 'armement', fr: "Levier d'armement du toboggan", en: "Slide arming lever",
      fn: "Choisir si l'ouverture de la porte déclenche ou non le toboggan : armé, l'ouverture le gonfle ; désarmé, la porte s'ouvre normalement.",
      where: "Sur le vantail de la porte, au-dessus du bloc toboggan, visible de l'intérieur de la cabine.",
      interfaces: "Relié mécaniquement au toboggan et à la poignée de manœuvre ; état affiché par un repère de couleur ou de position.",
      risks: "Un toboggan gonflé par erreur : blessures possibles, toboggan à reconditionner, intervention de maintenance.",
      vigilance: "Ne jamais le manœuvrer sans autorisation ; vérifier son état et le noter dans le dossier avant toute intervention sur la porte.",
      mistakes: "Penser qu'une porte « fermée » est forcément « désarmée » et s'appuyer contre le vantail." },
    { fig: 'a4-porte-anatomie', part: 'passage', fr: "Passage à garder libre", en: "Exit passageway",
      fn: "Permettre à toute personne de rejoindre la porte depuis l'allée, sans obstacle.",
      where: "Sur le plancher, entre l'allée et le seuil de la porte, y compris l'espace où s'ouvre le siège équipage.",
      interfaces: "Allée, seuil, siège équipage, signe d'issue, marquage de sol.",
      risks: "Une pièce déposée dans ce passage retarde une évacuation, fait trébucher, ou masque un balisage de sol.",
      vigilance: "Aucun dépôt, même bref : chariot, carton, câble ou panneau ; garder la largeur libre pendant tout le chantier.",
      mistakes: "Poser « seulement une minute » un carton dans le passage pour avoir les deux mains libres." },
    { fig: 'a4-zone-porte', part: 'protection-seuil', fr: "Protection de seuil", en: "Door sill protection",
      fn: "Éviter que les passages, les chariots et les chutes d'outils marquent la bordure sur laquelle la porte s'étanchéifie.",
      where: "Posée à plat sur le seuil, de part et d'autre de l'ouverture.",
      interfaces: "Seuil de porte, plancher voisin, passerelle ; elle ne doit pas gêner la fermeture de la porte ni le passage.",
      risks: "Un seuil rayé ou enfoncé peut compromettre l'étanchéité ; une protection mal posée fait trébucher.",
      vigilance: "Vérifier qu'elle est à plat, fixée, et retirée avant la fermeture de la porte ; la compter parmi les protections à retirer.",
      mistakes: "Oublier de la retirer, ou la remplacer par un morceau de carton qui glisse." },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: "Poste de pilotage", en: "Flight deck (cockpit)", def: "Local des pilotes, tout à l'avant de la zone pressurisée, séparé de la cabine par une cloison et une porte renforcée." },
    { fr: "Zone pressurisée", en: "Pressurised zone", def: "Volume fermé de l'avion où l'air est maintenu à une pression plus élevée qu'à l'extérieur ; elle contient en général le poste de pilotage, la cabine et les soutes." },
    { fr: "Baie avionique", en: "Avionics bay", def: "Local technique situé sous le plancher, en général à l'avant, où sont regroupés des calculateurs et des équipements électriques." },
    { fr: "Logement de train", en: "Landing gear bay", def: "Case de l'avion où le train se range en vol ; elle n'est pas pressurisée." },
    { fr: "Radôme", en: "Radome", def: "Capot léger de la pointe avant, qui abrite l'antenne du radar météo ; il n'est pas pressurisé et ne reçoit ni poids ni appui." },
    { fr: "Cône arrière", en: "Tail cone", def: "Extrémité arrière du fuselage, non pressurisée, qui porte l'empennage et abrite souvent le groupe auxiliaire de puissance." },
    { fr: "Porte passagers", en: "Passenger door", def: "Porte par laquelle on embarque et on débarque ; c'est aussi une issue de secours, le plus souvent du côté gauche de l'avion." },
    { fr: "Porte de service", en: "Service door", def: "Porte généralement en face de la porte passagers, utilisée pour ravitailler les galleys et nettoyer ; c'est aussi une issue de secours." },
    { fr: "Porte de soute", en: "Cargo door", def: "Porte placée plus bas que le plancher cabine par laquelle on charge bagages et fret ; elle ne donne pas dans la cabine." },
    { fr: "Issue de secours", en: "Emergency exit", def: "Ouverture prévue pour évacuer l'avion en urgence : portes passagers et de service, issues sur l'aile, parfois issues dédiées." },
    { fr: "Issue sur l'aile", en: "Overwing exit", def: "Petite ouverture au niveau de l'aile, qui ne sert qu'à évacuer : on sort sur l'aile puis on rejoint le sol par son bord arrière." },
    { fr: "Toboggan d'évacuation", en: "Evacuation slide", def: "Rampe gonflable qui se déploie à l'ouverture d'une porte armée et permet de rejoindre le sol rapidement." },
    { fr: "Levier d'armement", en: "Slide arming lever", def: "Commande à deux positions, armé ou désarmé, qui décide si l'ouverture de la porte déclenche le toboggan." },
    { fr: "Seuil de porte", en: "Door sill", def: "Bordure basse de l'ouverture de porte, sur laquelle la porte fermée fait l'étanchéité ; on la protège pendant le chantier." },
    { fr: "Signe d'issue", en: "Exit sign", def: "Signe lumineux qui indique l'emplacement d'une issue, y compris dans l'obscurité ou la fumée." },
    { fr: "Siège équipage", en: "Cabin attendant seat", def: "Siège rabattable du personnel de cabine, placé près d'une porte ; la personne qui l'occupe est celle qui l'ouvre en cas d'évacuation." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Jeudi, 13 h 40 : cinq minutes à la porte avant gauche",
    body: [
      "La passerelle est accostée devant la porte avant gauche, la porte est ouverte, et ton équipe finit de poser des panneaux de plafond dans la zone avant. Samia te demande de faire un tour de la zone pour préparer l'arrivée d'un galley en fin d'après-midi. Elle a une consigne simple : « Va à la porte, regarde ce qu'il y a au sol, et reviens me dire s'il reste de la place pour un galley. »",
      "Tu t'arrêtes au seuil. Tu vois la protection de seuil, bien à plat. À gauche de l'allée, un chariot à outils rangé contre le meuble du cockpit. Entre la porte et l'allée, trois cartons empilés sur le passage. Samia te demande : « Qu'est-ce que tu vois ? » Tu réponds que les cartons ne touchent pas la porte. Elle secoue la tête : « Et si quelqu'un sort en courant ? Un galley, ça passe par la porte. Un carton, ça se déplace. Et ça, c'est une issue : le passage reste libre, tout le temps. » Les cartons repartent dans la zone de stockage.",
      "En redescendant, tu aperçois une vis sur le plancher, près du seuil. Tu la ramasses, tu la montres : elle ne vient d'aucune de vos tâches du jour. Samia la met dans une pochette étiquetée, note l'heure et l'endroit, et la déclare. Elle ne la jette pas : « Une vis qu'on ne sait pas d'où elle vient est toujours une question, pas un déchet. »",
    ],
    doc: {
      title: "Relevé de zone de porte — document fictif pédagogique",
      lines: [
        ["Porte", "Avant gauche (porte passagers)"],
        ["Heure", "13 h 40"],
        ["Passerelle", "Accostée, verrouillée"],
        ["Protection de seuil", "En place, à plat"],
        ["Passage vers la porte", "Dégagé après déplacement de 3 cartons"],
        ["Objet trouvé", "1 vis, origine inconnue, sous pochette EX-OBJ-012"],
      ],
      note: "Document inventé pour l'exercice : un vrai relevé suit le format imposé par l'entreprise.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Faire le tour des volumes de l'avion, du nez à la queue",
    fig: 'a4-volumes',
    steps: [
      { label: "La pointe du nez", text: "Le radôme est un capot léger qui abrite le radar météo : il n'est pas pressurisé, on n'y pose ni outil ni pièce. Juste derrière, la cloison étanche avant ferme le volume pressurisé.", hl: ['radome', 'cloison-avant'] },
      { label: "Le poste de pilotage", text: "Derrière la cloison étanche avant, le poste de pilotage, séparé de la cabine par une cloison et une porte renforcée. C'est le voisin sensible de la cabine.", hl: ['cockpit'] },
      { label: "Le plancher, grande séparation", text: "Le plancher cabine sépare le haut du bas. Au-dessus, la cabine ; au-dessous, tout ce qui se charge ou se range. Un objet qui tombe à travers un plancher finit sous le plancher.", hl: ['plancher', 'cabine'] },
      { label: "Sous le plancher : l'électronique et la soute avant", text: "À l'avant sous le plancher, la baie avionique avec les calculateurs, puis la soute avant pour les bagages et le fret.", hl: ['baie-avionique', 'soute-avant'] },
      { label: "Au milieu : ailes et trains", text: "Le caisson central de voilure et le logement du train principal sont au milieu du ventre. Ils ne sont pas pressurisés, séparés de la cabine par le plancher et de la soute par leurs propres parois.", hl: ['caisson-central', 'logement-train'] },
      { label: "L'arrière", text: "La soute arrière suit le logement de train ; en haut, la cabine se termine au fond étanche arrière, et derrière commence le cône arrière, non pressurisé, avec l'empennage.", hl: ['soute-arriere', 'cloison-arriere', 'cone-arriere'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    { id: 'a4-a1', type: 'hottap', fig: 'a4-volumes',
      q: "Sur la figure, touche l'élément que l'on te demande.",
      targets: [
        { prompt: "La soute avant", part: 'soute-avant' },
        { prompt: "Le fond étanche arrière (la paroi bombée)", part: 'cloison-arriere' },
        { prompt: "Le poste de pilotage", part: 'cockpit' },
        { prompt: "Le logement du train principal", part: 'logement-train' },
      ],
      concept: "Volumes de l'avion",
      explain: "Le poste de pilotage est tout à l'avant, au-dessus du plancher. La soute avant est sous le plancher, en avant de l'aile. Le logement du train est au milieu du ventre, juste après le caisson central. Le fond étanche arrière est la paroi bombée en bout de cabine, marquée par le trait rouge de droite." },
    { id: 'a4-a2', type: 'sort',
      q: "Classe chaque volume : est-il dans la zone pressurisée (sur la plupart des avions de ligne), ou en dehors ?",
      bins: ["Zone pressurisée", "Hors zone pressurisée"],
      items: [
        { t: "Cabine", bin: 0, why: "Les passagers y respirent normalement en altitude : c'est le cœur de la zone pressurisée." },
        { t: "Poste de pilotage", bin: 0, why: "Il est dans la zone pressurisée, derrière la cloison étanche avant." },
        { t: "Soute arrière", bin: 0, why: "Sur la plupart des avions de ligne, les soutes sont dans le volume pressurisé." },
        { t: "Radôme", bin: 1, why: "Capot léger du nez, devant la cloison étanche avant : il n'est pas pressurisé." },
        { t: "Logement de train principal", bin: 1, why: "Il s'ouvre sur l'extérieur pour sortir le train : il ne peut pas être sous pression." },
        { t: "Cône arrière", bin: 1, why: "Il est derrière le fond étanche arrière ; il porte l'empennage et le groupe auxiliaire de puissance." },
      ],
      concept: "Zone pressurisée et zones non pressurisées",
      explain: "Le volume pressurisé va de la cloison étanche avant au fond étanche arrière et comprend la cabine, le poste de pilotage et, sur la plupart des avions, les soutes. Tout ce qui est devant, derrière ou dans des cases ouvertes sur l'extérieur (train) est en dehors." },
    { id: 'a4-a3', type: 'hotid', fig: 'a4-porte-anatomie',
      q: "Pour chaque élément surligné sur la porte, choisis son nom dans la liste.",
      targets: [{ part: 'armement' }, { part: 'seuil' }, { part: 'poignee' }, { part: 'toboggan' }, { part: 'siege-equipage' }],
      concept: "Éléments d'une zone de porte",
      explain: "Le levier d'armement est le petit levier rouge et vert juste au-dessus du bloc toboggan ; le seuil est la bordure basse, au niveau du plancher ; la poignée de manœuvre est le grand levier au milieu du vantail ; le bloc toboggan est le carter en bas du vantail ; le siège équipage est le siège rabattable à droite de la porte." },
    { id: 'a4-a4', type: 'hotfind', fig: 'a4-zone-porte',
      q: "Cette zone de porte est en chantier. Touche les quatre choses qui ne doivent pas se trouver là. Le reste est à sa place.",
      targets: ['carton', 'rallonge', 'vis', 'panneau'],
      notes: {
        carton: "Les cartons barrent le chemin entre l'allée et la porte : une issue doit rester libre en permanence, même avion à l'arrêt.",
        rallonge: "Un câble en travers du seuil fait trébucher, abîme le seuil et empêche de refermer la porte correctement.",
        vis: "Des vis au sol sont des objets étrangers : elles peuvent rouler dans le seuil ou sous le plancher et y rester oubliées.",
        panneau: "Un panneau appuyé contre le vantail peut tomber, se marquer et abîmer la porte ; il doit être rangé sur son support, protégé.",
      },
      concept: "Repérer ce qui gêne une issue ou crée un FOD",
      explain: "La passerelle, le vantail ouvert, la protection de seuil, le chariot rangé le long du meuble et le bac à déchets sont à leur place. Les quatre autres éléments sont des problèmes différents : un obstacle sur le chemin de sortie, un câble au sol, des objets étrangers, une pièce mal rangée. On les règle chacun à sa manière, mais tous méritent d'être signalés ou corrigés tout de suite." },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Penser qu'une issue n'est utile qu'avion plein, en vol ou au départ, et qu'un avion en chantier peut donc l'encombrer.",
      why: "Les risques qui exigent une sortie rapide existent aussi au sol et en chantier : un début d'incendie, un malaise, une fuite de produit. Une issue encombrée ralentit tout le monde, y compris les secours qui entrent.",
      better: "Maintenir le passage libre pendant toute la durée du chantier ; ranger chariots et cartons dans les zones prévues." },
    { error: "S'appuyer sur une porte ouverte, ou y poser un panneau, un outil ou un sac « le temps de faire autre chose ».",
      why: "Le vantail est maintenu en position par un dispositif qui n'est pas fait pour recevoir des charges, et ses bords et son bloc toboggan sont fragiles. Un panneau appuyé peut glisser, tomber sur quelqu'un et marquer la porte.",
      better: "Ranger la pièce sur un support prévu, loin de la porte ; ne rien accrocher au vantail ni à ses commandes." },
    { error: "Manœuvrer une poignée de porte ou un levier d'armement « pour voir comment ça marche ».",
      why: "Une porte qu'on ouvre armée gonfle son toboggan en quelques secondes. Ça peut blesser, ça coûte cher, et ça impose une intervention de maintenance. La manœuvre est réservée aux personnes formées et autorisées.",
      better: "Regarder, demander, apprendre en suivant celui qui est habilité ; ne toucher ni à la poignée ni au levier sans autorisation." },
    { error: "Croire que le seuil est un simple bord de plancher qu'on peut piétiner avec des chariots ou rayer avec des outils.",
      why: "C'est la surface sur laquelle la porte fermée fait l'étanchéité. Une rayure ou un enfoncement peut empêcher la porte de bien s'étanchéifier et il faudra le déclarer ou le réparer.",
      better: "Poser une protection de seuil à plat, rouler les chariots sur la partie protégée, et la retirer avant la fermeture de la porte." },
    { error: "Considérer qu'un objet tombé près de la porte est sans importance puisqu'il est petit.",
      why: "La zone de porte comporte des rainures où les petits objets se glissent et d'où ils sont très difficiles à retrouver. Un objet étranger oublié dans un seuil ou sous un plancher peut gêner un mécanisme ou blesser quelqu'un plus tard.",
      better: "Ramasser l'objet, le montrer, le déclarer s'il n'est pas à toi, et ne pas le jeter sans l'identifier." },
    { error: "Confondre la porte de soute avec une porte de cabine, ou penser qu'on peut passer de la soute à la cabine par un accès rapide.",
      why: "La porte de soute donne sur le volume situé sous le plancher : elle est plus basse, ne donne pas dans la cabine, et son ouverture a ses propres risques (chute d'objet, porte suspendue au-dessus de la zone de chargement).",
      better: "Identifier les portes par leur famille et leur place ; n'ouvrir ou ne passer que par celles qui te sont attribuées." },
    { error: "Entrer dans le poste de pilotage « pour jeter un œil » parce que la porte est ouverte.",
      why: "C'est une zone sensible : des équipements y commandent l'avion, et un objet tombé derrière un panneau peut gêner une commande. Seules les personnes affectées y travaillent.",
      better: "Rester côté cabine, demander si une intervention est nécessaire, et ne rien emporter avec toi qui puisse tomber." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Le galley arrive, les cartons sont devant la porte",
      context: [
        "Il est 15 h 10. Un galley doit entrer à 16 h par la porte arrière droite, que le chef d'équipe a réservée pour cette opération. Tu es de passage dans la zone arrière pour y déposer des protections et tu découvres, dans l'espace entre l'allée et cette porte, huit cartons de visserie et un chariot d'outils laissés par l'équipe précédente. Personne n'est là.",
        "Les cartons sont lourds, certains sont ouverts. Le chariot a un tiroir mal fermé. L'équipe qui les a posés travaille au fond de l'avion, à plus de dix mètres. Il te reste vingt minutes avant ton prochain créneau.",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je déplace moi-même tout ce qui gêne vers l'autre côté de la cabine, pour libérer la zone.", ok: false, why: "Tu déplaces des objets qui ne sont pas à toi, sans savoir ce qu'ils contiennent, qui les a posés ni pourquoi. Des cartons de visserie ouverts se renversent, et déplacer des outils sans accord perturbe leur inventaire." },
        { t: "Je préviens l'équipe qui les a posés, je demande où ils vont, puis je les fais évacuer vers la zone de stockage, tiroir fermé, avant l'arrivée du galley.", ok: true, why: "Le passage doit être dégagé et la bonne personne sait où ranger. Tu agis tout de suite, par la voie qui garde l'inventaire et la responsabilité de chacun." },
        { t: "Je laisse tout en place : l'arrivée du galley n'est qu'à 16 h et quelqu'un finira bien par s'en occuper.", ok: false, why: "Une issue encombrée l'est dès maintenant, et pas seulement à 16 h : l'obstacle existe aussi pour un malaise ou un début de fumée. Attendre, c'est laisser un problème connu en place." },
        { t: "Je pose mon propre carton de protections à côté des autres, comme ça tout est au même endroit.", ok: false, why: "Tu ajoutes un obstacle sur un passage qui doit rester libre. Rassembler les cartons n'est pas les ranger : la zone de stockage est ailleurs." },
      ],
      debrief: "Une issue encombrée est un problème immédiat, pas un problème futur : il se règle quand on le voit. Le bon réflexe n'est ni de déplacer ce qui n'est pas à toi sans prévenir, ni de laisser en place, mais de joindre la personne responsable et de convenir du rangement. Tu protèges ainsi le passage et tu conserves la trace de qui a posé quoi, utile aussi pour retrouver un objet manquant.",
    },
    {
      title: "La passerelle est partie, la porte est restée ouverte",
      context: [
        "Il est 6 h 45 et tu arrives pour ta première tâche de la journée. Dans la zone avant, la porte passagers est grande ouverte. La passerelle n'est plus là : on l'a déplacée dans la nuit pour un autre avion, et personne n'a fermé la porte. Le seuil est très au-dessus du sol. Dans la cabine, le chariot de protections est stationné devant la porte, à un mètre du bord.",
        "Tu n'as pas la formation pour manœuvrer la porte. Karim n'est pas encore là, le chef d'équipe est dans le bâtiment voisin. Un collègue d'une autre équipe arrive derrière toi avec un panneau sous le bras et va passer devant la porte.",
      ],
      question: "Quelle est ta première réaction ?",
      options: [
        { t: "Je ferme la porte moi-même, même sans formation : c'est le plus sûr.", ok: false, why: "Manœuvrer une porte sans formation expose à un geste mal fait : porte qui échappe, toboggan armé qui se déclenche. La fermeture est réservée aux personnes habilitées." },
        { t: "Je m'écarte du bord, j'empêche mon collègue de s'en approcher, je matérialise la zone (barrière, ruban ou protection prévue) et je préviens aussitôt le chef d'équipe pour qu'une personne habilitée ferme la porte ou ramène la passerelle.", ok: true, why: "Tu protèges les personnes (le danger est la chute), tu n'improvises pas sur ce que tu ne sais pas faire, et tu préviens la personne qui peut agir. C'est la bonne combinaison." },
        { t: "J'avance jusqu'au bord pour mesurer la hauteur et savoir s'il est dangereux.", ok: false, why: "Tu t'exposes à la chute pour une information inutile : le danger est évident, et la hauteur ne change pas la conduite à tenir." },
        { t: "J'attends que quelqu'un arrive : ce n'est pas mon rôle.", ok: false, why: "Un collègue est sur le point de passer devant l'ouverture. L'attente laisse le risque en place ; la prévention d'une chute est le rôle de tous, même quand on ne sait pas fermer une porte." },
      ],
      debrief: "Devant un danger que tu ne peux pas supprimer toi-même, tu sécurises ce que tu peux — ici, éloigner les gens du bord — et tu alertes quelqu'un qui peut agir. La passerelle, les barrières et la fermeture de la porte sont des moyens prévus et réservés ; ton rôle est d'empêcher qu'on se blesse en attendant leur retour.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    { id: 'a4-q1', type: 'mcq',
      q: "Choisis une réponse. Pourquoi une porte d'avion de ligne ne peut-elle pas s'ouvrir en vol ?",
      options: [
        { t: "Parce que les pilotes la verrouillent depuis le poste de pilotage.", ok: false, why: "Le verrouillage du cockpit n'a rien à voir : c'est la forme de la porte qui compte." },
        { t: "Parce que la pression de la cabine la plaque contre son encadrement, qui est plus petit qu'elle.", ok: true, why: "La porte est plus grande que son ouverture : plus l'avion monte, plus la pression la serre. C'est une propriété de sa conception." },
        { t: "Parce que son poids est trop élevé pour être ouverte.", ok: false, why: "Le poids n'est pas en cause : au sol, une seule personne manœuvre la porte." },
        { t: "Parce que les passagers sont attachés.", ok: false, why: "La ceinture n'a aucun rapport avec l'ouverture d'une porte." },
      ],
      concept: "Pressurisation et ouverture d'une porte",
      explain: "Les portes principales d'un avion de ligne sont conçues pour que la pression de la cabine les plaque contre leur encadrement. Elles ne peuvent donc pas s'ouvrir en vol, et il faut les manœuvrer d'une façon particulière au sol." },
    { id: 'a4-q2', type: 'match',
      q: "Associe chaque ouverture à son rôle.",
      pairs: [
        { l: "Porte passagers", r: "Embarquer et débarquer, et servir d'issue" },
        { l: "Porte de service", r: "Approvisionner les galleys et nettoyer" },
        { l: "Issue sur l'aile", r: "Évacuer seulement, vers l'aile" },
        { l: "Porte de soute", r: "Charger bagages et fret, sous le plancher" },
      ],
      concept: "Les familles de portes",
      explain: "Chaque porte a son usage. Seule la porte de soute ne donne pas dans la cabine : elle est plus basse que les autres et ouvre sur le volume situé sous le plancher." },
    { id: 'a4-q3', type: 'hotid', fig: 'a4-portes-issues',
      q: "Pour chaque élément surligné, choisis son nom dans la liste.",
      targets: [{ part: 'porte-pax' }, { part: 'issue-aile' }, { part: 'porte-soute' }, { part: 'toboggan' }],
      concept: "Reconnaître portes et issues sur un schéma",
      explain: "La porte passagers est sur le flanc gauche, à l'avant et à l'arrière. L'issue sur l'aile est la petite ouverture verte au niveau de l'aile. La porte de soute est la plus sombre, sur le flanc droit. Le toboggan est la rampe orange déployée à une porte." },
    { id: 'a4-q4', type: 'multi',
      q: "Coche tout ce qui constitue un blocage d'issue, même avion à l'arrêt et cabine vide.",
      options: [
        { t: "Un chariot d'outils stationné dans l'espace entre l'allée et la porte", ok: true, why: "Il obstrue le chemin de sortie : il se range le long d'un meuble, hors du passage." },
        { t: "Un câble de rallonge posé en travers du seuil", ok: true, why: "Il fait trébucher, gêne la fermeture de la porte et peut retarder tout le monde." },
        { t: "Un panneau appuyé contre le vantail ouvert", ok: true, why: "Il peut tomber sur la sortie, et gêne la fermeture ou la manœuvre de la porte." },
        { t: "Une protection de seuil posée à plat et fixée", ok: false, why: "Elle protège le seuil sans gêner le passage ; elle doit seulement être retirée avant la fermeture de la porte." },
        { t: "Un bac à déchets posé contre un meuble, hors du passage", ok: false, why: "Il est à sa place : à portée de main, mais en dehors du chemin qui mène à la porte." },
      ],
      concept: "Ne jamais bloquer une issue",
      explain: "Est un blocage ce qui gêne le passage, le débattement de la porte, la visibilité de l'issue ou ses dispositifs. Ce qui est rangé hors du passage ou protège la porte sans la gêner est à sa place." },
    { id: 'a4-q5', type: 'order',
      q: "Remets dans l'ordre, du nez vers la queue, les volumes de l'avion.",
      items: ["Radôme", "Poste de pilotage", "Cabine", "Fond étanche arrière", "Cône arrière"],
      concept: "Succession des volumes du nez à la queue",
      explain: "Le radôme est la pointe du nez ; derrière la cloison étanche avant vient le poste de pilotage, puis la cabine. La cabine se termine au fond étanche arrière, et derrière commence le cône arrière, qui porte l'empennage." },
    { id: 'a4-q6', type: 'hotfind', fig: 'a4-zone-porte',
      q: "Un collègue veut faire passer un galley par cette porte. Touche les trois éléments qui gêneront son passage ou son arrivée.",
      targets: ['carton', 'rallonge', 'panneau'],
      notes: {
        carton: "Les cartons se trouvent dans le passage : ils bloquent le chemin entre l'allée et la porte.",
        rallonge: "Le câble en travers du seuil gêne le roulement d'un chariot et peut être arraché.",
        panneau: "Le panneau contre le vantail est une pièce fragile qui peut tomber au passage d'un meuble.",
      },
      concept: "Préparer le passage d'un gros meuble",
      explain: "Un galley est large, lourd et traîne derrière lui un chariot de manutention : tout ce qui est posé dans son chemin ou contre le vantail ouvert le gêne ou le met en danger. La passerelle, la protection de seuil, le chariot rangé et le bac à déchets sont à leur place ; la visserie au sol est un autre problème (objet étranger) qui ne barre pas le passage d'un meuble." },
    { id: 'a4-q7', type: 'input',
      q: "Lis le relevé fictif. Dans quel état est le toboggan de la porte avant gauche ? Écris un seul mot.",
      doc: {
        title: "Relevé d'état des portes — document fictif pédagogique",
        table: {
          head: ["Porte", "Passerelle", "Toboggan", "Seuil protégé"],
          rows: [["Avant gauche", "Accostée", "Désarmé", "Oui"], ["Arrière gauche", "Non", "Armé", "Non"], ["Avant droite", "Non", "Désarmé", "Non"]],
        },
        note: "Document inventé pour l'exercice. L'état d'armement réel se lit sur la porte et dans le dossier de l'avion.",
      },
      answers: ['désarmé', 'desarme', 'désarmée'],
      concept: "Lire l'état d'armement d'une porte",
      explain: "La ligne « Avant gauche » donne « Désarmé » : l'ouverture de cette porte ne gonflera pas son toboggan. À l'inverse, la porte arrière gauche est armée : l'ouvrir déclencherait le toboggan, et seule une personne habilitée peut le désarmer. C'est pour cela que l'état d'armement se contrôle et se note avant toute intervention près d'une porte." },
    { id: 'a4-q8', type: 'mcq',
      q: "Choisis une réponse. Une vis tombe sur le plancher près du seuil. Pourquoi ne suffit-il pas de la pousser du pied vers le coin ?",
      options: [
        { t: "Parce qu'elle risque de rouler dans le seuil ou sous le plancher et d'y rester oubliée, alors que c'est un objet étranger.", ok: true, why: "Les rainures du seuil et du plancher cachent les petits objets. Il faut la ramasser, pas la déplacer." },
        { t: "Parce qu'elle abîmerait le plancher en glissant.", ok: false, why: "Le risque n'est pas la rayure mais l'objet qui disparaît et qu'on ne retrouvera plus." },
        { t: "Parce qu'une vis n'a pas de valeur et qu'il faut la jeter.", ok: false, why: "Une vis dont on ignore l'origine ne se jette pas : on la déclare, car elle peut venir d'un montage en cours." },
        { t: "Parce qu'une porte ouverte aspire les petits objets.", ok: false, why: "Rien de tel : c'est la gravité et la forme des rainures qui comptent." },
      ],
      concept: "Objet étranger près d'une porte",
      explain: "Les rainures du seuil et des rails sont des pièges à petits objets. La bonne réaction est de ramasser tout de suite, de montrer, de déclarer si l'objet n'est pas identifié : on ne le déplace ni ne l'ignore." },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "L'avion se découpe, du nez à la queue, en radôme, poste de pilotage, cabine au-dessus du plancher, baie avionique et soutes dessous, caisson de voilure et logement de train au milieu, puis fond étanche arrière et cône arrière.",
    "La zone pressurisée va de la cloison étanche avant au fond étanche arrière et contient, sur la plupart des avions de ligne, le poste de pilotage, la cabine et les soutes ; radôme, cône arrière, logement de train et caisson de voilure sont hors pression.",
    "Une porte d'avion de ligne est conçue pour que la pression la plaque contre son cadre : elle ne s'ouvre pas en vol. Son levier d'armement décide si l'ouverture déclenche le toboggan : on ne le touche pas sans formation ni autorisation.",
    "Les portes passagers et de service sont aussi des issues ; la porte de soute ne donne pas dans la cabine ; l'issue sur l'aile ne sert qu'à évacuer. Le nombre de passagers est limité par les issues.",
    "On ne bloque jamais une issue, même avion à l'arrêt, cabine vide : ni le vantail, ni l'espace devant, ni le passage, ni les signes. Les matériels de chantier ont leur place ailleurs.",
    "La zone des portes est un lieu de coactivité et de FOD : on protège le seuil, on range hors du passage, on ramasse et on déclare ce qui tombe.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'b1', teaser: "Tu sais où est la cabine et comment on y entre et on en sort. Au chapitre suivant, tu l'ouvres : sièges, rails, plafonds, bagageries, galleys, toilettes. Tu les vois sur une même coupe, tu les ranges en quatre niveaux (structure, habillage, équipement, système) et tu apprends qui tient quoi." },

  // Oral blanc ─────────────────────────────────────────────────────
  oral: [
    {
      q: "Explique à un collègue pourquoi on ne bloque jamais une issue, même quand l'avion est vide en chantier.",
      expected: ["Une issue sert aussi au sol : incendie, malaise, blessé", "Le chemin et le débattement de la porte doivent rester libres, pas seulement la porte", "Le matériel de chantier a sa place hors des passages"],
      model: "Parce qu'une issue ne sert pas qu'aux passagers. Sur un chantier, un début d'incendie, un malaise ou un blessé demandent la même chose : sortir vite, et que les secours entrent vite. Et ce n'est pas seulement la porte qui doit être libre : c'est le chemin qui y mène, l'espace où elle s'ouvre, les signes lumineux. Donc chariots, cartons et câbles ont leur place hors du passage, et si je vois quelque chose qui le gêne, je le règle tout de suite ou je préviens celui qui l'a posé.",
    },
    {
      q: "Quelles sont les différences entre une porte passagers et une porte de soute ?",
      expected: ["La porte passagers donne dans la cabine ; c'est une issue", "La porte de soute est plus basse et donne sous le plancher", "Une porte passagers a un toboggan ; la porte de soute sert au chargement"],
      model: "La porte passagers est une porte de cabine : on y embarque, on y débarque, c'est une issue, et elle porte un toboggan d'évacuation. La porte de soute est plus basse : elle ouvre sur la soute, sous le plancher, et sert à charger bagages et fret. Elle ne donne pas dans la cabine. Si je dois entrer en cabine, je passe par une porte passagers ou de service ; la porte de soute n'est pas pour moi, sauf consigne.",
    },
    {
      q: "Décris ce qui est pressurisé et ce qui ne l'est pas dans un avion de ligne, et pourquoi cela compte pour un intégrateur.",
      expected: ["La zone pressurisée va de la cloison avant au fond arrière : cockpit, cabine, soutes", "Radôme, cône arrière, logement de train sont hors pression", "Ce que j'installe en cabine vit sous la peau qui travaille : pas de trou, pas de saleté"],
      model: "La zone pressurisée est limitée par la cloison étanche avant et le fond étanche arrière. Dedans, il y a le poste de pilotage, la cabine et, sur la plupart des avions de ligne, les soutes. Dehors : le radôme, le cône arrière, le logement de train et le caisson de voilure. Pour moi, ça compte parce que tout ce que je pose en cabine est sous une peau qui est tendue à chaque vol : on ne perce pas sans prescription, et on ne laisse rien qui gêne une étanchéité.",
    },
  ],

  // Matrice de certification ───────────────────────────────────────
  matrix: [
    { savoir: "Les volumes de l'avion (poste de pilotage, cabine, soutes, baies, cloisons étanches) et la limite de la zone pressurisée.", savoirFaire: "Situer une intervention dans le bon volume et reconnaître ce qui est de ton périmètre ou non.", comp: 'C1', ex: ['a4-a1', 'a4-a2', 'a4-q5'], proof: "Réussite des exercices d'identification sur la figure et de classement des volumes." },
    { savoir: "Les familles de portes et d'issues, les éléments d'une zone de porte, le rôle du levier d'armement.", savoirFaire: "Reconnaître une porte, une issue et ses éléments sur un schéma, et lire un état de porte dans un relevé fictif.", comp: 'C1', ex: ['a4-a3', 'a4-q2', 'a4-q3', 'a4-q7'], proof: "Identification des éléments d'une porte et lecture d'un relevé d'état fictif." },
    { savoir: "Les principes de dégagement des issues, la coactivité en zone de porte, l'introduction au FOD.", savoirFaire: "Repérer ce qui bloque une issue ou crée un objet étranger, et choisir la bonne réaction.", comp: 'C1', ex: ['a4-a4', 'a4-q4', 'a4-q6', 'a4-q8'], proof: "Détection des anomalies d'une zone de porte fictive ; décisions argumentées aux situations." },
  ],
});
