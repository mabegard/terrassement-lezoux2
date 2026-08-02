"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isSolidHeader = useMemo(() => {
    return !isHome || isScrolled || isMenuOpen;
  }, [isHome, isMenuOpen, isScrolled]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolidHeader ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      ].join(" ")}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <span className="flex h-14 w-[4.25rem] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1 shadow-sm ring-1 ring-black/5">
              <Image
                src="/logo.png"
                alt="Logo Bland Terrassement"
                width={120}
                height={100}
                priority
                className="object-contain logo-img block h-full w-full"
              />
            </span>
            <span
              className={[
                "text-2xl font-bold transition-colors",
                isSolidHeader
                  ? "text-orange-600 group-hover:text-orange-700"
                  : "text-white group-hover:text-white/90",
              ].join(" ")}
            >
              Bland Terrassement
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={[
                "inline-flex items-center leading-none transition-colors",
                isSolidHeader ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              Accueil
            </Link>
            <Link
              href="/prestations"
              className={[
                "inline-flex items-center leading-none transition-colors",
                isSolidHeader ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              Prestations
            </Link>
            <Link
              href="/galerie"
              className={[
                "inline-flex items-center leading-none transition-colors",
                isSolidHeader ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              Galerie
            </Link>
            <Link
              href="/avis"
              className={[
                "inline-flex items-center leading-none transition-colors",
                isSolidHeader ? "text-gray-700 hover:text-orange-600" : "text-white/90 hover:text-white",
              ].join(" ")}
            >
              Avis
            </Link>
            <Link
              href="/contact"
              className="btn btn-sm btn-primary btn-relief leading-none"
            >
              Contact
            </Link>
          </nav>
          <button 
            className={[
              "md:hidden transition-colors",
              isSolidHeader ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-white/90",
            ].join(" ")}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </button>
        </div>
        {/* Menu mobile */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 py-4 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Accueil
              </Link>
              <Link
                href="/prestations"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Prestations
              </Link>
              <Link
                href="/galerie"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Galerie
              </Link>
              <Link
                href="/avis"
                className="text-gray-700 hover:text-orange-600 transition-colors py-2"
                onClick={closeMenu}
              >
                Avis
              </Link>
              <Link
                href="/contact"
                className="btn btn-sm btn-primary btn-relief text-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

