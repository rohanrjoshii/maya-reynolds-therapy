"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

interface QuoteBannerProps {
  variant?: "first" | "second";
}

export default function QuoteBanner({ variant = "first" }: QuoteBannerProps) {
  const { isRedesign } = useTheme();

  return (
    <section className="relative min-h-[52vh] md:min-h-[64vh] py-24 md:py-36 lg:py-44 flex items-center overflow-hidden">
      {/* Background Image with Cinematic Overlay matching Screenshot 2 */}
      <div className="absolute inset-0">
        <Image
          src={
            variant === "first"
              ? isRedesign
                ? "/images/redesign-quote.jpg"
                : "/images/original/divider.png"
              : isRedesign
              ? "/images/redesign-quote-palms.jpg"
              : "/images/original/mother-child.jpg"
          }
          alt="Atmospheric scenic coastline"
          fill
          className="object-cover"
          sizes="100vw"
          priority={variant === "first"}
        />
        <div
          className="absolute inset-0 transition-colors duration-500"
          style={{
            background: isRedesign
              ? "linear-gradient(to right, rgba(26,53,47,0.65), rgba(26,53,47,0.45))"
              : "linear-gradient(to right, rgba(0,0,0,0.48), rgba(0,0,0,0.32))",
          }}
        />
      </div>

      {/* Quote Text Content - White serif with italic emphasis matching Screenshot 2 */}
      <div className="relative z-10 w-full max-w-[1720px] mx-auto px-[5vw]">
        <blockquote
          className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[62px] leading-[1.22] font-normal max-w-4xl text-white drop-shadow-sm"
          style={{
            fontFamily: "var(--font-heading)",
          }}
        >
          {variant === "first" ? (
            isRedesign ? (
              <>
                Therapy works best when you feel respected, understood, and actively involved.{" "}
                <em className="font-normal italic">Practical tools combined with depth-oriented work for lasting change.</em>
              </>
            ) : (
              <>
                You deserve a place where your story is heard, valued, and understood.{" "}
                <em className="font-normal italic">Nothing will be too heavy for us to carry together.</em>
              </>
            )
          ) : isRedesign ? (
            <>
              Grounded, compassionate care for adults in Santa Monica.{" "}
              <em className="font-normal italic">Helping you feel steady, connected, and present in your everyday life.</em>
            </>
          ) : (
            <>
              Honoring where you&apos;ve been{" "}
              <em className="font-normal italic">&amp; helping shape where you&apos;re headed.</em>
            </>
          )}
        </blockquote>
      </div>
    </section>
  );
}
