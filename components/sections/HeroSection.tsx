"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state then animate (ensures content is visible if GSAP fails)
      const titleChildren = titleRef.current?.children;
      if (titleChildren && titleChildren.length > 0) {
        gsap.fromTo(
          Array.from(titleChildren),
          {
            y: 100,
            opacity: 0,
            rotateX: -90,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
            delay: 0.5,
          }
        );
      }

      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 1.2,
          }
        );
      }

      // CTA buttons
      const ctaChildren = ctaRef.current?.children;
      if (ctaChildren && ctaChildren.length > 0) {
        gsap.fromTo(
          Array.from(ctaChildren),
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            delay: 1.5,
          }
        );
      }

      // Background gradient animation
      gsap.to(heroRef.current, {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Parallax scroll indicator
      gsap.to(".scroll-indicator", {
        y: 20,
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-texture"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, #1a1a1a 0%, #0a0a0a 100%)",
        backgroundSize: "100% 200%",
        backgroundPosition: "50% 0%",
      }}
    >
      {/* Ambient light effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />
      </div>

      <div className="page-container relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <h1
            ref={titleRef}
            className="heading-1 mb-8 text-charcoal-50"
            style={{ perspective: "1000px", opacity: 1 }}
          >
            <span className="inline-block">Strategic</span>{" "}
            <span className="inline-block">Counsel</span>{" "}
            <span className="inline-block">for</span>{" "}
            <br className="hidden md:block" />
            <span className="inline-block text-gold-500">Complex</span>{" "}
            <span className="inline-block text-gold-500">Disputes</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="body-large text-charcoal-300 mb-12 max-w-3xl mx-auto"
            style={{ opacity: 1 }}
          >
            Justice Law Firm delivers exceptional legal representation in
            high-stakes litigation, international arbitration, and regulatory
            matters. Trusted by Fortune 500 companies worldwide.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center"
            style={{ opacity: 1 }}
          >
            <a
              href="/contact"
              className="btn-primary group inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/practice-areas"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Our Practice Areas
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator">
          <div className="flex flex-col items-center gap-2 text-charcoal-400">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </section>
  );
}
