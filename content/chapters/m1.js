// Chapitre m1 — Le métier d'intégrateur cabine
CA.addChapter({
  id: 'm1',
  domain: 'M',
  order: 10,
  title: "Le métier d'intégrateur cabine",
  short: "Ce que tu fais, où, avec qui, ce qu'on attend de toi, et comment apprendre ici",
  minutes: 40,
  comps: ['C1'],
  prereq: [],
  sources: ['rncp40664', 'cqpm-0289-observatoire', 'afpa-cqp-integrateur-cabine', 'aerometiers-mecanicien-cabine', 'inrs-epi', 'skybrary-fod', 'rmbd-original'],

  // 1 ─────────────────────────────────────────────────────────────
  objectives: [
    "Expliquer en quelques phrases ce que fait un intégrateur cabine, en citant au moins cinq éléments qu'il installe.",
    "Situer sur un plan les lieux où il travaille et dire à quelle personne il s'adresse pour chaque type de question.",
    "Décrire une journée de travail type et dire, à chaque moment, quelle exigence du métier est en jeu : rigueur, soin du produit, traçabilité, sécurité, honnêteté sur les anomalies.",
    "Reconnaître les équipements de protection individuelle de base et dire contre quoi chacun protège.",
    "Nommer les deux blocs et les cinq compétences du CQP, et utiliser l'application pour apprendre : montrer, nommer, expliquer, pratiquer, réviser.",
  ],

  // 2 ─────────────────────────────────────────────────────────────
  why: [
    "Quand tu entreras dans un avion en cours d'aménagement, la première chose que tu verras ne ressemblera pas à une cabine : des câbles, des supports, des tôles nues, des cartons, des collègues de six métiers différents. Savoir dès maintenant à quoi sert ton travail dans cet ensemble, c'est ce qui t'empêche de te sentir perdue, et surtout de faire une chose utile au mauvais moment ou au mauvais endroit.",
    "Le métier a une particularité : presque tout ce que tu installes sera **recouvert**. Un faisceau passera derrière un panneau, une fixation disparaîtra sous un siège, un raccord d'eau sera caché sous un meuble. Personne ne regardera derrière toi à chaque geste. C'est pourquoi on attend de toi autant de **méthode** que d'adresse : savoir ce que tu fais, vérifier toi-même, laisser une trace, dire quand quelque chose ne va pas.",
    "Ce premier chapitre n'exige aucune connaissance technique. Il pose le décor : le métier, ses lieux, ses équipes, ses règles de base, le diplôme que tu prépares et la manière d'apprendre ici. Les chapitres suivants s'appuieront dessus, en commençant par la découverte de l'avion lui-même.",
  ],

  // 3 ─────────────────────────────────────────────────────────────
  discover: {
    fig: 'm1-parcours-aeronef',
    intro: "Voici, en huit vignettes, la vie d'un avion. Lis-la de gauche à droite et de haut en bas, comme une bande dessinée. Le petit personnage orange indique les moments où l'on a besoin d'un intégrateur cabine.",
    look: [
      "Combien de fois le personnage orange apparaît-il ? Quelle est la différence entre ces deux moments ?",
      "Dans la vignette 3, qu'est-ce qui est déjà installé dans le fuselage avant l'arrivée de l'intégrateur ? Pourquoi, à ton avis, dans cet ordre ?",
      "Dans la vignette 4, le fuselage a des hublots mais l'avion n'a ni moteurs ni trains. Qu'est-ce que cela te dit sur ce qu'on peut aménager et à quel stade ?",
      "Quelle vignette a besoin que la cabine soit terminée pour pouvoir avoir lieu ?",
    ],
  },

  // 4 ─────────────────────────────────────────────────────────────
  explain: [
    {
      h: "La place de la cabine dans la vie d'un avion",
      fig: 'm1-parcours-aeronef',
      p: [
        "Un [[aéronef]] (*aircraft*) est un appareil qui se déplace dans l'air : avion, hélicoptère, planeur, ballon. Ici, on parlera surtout d'avions de ligne. Un avion de ligne n'est pas fabriqué d'un seul tenant dans une seule usine. Ses grands morceaux (tronçons de fuselage, ailes, dérive) sont d'abord fabriqués séparément (vignette 1), parfois dans des sites différents, puis assemblés (vignette 2) : l'avion prend sa forme.",
        "Dans la structure encore vide, on installe ensuite les **systèmes** : câbles électriques, tuyaux, conduits d'air (vignette 3). Les grandes lignes sont les mêmes d'un constructeur à l'autre, mais l'ordre précis et le découpage des étapes changent selon le site et le programme.",
        "C'est après, ou en partie en même temps, qu'intervient l'**aménagement de la [[cabine]]** (vignette 4) : c'est ton étape. La cabine (*cabin*) est la partie de l'avion où voyagent les passagers. Elle est livrée comme un tube presque nu, et il faut y installer tout ce qui en fera un lieu où l'on peut s'asseoir, ranger ses affaires, boire un café, se laver les mains, respirer en cas de problème et sortir rapidement en cas d'urgence.",
        "Suivent les essais (vignette 5), au sol puis en vol, et la livraison à la compagnie aérienne, qui inspecte son avion avant de l'accepter (vignette 6). Puis l'avion vit, souvent plusieurs dizaines d'années (vignette 7). Pendant cette vie, la cabine change : on la répare, on la rénove, on modifie la disposition des sièges quand la compagnie change de stratégie. On retrouve alors des intégrateurs cabine dans des hangars de maintenance et de modification (vignette 8). Ton métier ne se limite donc pas à la chaîne de fabrication : il existe aussi sur des avions qui ont déjà volé.",
      ],
      callout: { kind: 'info', text: "La fiche officielle de la certification cite deux intitulés d'emplois : « intégrateur cabine aéronautique » et « intégrateur d'aménagement commercial aéronautique ». Le second rappelle qu'on aménage la cabine selon le choix commercial de la compagnie : nombre de sièges, classes, cuisines, toilettes." },
    },
    {
      h: "Ce que fait un intégrateur cabine",
      p: [
        "Intégrer, c'est **faire entrer un élément dans un ensemble de façon à ce qu'il en fasse partie** : positionné au bon endroit, fixé comme prévu, raccordé aux réseaux, contrôlé. Un [[intégrateur cabine]] (*cabin integrator*, ou *cabin fitter*) fait cela avec les éléments de la cabine. Concrètement, tu vas apprendre à travailler sur ce qui suit.",
      ],
      table: {
        head: ["Élément", "Ce que tu en fais", "Pourquoi c'est un vrai travail"],
        rows: [
          ["Sièges passagers", "Les amener, les engager sur les rails du plancher, les verrouiller, vérifier leur position", "Un siège plein doit tenir en cas de choc : sa fixation est un point de sécurité, pas du confort"],
          ["Rangements hauts (bagageries)", "Les positionner, les régler, les fixer sous la structure du plafond", "Ils sont lourds quand ils sont pleins et au-dessus de la tête des passagers"],
          ["Panneaux d'habillage (parois, plafond)", "Les présenter, les ajuster, les fixer sans les rayer", "C'est la partie que le passager voit et touche ; une rayure se voit aussi pour le client"],
          ["Galleys et toilettes", "Les acheminer d'un seul bloc, les fixer, raccorder l'eau et l'électricité", "Gros, lourds, raccordés à plusieurs réseaux : tout se joue sur le même meuble"],
          ["Faisceaux et connecteurs", "Les faire cheminer, les fixer, les connecter", "Un câble mal tenu frotte contre un angle et s'abîme, loin de tout regard"],
          ["Équipements divers (éclairage, signalétique, équipements de secours)", "Les installer et les raccorder", "Ils servent quand il y a un problème : ils doivent être là, accessibles et fixés"],
        ],
      },
    },
    {
      h: "Ce que tu ne fais pas",
      p: [
        "Un métier se définit aussi par ses limites. Tu n'assembles pas la structure de l'avion, tu ne la répares pas, tu ne la modifies pas : ce sont d'autres équipes, avec d'autres documents et d'autres habilitations. Tu ne choisis pas la disposition de la cabine, et tu ne décides pas non plus qu'un écart est acceptable : tu le signales à la personne qui peut en décider. Tu ne mets pas en service les systèmes : d'autres collègues les testent.",
        "Pourquoi cette séparation ? Parce qu'un avion est un produit dont chaque modification est justifiée, étudiée et enregistrée. Quand une personne perce, coupe ou règle « au jugé » ce qui n'est pas dans son travail, personne ne sait plus ce qui a été fait, et les conséquences peuvent apparaître des années plus tard. Dire « ça, ce n'est pas à moi, je préviens » est une compétence professionnelle, pas un manque d'initiative.",
      ],
    },
    {
      h: "Où tu travailles",
      fig: 'm1-lieux-de-travail',
      p: [
        "Regarde le plan. L'avion en poste (n° 1) est le centre de tout : ta cabine est la bande claire à l'intérieur du fuselage. On y accède par les portes, depuis des [[plateforme d'accès|plateformes d'accès]] (n° 2) placées contre le fuselage, avec escaliers. Tu ne t'appuies jamais sur la peau de l'avion pour monter : c'est la plateforme qui sert d'accès.",
        "Autour de l'avion, des lieux qui ont chacun leur règle. Le [[magasin d'outillage]] (*tool crib*, n° 3) est l'endroit où tu empruntes et rends tes outils : chacun est identifié et compté, pour qu'aucun ne reste dans l'avion. La zone logistique (n° 4) reçoit les pièces et les lots préparés pour chaque tâche. Le point d'équipe (n° 5) est le coin du tableau où l'on se retrouve en début de poste. L'allée de circulation (n° 6) est un chemin marqué où l'on marche, à l'écart des engins et des charges. L'établi (n° 7) permet de préparer ou de déballer un élément à l'extérieur de l'avion. Les bacs de tri (n° 8) reçoivent déchets et emballages.",
        "Selon l'entreprise, ce plan change beaucoup. Dans un grand hall d'assemblage, plusieurs avions sont en poste les uns derrière les autres ; dans un atelier de maintenance, un seul avion occupe un hangar ; une partie du travail, comme la préparation d'un panneau, peut se faire dans un atelier à côté. Le principe reste : un lieu pour **travailler**, un lieu pour **s'équiper**, un lieu pour **recevoir les pièces**, un lieu pour **trier**, et des chemins pour **circuler** en sécurité.",
      ],
      callout: { kind: 'tip', text: "Le premier jour, demande à ton tuteur ou à ta tutrice de te faire faire le tour à pied en nommant chaque endroit. Retrouve ensuite sur ton propre plan les huit éléments de la figure : c'est le meilleur moyen de ne pas t'égarer." },
    },
    {
      h: "Avec qui tu travailles",
      fig: 'm1-equipe-autour-de-toi',
      p: [
        "Le schéma te place au centre (n° 1) et montre les huit interlocuteurs que tu croiseras le plus souvent. Les noms de service changent d'une entreprise à l'autre ; ce qui compte, c'est de savoir **quel type de question va vers quel type de personne**.",
        "Le **[[chef d'équipe]]** (n° 2, *team leader*) répartit le travail du jour. C'est la première personne à qui tu signales une difficulté, une anomalie ou un doute. Les **méthodes** (n° 3, *manufacturing engineering*) écrivent les documents de travail : quoi monter, dans quel ordre, avec quels outils ; si une instruction te semble impossible, la question passe par ton chef d'équipe vers elles. La **qualité** (n° 4, *quality*) vérifie que le travail est conforme et traite les écarts que l'on déclare. Les **essais** (n° 5, *testing*) font fonctionner ce que tu as installé et raccordé. Le **client** (n° 6), la compagnie aérienne, a choisi la cabine et inspecte l'avion avant de l'accepter.",
        "Autour de toi, des collègues d'autres métiers. Les **équipes systèmes et électricité** (n° 7) posent et raccordent câbles et tuyaux, souvent dans la même zone que toi, parfois en même temps. L'**équipe structure** (n° 8) assemble et répare la structure de l'avion. La **logistique et le magasin** (n° 9) te fournissent pièces et outils. On appelle [[coactivité]] le fait que plusieurs équipes travaillent en même temps dans le même espace restreint : c'est la situation normale d'un avion en aménagement, et elle demande de se parler pour ne pas se gêner, ni se mettre en danger, ni abîmer le travail des autres.",
        "Quand on te dit « c'est à voir avec la qualité » ou « demande aux méthodes », ce n'est pas une façon de se débarrasser de toi : c'est l'organisation. Chaque service est responsable d'une partie des décisions, et une bonne intégratrice sait **qui décide quoi**.",
      ],
    },
    {
      h: "Une journée type (fictive)",
      p: [
        "Les journées varient, mais elles ont presque toutes la même forme. Le tableau suivant décrit une journée **inventée**, pour montrer l'enchaînement et surtout l'exigence qui se cache derrière chaque moment. Les horaires, eux, sont propres à chaque entreprise.",
      ],
      table: {
        head: ["Moment", "Ce qui se passe", "Exigence en jeu"],
        rows: [
          ["Arrivée", "Tu te changes, tu mets ta tenue et tes équipements de protection, tu vérifies leur état", "Sécurité"],
          ["Point d'équipe", "Le chef d'équipe distribue les tâches du jour et annonce les contraintes : qui travaille où, ce qui est interdit d'accès", "Coactivité, communication"],
          ["Préparation", "Tu lis ton document de travail, tu récupères tes pièces à la logistique et tes outils au magasin", "Rigueur : tu sais ce que tu vas faire et avec quoi"],
          ["Mise en place de la zone", "Tu protèges ce qui est déjà posé et le sol, tu regardes si la zone est propre", "Soin du produit, prévention des corps étrangers"],
          ["Installation", "Tu positionnes, fixes, raccordes ce qui t'est confié", "Rigueur, soin du produit"],
          ["Contrôle", "Tu vérifies toi-même ce que tu viens de faire, avant que quelqu'un d'autre le fasse", "Autocontrôle, honnêteté"],
          ["Trace", "Tu notes ce qui est fait, ce qui reste à faire, ce que tu as observé d'anormal", "Traçabilité"],
          ["Fin de poste", "Tu rends tes outils, qui sont comptés, tu ranges et nettoies ta zone, tu ramasses chutes et emballages", "Rangement, prévention des corps étrangers"],
        ],
      },
    },
    {
      h: "Ce qu'on attend de toi",
      p: [
        "Cinq exigences reviennent dans toutes les entreprises du secteur. Chacune a une raison très concrète.",
        "**La rigueur.** Un avion transporte des personnes ; ses éléments ne s'installent pas « à peu près ». Concrètement : tu lis ton document avant d'agir, tu utilises l'outil prévu, tu respectes l'ordre des opérations. Ce que tu ne sais pas, tu le cherches dans le bon document et tu ne le devines pas.",
        "**Le soin du produit.** Les pièces sont chères, certaines sont uniques pour un client précis, et tout est livré neuf : une rayure sur un panneau décoratif, une salissure sur un siège, une trace d'outil sur un rail se voient et font remplacer la pièce. Le soin se traduit en gestes simples : protéger, poser plutôt que jeter, nettoyer ce que tu salis.",
        "**La traçabilité.** On doit pouvoir retrouver, longtemps après, **ce qui a été fait, par qui, avec quelle pièce, quel outil, à quel moment**. La [[traçabilité]] n'est pas de la paperasse : si un lot de fixations est rappelé par son fabricant, c'est elle qui permet de savoir sur quels avions il a été monté.",
        "**La sécurité.** La tienne d'abord (tes EPI, ta manière de porter, les zones interdites), celle de tes collègues en coactivité, et celle des futurs passagers, qui ne verront jamais ton travail mais en dépendront. La sécurité est aussi une affaire de propreté : un objet oublié dans l'avion, qu'on appelle [[FOD]] (*foreign object debris*, corps étranger), peut bloquer une commande ou un mécanisme. Le chapitre sur le FOD y reviendra en détail.",
        "**L'honnêteté sur les anomalies.** C'est l'exigence la moins attendue des débutants, et l'une des plus importantes. Une [[anomalie]] (*non-conformity*, *discrepancy*) est tout ce qui ne correspond pas à ce qui est prévu : une pièce abîmée, un trou qui ne tombe pas en face, une rayure, une étiquette illisible, un objet oublié. Tu as le droit de te tromper, de casser, de rayer : cela arrive à tout le monde. Ce qui est grave, c'est de le cacher. Une anomalie **déclarée** est traitée et réglée ; une anomalie **cachée** reste dans l'avion, et c'est là qu'elle coûte le plus cher : on la découvre trop tard, parfois en service.",
      ],
      callout: { kind: 'warn', text: "Règle de métier à retenir dès aujourd'hui : on ne cache jamais une anomalie, même petite, même si c'est toi qui l'as causée. La déclarer n'est pas te dénoncer : c'est le seul moyen de la faire traiter. Les entreprises du secteur le savent et organisent leur travail autour de cette idée." },
    },
    {
      h: "Les mots de l'atelier, dès le premier jour",
      p: [
        "Tu entendras certains mots tous les jours. Les voici avec leur sens exact : ils seront repris dans les chapitres suivants. Chaque mot est aussi dans le glossaire de l'application, avec son équivalent anglais, car la documentation aéronautique est très souvent en anglais.",
      ],
      table: {
        head: ["Mot", "Sens dans l'atelier", "En anglais"],
        rows: [
          ["Aéronef", "Tout appareil qui se déplace dans l'air : avion, hélicoptère, ballon…", "Aircraft"],
          ["Cabine", "La partie de l'avion où voyagent les passagers", "Cabin"],
          ["Instruction de travail", "Document qui décrit comment réaliser une opération : étapes, outils, vérifications", "Work instruction"],
          ["Anomalie", "Tout écart entre ce qui est prévu et ce qui est constaté", "Non-conformity, discrepancy"],
          ["Traçabilité", "Capacité de retrouver ce qui a été fait, avec quoi, par qui", "Traceability"],
          ["Coactivité", "Plusieurs équipes qui travaillent en même temps au même endroit", "Concurrent activity"],
          ["FOD", "Objet étranger oublié ou tombé : vis, outil, déchet, gant", "Foreign object debris"],
          ["EPI", "Équipement de protection individuelle porté par la personne", "PPE (personal protective equipment)"],
        ],
      },
    },
    {
      h: "Les EPI de base",
      fig: 'm1-epi-de-base',
      p: [
        "Un [[EPI]] (équipement de protection individuelle) est un équipement que **tu portes** pour te protéger d'un risque qu'on n'a pas pu supprimer autrement. À gauche de la figure, une personne équipée ; à droite, chaque équipement en grand. Reconnaître chaque pièce et savoir contre quoi elle protège est la première chose à apprendre.",
        "La **tenue de travail** (n° 1) est un vêtement couvrant et fermé. Elle protège la peau, mais ses poches fermées évitent aussi de semer des objets dans l'avion : une vis qui glisse d'une poche ouverte est un FOD. Les **lunettes de protection** (n° 2) protègent les yeux des projections, poussières et copeaux, y compris par les côtés ; elles se portent même pour une opération qui paraît anodine, car l'œil ne se « répare » pas. Les **protections auditives** (n° 3), casque ou bouchons, atténuent le bruit des outils et du hall.",
        "Les **gants** (n° 4) protègent des coupures et des arêtes ; il existe plusieurs modèles, et le bon dépend de la tâche, que ton chef d'équipe ou ton document précise. Les **chaussures de sécurité** (n° 5) ont un bout renforcé qui protège les orteils d'un écrasement ou d'une chute d'objet, et une semelle faite pour ne pas glisser. La **casquette anti-heurt** (n° 6) cache une coque rigide : elle protège le crâne quand on se cogne contre un élément fixe, mais pas d'une chute d'objet lourd ; ce n'est pas un casque. Les **genouillères** (n° 7) servent quand on travaille au sol, par exemple pour poser un siège ou vérifier un rail.",
        "Une règle générale, applicable à tous : la liste précise des EPI **obligatoires** est fixée par ton entreprise, zone par zone et tâche par tâche. Ton rôle est de la connaître, de porter les équipements en bon état, de signaler un EPI abîmé, et de ne jamais s'en passer « juste pour cette fois ». Dans beaucoup d'entreprises, bijoux, montres et objets dans les poches sont aussi interdits ou limités dans l'avion : ils rayent, se prennent dans un mécanisme ou tombent. Les règles locales s'appliquent.",
      ],
    },
    {
      h: "Le CQP : deux blocs, cinq compétences",
      fig: 'm1-cinq-competences',
      p: [
        "Tu prépares un **CQP**, certificat de qualification professionnelle : un titre professionnel de la métallurgie, intitulé « Intégrateur cabine aéronautique », enregistré au répertoire national sous le numéro RNCP40664, de niveau 3 selon la nomenclature française. Il remplace une ancienne fiche (RNCP36363), de même intitulé : si tu vois ce numéro dans un vieux document, c'est le même métier.",
        "La fiche le découpe en **deux [[bloc de compétences|blocs de compétences]]**. Le premier, appelé **BC01**, concerne la **préparation et la mise en œuvre des opérations de protection et d'acheminement** des éléments dans une structure aéronautique. Il regroupe trois compétences : préparer, organiser et repérer son intervention dans l'aéronef (C1, ici n° 1) ; installer les protections des éléments à intégrer et de l'environnement (C2, n° 2) ; acheminer les éléments sur la zone d'intervention (C3, n° 3).",
        "Le second, **BC02**, concerne l'**installation des éléments** dans une structure aéronautique, avec deux compétences : positionner, assembler, régler, fixer et/ou démonter les éléments (C4, n° 4) ; cheminer et connecter les différents systèmes — eau, air, oxygène, électricité, métallisations (C5, n° 5). Attention : les repères « C1 à C5 » sont une numérotation de **cette application** ; sur la fiche officielle, les compétences sont listées sans numéro.",
        "Regarde l'ordre : il suit l'ordre réel d'une intervention. On prépare, on protège, on achemine, puis on installe, puis on connecte. Sous les cinq flèches, deux bandes (n° 6 et n° 7) rappellent ce qui accompagne chaque étape : **contrôler** à chaque fois, et **tracer** ce qui est fait. Elles ne sont pas des compétences du référentiel : ce sont les habitudes qui rendent le reste fiable.",
        "Comment la certification est-elle évaluée ? Les textes décrivent une évaluation **en situation professionnelle réelle** (en entreprise ou en centre habilité), la présentation des activités réalisées, et l'avis de l'entreprise. Les critères du référentiel de branche portent sur quatre familles : les **méthodes** utilisées, les **moyens** (outils et équipements valides et disponibles), les **liens professionnels** (communication, signalement d'anomalies) et les **contraintes d'environnement** (normes aéronautiques, sécurité, recherche de FOD). Cela confirme ce que tu viens de lire : savoir faire un geste ne suffit pas, il faut aussi communiquer, respecter les règles et laisser le travail propre.",
        "Les modalités précises (seuils, durée des épreuves, calendrier) ne sont pas décrites ici : elles dépendent de ton organisme de formation et de la certification, qui te les donnent. Cette application est un **compagnon d'apprentissage**. Elle t'entraîne, te fait réviser et te donne des preuves de ta progression ; elle ne remplace pas l'évaluation, et un score obtenu ici n'est jamais une certification.",
      ],
    },
    {
      h: "Comment apprendre avec cette application",
      p: [
        "Chaque chapitre suit le même chemin, pensé pour quelqu'un qui découvre : **montrer → nommer → expliquer → pratiquer**. On te **montre** d'abord (une figure : regarde avant de lire), on te donne le **nom** français et anglais, on t'**explique** à quoi ça sert, puis tu **pratiques** : exercices tactiles sur les figures, classements, remises dans l'ordre, situations de décision, et enfin un oral à faire à voix haute.",
        "Quelques conseils pour en tirer le plus. Regarde la figure **avant** de lire le texte : tu le comprendras mieux. Touche les parties de la figure : les numéros t'aident à retrouver ce que le texte décrit. Quand tu te trompes à un exercice, lis la correction : elle explique pourquoi, et c'est souvent là que tu apprends le plus. Lis par séquences courtes, de dix à vingt minutes, plutôt qu'un chapitre d'une traite : le cerveau retient mieux ce qu'il revoit après une pause.",
        "Cette idée a un nom : la [[révision espacée]] (*spaced repetition*). On retient davantage une notion qu'on revoit à des intervalles de plus en plus longs que si on la relit dix fois de suite. C'est pourquoi les termes de vocabulaire et les points à retenir de chaque chapitre te sont proposés à réviser sous forme de cartes, que tu revois plus ou moins souvent selon ta facilité. Une carte difficile revient plus vite ; une carte maîtrisée s'espace.",
        "Dernier point : l'oral. À la fin de chaque chapitre, quelques questions te demandent d'expliquer le sujet **à voix haute**, comme à un nouveau collègue. Si tu sais l'expliquer sans regarder, tu l'as vraiment appris ; si tu bloques, retourne à la figure, c'est qu'il manque un morceau. Et sache que **se tromper ici ne coûte rien** : c'est l'endroit prévu pour cela, avant d'être face à de vrais éléments.",
      ],
      callout: { kind: 'tip', text: "Après chaque chapitre, ferme l'application et explique-le à voix haute à quelqu'un, ou à un mur. Les endroits où tu cherches tes mots sont exactement ceux à retravailler." },
    },
  ],

  // 5 ─────────────────────────────────────────────────────────────
  vocab: [
    { fr: "Aéronef", en: "Aircraft", def: "Tout appareil capable de se déplacer dans l'air : avion, hélicoptère, planeur, ballon.", tip: "Aéro + nef : un « navire » de l'air." },
    { fr: "Cabine", en: "Cabin", def: "Partie de l'avion où voyagent les passagers ; c'est l'espace que tu vas aménager." },
    { fr: "Intégrateur cabine", en: "Cabin integrator (cabin fitter)", def: "Professionnel qui positionne, fixe, raccorde et contrôle les éléments qui composent la cabine d'un avion : sièges, rangements, panneaux, galleys, toilettes, câblages." },
    { fr: "Aménagement de cabine", en: "Cabin furnishing (cabin interior installation)", def: "Ensemble des opérations qui transforment un fuselage presque nu en cabine utilisable par des passagers." },
    { fr: "CQP", en: "Professional qualification certificate", abbr: "CQP", def: "Certificat de qualification professionnelle, titre créé par une branche professionnelle (ici la métallurgie) et reconnu au répertoire national." },
    { fr: "Bloc de compétences", en: "Skills block", def: "Ensemble cohérent de compétences d'une certification, évaluable séparément. Le CQP intégrateur cabine en compte deux : BC01 et BC02." },
    { fr: "Instruction de travail", en: "Work instruction", def: "Document qui décrit comment réaliser une opération : les étapes, les outils, les vérifications. On la suit au pied de la lettre." },
    { fr: "Anomalie", en: "Non-conformity (discrepancy)", def: "Tout écart entre ce qui est prévu et ce qui est constaté : pièce abîmée, rayure, étiquette illisible, objet oublié. On la déclare, on ne la cache pas." },
    { fr: "Traçabilité", en: "Traceability", def: "Possibilité de retrouver, après coup, ce qui a été fait, par qui, avec quelle pièce et quel outil.", tip: "Trace → on retrouve la trace." },
    { fr: "Coactivité", en: "Concurrent activity", def: "Situation où plusieurs équipes travaillent en même temps dans le même espace ; elle impose de se parler et de protéger le travail des autres." },
    { fr: "Objet étranger (FOD)", en: "Foreign object debris", abbr: "FOD", def: "Tout objet qui ne doit pas se trouver dans l'avion : vis, outil, chute, gant, emballage. Il peut bloquer un mécanisme ou une commande." },
    { fr: "Équipement de protection individuelle", en: "Personal protective equipment", abbr: "EPI", def: "Équipement porté par la personne pour se protéger d'un risque qui n'a pas pu être supprimé : lunettes, gants, chaussures de sécurité, protections auditives." },
    { fr: "Magasin d'outillage", en: "Tool crib", def: "Lieu où l'on emprunte et rend les outils, chacun identifié et compté, pour qu'aucun ne soit oublié dans l'avion." },
    { fr: "Chef d'équipe", en: "Team leader", def: "Personne qui répartit le travail, donne les consignes du jour et reçoit en premier les signalements de son équipe." },
    { fr: "Plateforme d'accès", en: "Access platform (dock)", def: "Plancher avec escalier placé contre l'avion pour accéder aux portes et aux zones hautes sans s'appuyer sur la structure." },
    { fr: "Révision espacée", en: "Spaced repetition", def: "Méthode qui consiste à revoir une notion à des intervalles de plus en plus longs, ce qui fixe la mémoire durablement.", tip: "Revoir peu, mais souvent, et de moins en moins souvent." },
  ],

  // 6 ─────────────────────────────────────────────────────────────
  example: {
    title: "Mercredi, 10 h 35 : une rayure que tu n'as pas faite",
    body: [
      "Tu prépares la pose d'un panneau de paroi dans la zone avant. En présentant ta pièce, tu remarques sur le panneau voisin, déjà posé hier par l'autre équipe, une rayure fine de quinze centimètres environ, très nette sous la lumière de ta lampe. Personne n'est dans la zone. Tu pourrais passer : ce n'est pas ton panneau, ce n'est pas toi qui l'as rayé, et personne ne se souviendrait.",
      "Tu appelles Samia, ta tutrice, sans toucher à rien. Elle regarde, ne cherche pas à frotter pour voir, prend une photo à côté d'une règle comme il est prévu dans l'entreprise, et te demande quelques précisions : où exactement, à quelle heure tu l'as vue, y a-t-il des traces de ruban adhésif ou de chariot dans le passage ? Elle te laisse remplir avec elle la fiche de signalement. Le panneau sera expertisé par la qualité : retouche, remplacement ou acceptation, ce n'est pas à vous de le décider.",
      "En fin de poste, Samia te dit pourquoi cela compte. Si la rayure avait été découverte par le client après la livraison, on aurait cherché qui, quand, comment, et pendant ce temps le défaut aurait coûté bien plus cher à corriger. Et surtout, elle ajoute : « Aujourd'hui tu as trouvé la rayure de quelqu'un d'autre. Demain, ce sera peut-être la tienne : ce jour-là, c'est ce que tu auras fait aujourd'hui qui comptera. »",
    ],
    doc: {
      title: "Fiche de signalement d'anomalie — document fictif pédagogique",
      lines: [
        ["Repère de la fiche", "EX-SIG-0147"],
        ["Zone", "Cabine, côté droit, partie avant (zone fictive A)"],
        ["Élément concerné", "Panneau de paroi (référence fictive EX-31020-04)"],
        ["Constat", "Rayure fine d'environ 15 cm, visible sous éclairage rasant"],
        ["Constaté par", "Intégratrice en cours de formation, avec sa tutrice"],
        ["Heure du constat", "10 h 35"],
        ["Action immédiate", "Zone non modifiée, photo prise, panneau non touché"],
        ["Suite", "Transmis à la qualité pour décision"],
      ],
      note: "Fiche imaginée pour apprendre : celles de ton entreprise auront un autre format et d'autres rubriques.",
    },
  },

  // 7 ─────────────────────────────────────────────────────────────
  demo: {
    title: "Suivre une intervention de la compétence 1 à la compétence 5",
    fig: 'm1-cinq-competences',
    steps: [
      { label: "C1 — Je prépare", text: "Tâche fictive : installer une rangée de panneaux de paroi et en raccorder l'éclairage. Je lis l'instruction de travail, je repère la zone sur le plan, je rassemble mes pièces et mes outils. Je sais ce que je fais, où et avec quoi avant de toucher à quoi que ce soit.", hl: ['c1'] },
      { label: "C2 — Je protège", text: "Avant de poser quoi que ce soit, je protège le sol, les sièges déjà en place et les arêtes proches du passage. Ce sont les éléments « à intégrer » et « l'environnement » du libellé : on protège autant ce qu'on pose que ce qui est déjà là.", hl: ['c2'] },
      { label: "C3 — J'achemine", text: "Je transporte les panneaux jusqu'à la zone sans les coincer ni les rayer : bon chariot, trajet reconnu, un collègue pour guider. Je ne laisse rien traîner dans le passage.", hl: ['c3'] },
      { label: "C4 — J'installe", text: "Je présente un panneau, je l'ajuste, je le fixe avec l'outil et les fixations prévus par l'instruction. Si je dois en démonter un pour accéder à un cadre, je le range sans le poser par terre.", hl: ['c4'] },
      { label: "C5 — Je connecte", text: "Derrière le panneau, un connecteur d'éclairage attend : je le branche en suivant le cheminement prévu, sans tension sur le câble. C'est le moment où je dois être le plus rigoureuse, car personne ne reverra cette liaison une fois le panneau fermé.", hl: ['c5'] },
      { label: "Contrôler à chaque étape", text: "Je vérifie moi-même : le panneau est bien en place, rien n'est oublié derrière, aucune rayure sur ce que je touche.", hl: ['controle'] },
      { label: "Tracer ce qui est fait", text: "Je note ce qui est fait et ce que j'ai observé. Si j'ai trouvé une anomalie, elle y figure aussi : c'est la trace qui permet à la suite de la chaîne de travailler.", hl: ['trace'] },
    ],
  },

  // 8 ─────────────────────────────────────────────────────────────
  activities: [
    { id: 'm1-a1', type: 'hottap', fig: 'm1-lieux-de-travail',
      q: "Sur ce plan du hall, touche le lieu demandé.",
      targets: [
        { prompt: "L'endroit où tu empruntes et rends tes outils", part: 'magasin' },
        { prompt: "L'endroit où tu récupères les pièces préparées pour ta tâche", part: 'logistique' },
        { prompt: "Le chemin réservé aux piétons", part: 'allee' },
        { prompt: "Ce qui permet d'accéder aux portes de l'avion sans s'appuyer sur lui", part: 'plateformes' },
        { prompt: "Là où l'on se retrouve devant un tableau pour connaître le travail du jour", part: 'point-equipe' },
      ],
      concept: "Les lieux de travail autour de l'avion",
      explain: "Le magasin d'outillage est le local avec le panneau d'outils ; la logistique reçoit les pièces sur étagères et chariots ; l'allée est la bande marquée où marchent les piétons ; les plateformes sont les planchers à escalier contre le fuselage ; le point d'équipe se reconnaît à son tableau. Retrouver chaque lieu sur un plan, c'est savoir où aller chaque matin." },
    { id: 'm1-a2', type: 'match',
      q: "Associe chaque interlocuteur à ce qu'il fait pour toi.",
      pairs: [
        { l: "Chef d'équipe", r: "Répartit le travail du jour et reçoit en premier tes difficultés" },
        { l: "Méthodes", r: "Écrit les documents qui disent quoi monter, dans quel ordre, avec quels outils" },
        { l: "Qualité", r: "Vérifie la conformité et traite les écarts déclarés" },
        { l: "Logistique et magasin", r: "Te fournit des pièces et des outils identifiés et comptés" },
        { l: "Essais", r: "Fait fonctionner ce qui a été installé et raccordé" },
      ],
      concept: "Les interlocuteurs du métier",
      explain: "Chaque service répond à un type de question : le chef d'équipe organise et reçoit les signalements, les méthodes écrivent les instructions, la qualité juge la conformité, la logistique et le magasin approvisionnent, les essais vérifient le fonctionnement. Savoir qui décide quoi t'évite de poser ta question à la mauvaise personne, ou de décider seule à la place d'un service." },
    { id: 'm1-a3', type: 'sort',
      q: "Classe chaque tâche : fait-elle partie du métier d'intégrateur cabine, ou relève-t-elle d'un autre métier ?",
      bins: ["Métier d'intégrateur cabine", "Un autre métier"],
      items: [
        { t: "Engager un siège sur les rails du plancher et le verrouiller", bin: 0, why: "Installer et fixer un élément de cabine fait partie de ta compétence d'installation." },
        { t: "Raccorder un connecteur électrique à l'arrière d'un galley", bin: 0, why: "Connecter les systèmes est la cinquième compétence du CQP." },
        { t: "Protéger un plancher avant de rouler un meuble", bin: 0, why: "Installer des protections est la deuxième compétence." },
        { t: "Réparer une tôle de fuselage qui a été percée", bin: 1, why: "Les réparations de structure relèvent d'équipes dédiées, avec des documents et des habilitations propres." },
        { t: "Décider que la disposition des sièges passe de six à cinq de front", bin: 1, why: "L'aménagement est choisi par la compagnie et défini en amont ; tu l'exécutes, tu ne le décides pas." },
        { t: "Faire voler l'avion pour les essais en vol", bin: 1, why: "Les essais en vol sont réalisés par des équipages et des équipes d'essais." },
        { t: "Acheminer un galley jusqu'à la zone de pose", bin: 0, why: "Acheminer les éléments sur la zone d'intervention est la troisième compétence." },
      ],
      concept: "Limites du métier d'intégrateur cabine",
      explain: "Tu installes, protèges, achemines et connectes ce qui compose la cabine. Tu ne répares pas la structure, tu ne décides pas de la configuration et tu ne pilotes pas. Connaître ces limites te protège : quand une tâche n'est pas la tienne, la bonne réaction est de prévenir, pas de la faire quand même." },
  ],

  // 9 ─────────────────────────────────────────────────────────────
  mistakes: [
    { error: "Imaginer qu'on installe une cabine comme on monte un meuble en kit : vite, au jugé, en comptant sur l'adresse.",
      why: "Un siège, un panneau ou un galley sont des éléments d'un avion : chacun a un document, un emplacement, un outil et des vérifications définis. L'adresse ne remplace pas la méthode, et une erreur qui paraît minuscule aujourd'hui peut être découverte en service.",
      better: "Lire l'instruction de travail avant de commencer, suivre l'ordre prévu et utiliser l'outil prévu. L'adresse vient avec la pratique ; la méthode, elle, s'exige dès le premier jour." },
    { error: "Penser que la qualité, c'est l'affaire de l'équipe qualité, et que son travail à soi sera vérifié par quelqu'un d'autre.",
      why: "La qualité vérifie une partie, à des moments précis, pas chaque geste. Ce que tu caches derrière un panneau personne ne le verra : c'est ton propre contrôle qui compte, et ton honnêteté sur ce que tu as fait.",
      better: "Te contrôler toi-même à chaque étape comme si personne d'autre ne le ferait, puis tracer ce que tu as fait." },
    { error: "Ne pas déclarer une petite anomalie « pour ne pas faire d'histoires », ou parce que c'est toi qui l'as causée.",
      why: "L'anomalie reste dans l'avion, et c'est le défaut non déclaré qui est la vraie faute. Déclarée, elle est traitée ; cachée, elle coûte plus cher et peut devenir dangereuse.",
      better: "La déclarer tout de suite à ton chef d'équipe, avec des faits : où, quand, ce que tu vois. Une déclaration précise est un travail bien fait, pas un aveu de faiblesse." },
    { error: "Retirer ses lunettes ou ses gants « juste cinq minutes », pour mieux voir ou pour aller plus vite.",
      why: "Les accidents arrivent pendant les gestes anodins : un copeau projeté, une arête vive. Un œil ou un tendon abîmé n'est pas réparable. Ne pas porter un EPI obligatoire est aussi une faute professionnelle.",
      better: "Garder les EPI dès l'entrée dans la zone. Si l'un gêne vraiment (buée, taille), le dire : on change de modèle plutôt que de s'en passer." },
    { error: "Mettre un outil ou un petit objet dans sa poche « au cas où », ou le poser sur place pour le reprendre plus tard.",
      why: "Un objet en poche tombe en se baissant ; un outil posé est oublié. C'est ainsi que naissent les corps étrangers, très difficiles à retrouver une fois la cabine fermée.",
      better: "Une poche = rien d'amovible. Un outil sorti du magasin est dans ta main, dans ton bac ou rendu. Rien ne reste dans l'avion." },
    { error: "Apprendre en relisant, sans jamais se tester ni parler à voix haute.",
      why: "Relire donne l'impression de savoir, pas la mémoire. Le jour où tu auras besoin de nommer une pièce devant un collègue, la relecture ne suffira pas.",
      better: "Regarder la figure avant le texte, faire les exercices, réviser les cartes à intervalles croissants, expliquer à voix haute." },
    { error: "Chercher à retenir toutes les valeurs et tous les numéros par cœur.",
      why: "Les valeurs précises (serrages, références, jeux) se lisent dans les documents applicables, jamais de mémoire. Un chiffre mal retenu est plus dangereux qu'un chiffre cherché.",
      better: "Retenir la logique : quoi, pourquoi, où chercher l'information. Pour un chiffre, on ouvre le bon document." },
  ],

  // 10 ────────────────────────────────────────────────────────────
  situations: [
    {
      title: "Le coup de chariot",
      context: [
        "15 h 20. Tu rapportes un carton de visserie à la zone logistique, avec un chariot que tu as rempli un peu trop vite. En tournant à l'angle d'une allée, une roue accroche le pied d'un siège déjà posé, dont l'accoudoir se retrouve griffé sur quelques centimètres. Tu regardes autour de toi : personne n'a vu. Le siège a été installé et protégé ce matin, la griffure est petite, et la protection à moitié glissée la cache presque.",
        "Un collègue qui passe te murmure : « Remets la housse en place, ça ne se verra pas. Et puis, avec tes dix minutes de retard, tu ne vas pas en plus faire une fiche. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je laisse la protection telle quelle et je préviens mon chef d'équipe tout de suite, en décrivant ce qui s'est passé et où.", ok: true,
          why: "L'anomalie est déclarée par la personne qui la connaît le mieux, avec les faits, quand ils sont encore frais. Le siège sera expertisé : retouche ou remplacement, ce n'est pas à toi de décider. Ne pas toucher à la protection évite aussi d'effacer des traces." },
        { t: "Je remets la housse comme avant et je continue, en me promettant d'être plus attentive la prochaine fois.", ok: false,
          why: "Tu es honnête avec toi-même, mais l'anomalie reste dans l'avion : au mieux elle est découverte à l'inspection du client, au pire elle cache un dommage plus profond. Cacher, c'est transformer un incident courant en faute." },
        { t: "J'essaie de lisser la griffure avec un chiffon et un produit qui traîne sur le chariot.", ok: false,
          why: "Tu modifies un élément fini sans produit ni procédure prévus, et tu peux aggraver la marque ou abîmer le revêtement. Aucune retouche n'est de ton ressort sans instruction." },
        { t: "J'attends la fin du poste pour voir si quelqu'un le remarque, et je le dirai à ce moment-là.", ok: false,
          why: "Plus le temps passe, plus il est difficile de savoir qui, quand et comment, et plus tu donnes l'impression d'avoir voulu cacher. La déclaration immédiate protège aussi tes collègues, qu'on pourrait soupçonner." },
      ],
      debrief: "Règle de métier : on déclare tout de suite, avec des faits, sans toucher à ce qui a été abîmé. Les dix minutes perdues à remplir une fiche sont le prix d'un avion livré propre ; celles que tu économiserais en te taisant te coûteraient bien plus cher si la griffure était découverte plus tard. Les entreprises du secteur sont organisées autour de cette idée : l'erreur déclarée est une information, l'erreur cachée est un risque.",
    },
    {
      title: "Il manque un tournevis au retour",
      context: [
        "17 h 05, fin de poste. Au magasin d'outillage, le magasinier compte ta caisse devant toi, comme chaque soir : il manque un tournevis. Tu as l'impression de l'avoir rangé, mais tu n'en es pas sûre. Tu as travaillé ce jour-là dans deux zones : au plancher à l'arrière, puis sous un meuble à l'avant.",
        "Un collègue plus ancien sourit : « Ça arrive, il sera dans ton chariot ou dans ta poche. Rentre chez toi, tu le chercheras demain. »",
      ],
      question: "Que fais-tu ?",
      options: [
        { t: "Je préviens le magasinier et mon chef d'équipe, je vérifie ma tenue et mon chariot, et je retourne chercher dans mes deux zones avec une lampe, avant que l'avion soit fermé ou qu'une autre équipe y travaille.", ok: true,
          why: "Un outil manquant est un objet potentiellement oublié dans l'avion : il se cherche maintenant, en remontant ton parcours de la journée, pendant que la cabine est encore ouverte et que tu te souviens. Le signaler permet aussi de prévenir les équipes qui travaillent après toi." },
        { t: "Je rentre et je le chercherai demain matin, quand je serai plus reposée.", ok: false,
          why: "Pendant la nuit, la zone peut être fermée, nettoyée ou occupée par une autre équipe ; un outil oublié sous un meuble est ensuite beaucoup plus difficile à retrouver, et il peut bloquer un mécanisme." },
        { t: "Je dis au magasinier que je le rapporterai demain : il a peut-être simplement été rangé à un autre endroit.", ok: false,
          why: "C'est une hypothèse, pas une vérification. Tant que l'outil n'est pas retrouvé, le compte est faux, et c'est le compte qui prouve qu'aucun outil ne reste dans l'avion." },
        { t: "Je prends un tournevis du même modèle dans la caisse d'un collègue pour que le compte tombe juste.", ok: false,
          why: "Le compte devient faux de manière cachée : un outil manque toujours quelque part, et un collègue se retrouvera avec un trou dans sa propre caisse. Le but n'est pas que la liste soit juste, c'est que l'avion soit propre." },
      ],
      debrief: "Règle de métier : un outil manquant n'est pas un détail administratif, c'est un risque pour l'avion. On cherche tout de suite, on prévient, on remonte le fil de la journée. Le compte du magasin existe pour une seule raison : être sûr que rien n'est resté dans l'appareil.",
    },
  ],

  // 11 ────────────────────────────────────────────────────────────
  quiz: [
    { id: 'm1-q1', type: 'mcq',
      q: "Choisis la réponse qui décrit le mieux le travail d'un intégrateur cabine.",
      options: [
        { t: "Il installe, règle, fixe et raccorde les éléments de la cabine, puis contrôle son travail et en garde la trace.", ok: true, why: "C'est le cœur du métier : intervenir sur les éléments, selon un document, et s'assurer de leur bonne mise en place." },
        { t: "Il construit la structure de l'avion et la répare quand elle est abîmée.", ok: false, why: "Ces tâches relèvent d'équipes structure, avec leurs propres documents et habilitations. L'intégrateur cabine n'y touche pas." },
        { t: "Il décide de la disposition de la cabine et de l'emplacement de chaque siège.", ok: false, why: "La disposition est choisie par la compagnie aérienne et définie en amont. Tu l'exécutes, tu ne la décides pas." },
        { t: "Il décore l'intérieur de l'avion selon ce qu'il trouve joli.", ok: false, why: "Il n'y a pas de place pour le goût personnel : chaque élément est placé comme le prévoit la définition de la cabine." },
      ],
      concept: "Le cœur du métier",
      explain: "L'intégrateur cabine travaille sur des éléments définis, avec des documents définis, et il répond de la qualité de ce qu'il pose. Quand quelque chose sort du cadre, il prévient." },
    { id: 'm1-q2', type: 'order',
      q: "Remets dans l'ordre les moments d'une journée de travail, du premier au dernier.",
      items: [
        "Prendre connaissance du travail du jour au point d'équipe",
        "Lire son document et récupérer pièces et outils",
        "Protéger la zone et ce qui est déjà posé",
        "Installer et raccorder les éléments confiés",
        "Contrôler soi-même ce qui vient d'être fait",
        "Noter ce qui est fait et ce qui a été observé d'anormal",
        "Rendre ses outils, ranger et nettoyer la zone",
      ],
      concept: "Déroulé d'une journée type",
      explain: "On s'informe, on se prépare, on protège, on installe, puis on contrôle et on trace avant de rendre les outils. L'ordre n'est pas arbitraire : on ne protège pas après avoir installé, on ne trace pas avant de contrôler, et on ne rend pas les outils avant d'avoir fini de s'en servir." },
    { id: 'm1-q3', type: 'hotid', fig: 'm1-epi-de-base',
      q: "Pour chaque équipement surligné, choisis son nom dans la liste.",
      targets: [{ part: 'lunettes' }, { part: 'antibruit' }, { part: 'casquette' }, { part: 'genouilleres' }],
      concept: "Reconnaître les EPI de base",
      explain: "Les lunettes ont des coques latérales ; le casque antibruit a deux coquilles reliées par un arceau (avec, au milieu, des bouchons d'oreille) ; la casquette a un visage de casquette de baseball avec une coque rigide cachée ; les genouillères sont les protections fixées devant le genou." },
    { id: 'm1-q4', type: 'multi',
      q: "Coche toutes les attitudes qu'on attend d'un intégrateur cabine face à une anomalie.",
      options: [
        { t: "Ne pas toucher à l'élément concerné et prévenir le chef d'équipe", ok: true, why: "Garder l'état tel quel permet à la qualité de constater et de décider." },
        { t: "Décrire les faits : où, quand, ce qu'on voit", ok: true, why: "Une déclaration précise permet de traiter l'anomalie sans refaire l'enquête." },
        { t: "La déclarer même si c'est soi-même qui l'a causée", ok: true, why: "Une anomalie déclarée est traitée ; une anomalie cachée reste dans l'avion." },
        { t: "La réparer soi-même avec ce qu'on a sous la main, si c'est petit", ok: false, why: "Toute retouche passe par une instruction ou une décision : sans cela, tu modifies un produit sans trace." },
        { t: "Attendre de voir si quelqu'un d'autre la remarque", ok: false, why: "Tu laisses le défaut circuler, et le temps rend l'origine difficile à établir." },
      ],
      concept: "Honnêteté sur les anomalies",
      explain: "Face à une anomalie, trois gestes : ne pas toucher, décrire, prévenir. Réparer, cacher ou attendre transforment un événement ordinaire en problème de traçabilité." },
    { id: 'm1-q5', type: 'mcq',
      q: "Contre quoi protège la casquette anti-heurt ? Choisis une réponse.",
      options: [
        { t: "Contre le choc de la tête sur un élément fixe, comme une arête ou une structure basse.", ok: true, why: "Elle est faite pour les cognements de la vie de chantier, dans un avion où l'on se déplace courbée." },
        { t: "Contre la chute d'un outil lourd depuis une plateforme.", ok: false, why: "Elle n'a pas la résistance d'un casque : pour une chute d'objet, il faut un casque de chantier." },
        { t: "Contre le bruit des outils pneumatiques.", ok: false, why: "C'est le rôle des protections auditives, casque à coquilles ou bouchons." },
        { t: "Contre les projections de copeaux dans les yeux.", ok: false, why: "Cette fonction est assurée par les lunettes de protection, qui couvrent aussi les côtés." },
      ],
      concept: "Rôle de la casquette anti-heurt",
      explain: "Chaque EPI protège contre un risque précis. La casquette absorbe un cognement, mais elle n'est pas un casque. Connaître cette limite évite de se croire protégée quand on ne l'est pas." },
    { id: 'm1-q6', type: 'hottap', fig: 'm1-cinq-competences',
      q: "Touche, sur la figure, la compétence demandée.",
      targets: [
        { prompt: "Amener un galley devant l'avion sans rien abîmer", part: 'c3' },
        { prompt: "Brancher les connecteurs et faire passer les câbles", part: 'c5' },
        { prompt: "Lire son document et repérer sa zone", part: 'c1' },
        { prompt: "Fixer un panneau à sa place", part: 'c4' },
        { prompt: "Couvrir le plancher avant de rouler un meuble", part: 'c2' },
      ],
      concept: "Les cinq compétences du CQP",
      explain: "C1 prépare, C2 protège, C3 achemine, C4 installe, C5 connecte. Les trois premières forment le bloc BC01, les deux dernières le bloc BC02 : on prépare et on achemine avant d'installer." },
    { id: 'm1-q7', type: 'input',
      q: "Tu es Lou. Lis le tableau d'équipe et écris, en chiffres, le nombre d'outils que tu dois rapporter au magasin ce soir.",
      doc: {
        title: "Tableau d'équipe du jour — document fictif pédagogique",
        lines: [
          ["Zone fictive", "B — cabine arrière"],
          ["Chef d'équipe", "Samia"],
        ],
        table: {
          head: ["Intégrateur", "Tâche", "Outils sortis"],
          rows: [
            ["Karim", "Poser les panneaux de paroi", "4"],
            ["Lou", "Présenter la rangée de sièges 12", "3"],
            ["Nadia", "Raccorder l'éclairage", "5"],
          ],
        },
        note: "Tableau imaginé pour apprendre : le format réel est choisi par ton entreprise.",
      },
      answers: ['3', 'trois'],
      concept: "Lire un document de travail",
      explain: "Lou a sorti trois outils : ce sont ces trois-là qu'il doit rapporter, pas ceux de Karim ni de Nadia. Retrouver une information dans un tableau d'équipe, c'est ce que tu feras chaque matin avant d'aller au magasin d'outillage." },
    { id: 'm1-q8', type: 'mcq',
      q: "Pourquoi note-t-on, après chaque tâche, ce qui a été fait ? Choisis la meilleure réponse.",
      options: [
        { t: "Pour pouvoir retrouver plus tard ce qui a été fait, par qui et avec quoi, par exemple si un lot de pièces pose problème.", ok: true, why: "C'est le rôle de la traçabilité : remonter le fil quand c'est nécessaire, même des années après." },
        { t: "Pour que le chef d'équipe puisse contrôler que tu ne perds pas de temps.", ok: false, why: "Le but n'est pas de surveiller le temps, mais de garder la mémoire de l'avion." },
        { t: "Parce que le règlement impose de remplir des papiers, sans autre raison.", ok: false, why: "Chaque trace a une raison : sans elle, personne ne sait quelles pièces sont montées sur quel avion." },
        { t: "Pour pouvoir prouver, en cas de problème, que ce n'est pas ta faute.", ok: false, why: "La trace sert l'avion, pas ta défense : elle permet de corriger vite, que tu sois en cause ou non." },
      ],
      concept: "Raison d'être de la traçabilité",
      explain: "La traçabilité sert à retrouver l'historique d'un avion, et en particulier à identifier tous les avions concernés quand une pièce ou une opération est mise en cause. C'est une protection pour l'avion et ses passagers." },
  ],

  // 12 ────────────────────────────────────────────────────────────
  retain: [
    "Un intégrateur cabine installe, règle, fixe et raccorde les éléments de la cabine (sièges, rangements, panneaux, galleys, toilettes, faisceaux), puis contrôle et trace son travail. Il ne répare pas la structure et ne décide pas de la configuration.",
    "Tu travailles à l'intérieur de l'avion, avec autour de toi des lieux (magasin d'outillage, logistique, point d'équipe, plateformes) et des personnes (chef d'équipe, méthodes, qualité, essais, collègues systèmes et structure). Chaque question va à un interlocuteur précis, d'abord à ton chef d'équipe.",
    "Cinq exigences : la rigueur, le soin du produit, la traçabilité, la sécurité et l'honnêteté sur les anomalies. Une anomalie déclarée se traite ; une anomalie cachée reste dans l'avion.",
    "Les EPI de base : tenue fermée, lunettes, protections auditives, gants, chaussures de sécurité, casquette anti-heurt, genouillères. Chacun protège contre un risque précis ; la liste obligatoire est fixée par l'entreprise, zone par zone.",
    "Le CQP intégrateur cabine (RNCP40664) a deux blocs. BC01 : préparer, protéger, acheminer (C1, C2, C3). BC02 : installer, puis cheminer et connecter les systèmes (C4, C5). L'application t'entraîne ; elle ne remplace pas l'évaluation en situation professionnelle.",
    "On apprend en suivant montrer, nommer, expliquer, pratiquer, puis en révisant à intervalles croissants et en expliquant à voix haute.",
  ],

  // 13 ────────────────────────────────────────────────────────────
  next: { id: 'a1', teaser: "Tu sais maintenant ce que tu vas faire et avec qui. Avant d'entrer dans la cabine, il faut voir l'avion en entier : au chapitre suivant, tu nommes ses grandes parties (fuselage, ailes, empennage, moteurs, trains) et tu comprends à quoi sert chacune." },

  // Oral ──────────────────────────────────────────────────────────
  oral: [
    { q: "Un proche te demande : « C'est quoi, ton futur métier ? » Explique ce que fait un intégrateur cabine, où il travaille et avec qui.",
      expected: [
        "Installer, régler, fixer et raccorder les éléments de la cabine (au moins cinq exemples)",
        "Il travaille dans l'avion, avec autour de lui magasin d'outillage, logistique, plateformes",
        "Collègues d'autres métiers : chef d'équipe, méthodes, qualité, essais, systèmes, structure",
        "Il contrôle et trace son travail ; il ne répare pas la structure",
      ],
      model: "Un intégrateur cabine, c'est la personne qui installe l'intérieur d'un avion de ligne : les sièges sur leurs rails, les rangements au-dessus des sièges, les panneaux des parois et du plafond, les cuisines et les toilettes, et il raccorde ce qui doit l'être, par exemple l'électricité ou l'eau. Il travaille à l'intérieur de l'avion, qui est en poste dans un hall, avec des plateformes d'accès, et il s'appuie sur un magasin d'outillage et une zone logistique. Autour de lui, il y a son chef d'équipe, les méthodes qui écrivent les instructions, la qualité qui contrôle, les essais, et d'autres collègues qui posent les câbles ou la structure. Il ne répare pas la structure de l'avion. Il contrôle son propre travail et il en garde la trace." },
    { q: "Explique à un nouveau collègue pourquoi on déclare une anomalie, même quand on en est la cause.",
      expected: [
        "Une anomalie cachée reste dans l'avion et peut être découverte trop tard",
        "Une anomalie déclarée est traitée, avec des faits (où, quand, quoi)",
        "On ne touche pas à l'élément avant la décision",
        "Se tromper arrive à tout le monde ; le cacher est la vraie faute",
      ],
      model: "Tout le monde se trompe un jour ou l'autre, ce n'est pas le problème. Le problème, c'est de le cacher. Une anomalie déclarée est prise en charge par la qualité, qui décide si on la retouche, la remplace ou l'accepte. Une anomalie cachée reste dans l'avion : on la découvre plus tard, parfois chez le client ou en service, et elle coûte alors beaucoup plus cher. Quand je vois quelque chose d'anormal, je ne touche à rien, je décris où et quand, et je préviens mon chef d'équipe tout de suite." },
    { q: "Présente le CQP que tu prépares : son intitulé, ses deux blocs et les cinq compétences, dans l'ordre d'une intervention.",
      expected: [
        "CQP Intégrateur cabine aéronautique, RNCP40664",
        "BC01 : préparer et repérer, protéger, acheminer",
        "BC02 : positionner, assembler, régler, fixer ; cheminer et connecter les systèmes",
        "Contrôler et tracer accompagnent chaque étape ; l'application n'est pas la certification",
      ],
      model: "Je prépare le CQP Intégrateur cabine aéronautique, enregistré sous le numéro RNCP40664. Il a deux blocs. Le premier, BC01, regroupe trois compétences : préparer et repérer son intervention, installer les protections, puis acheminer les éléments sur la zone. Le second, BC02, en regroupe deux : positionner, assembler, régler et fixer les éléments, puis cheminer et connecter les systèmes comme l'eau, l'air, l'oxygène, l'électricité ou les métallisations. Ça suit l'ordre d'une intervention, avec à chaque étape un contrôle et une trace. L'application m'entraîne, mais la certification est évaluée en situation professionnelle." },
  ],

  // Matrice ───────────────────────────────────────────────────────
  matrix: [
    { savoir: "Je connais les lieux de travail autour de l'avion et les interlocuteurs du métier.",
      savoirFaire: "Je sais où aller et à qui m'adresser pour une question d'organisation, de document, de conformité ou de fourniture.",
      comp: 'C1', ex: ['m1-a1', 'm1-a2'],
      proof: "Réussite des exercices de repérage sur le plan du hall et d'association des interlocuteurs ; justifie la compétence « préparer, organiser son intervention » par la connaissance du cadre de travail, sans l'attester." },
    { savoir: "Je connais le cadre du métier : ce que l'on installe, ce que l'on ne fait pas, et les cinq exigences (rigueur, soin, traçabilité, sécurité, honnêteté).",
      savoirFaire: "Je sais distinguer ce qui relève de mon métier de ce qui relève d'un autre, et choisir la bonne réaction face à une anomalie.",
      comp: 'C1', ex: ['m1-a3', 'm1-q4', 'm1-q8'],
      proof: "Classement des tâches, choix d'attitudes face à une anomalie et justification de la traçabilité. Cela prépare le signalement d'anomalies décrit par les critères du référentiel de branche." },
    { savoir: "Je reconnais les EPI de base et je sais lire un document d'équipe simple.",
      savoirFaire: "Je sais préparer ma journée : ce que je porte, ce que je sors du magasin et ce que je dois rapporter.",
      comp: 'C1', ex: ['m1-q3', 'm1-q5', 'm1-q7', 'm1-q2'],
      proof: "Identification des EPI sur la figure, lecture d'un tableau d'équipe fictif et mise en ordre d'une journée type : préparation de l'intervention, avant toute évaluation en situation réelle." },
  ],
});
