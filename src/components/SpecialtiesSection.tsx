"use client";

import { useTheme } from "@/context/ThemeContext";

const originalSpecialties = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay \"stuck,\" and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how distressing memories are stored in the brain, reducing their emotional charge and fostering resilience.",
  },
];

const redesignSpecialties = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "Constant worry, tension in your body, difficulty sleeping, or feeling like you are always bracing for something to go wrong. We will use cognitive-behavioral therapy (CBT) and mindfulness-based practices to address both emotional and physiological patterns, helping you feel more regulated in daily life.",
  },
  {
    title: "Trauma Processing & EMDR",
    description:
      "I work with adults who have experienced single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress. Using EMDR and body-oriented techniques, our work moves at a grounded pace with an emphasis on safety, stabilization, and lasting recovery.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Together, we will build awareness around high internal pressure and develop sustainable ways of living and working that reconnect you with what matters most.",
  },
];

export default function SpecialtiesSection() {
  const { isRedesign } = useTheme();
  const specialties = isRedesign ? redesignSpecialties : originalSpecialties;

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max">
        {/* Spot 4: Single script word */}
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-12 md:mb-16 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            <>
              How I can <span className="font-script">help</span>
            </>
          ) : (
            <>
              Our <span className="font-script">specialties</span> include…
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {specialties.map((specialty) => (
            <div key={specialty.title}>
              <h3
                className="text-[22px] md:text-[25px] leading-[1.2] font-normal mb-4"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
              >
                {specialty.title}
              </h3>
              <p
                className="text-[13.5px] leading-[1.8] mb-5 font-light"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
              >
                {specialty.description}
              </p>
              <a
                href="#contact"
                className="cta-underline text-[11px]"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
