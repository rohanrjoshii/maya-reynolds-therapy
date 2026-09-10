"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function IntroSection() {
  const { isRedesign } = useTheme();

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] font-normal mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
            >
              {isRedesign ? (
                "You're more than the stress you carry."
              ) : (
                <>
                  You&apos;re holding onto hope that life can be better than it is right{" "}
                  <span className="font-script">now</span>.
                </>
              )}
            </h2>
            <div className="space-y-4" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              {isRedesign ? (
                <>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    Many of the people I work with are high-achieving, thoughtful, and self-aware, yet internally feel exhausted, stuck in overthinking, or emotionally on edge. They appear steady on the outside while quietly struggling with constant worry, physical tension, or restless sleep.
                  </p>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive while leaving space for reflection and depth. Together, we work to understand both the emotional and physiological sides of what you experience.
                  </p>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    At Conejo Valley Family Counseling we want to make that hope a reality. Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life&apos;s ups and downs.
                  </p>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    First and foremost, we believe what you&apos;re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="grainy-image relative aspect-[4/5] shadow-sm">
            <Image
              src={isRedesign ? "/images/redesign-therapy-space.jpg" : "/images/original/beach.jpg"}
              alt={isRedesign ? "Calm therapy office with natural light in Santa Monica" : "Sandy beach with gentle ocean waves"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
