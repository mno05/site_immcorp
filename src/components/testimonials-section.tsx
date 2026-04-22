"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "./section-wrapper";
import { Star, Quote } from "lucide-react";
import { useTranslation } from "@/contexts/language-context";

export function TestimonialsSection() {
  const {t} = useTranslation();
  

  return (
    <SectionWrapper id="temoignages" bg="default">
      <SectionHeader
        badge={t.testimonials.badge}
        title={t.testimonials.title}
        description={t.testimonials.subtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {t.testimonials.testimonials.map((testimonial, i) => (
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
