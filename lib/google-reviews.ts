export const GOOGLE_REVIEWS_URL = "https://share.google/Xi6dMTlLtsgpj7Mwg";

export type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url?: string;
};

export type GoogleReviewsResult =
  | {
      success: true;
      name?: string;
      rating?: number;
      totalReviews?: number;
      reviews: GoogleReview[];
    }
  | {
      success: false;
      error: string;
    };

const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

type CacheEntry = {
  expiresAt: number;
  payload: Extract<GoogleReviewsResult, { success: true }>;
};

const memoryCache: { current?: CacheEntry } = {};

export async function getGoogleReviews(): Promise<GoogleReviewsResult> {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey || !placeId.startsWith("ChIJ")) {
    return {
      success: false,
      error: "Avis Google non configurés",
    };
  }

  const cached = memoryCache.current;
  if (cached && cached.expiresAt > Date.now()) {
    return cached.payload;
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "name,rating,user_ratings_total,reviews");
    url.searchParams.set("key", apiKey);
    url.searchParams.set("language", "fr");
    url.searchParams.set("reviews_sort", "newest");

    const response = await fetch(url.toString(), { next: { revalidate: 86400 } });
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
    const payload: Extract<GoogleReviewsResult, { success: true }> = {
      success: true,
      name: result.name,
      rating: result.rating,
      totalReviews: result.user_ratings_total,
      reviews:
        result.reviews?.map(
          (review: GoogleReview) => ({
            author_name: review.author_name,
            rating: review.rating,
            text: review.text,
            time: review.time,
            relative_time_description: review.relative_time_description,
            profile_photo_url: review.profile_photo_url,
          })
        ) || [],
    };

    memoryCache.current = {
      expiresAt: Date.now() + CACHE_TTL_MS,
      payload,
    };

    return payload;
  } catch (error) {
    console.error("Erreur récupération avis Google:", error);
    if (memoryCache.current) return memoryCache.current.payload;
    return { success: false, error: "Avis Google indisponibles" };
  }
}
