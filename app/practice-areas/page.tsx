"use client";

import { useEffect, useRef } from "react";
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

export default function PracticeAreasPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".practice-area-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".practice-areas-container",
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
              Practice <span className="text-gold-500">Areas</span>
            </h1>
            <p className="body-large text-charcoal-300">
              We provide strategic counsel across a wide range of complex legal
              disciplines, delivering exceptional results in the most
              challenging matters.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container practice-areas-container">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => {
              const IconComponent = iconMap[area.icon] || Icons.Briefcase;
              return (
                <div
                  key={area.id}
                  id={area.id}
                  className="practice-area-card scroll-mt-32"
                >
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Icon & Title */}
                    <div className="md:col-span-1">
                      <div className="mb-6 inline-flex p-4 bg-gold-500/10 rounded-lg">
                        <IconComponent className="w-10 h-10 text-gold-500" />
                      </div>
                      <h2 className="heading-3 text-charcoal-50 mb-4">
                        {area.title}
                      </h2>
                      <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-6">
                        {area.expertise.length} Areas of Expertise
                      </p>
                      <div className="hidden md:block">
                        <a
                          href="/contact"
                          className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors text-sm font-semibold"
                        >
                          Discuss This Practice
                          <Icons.ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Description & Expertise */}
                    <div className="md:col-span-2">
                      <p className="text-charcoal-300 leading-relaxed mb-8 text-lg">
                        {area.fullDescription}
                      </p>

                      <div>
                        <h3 className="text-charcoal-50 font-semibold mb-4 text-lg">
                          Our Expertise Includes:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {area.expertise.map((item, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-charcoal-300"
                            >
                              <Icons.CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:hidden mt-6">
                        <a
                          href="/contact"
                          className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors text-sm font-semibold"
                        >
                          Discuss This Practice
                          <Icons.ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {index < practiceAreas.length - 1 && (
                    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-charcoal-800 to-transparent" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-charcoal-50 mb-6">
              Let's Discuss Your{" "}
              <span className="text-gold-500">Legal Needs</span>
            </h2>
            <p className="body-large text-charcoal-300 mb-8">
              Our team is ready to provide strategic counsel tailored to your
              situation.
            </p>
            <a href="/contact" className="btn-primary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
