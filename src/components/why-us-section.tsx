"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import {
  Globe,
  BadgeCheck,
  Banknote,
  Headphones,
  Clock,
  Sparkles,
} from "lucide-react";

const differentiators = [
  {
    icon: Globe,
    title: "Standards internationaux",
    description:
      "Nos produits respectent les normes européennes et internationales. Un savoir-faire acquis en Occident, appliqué localement.",
    highlight: true,
  },
  {
    icon: Banknote,
    title: "Prix imbattables",
    description:
      "Des équipements de qualité à des prix qui battent toute concurrence sur le marché congolais, sans compromis sur la sécurité.",
    highlight: false,
  },
  {
    icon: BadgeCheck,
    title: "Produits personnalisables",
    description:
      "Chaque équipement peut être adapté en fonction des besoins spécifiques de vos activités et de vos équipes.",
    highlight: false,
  },
  {
    icon: Clock,
    title: "Livraison rapide",
    description:
      "Un stock local à Kinshasa et une logistique optimisée pour des délais de livraison parmi les plus courts du marché.",
    highlight: true,
  },
  {
    icon: Headphones,
    title: "Accompagnement dédié",
    description:
      "Un conseiller dédié pour chaque client, de l'identification des besoins jusqu'au service après-vente.",
    highlight: false,
  },
  {
    icon: Sparkles,
    title: "Innovation continue",
    description:
      "Nous introduisons régulièrement de nouveaux produits et technologies pour anticiper vos besoins futurs.",
    highlight: false,
  },
];

export function WhyUsSection() {
  return (
    <SectionWrapper id="pourquoi-nous" bg="default">
      <SectionHeader
        badge="Pourquoi nous choisir"
        title="Ce qui nous distingue"
        description="IMM Corporation n'est pas un simple fournisseur. Nous sommes un partenaire stratégique engagé dans la réussite de vos projets."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:shadow-[0_8px_30px_var(--shadow-color)] ${
              item.highlight
                ? "border-gold-400/40 bg-linear-to-br from-gold-50/80 via-card to-card dark:border-gold-700/40 dark:from-gold-900/20 dark:via-card dark:to-card"
                : "border-border bg-card hover:border-gold-400/30"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  item.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-gold-50 dark:bg-gold-900/30"
                }`}
              >
                <item.icon
                  className={`h-5 w-5 ${
                    item.highlight ? "" : "text-gold-600 dark:text-gold-400"
                  }`}
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
