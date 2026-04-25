"use client"
import { LogoFull } from "./logo";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";



export function Footer() {
  const {t} = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
  services: [
    { label: t.footer.servicesList[0], href: "/services#security-equipment" },
    { label: t.footer.servicesList[1], href: "/services#workwear" },
    { label: t.footer.servicesList[2], href: "/services#hygiene-solutions" },
    { label: t.footer.servicesList[3], href: "/services#technical-services" },
    { label: t.footer.servicesList[4], href: "/services#professional-supplies" },
  ],
  entreprise: [
    { label: t.footer.companyList[0], href: "/about" },
    { label: t.footer.companyList[1], href: "/why-us" },
    { label: t.footer.companyList[2], href: "/process" },
    { label: t.footer.companyList[3], href: "/testimonials" },
    { label: t.footer.companyList[4], href: "/contact" },
  ],
};

  return (
    <footer id="contact" className="border-t border-border bg-navbar-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <LogoFull isFooter/>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-card">
              {t.footer.description}
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="tel:+243858609331"
                className="flex items-center gap-3 text-sm text-card transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                +243 858 609 331
              </a>
              <a
                href="tel:+243858609332"
                className="flex items-center gap-3 text-sm text-card transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-primary" />
                +243 858 609 332
              </a>
              <a
                href="mailto:contact@immcorpsarl.com"
                className="flex items-center gap-3 text-sm text-card transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                contact@immcorpsarl.com
              </a>
              <div className="flex items-start gap-3 text-sm text-card">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  6081, Avenue Lokele
                  <br />
                  Kinshasa - Gombe, RDC
                </span>
              </div>
            </div>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-card">
              {t.footer.services}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-card transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-card">
              {t.footer.company}
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-card transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-card">
              {t.footer.needQuote}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-card">
              {t.footer.needQuoteDesc}
            </p>
            <a
              href="mailto:contact@immcorpsarl.com?subject=Demande de devis"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
            >
              <Mail className="h-4 w-4" />
              {t.footer.writeUs}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-card">
            &copy; {currentYear} IMM Corporation SARL. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-card transition-colors hover:text-primary">
              {t.footer.legal}
            </a>
            <a href="#" className="text-xs text-card transition-colors hover:text-primary">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
