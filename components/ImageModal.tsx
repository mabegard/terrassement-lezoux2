"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageDescription: string;
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageDescription,
}: ImageModalProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <div className="absolute top-4 right-4 flex gap-2 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomOut();
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded transition-colors"
          disabled={scale <= 0.5}
        >
          −
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleResetZoom();
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded transition-colors"
        >
          {Math.round(scale * 100)}%
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleZoomIn();
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded transition-colors"
          disabled={scale >= 3}
        >
          +
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded transition-colors"
        >
          ✕
        </button>
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative max-w-full max-h-full"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
            transition: isDragging ? "none" : "transform 0.2s ease-out",
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageTitle}
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
            <h3 className="text-lg font-semibold">{imageTitle}</h3>
            <p className="text-sm text-gray-300 mt-1">{imageDescription}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-white text-sm bg-black bg-opacity-40 px-3 py-2 rounded">
        <p>Molette de la souris pour zoomer | Cliquer-glisser pour déplacer</p>
      </div>
    </div>
  );
}



