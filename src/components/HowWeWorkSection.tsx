"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function HowWeWorkSection() {
  const { isRedesign } = useTheme();

  return (
    <section id="about" className="py-20 md:py-32 px-[5vw] transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[11px] sm:text-[12px] tracking-[0.24em] uppercase font-semibold italic mb-4"
          style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
        >
          {isRedesign ? "About Dr. Maya Reynolds, PsyD" : "How We Work"}
        </p>

        <h2
          className="text-[36px] sm:text-[46px] md:text-[54px] lg:text-[62px] leading-[1.12] font-normal mb-12 md:mb-16 tracking-[-0.015em]"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            "A warm, collaborative, and grounded approach."
          ) : (
            "We're here to make a difference."
          )}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Dr. Maya's Portrait (Single intentional occurrence on the site) */}
          <div className="lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-32">
            <div className="grainy-image relative aspect-[3/4] w-full shadow-md">
              <Image
                src={isRedesign ? "/images/maya-reynolds.png" : "/images/original/family-beach.jpg"}
                alt={isRedesign ? "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist in Santa Monica" : "Family of four on a beach at sunset"}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
            {isRedesign ? (
              <>
                <p className="text-[18px] sm:text-[19.5px] leading-[1.7] font-normal opacity-95">
                  I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives, not just during sessions.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California. My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  If you’re looking for a therapist who combines practical tools with depth-oriented work and who understands the realities of living and working in a fast-paced environment, I may be a good fit.
                </p>
              </>
            ) : (
              <>
                <p className="text-[18px] sm:text-[19.5px] leading-[1.7] font-normal opacity-95">
                  The clients we work with are balancing so many things at once, it&apos;s often hard for them to put themselves first. Here, your needs are always top priority.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. You will never find anything one-size-fits-all here.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
                  If you&apos;re ready to do the work, we&apos;re ready to help. Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you&apos;ve learned in your daily life.
                </p>
                <p className="text-[15.5px] sm:text-[16.5px] leading-[1.85] font-light">
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
