import type { Metadata } from "next";
import { Cormorant_Garamond, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
  description:
    "Licensed Clinical Psychologist in Santa Monica offering therapy for anxiety, trauma, burnout, and EMDR. In-person & telehealth across California. Dr. Maya Reynolds, PsyD.",
  openGraph: {
    title: "Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Licensed Clinical Psychologist offering therapy for anxiety, trauma, burnout, and EMDR in Santa Monica. In-person & telehealth across California.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
