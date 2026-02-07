"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import basePath from "@/lib/basePath";

const images = [
  `${basePath}/images/pic1.jpg`,
  `${basePath}/images/pic2.jpg`,
  `${basePath}/images/pic3.jpg`,
  `${basePath}/images/pic5.jpg`,
];

export default function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds, reset timer when image changes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <>
      {/* Hero Section with Church Image */}
      <section className="relative rounded-xl overflow-hidden shadow-lg -mt-4 sm:-mt-8">
        {/* Background Image */}
        <div className="relative h-[350px] sm:h-[420px] lg:h-[420px]">
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
          <p className="text-amber-400 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium mb-3 [text-shadow:_0_2px_8px_rgb(0_0_0_/_90%),_0_1px_3px_rgb(0_0_0_/_100%)]">
            Parafia Rzymskokatolicka
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-3xl [text-shadow:_0_2px_12px_rgb(0_0_0_/_90%),_0_1px_4px_rgb(0_0_0_/_100%)]">
            pw. bł. Honorata Koźmińskiego
          </h1>

          {/* Location */}
          <p className="mt-3 text-lg sm:text-xl text-gray-100 font-light [text-shadow:_0_2px_8px_rgb(0_0_0_/_90%),_0_1px_3px_rgb(0_0_0_/_100%)]">
            w Będzinie-Grodźcu
          </p>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-amber-500/70 shadow-lg" />
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-lg" />
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-amber-500/70 shadow-lg" />
          </div>
        </div>
      </section>

      {/* Image Gallery Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 -mt-4 lg:px-24">
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
