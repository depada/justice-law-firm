"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as Icons from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, any> = {
  "building-2": Icons.Building2,
  "globe-2": Icons.Globe2,
  scale: Icons.Scale,
  "shield-check": Icons.ShieldCheck,
  "trending-up": Icons.TrendingUp,
  cpu: Icons.Cpu,
};

export default function PracticeAreasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 75%",
          },
        }
      );

      // Parallax effect on cards
      gsap.utils.toArray<HTMLElement>(".practice-card").forEach((card, i) => {
        gsap.to(card, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal-950">
      <div className="page-container">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="heading-2 text-charcoal-50 mb-6">
            Areas of <span className="text-gold-500">Excellence</span>
          </h2>
          <p className="body-large text-charcoal-300 max-w-3xl mx-auto">
            We provide strategic counsel across complex legal landscapes,
            delivering exceptional results in the most challenging matters.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area) => {
            const IconComponent = iconMap[area.icon] || Icons.Briefcase;
            return (
              <Link
                key={area.id}
                href={`/practice-areas#${area.id}`}
                className="practice-card group"
              >
                <div className="relative h-full bg-charcoal-900 border border-charcoal-800 p-8 rounded-lg transition-all duration-500 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-gold-500/10 rounded-lg group-hover:bg-gold-500/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-gold-500" />
                  </div>

                  {/* Title */}
                  <h3 className="heading-4 text-charcoal-50 mb-4 group-hover:text-gold-500 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-charcoal-300 leading-relaxed mb-6">
                    {area.shortDescription}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-gold-500 text-sm font-semibold uppercase tracking-wide">
                    Learn More
                    <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>

                  {/* Hover Effect Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/0 group-hover:from-gold-500/5 group-hover:to-transparent rounded-lg transition-all duration-500 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link href="/practice-areas" className="btn-secondary">
            View All Practice Areas
          </Link>
        </div>
      </div>
    </section>
  );
}
