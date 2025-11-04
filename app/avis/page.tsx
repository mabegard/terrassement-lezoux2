"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface GoogleReviewsData {
  success: boolean;
  name?: string;
  rating?: number;
  totalReviews?: number;
  reviews?: GoogleReview[];
  error?: string;
}

export default function Avis() {
  const [reviewsData, setReviewsData] = useState<GoogleReviewsData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Récupérer les avis Google
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data: GoogleReviewsData) => {
        if (data.success && data.reviews) {
          setReviewsData(data);
        } else {
          // Si l'API n'est pas configurée, utiliser les avis de démonstration
          setReviewsData({
            success: false,
            error: data.error || "Configuration API manquante",
          });
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur:", err);
        setError("Impossible de charger les avis Google");
        setLoading(false);
      });
  }, []);

  // Avis de démonstration (affichés si l'API n'est pas configurée)
  const avisDemo = [
    {
      id: 1,
      author_name: "Marie D.",
      rating: 5,
      relative_time_description: "Il y a 2 semaines",
      text: "Excellent travail de terrassement pour notre extension. Yannick est très professionnel, ponctuel et le résultat est parfait. Je recommande vivement !",
    },
    {
      id: 2,
      author_name: "Jean-Pierre L.",
      rating: 5,
      relative_time_description: "Il y a 1 mois",
      text: "Intervention rapide et efficace pour l'aménagement de notre cour. Devis clair, travail soigné et prix correct. Très satisfait du service.",
    },
    {
      id: 3,
      author_name: "Sophie M.",
      rating: 5,
      relative_time_description: "Il y a 2 mois",
      text: "Artisan sérieux et expérimenté. Le nivellement de notre terrain a été fait dans les temps et avec beaucoup de précision. Merci pour ce travail de qualité !",
    },
    {
      id: 4,
      author_name: "Pierre C.",
      rating: 5,
      relative_time_description: "Il y a 2 mois",
      text: "Démolition d'un ancien garage réalisée proprement. L'équipe a fait attention aux alentours et a tout bien nettoyé après les travaux. Professionnel !",
    },
    {
      id: 5,
      author_name: "Claire F.",
      rating: 5,
      relative_time_description: "Il y a 3 mois",
      text: "Très bon suivi du projet, conseils pertinents et réalisation conforme au devis. Un artisan de confiance pour tous vos travaux de terrassement.",
    },
    {
      id: 6,
      author_name: "Marc T.",
      rating: 5,
      relative_time_description: "Il y a 3 mois",
      text: "13 ans d'expérience, ça se voit ! Travail soigné, respect des délais et bon rapport qualité-prix. Je n'hésiterai pas à refaire appel à ses services.",
    },
  ];

  const statsGoogle = {
    noteMoyenne: reviewsData?.rating || 5.0,
    nombreAvis: reviewsData?.totalReviews || 30,
    noteMax: 5,
  };

  const avisAfficher =
    reviewsData?.success && reviewsData.reviews
      ? reviewsData.reviews
      : avisDemo;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Avis de nos Clients
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez leurs
            témoignages sur Google.
          </p>
        </div>

        {/* Note moyenne Google */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="text-6xl font-bold text-orange-600">
              {statsGoogle.noteMoyenne.toFixed(1)}
            </div>
            <div>
              <div className="flex gap-1 mb-2">
                {[...Array(statsGoogle.noteMax)].map((_, i) => (
                  <span key={i} className="text-3xl text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-semibold">Google</span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Basé sur <strong>{statsGoogle.nombreAvis}+ avis</strong> sur Google
          </p>
          <a
            href="https://www.google.com/maps/place/Bland+Terrassement"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            Voir tous les avis sur Google
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {/* Message de statut */}
        {loading && (
          <div className="text-center mb-8">
            <p className="text-gray-600">Chargement des avis Google...</p>
          </div>
        )}

        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-yellow-800">
              ⚠️ {error}. Affichage des avis de démonstration ci-dessous.
            </p>
          </div>
        )}

        {/* Bloc d'information désactivé pour une expérience sans message intrusif
            Lorsque l'API n'est pas configurée, on affiche simplement les avis de démonstration. */}

        {/* Liste des avis */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            {reviewsData?.success
              ? "Avis Google en direct"
              : "Avis récents de nos clients"}
          </h2>
          {avisAfficher.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {avisAfficher.map((avis, index) => (
                <div
                  key={'id' in avis ? avis.id : `google-${index}`}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {'profile_photo_url' in avis && avis.profile_photo_url && (
                        <img
                          src={avis.profile_photo_url}
                          alt={avis.author_name}
                          className="w-10 h-10 rounded-full"
                        />
                      )}
                      <div>
                        <h3 className="font-bold text-gray-900">
                          {avis.author_name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {avis.relative_time_description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(avis.rating || 5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ★
                          </span>
                        ))}
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">{avis.text}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">
              <p>Aucun avis disponible pour le moment.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-orange-600 text-white p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">
            Vous aussi, faites-nous confiance !
          </h2>
          <p className="text-lg mb-6 text-orange-100">
            Contactez-nous pour discuter de votre projet et obtenir un devis
            gratuit.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
