"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Award, TrendingUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We pursue excellence in every matter, combining rigorous legal analysis with innovative strategies.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description:
      "Our clients' success is our success. We provide personalized attention and responsive service.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards and maintain complete transparency with our clients.",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven",
    description:
      "We are committed to achieving favorable outcomes through strategic thinking and meticulous execution.",
  },
];

const milestones = [
  { year: "1999", event: "Justice Law Firm founded in New York City" },
  { year: "2005", event: "Expanded to international arbitration practice" },
  { year: "2010", event: "Opened offices in London and Hong Kong" },
  { year: "2015", event: "Recognized as Litigation Firm of the Year" },
  { year: "2020", event: "Launched Technology & Cybersecurity practice" },
  { year: "2024", event: "Celebrating 25 years of excellence" },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".fade-up",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".fade-up",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".value-card",
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".values-grid",
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ".timeline-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h1 className="heading-1 text-charcoal-50 mb-8">
              About <span className="text-gold-500">Justice Law Firm</span>
            </h1>
            <p className="body-large text-charcoal-300">
              For over two decades, Justice Law Firm has been at the forefront
              of complex litigation and international arbitration, delivering
              strategic counsel to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="heading-2 text-charcoal-50 mb-6">
                Our <span className="text-gold-500">Story</span>
              </h2>
              <div className="space-y-4 text-charcoal-300 leading-relaxed">
                <p>
                  Founded in 1999, Justice Law Firm emerged from a vision to
                  create a boutique practice that could deliver the
                  sophistication of large firms with the personal attention of a
                  specialized practice.
                </p>
                <p>
                  Our founders, veterans of premier law firms and government
                  agencies, recognized that clients facing high-stakes disputes
                  needed more than legal expertise—they needed strategic
                  partners who understood their business and could navigate
                  complex challenges with creativity and precision.
                </p>
                <p>
                  Today, we are recognized as one of the leading litigation and
                  arbitration practices globally, with offices in New York,
                  London, and Hong Kong. Our team has grown to include some of
                  the most accomplished attorneys in their fields, but our
                  commitment remains unchanged: to deliver exceptional results
                  through strategic thinking, meticulous preparation, and
                  unwavering dedication to our clients.
                </p>
              </div>
            </div>
            <div className="fade-up">
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-800 to-charcoal-950 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gold-500/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-charcoal-950">
        <div className="page-container">
          <div className="text-center mb-20 fade-up">
            <h2 className="heading-2 text-charcoal-50 mb-6">
              Our <span className="text-gold-500">Values</span>
            </h2>
            <p className="body-large text-charcoal-300 max-w-3xl mx-auto">
              The principles that guide our practice and define our
              relationships with clients
            </p>
          </div>

          <div className="values-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="bg-charcoal-900 border border-charcoal-800 p-8 rounded-lg h-full hover:border-gold-500/50 transition-all duration-500">
                  <div className="mb-6 inline-flex p-4 bg-gold-500/10 rounded-lg">
                    <value.icon className="w-8 h-8 text-gold-500" />
                  </div>
                  <h3 className="heading-4 text-charcoal-50 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal-900">
        <div className="page-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 fade-up">
              <h2 className="heading-2 text-charcoal-50 mb-6">
                Our <span className="text-gold-500">Journey</span>
              </h2>
              <p className="body-large text-charcoal-300">
                Key milestones in our firm's history
              </p>
            </div>

            <div className="timeline space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="timeline-item flex gap-8 items-start"
                >
                  <div className="flex-shrink-0 w-24">
                    <div className="text-gold-500 font-display text-2xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-gold-500" />
                    <div className="pl-8 pb-8 border-l-2 border-charcoal-800">
                      <p className="text-charcoal-300 text-lg">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal-950">
        <div className="page-container">
          <div className="max-w-3xl mx-auto text-center fade-up">
            <h2 className="heading-2 text-charcoal-50 mb-6">
              Join Our <span className="text-gold-500">Legacy</span>
            </h2>
            <p className="body-large text-charcoal-300 mb-8">
              We&apos;re always looking for exceptional talent to join our team.team.
            </p>
            <a href="/contact" className="btn-primary">
              Explore Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
