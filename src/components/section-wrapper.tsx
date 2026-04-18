"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: "default" | "secondary" | "tertiary";
}

export function SectionWrapper({
  id,
  children,
  className = "",
  bg = "default",
}: SectionWrapperProps) {
  const bgClass = {
    default: "bg-background",
    secondary: "bg-background-secondary",
    tertiary: "bg-background-tertiary",
  }[bg];

  return (
    <section id={id} className={`relative overflow-hidden ${bgClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28"
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-16 max-w-3xl ${alignClass}`}>
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-gold-300/40 bg-gold-50! px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-700 dark:border-gold-700/40 dark:bg-gold-900/30 dark:text-gold-400">
          {badge}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-foreground-secondary">
          {description}
        </p>
      )}
    </div>
  );
}
