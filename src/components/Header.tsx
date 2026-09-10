"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { isRedesign } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const originalNav = [
    {
      label: "About",
      children: [
        "Our Approach",
        "Jennifer Anderson, LMFT",
        "Candace Bletscher, AMFT",
        "Heather Williams-Baumgart, AMFT",
      ],
    },
    {
      label: "Our Team",
      children: [
        "Meet the Therapists",
        "Jennifer Anderson",
        "Clinical Team",
      ],
    },
    {
      label: "Specialties",
      children: [
        "Dissociation",
        "Trauma & PTSD",
        "Special Needs Parenting",
        "Couples Counseling",
        "Children & Teens",
        "Anxiety & Depression",
      ],
    },
    {
      label: "Methods",
      children: ["EMDR", "Brainspotting", "Somatic Therapy", "Parts Work Therapy"],
    },
    { label: "FAQs", href: "#faqs" },
  ];

  const redesignNav = [
    { label: "About", href: "#about" },
    {
      label: "Services",
      children: ["Anxiety & Panic", "Trauma & EMDR", "Burnout & Perfectionism"],
    },
    { label: "Our Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ];

  const nav = isRedesign ? redesignNav : originalNav;

  return (
    <>
      {/* Main Navigation Header - Full Width with corner alignment matching original */}
      <header
        className="sticky top-0 z-40 w-full transition-colors duration-300"
        style={{
          background: "var(--color-bg)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div className="w-full px-[5vw] flex items-center justify-between h-[96px] md:h-[112px]">
          {/* Upper Left Corner: Brand Logo / Name */}
          <a href="#" className="shrink-0 transition-opacity hover:opacity-90 flex flex-col justify-center">
            {isRedesign ? (
              <div className="flex flex-col">
                <span
                  className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] font-normal tracking-[-0.015em] leading-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--color-heading)",
                  }}
                >
                  Dr. Maya Reynolds
                </span>
                <span
                  className="text-[10px] sm:text-[11px] md:text-[11.5px] tracking-[0.26em] uppercase font-medium mt-1.5"
                  style={{ color: "var(--color-accent)" }}
                >
                  PsyD · Clinical Psychologist
                </span>
              </div>
            ) : (
              <Image
                src="/images/original/logo.png"
                alt="Conejo Valley Family Counseling"
                width={280}
                height={75}
                className="h-[52px] sm:h-[64px] md:h-[72px] w-auto object-contain"
                priority
              />
            )}
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative group py-2"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href || "#"}
                  className="text-[11.5px] md:text-[12px] tracking-[0.2em] uppercase font-medium transition-opacity duration-200 hover:opacity-60"
                  style={{
                    color: "var(--color-heading)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {item.label}
                </a>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[240px] z-50">
                    <div
                      className="py-3 px-1 shadow-xl rounded-sm"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    >
                      {item.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-4 py-2 text-[13px] tracking-normal transition-colors hover:bg-black/5"
                          style={{
                            color: "var(--color-text)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Oval / Pill Button matching Screenshot 1 */}
            {isRedesign ? (
              <a
                href="#contact"
                className="btn-pill bg-[#1A352F] text-[#FBF9F5] border-[#1A352F] hover:bg-[#BA6A4B] hover:border-[#BA6A4B] hover:text-white px-8 py-2.5 text-[11px] tracking-[0.2em]"
              >
                Book an Appointment
              </a>
            ) : (
              <a
                href="#contact"
                className="btn-pill bg-transparent text-[#2B2B2B] border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-[#F6F4EE] px-8 py-2.5 text-[11px] tracking-[0.2em]"
              >
                Contact
              </a>
            )}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="lg:hidden p-2 text-[#2B2B2B] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-[1.5px] w-full transition-all duration-300"
                style={{
                  background: "var(--color-heading)",
                  transform: mobileMenuOpen
                    ? "translateY(4.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                className="block h-[1.5px] w-full transition-all duration-300"
                style={{
                  background: "var(--color-heading)",
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-[1.5px] w-full transition-all duration-300"
                style={{
                  background: "var(--color-heading)",
                  transform: mobileMenuOpen
                    ? "translateY(-4.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden w-full border-t shadow-lg px-6 py-6 flex flex-col gap-4"
            style={{
              background: "var(--color-bg)",
              borderColor: "rgba(0,0,0,0.06)",
            }}
          >
            {nav.map((item) => (
              <div key={item.label} className="border-b border-black/5 pb-2">
                <a
                  href={item.href || "#"}
                  className="text-[12px] tracking-[0.16em] uppercase font-medium block py-1.5"
                  style={{ color: "var(--color-heading)" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-3 pt-1 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <a
                        key={child}
                        href="#"
                        className="text-xs py-1 opacity-70"
                        style={{ color: "var(--color-text)" }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                className="btn-pill w-full text-center"
                style={{
                  background: isRedesign ? "#1A352F" : "transparent",
                  color: isRedesign ? "#FBF9F5" : "#2B2B2B",
                  borderColor: isRedesign ? "#1A352F" : "#2B2B2B",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {isRedesign ? "Book an Appointment" : "Contact"}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
