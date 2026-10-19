// Chapitre g2 — FOD : prévenir, inventorier, réagir (domaine G)
CA.addChapter({
  id: 'g2',
  domain: 'G',
  order: 290,
  title: "FOD : prévenir, inventorier, réagir",
  short: "Poches, caisse, consommables, nettoyage, outil manquant, contrôle final",
  minutes: 45,
  comps: ['C1', 'C4'],
  prereq: ['g1'],
  sources: ['ntsb-sa-054-fod', 'skybrary-dirty-dozen', 'skybrary-fod', 'sae-as9146', 'wiki-debris-aeronautique', 'cqpm-0289-observatoire', 'rncp40664', 'rmbd-original'],

  objectives: [
    "Préparer ta tenue et ton poste pour qu'aucun objet non compté n'entre dans la zone de travail.",
    "Réaliser un inventaire d'entrée et un inventaire de sortie (outils, consommables, protections) et interpréter un écart.",
    "Dérouler dans l'ordre la réaction à la perte d'un outil ou d'un élément : figer, informer, chercher, déclarer.",
    "Justifier le choix de l'aspiration plutôt que du soufflage pour nettoyer une zone.",
    "Interrompre puis reprendre une tâche en laissant un état lisible par quelqu'un d'autre.",
    "Mener le contrôle final d'une zone avant fermeture et traiter un objet que tu ne sais pas identifier.",
  ],

  why: [
    "Au chapitre précédent, tu as vu ce qu'un corps étranger peut faire à un avion. Ici, on passe à la pratique, et elle tient en une idée de comptable : **tout ce qui entre dans la zone doit en ressortir, ou avoir été posé sur l'avion parce que le dossier le demande**. Un outil, une vis, une chute de collier, un bouchon, un chiffon, ta montre : chacun de ces objets est soit compté, soit déjà perdu sans que tu le saches.",
    "La cabine a une particularité qui rend ce compte urgent : elle se **referme couche par couche**. Un panneau de plancher, puis un habillage de paroi, puis un plafond. Chaque fermeture transforme un oubli visible en oubli invisible. Tant que la cavité est ouverte, une chute de collier se ramasse en trois secondes. Une fois le panneau vissé, la retrouver demande de défaire le travail de plusieurs personnes.",
    "Ce n'est pas une manie de ton futur atelier. Le référentiel du CQP range la **recherche de FOD** parmi les critères observés pendant l'évaluation en situation de travail. Et l'alerte de sécurité publiée par l'autorité américaine d'enquête (NTSB) sur ce sujet demande exactement ce que tu vas apprendre : inventaire avant et après, contenants fermés, ouvertures protégées, nettoyage au fil de la tâche, et un second regard avant de fermer.",
  ],

  discover: {
    fig: 'g2-poches-et-objets-personnels',
    intro: "Avant de lire, regarde la personne de gauche. Elle n'a encore touché à aucun outil, et pourtant elle transporte déjà une bonne dizaine d'objets que personne n'a comptés.",
    look: [
      "Lesquels de ces objets tomberaient si elle se penchait au-dessus d'une cavité de plancher ouverte ?",
      "Lequel de ces objets doit pourtant rester sur elle pendant le travail ? Que devient-il au moment de sortir ?",
      "À droite, trois réponses différentes sont dessinées (8, 9 et 10). À quel type d'objet chacune convient-elle ?",
      "La boîte porte la mention « × 5 ». À quoi sert ce chiffre si, à la fin, il reste une vis dans la boîte ?",
    ],
  },

  explain: [
    {
      h: "Une logique de bilan : entrées = sorties + posé",
      p: [
        "Imagine la zone de travail comme une pièce dont tu tiens la porte. À l'entrée, tu notes ce qui passe. À la sortie, tu notes ce qui repasse. La différence ne peut correspondre qu'à une chose : ce que tu as **posé sur l'avion parce que l'instruction le demandait**. Douze colliers sortis du magasin, huit posés, quatre rapportés : le bilan tombe juste. Douze sortis, huit posés, trois rapportés : il en manque un, et tu le sais **avant** de fermer.",
        "Ce bilan porte sur trois familles d'objets, qui ne se comptent pas de la même façon.",
      ],
      table: {
        head: ['Famille', 'Comment elle est comptée à l\'entrée', 'Comment tu la retrouves à la sortie'],
        rows: [
          ['Outils (embouts et douilles compris)', 'Chaque outil a un logement dans la caisse ; la caisse a un nombre d\'outils connu', 'Tous les logements sont remplis, sans outil en trop'],
          ['Consommables et petite visserie', 'Quantité sortie du magasin, écrite ; contenant fermé', 'Quantité posée + quantité rapportée + chutes ramassées'],
          ['Ce que tu portes sur toi', 'Poches vidées ; il ne reste que les protections nécessaires', 'Les mêmes protections, entières (deux gants, deux branches de lunettes)'],
        ],
      },
      callout: { kind: 'info', text: "Les entreprises aéronautiques organisent tout cela dans un programme de prévention FOD ; une norme internationale, l'AS9146, en fixe les exigences générales. Les règles précises (ce qui est autorisé en zone, le modèle de fiche, qui prévenir) sont celles de ton site : tu les reçois à l'accueil sécurité et elles priment sur ce cours." },
    },
    {
      h: "Avant d'entrer : toi",
      fig: 'g2-poches-et-objets-personnels',
      p: [
        "Reprends la figure. Les objets 2 à 7 ont un point commun : ils sont entrés dans l'avion **sans figurer sur aucune liste**. Si la barrette (2) tombe dans une cavité, aucun inventaire ne sonnera l'alarme, puisque personne ne l'attendait à la sortie. C'est ce qui rend l'objet personnel plus sournois que l'outil : l'outil qui manque laisse un logement vide, la pièce de monnaie ne laisse rien.",
        "La réponse tient en trois verbes, dessinés à droite.",
      ],
      list: [
        "**Déposer** (8) : ce qui ne sert pas au travail reste hors de la zone, dans le bac ou le casier prévu. Téléphone, clés, monnaie, montre, bague, bijoux. Une bague a une raison de plus de rester au vestiaire : elle peut s'accrocher à une pièce pendant que ta main, elle, continue d'avancer.",
        "**Attacher** (9) : l'outil que tu utilises au-dessus d'une ouverture ou en hauteur se relie au poignet ou à la ceinture par une [[Longe porte-outil]]. S'il t'échappe, il pend au bout de son fil au lieu de disparaître derrière un panneau.",
        "**Compter** (10) : ce qui doit entrer (les cinq vis de la tâche, tes lunettes de protection, tes gants) est connu en nombre, et se recompte à la sortie.",
      ],
      callout: { kind: 'tip', text: "Le geste d'entrée dure dix secondes : tu tapotes chaque poche de haut en bas (poitrine, hanches, cuisses) et tu la vides. Les poches à rabat ou à fermeture ne dispensent pas de les vider : une poche fermée pleine de monnaie s'ouvrira bien un jour." },
    },
    {
      h: "Avant d'entrer : ta caisse",
      fig: 'g2-inventaire-caisse',
      p: [
        "Regarde le tiroir. C'est une [[Caisse à empreintes]] : la mousse est découpée à la forme exacte de chaque outil, et le fond de la découpe est d'une couleur vive. Tant que l'outil est en place, tu vois l'outil. Dès qu'il manque, tu vois une tache orange à sa forme. Tu n'as pas besoin de te souvenir de ce que contient la caisse : c'est elle qui te le dit.",
        "Faire l'[[Inventaire d'outillage]], c'est donc comparer trois choses : ce que tu vois, les logements, et le nombre écrit sur l'étiquette (ici la caisse fictive `EX-C12`, 16 outils). Sur la figure, la comparaison révèle trois écarts.",
      ],
      list: [
        "**Un logement de douille vide** (3). Si tu constates cela **avant** d'entrer en zone, tu le signales et tu ne pars pas avec une caisse incomplète : sinon, à la sortie, tu ne sauras plus si la douille manquait déjà ou si tu viens de la perdre dans l'avion.",
        "**Un embout absent du porte-embouts** (4). Un embout mesure deux ou trois centimètres, mais il a exactement le même statut qu'un cliquet : un outil compté.",
        "**Une clé plate posée sur la mousse** (10). Elle n'a pas de logement ici. Un outil en trop est un [[Écart d'inventaire]] au même titre qu'un outil en moins : cette clé manque à quelqu'un, et comme elle n'appartient pas à ta caisse, tu ne penseras pas à la recompter.",
      ],
      callout: { kind: 'warn', text: "Un outil qui casse entre dans la même logique. Une lame de tournevis ébréchée ou un embout à la pointe cassée, c'est un morceau de métal quelque part dans la zone : on le cherche comme un outil manquant, on ne se contente pas de remplacer l'outil." },
    },
    {
      h: "Pendant : consommables, chutes et ouvertures",
      p: [
        "Un [[Consommable]] est ce que la tâche use ou laisse sur l'avion : colliers, adhésif de masquage, chiffons, visserie. Trois habitudes suffisent à garder le compte.",
        "**Tu ne prends que la quantité utile, dans un contenant fermé.** Une boîte à couvercle ou un sachet refermable, jamais une poignée de vis dans la poche. Renversée dans une cabine, une boîte ouverte de cinquante rondelles représente cinquante recherches.",
        "**Chaque geste qui coupe produit une chute.** Poser un collier, c'est couper sa queue : huit colliers posés, huit chutes à retrouver. Un collier raté que tu coupes pour le refaire compte pour deux déchets, le collier et sa chute. Le [[Bac à chutes]] reste à portée de main pendant tout le travail : la chute passe de la pince au bac, sans étape « posée là un instant ».",
        "**Tu ramasses au moment où ça tombe.** C'est le [[Nettoyage au fur et à mesure]]. La raison est simple : à l'instant où la vis t'échappe, tu l'as entendue rebondir et tu sais qu'elle est à moins d'un mètre. Deux heures plus tard, des gens ont marché, un chariot est passé, et la zone à fouiller est devenue toute la cabine.",
        "Reste à empêcher un objet d'aller là où tu ne pourras pas le suivre. La gorge d'un rail de siège, l'extrémité d'une tuyauterie, l'entrée d'un conduit d'air, un connecteur débranché, une cavité de plancher : toute ouverture proche de ton travail se ferme, avec un cache, une bâche ou un [[Obturateur]]. Deux précisions comptent. D'abord, la protection que **tu** poses entre dans ton bilan : deux bouchons posés, deux bouchons retirés et comptés, sinon c'est le bouchon qui devient le corps étranger. Ensuite, les bouchons **livrés sur une pièce neuve** ne t'appartiennent pas : c'est l'instruction de travail qui dit à quel moment on les retire.",
      ],
    },
    {
      h: "Nettoyer : pourquoi on aspire au lieu de souffler",
      fig: 'g2-aspirer-ou-souffler',
      p: [
        "La [[Soufflette]] (1) est tentante : un coup de gâchette et le plancher est net. Regarde pourtant où vont les copeaux. Le jet (2) ne les retire pas de l'avion, il les **déplace**. L'un part en l'air (3), vers tes yeux ou vers la surface propre du voisin. L'autre trouve l'interstice (4) et finit sur un faisceau, sous le plancher (5). La zone a l'air propre ; elle est seulement devenue impossible à vérifier.",
        "L'[[Aspiration]] fait l'inverse. La buse (6) attire le débris vers elle et l'envoie dans la cuve (7). Ce qui est dans la cuve n'est plus dans l'avion, et tu peux le prouver : si une vis manque à ton bilan, ouvrir la cuve fait partie de la recherche.",
        "Dans la pratique, le nettoyage suit toujours le même trajet : **du haut vers le bas, et du fond de la zone vers la sortie**, pour ne pas faire retomber de poussière sur ce qui est déjà propre.",
      ],
      list: [
        "D'abord les objets visibles, à la main, un par un, dans le bac à chutes : c'est le seul moment où tu peux les reconnaître et les compter.",
        "Ensuite l'aspirateur, buse au contact, en insistant sur les gorges de rail, les angles et le pied des parois.",
        "Enfin, si la tâche le prévoit, l'essuyage avec un chiffon qui ne peluche pas. Le chiffon est compté lui aussi.",
      ],
      callout: { kind: 'warn', text: "Deux faux amis. L'aimant télescopique ne ramasse ni l'aluminium, ni le titane, ni le plastique : un passage d'aimant « sans rien » ne prouve rien. Et l'air comprimé n'est employé pour nettoyer que si un document de travail le demande expressément, à l'endroit et de la façon qu'il indique." },
    },
    {
      h: "Interrompre et reprendre sans trou de mémoire",
      fig: 'g2-reprise-tache',
      p: [
        "On t'appelle pour aider à porter un siège. Tu poses ton cliquet et tu y vas : cinq minutes, penses-tu. Tu reviens quarante minutes plus tard. La figure montre le problème : les trois premières vis (1) sont en appui, les deux dernières (3) dépassent encore. Et la quatrième (2) ? Elle est en appui. A-t-elle reçu son serrage final, ou l'avais-tu seulement approchée ? **Rien de visible ne distingue une vis serrée d'une vis posée.** La distraction figure dans la liste classique des douze facteurs humains à l'origine d'erreurs de maintenance, précisément pour cette raison : on reprend là où l'on croit s'être arrêté.",
        "Une interruption se prépare donc en partant, pas en revenant. Quatre gestes, tous dessinés :",
      ],
      list: [
        "**Marquer l'endroit exact** avec un [[Repère de reprise]] (4), ou mieux, terminer le geste en cours avant de partir quand c'est possible : une vis est soit finie, soit pas commencée.",
        "**Signaler** que le travail n'est pas terminé (5), pour que personne ne referme, ne recouvre ou ne s'appuie dessus.",
        "**Fermer** ce qui est ouvert (6) et **ranger** : inventaire de la caisse (8), bac à chutes vidé de ce qui traîne. Aucun outil ne reste posé sur l'avion en ton absence.",
        "**Écrire** l'état réel dans une [[Note de passation]] (7) si quelqu'un d'autre peut reprendre : ce qui est fait, ce qui reste, et surtout ce qui est en doute.",
      ],
      callout: { kind: 'tip', text: "À la reprise, l'alerte du NTSB donne une règle très simple : après une distraction, reviens trois étapes en arrière avant de repartir. Tu relis l'instruction à partir de là et tu revérifies ce que tu croyais acquis. Une vis dont l'état est inconnu se traite comme une vis non faite ; la façon de la reprendre (desserrer, resserrer, à quelle valeur) est dans l'instruction, pas dans ton poignet." },
    },
    {
      h: "Le compte est faux : la réaction",
      fig: 'g2-outil-perdu-decisions',
      p: [
        "Fin de tâche. Tu refais l'inventaire et un logement reste orange. L'arbre de la figure se lit de haut en bas, et chaque case a sa raison.",
        "**Figer** (3). Tu crées une [[Zone figée]] : plus rien ne se ferme, plus rien ne se déplace, rien ne sort. Pas pour faire du théâtre : chaque panneau refermé, chaque bac emporté, chaque chariot déplacé agrandit l'endroit où l'outil peut être. Tu gardes le problème petit.",
        "**Informer** (4), tout de suite, ton responsable et les personnes qui travaillent à côté. Tout de suite, parce que ce sont peut-être elles qui s'apprêtent à visser le panneau sous lequel se trouve ton embout. Un outil déclaré est un incident banal, prévu par l'organisation. Un outil tu devient une faute, et un danger que plus personne ne cherche.",
        "**Chercher par zones** (5), du plus probable au moins probable, en annonçant chaque zone terminée : le dernier endroit où tu t'es servi de l'outil, puis ton trajet, tes poches et tes vêtements, la caisse des voisins (un outil rangé par erreur dans le logement d'un autre), le bac à chutes, la cuve de l'aspirateur, les emballages déjà évacués, la pièce ou le chariot qui ont quitté la zone entre-temps.",
        "**Retrouvé ?** (6) Si oui, tu vérifies qu'il est **entier** (7), tu le remets dans son logement et l'événement est tracé comme ton site le prévoit. Si non (8), la zone ne se ferme pas et la décision ne t'appartient plus : rouvrir des panneaux, faire venir un moyen d'inspection, statuer, c'est le rôle du responsable et de la qualité.",
      ],
      callout: { kind: 'warn', text: "La fausse bonne idée : aller chercher au magasin un embout identique pour « compléter la caisse ». Le logement est rempli, le compte est juste, et l'embout d'origine est toujours dans l'avion. Tu n'as pas résolu l'écart, tu l'as effacé." },
    },
    {
      h: "Contrôle final : ce qui doit être là, ce qui ne doit pas",
      fig: 'g2-zone-controle-final',
      p: [
        "Le [[Contrôle final de zone]] est le dernier moment où la cavité est encore ouverte. Il ne consiste pas à « jeter un œil » : tu balaies la zone dans un ordre fixe, lampe en main, en te posant devant chaque chose la même question : **est-ce que cela fait partie de l'avion ?**",
        "Sur la figure, le faisceau (3), ses colliers (4), son étiquette (5), les vis du panneau voisin (6) et la ferrure (7) sont à leur place. La vis couchée dans le rail (8), la chute de collier (9), le chiffon (10), l'embout (11) et le sachet (12) ne le sont pas. Remarque que les objets étrangers ne sont pas les plus voyants : la vis a la couleur du rail, le sachet est transparent, le chiffon ressemble à un matelas isolant.",
        "Trois techniques rendent le regard efficace. La **lumière rasante** : la lampe tenue presque à plat fait briller le métal et allonge l'ombre du moindre objet. Le **miroir** pour le dessous d'un faisceau et l'arrière d'un rebord. Et le [[Second regard]] : une autre personne refait le tour, parce que tu as vu cette zone pendant deux heures et que ton œil ne la lit plus.",
        "Reste le cas de l'[[Objet non identifié]] : une rondelle sous le faisceau alors que tu n'en as utilisé aucune. Ce n'est pas un simple déchet. Soit elle a été apportée par quelqu'un dont le compte est faux, soit elle **vient de l'avion** et une fixation est incomplète quelque part. Tu ne la jettes pas et tu ne la remets pas « là où elle semble aller » : tu notes l'endroit exact, tu la remets à ton responsable, et l'origine se cherche avant de fermer.",
      ],
      table: {
        head: ['Nature du constat', 'Exemples', 'Ce que tu en fais'],
        rows: [
          ['Ce qui s\'observe', 'Logement vide, chute au sol, ouverture non bouchée, compte faux', 'Tu le vois seul et tu agis seul : ramasser, boucher, recompter'],
          ['Ce qui doit être identifié', 'Objet trouvé que tu n\'as pas apporté, outil sans marquage, pièce tombée', 'Tu ne décides pas de ce que c\'est : tu le fais reconnaître'],
          ['Ce qui exige une prescription', 'Objets autorisés en zone, mode de nettoyage, moment où l\'on retire un bouchon, fermeture malgré un écart', 'Tu appliques ce qui est écrit ; sans écrit, tu demandes'],
        ],
      },
      callout: { kind: 'doc', text: "La trace. Selon le dossier, la fin de tâche comporte une ligne à renseigner : inventaire de sortie conforme, zone contrôlée, parfois le nom de la personne qui a fait le second regard. Tu signes ce que tu as réellement vérifié, au moment où tu l'as vérifié, pas le lendemain de mémoire." },
    },
  ],

  vocab: [
    { fr: "Inventaire d'outillage", en: 'Tool inventory', def: "Comparaison, avant et après la tâche, entre les outils présents et la liste ou les logements de la caisse.", tip: "Deux fois : à l'entrée et à la sortie. Un seul des deux ne prouve rien." },
    { fr: 'Caisse à empreintes', en: 'Shadow-foam toolbox', def: "Caisse dont la mousse est découpée à la forme de chaque outil, avec un fond de couleur vive visible quand l'outil manque.", tip: "L'« ombre » de l'outil reste quand l'outil est parti." },
    { fr: "Écart d'inventaire", en: 'Count discrepancy', def: "Différence entre ce qui est attendu et ce qui est présent : un outil en moins, mais aussi un outil en trop." },
    { fr: 'Longe porte-outil', en: 'Tool lanyard', def: "Lien, souvent en spirale, qui relie un outil au poignet ou à la ceinture pour qu'il ne tombe pas s'il échappe de la main." },
    { fr: 'Consommable', en: 'Consumable', def: "Produit que la tâche use ou laisse sur l'avion : collier, adhésif, chiffon, petite visserie.", tip: "Il se compte en quantité sortie, posée et rapportée." },
    { fr: 'Bac à chutes', en: 'FOD container', def: "Récipient gardé à portée de main pendant le travail, qui reçoit immédiatement chutes, emballages et protections retirées." },
    { fr: 'Nettoyage au fur et à mesure', en: 'Clean as you go', def: "Habitude de ramasser chaque chute ou objet tombé au moment où il tombe, sans attendre la fin de la tâche." },
    { fr: 'Obturateur', en: 'Blanking cap', def: "Bouchon ou cache posé sur une tuyauterie, un conduit ou un connecteur ouvert pour empêcher tout objet d'y entrer.", tip: "Couleur vive : il doit se voir pour être retiré et compté." },
    { fr: 'Soufflette', en: 'Blow gun', def: "Pistolet relié à l'air comprimé qui envoie un jet d'air ; il déplace les débris sans les retenir." },
    { fr: 'Aspiration', en: 'Vacuum cleaning', def: "Nettoyage par un aspirateur qui capte les débris dans une cuve, où l'on peut vérifier ce qui a été retiré." },
    { fr: 'Zone figée', en: 'Frozen area', def: "Zone où, après un écart d'inventaire, plus rien n'est fermé, déplacé ni sorti tant que la recherche n'est pas terminée." },
    { fr: 'Repère de reprise', en: 'Restart marker', def: "Marque posée à l'endroit exact où une tâche est interrompue, pour reprendre sans se fier à sa mémoire." },
    { fr: 'Note de passation', en: 'Handover note', def: "Écrit laissé à la personne qui reprend le travail : ce qui est fait, ce qui reste, ce qui est en doute." },
    { fr: 'Contrôle final de zone', en: 'Final area inspection', def: "Examen méthodique de la zone, lampe en main, juste avant de la refermer, pour vérifier qu'il n'y reste rien d'étranger." },
    { fr: 'Second regard', en: 'Second pair of eyes', def: "Contrôle visuel de la zone refait par une autre personne que celle qui y a travaillé." },
    { fr: 'Objet non identifié', en: 'Unidentified object', def: "Objet trouvé dans la zone dont tu ne connais ni l'origine ni le propriétaire ; il se signale, il ne se jette pas." },
  ],

  example: {
    title: "Mardi matin : huit colliers sous un plancher",
    body: [
      "7 h 10, zone arrière. Ta tâche du jour : reprendre la fixation d'un faisceau sous un panneau de plancher déposé. Avant d'entrer, tu vides tes poches dans ton casier, tu gardes lunettes et gants. Tu ouvres la caisse `EX-C12` : seize logements, seize outils. Tu l'écris sur ta feuille.",
      "Au magasin, tu sors un sachet de douze colliers. L'extrémité d'une tuyauterie débouche à trente centimètres de ton faisceau : tu y poses un obturateur rouge, puis un second sur un conduit voisin. Deux obturateurs, notés.",
      "Tu poses les colliers un par un. À chaque coupe, la chute va de la pince au bac. Au sixième, la chute saute et disparaît dans la cavité. Tu t'arrêtes là, lampe rasante : elle est contre la traverse. Trente secondes. Si tu avais continué, tu aurais cherché « une chute quelque part » à la fin, sans savoir où.",
      "8 h 05, fin de pose. Le bilan : huit colliers sur le faisceau, quatre dans le sachet, huit chutes dans le bac. Deux obturateurs retirés, deux dans ta main. Un chiffon sorti, un chiffon rentré. Caisse : seize sur seize. Tu demandes à ta voisine de zone de refaire le tour avec sa lampe ; elle te montre un bout d'adhésif collé sous le rebord du panneau voisin, que tu ne voyais plus. Maintenant seulement, le panneau peut être refermé et la ligne « zone contrôlée » renseignée.",
    ],
    doc: {
      title: "Feuille d'inventaire de poste — document fictif pédagogique",
      lines: [
        ['Caisse', 'EX-C12 — 16 outils'],
        ['Entrée en zone', '07 h 10 — 16 outils comptés'],
        ['Sortie de zone', '08 h 05 — 16 outils comptés'],
        ['Protections portées', '1 paire de lunettes, 1 paire de gants (entrée et sortie)'],
      ],
      table: {
        head: ['Article', 'Sorti', 'Posé sur avion', 'Rapporté', 'Chutes'],
        rows: [
          ['Colliers (sachet EX-COL-08)', '12', '8', '4', '8'],
          ['Obturateurs rouges', '2', '0', '2', '—'],
          ['Chiffon', '1', '0', '1', '—'],
        ],
      },
      note: "Feuille inventée pour ce cours. Le modèle réel, quand il existe, est celui de ton entreprise.",
    },
  },

  demo: {
    title: "Le contrôle final, zone par zone",
    fig: 'g2-zone-controle-final',
    steps: [
      { label: "Fixer le sens du balayage", text: "Tu pars du haut de la figure (la paroi) et tu descends vers toi, bande par bande, de gauche à droite. Un ordre fixe t'évite de regarder deux fois ce qui t'attire l'œil et jamais les coins. La grille de bas de paroi vient en premier : lampe à travers les fentes.", hl: ['grille'] },
      { label: "Reconnaître ce qui est à sa place", text: "Avant de chercher l'intrus, tu identifies ce qui doit être là : le faisceau, ses deux colliers, son étiquette, les quatre vis du panneau voisin. Ce sont tes références. L'étiquette du faisceau n'est pas un papier oublié : on ne l'arrache pas.", hl: ['faisceau', 'collier-pose', 'etiquette', 'vis-panneau'] },
      { label: "Les gorges de rail", text: "Lampe tenue presque à plat, tu suis chaque rail d'un bout à l'autre. La vis couchée dans la gorge a la couleur du rail : c'est son ombre que tu repères, pas elle. Tu la sors à la main, tu ne la pousses pas le long du rail.", hl: ['rail', 'vis-rail'] },
      { label: "La cavité ouverte", text: "Tu regardes sur le faisceau, puis dessous au miroir, puis le long de la traverse. La chute de collier se ramasse ; le chiffon aussi, et tu vérifies qu'il correspond bien au chiffon sorti ce matin. Tu ne tires pas sur le faisceau pour voir derrière.", hl: ['chute-collier', 'chiffon'] },
      { label: "Le plancher autour", text: "L'embout est petit et sombre, le sachet est transparent. L'embout pose une seconde question : de quelle caisse vient-il ? Si ce n'est pas de la tienne, quelqu'un a un écart d'inventaire et doit le savoir.", hl: ['embout', 'sachet'] },
      { label: "Ce qui masque", text: "La ferrure de siège couvre une portion de gorge que plus personne ne verra. Ce qui se pose par-dessus une zone se pose après le contrôle de cette zone, jamais avant. Si c'est déjà fait, tu le signales au lieu de supposer que c'était propre.", hl: ['ferrure', 'rail'] },
      { label: "Recompter, faire regarder, tracer", text: "Cinq objets retirés. Tu refais ton bilan : outils, colliers et chutes, obturateurs, chiffon. Puis tu demandes un second regard. La zone ne se ferme et la ligne de contrôle ne se signe qu'après ces trois gestes.", hl: [] },
    ],
  },

  activities: [
    {
      id: 'g2-a1', type: 'sort', concept: "Déposer, attacher, compter",
      fig: 'g2-poches-et-objets-personnels',
      q: "Classe chaque objet dans la bonne colonne, pour une personne qui va travailler au-dessus d'une cavité de plancher ouverte.",
      bins: ['Déposer hors de la zone', 'Emporter, attaché ou enfermé', 'Emporter et recompter en sortant'],
      items: [
        { t: "Clés de voiture et monnaie", bin: 0, why: "Aucune utilité pour la tâche, et personne ne les attend à la sortie : si elles tombent, rien ne le signalera." },
        { t: "Montre et bague", bin: 0, why: "Elles peuvent se détacher, rayer une surface ou s'accrocher à une pièce. Elles restent au vestiaire." },
        { t: "Téléphone personnel", bin: 0, why: "Il glisse d'une poche quand on s'accroupit et il détourne l'attention. Il attend dans le casier (sauf appareil de travail prévu par ton site)." },
        { t: "Tournevis utilisé au-dessus de la cavité", bin: 1, why: "Il est nécessaire, donc il entre ; mais relié par une longe, il ne peut pas tomber dans l'ouverture." },
        { t: "Les cinq vis prévues par la tâche", bin: 1, why: "Dans une boîte fermée dont la quantité est connue : ni en vrac, ni dans une poche." },
        { t: "Lunettes de protection", bin: 2, why: "Elles sont nécessaires et se portent ; à la sortie, tu vérifies qu'elles sont là et entières (branches, verres)." },
        { t: "Paire de gants", bin: 2, why: "Deux gants à l'entrée, deux gants à la sortie : un gant retiré « pour mieux sentir » est vite posé dans une cavité." },
      ],
      explain: "Trois réponses pour trois situations. Ce qui ne sert pas reste dehors. Ce qui sert et peut tomber est attaché ou enfermé dans un contenant compté. Ce que tu portes par nécessité entre dans ton bilan et se recompte à la sortie, comme le recommande l'alerte du NTSB pour les équipements de protection.",
    },
    {
      id: 'g2-a2', type: 'hotfind', concept: "Lire une caisse à empreintes",
      fig: 'g2-inventaire-caisse',
      q: "Tu fais l'inventaire d'entrée de ce tiroir. Touche les trois endroits qui t'empêchent de partir en zone avec cette caisse.",
      targets: ['douilles', 'embouts', 'intrus'],
      notes: {
        douilles: "Le quatrième logement est entièrement orange : une douille manque. Signalée maintenant, c'est une douille à retrouver à l'atelier ; découverte à la sortie, ce serait une douille à chercher dans l'avion.",
        embouts: "Trois embouts pour quatre logements. Petit outil, même statut : il compte dans les seize.",
        intrus: "Cette clé plate n'a pas de logement dans ce tiroir. Elle manque à une autre caisse, et tu ne penserais pas à la recompter en sortant.",
      },
      explain: "Une caisse se lit en cherchant l'orange (ce qui manque) puis ce qui dépasse (ce qui est en trop). Ici deux manques et un outil étranger : trois écarts pour une caisse annoncée à seize outils, qui n'en contient que quatorze à elle. On règle l'écart avant d'entrer, pas après.",
    },
    {
      id: 'g2-a3', type: 'order', concept: "Réaction à un outil manquant",
      q: "Fin de tâche : un logement de ta caisse est vide. Remets tes réactions dans l'ordre, de la première à la dernière.",
      items: [
        "Recompter une fois, calmement, pour confirmer que l'outil manque vraiment",
        "Figer la zone : rien ne se ferme, rien ne se déplace, rien ne sort",
        "Prévenir ton responsable et les personnes qui travaillent à côté",
        "Chercher zone par zone, en commençant par le dernier endroit d'utilisation",
        "Une fois l'outil retrouvé, vérifier qu'il est entier",
        "Remettre l'outil dans son logement et tracer l'événement",
      ],
      explain: "On confirme d'abord l'écart (un outil glissé sous un autre, cela arrive). Puis on fige avant d'informer, parce qu'un panneau refermé pendant que tu cherches ton responsable agrandit la recherche. On informe avant de chercher longtemps seul : les voisins peuvent être sur le point de fermer, et ils peuvent aider. La vérification « entier » vient avant le rangement : un outil cassé signifie qu'un morceau reste à trouver.",
    },
    {
      id: 'g2-a4', type: 'hottap', concept: "Laisser un poste interrompu lisible",
      fig: 'g2-reprise-tache',
      q: "Tu as été interrompue pendant quarante minutes. Touche sur la figure l'élément qui répond à chaque question.",
      targets: [
        { prompt: "Quelle vis ne peut pas être considérée comme terminée, bien qu'elle soit en appui ?", part: 'vis-doute' },
        { prompt: "Qu'est-ce qui empêche un collègue de recouvrir ce panneau en croyant qu'il est fini ?", part: 'balise' },
        { prompt: "Qu'est-ce qui empêche une chute de collier d'entrer dans la tuyauterie pendant ton absence ?", part: 'obturateur' },
        { prompt: "Où est écrit ce qui reste à faire, pour la personne qui reprendrait à ta place ?", part: 'note' },
      ],
      explain: "Un poste interrompu doit pouvoir être compris sans toi. La vis au repère est en appui, mais son serrage est inconnu : on la traite comme non faite. La balise parle à ceux qui passent, l'obturateur protège l'ouverture, la note parle à celui qui reprend. La caisse refermée garantit qu'aucun outil n'est resté sur l'avion.",
    },
  ],

  mistakes: [
    { error: "Faire l'inventaire seulement à la fin de la tâche.", why: "Sans inventaire d'entrée, un logement vide à la sortie ne dit pas si l'outil manquait déjà ce matin ou s'il est dans l'avion. Tu ne peux ni fermer ni chercher intelligemment.", better: "Deux inventaires, écrits : un avant d'entrer, un avant de fermer. Le premier donne sa valeur au second." },
    { error: "Remplacer discrètement un outil perdu par un outil identique.", why: "Le compte redevient juste sur le papier, mais l'outil d'origine est toujours dans la zone. L'écart n'est pas résolu, il est caché.", better: "Déclarer l'écart, chercher, et ne compléter la caisse qu'une fois l'outil retrouvé ou la décision prise par le responsable." },
    { error: "Garder les chutes de collier dans une poche « pour les jeter plus tard ».", why: "Une poche n'est pas un contenant : elle se vide quand tu te penches, et tu ne sais plus combien elle en contenait.", better: "Bac à chutes à portée de main ; la chute va de la pince au bac, et le nombre de chutes égale le nombre de colliers posés." },
    { error: "Donner un coup de soufflette pour finir plus vite.", why: "Le jet envoie les débris là où tu ne les vois plus : sous le plancher, derrière un habillage, dans un connecteur ouvert. La zone paraît propre et ne l'est pas.", better: "Ramasser à la main ce qui se voit, aspirer le reste, et vérifier la cuve si un objet manque au bilan." },
    { error: "Poser un outil sur un siège, un rebord de hatrack ou dans une cavité « le temps de »...", why: "L'outil sort de ton champ de vision au moment où ton attention passe à autre chose. C'est le début classique d'un outil oublié.", better: "Un outil n'a que deux places : ta main ou son logement. Si la caisse est trop loin, c'est la caisse qu'on rapproche." },
    { error: "Reprendre après une interruption à l'endroit où tu penses t'être arrêtée.", why: "La mémoire reconstruit : tu te souviens d'avoir « fait la quatrième » parce que tu avais l'intention de la faire.", better: "Marquer avant de partir ; au retour, revenir trois étapes en arrière et revérifier selon l'instruction." },
    { error: "Jeter au bac un objet trouvé que tu ne reconnais pas.", why: "Tu détruis une information : soit le compte de quelqu'un est faux, soit une pièce de l'avion s'est détachée. Dans les deux cas, quelqu'un doit le savoir.", better: "Noter l'endroit exact, remettre l'objet au responsable, et laisser l'origine être établie avant la fermeture." },
    { error: "Signer la ligne « zone contrôlée » avant d'avoir refait le tour, parce que « tu as fait attention ».", why: "Faire attention pendant deux heures n'est pas un contrôle : l'œil habitué ne voit plus le sachet transparent ni la vis couleur de rail.", better: "Contrôle final dans un ordre fixe, lampe rasante, puis second regard ; la signature vient après." },
  ],

  situations: [
    {
      title: "18 h 40 : l'embout qui manque",
      fig: 'g2-inventaire-caisse',
      context: [
        "Fin de poste. Tu viens de terminer une fixation sous un panneau de plancher, à l'arrière de la cabine. Rémi, ton collègue, a déjà présenté le panneau et tient sa visseuse : il attend ton feu vert pour refermer.",
        "Tu fais ton inventaire de sortie. Quinze outils sur seize : un logement du porte-embouts est vide. Ce matin, à l'entrée, tu avais noté seize.",
        "Rémi regarde l'heure : « Il doit être dans ta poche ou resté sur l'établi. On ferme, tu regarderas demain matin. Franchement, un embout… »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Tu demandes à Rémi de ne pas visser, tu préviens le responsable, et vous cherchez en commençant par la cavité, tes poches et le bac à chutes.", ok: true, why: "Le panneau est encore ouvert : c'est le seul moment où la recherche coûte quelques minutes. Fermer d'abord, c'est rendre la cavité invérifiable ; prévenir, c'est aussi obtenir de l'aide et une décision si l'embout reste introuvable." },
        { t: "Tu laisses Rémi fermer et tu notes sur ta feuille « embout à rechercher demain ».", why: "Demain, si l'embout n'est ni dans ta poche ni sur l'établi, il faudra redéposer le panneau, et peut-être d'autres posés par-dessus dans la nuit. La note ne retire pas l'embout de l'avion." },
        { t: "Tu fouilles tes poches ; ne trouvant rien, tu prends un embout identique au magasin pour que la caisse soit complète, puis vous fermez.", why: "La caisse est complète, l'avion ne l'est pas : l'embout d'origine n'a pas bougé. Tu as fait disparaître la seule alarme qui signalait le problème." },
        { t: "Tu cherches seule, sans rien dire, pendant que Rémi va aider une autre équipe ; tu le rappelleras pour fermer.", why: "Chercher est juste, mais se taire ne l'est pas : personne ne sait que la zone est figée, quelqu'un d'autre peut la refermer, et tu te prives d'un second regard." },
      ],
      debrief: "Le raisonnement de Rémi est celui de la fin de journée : l'objet est petit, l'heure est tardive, l'hypothèse « dans la poche » est confortable. Mais un inventaire d'entrée à seize et de sortie à quinze ne laisse que deux possibilités : l'embout est retrouvé, ou il est déclaré. Tant que la cavité est ouverte, la recherche est simple. La règle de métier : on ne ferme jamais sur un compte faux, et la décision de fermer malgré un outil introuvable n'appartient ni à toi ni à Rémi.",
    },
    {
      title: "Retour de pause : où en étais-tu ?",
      fig: 'g2-reprise-tache',
      context: [
        "10 h 15. Tu fixais un panneau par six vis quand le chef d'équipe t'a demandé de venir tenir un élément de plafond à l'autre bout de la cabine. Tu as posé ton outil et tu es partie aussitôt, sans rien marquer.",
        "10 h 55. Tu reviens. Les trois premières vis sont en appui, la quatrième aussi, les deux dernières dépassent. Tu as le souvenir assez net d'avoir « fait la quatrième ». Ton outil est posé sur le siège voisin.",
        "L'instruction de travail est ouverte sur ton pupitre : elle décrit l'ordre de pose et le serrage à appliquer.",
      ],
      question: "Comment reprends-tu ?",
      options: [
        { t: "Tu recomptes d'abord ta caisse, puis tu relis l'instruction en revenant quelques étapes en arrière et tu traites la quatrième vis comme non faite, en la reprenant de la façon que l'instruction indique.", ok: true, why: "L'outil resté sur un siège pendant quarante minutes impose un inventaire avant tout. Ensuite, un souvenir n'est pas un constat : rien de visible ne prouve le serrage de la quatrième vis. L'instruction dit comment la reprendre." },
        { t: "Tu reprends à la cinquième vis : ton souvenir est net et les quatre premières sont visiblement en appui.", why: "« En appui » se voit ; « serrée à la valeur demandée » ne se voit pas. Si la quatrième n'avait été qu'approchée, le panneau sera livré avec une fixation incomplète que personne ne détectera à l'œil." },
        { t: "Par sécurité, tu redonnes un bon coup de serrage aux quatre premières vis, puis tu continues.", why: "Resserrer « un bon coup » des vis déjà serrées, c'est dépasser ce que l'instruction demande : on risque d'abîmer le filetage ou le panneau. La prudence n'autorise pas à improviser un serrage." },
        { t: "Tu demandes à ta voisine si elle se rappelle où tu en étais.", why: "Elle travaillait à sa propre tâche. Son souvenir vaut encore moins que le tien, et il ne remplace ni le repère que tu n'as pas posé ni l'instruction." },
      ],
      debrief: "Deux erreurs ont été commises au départ, pas au retour : aucun repère posé, et un outil laissé hors de sa caisse. Au retour, on ne peut plus que limiter les dégâts : inventaire d'abord, puis retour en arrière dans l'instruction, et l'état inconnu traité comme « non fait ». La prochaine fois, dix secondes suffisent avant de partir : finir la vis en cours ou la marquer, ranger l'outil, poser la balise.",
    },
  ],

  quiz: [
    {
      id: 'g2-q1', type: 'hotfind', concept: "Contrôle final de zone",
      fig: 'g2-zone-controle-final',
      q: "La cavité va être refermée. Touche les cinq objets qui ne font pas partie de l'avion.",
      targets: ['vis-rail', 'chute-collier', 'chiffon', 'embout', 'sachet'],
      notes: {
        'vis-rail': "Couchée dans la gorge, de la couleur du rail : elle ne se voit qu'en lumière rasante.",
        'chute-collier': "La queue coupée d'un collier, tombée au moment de la coupe au lieu d'aller dans le bac.",
        chiffon: "Posé dans la cavité, il ressemble à un isolant. Il doit correspondre au chiffon sorti et compté.",
        embout: "Un outil : il manque forcément à l'inventaire d'une caisse, la tienne ou une autre.",
        sachet: "Transparent sur fond clair, donc presque invisible ; un emballage se jette dès qu'il est vidé.",
      },
      explain: "Le faisceau, ses colliers, son étiquette, les vis du panneau voisin, la ferrure, les rails et la grille font partie de l'avion. Les cinq intrus ont un point commun : aucun n'est voyant. C'est pourquoi le contrôle final suit un ordre fixe et s'aide d'une lampe, au lieu de compter sur ce qui « saute aux yeux ».",
    },
    {
      id: 'g2-q2', type: 'input', concept: "Bilan des consommables",
      q: "Lis la feuille ci-dessous. Combien de colliers manquent à l'appel ? Réponds par un nombre.",
      doc: {
        title: "Feuille d'inventaire de poste — document fictif pédagogique",
        lines: [
          ['Caisse', 'EX-C07 — 14 outils, 14 comptés à l\'entrée et à la sortie'],
          ['Colliers sortis du magasin', '12 (sachet EX-COL-08)'],
          ['Colliers comptés sur le faisceau', '8'],
          ['Colliers restant dans le sachet', '3'],
          ['Chutes dans le bac', '8'],
        ],
        note: "Document inventé pour l'exercice.",
      },
      answers: ['1', 'un', '1 collier', 'un collier'],
      explain: "Douze sortis, huit posés, trois rapportés : 12 − 8 − 3 = 1. Un collier entier n'est ni sur le faisceau ni dans le sachet. Les huit chutes correspondent bien aux huit colliers posés, donc le collier manquant n'a pas été posé puis coupé : il est tombé entier, ou il a été raté et jeté sans être noté. Les outils sont justes, mais la zone ne se ferme pas pour autant : un écart de consommable se traite comme un écart d'outil.",
    },
    {
      id: 'g2-q3', type: 'mcq', concept: "Aspirer plutôt que souffler",
      fig: 'g2-aspirer-ou-souffler',
      q: "Choisis la raison principale pour laquelle on évite de nettoyer une zone de cabine à la soufflette.",
      options: [
        { t: "Le jet déplace les débris vers des endroits qu'on ne peut plus voir ni vérifier.", ok: true, why: "C'est le cœur du problème : le débris n'est pas sorti de l'avion, il a seulement quitté ton champ de vision, par un interstice ou derrière un habillage." },
        { t: "La poussière soufflée retombe exactement au même endroit quelques secondes plus tard.", why: "Si c'était le cas, ce serait seulement inefficace. Le vrai danger est qu'elle ne retombe pas au même endroit, mais plus loin et hors de vue." },
        { t: "L'air comprimé est trop faible pour décoller les copeaux métalliques.", why: "C'est l'inverse : le jet est assez fort pour les projeter loin, y compris vers les yeux. C'est justement ce qui pose problème." },
        { t: "La soufflette est un outil qui ne figure pas dans l'inventaire de la caisse.", why: "Qu'elle soit inventoriée ou non ne change rien : le problème vient de ce qu'elle fait aux débris, pas de son statut d'outil." },
      ],
      explain: "Nettoyer, en aéronautique, veut dire retirer et pouvoir le prouver. La soufflette déplace sans retirer. L'aspirateur retire, et sa cuve peut être ouverte pour vérifier ce qu'elle contient. L'air comprimé ne s'emploie que si un document de travail le demande expressément.",
    },
    {
      id: 'g2-q4', type: 'multi', concept: "Interrompre une tâche",
      q: "On t'appelle ailleurs alors que tu as posé quatre vis sur six. Coche tout ce que tu fais avant de quitter ton poste.",
      options: [
        { t: "Terminer la vis en cours ou marquer précisément où tu t'arrêtes.", ok: true, why: "Une vis est soit finie, soit repérée : c'est ce qui évite la vis à l'état inconnu au retour." },
        { t: "Poser une balise signalant que le panneau n'est pas terminé.", ok: true, why: "Elle empêche quelqu'un de recouvrir ou de refermer un travail incomplet en le croyant fini." },
        { t: "Ranger tes outils dans la caisse et vérifier qu'elle est complète.", ok: true, why: "Aucun outil ne reste posé sur l'avion en ton absence ; si un logement est vide, tu le sais tout de suite." },
        { t: "Laisser le cliquet sur le siège voisin, douille montée, pour reprendre plus vite.", why: "Gain de dix secondes, risque d'un outil déplacé, recouvert ou oublié. Un outil est dans ta main ou dans son logement." },
        { t: "Approcher rapidement à la main les deux dernières vis, « pour avancer ».", why: "Tu crées deux vis de plus à l'état incertain : en appui, mais non serrées, sans rien qui le signale." },
        { t: "Boucher les ouvertures proches restées accessibles.", ok: true, why: "Pendant ton absence, d'autres travaillent autour : une ouverture non protégée reçoit leurs chutes." },
      ],
      explain: "Une interruption se prépare en partant. Quatre gestes : marquer, signaler, ranger et compter, fermer les ouvertures. Les deux propositions fausses ont l'air de faire gagner du temps ; elles fabriquent exactement ce qu'on cherche à éviter, un outil hors de sa place et des vis dont plus personne ne connaît l'état.",
    },
    {
      id: 'g2-q5', type: 'sort', concept: "Avion, objet étranger ou objet à identifier",
      q: "Pendant ton contrôle final, tu vois les éléments suivants. Classe chacun dans la bonne colonne.",
      bins: ['Fait partie de l\'avion : on n\'y touche pas', 'Objet étranger : je le retire et je le compte', 'À faire identifier avant de décider'],
      items: [
        { t: "Une étiquette attachée au faisceau", bin: 0, why: "Elle identifie le faisceau : elle fait partie de l'installation." },
        { t: "Un collier serré autour du faisceau", bin: 0, why: "Il tient le faisceau ; tu vérifies seulement que son nombre correspond à ton bilan." },
        { t: "La queue coupée d'un collier, au fond de la cavité", bin: 1, why: "C'est une chute de ta propre tâche : elle va au bac et entre dans ton compte de chutes." },
        { t: "Le chiffon que tu as sorti ce matin", bin: 1, why: "Tu le reconnais et il figure sur ta feuille : tu le retires, et la ligne « chiffon » est soldée." },
        { t: "Une rondelle sous le faisceau, alors que ta tâche n'en utilise aucune", bin: 2, why: "Elle vient d'une autre tâche ou d'une fixation de l'avion. La jeter effacerait l'information ; il faut en trouver l'origine." },
        { t: "Un petit clip métallique d'un modèle que tu n'as jamais vu", bin: 2, why: "Tu ne sais pas si c'est une pièce d'avion tombée de son support ou un objet apporté. Ce n'est pas à toi de trancher." },
      ],
      explain: "La question du contrôle final est toujours la même : « est-ce que cela fait partie de l'avion ? ». Quand la réponse est oui, on laisse. Quand c'est non et que l'objet vient de ta tâche, on retire et on compte. Quand tu ne sais pas répondre, l'objet se signale avec son emplacement exact : il raconte peut-être qu'une pièce manque quelque part.",
    },
    {
      id: 'g2-q6', type: 'mcq', concept: "Outil retrouvé cassé",
      q: "Après vingt minutes de recherche, tu retrouves ton embout dans la cavité. Sa pointe est cassée net. Choisis la conclusion juste.",
      options: [
        { t: "La recherche continue : un morceau de l'embout est encore quelque part dans la zone.", ok: true, why: "L'inventaire porte sur l'outil entier. Tant que la pointe n'est pas retrouvée, il reste un fragment de métal non localisé dans l'avion." },
        { t: "L'écart est soldé : l'embout est retrouvé, il suffit de le remplacer par un neuf.", why: "Tu as retrouvé la plus grosse partie, pas tout. Le fragment est plus petit, donc plus difficile à voir, et tout aussi étranger à l'avion." },
        { t: "L'embout était sûrement déjà cassé ce matin, la pointe est restée à l'atelier.", why: "C'est possible, mais c'est une supposition. L'inventaire d'entrée sert aussi à vérifier l'état des outils ; sans constat écrit, on cherche." },
        { t: "Il faut passer un aimant dans la cavité : s'il ne ramène rien, la zone est propre.", why: "L'aimant peut aider si le fragment est en acier, mais un passage « sans rien » ne prouve pas l'absence : il peut être coincé, ou hors de portée." },
      ],
      explain: "C'est le sens de la case « Entier ? » de l'arbre de décision. Un outil retrouvé cassé transforme la recherche d'un outil en recherche d'un fragment. Tu l'annonces tel quel à ton responsable : « embout retrouvé, pointe manquante ».",
    },
    {
      id: 'g2-q7', type: 'match', concept: "Où chercher un outil manquant",
      q: "Relie chaque endroit de recherche à la raison pour laquelle l'outil peut s'y trouver.",
      pairs: [
        { l: "La cuve de l'aspirateur", r: "Il a pu être avalé pendant le nettoyage, sans bruit." },
        { l: "Le bac à chutes", r: "Il a pu être jeté avec une poignée d'emballages." },
        { l: "La caisse de ta voisine", r: "Il a pu être rangé par erreur dans un logement qui lui ressemble." },
        { l: "Tes poches et tes manches", r: "Tu as pu l'y glisser par réflexe pour libérer une main." },
        { l: "Le chariot qui a quitté la zone", r: "Il a pu être posé sur une pièce ou un plateau, puis emporté." },
      ],
      explain: "Une recherche par zones va du plus probable au moins probable et n'oublie pas les « sorties » : ce qui a été aspiré, jeté, rangé ailleurs ou emporté. C'est aussi pour cela qu'on fige la zone : tant que le bac, l'aspirateur et le chariot n'ont pas bougé, ils restent vérifiables.",
    },
    {
      id: 'g2-q8', type: 'mcq', concept: "Objet non identifié",
      q: "En aspirant le pied d'une paroi, tu remarques un petit écrou posé sur le plancher. Ta tâche n'utilise aucun écrou et ton inventaire est juste. Choisis la bonne conduite.",
      options: [
        { t: "Tu notes l'endroit exact, tu le remets à ton responsable et tu signales qu'il ne vient pas de ta tâche.", ok: true, why: "L'écrou porte une information : il a été perdu par quelqu'un, ou il s'est détaché d'une fixation. Son emplacement aide à trouver laquelle." },
        { t: "Tu l'aspires avec le reste : c'est un corps étranger, il doit sortir de l'avion.", why: "Il doit sortir, oui, mais pas anonymement. Une fois dans la cuve, plus personne ne saura qu'un écrou manque peut-être sur une fixation." },
        { t: "Tu cherches autour une vis sans écrou et tu le remets en place.", why: "Tu ne sais ni si c'est le bon écrou, ni comment il doit être posé et serré. Remonter une pièce inconnue sans instruction, c'est créer une non-conformité." },
        { t: "Tu le gardes dans ta poche pour demander à la pause.", why: "Il redevient un objet non compté dans une poche, et tu risques d'oublier où tu l'as trouvé, ce qui est justement l'information utile." },
      ],
      explain: "Un objet trouvé n'est pas toujours un déchet. Devant un objet que tu n'as pas apporté, deux hypothèses : il a été apporté par quelqu'un d'autre, ou il vient de l'avion. La seconde est la plus sérieuse, et seule une personne qui connaît la zone peut l'écarter. Ton rôle : ne pas détruire l'indice.",
    },
    {
      id: 'g2-q9', type: 'hottap', concept: "Trajet d'un débris soufflé ou aspiré",
      fig: 'g2-aspirer-ou-souffler',
      q: "Touche sur la figure l'élément qui répond à chaque question.",
      targets: [
        { prompt: "Par où le copeau soufflé quitte-t-il la surface du plancher ?", part: 'interstice' },
        { prompt: "Où se trouve le copeau que plus personne ne pourra voir une fois le plancher terminé ?", part: 'debris-cache' },
        { prompt: "Que peux-tu ouvrir pour vérifier si une vis manquante a été ramassée ?", part: 'cuve' },
        { prompt: "Quel élément doit être posé au plus près du débris pour le capter ?", part: 'buse' },
      ],
      explain: "À gauche, le copeau passe par l'interstice et se pose sur le faisceau, sous le plancher : il est toujours dans l'avion. À droite, la buse posée près du débris l'envoie dans la cuve, qui devient un endroit de recherche à part entière quand un objet manque au bilan.",
    },
  ],

  retain: [
    "Tout ce qui entre dans la zone en ressort, ou a été posé sur l'avion parce que le dossier le demande : le bilan se fait par écrit, à l'entrée et à la sortie.",
    "Un outil en trop est un écart au même titre qu'un outil en moins ; un outil cassé est un outil dont un morceau manque.",
    "Colliers posés = chutes ramassées ; protections posées = protections retirées et comptées.",
    "On ramasse au moment où ça tombe : la zone de recherche est alors de moins d'un mètre.",
    "Souffler déplace, aspirer retire ; la cuve de l'aspirateur se vérifie quand un objet manque.",
    "Avant de quitter une tâche inachevée : marquer, signaler, ranger et compter, boucher. Au retour : revenir trois étapes en arrière.",
    "Compte faux : figer, informer, chercher par zones. On ne ferme jamais sur un écart, et on ne complète jamais une caisse avec un outil de remplacement.",
    "Un objet que tu ne reconnais pas se signale avec son emplacement exact : il vient peut-être de l'avion.",
  ],

  next: { id: 'g3', teaser: "Tu sais maintenant garder l'avion propre de tout ce qui ne lui appartient pas. Au chapitre suivant, on s'occupe de quelqu'un d'autre : toi. Travailler à genoux sur un rail, bras levés sous un plafond ou à deux sur un panneau long, cela use le corps si l'on s'y prend mal." },

  oral: [
    {
      q: "Explique à un nouveau collègue pourquoi on fait deux inventaires, un à l'entrée et un à la sortie, et ce qu'on y compte.",
      expected: [
        "Le bilan : ce qui entre ressort ou a été posé sur l'avion",
        "Sans inventaire d'entrée, un manque à la sortie ne peut pas être interprété",
        "On compte les outils (embouts et douilles compris), les consommables et les protections portées ou posées",
        "Un outil en trop est aussi un écart",
        "Aucune fermeture tant que le compte n'est pas juste",
      ],
      model: "On fait deux inventaires parce que l'un donne son sens à l'autre. À l'entrée, je note ce qui passe la porte de la zone : mes outils, logement par logement, les consommables que j'ai sortis, les bouchons que je vais poser, et même mes lunettes et mes gants. À la sortie, je refais le même compte. La différence ne peut correspondre qu'à ce que j'ai posé sur l'avion. Si un logement est vide alors qu'il était plein ce matin, je sais que l'outil est dans la zone et je ne ferme pas. Sans le compte du matin, je ne saurais pas si l'outil manquait déjà. Et un outil en trop m'alerte autant : il manque à quelqu'un.",
    },
    {
      q: "Tu termines un travail dans une cavité de plancher. Décris comment tu nettoies et pourquoi tu n'utilises pas la soufflette.",
      expected: [
        "Ramasser d'abord à la main ce qui se voit, pour le reconnaître et le compter",
        "Aspirer ensuite, buse au contact, du haut vers le bas et du fond vers la sortie",
        "La soufflette déplace les débris vers des zones cachées et les projette",
        "L'aspirateur retient les débris dans une cuve vérifiable",
        "L'air comprimé seulement si un document le demande expressément",
      ],
      model: "Je commence par ramasser à la main tout ce que je vois : chutes de collier, emballages, vis. C'est le seul moment où je peux les reconnaître et vérifier mon compte. Ensuite je passe l'aspirateur, la buse posée au plus près, en partant du haut et du fond de la zone pour finir vers la sortie, en insistant sur les gorges de rail et les angles. Je n'utilise pas la soufflette parce qu'elle ne retire rien : elle pousse les débris par les interstices, sous le plancher ou derrière un habillage, là où je ne pourrai plus les voir, et elle peut les projeter vers les yeux. Avec l'aspirateur, ce qui est dans la cuve n'est plus dans l'avion, et je peux l'ouvrir si un objet manque à mon bilan.",
    },
    {
      q: "À l'inventaire de sortie, il te manque une douille. Raconte ce que tu fais, dans l'ordre, et ce que tu ne fais surtout pas.",
      expected: [
        "Recompter pour confirmer, puis figer la zone",
        "Informer immédiatement le responsable et les voisins de zone",
        "Chercher par zones, sans oublier bac à chutes, aspirateur, poches, caisses voisines, ce qui a quitté la zone",
        "Si retrouvée : vérifier qu'elle est entière, ranger, tracer",
        "Si introuvable : pas de fermeture, la décision revient au responsable",
        "Ne jamais remplacer l'outil pour rendre le compte juste",
      ],
      model: "Je recompte une fois pour être sûre. Si la douille manque vraiment, je fige la zone : je demande que rien ne soit refermé, déplacé ou emporté, parce que chaque mouvement agrandit l'endroit où elle peut être. Je préviens tout de suite mon responsable et les collègues d'à côté, qui pourraient être en train de fermer un panneau. Puis je cherche méthodiquement : là où je m'en suis servie en dernier, mon trajet, mes poches, le bac à chutes, la cuve de l'aspirateur, la caisse voisine, le chariot qui est reparti. Si je la retrouve, je vérifie qu'elle est entière, je la range et l'événement est tracé. Si je ne la retrouve pas, la zone reste ouverte et c'est le responsable qui décide de la suite. Ce que je ne fais jamais : prendre une douille identique pour compléter ma caisse.",
    },
  ],

  matrix: [
    { savoir: "Sait que tout objet entrant en zone doit être compté, et ce qui distingue déposer, attacher et compter.", savoirFaire: "Prépare sa tenue et sa caisse, réalise l'inventaire d'entrée et repère un écart (manque ou outil en trop) avant d'intervenir.", comp: 'C1', ex: ['g2-a1', 'g2-a2', 'g2-q2'], proof: "Tri d'objets personnels réussi, écarts d'une caisse fictive repérés, bilan de consommables calculé sur une feuille fictive." },
    { savoir: "Connaît l'ordre de réaction à un écart d'inventaire et la conduite à tenir devant un objet non identifié.", savoirFaire: "Fige la zone, informe, organise une recherche par zones et signale un objet trouvé sans le détruire ni le remonter.", comp: 'C1', ex: ['g2-a3', 'g2-q6', 'g2-q7', 'g2-q8'], proof: "Séquence de réaction remise dans l'ordre et décisions argumentées sur trois cas (outil cassé, lieux de recherche, écrou trouvé)." },
    { savoir: "Sait pourquoi l'aspiration est préférée au soufflage et comment se déroule un contrôle final avant fermeture.", savoirFaire: "Distingue, dans une zone ouverte, ce qui fait partie de l'avion de ce qui doit être retiré ou identifié, avant de fermer et de fixer.", comp: 'C4', ex: ['g2-q1', 'g2-q3', 'g2-q5', 'g2-q9'], proof: "Cinq objets étrangers retrouvés sur une figure de zone, classement avion / étranger / à identifier justifié." },
    { savoir: "Connaît les gestes qui rendent une interruption sans risque : marquer, signaler, ranger, boucher, écrire.", savoirFaire: "Laisse un assemblage inachevé dans un état lisible et le reprend en revérifiant selon l'instruction.", comp: 'C4', ex: ['g2-a4', 'g2-q4'], proof: "Éléments d'un poste interrompu désignés sur figure et gestes de départ sélectionnés sans erreur." },
  ],
});
