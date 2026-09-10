"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HowWeWorkSection() {
  const { isRedesign } = useTheme();

  return (
    <section id="about" className="py-20 md:py-28 px-[5vw] transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Header Block: Eyebrow + Headline */}
        <div className="max-w-4xl mb-12 md:mb-16">
          <p
            className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-semibold italic mb-3"
            style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
          >
            {isRedesign ? "About Dr. Maya Reynolds, PsyD" : "How We Work"}
          </p>

          <h2
            className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[1.12] font-normal tracking-[-0.015em]"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
          >
            {isRedesign ? (
              "A warm, collaborative, and grounded approach."
            ) : (
              "We're here to make a difference."
            )}
          </h2>
        </div>

        {/* Content Layout: Photo on Left + Editorial 2-Column Content on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* Therapist Photo */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="grainy-image relative aspect-[3/4] w-full shadow-md">
              <Image
                src={isRedesign ? "/images/maya-reynolds.png" : "/images/original/family-beach.jpg"}
                alt={isRedesign ? "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica" : "Family of four on a beach at sunset"}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
            </div>
            {isRedesign && (
              <div className="pt-3 text-[11.5px] tracking-[0.08em] font-light opacity-75" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
              </div>
            )}
          </div>

          {/* Editorial Formatted Content */}
          <div className="lg:col-span-8 space-y-8" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
            {isRedesign ? (
              <>
                {/* Prominent Lead Statement */}
                <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] font-normal opacity-95">
                  I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—yet internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>

                {/* Two Editorial Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-black/5">
                  <div className="space-y-4">
                    <h3 className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-85" style={{ color: "var(--color-eyebrow)" }}>
                      Anxiety, Panic &amp; Burnout
                    </h3>
                    <p className="text-[15px] leading-[1.8] font-light">
                      Clients frequently come to me feeling &ldquo;functional&rdquo; on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense of always bracing for something to go wrong. I support professionals, creatives, and entrepreneurs who feel disconnected after years of pushing through high internal expectations.
                    </p>
                    <p className="text-[15px] leading-[1.8] font-light">
                      Sessions are structured enough to feel supportive while leaving space for reflection. I integrate CBT, EMDR, mindfulness, and somatic body-oriented techniques to address both emotional and physiological patterns.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[13px] tracking-[0.2em] uppercase font-semibold opacity-85" style={{ color: "var(--color-eyebrow)" }}>
                      Trauma, Healing &amp; Care
                    </h3>
                    <p className="text-[15px] leading-[1.8] font-light">
                      Trauma work is an essential part of my practice, whether navigating single-incident trauma or complex, long-standing relational patterns. Our work moves at a carefully paced rhythm, with an emphasis on safety, stabilization, and everyday nervous system regulation.
                    </p>
                    <p className="text-[15px] leading-[1.8] font-light">
                      I offer both in-person sessions in my quiet, sunlit Santa Monica office and secure telehealth for clients across California. Therapy works best when you feel respected, understood, and actively involved in developing insight and lasting resilience.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] font-normal opacity-95">
                  The clients we work with are balancing so many things at once, it&apos;s often hard for them to put themselves first. Here, your needs are always top priority.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-2 border-t border-black/5">
                  <p className="text-[15px] leading-[1.8] font-light">
                    Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. You will never find anything one-size-fits-all here.
                  </p>
                  <p className="text-[15px] leading-[1.8] font-light">
                    If you&apos;re ready to do the work, we&apos;re ready to help. Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
