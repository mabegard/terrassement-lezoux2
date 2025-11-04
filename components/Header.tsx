import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Bland Terrassement
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/prestations"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Prestations
            </Link>
            <Link
              href="/galerie"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Galerie
            </Link>
            <Link
              href="/avis"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Avis
            </Link>
            <Link
              href="/contact"
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <button className="md:hidden text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

