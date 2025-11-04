"use client";

import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Charger le script Google Reviews
    // Vous pouvez utiliser un widget tiers ou l'API Google Places
    // Pour l'instant, on va créer une structure qui peut être facilement connectée
    
    // Option 1: Si vous avez un widget Elfsight ou similaire
    // const script = document.createElement('script');
    // script.src = 'VOTRE_URL_WIDGET';
    // script.async = true;
    // document.body.appendChild(script);
    
    // Option 2: Utiliser l'API Google Places
    // Nécessite une clé API Google Places
    
    return () => {
      // Cleanup si nécessaire
    };
  }, []);

  return (
    <div className="w-full">
      {/* Ce div sera rempli par le widget Google Reviews */}
      <div id="google-reviews-widget" className="min-h-[400px]">
        {/* Widget sera injecté ici */}
      </div>
    </div>
  );
}

