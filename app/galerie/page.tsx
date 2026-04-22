import fs from "fs";
import path from "path";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Galerie - Bland Terrassement",
  description:
    "Découvrez nos réalisations de terrassement et d'aménagement extérieur à Lezoux.",
};

export default function Galerie() {
  // Lit les fichiers du dossier public/galerie
  const galleryDir = path.join(process.cwd(), "public", "galerie");
  let images: { src: string; title: string; description: string }[] = [];
  // Charge les métadonnées facultatives depuis gallery.json si présent
  let metaByFile: Record<string, { title?: string; description?: string }> = {};
  try {
    const metaRaw = fs.readFileSync(path.join(galleryDir, "gallery.json"), "utf-8");
    const metaObj = JSON.parse(metaRaw) as Array<{ file: string; title?: string; description?: string }>;
    for (const entry of metaObj) {
      if (entry?.file) metaByFile[entry.file] = { title: entry.title, description: entry.description };
    }
  } catch (_) {
    // Fichier absent ou invalide: on ignore et on utilisera les valeurs par défaut
  }
  try {
    const files = fs.readdirSync(galleryDir);
    images = files
      .filter((f) => /(\.png|\.jpg|\.jpeg|\.webp|\.avif)$/i.test(f))
      .map((f) => {
        const nameWithoutExt = f.replace(/\.[^.]+$/, "");
        const humanized = nameWithoutExt
          .replace(/[\-_]+/g, " ")
          .replace(/\b\w/g, (m) => m.toUpperCase());
        const fallbackTitle = humanized.trim() || "Réalisation de terrassement";
        const fallbackDescription = `${fallbackTitle} – terrassement et aménagement extérieur à Lezoux.`;
        const meta = metaByFile[f] || {};
        const title = (meta.title || fallbackTitle).trim();
        const description = (meta.description || fallbackDescription).trim();
        return { src: `/galerie/${f}`, title, description };
      });
  } catch (_) {
    // Si le dossier n'existe pas, on garde un tableau vide
    images = [];
  }

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
