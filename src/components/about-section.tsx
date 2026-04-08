"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Notre Mission",
    description:
      "Révolutionner l'offre de services en RDC en capitalisant sur le savoir-faire acquis en Occident par nos fondateurs, pour proposer des solutions de qualité internationale.",
  },
  {
    icon: Eye,
    title: "Notre Vision",
    description:
      "Contribuer activement au développement de l'économie congolaise en rendant accessibles des équipements et services professionnels de premier ordre.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Chaque produit et service est soumis à des standards rigoureux de qualité. Nous ne transigeons jamais sur la sécurité et la fiabilité.",
  },
  {
    icon: Users,
    title: "Proximité",
    description:
      "Un réseau de partenaires solide et une présence locale à Kinshasa nous permettent de répondre efficacement aux besoins de nos clients.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="a-propos" bg="default">
      <SectionHeader
        badge="Qui sommes-nous"
        title="Une entreprise multi-services d'excellence"
        description="Fondée sur une vision d'excellence, IMM Corporation est active dans les secteurs-clés de l'économie congolaise. Nous développons un réseau de partenaires capable de répondre aux besoins tant professionnels que particuliers."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
        {values.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_30px_var(--shadow-color)]"
          >
            <div className="absolute top-0 right-0 h-32 w-32 bg-linear-to-bl from-gold-400/5 to-transparent" />
            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 transition-colors group-hover:bg-gold-100 dark:bg-gold-900/30 dark:group-hover:bg-gold-900/50">
                <item.icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground-secondary">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex items-center justify-center gap-6 rounded-2xl border border-gold-300/30 bg-linear-to-r from-gold-50 via-gold-50/50 to-gold-50 p-6 dark:border-gold-700/30 dark:from-gold-900/20 dark:via-gold-900/10 dark:to-gold-900/20"
      >
        <div className="text-center">
          <p className="text-lg font-semibold text-foreground">
            Basée à{" "}
            <span className="text-primary">Kinshasa-Gombe</span>, au cœur
            des affaires en RDC
          </p>
          <p className="mt-1 text-sm text-foreground-muted">
            6081, Avenue Lokele — C/o Restaurant Super Aubaine
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
