"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isRedesign } = useTheme();

  return (
    <section
      className="min-h-[82vh] md:min-h-[88vh] py-10 md:py-16 lg:py-20 px-[5vw] overflow-hidden transition-colors duration-300 flex items-center"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 xl:gap-12">
          {/* Left Column: Primary Photo (41% width matching original) */}
          <div className="w-full lg:w-[41%] shrink-0 order-2 lg:order-1">
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
                sizes="(max-width: 1024px) 100vw, 41vw"
                priority
              />
            </div>
          </div>

          {/* Center Column: Editorial Copy (37% width matching original) */}
          <div className="w-full lg:w-[37%] order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-4">
            {/* Eyebrow */}
            <p
              className="text-[11px] sm:text-[12px] md:text-[12.5px] tracking-[0.24em] uppercase font-semibold italic mb-5 md:mb-6"
              style={{
                color: "var(--color-eyebrow)",
                fontFamily: "var(--font-body)",
              }}
            >
              {isRedesign
                ? "Licensed Clinical Psychologist · Santa Monica, CA"
                : "Online & In-Person Counseling in Newbury Park & Across CA"}
            </p>

            {/* Headline */}
            <h1
              className="text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[70px] leading-[1.08] font-normal mb-5 md:mb-7 tracking-[-0.015em]"
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

            {/* Subcopy */}
            <p
              className="text-[15px] sm:text-[16.5px] md:text-[17px] leading-[1.75] mb-8 md:mb-10 font-light"
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
                  className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B] px-9 py-3.5 text-[11px] tracking-[0.2em] shadow-sm inline-block"
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

          {/* Right Column: Secondary Lifestyle Beach Image (21% width matching original Screenshot 0) */}
          <div className="w-full lg:w-[21%] order-3 hidden lg:block self-center pt-6">
            <div className="grainy-image relative aspect-[1365/1246] w-full shadow-md">
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
                sizes="(max-width: 1024px) 100vw, 21vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
