"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurOfficeSection from "@/components/OurOfficeSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import AppointmentCta from "@/components/AppointmentCta";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <HeroSection />
        <IntroSection />
        <WhoWeHelpSection />
        <QuoteBanner variant="first" />
        <ExpertiseSection />
        <HowWeWorkSection />
        <QuoteBanner variant="second" />
        <OurOfficeSection />
        <SpecialtiesSection />
        <AppointmentCta />
        <FaqSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
