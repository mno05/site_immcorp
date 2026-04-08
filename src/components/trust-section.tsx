"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Building2, Truck, HardHat, Hospital, Factory, Landmark } from "lucide-react";

const partners = [
  { icon: Building2, name: "Entreprises BTP" },
  { icon: HardHat, name: "Industries minières" },
  { icon: Hospital, name: "Centres de santé" },
  { icon: Factory, name: "Secteur industriel" },
  { icon: Landmark, name: "Institutions publiques" },
  { icon: Truck, name: "Transport & Logistique" },
];

const stats = [
  { value: "500+", label: "Clients actifs", suffix: "" },
  { value: "10", label: "Années d'expertise", suffix: "+" },
  { value: "98", label: "Taux de satisfaction", suffix: "%" },
  { value: "48h", label: "Délai de livraison", suffix: "" },
];

export function TrustSection() {
  return (
    <SectionWrapper bg="secondary">
      <div className="space-y-16">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-foreground lg:text-5xl">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </p>
              <p className="mt-2 text-sm text-foreground-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
            Ils nous font confiance
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Partner sectors */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_4px_20px_var(--shadow-color)]"
            >
              <partner.icon className="h-8 w-8 text-foreground-muted transition-colors group-hover:text-primary" />
              <span className="text-center text-xs font-medium text-foreground-secondary">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
