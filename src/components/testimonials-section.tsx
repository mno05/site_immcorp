"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre Kabongo",
    role: "Directeur Général",
    company: "KinBTP Construction",
    content:
      "IMM Corporation a transformé la sécurité sur nos chantiers. La qualité des EPI fournis est comparable aux standards européens, à un prix accessible. Notre taux d'accidents a chuté de 60% depuis notre partenariat.",
    rating: 5,
  },
  {
    name: "Marie-Claire Tshombe",
    role: "Responsable HSE",
    company: "Gecamines SA",
    content:
      "La réactivité et le professionnalisme d'IMM sont remarquables. Livraison en 48h, équipements personnalisés à notre image de marque, et un suivi après-vente irréprochable. Un vrai partenaire stratégique.",
    rating: 5,
  },
  {
    name: "Patrick Mbuyi",
    role: "Administrateur",
    company: "Hôpital Général de Kinshasa",
    content:
      "Les distributeurs de gel hydroalcoolique fournis par IMM sont d'excellente qualité. L'installation a été rapide et professionnelle. Le personnel et les patients sont satisfaits.",
    rating: 5,
  },
  {
    name: "Cécile Ngandu",
    role: "Chef de Projet",
    company: "Congo Mining Corp",
    content:
      "Nous avons équipé plus de 200 travailleurs avec les vêtements ignifugés d'IMM. La durabilité est impressionnante, même dans des conditions extrêmes. Un investissement qui en vaut la peine.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <SectionWrapper id="temoignages" bg="default">
      <SectionHeader
        badge="Témoignages"
        title="La parole à nos clients"
        description="Découvrez ce que nos partenaires disent de notre collaboration et de la qualité de nos services."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-gold-400/30 hover:shadow-[0_8px_30px_var(--shadow-color)]"
          >
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 h-8 w-8 text-gold-200 dark:text-gold-800" />

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, j) => (
                <Star
                  key={j}
                  className="h-4 w-4 fill-gold-400 text-gold-400"
                />
              ))}
            </div>

            <p className="relative text-sm leading-relaxed text-foreground-secondary">
              &ldquo;{testimonial.content}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              {/* Avatar placeholder */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-gold-400 to-gold-600 text-sm font-bold text-white">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-foreground-muted">
                  {testimonial.role} — {testimonial.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
