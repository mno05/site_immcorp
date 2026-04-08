"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap } from "lucide-react";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Gold gradient orb */}
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-linear-to-br from-gold-400/10 via-gold-300/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 -left-40 h-[500px] w-[500px] rounded-full bg-linear-to-tr from-gold-500/8 via-gold-400/4 to-transparent blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
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
                Excellence & Innovation
              </span>
            </motion.div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Votre partenaire de{" "}
              <span className="bg-linear-to-r from-gold-600 via-gold-400 to-gold-500 bg-clip-text text-transparent dark:from-gold-400 dark:via-gold-300 dark:to-gold-500">
                confiance
              </span>{" "}
              en RDC
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-secondary">
              IMM Corporation révolutionne l&apos;offre de services en République Démocratique
              du Congo. Équipements de sécurité, solutions d&apos;hygiène et services
              professionnels — au standard international.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_8px_30px_rgba(212,175,55,0.3)]"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-background-secondary"
              >
                Découvrir nos services
              </a>
            </div>

            {/* Mini trust badges */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Shield className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Certifié</p>
                  <p className="text-xs text-foreground-muted">Qualité ISO</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Globe className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">International</p>
                  <p className="text-xs text-foreground-muted">Standards EU</p>
                </div>
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-50 dark:bg-gold-900/30">
                  <Zap className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Réactif</p>
                  <p className="text-xs text-foreground-muted">Livraison rapide</p>
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
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-foreground">Disponible</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
