"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Logo({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="IMM Corporation Logo"
    >
      {/* Globe/dome structure */}
      <path
        d="M50 10C28 10 15 30 15 50C15 50 30 55 50 55C70 55 85 50 85 50C85 30 72 10 50 10Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-foreground"
      />
      <path
        d="M50 10C40 10 33 30 33 50C33 50 40 55 50 55C60 55 67 50 67 50C67 30 60 10 50 10Z"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-foreground"
      />
      <path
        d="M20 38H80"
        stroke="currentColor"
        strokeWidth="2"
        className="text-foreground"
      />
      {/* Gold ellipse orbit */}
      <ellipse
        cx="50"
        cy="58"
        rx="38"
        ry="12"
        stroke="#D4AF37"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

   useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="h-10 w-10" />; // Placeholder pendant le chargement

  const src = resolvedTheme === "dark" ? "/images/logo-light.png" : "/images/logo-dark.png";
  return (

    <div className={`flex items-center gap-2 ${className}`}>
      <Image src={src} alt="IMM Corporation Logo" className="w-10 md:w-15  h-9 md:h-12" width={100} height={100} />
      <div className="flex items-baseline gap-1">
        <span className="text-sm md:text-lg font-light tracking-wide text-card">IMM</span>
        <span className="text-sm md:text-lg font-bold tracking-wide text-card">CORPORATION</span>
        <span className="text-[8px] md:text-xs font-light tracking-widest text-card">SARL</span>
      </div>
    </div>
  );
}
