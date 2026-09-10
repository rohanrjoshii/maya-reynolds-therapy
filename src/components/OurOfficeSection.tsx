"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function OurOfficeSection() {
  const { isRedesign } = useTheme();

  if (!isRedesign) return null;

  const officePillars = [
    {
      title: "Quiet & Confidential",
      description:
        "A private, peaceful environment designed to ensure emotional safety and complete comfort during every conversation.",
      tag: "Private Suite",
    },
    {
      title: "Abundant Natural Light",
      description:
        "Sunlit, uncluttered therapy room with natural wood finishes, curated flora, and comfortable mid-century seating.",
      tag: "Calm Atmosphere",
    },
    {
      title: "Santa Monica Westside",
      description:
        "Conveniently located on 45th Street near Ocean Avenue with reserved, stress-free off-street parking for clients.",
      tag: "123th Street 45 W",
    },
    {
      title: "In-Person & Telehealth",
      description:
        "Flexible care combining grounded in-office sessions with secure, HIPAA-compliant telehealth throughout all of California.",
      tag: "Statewide Care",
    },
  ];

  return (
    <section id="office" className="section-padding transition-colors duration-300" style={{ background: "var(--color-section-alt)" }}>
      <div className="section-max">
        {/* Top Header & Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 md:mb-18">
          <div className="lg:col-span-5">
            <p
              className="text-[10px] md:text-[10.5px] tracking-[0.24em] uppercase font-medium mb-4"
              style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
            >
              The Practice Environment
            </p>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.15] font-normal mb-6"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
            >
              A quiet, grounded space for healing.
            </h2>
            <p
              className="text-[14px] md:text-[14.5px] leading-[1.8] font-light opacity-85"
              style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
            >
              My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the physical atmosphere itself helps them feel more at ease the moment they arrive.
            </p>
          </div>

          {/* Right Column: 2x2 Clean Editorial Features (Matching Specialties style) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 pt-2 lg:pt-8">
            {officePillars.map((pillar) => (
              <div key={pillar.title} className="flex flex-col justify-between">
                <div>
                  <h3
                    className="text-[19px] md:text-[22px] leading-[1.2] font-normal mb-2"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-[13px] md:text-[13.5px] leading-[1.75] font-light mb-4 opacity-80"
                    style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
                  >
                    {pillar.description}
                  </p>
                </div>
                <div>
                  <span className="text-[10.5px] tracking-[0.2em] uppercase font-medium opacity-60">
                    {pillar.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery: 2 Authentic Office Photos with Film Grain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="grainy-image relative aspect-[4/3] shadow-sm">
            <Image
              src="/images/office1.jpeg"
              alt="Dr. Maya Reynolds therapy office comfortable counseling space in Santa Monica"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="grainy-image relative aspect-[4/3] shadow-sm">
            <Image
              src="/images/office2.jpeg"
              alt="Therapy office with natural light, a safe private space for healing"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
