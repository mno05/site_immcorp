"use client";

import { useTranslation } from "@/contexts/language-context";
import { Globe } from "lucide-react";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative h-9 w-9 rounded-full border border-border bg-card"
        aria-label="Toggle language"
      />
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-[0_0_12px_rgba(212,175,55,0.2)]"
      aria-label={`Switch to ${language === "fr" ? "English" : "French"}`}
      title={language === "fr" ? "Passer en anglais" : "Switch to French"}
    >
      <Globe className="h-4 w-4 text-primary" />
      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground-muted opacity-0 transition-opacity hover:opacity-100">
        {language === "fr" ? "EN" : "FR"}
      </span>
    </button>
  );
}
