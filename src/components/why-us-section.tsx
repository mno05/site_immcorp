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
import { useTranslation } from "@/contexts/language-context";

export function WhyUsSection() {
  const {t} = useTranslation()

const differentiators = [
  {
    icon: Globe,
    title: t.whyUs.internationalStandards.title,
    description: t.whyUs.internationalStandards.description,
    highlight: true,
  },
  {
    icon: Banknote,
    title: t.whyUs.unbeatablePrices.title,
    description: t.whyUs.unbeatablePrices.description,
    highlight: false,
  },
  {
    icon: BadgeCheck,
    title: t.whyUs.customizableProducts.title,
    description: t.whyUs.customizableProducts.description,
    highlight: false,
  },
  {
    icon: Clock,
    title: t.whyUs.fastDelivery.title,
    description: t.whyUs.fastDelivery.description,
    highlight: true,
  },
  {
    icon: Headphones,
    title: t.whyUs.dedicatedSupport.title,
    description: t.whyUs.dedicatedSupport.description,
    highlight: false,
  },
  {
    icon: Sparkles,
    title: t.whyUs.continuousInnovation.title,
    description: t.whyUs.continuousInnovation.description,
    highlight: false,
  },
];


  return (
    <SectionWrapper id="pourquoi-nous" bg="default">
      <SectionHeader
        badge={t.whyUs.badge}
        title={t.whyUs.title}
        description={t.whyUs.subtitle}
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
                ? "border-gold-400/40 bg-linear-to-br from-gold-50/80! via-card! to-card! dark:border-gold-700/40 dark:from-gold-900/20 dark:via-card! dark:to-card!"
                : "border-border bg-card hover:border-gold-400/30"
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  item.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-gold-50! dark:bg-gold-900/30"
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
