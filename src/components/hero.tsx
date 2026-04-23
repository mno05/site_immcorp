"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";

export function Hero() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
    <Image
      src="/images/hero.png"
      alt="Hero background"
      width={1920}
      height={1080}
      className="object-cover h-80 md:h-full"
    />
    <section
      id="accueil"
      className="flex items-center overflow-hidden bg-background"
    >
      {/* Background decorative elements */}


      <div className="relative mx-auto max-w-7xl px-6 py-10 md:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
           

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
             {t.hero.title+" "}
              <span className="bg-linear-to-r from-gold-800 via-gold-500 to-gold-600 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-500">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleEnd}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground">
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
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50! dark:bg-gold-900/30">
                  <Shield className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.hero.certified}
                  </p>
                  <p className="text-xs text-foreground-muted">{t.hero.certifiedDesc}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50! dark:bg-gold-900/30">
                  <Globe className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.hero.international}
                  </p>
                  <p className="text-xs text-foreground-muted">{t.hero.internationalDesc}</p>
                </div>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50! dark:bg-gold-900/30">
                  <Zap className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.hero.responsive}
                  </p>
                  <p className="text-xs text-foreground-muted">
                    {t.hero.responsiveDesc}
                  </p>
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
              {/* Main card */}
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_8px_40px_var(--shadow-color)]">
                <div className="absolute inset-0 bg-linear-to-br from-gold-400/5 via-transparent to-gold-500/5" />
                <div className="relative space-y-6">
                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "500+", label: t.hero.clientsSatisfied },
                      { value: "10+", label: t.hero.yearsExperience },
                      { value: "1000+", label: t.hero.projectsDelivered },
                      { value: "24/7", label: t.hero.supportClient },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-border bg-background-secondary p-5 transition-colors hover:border-gold-400/30"
                      >
                        <p className="text-2xl font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-foreground-muted">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Decorative lines */}
                  <div className="flex items-center gap-3">
                    <div className="h-1 flex-1 rounded-full bg-linear-to-r from-gold-500 to-gold-300" />
                    <div className="h-1 w-8 rounded-full bg-gold-200 dark:bg-gold-800" />
                    <div className="h-1 w-4 rounded-full bg-gold-100 dark:bg-gold-900" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-foreground">
                    {t.hero.badge}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </div>
  );
}
