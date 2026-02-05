"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/pic1.jpg",
  "/images/pic2.jpg",
  "/images/pic3.jpg",
  "/images/pic5.jpg",
];

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Church Image */}
      <section className="relative rounded-xl overflow-hidden shadow-lg -mt-4 sm:-mt-8">
        {/* Background Image */}
        <div className="relative h-[350px] sm:h-[420px] lg:h-[500px]">
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Kościół pw. bł. Honorata Koźmińskiego w Będzinie-Grodźcu"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Title Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 sm:pb-14 px-4 text-center">
          {/* Parish Type */}
          <p className="text-amber-400/90 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium mb-3">
            Parafia Rzymskokatolicka
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight drop-shadow-lg max-w-3xl">
            pw. bł. Honorata Koźmińskiego
          </h1>

          {/* Location */}
          <p className="mt-3 text-lg sm:text-xl text-gray-200/90 font-light">
            w Będzinie-Grodźcu
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/70" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/70" />
          </div>
        </div>
      </section>

      {/* Image Gallery Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 -mt-4">
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square rounded-lg overflow-hidden shadow-md transition-all duration-200 ${
              index === activeIndex
                ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-background"
                : "hover:opacity-80"
            }`}
          >
            <Image
              src={src}
              alt={`Zdjęcie kościoła ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </>
  );
}
