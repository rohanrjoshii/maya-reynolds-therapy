"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const originalCards = [
  {
    title: "Adults",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    image: "/images/original/adults.jpg",
    alt: "Two people sitting on a log at the beach, facing a lake with mountains in the background",
  },
  {
    title: "Couples",
    description:
      "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    image: "/images/original/couples.jpg",
    alt: "A couple embracing on the beach with ocean in background",
  },
  {
    title: "Children & Teens",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    image: "/images/original/children.jpg",
    alt: "Children playing together at the beach",
  },
];

const redesignCards = [
  {
    title: "High-Achieving Professionals",
    description:
      "You push through stress, perfectionism, and high internal pressure — but inside, you feel disconnected and exhausted. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    image: "/images/redesign-hero.jpg",
    alt: "Confident professional finding balance and clarity",
  },
  {
    title: "Adults Navigating Trauma",
    description:
      "Whether you've experienced a single-incident trauma or more complex, long-standing patterns from childhood or relationships, my approach is paced carefully — with emphasis on safety, stabilization, and helping you feel more regulated.",
    image: "/images/redesign-beach.jpg",
    alt: "Peaceful Santa Monica beach representing healing journey",
  },
  {
    title: "Anxiety & Nervous System Overwhelm",
    description:
      "Constant worry, tension in your body, difficulty sleeping, or always bracing for something to go wrong — these experiences are real and treatable. We'll address both the emotional and physiological sides of anxiety together.",
    image: "/images/redesign-therapy-space.jpg",
    alt: "Calm grounding therapy space for anxiety treatment",
  },
];

export default function WhoWeHelpSection() {
  const { isRedesign } = useTheme();
  const cards = isRedesign ? redesignCards : originalCards;

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-section-alt)" }}>
      <div className="section-max">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-12 md:mb-16 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            <>
              Who I work <span className="font-script">with</span>
            </>
          ) : (
            <>
              Who we <span className="font-script">help</span>
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {cards.map((card) => (
            <div key={card.title} className="group">
              <div className="aspect-[4/5] relative overflow-hidden mb-5 md:mb-6 shadow-sm">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3
                className="text-[22px] md:text-[25px] leading-[1.2] font-normal mb-3"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[13.5px] leading-[1.75]"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
