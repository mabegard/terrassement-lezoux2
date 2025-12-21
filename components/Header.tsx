import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Logo Bland Terrassement"
              width={80}
              height={80}
              priority
              className="object-contain logo-img block"
              style={{ maxHeight: '80px', maxWidth: '80px' }}
            />
            <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-700 transition-colors">
              Bland Terrassement
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="inline-flex items-center leading-none text-gray-700 hover:text-orange-600 transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/prestations"
              className="inline-flex items-center leading-none text-gray-700 hover:text-orange-600 transition-colors"
            >
              Prestations
            </Link>
            <Link
              href="/galerie"
              className="inline-flex items-center leading-none text-gray-700 hover:text-orange-600 transition-colors"
            >
              Galerie
            </Link>
            <Link
              href="/avis"
              className="inline-flex items-center leading-none text-gray-700 hover:text-orange-600 transition-colors"
            >
              Avis
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center leading-none bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
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

