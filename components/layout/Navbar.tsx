"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Team", href: "/team" },
  { name: "Cases", href: "/cases" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Animate navbar on mount
    gsap.fromTo(
      ".navbar",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <nav
      className={cn(
        "navbar fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal-950/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="font-display text-2xl md:text-3xl font-bold text-charcoal-50 group-hover:text-gold-500 transition-colors duration-300">
                Justice
              </span>
              <span className="font-body text-xs md:text-sm tracking-[0.3em] text-gold-500 uppercase">
                Law Firm
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-300",
                    isActive
                      ? "text-gold-500"
                      : "text-charcoal-100 hover:text-gold-500"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-charcoal-100 hover:text-gold-500 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-950 border-t border-charcoal-800">
          <div className="page-container py-6 space-y-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block py-3 text-base font-medium tracking-wide uppercase transition-colors duration-300",
                    isActive
                      ? "text-gold-500"
                      : "text-charcoal-100 hover:text-gold-500"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block btn-primary text-center mt-6"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
