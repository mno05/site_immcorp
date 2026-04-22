import { LogoFull } from "./logo";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Équipements de sécurité", href: "#services" },
    { label: "Vêtements de travail", href: "#services" },
    { label: "Solutions d'hygiène", href: "#services" },
    { label: "Services techniques", href: "#services" },
    { label: "Fournitures professionnelles", href: "#services" },
  ],
  entreprise: [
    { label: "À propos", href: "#a-propos" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Notre processus", href: "#processus" },
    { label: "Témoignages", href: "#temoignages" },
    { label: "Contact", href: "#contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-navbar-bg">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <LogoFull />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-card">
              Entreprise multi-services d&apos;excellence, active dans les
              secteurs-clés de l&apos;économie congolaise depuis plus de 10 ans.
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
              Services
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
              Entreprise
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
              Besoin d&apos;un devis ?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-card">
              Décrivez votre besoin et recevez une proposition personnalisée sous 24h.
            </p>
            <a
              href="mailto:contact@immcorpsarl.com?subject=Demande de devis"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
            >
              <Mail className="h-4 w-4" />
              Nous écrire
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-card">
            &copy; {currentYear} IMM Corporation SARL. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-card transition-colors hover:text-primary">
              Mentions légales
            </a>
            <a href="#" className="text-xs text-card transition-colors hover:text-primary">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
