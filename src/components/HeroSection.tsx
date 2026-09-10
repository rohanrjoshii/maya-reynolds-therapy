"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isRedesign } = useTheme();

  return (
    <section
      className="min-h-[84vh] md:min-h-[90vh] py-12 md:py-20 lg:py-24 px-[5vw] overflow-hidden transition-colors duration-300 flex items-center"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 xl:gap-16">
          {/* Left Column: Prominent Large Photo matching Squarespace 1365x1246 scale */}
          <div className="w-full lg:w-[45%] xl:w-[46%] shrink-0 order-2 lg:order-1">
            <div className="grainy-image relative aspect-[1365/1246] w-full shadow-md">
              <Image
                src={
                  isRedesign
                    ? "/images/redesign-hero.jpg"
                    : "/images/original/hero-family.jpg"
                }
                alt={
                  isRedesign
                    ? "Thoughtful professional finding calm and balance in Santa Monica"
                    : "Family embracing on the beach"
                }
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 46vw"
                priority
              />
            </div>
          </div>

          {/* Center Column: Grand Editorial Copy & Much Bigger Typography */}
          <div className="w-full lg:w-[43%] xl:w-[44%] order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-2">
            {/* Eyebrow - large, tracked, italic strong matching original sqsrte-large */}
            <p
              className="text-[11.5px] sm:text-[12.5px] md:text-[13px] tracking-[0.24em] uppercase font-semibold italic mb-5 md:mb-7"
              style={{
                color: "var(--color-eyebrow)",
                fontFamily: "var(--font-body)",
              }}
            >
              {isRedesign
                ? "Licensed Clinical Psychologist · Santa Monica, CA"
                : "Online & In-Person Counseling in Newbury Park & Across CA"}
            </p>

            {/* Huge Headline matching original Squarespace 60px-80px scale */}
            <h1
              className="text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] xl:text-[80px] leading-[1.07] font-normal mb-6 md:mb-8 tracking-[-0.015em]"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-heading)",
              }}
            >
              {isRedesign ? (
                <>
                  Find clarity, calm, and a stronger sense of{" "}
                  <span className="font-script">self</span>.
                </>
              ) : (
                <>
                  Rebuild your foundation on solid ground and finally begin to{" "}
                  <span className="font-script">thrive</span>.
                </>
              )}
            </h1>

            {/* Subcopy with generous reading size */}
            <p
              className="text-[16px] sm:text-[17.5px] md:text-[18.5px] leading-[1.8] mb-9 md:mb-11 font-light max-w-xl"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-body)",
              }}
            >
              {isRedesign
                ? "Therapy for high-achieving adults navigating anxiety, trauma, and burnout. Practical tools combined with depth-oriented work, offered in Santa Monica and across California."
                : "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow."}
            </p>

            {/* CTA */}
            <div>
              {isRedesign ? (
                <a
                  href="#contact"
                  className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B] px-10 py-4 text-[11.5px] tracking-[0.2em] shadow-sm"
                >
                  Book an Appointment
                </a>
              ) : (
                <a href="#contact" className="cta-underline text-[12px] tracking-[0.2em]">
                  Book an Appointment
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Secondary Lifestyle Beach Image */}
          <div className="w-full lg:w-[12%] xl:w-[10%] order-3 hidden lg:block self-center pt-16">
            <div className="grainy-image relative aspect-[3/4.2] w-full shadow-sm">
              <Image
                src={
                  isRedesign
                    ? "/images/redesign-beach.jpg"
                    : "/images/original/hero-child.jpg"
                }
                alt={
                  isRedesign
                    ? "Serene Santa Monica shoreline at golden hour"
                    : "Mother and child walking hand-in-hand along the ocean shore"
                }
                fill
                className="object-cover"
                sizes="12vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
