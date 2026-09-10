"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HowWeWorkSection() {
  const { isRedesign } = useTheme();

  return (
    <section className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max">
        {/* Eyebrow */}
        <p
          className="text-[10px] md:text-[10.5px] tracking-[0.24em] uppercase font-medium mb-4"
          style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
        >
          {isRedesign ? "My Approach" : "How We Work"}
        </p>

        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-10 md:mb-14"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            <>
              Warm, collaborative, and <span className="font-script">grounded</span>.
            </>
          ) : (
            <>
              We&apos;re here to make a <span className="font-script">difference</span>.
            </>
          )}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="grainy-image relative aspect-[4/5] order-2 lg:order-1 shadow-sm">
            <Image
              src={isRedesign ? "/images/maya-reynolds.png" : "/images/original/family-beach.jpg"}
              alt={isRedesign ? "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist" : "Family of four on a beach at sunset"}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-5" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
            {isRedesign ? (
              <>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they experience.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  Trauma work is an important part of my practice. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives, well beyond our session time.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  Many of my clients are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  If you are ready to do the work, I am ready to help. Sometimes I may gently challenge you to look at things differently, and other times we may explore deeper emotions, all while encouraging you to practice what you learn in your everyday life.
                </p>
              </>
            ) : (
              <>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  The clients we work with are balancing so many things at once, it&apos;s often hard for them to put themselves first. Here, your needs are always top priority.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. You will never find anything one-size-fits-all here.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  If you&apos;re ready to do the work, we&apos;re ready to help. Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life.
                </p>
                <p className="text-[14.5px] leading-[1.8] font-light">
                  We take what we do seriously because we know how important it is for our clients. The transformation we see is what drives us every day.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
