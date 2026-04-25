"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "@/contexts/language-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language } = useTranslation();
  

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
        <button
          className="relative h-4 w-4 rounded-full border border-border bg-card"
          aria-label="Toggle theme"
          title={language === "fr" ? "Passer en mode clair" : "Switch to light mode"}
        />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-6 w-6 md:h-9 md:w-9 items-center cursor-pointer justify-center rounded-full border border-border bg-card transition-all duration-300 hover:border-primary hover:shadow-[0_0_12px_rgba(212,175,55,0.2)]"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={language === "fr" ? "Passer en mode clair" : "Switch to light mode"}
    >
      <Sun
        className={`absolute h-4 w-4 text-gold-500 transition-all duration-300 ${
          isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
        }`}
      />
      <Moon
        className={`absolute h-4 w-4 text-gold-400 transition-all duration-300 ${
          isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
        }`}
      />
    </button>
  );
}
