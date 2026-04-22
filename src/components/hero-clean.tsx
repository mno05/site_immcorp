"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function HeroClean() {
  const { t } = useTranslation();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-linear-to-br from-gold-400/10 via-gold-300/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-linear-to-tr from-gold-500/8 via-gold-400/4 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/40 bg-gold-50/80 px-4 py-1.5 backdrop-blur-sm dark:border-gold-700/40 dark:bg-gold-900/20"
            >
              <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-400">
                {t.hero.badge}
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t.hero.title}{" "}
              <span className="bg-linear-to-r from-gold-600 via-gold-400 to-gold-500 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-500">
                {t.hero.titleHighlight}
              </span>{" "}
              en RDC
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
              >
                {t.hero.getQuote}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-background-secondary"
              >
                {t.hero.discoverServices}
              </a>
            </div>

            {/* Mini trust badges */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Shield className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.hero.certified}</p>
                  <p className="text-xs text-foreground-muted">{t.hero.certifiedDesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Globe className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.hero.international}</p>
                  <p className="text-xs text-foreground-muted">{t.hero.internationalDesc}</p>
                </div>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Zap className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.hero.responsive}</p>
                  <p className="text-xs text-foreground-muted">{t.hero.responsiveDesc}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_8px_40px_var(--shadow-color)]">
                <div className="absolute inset-0 bg-linear-to-br from-gold-400/5 via-transparent to-gold-500/5" />
                <div className="relative space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "500+", label: "Clients satisfaits" },
                      { value: "10+", label: "Années d'expérience" },
                      { value: "1000+", label: "Projets livrés" },
                      { value: "24/7", label: "Support client" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-border bg-background-secondary p-5 transition-colors hover:border-gold-400/30"
                      >
                        <p className="text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="mt-1 text-xs text-foreground-muted">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
