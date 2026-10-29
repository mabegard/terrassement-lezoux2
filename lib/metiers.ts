export type Photo = {
  src: string;
  alt: string;
  legende: string;
};

export type Metier = {
  slug: string;
  nom: string;
  titre: string;
  h1: string;
  description: string;
  intro: string[];
  prestations: string[];
  deroulement: string[];
  photos: Photo[];
};

/**
 * Les légendes décrivent exactement ce que montre chaque photo.
 * Ne pas présenter une photo comme un chantier qu'elle ne montre pas.
 */
export const METIERS: Metier[] = [
  {
    slug: "enrobe-cour",
    nom: "Enrobé de cour et d'allée",
    titre: "Enrobé de cour et d'allée à Lezoux",
    h1: "Enrobé de cour et d'allée à Lezoux",
    description:
      "Pose d'enrobé pour cours, allées et accès de maison autour de Lezoux, Thiers et Pont-du-Château : décaissement, fondation, bordures et finition. Devis gratuit.",
    intro: [
      "Une cour ou une allée en enrobé tient dans le temps si ce qui est dessous est bien fait. Je m'occupe de toute la préparation : décaissement, évacuation des terres, apport et compactage de la grave, puis pose de l'enrobé.",
      "J'interviens pour des particuliers comme pour des professionnels : accès de maison, cour, parking, entrée de garage, avec ou sans bordures.",
    ],
    prestations: [
      "Décaissement et évacuation des terres",
      "Fondation en grave compactée",
      "Pose de bordures pour tenir l'enrobé",
      "Enrobé à chaud pour cour, allée et parking",
      "Reprise d'une cour existante abîmée",
    ],
    deroulement: [
      "Visite sur place et devis gratuit",
      "Décaissement, nivellement et gestion des pentes pour l'écoulement de l'eau",
      "Fondation et compactage",
      "Pose des bordures puis de l'enrobé",
    ],
    photos: [
      {
        src: "/chantiers/allee-enrobe-bordure.jpg",
        alt: "Allée carrossable en enrobé noir menant à une maison, avec bordure",
        legende: "Allée carrossable en enrobé avec bordure",
      },
      {
        src: "/chantiers/cour-enrobe.jpg",
        alt: "Cour de maison en enrobé noir bordée de pelouse",
        legende: "Cour de maison en enrobé",
      },
      {
        src: "/chantiers/cour-enrobe-gravier.jpg",
        alt: "Cour en enrobé avec zones en gravier blanc, près d'une terrasse en bois",
        legende: "Cour en enrobé avec zones en gravier",
      },
    ],
  },
  {
    slug: "terrassement-piscine",
    nom: "Terrassement de piscine",
    titre: "Terrassement de piscine à Lezoux et alentours",
    h1: "Terrassement de piscine à Lezoux",
    description:
      "Creusement et terrassement de piscine autour de Lezoux, Thiers, Pont-du-Château et Cournon : implantation, fouille, évacuation des terres et remblai. Devis gratuit.",
    intro: [
      "Avant de couler ou de poser une piscine, il faut une fouille aux bonnes dimensions, de niveau, sur un sol stable. Je réalise le terrassement à la pelle, à partir des cotes de votre pisciniste ou de votre plan.",
      "Les terres sont évacuées ou régalées sur le terrain selon ce que vous souhaitez, et l'accès des engins est préparé pour ne pas abîmer le reste du jardin.",
    ],
    prestations: [
      "Implantation et creusement de la fouille",
      "Fond de forme dressé et de niveau",
      "Évacuation ou régalage des terres",
      "Tranchées pour les canalisations et l'électricité",
      "Remblai autour du bassin et préparation des abords",
    ],
    deroulement: [
      "Visite du terrain : accès, nature du sol, emplacement",
      "Implantation selon les cotes du projet",
      "Fouille, réglage du fond et tranchées techniques",
      "Remblai et remise en état des abords",
    ],
    photos: [
      {
        src: "/chantiers/fouille-cuve.jpg",
        alt: "Fouille creusée dans un jardin, à côté d'une grande cuve noire prête à être enterrée",
        legende: "Fouille en pleine terre pour l'enfouissement d'une cuve",
      },
      {
        src: "/chantiers/terrain-nivele.jpg",
        alt: "Terrain remis à niveau autour d'un arbre entouré de gravier",
        legende: "Terrain remis à niveau après terrassement",
      },
    ],
  },
  {
    slug: "assainissement",
    nom: "Assainissement",
    titre: "Assainissement individuel à Lezoux et dans le Puy-de-Dôme",
    h1: "Assainissement individuel à Lezoux",
    description:
      "Installation et remplacement d'assainissement non collectif, cuves, regards et raccordements autour de Lezoux, Thiers et Maringues. Devis gratuit.",
    intro: [
      "Que vous construisiez ou que votre installation doive être remise aux normes, je réalise les travaux d'assainissement non collectif : terrassement, pose des cuves, regards et canalisations, puis remblai.",
      "Je travaille à partir de l'étude de sol et du dossier validé par le service d'assainissement de votre commune (SPANC).",
    ],
    prestations: [
      "Terrassement et pose de fosse ou de cuve",
      "Pose de regards et de canalisations",
      "Raccordement de la maison à l'installation",
      "Raccordement au tout-à-l'égout",
      "Remblai et remise en état du terrain",
    ],
    deroulement: [
      "Lecture de l'étude de sol et du dossier SPANC",
      "Terrassement et pose des équipements",
      "Raccordements et contrôle avant remblai",
      "Remblai et remise en état",
    ],
    photos: [
      {
        src: "/chantiers/cuves-assainissement.jpg",
        alt: "Cuves noires d'assainissement posées sur un terrain avant enfouissement, mini-pelle orange à côté",
        legende: "Cuves livrées sur le chantier avant enfouissement",
      },
      {
        src: "/chantiers/fouille-cuve.jpg",
        alt: "Fouille creusée à côté d'une cuve noire prête à être enterrée",
        legende: "Fouille préparée pour la pose d'une cuve",
      },
      {
        src: "/chantiers/regard-reseaux.jpg",
        alt: "Tranchée avec regard, tuyau gris et gaines rouge et bleue sur lit de gravier",
        legende: "Regard et canalisations posés sur lit de gravier",
      },
    ],
  },
  {
    slug: "bordures",
    nom: "Pose de bordures",
    titre: "Pose de bordures et délimitation d'allées à Lezoux",
    h1: "Pose de bordures à Lezoux",
    description:
      "Pose de bordures béton et délimitation d'allées, de cours et de massifs autour de Lezoux, Thiers et Pont-du-Château. Devis gratuit.",
    intro: [
      "Les bordures tiennent l'enrobé ou le gravier en place et donnent des limites nettes à une allée, une cour ou un massif. Je les pose sur une fondation béton, alignées et à la bonne hauteur.",
      "Elles peuvent accompagner une nouvelle allée ou venir reprendre un aménagement existant.",
    ],
    prestations: [
      "Bordures béton pour allées et cours",
      "Délimitation entre enrobé, gravier et pelouse",
      "Bordures de massifs et d'espaces de jeu",
      "Reprise de bordures descellées",
    ],
    deroulement: [
      "Tracé et niveaux sur place",
      "Tranchée et fondation béton",
      "Pose et alignement des bordures",
      "Finition et remise en état des abords",
    ],
    photos: [
      {
        src: "/chantiers/allee-gravier-bordure.jpg",
        alt: "Allée en gravier rose délimitée par une bordure, jardin arboré",
        legende: "Allée en gravier délimitée par une bordure",
      },
      {
        src: "/chantiers/cour-petanque-bordure.jpg",
        alt: "Terrain de pétanque en gravier encadré de bordures, le long d'une clôture",
        legende: "Terrain de pétanque encadré de bordures",
      },
      {
        src: "/chantiers/allee-enrobe-bordure.jpg",
        alt: "Allée en enrobé noir avec bordure, devant une maison",
        legende: "Allée en enrobé tenue par une bordure",
      },
    ],
  },
  {
    slug: "arrachage-haies",
    nom: "Arrachage de haies",
    titre: "Arrachage de haies et dessouchage à Lezoux",
    h1: "Arrachage de haies à Lezoux",
    description:
      "Arrachage de haies, dessouchage et remise à niveau du terrain autour de Lezoux, Thiers et Maringues, avec évacuation des végétaux. Devis gratuit.",
    intro: [
      "Une vieille haie qui prend trop de place, des thuyas à remplacer par une clôture : j'arrache la haie à la pelle avec les souches et les racines, pour que le terrain soit réellement libre ensuite.",
      "Les végétaux et la terre sont évacués, et le sol est remis à niveau pour poser une clôture, semer ou aménager.",
    ],
    prestations: [
      "Arrachage de haies et de thuyas",
      "Dessouchage et extraction des racines",
      "Évacuation des végétaux et des terres",
      "Remise à niveau du terrain",
      "Préparation pour une clôture ou une plantation",
    ],
    deroulement: [
      "Visite : longueur de haie, accès, réseaux enterrés",
      "Arrachage et dessouchage",
      "Évacuation",
      "Nivellement et préparation du sol",
    ],
    photos: [
      {
        src: "/chantiers/terrain-cloture.jpg",
        alt: "Bande de terre dégagée et nivelée le long d'une clôture rigide",
        legende: "Terrain dégagé et nivelé le long d'une clôture",
      },
      {
        src: "/chantiers/terrain-nivele.jpg",
        alt: "Terrain remis à niveau autour d'un arbre conservé",
        legende: "Terrain remis à niveau, arbre conservé",
      },
    ],
  },
  {
    slug: "reseaux-vrd",
    nom: "Réseaux et VRD",
    titre: "Réseaux et VRD à Lezoux : tranchées, raccordements, voirie",
    h1: "Réseaux et VRD à Lezoux",
    description:
      "Voirie et réseaux divers autour de Lezoux, Thiers, Pont-du-Château et Cournon : tranchées, eaux pluviales, raccordements, gaines et accès. Devis gratuit.",
    intro: [
      "Pour une construction neuve ou un aménagement, je réalise les tranchées et la pose des réseaux : eau, eaux usées et pluviales, gaines électriques et télécom, puis le remblai et la voirie d'accès.",
      "Le travail est fait en coordination avec les concessionnaires et votre constructeur.",
    ],
    prestations: [
      "Tranchées pour eau, électricité et télécom",
      "Évacuation des eaux pluviales et eaux usées",
      "Pose de regards et de canalisations",
      "Raccordements jusqu'en limite de propriété",
      "Création de voirie et d'accès",
    ],
    deroulement: [
      "Repérage des réseaux existants et des points de raccordement",
      "Tranchées et pose des réseaux",
      "Contrôle avant remblai",
      "Remblai, compactage et voirie",
    ],
    photos: [
      {
        src: "/chantiers/regard-reseaux.jpg",
        alt: "Tranchée avec regard, canalisation grise et gaines rouge et bleue",
        legende: "Regard, canalisation et gaines posés en tranchée",
      },
      {
        src: "/chantiers/allee-maison.jpg",
        alt: "Accès en gravier menant à une maison neuve",
        legende: "Accès créé jusqu'à une maison neuve",
      },
    ],
  },
];

export function getMetier(slug: string) {
  return METIERS.find((m) => m.slug === slug);
}
