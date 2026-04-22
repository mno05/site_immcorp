"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import {
  HardHat,
  ShieldCheck,
  Droplets,
  Wrench,
  Shirt,
  Package,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/contexts/language-context";

export function ServicesSection() {
  const {t} = useTranslation()

const services = [
  {
    icon: HardHat,
    title: t.services.items.epi.title,
    description: t.services.items.epi.description,
    features: t.services.items.epi.features,
    image: "/images/individuelle.jpg",
  },
  {
    icon: Shirt,
    title: t.services.items.workwear.title,
    description: t.services.items.workwear.description,
    features: t.services.items.workwear.features,
    image: "/images/equipement.jpg",
  },
  {
    icon: Droplets,
    title: t.services.items.hygiene.title,
    description: t.services.items.hygiene.description,
    features: t.services.items.hygiene.features,
    image: "/images/hygiene.jpg",
  },
  {
    icon: ShieldCheck,
    title: t.services.items.safety.title,
    description: t.services.items.safety.description,
    features: t.services.items.safety.features,
    image: "/images/securite.jpg",
  },
  {
    icon: Wrench,
    title: t.services.items.technical.title,
    description: t.services.items.technical.description,
    features: t.services.items.technical.features,
    image: "/images/services_tech.jpg",
  },
  {
    icon: Package,
    title: t.services.items.supplies.title,
    description: t.services.items.supplies.description,
    features: t.services.items.supplies.features,
    image: "/images/fournitures.jpg",
  },
];


  return (
    <SectionWrapper id="services" bg="secondary">
      <SectionHeader
        badge={t.services.badge}
        title={t.services.title}
        description={t.services.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          // <motion.div
          //   key={service.title}
          //   initial={{ opacity: 0, y: 24 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   viewport={{ once: true }}
          //   transition={{ delay: i * 0.08, duration: 0.5 }}
          //   className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_30px_var(--shadow-color)]"
          // >
          //   {/* Gradient overlay */}
          //   <div
          //     className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
          //   />

          //   <div className="relative p-7">
          //     <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50! transition-colors group-hover:bg-gold-100 dark:bg-gold-900/30 dark:group-hover:bg-gold-900/50">
          //       <service.icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
          //     </div>

          //     <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
          //     <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          //       {service.description}
          //     </p>

          //     {/* Feature tags */}
          //     <div className="mt-5 flex flex-wrap gap-2">
          //       {service.features.map((feature) => (
          //         <span
          //           key={feature}
          //           className="rounded-full border border-border bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-muted transition-colors group-hover:border-gold-400/20 group-hover:text-foreground-secondary"
          //         >
          //           {feature}
          //         </span>
          //       ))}
          //     </div>

          //     {/* Learn more link */}
          //     <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
          //       En savoir plus
          //       <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          //     </div>
          //   </div>
          // </motion.div>
          <div
            key={service.title}
            className="h-120 group rounded-2xl border border-border bg-card p-2 space-y-2 overflow-hidden cursor-pointer transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_30px_var(--shadow-color)]"
          >
            <Image
              src={service.image}
              alt={service.title}
              loading="eager"
              width={400}
              height={400}
              className="h-80 group-hover:h-64 w-full object-cover rounded-lg transition-all duration-300"
            />
            <div>
              <h3 className="text-lg font-bold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {service.description}
              </p>
              {/* Hidden content */}
              <div className="hidden group-hover:block duration-300 animate-in fade-in slide-in-from-bottom">
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-border bg-background-secondary px-3 py-1 text-xs font-medium text-foreground-muted transition-colors group-hover:border-gold-400/20 group-hover:text-foreground-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                {/* <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
