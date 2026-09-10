"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function AppointmentCta() {
  const { isRedesign } = useTheme();

  return (
    <section id="contact" className="section-padding transition-colors duration-300" style={{ background: "var(--color-section-alt)" }}>
      <div className="section-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <p
              className="text-[10px] md:text-[10.5px] tracking-[0.24em] uppercase font-medium mb-4"
              style={{ color: "var(--color-eyebrow)", fontFamily: "var(--font-body)" }}
            >
              Schedule an Appointment
            </p>
            <h2
              className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.16] font-normal mb-6 md:mb-8"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-heading)" }}
            >
              {isRedesign ? (
                "Find a therapist who understands your world."
              ) : (
                <>
                  Find a therapist who is the right fit for{" "}
                  <span className="font-script">you</span>.
                </>
              )}
            </h2>
            <div className="space-y-4 mb-8" style={{ color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              {isRedesign ? (
                <>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    Coming to therapy is a courageous decision. If you are looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.
                  </p>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    I offer both in-person therapy from my Santa Monica office and secure telehealth sessions for clients located anywhere in California. Click below to schedule a consultation.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way.
                  </p>
                  <p className="text-[14.5px] leading-[1.8] font-light">
                    Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
                  </p>
                </>
              )}
            </div>
            
            {/* Pill CTA Button */}
            {isRedesign ? (
              <a
                href="mailto:hello@drmayareynolds.com"
                className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B] px-9 py-3.5 text-[11.5px]"
              >
                Book a Consultation
              </a>
            ) : (
              <a
                href="#contact"
                className="btn-pill bg-transparent text-[#2B2B2B] border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#F6F4EE] px-9 py-3.5 text-[11.5px]"
              >
                Book an Appointment
              </a>
            )}
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="grainy-image relative aspect-[3/4] shadow-sm">
              <Image
                src={isRedesign ? "/images/redesign-therapy-space.jpg" : "/images/original/shells1.jpg"}
                alt={isRedesign ? "Calm, welcoming therapy seating in Santa Monica" : "Person picking up seashells on a sandy beach"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="grainy-image relative aspect-[3/4] mt-8 md:mt-12 shadow-sm">
              <Image
                src={isRedesign ? "/images/redesign-beach.jpg" : "/images/original/shells2.jpg"}
                alt={isRedesign ? "Serene Santa Monica coastline at sunset" : "Parent and child exploring shells on the beach"}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
