"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { attorneys } from "@/data/attorneys";
import { Mail, Phone, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".attorney-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".attorneys-grid",
            start: "top 75%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-charcoal-50 mb-8">
              Our <span className="text-gold-500">Team</span>
            </h1>
            <p className="body-large text-charcoal-300">
              Meet the accomplished attorneys who lead Justice Law Firm. Our
              team brings together decades of experience in complex litigation
              and international arbitration.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="attorneys-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((attorney) => (
              <div key={attorney.id} className="attorney-card group">
                <div className="bg-charcoal-950 border border-charcoal-800 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/10">
                  {/* Image */}
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

                    {/* Specializations */}
                    <div className="mb-6">
                      <p className="text-charcoal-400 text-sm line-clamp-2">
                        {attorney.specialization.join(" • ")}
                      </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-2 mb-6 text-sm">
                      <a
                        href={`mailto:${attorney.email}`}
                        className="flex items-center gap-2 text-charcoal-400 hover:text-gold-500 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        <span className="truncate">{attorney.email}</span>
                      </a>
                      <a
                        href={`tel:${attorney.phone}`}
                        className="flex items-center gap-2 text-charcoal-400 hover:text-gold-500 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        {attorney.phone}
                      </a>
                    </div>

                    {/* View Profile Link */}
                    <Link
                      href={`/team/${attorney.id}`}
                      className="flex items-center text-gold-500 text-sm font-semibold hover:gap-3 transition-all"
                    >
                      View Full Profile
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
