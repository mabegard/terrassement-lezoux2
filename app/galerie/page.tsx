export const metadata = {
  title: "Galerie - Bland Terrassement",
  description:
    "Découvrez nos réalisations de terrassement et d'aménagement extérieur à Lezoux.",
};

export default function Galerie() {
  // Placeholder pour les images - à remplacer par vos vraies photos
  const realisations = [
    {
      id: 1,
      title: "Terrassement de terrain",
      category: "Terrassement",
      description: "Préparation de terrain pour construction",
    },
    {
      id: 2,
      title: "Aménagement de cour",
      category: "Aménagement",
      description: "Création d'une cour en gravier",
    },
    {
      id: 3,
      title: "Démolition de bâtiment",
      category: "Démolition",
      description: "Démolition sélective d'un ancien bâtiment",
    },
    {
      id: 4,
      title: "Création d'allée",
      category: "Aménagement",
      description: "Allée gravillonnée pour accès",
    },
    {
      id: 5,
      title: "Nivellement de terrain",
      category: "Terrassement",
      description: "Nivellement pour aménagement paysager",
    },
    {
      id: 6,
      title: "Travaux publics",
      category: "Travaux publics",
      description: "Aménagement de voirie",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Galerie de Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations de terrassement et
            d'aménagement extérieur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {realisations.map((realisation) => (
            <div
              key={realisation.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <div className="text-5xl mb-2">📷</div>
                  <p className="text-sm opacity-90">
                    Photo à ajouter
                  </p>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-orange-600 font-semibold">
                  {realisation.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-2 text-gray-900">
                  {realisation.title}
                </h3>
                <p className="text-gray-600">{realisation.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous souhaitez voir plus de réalisations ?
          </p>
          <a
            href="/contact"
            className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </div>
  );
}

