"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SKILLS = [
  { label: "Computer Hardware", level: 5 },
  { label: "Networking", level: 5 },
  { label: "CCTV Installation", level: 5 },
  { label: "Router Configuration", level: 5 },
  { label: "Troubleshooting", level: 5 },
  { label: "Windows Server", level: 5 },
];

export default function SkillBars() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLDivElement>("[data-skill-card]");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="grid sm:grid-cols-2 gap-5">
      {SKILLS.map((skill) => (
        <div
          key={skill.label}
          data-skill-card
          className="flex items-center justify-between border border-line rounded-lg px-6 py-5 bg-panel/30 hover:border-cyan/40 transition-colors"
        >
          <span className="text-ink text-sm font-medium">{skill.label}</span>
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full ${
                  i < skill.level ? "bg-cyan" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}