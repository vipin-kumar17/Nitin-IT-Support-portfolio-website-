"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StatCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const counter = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (el) el.textContent = Math.floor(counter.val).toString();
        },
      });
    });
    return () => ctx.revert();
  }, [value]);

  return (
    <div className="flex flex-col gap-1">
      <p className="font-display text-4xl md:text-5xl text-ink">
        <span ref={numRef}>0</span>
        {suffix}
      </p>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}
