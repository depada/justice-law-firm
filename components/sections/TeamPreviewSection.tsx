"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { attorneys } from "@/data/attorneys";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-grid",
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-charcoal-900">
      <div className="page-container">
        <div className="text-center mb-20">
          <h2 className="heading-2 text-charcoal-50 mb-6">
            Meet Our <span className="text-gold-500">Leadership</span>
          </h2>
          <p className="body-large text-charcoal-300 max-w-3xl mx-auto">
            Our team of accomplished attorneys brings decades of experience in
            complex litigation and international disputes.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attorneys.slice(0, 3).map((attorney) => (
            <Link
              key={attorney.id}
              href={`/team/${attorney.id}`}
              className="team-card group"
            >
              <div className="relative overflow-hidden rounded-lg bg-charcoal-950 border border-charcoal-800 hover:border-gold-500/50 transition-all duration-500">
                {/* Image Placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-charcoal-800 to-charcoal-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-charcoal-950 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="heading-4 text-charcoal-50 mb-2 group-hover:text-gold-500 transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-gold-500 text-sm font-semibold mb-4">
                    {attorney.role}
                  </p>
                  <p className="text-charcoal-400 text-sm mb-4 line-clamp-2">
                    {attorney.specialization.join(" • ")}
                  </p>
                  <div className="flex items-center text-gold-500 text-sm font-semibold">
                    View Profile
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/team" className="btn-primary">
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
