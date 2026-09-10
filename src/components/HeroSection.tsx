"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isRedesign } = useTheme();

  return (
    <section
      className="py-10 md:py-16 lg:py-20 px-[4vw] overflow-hidden transition-colors duration-300"
      style={{ background: "var(--color-bg)" }}
    >
      <div className="section-max">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          {/* Left Column: Primary Prominent Image */}
          <div className="w-full lg:w-[42%] shrink-0 order-2 lg:order-1">
            <div className="grainy-image relative aspect-[10/13] w-full max-w-lg mx-auto lg:max-w-none shadow-sm">
              <Image
                src={
                  isRedesign
                    ? "/images/maya-reynolds.png"
                    : "/images/original/hero-family.jpg"
                }
                alt={
                  isRedesign
                    ? "Dr. Maya Reynolds, Licensed Clinical Psychologist in Santa Monica"
                    : "Family embracing on the beach"
                }
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
            </div>
          </div>

          {/* Center Column: Editorial Copy */}
          <div className="w-full lg:w-[38%] order-1 lg:order-2 flex flex-col justify-center px-0 lg:px-2">
            {/* Eyebrow */}
            <p
              className="text-[10px] md:text-[10.5px] tracking-[0.24em] uppercase font-medium mb-6 md:mb-8"
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
              className="text-[34px] sm:text-[40px] lg:text-[46px] xl:text-[50px] leading-[1.14] font-normal mb-6"
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
              className="text-[14px] md:text-[15px] leading-[1.8] mb-8 font-light"
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
                  className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B]"
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

          {/* Right Column: Secondary Beach Image */}
          <div className="w-full lg:w-[20%] order-3 hidden lg:block self-center pt-12">
            <div className="grainy-image relative aspect-[3/4] w-full shadow-sm">
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
                sizes="20vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
