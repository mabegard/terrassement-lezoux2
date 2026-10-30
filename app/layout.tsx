import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import { COMMUNES, ENTREPRISE, SITE_URL } from "@/lib/entreprise";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: ENTREPRISE.nom,
  url: SITE_URL,
  image: `${SITE_URL}/chantiers/cour-enrobe-gravier.jpg`,
  telephone: "+33674469581",
  email: ENTREPRISE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: ENTREPRISE.adresse,
    postalCode: ENTREPRISE.codePostal,
    addressLocality: ENTREPRISE.ville,
    addressCountry: "FR",
  },
  areaServed: COMMUNES.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terrassement-lezoux.fr"),
  title: "Terrassier à Lezoux – Bland Terrassement, artisan depuis 2013",
  description:
    "Bland Terrassement, artisan terrassier à Lezoux. Spécialisé dans tous types de travaux de terrassement, aménagement extérieur et travaux publics. Devis gratuit.",
  keywords:
    "terrassement, Lezoux, artisan terrassier, travaux publics, aménagement extérieur, démolition, nivellement",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <MobileActionBar />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
