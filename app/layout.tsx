import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Trauma-Informed Therapy in Austin",
  description:
    "Compassionate trauma-informed therapy in Austin, Texas. Specializing in anxiety, attachment, and relationship healing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} bg-[#f4f7f8] text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
