"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="page-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 text-charcoal-50 mb-6">
            Ready to Discuss Your{" "}
            <span className="text-gold-500">Legal Matter?</span>
          </h2>
          <p className="body-large text-charcoal-300 mb-12 max-w-2xl mx-auto">
            Our team is ready to provide strategic counsel tailored to your
            unique situation. Schedule a confidential consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/contact"
              className="btn-primary group inline-flex items-center justify-center"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+12125550100"
              className="btn-secondary inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              +1 (212) 555-0100
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-16 border-t border-charcoal-800 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-display font-bold text-gold-500 mb-2">
                25+
              </div>
              <div className="text-charcoal-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold-500 mb-2">
                200+
              </div>
              <div className="text-charcoal-400 text-sm">Cases Won</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold-500 mb-2">
                $5B+
              </div>
              <div className="text-charcoal-400 text-sm">Recovered</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold-500 mb-2">
                98%
              </div>
              <div className="text-charcoal-400 text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
