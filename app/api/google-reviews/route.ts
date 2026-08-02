import { NextResponse } from "next/server";

export const revalidate = 86400; // 24 h

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
};

type ReviewsPayload = {
  success: true;
  name?: string;
  rating?: number;
  totalReviews?: number;
  reviews: GoogleReview[];
  cachedAt: string;
  cacheTtlHours: number;
};

type MemoryCache = {
  expiresAt: number;
  payload: ReviewsPayload;
};

const memoryCache: { current?: MemoryCache } = {};

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Configuration manquante. Ajoutez GOOGLE_PLACE_ID et GOOGLE_PLACES_API_KEY dans .env.local",
      },
      { status: 200 }
    );
  }

  const cached = memoryCache.current;
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json(cached.payload, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
        "X-Cache": "HIT",
      },
    });
  }

  try {
    const url = new URL(
      "https://maps.googleapis.com/maps/api/place/details/json"
    );
    url.searchParams.set("place_id", placeId);
    url.searchParams.set(
      "fields",
      "name,rating,user_ratings_total,reviews"
    );
    url.searchParams.set("key", apiKey);
    url.searchParams.set("language", "fr");
    url.searchParams.set("reviews_sort", "newest");

    const response = await fetch(url.toString(), {
      next: { revalidate: 86400 },
    });

    if (!response.ok) {
      throw new Error("Erreur HTTP lors de la récupération des avis");
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(
        `Erreur API Google: ${data.status}${
          data.error_message ? ` — ${data.error_message}` : ""
        }`
      );
    }

    const result = data.result;
    const payload: ReviewsPayload = {
      success: true,
      name: result.name,
      rating: result.rating,
      totalReviews: result.user_ratings_total,
      reviews:
        result.reviews?.map(
          (review: {
            author_name: string;
            rating: number;
            text: string;
            time: number;
            relative_time_description: string;
            profile_photo_url?: string;
          }) => ({
            author_name: review.author_name,
            rating: review.rating,
            text: review.text,
            time: review.time,
            relative_time_description: review.relative_time_description,
            profile_photo_url: review.profile_photo_url,
          })
        ) || [],
      cachedAt: new Date().toISOString(),
      cacheTtlHours: 24,
    };

    memoryCache.current = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      payload,
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=3600",
        "X-Cache": "MISS",
      },
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Erreur inconnue";
    console.error("Erreur récupération avis Google:", error);

    // Si on a un cache expiré, on le sert plutôt qu'une erreur
    const stale = memoryCache.current;
    if (stale) {
      return NextResponse.json(
        { ...stale.payload, stale: true },
        {
          headers: {
            "Cache-Control": "public, s-maxage=300",
            "X-Cache": "STALE",
          },
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Erreur lors de la récupération des avis",
        details: message,
      },
      { status: 200 }
    );
  }
}
