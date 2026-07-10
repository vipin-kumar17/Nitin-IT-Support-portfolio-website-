"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do you provide home CCTV installation?",
    a: "Yes. Nitin installs HD and 4K CCTV systems for industries and offices of any size, including remote mobile viewing setup.",
  },
  {
    q: "Do you provide office networking?",
    a: "Yes. LAN setup, Wi-Fi installation, router/switch configuration, and structured cabling for offices and shops.",
  },
  {
    q: "Is AMC service available?",
    a: "Yes. Annual Maintenance Contracts are available for both CCTV systems and general IT/network support.",
  },
  {
    q: "Do you repair computers and laptops too?",
    a: "Yes. Desktop assembly, laptop repair, Windows installation, and printer setup are all part of the computer hardware services.",
  },
  {
    q: "Do you offer on-site visits?",
    a: "Yes, on-site service is available across Gorakhpur and nearby areas — most visits can be scheduled within 24 hours.",
  },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg md:text-xl text-ink">
                {item.q}
              </span>
              <span
                className={`flex-shrink-0 h-8 w-8 rounded-full border border-line flex items-center justify-center text-cyan transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="overflow-hidden">
                <p className="text-muted leading-relaxed max-w-2xl">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
