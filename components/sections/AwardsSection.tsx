"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { awards } from "@/data/cases";

gsap.registerPlugin(ScrollTrigger);

export default function AwardsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".awards-marquee", {
        x: "-50%",
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-charcoal-950 border-y border-charcoal-800 overflow-hidden"
    >
      <div className="page-container mb-12">
        <h2 className="heading-3 text-center text-charcoal-50 mb-4">
          Recognized <span className="text-gold-500">Excellence</span>
        </h2>
        <p className="text-center text-charcoal-300">
          Honored by leading legal publications and industry organizations
        </p>
      </div>

      <div className="relative">
        <div className="awards-marquee flex gap-12">
          {[...awards, ...awards].map((award, index) => (
            <div
              key={`${award.id}-${index}`}
              className="flex-shrink-0 bg-charcoal-900 border border-charcoal-800 rounded-lg p-6 w-80"
            >
              <div className="text-gold-500 text-sm font-semibold mb-2">
                {award.year}
              </div>
              <h3 className="text-charcoal-50 font-display text-lg mb-2">
                {award.title}
              </h3>
              <p className="text-charcoal-400 text-sm">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
