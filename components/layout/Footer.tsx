"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  firm: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/team" },
    { name: "Careers", href: "/contact" },
    { name: "News & Insights", href: "/cases" },
  ],
  services: [
    { name: "Corporate Litigation", href: "/practice-areas" },
    { name: "International Arbitration", href: "/practice-areas" },
    { name: "Regulatory Compliance", href: "/practice-areas" },
    { name: "White-Collar Defense", href: "/practice-areas" },
  ],
  resources: [
    { name: "Case Studies", href: "/cases" },
    { name: "Practice Areas", href: "/practice-areas" },
    { name: "Attorney Profiles", href: "/team" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800">
      <div className="page-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-display text-3xl font-bold text-charcoal-50">
                  Justice
                </span>
                <span className="font-body text-sm tracking-[0.3em] text-gold-500 uppercase">
                  Law Firm
                </span>
              </div>
            </Link>
            <p className="text-charcoal-300 mb-6 max-w-sm leading-relaxed">
              Strategic counsel for complex disputes. We deliver exceptional
              legal representation with unwavering commitment to our clients&apos;
              success.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-charcoal-300">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>350 Park Avenue, New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>+1 (212) 555-0100</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <span>info@justicefirm.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal-50 mb-4">
              Firm
            </h3>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-gold-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal-50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-gold-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal-50 mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-charcoal-300 hover:text-gold-500 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-charcoal-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-300 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-300 hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            {/* Copyright & Legal */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-charcoal-400">
              <p>
                &copy; {new Date().getFullYear()} Justice Law Firm. All rights
                reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="hover:text-gold-500 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-gold-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 pt-8 border-t border-charcoal-800">
            <p className="text-xs text-charcoal-500 leading-relaxed max-w-4xl">
              <strong className="text-charcoal-400">
                Attorney Advertising.
              </strong>{" "}
              Prior results do not guarantee a similar outcome. The content of
              this website is for informational purposes only and does not
              constitute legal advice. No attorney-client relationship is formed
              by use of this website. If you require legal advice, please
              contact an attorney directly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
