import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-orange-600 mb-4">
              Bland Terrassement
            </h3>
            <p className="text-gray-300">
              Artisan terrassier depuis 13 ans, spécialisé dans tous types de
              travaux de terrassement et d'aménagement extérieur.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/prestations"
                  className="hover:text-orange-600 transition-colors"
                >
                  Prestations
                </Link>
              </li>
              <li>
                <Link
                  href="/galerie"
                  className="hover:text-orange-600 transition-colors"
                >
                  Galerie
                </Link>
              </li>
              <li>
                <Link
                  href="/avis"
                  className="hover:text-orange-600 transition-colors"
                >
                  Avis
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a
                  href="tel:0674469581"
                  className="hover:text-orange-600 transition-colors"
                >
                  06 74 46 95 81
                </a>
              </li>
              <li>
                <a
                  href="mailto:bland.terrassement@gmail.com"
                  className="hover:text-orange-600 transition-colors"
                >
                  bland.terrassement@gmail.com
                </a>
              </li>
              <li className="mt-4">
                82 Rue Felix Duchasseint
                <br />
                63190 LEZOUX
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Bland Terrassement - Tous droits
            réservés
          </p>
        </div>
      </div>
    </footer>
  );
}

