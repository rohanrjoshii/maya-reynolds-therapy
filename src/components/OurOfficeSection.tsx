"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function OurOfficeSection() {
  const { isRedesign } = useTheme();

  // Show only in redesign mode
  if (!isRedesign) return null;

  const features = [
    {
      icon: "🌿",
      label: "Quiet & Confidential",
      detail: "A private, peaceful environment designed for your comfort and safety",
    },
    {
      icon: "☀️",
      label: "Natural Light",
      detail: "Bright, calming atmosphere with floor-to-ceiling natural light",
    },
    {
      icon: "📍",
      label: "Santa Monica Westside",
      detail: "123th Street 45 W, Santa Monica, CA 90401 with convenient parking",
    },
    {
      icon: "💻",
      label: "Telehealth Available",
      detail: "Secure video sessions for clients anywhere across California",
    },
  ];

  return (
    <section id="office" className="section-padding transition-colors duration-300" style={{ background: "var(--color-section-alt)" }}>
      <div className="section-max">
        {/* Eyebrow */}
        <p
          className="text-[10px] md:text-[10.5px] tracking-[0.24em] uppercase font-medium mb-4 text-center"
          style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
        >
          Our Santa Monica Office
        </p>

        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-6 md:mb-8 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          A quiet, grounded space for <span className="font-script">healing</span>
        </h2>

        <p
          className="text-[14.5px] leading-[1.8] max-w-2xl mx-auto text-center mb-12 md:mb-16 font-light"
          style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
        >
          My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
        </p>

        {/* Photo Gallery with Dr. Maya Reynolds Office Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mb-12 md:mb-16">
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

        {/* Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="text-center p-4 rounded-sm transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.4)" }}
            >
              <div className="text-2xl mb-2">{feature.icon}</div>
              <h3
                className="text-[13px] font-semibold mb-1"
                style={{ color: "var(--color-heading)", fontFamily: "var(--font-body)" }}
              >
                {feature.label}
              </h3>
              <p
                className="text-[12px] leading-[1.6] font-light"
                style={{ color: "var(--color-muted)", fontFamily: "var(--font-body)" }}
              >
                {feature.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
