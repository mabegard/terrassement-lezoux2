import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Section Héro */}
      <section
        className="relative isolate overflow-hidden text-white -mt-20 flex items-center py-32 md:py-40"
        style={{ minHeight: "max(90vh, calc(100vw * 638 / 960))" }}
      >
        <div
          className="absolute inset-0 -z-20 bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://www.grandstravaux.org/wp-content/uploads/2019/06/Terrassement-outils.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/50 to-black/30"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 w-full">
          <div className="max-w-4xl mx-auto">
            <div
              style={{ textShadow: "0 3px 12px rgba(0, 0, 0, 0.45)" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bland Terrassement
              </h1>
              <p className="text-xl md:text-2xl mb-4">
                Artisan terrassier à Lezoux depuis 2013
              </p>
              <p className="text-lg mb-8 text-white">
                Spécialisé dans tous types de travaux de terrassement,
                d'aménagement extérieur et de travaux publics. Expertise,
                qualité et professionnalisme à votre service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn btn-lg btn-white btn-relief text-center"
                >
                  Demander un devis gratuit
                </Link>
                <Link
                  href="/prestations"
                  className="btn btn-lg btn-outline-white btn-relief text-center"
                >
                  Mes prestations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
              Qui suis-je ?
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-lg text-justify">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Yannick Bland</strong> je suis artisan terrassier depuis{" "}
                <strong>2013</strong>. Fort de mon expérience, je mets mon
                savoir-faire et mon professionnalisme au service de vos projets
                de terrassement et d'aménagement extérieur.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Que ce soit pour des travaux de terrassement, de démolition, de
                nivellement, d'aménagement de cour, de création d'allées ou
                encore de travaux publics, je vous accompagne de A à Z
                dans la réalisation de votre projet.
              </p>
              <p className="text-lg text-gray-700">
                Basé à <strong>Lezoux (63190)</strong>, j'interviens dans
                tout le département du Puy-de-Dôme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: 'var(--color-gray-50)' }}>
            Mes prestations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Terrassement
              </h3>
              <p className="text-gray-600">
                Terrassement de terrain, fouilles, creusement, remblaiement pour
                tous vos projets.
              </p>
            </div>
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Démolition
              </h3>
              <p className="text-gray-600">
                Démolition de bâtiments, murs, clôtures et structures
                diverses.
              </p>
            </div>
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Nivellement
              </h3>
              <p className="text-gray-600">
                Nivellement et préparation de terrain pour vos constructions et
                aménagements.
              </p>
            </div>
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Aménagement extérieur
              </h3>
              <p className="text-gray-600">
                Création d'allées, de cours, de parkings et d'espaces verts.
              </p>
            </div>
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Travaux publics
              </h3>
              <p className="text-gray-600">
                Voiries, réseaux, assainissement et travaux d'infrastructure.
              </p>
            </div>
            <div className="card-relief p-6">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Évacuation de terre
              </h3>
              <p className="text-gray-600">
                Évacuation et transport de terres, gravats et déchets de chantier.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/prestations"
              className="btn btn-lg btn-primary btn-relief"
            >
              Voir toutes mes prestations
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d'un devis ?
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contactez-moi pour un devis gratuit et personnalisé
          </p>
          <Link
            href="/contact"
            className="btn btn-lg btn-white btn-relief"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
