"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const originalFaqs = [
  {
    q: "What should I expect during my first session?",
    a: "Your first session is an opportunity for us to get to know you and understand your goals for therapy. We will discuss your history, what brings you to counseling, and begin to develop a treatment plan together. There is no pressure because this is a safe space to share at your own pace.",
  },
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes! We offer both in-person sessions at our Newbury Park office and online therapy for clients throughout California. Whatever works best for you and your schedule.",
  },
  {
    q: "How do I know which therapist is right for me?",
    a: "Finding the right therapist is important. We encourage you to reach out and schedule a brief consultation so you can get a feel for our approach. Each team member has different specialties and styles, and we are happy to help match you with the right fit.",
  },
  {
    q: "How long does therapy typically last?",
    a: "The length of therapy varies depending on your individual needs and goals. Some clients find relief in a few sessions, while others benefit from longer-term support. We will work together to determine the best approach for you.",
  },
  {
    q: "Do you accept insurance?",
    a: "We can provide superbills for out-of-network reimbursement. We recommend contacting your insurance provider to understand your out-of-network benefits. Please reach out to us for more details about fees and payment options.",
  },
];

const redesignFaqs = [
  {
    q: "What does a typical session look like with you?",
    a: "Sessions are structured enough to feel supportive while still leaving space for reflection and depth. I integrate evidence-based methods including CBT, EMDR, mindfulness-based practices, and body-oriented techniques, tailored to what you need. My goal is helping you understand both the emotional and physiological sides of what you experience.",
  },
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes. I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. My office is a quiet, private space with natural light designed to feel calm and grounding. Many clients choose a combination of both formats.",
  },
  {
    q: "What is EMDR and how does it help with trauma?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is a powerful evidence-based therapy that helps process and heal trauma by reworking how distressing memories are stored in the brain. It reduces the emotional charge of traumatic memories and fosters resilience. The approach is paced carefully, with emphasis on safety and stabilization.",
  },
  {
    q: "How do I know if therapy with you is a good fit?",
    a: "If you are looking for a therapist who combines practical tools with depth-oriented work, and understands the realities of living and working in a fast-paced environment, I may be a good fit. I encourage you to reach out for an initial consultation so we can discuss your goals and see if the approach resonates with you.",
  },
  {
    q: "Who do you typically work with?",
    a: "I work primarily with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of my clients are high-achieving, thoughtful, and self-aware individuals, such as entrepreneurs, creatives, and professionals, who appear functional on the outside but internally feel exhausted, stuck in overthinking, or emotionally on edge.",
  },
];

export default function FaqSection() {
  const { isRedesign } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = isRedesign ? redesignFaqs : originalFaqs;

  return (
    <section id="faqs" className="section-padding transition-colors duration-300" style={{ background: "var(--color-bg)" }}>
      <div className="section-max max-w-3xl">
        <h2
          className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] font-normal mb-10 md:mb-14 text-center"
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
        >
          {isRedesign ? (
            <>
              Common <span className="font-script">questions</span>
            </>
          ) : (
            <>
              Frequently asked <span className="font-script">questions</span>
            </>
          )}
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b"
              style={{ borderColor: "rgba(0,0,0,0.08)" }}
            >
              <button
                className="w-full flex items-center justify-between py-5 md:py-6 text-left gap-4 cursor-pointer group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-[14.5px] md:text-[15.5px] font-medium leading-[1.4] transition-opacity group-hover:opacity-75"
                  style={{ color: "var(--color-heading)", fontFamily: "var(--font-body)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="shrink-0 text-xl font-light transition-transform duration-300"
                  style={{
                    color: "var(--color-muted)",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </span>
              </button>
              <div
                className={`faq-content ${openIndex === i ? "open" : ""}`}
                style={{ paddingBottom: openIndex === i ? "20px" : "0" }}
              >
                <p
                  className="text-[13.5px] leading-[1.8] pr-8 font-light"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
