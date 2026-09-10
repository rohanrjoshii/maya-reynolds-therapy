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
      "You push through stress, perfectionism, and high internal expectations, yet inside you feel disconnected and exhausted. Therapy becomes a space to slow down, reconnect, and cultivate sustainable ways of living and working.",
    image: "/images/redesign-adults.jpg",
    alt: "Confident professional finding balance and clarity",
  },
  {
    title: "Adults Navigating Trauma",
    description:
      "Whether you have experienced a single-incident trauma or complex, long-standing patterns from early life or relationships, our work moves at a grounded pace with a focus on safety, stabilization, and everyday regulation.",
    image: "/images/redesign-trauma.jpg",
    alt: "Peaceful sunlit reading nook and journal representing trauma recovery",
  },
  {
    title: "Anxiety & Nervous System Overwhelm",
    description:
      "Constant worry, physical tension, restless sleep, or feeling like you are always bracing for something to go wrong. These experiences are understandable and treatable as we address both emotional and physiological patterns together.",
    image: "/images/redesign-anxiety.jpg",
    alt: "Mindful person taking a deep breath bathed in warm morning sunlight",
  },
];

export default function WhoWeHelpSection() {
  const { isRedesign } = useTheme();
  const cards = isRedesign ? redesignCards : originalCards;

  return (
    <section className="py-20 md:py-32 px-[5vw] transition-colors duration-300" style={{ background: "var(--color-section-alt)" }}>
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Section Headline matching Squarespace */}
        <h2
          className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.12] font-normal mb-14 md:mb-20 text-center tracking-[-0.015em]"
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

        {/* 3-Card Grid with Tall Aspect Ratio matching Squarespace 1104x1632 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 xl:gap-14">
          {cards.map((card) => (
            <div key={card.title} className="group">
              <div className="grainy-image relative aspect-[2/3] mb-6 md:mb-8 shadow-md">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3
                className="text-[25px] sm:text-[28px] md:text-[31px] leading-[1.2] font-normal mb-3.5"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[15px] sm:text-[16px] leading-[1.8] font-light"
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
