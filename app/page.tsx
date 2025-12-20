import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Section Héro */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Bland Terrassement
            </h1>
            <p className="text-xl md:text-2xl mb-4">
              Artisan terrassier à Lezoux depuis 13 ans
            </p>
            <p className="text-lg mb-8 text-orange-100">
              Spécialisé dans tous types de travaux de terrassement,
              d'aménagement extérieur et de travaux publics. Expertise,
              qualité et professionnalisme à votre service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/prestations"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
              >
                Mes prestations
              </Link>
            </div>
            </div>
            <div className="w-full md:w-auto">
              <Image
                src="/hero.jpg"
                alt="Engin de chantier"
                width={600}
                height={400}
                className="w-full md:w-[560px] h-72 md:h-80 object-contain"
                priority
              />
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
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Yannick Bland</strong> je suisartisan terrassier depuis{" "}
                <strong>13 ans</strong>. Fort de mon expérience, je mets mon
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
                toute la région Auvergne-Rhône-Alpes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Mes prestations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚜</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Terrassement
              </h3>
              <p className="text-gray-600">
                Terrassement de terrain, fouilles, creusement, remblaiement pour
                tous vos projets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Démolition
              </h3>
              <p className="text-gray-600">
                Démolition de bâtiments, murs, clôtures et structures
                diverses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📐</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Nivellement
              </h3>
              <p className="text-gray-600">
                Nivellement et préparation de terrain pour vos constructions et
                aménagements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Aménagement extérieur
              </h3>
              <p className="text-gray-600">
                Création d'allées, de cours, de parkings et d'espaces verts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-semibold mb-3 text-orange-600">
                Travaux publics
              </h3>
              <p className="text-gray-600">
                Voiries, réseaux, assainissement et travaux d'infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
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
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
