"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoFull } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/whyus", label: "Pourquoi nous" },
  { href: "/process", label: "Processus" },
  { href: "/testimonials", label: "Témoignages" },
  { href: "/cta", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navbar-bg backdrop-blur-xl shadow-[0_1px_3px_var(--shadow-color)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="z-50">
          <LogoFull />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 border-primary text-sm text-card font-medium transition-colors hover:bg-background-tertiary hover:text-foreground ${
                window.location.pathname === link.href ? "border-b-[0.2px]" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="/cta"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
          >
            Nous contacter
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`absolute top-full left-0 right-0 z-40 py-4 bg-background transition-all duration-300 lg:hidden ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={`text-2xl font-medium text-foreground-secondary transition-colors hover:text-primary ${
                window.location.pathname === link.href
                  ? "bg-background-tertiary rounded-lg px-4 py-2 w-full text-center "
                  : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cta"
            onClick={() => setIsMobileOpen(false)}
            className="mt-4 rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </header>
  );
}
