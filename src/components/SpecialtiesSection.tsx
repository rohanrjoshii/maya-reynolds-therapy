"use client";

import { useTheme } from "@/context/ThemeContext";

const originalSpecialties = [
  {
    title: "Trauma",
    description:
      "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay 'stuck,' and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
  },
  {
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

const redesignSpecialties = [
  {
    title: "Anxiety & Panic Therapy",
    description:
      "Constant worry, physical tension, difficulty sleeping, or feeling like you are always bracing for something to go wrong. We use cognitive-behavioral therapy (CBT) and mindfulness-based practices to address both emotional and physiological patterns, helping you feel more regulated in daily life.",
  },
  {
    title: "Trauma Processing & EMDR",
    description:
      "For adults who have experienced single-incident trauma or complex, long-standing patterns from early life and relationships. Using EMDR and body-oriented techniques, our work moves at a grounded pace with an emphasis on safety, stabilization, and lasting recovery.",
  },
  {
    title: "Burnout & Perfectionism",
    description:
      "Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Together, we build awareness around high internal pressure and develop sustainable ways of living and working that reconnect you with what matters most.",
  },
  {
    title: "Somatic & Nervous System Regulation",
    description:
      "Helping high-functioning adults move out of chronic fight-or-flight and reconnect with their physical body. Sessions incorporate gentle, body-oriented regulation tools that cultivate genuine grounding, calm, and emotional resilience in high-demand environments.",
  },
];

export default function SpecialtiesSection() {
  const { isRedesign } = useTheme();
  const specialties = isRedesign ? redesignSpecialties : originalSpecialties;

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <h2
              className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.15] font-normal"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
            >
              {isRedesign ? (
                <>
                  How I can <span className="font-script">help</span>...
                </>
              ) : (
                <>
                  Our <span className="font-script">specialties</span> include…
                </>
              )}
            </h2>
          </div>

          {/* Right Column: 2x2 Editorial Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
            {specialties.map((specialty) => (
              <div key={specialty.title} className="flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[21px] md:text-[24px] leading-[1.2] font-normal mb-3"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
                  >
                    {specialty.title}
                  </h3>
                  <p
                    className="text-[13px] md:text-[13.5px] leading-[1.8] font-light mb-6 opacity-85"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
                  >
                    {specialty.description}
                  </p>
                </div>
                <div>
                  <a
                    href="#contact"
                    className="cta-underline text-[10.5px] tracking-[0.2em]"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
