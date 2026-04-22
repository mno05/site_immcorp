import { TrustSection } from "@/components/trust-section";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { WhyUsSection } from "@/components/why-us-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaSection } from "@/components/cta-section";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustSection />
      </main>
    </>
  );
}
