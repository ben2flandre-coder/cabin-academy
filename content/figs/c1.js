// Figures du chapitre c1 — Le dossier de travail
CA.addFigures([
  {
    id: 'c1-dossier-contenu', file: 'c1-dossier-contenu.svg',
    title: "Ce que contient un dossier de travail",
    caption: "Schéma de principe. Le nom exact des documents, leur présentation et leur support (papier ou écran) changent d'une entreprise à l'autre ; leurs rôles, eux, se retrouvent partout.",
    alt: "Chemise ouverte contenant six documents : un plan avec dessin, bulle de repère et cartouche ; une nomenclature en tableau ; une instruction de travail avec des opérations numérotées 10, 20, 30 ; une fiche de suivi dont deux lignes sont tamponnées et une signée ; une liste de contrôle avec trois cases cochées sur quatre ; une étiquette d'identification avec lien d'attache et code à barres.",
    purpose: "Reconnaître les six familles de documents d'un dossier de travail et associer chacune à la question à laquelle elle répond.",
    chapters: ['c1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'plan', n: 1, fr: 'Plan', en: 'Drawing', fn: "Montre la pièce ou l'assemblage : formes, positions, sens de montage." },
      { id: 'nomenclature', n: 2, fr: 'Nomenclature', en: 'Parts list', fn: "Liste les pièces : repère, référence, désignation, quantité." },
      { id: 'instruction', n: 3, fr: 'Instruction de travail (gamme)', en: 'Work instruction (routing)', fn: "Donne la suite des opérations, avec les outils, les moyens et les contrôles." },
      { id: 'fiche-suivi', n: 4, fr: 'Fiche de suivi', en: 'Traveller', fn: "Garde la trace : qui a fait quelle opération, quand, avec quel résultat." },
      { id: 'liste-controle', n: 5, fr: 'Liste de contrôle', en: 'Checklist', fn: "Énumère les points à vérifier un par un, pour ne rien oublier." },
      { id: 'etiquette', n: 6, fr: "Étiquette d'identification", en: 'Identification tag', fn: "Accompagne la pièce et dit ce qu'elle est : sa référence, parfois son numéro de série ou de lot." }
    ]
  },
  {
    id: 'c1-plan-fictif', file: 'c1-plan-fictif.svg',
    title: "Plan fictif EX-48213 (document pédagogique)",
    caption: "Document fictif — pédagogique. Il imite la construction générale d'un plan (vues, coupe, bulles, nomenclature, notes, cartouche) sans reproduire le format d'aucune entreprise ; toutes les références commencent par EX-.",
    alt: "Plan fictif. À gauche, vue de face d'un support rectangulaire à quatre trous, avec une flèche de sens de montage et un trait de coupe A-A. Trois bulles numérotées 1, 2, 3 désignent des pièces. À droite, la coupe A-A : épaisseur hachurée et deux vis. Dessous, la nomenclature : repère 1, EX-48213-01, quantité 1 ; repère 2, EX-90211-05, quantité 4 ; repère 3, EX-90305-02, quantité 4. En bas à gauche, les notes ; en bas à droite, le cartouche : Support, EX-48213, indice C, échelle 1 : 2, feuille 1/2.",
    purpose: "Repérer les zones d'un plan et savoir où chercher chaque type d'information.",
    chapters: ['c1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'cartouche', n: 1, fr: 'Cartouche', en: 'Title block', fn: "Carte d'identité du plan : désignation, numéro, indice, échelle, feuille." },
      { id: 'indice', n: 2, fr: 'Indice de révision', en: 'Revision index', fn: "Lettre ou chiffre qui dit quelle version du plan tu as sous les yeux." },
      { id: 'vue', n: 3, fr: 'Vue', en: 'View', fn: "Dessin de l'objet regardé depuis une direction donnée (ici, de face)." },
      { id: 'coupe', n: 4, fr: 'Coupe', en: 'Section view', fn: "Dessin de l'objet « tranché » le long du trait A-A, pour montrer l'intérieur ; les hachures marquent la matière coupée." },
      { id: 'bulle', n: 5, fr: 'Bulle (repère)', en: 'Balloon (item number)', fn: "Numéro cerclé relié à une pièce par un trait ; il renvoie à la ligne de même numéro dans la nomenclature." },
      { id: 'nomenclature', n: 6, fr: 'Nomenclature', en: 'Parts list', fn: "Tableau qui donne, pour chaque repère, la référence de la pièce et la quantité." },
      { id: 'notes', n: 7, fr: 'Notes', en: 'Notes', fn: "Consignes écrites qui complètent le dessin : unité, sens de montage, renvoi vers un autre document." }
    ]
  },
  {
    id: 'c1-lire-cartouche', file: 'c1-lire-cartouche.svg',
    title: "Le cartouche, case par case",
    caption: "Document fictif — pédagogique. Les cases d'un vrai cartouche sont plus nombreuses et disposées autrement selon l'entreprise ; celles-ci sont celles qu'un débutant doit savoir trouver.",
    alt: "Cartouche fictif agrandi, à huit cases. Désignation : Support d'équipement. Numéro de plan : EX-48213. Indice : C. Échelle : 1 : 2. Feuille : 1 / 2. Date : 12/03/2024. État : validé. Unité : mm.",
    purpose: "Lire un cartouche case par case et savoir quelle question chaque case résout.",
    chapters: ['c1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'designation', n: 1, fr: 'Désignation', en: 'Title', fn: "Le nom de ce qui est dessiné, en clair." },
      { id: 'numero', n: 2, fr: 'Numéro de plan', en: 'Drawing number', fn: "L'identifiant unique du plan : c'est lui que cite l'instruction de travail." },
      { id: 'indice', n: 3, fr: 'Indice', en: 'Revision index', fn: "La version du plan ; il change à chaque modification." },
      { id: 'echelle', n: 4, fr: 'Échelle', en: 'Scale', fn: "Le rapport entre la taille du dessin et la taille réelle." },
      { id: 'feuille', n: 5, fr: 'Feuille', en: 'Sheet', fn: "Le numéro de la feuille et le nombre total de feuilles du plan." },
      { id: 'date', n: 6, fr: 'Date', en: 'Date', fn: "La date de cette version du plan." },
      { id: 'etat', n: 7, fr: 'État', en: 'Status', fn: "Dit si le plan est utilisable pour travailler (validé) ou encore en préparation." },
      { id: 'unite', n: 8, fr: 'Unité', en: 'Unit', fn: "L'unité de toutes les dimensions du plan, sauf indication contraire." }
    ]
  },
  {
    id: 'c1-entonnoir', file: 'c1-entonnoir.svg',
    title: "Chercher une information : la méthode en entonnoir",
    caption: "On part du plus général (suis-je sur le bon document ?) pour descendre vers le détail, sans sauter d'étage.",
    alt: "Entonnoir à cinq étages, du plus large en haut au plus étroit en bas : cartouche, indice, nomenclature, vues, notes. En bas, une flèche verte : l'information trouvée et vérifiée.",
    purpose: "Mémoriser l'ordre de lecture d'un plan pour trouver une information sans se tromper de document ni de version.",
    chapters: ['c1'],
    provenance: "Schéma original RMBD — création pédagogique", rights: "© RMBD, usage pédagogique",
    parts: [
      { id: 'cartouche', n: 1, fr: 'Étage 1 : le cartouche', en: 'Title block', fn: "Est-ce le bon plan, la bonne feuille ?" },
      { id: 'indice', n: 2, fr: "Étage 2 : l'indice", en: 'Revision index', fn: "Est-ce la version demandée par mon dossier ?" },
      { id: 'nomenclature', n: 3, fr: 'Étage 3 : la nomenclature', en: 'Parts list', fn: "Quelle pièce, quelle référence, combien ?" },
      { id: 'vue', n: 4, fr: 'Étage 4 : les vues', en: 'Views', fn: "Où va la pièce, dans quel sens ?" },
      { id: 'notes', n: 5, fr: 'Étage 5 : les notes', en: 'Notes', fn: "Y a-t-il une condition particulière ou un renvoi ?" },
      { id: 'information', n: 6, fr: "L'information vérifiée", en: 'Verified information', fn: "Ce que tu cherchais, trouvé dans le bon document à la bonne version." }
    ]
  }
]);
