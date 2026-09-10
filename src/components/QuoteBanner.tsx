"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface QuoteBannerProps {
  variant?: "first" | "second";
}

export default function QuoteBanner({ variant = "first" }: QuoteBannerProps) {
  const { isRedesign } = useTheme();

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={
            variant === "first"
              ? isRedesign
                ? "/images/redesign-beach.jpg"
                : "/images/original/divider.png"
              : isRedesign
              ? "/images/redesign-therapy-space.jpg"
              : "/images/original/mother-child.jpg"
          }
          alt="Atmospheric scenic texture"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 transition-colors duration-300"
          style={{
            background: isRedesign
              ? "linear-gradient(to right, rgba(26,53,47,0.85), rgba(26,53,47,0.72))"
              : "linear-gradient(to right, rgba(246,244,238,0.92), rgba(246,244,238,0.82))",
          }}
        />
      </div>

      {/* Quote Text Content */}
      <div className="relative z-10 section-max px-[5vw]">
        <blockquote
          className="text-[26px] md:text-[34px] lg:text-[42px] leading-[1.25] font-normal max-w-3xl"
          style={{
            fontFamily: "var(--font-heading)",
            color: isRedesign ? "#FBF9F5" : "var(--color-heading)",
          }}
        >
          {variant === "first" ? (
            isRedesign ? (
              "Therapy works best when you feel respected, understood, and actively involved in the process."
            ) : (
              <>
                You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to{" "}
                <span className="font-script text-[#86B3B3]">carry</span>{" "}
                together.
              </>
            )
          ) : (
            isRedesign ? (
              "Practical tools combined with depth-oriented work for people living and working in a fast-paced world."
            ) : (
              <>
                Honoring where you&apos;ve been{" "}
                <span className="font-script text-[#86B3B3]">&amp;</span>{" "}
                helping shape where you&apos;re headed.
              </>
            )
          )}
        </blockquote>
      </div>
    </section>
  );
}
