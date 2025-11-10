"use client";

import  { useRef } from "react";
import gsap from "gsap";

import Image from "next/image";
import mural5 from "@/public/images/mural-5.jpg";
import mural6 from "@/public/images/mural-6.jpg";

// Placeholder images - replace with your actual mural images
const galleryImages = [
  "/images/mural-1.jpg",
  "/images/mural-2.jpg",
  "/images/mural-3.jpg",
  "/images/mural-4.jpg",
  mural5,
  mural6,
];

export default function Gallery() {
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const handleMouseEnter = (index: number) => {
    // Animate all items
    itemRefs.current.forEach((item, i) => {
      if (!item) return;

      if (i === index) {
        // Hovered item - scale up
        gsap.to(item, {
          scale: 1.2,
          zIndex: 50,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Other items - scale down
        gsap.to(item, {
          scale: 0.5,
          zIndex: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    // Reset all items to normal size
    itemRefs.current.forEach((item) => {
      if (!item) return;
      gsap.to(item, {
        scale: 1,
        zIndex: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl w-full relative z-10">
        <div className="text-center mb-12 mx-auto">
          <h2
            ref={mainHeadingRef}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ perspective: "1000px" }}
          >
            SEE OUR ART GALLERY
          </h2>
        </div>

        {/* 3x2 Grid with expandable effect */}
        <div className="overflow-hidden grid grid-cols-3 grid-rows-2 gap-1  p-1 rounded-lg">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="relative overflow-visible"
              style={{
                aspectRatio: "1/1",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative w-full h-full bg-zinc-200">
                <Image
                  src={image}
                  alt={`Saqadat Art Gallery Painting ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
