"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { caseStudies } from "@/data/cases";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function CasesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".case-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".cases-grid",
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
              Case <span className="text-gold-500">Studies</span>
            </h1>
            <p className="body-large text-charcoal-300">
              Explore our track record of success in high-stakes litigation and
              complex disputes. These representative matters demonstrate our
              strategic approach and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="cases-grid space-y-12">
            {caseStudies.map((case_, index) => (
              <div
                key={case_.id}
                className="case-card bg-charcoal-950 border border-charcoal-800 rounded-lg overflow-hidden hover:border-gold-500/50 transition-all duration-500 group"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-500 text-sm font-semibold">
                      {case_.category}
                    </span>
                    {case_.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-charcoal-900 border border-charcoal-800 rounded-full text-charcoal-400 text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="heading-3 text-charcoal-50 mb-4 group-hover:text-gold-500 transition-colors">
                    {case_.title}
                  </h2>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3 text-charcoal-300">
                      <TrendingUp className="w-5 h-5 text-gold-500" />
                      <div>
                        <div className="text-xs text-charcoal-500 mb-1">
                          Value
                        </div>
                        <div className="font-semibold">{case_.value}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-charcoal-300">
                      <Clock className="w-5 h-5 text-gold-500" />
                      <div>
                        <div className="text-xs text-charcoal-500 mb-1">
                          Duration
                        </div>
                        <div className="font-semibold">{case_.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-charcoal-50 font-semibold mb-3 text-lg">
                        The Challenge
                      </h3>
                      <p className="text-charcoal-300 leading-relaxed">
                        {case_.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-charcoal-50 font-semibold mb-3 text-lg">
                        Our Approach
                      </h3>
                      <p className="text-charcoal-300 leading-relaxed">
                        {case_.approach}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-charcoal-800">
                    <h3 className="text-charcoal-50 font-semibold mb-3 text-lg">
                      The Outcome
                    </h3>
                    <p className="text-charcoal-300 leading-relaxed mb-6">
                      {case_.outcome}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center text-gold-500 hover:text-gold-400 transition-colors font-semibold"
                    >
                      Discuss Similar Matters
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 text-charcoal-50 mb-6">
              Achieve Similar <span className="text-gold-500">Results</span>
            </h2>
            <p className="body-large text-charcoal-300 mb-8">
              Let our experienced team help you navigate your complex legal
              challenges.
            </p>
            <Link href="/contact" className="btn-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
