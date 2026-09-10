"use client";

import { useTheme } from "@/context/ThemeContext";

export default function ExpertiseSection() {
  const { isRedesign } = useTheme();

  const originalTags = [
    "Dissociation", "Trauma", "Family conflict", "Special needs parenting",
    "Depression", "Marriage", "Anxiety", "Relationships",
    "Children", "Teens", "Intimacy & connection", "…and more."
  ];

  const redesignTags = [
    "Anxiety & Panic Disorders", "Complex Trauma", "EMDR Therapy",
    "Professional Burnout", "Perfectionism", "Somatic Regulation",
    "Cognitive Behavioral Therapy", "Mindfulness-Based Practices",
    "Sleep Disruption", "Overthinking & Hypervigilance",
    "Chronic Stress", "Body-Oriented Techniques", "…and more."
  ];

  const tags = isRedesign ? redesignTags : originalTags;

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-10 md:mb-14 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            "Areas of focus"
          ) : (
            <>
              Our areas of <span className="font-script">expertise</span>
            </>
          )}
        </h2>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 max-w-3xl mx-auto">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center">
              <a
                href="#"
                className="expertise-tag hover:underline underline-offset-4 text-[13.5px]"
                style={{
                  color: tag === "…and more." ? "var(--color-muted)" : "var(--color-text)",
                  fontStyle: tag === "…and more." ? "italic" : "normal",
                }}
              >
                {tag}
              </a>
              {i < tags.length - 1 && (
                <span
                  className="mx-2 text-[10px]"
                  style={{ color: "var(--color-muted)" }}
                >
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
