"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isRedesign } = useTheme();

  return (
    <section
      className="py-12 md:py-20 lg:py-24 px-[5vw] overflow-hidden transition-colors duration-300"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="section-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Primary Portrait Image */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none overflow-hidden shadow-sm">
              <Image
                src={
                  isRedesign
                    ? "/images/redesign-hero.jpg"
                    : "/images/original/hero-family.jpg"
                }
                alt={
                  isRedesign
                    ? "Dr. Maya Reynolds client finding peace and clarity in Santa Monica"
                    : "Family embracing on the beach"
                }
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
                priority
              />
            </div>
          </div>

          {/* Center Column: Editorial Typography & Copy */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-4">
            {/* Eyebrow */}
            <p
              className="text-[10.5px] md:text-[11px] tracking-[0.2em] uppercase font-medium mb-6 md:mb-8"
              style={{
                color: "var(--color-eyebrow)",
                fontFamily: "var(--font-body)",
              }}
            >
              {isRedesign
                ? "Online & In-Person Therapy in Santa Monica & Across CA"
                : "Online & In-Person Counseling in Newbury Park & Across CA"}
            </p>

            {/* Headline */}
            <h1
              className="text-[34px] sm:text-[42px] lg:text-[46px] xl:text-[52px] leading-[1.14] font-normal mb-6 tracking-[-0.01em]"
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
              className="text-[14px] md:text-[15px] leading-[1.75] mb-8 max-w-md font-light"
              style={{
                color: "var(--color-text)",
                fontFamily: "var(--font-body)",
              }}
            >
              {isRedesign
                ? "Therapy for high-achieving adults navigating anxiety, trauma, and burnout. Practical tools combined with depth-oriented work — in Santa Monica and across California."
                : "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow."}
            </p>

            {/* CTA */}
            <div>
              {isRedesign ? (
                <a
                  href="#contact"
                  className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B] px-8 py-3 text-[11.5px]"
                >
                  Book an Appointment
                </a>
              ) : (
                <a href="#contact" className="cta-underline">
                  Book an Appointment
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Secondary Lifestyle Beach Image */}
          <div className="lg:col-span-3 order-3 hidden lg:block self-center pt-8">
            <div className="relative aspect-[3/4] w-full overflow-hidden shadow-sm">
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
                sizes="25vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
