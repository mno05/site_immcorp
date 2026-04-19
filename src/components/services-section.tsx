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

const services = [
  {
    icon: HardHat,
    title: "Équipements de Protection Individuelle",
    description:
      "Casques, gants, lunettes, harnais et équipements complets conformes aux normes internationales. Protection optimale pour chaque corps de métier.",
    features: [
      "Conformes aux normes CE",
      "Personnalisables",
      "Prix compétitifs",
    ],
    image: "/images/individuelle.jpg",
  },
  {
    icon: Shirt,
    title: "Vêtements de Travail",
    description:
      "Vêtements ignifugés en matériaux haute performance (nylon, coton traité). Résistants au feu, durables et confortables pour une utilisation quotidienne.",
    features: [
      "Matériaux ignifugés",
      "Haute visibilité",
      "Sur mesure disponible",
    ],
    image: "/images/equipement.jpg",
  },
  {
    icon: Droplets,
    title: "Solutions d'Hygiène",
    description:
      "Distributeurs de gel hydroalcoolique et produits d'hygiène professionnels. Solutions complètes pour les espaces de travail et lieux publics.",
    features: [
      "Distributeurs automatiques",
      "Gel certifié",
      "Installation incluse",
    ],
    image: "/images/hygiene.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Équipements de Sécurité",
    description:
      "Signalisation, extincteurs, matériel de premiers secours et équipements de sécurité incendie. Tout le nécessaire pour un environnement de travail sûr.",
    features: ["Normes internationales", "Formation incluse", "Maintenance"],
    image: "/images/securite.jpg",
  },
  {
    icon: Wrench,
    title: "Services Techniques",
    description:
      "Conseil, installation et maintenance de vos équipements. Nos experts vous accompagnent de l'audit à la mise en service complète.",
    features: ["Audit gratuit", "Installation", "Suivi personnalisé"],
    image: "/images/services_tech.jpg",
  },
  {
    icon: Package,
    title: "Fournitures Professionnelles",
    description:
      "Large gamme de fournitures pour entreprises et institutions. Commandes en gros avec des tarifs préférentiels et livraison rapide.",
    features: ["Catalogue étendu", "Tarifs dégressifs", "Livraison express"],
    image: "/images/fournitures.jpg",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="secondary">
      <SectionHeader
        badge="Nos services"
        title="Des solutions complètes pour votre sécurité"
        description="IMM Corporation propose une offre diversifiée de produits et services répondant aux plus hauts standards de qualité, adaptés au marché congolais."
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
              width={400}
              height={400}
              className="h-80 group-hover:h-50 w-full object-cover rounded-lg transition-all duration-300"
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
                <div className="mt-6 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
