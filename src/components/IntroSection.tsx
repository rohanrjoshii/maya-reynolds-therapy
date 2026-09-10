"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function IntroSection() {
  const { isRedesign } = useTheme();

  return (
    <section className="py-20 md:py-32 px-[5vw] transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="w-full max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
          {/* Text Column */}
          <div>
            <h2
              className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.12] font-normal mb-8 md:mb-10 tracking-[-0.015em]"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
            >
              {isRedesign
                ? "You're more than the stress you carry."
                : "You're holding onto hope that life can be better than it is right now."}
            </h2>
            <div className="space-y-6" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              {isRedesign ? (
                <>
                  <p className="text-[18px] sm:text-[20px] md:text-[21px] leading-[1.6] font-semibold italic opacity-95">
                    I offer a warm, grounded, and collaborative space to unpack what feels overwhelming.
                  </p>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] font-light">
                    Many of the people I work with are high-achieving, thoughtful, and self-aware, yet internally feel exhausted, stuck in overthinking, or emotionally on edge. They appear steady on the outside while quietly struggling with constant worry, physical tension, or restless sleep.
                  </p>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] font-light">
                    Sessions are structured enough to feel supportive while leaving room for reflection and depth. Together, we work to understand both the emotional and physiological sides of what you experience, helping you develop insight, resilience, and a stronger relationship with yourself.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[18px] sm:text-[20px] md:text-[21px] leading-[1.6] font-semibold italic opacity-95">
                    At Conejo Valley Family Counseling we want to make that hope a reality.
                  </p>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] font-light">
                    Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
                  </p>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.85] font-light">
                    First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Grand Portrait Image Column matching Squarespace 1104x1632 */}
          <div className="grainy-image relative aspect-[2/3] w-full max-w-lg mx-auto lg:max-w-none shadow-md">
            <Image
              src={isRedesign ? "/images/redesign-therapy-space.jpg" : "/images/original/beach.jpg"}
              alt={isRedesign ? "Calm therapy office with natural light in Santa Monica" : "Sandy beach with gentle ocean waves"}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
