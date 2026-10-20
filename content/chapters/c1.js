// Chapitre c1 — Le dossier de travail (lot 4)
// Notions génériques de documentation industrielle. Aucun format d'entreprise supposé ; toutes les références sont fictives (préfixe EX-).
CA.addChapter({
  id: 'c1',
  domain: 'C',
  order: 120,
  title: "Le dossier de travail",
  short: "Plan, nomenclature, instruction, fiche de suivi : les lire et trouver la bonne version",
  minutes: 45,
  comps: ['C1'],
  prereq: ['b1'],
  sources: ['rncp40664', 'cqpm-0289-observatoire', 'iaqg-9100', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Nommer les six documents d'un dossier de travail et dire à quelle question répond chacun : plan, nomenclature, instruction de travail, fiche de suivi, liste de contrôle, étiquette.",
    "Lire un cartouche case par case et en tirer ce qui prouve qu'on a le bon plan : numéro, indice, feuille, état.",
    "Retrouver une information dans un plan fictif en passant de la bulle à la nomenclature, puis à la vue et à la coupe.",
    "Reconnaître, parmi des documents de même numéro, celui qui est applicable : bon numéro, bon indice, état validé.",
    "Distinguer ce qui définit le travail, ce qui explique comment le faire et ce qui en garde la trace, et dire ce qui ne fait jamais foi.",
    "Décrire la conduite à tenir quand une information manque, se lit mal ou se contredit d'un document à l'autre.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Personne ne te dit « pose ce panneau » en le pointant du doigt. Ce que tu dois faire, où, avec quelle pièce, dans quel ordre, avec quel outil et ce qu'il faut contrôler ensuite : tout cela est écrit. L'ensemble des documents qui le disent s'appelle le [[Dossier de travail]]. Il remplace la mémoire de celui ou celle qui a déjà fait l'opération, et c'est tant mieux : un avion compte des milliers de pièces, plusieurs équipes y passent à tour de rôle, et personne ne peut tout retenir.",
    "Deux raisons de lire un dossier avec soin. D'abord, les documents vivent : un plan est modifié, il change de lettre, et l'ancienne version reste parfois au fond d'un classeur ou d'un dossier numérique. La lire donne un travail faux, avec toute l'apparence du sérieux. Ensuite, les documents se répondent : l'instruction cite un plan, le plan renvoie à une nomenclature, la fiche de suivi cite l'instruction. Celle qui sait quel document répond à quelle question trouve en une minute ce qu'un autre cherche pendant dix.",
    "Le référentiel de branche du CQP range la conformité aux gammes techniques parmi ses critères d'évaluation, et la première compétence du titre commence par « préparer, organiser et repérer son intervention ». Lire le dossier est donc le premier geste de l'intervention, et le premier que ton évaluateur regarde : il ne te demande pas de réciter, il te regarde chercher. Ce chapitre est ton mode d'emploi de cette recherche. Le suivant t'apprendra à identifier la pièce elle-même.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'c1-dossier-contenu',
    intro: "Voici une chemise de dossier ouverte, comme celle qu'on pose sur un chariot ou qu'on ouvre sur une tablette. Six documents y sont rangés. Tu ne connais pas encore leurs noms : regarde seulement ce que chacun a l'air de faire.",
    look: [
      "Un seul document contient un dessin. Lequel ? Et le deuxième, avec ses lignes et ses colonnes : liste de courses, calendrier, inventaire ?",
      "Le troisième porte les nombres 10, 20, 30 dans des ronds reliés par un trait. À ton avis, numérote-t-il des pièces, des pages ou des étapes ?",
      "Dans le quatrième, deux lignes sont marquées d'une pastille verte, une troisième d'une signature, la dernière est vide. Que peut raconter un document comme celui-là, et à quel moment le remplit-on ?",
      "Le dernier objet n'est pas une feuille : il a un lien d'attache et un code. Où en as-tu déjà vu un, et que décrit-il ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "Un dossier, six documents, six questions",
      fig: 'c1-dossier-contenu',
      p: [
        "Un dossier de travail regroupe tout ce qu'il faut pour réaliser **une** intervention précise : celle qu'on t'a confiée, sur cet avion, dans cette zone. Il peut être une chemise en papier, un classeur sur chariot, un dossier sur tablette. Le support change ; le contenu, lui, se range toujours en six familles. Pour ne pas les confondre, pose à chacune sa question.",
        "Le [[Plan]] (n° 1, *drawing*) répond à : à quoi cela doit-il ressembler, et où va chaque pièce ? C'est un dessin avec des vues, des numéros de repère et un cadre d'identité. La [[Nomenclature]] (n° 2, *parts list*) répond à : de quelles pièces parle-t-on, et combien ? C'est un tableau, une ligne par pièce. L'[[Instruction de travail]] (n° 3), que certaines entreprises appellent [[Gamme]], répond à : que dois-je faire, dans quel ordre, avec quoi ? Les nombres dans les ronds sont les numéros d'**opérations**, souvent de dix en dix pour qu'on puisse en glisser une entre deux plus tard sans tout renuméroter.",
        "La [[Fiche de suivi]] (n° 4) répond à : qu'est-ce qui a été fait, par qui, et quand ? On y valide chaque opération au fur et à mesure ; c'est elle qui alimente la [[Traçabilité]] dont parle le chapitre sur le métier. La liste de contrôle (n° 5) répond à : n'ai-je rien oublié ? C'est une suite de points à vérifier, case par case. Enfin l'étiquette d'identification (n° 6) n'est pas une feuille du dossier : elle accompagne la pièce et dit ce qu'elle est. Tu apprendras à la lire au chapitre suivant.",
      ],
      table: {
        head: ['Document', 'Question', 'Quand tu le lis', 'Exemple'],
        rows: [
          ['Plan', "À quoi ça ressemble, où ça va ?", "Avant de commencer, puis à la présentation de la pièce", "Dans quel sens se pose un support"],
          ['Nomenclature', "Quelles pièces, combien ?", "À la préparation et au comptage de fin", "Combien de vis pour une fixation"],
          ['Instruction de travail', "Quoi faire, dans quel ordre, avec quoi ?", "Pendant tout le travail", "Opération 30 : poser les vis"],
          ['Fiche de suivi', "Qu'est-ce qui est fait, par qui ?", "Après chaque opération", "Visa d'une opération"],
          ['Liste de contrôle', "N'ai-je rien oublié ?", "En fin d'opération", "Contrôle de zone avant de quitter le poste"],
          ['Étiquette', "Quelle est cette pièce ?", "Au moment de prendre la pièce", "Référence et indice sur un sachet"],
        ],
      },
      callout: { kind: 'info', text: "Les noms exacts (gamme, fiche suiveuse, bon de travail…), la présentation et le support changent d'une entreprise à l'autre. Ce chapitre t'apprend les **rôles**, qui se retrouvent partout. Les formats de ton site, tu les découvriras sur de vrais dossiers, avec ton tuteur." },
    },
    {
      h: "Le plan : lire ce qu'on te montre",
      fig: 'c1-plan-fictif',
      p: [
        "Voici un plan fictif. Il est volontairement simple : un support rectangulaire percé de quatre trous. Ce qui compte, c'est sa construction, qu'on retrouve sur presque tous les plans.",
        "La [[Vue]] (n° 3) montre l'objet regardé depuis une direction, ici de face. La flèche rouge à l'intérieur indique un sens de montage. Le long trait en pointillé qui passe par les deux trous de gauche, terminé par un A à chaque bout, est un trait de coupe : il dit « imagine que tu tranches l'objet ici ».",
        "La [[Coupe]] (n° 4) montre ce que tu verrais si tu tranchais vraiment l'objet le long de ce trait et que tu regardais la tranche. Les hachures, ces petits traits obliques, signalent la matière coupée : tu vois l'épaisseur du support, et surtout les vis et leurs rondelles qui le traversent, que la vue de face ne montrait pas. Les flèches au bout du trait de coupe indiquent de quel côté on regarde.",
        "La [[Bulle]] (n° 5) est un numéro dans un rond, relié par un trait à une pièce du dessin. Ce numéro est un repère : cherche la ligne qui porte le même numéro dans la nomenclature (n° 6) et tu y trouves la référence et la quantité de la pièce. Ici, la bulle 2 désigne les vis, référence `EX-90211-05`, quantité 4 ; la bulle 3 désigne les rondelles. Ce plan d'exercice ne donne pas de désignation dans sa nomenclature : sur un vrai plan, une colonne en donne une, et c'est ici la coupe qui te montre ce que sont les repères 2 et 3. Garde bien trois nombres séparés dans ta tête : le **repère** (2), la **référence** (`EX-90211-05`) et la **quantité** (4).",
        "Les notes (n° 7) complètent le dessin avec ce qu'un dessin ne dit pas : l'unité des cotes, le sens, un renvoi vers un autre document. Elles sont petites, en bas du plan, et c'est là qu'on trouve souvent la condition qui change tout.",
      ],
      callout: { kind: 'warn', text: "On ne mesure jamais sur un dessin avec une règle. Un plan imprimé peut avoir été réduit, un plan sur écran peut être zoomé, et le dessin est de toute façon fait pour être compris, pas pour être mesuré. Les dimensions s'écrivent en chiffres, les cotes. Si une cote manque, c'est une information qui manque, pas une invitation à sortir la règle." },
    },
    {
      h: "Le cartouche, case par case",
      fig: 'c1-lire-cartouche',
      p: [
        "Le [[Cartouche]] est la carte d'identité du plan. Dans la plupart des plans industriels il se trouve en bas à droite, comme sur notre plan fictif, mais ses cases et leur disposition changent d'une entreprise à l'autre. Celles de la figure sont les huit qu'un débutant doit savoir trouver.",
        "**Désignation** (n° 1) : le nom du plan en clair, « support d'équipement ». Elle te rassure sur le sujet, elle ne prouve pas que c'est le bon plan : plusieurs plans peuvent avoir des noms voisins. **Numéro de plan** (n° 2) : l'identifiant unique, `EX-48213`. C'est lui que cite l'instruction de travail. **Indice** (n° 3) : la version, ici C ; nous y revenons dans la section suivante.",
        "**Échelle** (n° 4) : le rapport entre la taille du dessin et la taille réelle. L'[[Échelle]] 1 : 2 signifie que le dessin est deux fois plus petit que l'objet ; 1 : 1 est la grandeur nature ; 2 : 1 grossit l'objet. Elle sert à comprendre ce que tu regardes, pas à mesurer. **Feuille** (n° 5) : « 1 / 2 » veut dire feuille 1 sur 2. Il y a donc une autre feuille, et une vue, une note ou une nomenclature peut s'y trouver. Un plan dont tu n'as que la feuille 1 sur 2 est un plan incomplet.",
        "**Date** (n° 6) : la date de **cette version** du plan, pas la date du jour. Elle ne sert pas à choisir « le plus récent ». **État** (n° 7) : dit si le plan est utilisable pour travailler (validé) ou encore en préparation. **Unité** (n° 8) : l'unité de toutes les dimensions, sauf indication contraire ; ici le millimètre.",
      ],
      table: {
        head: ['Case', 'La question qu\'elle résout', 'Le piège'],
        rows: [
          ['Numéro de plan', "Est-ce bien le plan que cite mon instruction ?", "Deux chiffres inversés : un autre plan, même allure"],
          ['Indice', "Est-ce bien la version demandée ?", "Lire « C » sans regarder si l'instruction demande C"],
          ['Feuille', "Ai-je tout le plan ?", "Travailler avec la seule feuille 1"],
          ['État', "Peut-on travailler avec ?", "Prendre « projet » pour « le plus récent donc le meilleur »"],
          ['Échelle', "Quelle taille a l'objet par rapport au dessin ?", "Mesurer au lieu de lire les cotes"],
        ],
      },
      callout: { kind: 'tip', text: "Prends l'habitude de lire les cases dans l'ordre **numéro, indice, feuille, état**. Ces quatre-là répondent à une seule question : est-ce bien le bon plan, complet, et utilisable ? Le reste du cartouche vient après." },
    },
    {
      h: "L'indice : la version du plan, et le document applicable",
      fig: 'c1-bonne-version',
      p: [
        "Un plan n'est pas écrit une fois pour toutes. On déplace un trou, on change une matière, on corrige une erreur : le plan est modifié. Pour ne pas confondre l'ancienne version et la nouvelle, chaque version porte un [[Indice de révision]], lettre ou chiffre qui avance à chaque modification (A, B, C… ou 01, 02… selon l'entreprise). Un même numéro de plan peut donc exister en plusieurs indices, et ce sont autant de plans différents.",
        "Regarde la figure. En haut, ce que demande ton dossier : le plan `EX-48213`, indice C. Dessous, quatre documents que tu pourrais avoir sous la main au poste. Un seul est utilisable. Le n° 2 porte le bon numéro mais l'indice B : le plan a été remplacé, c'est un [[Document périmé]], et ce qu'il dit a pu être modifié depuis. Le n° 3 a le bon indice et l'état « validé », mais son numéro est `EX-48231` : deux chiffres sont inversés, c'est le plan d'une autre pièce. Le n° 4 a le bon numéro et un indice D plus avancé, mais il est marqué « projet » : il est en préparation, personne n'a encore dit qu'on pouvait travailler avec. Le n° 5 concorde sur les trois points.",
        "Un [[Document applicable]] est donc un document dont **le numéro, l'indice et l'état** concordent avec ce que demande ton dossier. Le critère n'est ni « le plus récent » ni « celui qui est ouvert sur l'écran » : c'est celui que ton instruction de travail cite. Un indice plus avancé que celui du dossier peut exister sans s'appliquer encore à ton avion ; la décision de passer de C à D revient à ceux qui définissent le produit, pas à celui qui pose.",
      ],
      list: [
        "Pars du document qui te cite : l'instruction de travail donne le numéro de plan **et** l'indice à utiliser.",
        "Sur écran, ouvre le plan depuis le lien du dossier plutôt que par une recherche libre : une recherche présente souvent plusieurs versions côte à côte, et la mauvaise est à un clic.",
        "Sur papier, souviens-toi qu'une copie est une photo du jour où elle a été imprimée : si le plan a changé depuis, rien ne la met à jour. Certaines entreprises marquent les copies qui ne sont pas suivies (« copie non maîtrisée ») et ne les réservent qu'à la lecture ; demande comment ton site s'y prend.",
        "Compare les trois éléments à voix basse, le doigt sur chaque ligne : numéro, indice, état. Si l'un des trois ne concorde pas, tu n'as pas le bon document.",
      ],
      callout: { kind: 'doc', text: "Les mots « périmé », « projet », « validé » sont des exemples. Selon l'entreprise, un document utilisable ou non se reconnaît à un tampon, une bande de couleur, un filigrane ou un statut dans le système informatique. Les marquages de **ton** site, demande à ton tuteur de te les montrer dès le premier jour : c'est une des meilleures premières questions." },
    },
    {
      h: "Le dossier sur tablette : mêmes règles, autres pièges",
      fig: 'img-c1-tablette-plan',
      p: [
        "Sur cette illustration, une tablette posée sur un établi affiche un schéma (n° 2). Le support change, la lecture non : cartouche, indice, état, feuilles. Mais l'écran a ses pièges propres. Un plan zoomé ne montre plus son cartouche : dézoome avant de conclure que c'est le bon document. Une feuille 2 se trouve par un geste (défilement, onglet) que tu peux ne jamais faire. Et l'échelle affichée n'a plus aucun rapport avec l'échelle du cartouche : raison de plus pour lire les cotes et ne jamais mesurer.",
        "L'illustration est un schéma de principe, sans texte lisible : elle ne représente aucun logiciel ni aucun format réel.",
      ],
    },
    {
      h: "Ce qui définit, ce qui explique, ce qui garde la trace",
      fig: 'c1-hierarchie',
      p: [
        "Les documents d'un dossier ne sont pas sur le même plan : ils jouent trois rôles, et savoir lequel joue quoi te dit où chercher.",
        "Le **plan et la nomenclature définissent** (bande 1) : ce qu'il faut obtenir, avec quelles pièces. L'**instruction de travail explique** (bande 2) : elle décrit les opérations dans l'ordre, chacune avec son texte, ses outils ou moyens, ses contrôles, et ses renvois vers d'autres documents. Elle ne recopie pas la définition : elle dit « voir plan `EX-48213`, indice C ». La **fiche de suivi et la liste de contrôle gardent la trace** (bande 3) : elles enregistrent ce qui a été fait, par qui, quand, et ce qui a été relevé en route, par exemple un numéro de lot. Ensemble, ces enregistrements permettent, des mois plus tard, de retrouver ce qui a été fait et avec quelles pièces.",
        "Un [[Renvoi]] est une consigne à part entière. Quand une opération dit « serrage : voir `EX-IT-2301` » ou qu'une note dit « voir feuille 2 », tu n'as pas fini ta lecture : tu vas ouvrir le document cité, avec son indice, et tu le lis avec la même attention. Suivre les renvois fait partie du travail ; les ignorer, c'est exécuter une instruction à moitié.",
        "La bande 4, en pointillé, regroupe ce qui **ne fait pas foi** : la photo d'un plan prise par un collègue, une note griffonnée, un ancien dossier gardé « au cas où », le souvenir de la dernière fois, un « on a toujours fait comme ça ». Tout cela peut t'aider à comprendre. Rien de cela ne porte un indice, un état ou une validation : ça ne te sert donc jamais à décider.",
        "Quand deux documents du dossier se contredisent, tu n'es pas la personne qui arbitre. Cela arrive : une instruction n'a pas été remise à jour après la modification d'un plan, par exemple. Tu ne sais pas lequel des deux est à corriger, et tu n'as pas la vue d'ensemble de ce qui a été modifié. Tu t'arrêtes sur ce point précis, tu notes ce que dit chaque document (numéro, indice, feuille, passage), et tu le remets à ton chef d'équipe ou à la personne qui prépare les documents, sous le nom que l'entreprise lui donne (méthodes, bureau technique…).",
      ],
    },
    {
      h: "La méthode en entonnoir",
      fig: 'c1-entonnoir',
      p: [
        "Quand tu cherches une information sur un plan, ne plonge pas dans le dessin : descends par étages, du plus général au plus fin. Chaque étage répond à une question et filtre les erreurs de l'étage suivant.",
        "**Étage 1, le cartouche** : est-ce le bon plan, la bonne feuille ? **Étage 2, l'indice** : est-ce la version que demande mon dossier ? **Étage 3, la nomenclature** : quelle pièce, quelle référence, combien ? **Étage 4, les vues** : où va-t-elle, dans quel sens, que montre la coupe ? **Étage 5, les notes** : y a-t-il une condition particulière ou un renvoi ? Tout en bas, l'information que tu cherchais, trouvée dans le bon document à la bonne version.",
        "L'ordre n'est pas décoratif. Si tu commences par les vues, tu lis très bien… le mauvais plan, et la conviction que tu en tires est d'autant plus solide qu'elle te paraît sérieuse. Si tu saute les notes parce qu'elles sont petites, tu rates la condition qui contredit ce que tu viens de comprendre. Les notes se lisent en dernier dans la méthode, mais elles se lisent **avant** de commencer à travailler.",
      ],
    },
    {
      h: "Quand l'information manque, se lit mal ou se contredit",
      p: [
        "Un jour tu chercheras une information qui n'est nulle part : un sens de pose absent, une feuille qui n'a pas été imprimée, une copie floue dont deux chiffres sont illisibles, deux documents qui ne disent pas la même chose. La réponse tient en trois mouvements.",
        "**Chercher d'abord là où l'information peut légitimement se trouver** : l'autre feuille du plan, les notes, les renvois, l'instruction de travail, la nomenclature. Une information qui paraît manquer est souvent sur la feuille que tu n'as pas ouverte. **Demander ensuite**, à la personne qui peut répondre : ton chef d'équipe, ton tuteur, ou le service qui prépare les documents. Fais une demande qui permet de répondre sans te rappeler : le numéro du document, son indice, la feuille, la zone, ce que tu cherches et ce que tu as déjà regardé. **Attendre enfin la réponse**, ou mieux la noter, avant de reprendre la partie concernée. Tu peux avancer sur une opération qui ne dépend pas de l'information manquante ; tu ne peux pas « faire comme si ».",
        "Ce que tu ne fais pas, c'est combler le trou avec ce qui est à portée de main : l'avion d'à côté, le support posé ce matin, la mémoire d'un collègue, une mesure à la règle. Chacun de ces comblements ressemble à de l'efficacité et crée un travail que personne ne peut vérifier.",
      ],
      table: {
        head: ['Situation', 'Ce que tu fais', 'Ce que tu ne fais pas'],
        rows: [
          ["Un sens ou une cote n'est pas indiqué", "Chercher sur la feuille suivante, dans les notes, dans les renvois ; sinon demander", "La déduire de la pièce posée à côté"],
          ["Le document est illisible (copie floue, tache)", "Demander un autre exemplaire du même document", "Compléter les chiffres de tête"],
          ["Deux documents se contredisent", "Arrêter cette opération, citer les deux passages à ton chef d'équipe", "Choisir le plus récent ou le plus prudent"],
          ["Le document cité par l'instruction est introuvable", "Le demander avec son numéro et son indice", "Prendre un document voisin « qui doit être pareil »"],
          ["L'indice lu n'est pas celui de l'instruction", "Ne pas travailler avec, signaler les deux indices exacts", "Supposer que le plus avancé convient"],
        ],
      },
      callout: { kind: 'info', text: "Ce que devient l'écart une fois signalé (qui tranche, comment on le consigne) est traité au chapitre sur la configuration, la conformité et la non-conformité. Ici, retiens le premier geste : t'arrêter sur ce point précis et le dire avec exactitude." },
    },
  ],

  // fiches de reconnaissance : les six documents
  parts: [
    {
      fig: 'c1-dossier-contenu', part: 'plan',
      fr: 'Plan', en: 'Drawing',
      fn: "Définit la forme, la position et le sens de montage des pièces, avec des vues, une coupe éventuelle et des bulles de repère.",
      where: "Première ou deuxième pièce du dossier, souvent sous forme de feuille grand format ou d'écran zoomable ; le cartouche est en bas à droite dans la plupart des plans.",
      interfaces: "Ses bulles renvoient à la nomenclature ; son numéro et son indice sont cités par l'instruction de travail.",
      risks: "Lire une mauvaise version ou une feuille incomplète ; lire très bien un plan qui n'est pas le tien.",
      vigilance: "Contrôle numéro, indice, feuille et état avant de regarder le dessin.",
      mistakes: "Plonger directement dans la vue de face sans avoir lu le cartouche.",
    },
    {
      fig: 'c1-dossier-contenu', part: 'nomenclature',
      fr: 'Nomenclature', en: 'Parts list',
      fn: "Liste les pièces d'un ensemble, une ligne par pièce : repère, référence, désignation, quantité.",
      where: "Sur le plan lui-même, souvent à côté du cartouche, ou sur une feuille séparée du dossier.",
      interfaces: "Reliée au plan par les repères des bulles ; ses références sont celles que tu retrouveras sur les étiquettes et les marquages.",
      risks: "Confondre repère, référence et quantité ; oublier que la quantité vaut pour un ensemble, pas pour tout l'avion.",
      vigilance: "Entre par le repère de la bulle, jamais par la désignation seule : plusieurs lignes peuvent porter le même nom.",
      mistakes: "Prendre la quantité d'une ligne pour le nombre total de pièces à poser dans la zone.",
    },
    {
      fig: 'c1-dossier-contenu', part: 'instruction',
      fr: 'Instruction de travail (gamme)', en: 'Work instruction (routing)',
      fn: "Donne la suite des opérations numérotées, avec pour chacune les moyens, les contrôles et les renvois.",
      where: "En tête du dossier : c'est souvent le document que tu ouvres en premier et que tu gardes sous les yeux.",
      interfaces: "Cite le plan et son indice, la fiche de suivi à remplir et les documents annexes (serrage, nettoyage…).",
      risks: "Exécuter à la mémoire ou sauter une opération ; ignorer un renvoi.",
      vigilance: "Lis l'opération en entier avant de la faire, et ouvre chaque document qu'elle cite.",
      mistakes: "Suivre l'ordre « habituel » au lieu de l'ordre écrit parce que la dernière fois il était différent.",
    },
    {
      fig: 'c1-dossier-contenu', part: 'fiche-suivi',
      fr: 'Fiche de suivi', en: 'Traveller',
      fn: "Garde la trace de chaque opération : qui, quand, avec quel résultat, et ce qui a été relevé (lot, numéro de série).",
      where: "Jointe au dossier, papier ou écran ; une ligne ou une case par opération.",
      interfaces: "Reprend les numéros d'opération de l'instruction de travail ; reçoit les relevés d'identification.",
      risks: "Visa donné avant l'opération ou rempli en fin de poste de mémoire ; une case laissée vide.",
      vigilance: "Vise une opération quand elle est faite, pas avant, pas après coup.",
      mistakes: "Cocher « fait » pour une opération qu'on s'apprête à faire dans cinq minutes.",
    },
    {
      fig: 'c1-dossier-contenu', part: 'liste-controle',
      fr: 'Liste de contrôle', en: 'Checklist',
      fn: "Énumère les points à vérifier un par un, pour ne rien oublier en fin d'opération.",
      where: "En fin de dossier ou en annexe d'une opération ; parfois reprise sur la fiche de suivi.",
      interfaces: "Renvoie à ce qui a été fait ; certains points renvoient à un autre document.",
      risks: "Cocher par habitude sans regarder ; ne cocher que ce qui est facile à voir.",
      vigilance: "Une case se coche quand tu as regardé, pas quand tu penses que c'est bon.",
      mistakes: "Cocher toute la liste d'un coup en fin de poste.",
    },
    {
      fig: 'c1-dossier-contenu', part: 'etiquette',
      fr: "Étiquette d'identification", en: 'Identification tag',
      fn: "Accompagne la pièce et dit ce qu'elle est : référence, souvent indice, numéro de série ou de lot.",
      where: "Sur le contenant, le sachet ou la pièce elle-même, jamais dans le dossier papier.",
      interfaces: "Se compare à la ligne de nomenclature (chapitre suivant).",
      risks: "Étiquette illisible, étiquette séparée de sa pièce, étiquette qui décrit un contenant et non son contenu.",
      vigilance: "Lis-la avec le dossier à côté, pas de mémoire.",
      mistakes: "Considérer qu'une étiquette est « une pièce du dossier » : c'est un document qui voyage avec la pièce.",
    },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: 'Dossier de travail', en: 'Work package', abbr: '', def: "Ensemble des documents réunis pour réaliser une intervention précise : plan, nomenclature, instruction, fiche de suivi, liste de contrôle.", tip: "Un dossier = une intervention, pas un avion." },
    { fr: 'Plan', en: 'Drawing', abbr: '', def: "Dessin qui montre la forme, la position et le sens de montage des pièces, avec des vues, des repères et un cartouche." },
    { fr: 'Nomenclature', en: 'Parts list', abbr: '', def: "Tableau qui liste les pièces d'un ensemble : repère, référence, désignation, quantité." },
    { fr: 'Gamme', en: 'Routing (process sheet)', abbr: '', def: "Suite ordonnée des opérations nécessaires pour réaliser un travail. Selon les entreprises, on dit gamme ou instruction de travail pour des documents voisins." },
    { fr: 'Fiche de suivi', en: 'Traveller', abbr: '', def: "Document qui accompagne l'intervention et enregistre, opération par opération, qui a fait quoi, quand et avec quel résultat." },
    { fr: 'Cartouche', en: 'Title block', abbr: '', def: "Cadre d'identité d'un plan : désignation, numéro, indice, échelle, feuille, date, état, unité.", tip: "Le cartouche se lit avant le dessin." },
    { fr: 'Indice de révision', en: 'Revision index', abbr: '', def: "Lettre ou chiffre qui indique la version d'un document ; il change à chaque modification du plan ou de la pièce.", tip: "Même numéro, indice différent : document différent." },
    { fr: 'Vue', en: 'View', abbr: '', def: "Représentation d'un objet regardé depuis une direction donnée : de face, de dessus, de côté." },
    { fr: 'Coupe', en: 'Section view', abbr: '', def: "Représentation de l'objet « tranché » le long d'un trait de coupe, pour montrer l'intérieur ; les hachures marquent la matière coupée." },
    { fr: 'Bulle', en: 'Balloon (item number)', abbr: '', def: "Numéro cerclé relié à une pièce du plan par un trait ; il renvoie à la ligne de même repère dans la nomenclature." },
    { fr: 'Échelle', en: 'Scale', abbr: '', def: "Rapport entre la taille du dessin et la taille réelle de l'objet : 1 : 2 veut dire un dessin deux fois plus petit.", tip: "On lit les cotes, on ne mesure pas le dessin." },
    { fr: 'Document applicable', en: 'Applicable document', abbr: '', def: "Document dont le numéro, l'indice et l'état concordent avec ce que demande ton dossier : celui avec lequel on a le droit de travailler." },
    { fr: 'Document périmé', en: 'Superseded document', abbr: '', def: "Version remplacée par une autre : elle a pu être juste, elle ne l'est plus pour travailler.", tip: "Périmé, c'est une date de péremption pour les papiers." },
    { fr: 'Renvoi', en: 'Cross-reference', abbr: '', def: "Mention qui t'envoie vers un autre document, une autre feuille ou une autre note : « voir feuille 2 », « serrage : voir instruction ». C'est une consigne à suivre." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Jeudi, 7 h 30 : une opération, quatre documents",
    body: [
      "Ton chef d'équipe te remet un dossier sur tablette pour la pose d'un support en zone `EX-Z3`. Tu n'ouvres pas le plan en premier : tu lis l'en-tête de l'instruction de travail. Titre, zone, et la ligne qui compte : « Plan applicable : `EX-48213`, indice C, feuilles 1/2 et 2/2 ». Tu viens d'apprendre ce que tu dois aller chercher : un numéro, un indice, deux feuilles.",
      "Tu ouvres le plan depuis le lien du dossier. Cartouche : numéro `EX-48213`, indice C, état validé, feuille 1 sur 2. Tout concorde. Tu ouvres la feuille 2 pour t'assurer qu'elle porte le même numéro et le même indice, même si tu n'en as pas besoin pour cette opération : tu sais maintenant qu'elle existe, et ce qu'elle ne change pas.",
      "Sur la feuille 1, tu pars de la bulle 1 : elle désigne le support ; la nomenclature donne `EX-48213-07`, quantité 1. Les bulles 2 et 3, vis et rondelles, quantité 4 chacune. Tu prépares donc **neuf pièces**, et tu gardes ce nombre pour le comptage de fin. La vue de face montre une flèche rouge dans le support, et la note 2 dit « Sens : flèche » : tu sais comment présenter la pièce.",
      "En passant dans le couloir, Hugo te montre l'écran de sa tablette : un plan `EX-48213`, lui aussi, mais à l'indice B. Tu fais le rapprochement et tu te retiens de lui dire qu'il se trompe. Il ne se trompe peut-être pas : son instruction à lui cite peut-être B, pour un autre avion ou une autre zone. Ce qui est sûr, c'est que ce n'est pas **ton** dossier. Tu lui suggères de relire la ligne « Plan applicable » de son instruction et tu retournes à ton poste.",
      "Au fil de la matinée, tu vises la fiche de suivi opération par opération, au moment où elles sont faites : l'opération 10 après la préparation, la 20 après la présentation. Le soir, la dernière ligne de la liste de contrôle te demande de recompter. Neuf pièces préparées, neuf pièces posées : la ligne se coche vraiment.",
    ],
    doc: {
      title: "Instruction de travail EX-IT-2207, indice C — document fictif pédagogique",
      lines: [
        ['Titre', "Pose d'un support — zone EX-Z3, côté gauche"],
        ['Plan applicable', 'EX-48213, indice C, feuilles 1/2 et 2/2'],
        ['Fiche de suivi', 'EX-FS-0412'],
      ],
      table: {
        head: ['Op.', 'Opération', 'Document à ouvrir', 'Contrôle'],
        rows: [
          ['10', "Identifier le support (repère 1) et la visserie (repères 2 et 3)", "Nomenclature du plan", "Référence et indice relevés sur la fiche de suivi"],
          ['20', "Présenter le support sur les quatre trous, flèche vers l'avant", "Plan, vue de face", "Sens de la flèche conforme au plan"],
          ['30', "Poser quatre vis avec leurs rondelles", "Plan, coupe A-A ; serrage : voir EX-IT-2301", "Quatre vis posées, rondelles en place"],
          ['40', "Contrôle de zone avant de quitter le poste", "Liste de contrôle EX-CL-01", "Visa sur la fiche de suivi"],
        ],
      },
      note: "Document inventé pour le cours : aucune référence ne correspond à un format réel.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Trouver le sens de pose et le nombre de rondelles, étage par étage",
    fig: 'c1-plan-fictif',
    steps: [
      { label: "Le cartouche", text: "Premier regard, en bas à droite : numéro `EX-48213`, désignation « support ». L'instruction citait ce numéro : tu es sur le bon plan. Feuille 1/2 : tu sais déjà qu'une autre feuille existe.", hl: ['cartouche'] },
      { label: "L'indice", text: "À côté du numéro, la lettre C. Ton instruction demande l'indice C : même version. Si tu lisais B ou D, tu t'arrêterais ici, avant d'avoir regardé le moindre dessin.", hl: ['indice'] },
      { label: "La vue : le sens", text: "Dans la vue de face, la flèche rouge indique le sens de montage. Tu la lis avec la note 2, « Sens : flèche » : la flèche te dit dans quel sens présenter le support, et la note confirme qu'on peut la lire ainsi.", hl: ['vue', 'notes'] },
      { label: "La bulle, puis la nomenclature", text: "Tu cherches les rondelles. Une bulle 3 désigne une pièce près d'un trou ; tu vas à la ligne 3 de la nomenclature : référence `EX-90305-02`, quantité 4. Tu ne cherches pas « rondelle » : tu pars du numéro de la bulle.", hl: ['bulle', 'nomenclature'] },
      { label: "La coupe : vérifier ce que la vue cache", text: "Tu veux être sûr que bulle 3 = rondelle, et dans quel ordre le tout se pose. La coupe A-A le montre : sous la tête de chaque vis, une rondelle, puis le support. Cette information n'est visible nulle part sur la vue de face.", hl: ['coupe'] },
      { label: "Les notes en dernier", text: "Tu termines par les notes : l'unité des cotes (millimètres) et le sens. Aucune ne contredit ce que tu viens de lire. Si une note t'avait renvoyé vers un autre document, tu l'aurais ouvert avant de commencer à travailler.", hl: ['notes'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    {
      id: 'c1-a1', type: 'hottap', fig: 'c1-plan-fictif',
      concept: "Zones d'un plan",
      q: "Sur le plan fictif, touche la zone qui répond à chaque question.",
      targets: [
        { prompt: "Où lis-tu la version du plan que tu as sous les yeux ?", part: 'indice' },
        { prompt: "Quelle zone te dit combien de vis il faut ?", part: 'nomenclature' },
        { prompt: "Quel élément du dessin te fait passer d'une pièce dessinée à sa ligne de nomenclature ?", part: 'bulle' },
        { prompt: "Quelle représentation montre l'intérieur du support tranché et la façon dont les vis le traversent ?", part: 'coupe' },
        { prompt: "Où trouves-tu l'unité des cotes et le sens de montage écrits en toutes lettres ?", part: 'notes' },
      ],
      explain: "L'indice est la lettre du cartouche. La nomenclature donne les quantités. La bulle est le lien entre le dessin et la nomenclature. La coupe montre l'intérieur, que la vue de face ne montre pas. Les notes disent ce que le dessin ne peut pas dire : unité, sens, renvois.",
    },
    {
      id: 'c1-a2', type: 'match',
      concept: "Documents et questions",
      q: "Relie chaque document du dossier à la question à laquelle il répond.",
      pairs: [
        { l: 'Plan', r: "À quoi doit ressembler l'ensemble, et où va chaque pièce ?" },
        { l: 'Nomenclature', r: "De quelles pièces parle-t-on, et en quelle quantité ?" },
        { l: 'Instruction de travail', r: "Dans quel ordre faire les opérations, avec quoi ?" },
        { l: 'Fiche de suivi', r: "Qui a fait quelle opération, et quand ?" },
        { l: 'Liste de contrôle', r: "N'ai-je oublié aucun point à vérifier ?" },
      ],
      explain: "Chaque document a un rôle distinct. Le plan et la nomenclature disent ce qu'il faut obtenir ; l'instruction dit comment ; la fiche de suivi et la liste de contrôle gardent la trace et évitent les oublis. Quand tu cherches une information, demande-toi d'abord à quelle question elle répond : cela désigne le document.",
    },
    {
      id: 'c1-a3', type: 'input',
      concept: "De la bulle à la référence",
      q: "Sur le plan, la bulle 3 désigne les rondelles. Lis la nomenclature et saisis la référence de la pièce portant le repère 3.",
      doc: {
        title: "Nomenclature du plan EX-48213, indice C — document fictif pédagogique",
        table: {
          head: ['REP', 'DÉSIGNATION', 'RÉFÉRENCE', 'QTÉ'],
          rows: [
            ['1', 'SUPPORT', 'EX-48213-07', '1'],
            ['2', 'VIS', 'EX-90211-05', '4'],
            ['3', 'RONDELLE', 'EX-90305-02', '4'],
          ],
        },
        note: "Quantités pour un ensemble. Document inventé pour l'exercice.",
      },
      answers: ['EX-90305-02'],
      explain: "On entre dans la nomenclature par le repère de la bulle, ici 3, puis on lit la référence sur la même ligne. La désignation « rondelle » confirme que tu es à la bonne ligne, mais elle ne suffit pas à choisir : plusieurs rondelles différentes peuvent exister. La référence se lit en entier, jusqu'au dernier caractère.",
    },
    {
      id: 'c1-a4', type: 'hotfind', fig: 'c1-bonne-version',
      concept: "Document applicable",
      q: "Ton dossier demande le plan EX-48213, indice C. Touche tous les documents que tu ne dois PAS utiliser.",
      targets: ['doc-b', 'doc-voisin', 'doc-d'],
      notes: {
        'doc-b': "Bon numéro, mais indice B : version remplacée, document périmé.",
        'doc-voisin': "Bon indice et état validé, mais le numéro est EX-48231 : deux chiffres inversés, c'est le plan d'une autre pièce.",
        'doc-d': "Bon numéro, mais indice D et état « projet » : en préparation, pas encore applicable.",
      },
      explain: "Il faut que trois éléments concordent à la fois : le numéro, l'indice et l'état. Chacun des trois documents écartés échoue sur un seul de ces trois points, c'est ce qui les rend trompeurs. Seul l'indice C du bon numéro, validé, est applicable.",
    },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Ouvrir le plan et regarder directement le dessin.", why: "Tu ne sais pas encore si c'est le bon plan, la bonne version, la bonne feuille. Tu lis très bien quelque chose dont tu ne sais pas si c'est applicable.", better: "Lire le cartouche d'abord : numéro, indice, feuille, état. Dessiner ensuite." },
    { error: "Choisir le document « le plus récent » ou celui qui a la lettre la plus avancée.", why: "Un indice plus avancé peut ne pas s'appliquer à ton avion, ou être encore en préparation. Le critère n'est pas la date, mais ce que cite ton dossier.", better: "Comparer à l'instruction de travail : numéro et indice exacts demandés, état validé." },
    { error: "Travailler avec la feuille 1 d'un plan « 1/2 ».", why: "La feuille 2 peut contenir une vue, une note ou un renvoi qui change ce que tu viens de lire.", better: "Ouvrir toutes les feuilles, ou demander celles qui manquent avant de commencer." },
    { error: "Mesurer sur le dessin avec une règle ou en comptant les pixels.", why: "Un plan imprimé peut être réduit, un écran zoomé ; le dessin n'est pas fait pour être mesuré. Tu inventes une valeur que personne n'a écrite.", better: "Lire les cotes. Si une cote manque, la demander." },
    { error: "Confondre le repère de la bulle, la référence et la quantité.", why: "Le repère n'est qu'un numéro d'ordre. Prendre « 2 » pour la quantité ou pour la référence fait chercher la mauvaise chose, parfois avec succès apparent.", better: "Lire la ligne entière de la nomenclature, en nommant chaque champ : repère, référence, quantité." },
    { error: "Se fier à une photo du plan prise par un collègue, à une ancienne copie ou à son souvenir.", why: "Ces documents n'ont ni indice vérifiable, ni état, ni validation. Ils figent un instant et ne se mettent jamais à jour.", better: "Ouvrir le document depuis le dossier et lire son cartouche." },
    { error: "Faire « comme la dernière fois » une opération qui ressemble à une autre.", why: "La dernière fois, le dossier citait peut-être un autre indice, ou un autre avion. Seul l'écrit du jour est applicable.", better: "Relire l'instruction à chaque opération, même quand tu crois la connaître." },
    { error: "Annoter, corriger ou barrer au stylo un plan ou une instruction du dossier.", why: "Tu modifies un document de référence sans en avoir le droit, et le suivant lira ta correction comme un fait.", better: "Noter ta remarque à part, avec le numéro et l'indice du document, et la remettre à ton chef d'équipe." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "La feuille 2 qui n'a pas été imprimée",
      fig: 'c1-plan-fictif',
      context: [
        "Mardi, 14 h. Ton dossier est imprimé. Le plan `EX-48213`, indice C, validé, te donne le sens de pose d'un support, mais son cartouche dit « Feuille 1/2 » et tu n'as que cette feuille : l'impression s'est arrêtée là. Dans les notes, la note 2 dit « Sens : flèche. Voir aussi feuille 2. »",
        "Yanis, qui a posé le support jumeau de l'autre côté ce matin, regarde par-dessus ton épaule : « La flèche pointe vers l'avant, comme chez moi. Vas-y, la feuille 2, c'est de la déco. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je pose le support flèche vers l'avant, comme Yanis l'a fait ce matin.", why: "Yanis a posé un autre support, peut-être à un autre indice, et surtout il ne t'a pas montré un document. La note 2 renvoie à la feuille 2 : c'est un renvoi, donc une consigne, pas de la déco." },
        { t: "Je demande la feuille 2 (dossier numérique ou chef d'équipe) avec le numéro et l'indice du plan, et j'avance en attendant sur ce qui n'en dépend pas.", ok: true, why: "Tu cherches l'information là où elle doit être, tu la demandes de façon précise (EX-48213, indice C, feuille 2), et tu continues les opérations indépendantes. C'est le mouvement chercher, demander, attendre." },
        { t: "Je regarde la feuille 2 sur le téléphone de Yanis, qui l'a photographiée hier.", why: "Une photo n'a pas d'état validé et ne dit pas quel indice elle montre. Si le plan a été remplacé depuis, tu lis une version périmée sans le savoir." },
        { t: "Je mesure la position des trous sur la feuille 1 pour contrôler qu'elle est cohérente avec le support.", why: "Mesurer un dessin ne renseigne pas sur une consigne écrite ailleurs. Et rien ne te dit que la feuille 1 est à l'échelle sur ton impression." },
      ],
      debrief: "Le renvoi « voir aussi feuille 2 » n'est pas décoratif : c'est une consigne qui dit que le document est incomplet entre tes mains. Yanis a raison sur un point, la flèche, et rien ne prouve qu'il ait raison sur le reste. La règle de métier : un plan « 1/2 » dont tu n'as pas toutes les feuilles ne se travaille pas. Le coût est de quelques minutes d'attente ; le coût inverse est un support présenté à l'envers ou une condition de pose manquée.",
    },
    {
      title: "L'instruction dit 4, la nomenclature dit 6",
      context: [
        "Vendredi, 9 h. Opération 30 de l'instruction `EX-IT-2207`, indice C : « Poser quatre vis avec leurs rondelles (repère 2). » Dans la nomenclature du plan `EX-48213`, indice C, validé, la ligne du repère 2 indique quantité 6. Sur la vue, tu comptes quatre trous.",
        "Karim, ton voisin de poste, résume : « Quatre trous, l'instruction dit quatre : c'est la nomenclature qui a une faute. Prends quatre vis, il n'y a pas de quoi appeler quelqu'un. »",
      ],
      question: "Que fais-tu avant de prélever des vis ?",
      options: [
        { t: "Je prends quatre vis : le dessin et l'instruction concordent, la nomenclature est sûrement fautive.", why: "Deux documents sur trois ne sont pas une preuve, et le raisonnement de Karim est peut-être juste. Mais il se peut aussi que le plan ait été modifié sans que l'instruction soit mise à jour. Seul celui qui définit le produit sait lequel est à corriger." },
        { t: "Je prends six vis, par prudence : mieux vaut en avoir de trop que pas assez.", why: "Deux vis en trop sur ta servante sont deux vis qui ne seront pas comptées en fin de poste, ou deux vis perdues dans la zone, et le comptage ne tombera plus juste." },
        { t: "Je m'arrête sur l'opération 30, je note les deux passages (instruction EX-IT-2207, indice C, opération 30 : quatre ; plan EX-48213, indice C, repère 2 : six) et je les remets à mon chef d'équipe pour qu'il fasse trancher.", ok: true, why: "Tu ne sais pas quel document est à corriger et tu n'as pas à le décider. Deux citations exactes permettent à celui qui reçoit ton signalement de répondre vite, sans te rappeler. Tu peux avancer sur une opération indépendante en attendant." },
        { t: "Je prends quatre vis et j'écris six sur la fiche de suivi pour que tout colle à la nomenclature.", why: "Tu fabriques une trace fausse : la fiche dirait que six vis ont été posées alors qu'il y en a quatre. C'est pire que le désaccord de départ, parce qu'il devient invisible." },
      ],
      debrief: "Quand deux documents d'un même dossier se contredisent, la question n'est pas « lequel a l'air juste ? » mais « qui a l'autorité de trancher ? ». Ce n'est pas toi, et ce n'est pas Karim. Ton rôle est de rendre l'écart précis et transmissible : numéro, indice, passage de chaque document. La réponse viendra par écrit ; tu la reprendras dans ta trace. Ne rien combler, ne rien falsifier.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    {
      id: 'c1-q1', type: 'hotid', fig: 'c1-lire-cartouche',
      concept: "Cases du cartouche",
      q: "Pour chaque case mise en évidence dans le cartouche, choisis son nom dans la liste.",
      targets: [{ part: 'numero' }, { part: 'feuille' }, { part: 'etat' }, { part: 'echelle' }],
      explain: "Le numéro de plan est l'identifiant que cite l'instruction. La feuille (1 / 2) dit combien de feuilles forment le plan. L'état dit si le plan est utilisable. L'échelle donne le rapport entre le dessin et l'objet réel : à ne pas confondre avec une cote.",
    },
    {
      id: 'c1-q2', type: 'input',
      concept: "Quantité pour un ensemble",
      q: "Tu poses deux ensembles identiques dans la zone. Lis la nomenclature et saisis le nombre total de vis (repère 2) dont tu as besoin.",
      doc: {
        title: "Nomenclature du plan EX-48213, indice C — document fictif pédagogique",
        table: {
          head: ['REP', 'DÉSIGNATION', 'RÉFÉRENCE', 'QTÉ POUR UN ENSEMBLE'],
          rows: [
            ['1', 'SUPPORT', 'EX-48213-07', '1'],
            ['2', 'VIS', 'EX-90211-05', '4'],
            ['3', 'RONDELLE', 'EX-90305-02', '4'],
          ],
        },
        note: "Document inventé pour l'exercice.",
      },
      answers: ['8'],
      explain: "La colonne dit « pour un ensemble » : la quantité d'une ligne vaut pour un seul exemplaire de l'ensemble dessiné. Deux ensembles, donc deux fois quatre vis, soit huit. Lire « 4 » et préparer quatre vis est l'erreur classique, découverte seulement au moment du deuxième support.",
    },
    {
      id: 'c1-q3', type: 'order',
      concept: "Ordre de lecture d'un plan",
      q: "Remets dans l'ordre les étapes pour trouver une information sur un plan.",
      items: [
        "Ouvrir le plan cité par l'instruction de travail",
        "Lire le numéro de plan et vérifier qu'il correspond",
        "Vérifier l'indice et l'état, et compter les feuilles",
        "Passer de la bulle à la ligne de nomenclature",
        "Regarder les vues et la coupe",
        "Lire les notes et suivre les renvois",
      ],
      explain: "On part du document qui te cite, puis on vérifie que c'est le bon plan avant de chercher quoi que ce soit dedans. La nomenclature précède les vues : on sait de quelle pièce on parle avant de regarder où elle va. Les notes viennent en dernier, mais avant de commencer à travailler, parce qu'elles peuvent contenir une condition ou un renvoi.",
    },
    {
      id: 'c1-q4', type: 'sort',
      concept: "Rôle des documents",
      q: "Classe chaque document ou source selon son rôle dans le travail.",
      bins: ["Définit ce qu'il faut obtenir", "Explique comment procéder", "Garde la trace", "Ne fait pas foi"],
      items: [
        { t: "Le plan", bin: 0, why: "Il montre l'objet fini et la position de chaque pièce : c'est une définition." },
        { t: "La nomenclature", bin: 0, why: "Elle dit de quelles pièces l'ensemble est fait et en quelle quantité : elle fait partie de la définition." },
        { t: "L'instruction de travail", bin: 1, why: "Elle décrit les opérations dans l'ordre, avec les moyens et les contrôles." },
        { t: "La suite d'opérations numérotées 10, 20, 30…", bin: 1, why: "C'est le corps de l'instruction : la méthode, opération par opération." },
        { t: "La fiche de suivi visée opération par opération", bin: 2, why: "Elle garde ce qui a été fait, par qui et quand." },
        { t: "La case cochée en fin de liste de contrôle", bin: 2, why: "Elle enregistre qu'un point a été vérifié : c'est une trace." },
        { t: "La photo du plan prise par un collègue il y a trois semaines", bin: 3, why: "Aucun indice vérifiable, aucun état : elle ne se met pas à jour." },
        { t: "« On a toujours fait comme ça »", bin: 3, why: "Un souvenir n'est pas un document ; il ne dit rien de la version du jour." },
      ],
      explain: "Définir, expliquer, garder la trace : trois rôles que les documents du dossier se partagent. Tout ce qui n'est pas dans le dossier, sous son indice et son état, ne fait pas foi : cela peut t'aider à réfléchir, jamais à décider.",
    },
    {
      id: 'c1-q5', type: 'mcq',
      concept: "Indice différent de l'instruction",
      q: "Ton instruction cite le plan EX-48213, indice C. Le plan que tu ouvres porte l'indice D et l'état « validé ». Choisis la meilleure conduite.",
      options: [
        { t: "Je travaille avec l'indice D : il est plus récent et validé.", why: "Validé veut dire utilisable, pas applicable à ton dossier. Ton instruction cite C : D peut ne pas encore s'appliquer à ton avion." },
        { t: "Je ne travaille pas avec et je signale les deux indices exacts à mon chef d'équipe, en attendant de savoir lequel s'applique.", ok: true, why: "Les deux documents sont valides mais ne concordent pas. Choisir entre eux revient à ceux qui définissent la pièce ; ton rôle est de rendre l'écart précis et de ne pas le trancher." },
        { t: "Je cherche l'indice C sur une ancienne copie et je travaille avec elle.", why: "Une ancienne copie n'a pas été suivie : elle peut être périmée, et tu ne le verrais pas." },
        { t: "Je travaille avec D et je corrige C en D dans l'instruction pour que tout concorde.", why: "Tu modifies un document de référence sans en avoir le droit, et tu effaces la trace du désaccord." },
      ],
      explain: "Le bon indice est celui que demande ton dossier, pas le plus récent. Face à deux versions valides qui ne concordent pas avec le dossier, on s'arrête et on signale avec précision. Cette décision n'appartient pas à celui qui pose.",
    },
    {
      id: 'c1-q6', type: 'mcq',
      concept: "Échelle",
      q: "Le cartouche dit « échelle 1 : 2 ». Choisis la longueur dessinée d'un côté qui mesure 100 mm sur l'objet réel.",
      options: [
        { t: "50 mm", ok: true, why: "1 : 2 veut dire que le dessin est deux fois plus petit que l'objet : 100 mm réels deviennent 50 mm sur le dessin." },
        { t: "100 mm", why: "Ce serait l'échelle 1 : 1, grandeur nature." },
        { t: "200 mm", why: "Ce serait l'échelle 2 : 1, où le dessin est deux fois plus grand que l'objet. Tu as lu le rapport dans l'autre sens." },
        { t: "On ne peut pas le savoir sans la mesurer sur le plan.", why: "L'échelle sert justement à lier la taille du dessin à celle de l'objet. Mais pour travailler, on lit les cotes plutôt que de mesurer." },
      ],
      explain: "Le premier nombre est le dessin, le second l'objet : 1 : 2, un pour deux, un dessin deux fois plus petit. L'échelle aide à comprendre la taille relative ; elle ne remplace jamais une cote écrite.",
    },
    {
      id: 'c1-q7', type: 'multi',
      concept: "Information manquante",
      q: "Il te manque une information de sens de pose sur le plan. Coche toutes les actions correctes.",
      options: [
        { t: "Chercher sur la feuille suivante du plan et dans ses notes", ok: true, why: "Une information qui manque est souvent sur la feuille qu'on n'a pas ouverte." },
        { t: "Suivre le renvoi cité par une note ou par l'instruction", ok: true, why: "Un renvoi est une consigne : le document cité peut contenir exactement ce qui manque." },
        { t: "Demander à mon chef d'équipe en donnant numéro, indice, feuille et ce que je cherche", ok: true, why: "Une demande précise permet de répondre sans te rappeler et laisse une trace de la question." },
        { t: "Mesurer à la règle sur le plan imprimé", why: "Un plan n'est pas fait pour être mesuré ; tu fabriquerais une valeur qui n'est écrite nulle part." },
        { t: "Reprendre le sens de la pièce posée à côté", why: "Rien ne prouve que la pièce voisine a été posée correctement, ni qu'elle suit le même indice." },
      ],
      explain: "Chercher d'abord là où l'information peut légitimement se trouver, puis demander avec précision, puis attendre. Ne jamais combler le trou avec ce qui est à portée de main : une mesure, un voisin, un souvenir.",
    },
    {
      id: 'c1-q8', type: 'match',
      concept: "Où trouver quoi sur un plan",
      q: "Relie ce que tu cherches à l'endroit du plan où tu le trouves.",
      pairs: [
        { l: "Savoir si ce plan est bien celui que cite l'instruction", r: "Numéro de plan et indice du cartouche" },
        { l: "Savoir combien de rondelles prévoir", r: "Ligne de nomenclature indiquée par la bulle" },
        { l: "Savoir s'il existe une autre feuille", r: "Case « feuille » du cartouche (1 / 2)" },
        { l: "Savoir de quel côté on regarde la coupe", r: "Flèches aux extrémités du trait de coupe" },
        { l: "Retrouver l'unité des dimensions", r: "Case « unité » ou notes du plan" },
      ],
      explain: "Chaque question a un endroit précis. Le cartouche prouve que c'est le bon plan et dit combien de feuilles il a ; la nomenclature, reliée au dessin par la bulle, donne les quantités ; les flèches du trait de coupe disent de quel côté on regarde ; l'unité est dans le cartouche ou les notes.",
    },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "Un dossier de travail rassemble six familles de documents, chacune répondant à une question : plan (où, comment ça ressemble), nomenclature (quelles pièces, combien), instruction (quoi faire, dans quel ordre), fiche de suivi (qui a fait quoi), liste de contrôle (rien d'oublié), étiquette (quelle pièce).",
    "Le cartouche se lit avant le dessin : numéro, indice, feuille, état. C'est ce qui prouve que le plan est le bon, complet et utilisable.",
    "Un document applicable a le bon numéro, le bon indice et le bon état. Le bon indice est celui que cite l'instruction, pas le plus récent.",
    "La bulle est le pont du dessin vers la nomenclature : on entre par le repère, on lit la référence et la quantité sur la même ligne, sans les confondre.",
    "Le plan définit, l'instruction explique, la fiche de suivi garde la trace ; photo, note et souvenir ne font jamais foi.",
    "Un renvoi est une consigne : on ouvre le document cité, avec son indice, avant de continuer.",
    "On ne mesure jamais sur un dessin : on lit les cotes, et si une cote manque, on la demande.",
    "Information manquante, illisible ou contradictoire : chercher là où elle peut être, demander avec numéro, indice et feuille, attendre la réponse. Jamais combler avec le voisin ou un souvenir.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'c2', teaser: "Tu sais maintenant lire le dossier et trouver le bon document. Reste la pièce elle-même : comment prouve-t-on que celle que tu as en main est celle que demande la nomenclature ? C'est l'identification : référence, indice, lot et numéro de série." },

  // Oral blanc
  oral: [
    {
      q: "Explique à un collègue qui débute ce qu'il y a dans un dossier de travail et pourquoi on ne travaille pas de mémoire.",
      expected: [
        "Plan, nomenclature, instruction de travail, fiche de suivi, liste de contrôle, étiquette",
        "Chaque document répond à une question différente",
        "Le plan et la nomenclature définissent, l'instruction explique, la fiche de suivi garde la trace",
        "Les documents évoluent (indice) : la mémoire d'une version passée peut être fausse",
        "Les documents se citent les uns les autres (renvois)",
      ],
      model: "Un dossier, c'est tout ce qu'il faut pour faire une intervention précise. Le plan dit à quoi ça doit ressembler et où va chaque pièce ; la nomenclature dit quelles pièces et combien ; l'instruction de travail dit quoi faire dans quel ordre ; la fiche de suivi garde la trace de ce qui a été fait ; la liste de contrôle évite les oublis ; l'étiquette suit la pièce. On ne travaille pas de mémoire parce que les documents changent : un plan modifié change d'indice, et ce que j'ai fait la dernière fois peut ne plus être applicable. Et les documents se renvoient les uns aux autres : une note dit « voir feuille 2 », une instruction cite un plan. Ce que je me rappelle ne m'en dit rien.",
    },
    {
      q: "On te donne un plan. Explique comment tu trouves combien de rondelles il te faut et dans quel sens poser le support.",
      expected: [
        "Je commence par le cartouche : numéro, indice, feuille, état",
        "Je vérifie que numéro et indice sont ceux de l'instruction",
        "Je pars de la bulle, je lis la ligne de nomenclature : référence et quantité",
        "Je lis la vue (flèche de sens) et la coupe",
        "Je finis par les notes et les renvois avant de commencer",
      ],
      model: "Je commence par le cartouche : le numéro de plan et l'indice doivent être ceux que cite l'instruction de travail, l'état doit être validé, et je regarde combien de feuilles il y a pour ne pas en manquer. Ensuite je repère la rondelle sur le dessin, je lis le numéro de sa bulle et je vais à la ligne de ce numéro dans la nomenclature : j'y lis la référence et la quantité. Pour le sens de pose, je regarde la flèche dans la vue, et la coupe pour voir dans quel ordre vis, rondelle et support se superposent. Je termine par les notes et les renvois, avant de toucher à quoi que ce soit.",
    },
    {
      q: "L'instruction et le plan ne disent pas la même chose. Que fais-tu, et pourquoi ne tranches-tu pas toi-même ?",
      expected: [
        "Je m'arrête sur l'opération concernée",
        "Je note les deux passages avec numéro, indice, feuille",
        "Je remets cela à mon chef d'équipe ou au service qui prépare les documents",
        "Je ne choisis pas le plus récent ni le plus prudent",
        "Je ne falsifie aucune trace pour faire coller les documents",
      ],
      model: "Je m'arrête sur l'opération concernée et je note les deux passages avec le numéro de chaque document, son indice et l'endroit exact. Je le remets à mon chef d'équipe ou à la personne qui prépare les documents, pour que quelqu'un d'habilité tranche. Je ne le fais pas moi-même parce que je ne sais pas lequel est à corriger : un plan a pu être modifié sans que l'instruction soit mise à jour, ou l'inverse. Choisir le plus récent ou le plus prudent serait un pari. Et surtout, je ne modifie ni les documents ni ma fiche de suivi pour qu'ils se ressemblent : le désaccord doit rester visible.",
    },
  ],

  // Matrice de certification
  matrix: [
    {
      savoir: "Rôle des six documents d'un dossier de travail et construction d'un plan (cartouche, vues, coupe, bulles, nomenclature, notes).",
      savoirFaire: "Retrouver une information demandée dans un plan fictif et sa nomenclature, de la bulle à la référence et à la quantité.",
      comp: 'C1',
      ex: ['c1-a1', 'c1-a2', 'c1-a3', 'c1-q2', 'c1-q8'],
      proof: "Zones d'un plan touchées correctement ; références et quantités retrouvées dans les nomenclatures fictives ; documents associés à leur question.",
    },
    {
      savoir: "Lecture d'un cartouche ; notion d'indice, d'état et de document applicable ; échelle.",
      savoirFaire: "Vérifier qu'un document est applicable à son dossier (numéro, indice, état) et écarter un document périmé, en projet ou voisin.",
      comp: 'C1',
      ex: ['c1-a4', 'c1-q1', 'c1-q5', 'c1-q6'],
      proof: "Documents à écarter repérés sur la figure ; conduite correcte devant un indice qui ne concorde pas avec l'instruction ; cases du cartouche nommées.",
    },
    {
      savoir: "Rôles définir / expliquer / tracer, renvois, et conduite à tenir devant une information manquante, illisible ou contradictoire.",
      savoirFaire: "Organiser sa recherche dans le dossier, puis signaler avec précision (numéro, indice, feuille) ce qui manque ou se contredit au lieu de le deviner.",
      comp: 'C1',
      ex: ['c1-q3', 'c1-q4', 'c1-q7'],
      proof: "Ordre de lecture reconstitué ; classement des sources fait ; bonnes actions cochées en cas d'information manquante, et décisions argumentées dans les deux situations du chapitre.",
    },
  ],
});
