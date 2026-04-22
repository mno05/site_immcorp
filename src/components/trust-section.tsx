"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { Building2, Truck, HardHat, Hospital, Factory, Landmark } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function TrustSection() {
  const { t } = useTranslation();

  const partners = [
  { icon: Building2, name: t.partners.btp },
  { icon: HardHat, name: t.partners.mining },
  { icon: Hospital, name: t.partners.healthcare },
  { icon: Factory, name: t.partners.industrial },
  { icon: Landmark, name: t.partners.public },
  { icon: Truck, name: t.partners.transport },
];

const stats = [
  { value: "500+", label: t.trust.clients, suffix: "" },
  { value: "10", label: t.trust.experience, suffix: "+" },
  { value: "98", label: t.trust.satisfaction, suffix: "%" },
  { value: "48h", label: t.trust.delivery, suffix: "" },
];



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
            {t.trust.theyTrustUs}
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
