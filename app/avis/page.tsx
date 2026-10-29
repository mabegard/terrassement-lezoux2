import type { Metadata } from "next";
import Link from "next/link";
import {
  getGoogleReviews,
  GOOGLE_REVIEWS_URL,
  type GoogleReview,
} from "@/lib/google-reviews";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Avis clients - Bland Terrassement",
  description:
    "Avis Google des clients de Bland Terrassement, artisan terrassier à Lezoux.",
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="text-yellow-400" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="card-relief p-6">
      <div className="flex items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-3 min-w-0">
          {review.profile_photo_url ? (
            <img
              src={review.profile_photo_url}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ) : null}
          <div className="min-w-0">
            <h3 className="font-bold text-gray-900 truncate">{review.author_name}</h3>
            <p className="text-sm text-gray-500">{review.relative_time_description}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Stars count={review.rating || 5} />
          <GoogleMark className="w-4 h-4" />
        </div>
      </div>
      <p className="text-gray-700">{review.text}</p>
    </article>
  );
}

export default async function Avis() {
  const reviewsData = await getGoogleReviews();
  const reviews = reviewsData.success ? reviewsData.reviews : [];
  const rating = reviewsData.success ? reviewsData.rating : undefined;
  const total = reviewsData.success ? reviewsData.totalReviews : undefined;

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Avis de mes clients
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La satisfaction de mes clients est ma priorité. Les témoignages
            sont ceux publiés sur Google.
          </p>
        </div>

        <div className="card-relief p-8 mb-8 max-w-2xl mx-auto text-center">
          {rating != null && total != null ? (
            <>
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-6xl font-bold text-orange-600">
                  {rating.toFixed(1)}
                </div>
                <div>
                  <div className="mb-2 text-3xl">
                    <Stars count={Math.round(rating)} />
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <GoogleMark className="w-5 h-5" />
                    <span className="font-semibold">Google</span>
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                Basé sur <strong>{total} avis</strong> sur Google
              </p>
            </>
          ) : (
            <div className="flex items-center justify-center gap-2 text-gray-700 mb-4">
              <GoogleMark className="w-6 h-6" />
              <p className="text-lg">
                Les avis de mes clients sont publiés sur la fiche Google.
              </p>
            </div>
          )}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
          >
            Voir tous les avis sur Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>

        {reviews.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Derniers avis Google
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <ReviewCard
                  key={`${review.author_name}-${review.time}`}
                  review={review}
                />
              ))}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              Google n’en transmet que quelques-uns. La liste complète est sur la fiche.
            </p>
          </div>
        ) : null}

        <div className="mt-12 bg-orange-600 text-white p-8 rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Vous aussi, faites-moi confiance !</h2>
          <p className="text-lg mb-6 text-orange-100">
            Contactez-moi pour discuter de votre projet et obtenir un devis gratuit.
          </p>
          <Link href="/contact" className="btn btn-lg btn-white btn-relief">
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
