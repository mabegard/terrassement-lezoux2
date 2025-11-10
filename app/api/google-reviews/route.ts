import { NextResponse } from "next/server";

// Cette route récupère les avis Google via l'API Google Places
// Vous devrez configurer une clé API Google dans .env.local

export async function GET() {
  const placeId = process.env.GOOGLE_PLACE_ID; // ID de votre établissement Google
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) {
    return NextResponse.json(
      {
        error:
          "Configuration manquante. Veuillez configurer GOOGLE_PLACE_ID et GOOGLE_PLACES_API_KEY dans .env.local",
      },
      { status: 500 }
    );
  }

  try {
    // Récupérer les détails du lieu avec les avis
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}&language=fr`
    );

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des avis");
    }

    const data = await response.json();

    if (data.status !== "OK") {
      throw new Error(`Erreur API Google: ${data.status}`);
    }

    const result = data.result;

    return NextResponse.json({
      success: true,
      name: result.name,
      rating: result.rating,
      totalReviews: result.user_ratings_total,
      reviews: result.reviews?.map((review: any) => ({
        author_name: review.author_name,
        rating: review.rating,
        text: review.text,
        time: review.time,
        relative_time_description: review.relative_time_description,
        profile_photo_url: review.profile_photo_url,
      })) || [],
    });
  } catch (error: any) {
    console.error("Erreur récupération avis Google:", error);
    return NextResponse.json(
      {
        error: "Erreur lors de la récupération des avis",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

