"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { isRedesign } = useTheme();

  return (
    <footer
      className="py-16 md:py-20 px-[5vw] transition-colors duration-300 border-t"
      style={{
        background: isRedesign ? "#1A352F" : "#F6F4EE",
        color: isRedesign ? "#E8E4DE" : "#2B2B2B",
        borderColor: isRedesign ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
      }}
    >
      <div className="section-max">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            {isRedesign ? (
              <div className="mb-4">
                <span
                  className="text-xl font-normal tracking-tight block"
                  style={{ fontFamily: "var(--font-heading)", color: "#FBF9F5" }}
                >
                  Dr. Maya Reynolds
                </span>
                <span
                  className="text-[10.5px] tracking-[0.18em] uppercase block mt-1"
                  style={{ color: "#BA6A4B" }}
                >
                  PsyD · Clinical Psychologist
                </span>
              </div>
            ) : (
              <div className="mb-4">
                <Image
                  src="/images/original/logo.png"
                  alt="Conejo Valley Family Counseling"
                  width={200}
                  height={50}
                  className="h-[42px] w-auto"
                />
              </div>
            )}
            <p className="text-[13px] leading-[1.7] opacity-80 mt-3 font-light">
              {isRedesign
                ? "In-person therapy in Santa Monica and secure telehealth sessions for adults across California. Evidence-based support for anxiety, trauma, and burnout."
                : "We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA — whatever works best for you."}
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h3
              className="text-[11px] tracking-[0.18em] uppercase font-semibold mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: isRedesign ? "#FBF9F5" : "var(--color-heading)",
                opacity: 0.85,
              }}
            >
              Navigate
            </h3>
            <ul className="space-y-2.5">
              {(isRedesign
                ? ["Home", "About", "Services", "Our Office", "FAQs", "Contact"]
                : ["Home", "About", "Our Team", "Specialties", "Methods", "FAQs", "Contact"]
              ).map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13px] opacity-75 hover:opacity-100 transition-opacity font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3
              className="text-[11px] tracking-[0.18em] uppercase font-semibold mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: isRedesign ? "#FBF9F5" : "var(--color-heading)",
                opacity: 0.85,
              }}
            >
              Contact
            </h3>
            <div className="space-y-2.5 text-[13px] opacity-80 font-light">
              {isRedesign ? (
                <>
                  <p className="font-medium opacity-95">Santa Monica Office</p>
                  <p>123th Street 45 W</p>
                  <p>Santa Monica, CA 90401</p>
                  <a
                    href="mailto:hello@drmayareynolds.com"
                    className="block hover:opacity-100 transition-opacity underline underline-offset-4"
                  >
                    hello@drmayareynolds.com
                  </a>
                  <p className="text-[11.5px] opacity-70 pt-1">
                    Licensed Clinical Psychologist (PSY 31245)
                  </p>
                </>
              ) : (
                <>
                  <p className="font-medium opacity-95">Newbury Park Office</p>
                  <p>925 Broadbeck Dr, Suites 200 &amp; 225</p>
                  <p>Newbury Park, CA 91320</p>
                  <a
                    href="mailto:info@conejovalleycounseling.com"
                    className="block hover:opacity-100 transition-opacity underline underline-offset-4"
                  >
                    info@conejovalleycounseling.com
                  </a>
                  <a
                    href="tel:8052423120"
                    className="block hover:opacity-100 transition-opacity"
                  >
                    805.242.3120
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Column 4: Serving Areas & Clinical Focus */}
          <div>
            <h3
              className="text-[11px] tracking-[0.18em] uppercase font-semibold mb-4"
              style={{
                fontFamily: "var(--font-body)",
                color: isRedesign ? "#FBF9F5" : "var(--color-heading)",
                opacity: 0.85,
              }}
            >
              {isRedesign ? "Serving California" : "Serving Communities"}
            </h3>
            <div className="space-y-2 text-[13px] opacity-80 font-light">
              {isRedesign ? (
                <>
                  <p>Santa Monica · Venice · Brentwood</p>
                  <p>West Los Angeles · Pacific Palisades</p>
                  <p>Mar Vista · Culver City</p>
                  <p className="pt-2 text-[12px] italic opacity-75">
                    Secure telehealth sessions available throughout all of California
                  </p>
                </>
              ) : (
                <>
                  <p>Newbury Park · Thousand Oaks</p>
                  <p>Westlake Village · Camarillo</p>
                  <p>Moorpark · Simi Valley</p>
                  <p className="pt-2 text-[12px] italic opacity-75">
                    In-person sessions in Newbury Park &amp; virtual therapy statewide
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] opacity-60 font-light"
          style={{
            borderColor: isRedesign
              ? "rgba(255,255,255,0.12)"
              : "rgba(0,0,0,0.08)",
          }}
        >
          <p>
            {isRedesign
              ? "© 2025 Dr. Maya Reynolds, PsyD. All rights reserved."
              : "© 2024 Conejo Valley Family Counseling. All rights reserved."}
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Terms &amp; Conditions
            </a>
            <span>·</span>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:opacity-100 transition-opacity">
              Good Faith Estimate
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
