import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMMUNES, ENTREPRISE, SITE_URL } from "@/lib/entreprise";
import { getMetier, METIERS } from "@/lib/metiers";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return METIERS.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const metier = getMetier(slug);
  if (!metier) return {};
  const url = `${SITE_URL}/prestations/${metier.slug}`;
  return {
    title: `${metier.titre} | ${ENTREPRISE.nom}`,
    description: metier.description,
    alternates: { canonical: url },
    openGraph: {
      title: metier.titre,
      description: metier.description,
      url,
      images: [{ url: metier.photos[0].src }],
      locale: "fr_FR",
      type: "website",
    },
  };
}

export default async function MetierPage({ params }: Props) {
  const { slug } = await params;
  const metier = getMetier(slug);
  if (!metier) notFound();

  const autres = METIERS.filter((m) => m.slug !== metier.slug);
  const [photoPrincipale, ...autresPhotos] = metier.photos;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: metier.nom,
    description: metier.description,
    url: `${SITE_URL}/prestations/${metier.slug}`,
    areaServed: COMMUNES.map((c) => ({ "@type": "City", name: c })),
    provider: {
      "@type": "LocalBusiness",
      name: ENTREPRISE.nom,
      telephone: "+33674469581",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ENTREPRISE.adresse,
        postalCode: ENTREPRISE.codePostal,
        addressLocality: ENTREPRISE.ville,
        addressCountry: "FR",
      },
    },
  };

  return (
    <div className="py-16 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="text-sm text-gray-500 mb-6" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-orange-600">
            Accueil
          </Link>
          <span className="mx-2">›</span>
          <Link href="/prestations" className="hover:text-orange-600">
            Prestations
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">{metier.nom}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {metier.h1}
            </h1>
            {metier.intro.map((p) => (
              <p key={p} className="text-lg text-gray-700 mb-4">
                {p}
              </p>
            ))}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href={ENTREPRISE.telephoneLien}
                className="btn btn-lg btn-primary btn-relief text-center"
              >
                Appeler le {ENTREPRISE.telephone}
              </a>
              <Link
                href="/contact"
                className="btn btn-lg btn-relief text-center border-2 border-orange-600 text-orange-600 bg-white hover:bg-orange-50"
              >
                Demander un devis gratuit
              </Link>
            </div>
          </div>

          <figure className="card-relief overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image
                src={photoPrincipale.src}
                alt={photoPrincipale.alt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-3 text-sm text-gray-600">
              {photoPrincipale.legende}
            </figcaption>
          </figure>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          <section className="card-relief p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              Ce que je réalise
            </h2>
            <ul className="space-y-2">
              {metier.prestations.map((item) => (
                <li key={item} className="flex items-start text-gray-700">
                  <span className="text-orange-600 mr-2">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section className="card-relief p-8">
            <h2 className="text-2xl font-bold mb-4 text-orange-600">
              Comment se passe le chantier
            </h2>
            <ol className="space-y-2 list-decimal list-inside text-gray-700">
              {metier.deroulement.map((etape) => (
                <li key={etape}>{etape}</li>
              ))}
            </ol>
          </section>
        </div>

        {autresPhotos.length > 0 ? (
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Photos de chantiers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {autresPhotos.map((photo) => (
                <figure key={photo.src} className="card-relief overflow-hidden">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-3 text-sm text-gray-600">
                    {photo.legende}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-14 card-relief p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Où j&apos;interviens
          </h2>
          <p className="text-gray-700 mb-4">
            Basé à {ENTREPRISE.ville}, j&apos;interviens dans le Puy-de-Dôme,
            notamment à :
          </p>
          <ul className="flex flex-wrap gap-3">
            {COMMUNES.map((c) => (
              <li
                key={c}
                className="px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-medium"
              >
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Mes autres métiers
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {autres.map((m) => (
              <li key={m.slug}>
                <Link
                  href={`/prestations/${m.slug}`}
                  className="block card-relief p-5 font-semibold text-orange-600 hover:text-orange-700"
                >
                  {m.nom} →
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 bg-orange-600 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold mb-4">{metier.nom} : parlons de votre projet</h2>
          <p className="text-lg mb-6 text-orange-100">
            Devis gratuit, visite sur place autour de Lezoux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={ENTREPRISE.telephoneLien} className="btn btn-lg btn-white btn-relief">
              Appeler le {ENTREPRISE.telephone}
            </a>
            <Link href="/contact" className="btn btn-lg btn-outline-white btn-relief">
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
