export const metadata = {
  title: "Prestations - Bland Terrassement",
  description:
    "Découvrez toutes nos prestations de terrassement, démolition, nivellement et aménagement extérieur à Lezoux.",
};

export default function Prestations() {
  const services = [
    {
      title: "Terrassement",
      icon: "🚜",
      description:
        "Terrassement complet de terrain pour tous vos projets : construction, extension, aménagement. Fouilles, creusement, remblaiement et préparation de terrain.",
      details: [
        "Terrassement de terrain",
        "Fouilles et creusement",
        "Remblayage et compactage",
        "Préparation de terrain pour construction",
      ],
    },
    {
      title: "Démolition",
      icon: "🏗️",
      description:
        "Démolition sélective ou totale de bâtiments, murs, clôtures et toutes structures. Évacuation des gravats et nettoyage du site.",
      details: [
        "Démolition de bâtiments",
        "Démolition de murs et clôtures",
        "Démolition sélective",
        "Évacuation des gravats",
      ],
    },
    {
      title: "Nivellement",
      icon: "📐",
      description:
        "Nivellement précis de terrain pour vos constructions, aménagements paysagers et projets d'infrastructure. Utilisation d'engins de précision.",
      details: [
        "Nivellement de terrain",
        "Préparation de sol pour construction",
        "Travaux de nivellement pour routes et allées",
        "Aplanissement de terrain",
      ],
    },
    {
      title: "Aménagement extérieur",
      icon: "🏡",
      description:
        "Création et aménagement d'espaces extérieurs : cours, allées, parkings, espaces verts. Aménagement complet de vos extérieurs.",
      details: [
        "Création d'allées et chemins",
        "Aménagement de cours et parkings",
        "Préparation de terrain pour jardin",
        "Aménagement paysager",
      ],
    },
    {
      title: "Travaux publics",
      icon: "🛣️",
      description:
        "Réalisation de travaux publics : voiries, réseaux, assainissement, infrastructures. Intervention sur projets communaux et privés.",
      details: [
        "Travaux de voirie",
        "Réseaux et assainissement",
        "Travaux d'infrastructure",
        "Aménagement urbain",
      ],
    },
    {
      title: "Évacuation et transport",
      icon: "🌱",
      description:
        "Évacuation de terres, gravats, déchets de chantier. Transport et mise en décharge. Service complet d'évacuation.",
      details: [
        "Évacuation de terres",
        "Transport de gravats",
        "Évacuation de déchets de chantier",
        "Mise en décharge",
      ],
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nos Prestations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bland Terrassement vous propose une gamme complète de services pour
            tous vos projets de terrassement et d'aménagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-start text-gray-600">
                    <span className="text-orange-600 mr-2">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-600 text-white p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Un projet en tête ? Contactez-nous !
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            Nous vous proposons un devis gratuit et personnalisé pour tous vos
            projets de terrassement.
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Demander un devis
          </a>
        </div>
      </div>
    </div>
  );
}

