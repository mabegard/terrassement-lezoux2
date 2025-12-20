"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";

interface GalleryImage {
  src: string;
  title: string;
  description: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img) => (
          <figure
            key={img.src}
            className="group bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            itemScope
            itemType="https://schema.org/ImageObject"
            onClick={() => setSelectedImage(img)}
          >
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <figcaption className="p-4 border-t border-gray-100">
              <h3
                className="text-base font-semibold text-gray-900"
                itemProp="name"
              >
                {img.title}
              </h3>
              <p className="text-sm text-gray-600 mt-1" itemProp="caption">
                {img.description}
              </p>
              <meta itemProp="contentUrl" content={img.src} />
            </figcaption>
          </figure>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage.src}
          imageTitle={selectedImage.title}
          imageDescription={selectedImage.description}
        />
      )}
    </>
  );
}





