"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function CtaSection() {
  const {t} = useTranslation();
  return (
    <section className="relative overflow-hidden bg-background-tertiary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-linear-to-br from-gold-400/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-linear-to-tr from-gold-500/8 to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-gold-300/40 bg-gold-50! px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-700 dark:border-gold-700/40 dark:bg-gold-900/30 dark:text-gold-400">
            {t.cta.badge}
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {t.cta.title}{" "}
            <span className="bg-linear-to-r from-gold-600 via-gold-400 to-gold-500 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-500">
              {t.cta.titleHighlight}
            </span>{" "}
            ?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">
            {t.cta.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
            >
              {t.cta.getFreeQuote}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+243858609331"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-card"
            >
              <Phone className="h-4 w-4 text-primary" />
              {t.cta.callUs}
            </a>
          </div>

          {/* <div className="mt-8 flex items-center justify-center gap-2 text-sm text-foreground-muted">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:contact@immcorpsarl.com"
              className="transition-colors hover:text-primary"
            >
              {t.cta.emailUs}
            </a>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}
