import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import NetworkField from "@/components/NetworkField";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nitin Kumar | IT Infrastructure Services",
  description:
    "CCTV installation, network infrastructure, and IT support by Nitin Kumar — certified hardware & network engineer. Secure your space, connect your world.",
  keywords: [
    "CCTV installation",
    "network engineer",
    "IT AMC",
    "structured cabling",
    "security cameras",
    "Gorakhpur",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-bg text-ink antialiased selection:bg-cyan selection:text-bg">
        <div className="noise" />
        <NetworkField />
        <WhatsAppFloat />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
