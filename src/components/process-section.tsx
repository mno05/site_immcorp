"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { MessageSquare, Search, FileCheck, Truck, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Prise de contact",
    description:
      "Contactez-nous par téléphone, email ou via notre formulaire. Nous répondons sous 24h avec une première analyse de votre besoin.",
  },
  {
    icon: Search,
    step: "02",
    title: "Audit & Conseil",
    description:
      "Nos experts évaluent vos besoins spécifiques, analysent votre environnement de travail et vous recommandent les solutions les plus adaptées.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Devis personnalisé",
    description:
      "Recevez un devis détaillé et transparent, avec des options adaptées à votre budget. Aucun frais caché, tout est clair dès le départ.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Livraison & Installation",
    description:
      "Livraison rapide à Kinshasa et dans toute la RDC. Installation professionnelle incluse pour les équipements qui le nécessitent.",
  },
  {
    icon: HeadphonesIcon,
    step: "05",
    title: "Suivi & Support",
    description:
      "Un service après-vente réactif et un suivi régulier pour garantir votre satisfaction et le bon fonctionnement de vos équipements.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="processus" bg="secondary">
      <SectionHeader
        badge="Notre processus"
        title="Comment nous travaillons"
        description="Un processus structuré et transparent, pensé pour vous offrir une expérience fluide et professionnelle à chaque étape."
      />

      <div className="relative">
        {/* Connecting line (desktop) */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-border via-gold-400/40 to-border lg:block" />

        <div className="space-y-8 lg:space-y-0">
          {steps.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative lg:flex lg:items-center lg:gap-8 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_4px_20px_var(--shadow-color)]">
                    <div className={`flex items-center gap-3 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-50! dark:bg-gold-900/30">
                        <item.icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                          Étape {item.step}
                        </span>
                        <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      </div>
                    </div>
                    <p className={`mt-3 text-sm leading-relaxed text-foreground-secondary ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden h-16 lg:flex lg:w-16 lg:shrink-0 lg:items-center lg:justify-center">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-400 bg-card">
                    <span className="text-xs font-bold text-primary">{item.step}</span>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
