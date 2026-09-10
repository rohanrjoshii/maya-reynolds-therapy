"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AppointmentCta from "@/components/AppointmentCta";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function ClonePage() {
  return (
    <ThemeProvider initialRedesign={false}>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <WhoWeHelpSection />
        <QuoteBanner variant="first" />
        <ExpertiseSection />
        <HowWeWorkSection />
        <SpecialtiesSection />
        <AppointmentCta />
        <FaqSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
