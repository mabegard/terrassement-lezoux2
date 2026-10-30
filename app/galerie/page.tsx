import GalleryClient from "@/components/GalleryClient";
import { photosChantiers } from "@/lib/metiers";

export const metadata = {
  title: "Galerie - Bland Terrassement",
  description:
    "Photos de chantiers de Bland Terrassement à Lezoux : enrobé, bordures, assainissement, réseaux et terrassement.",
};

export default function Galerie() {
  const images = photosChantiers();

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Galerie de Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations de terrassement et
            d'aménagement extérieur.
          </p>
        </div>

        {images.length === 0 ? (
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8 text-center">
            <div className="text-5xl mb-4">📷</div>
            <p className="text-gray-700 mb-2">
              Aucune photo trouvée. Ajoutez vos images dans le dossier <code>public/galerie</code>.
            </p>
            <p className="text-gray-500 text-sm">
              Formats acceptés: .jpg, .jpeg, .png, .webp, .avif
            </p>
          </div>
        ) : (
          <GalleryClient images={images} />
        )}

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous souhaitez voir plus de réalisations ?
          </p>
          <a
            href="/contact"
            className="btn btn-lg btn-primary btn-relief"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </div>
  );
}
