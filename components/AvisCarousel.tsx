"use client";

import { useState } from "react";
import type { AvisPublie } from "@/lib/avis-publies";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-200"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function AvisCarousel({ avis }: { avis: AvisPublie[] }) {
  const [index, setIndex] = useState(0);
  const total = avis.length;
  const courant = avis[index];

  if (!courant) return null;

  function aller(delta: number) {
    setIndex((i) => (i + delta + total) % total);
  }

  return (
    <div
      className="max-w-3xl mx-auto"
      role="region"
      aria-roledescription="carrousel"
      aria-label="Avis clients"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") aller(-1);
        if (event.key === "ArrowRight") aller(1);
      }}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => aller(-1)}
          className="btn btn-sm btn-primary btn-relief"
          aria-label="Avis précédent"
        >
          Précédent
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Choisir un avis">
          {avis.map((item, i) => (
            <button
              key={`${item.auteur}-${item.date}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Avis de ${item.auteur}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-orange-600" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => aller(1)}
          className="btn btn-sm btn-primary btn-relief"
          aria-label="Avis suivant"
        >
          Suivant
        </button>
      </div>

      <article className="card-relief p-6 md:p-8" aria-live="polite">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{courant.auteur}</h3>
            <p className="text-sm text-gray-500">{courant.date}</p>
          </div>
          <Stars count={courant.note} />
        </div>
        <p className="text-gray-700 leading-relaxed">{courant.texte}</p>
      </article>
      <p className="text-center text-sm text-gray-500 mt-3">
        {index + 1} / {total}
      </p>
    </div>
  );
}
