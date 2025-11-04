import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bland Terrassement - Artisan terrassier à Lezoux depuis 13 ans",
  description:
    "Bland Terrassement, artisan terrassier à Lezoux. Spécialisé dans tous types de travaux de terrassement, aménagement extérieur et travaux publics. Devis gratuit.",
  keywords:
    "terrassement, Lezoux, artisan terrassier, travaux publics, aménagement extérieur, démolition, nivellement",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
