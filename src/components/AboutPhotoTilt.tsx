"use client";

import { useRef } from "react";
import Image from "next/image";

export default function AboutPhotoTilt() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale3d(1.02,1.02,1.02)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      className="relative [transform-style:preserve-3d]"
      style={{ animation: "float-y 5s ease-in-out infinite" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative aspect-[3/4] bg-panel border border-line overflow-hidden rounded-lg transition-transform duration-300 ease-out"
      >
        <Image
          src="/nitin-portrait.jpg"
          alt="Nitin Kumar — Computer Hardware & Network Engineer"
          fill
          className="object-cover pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 px-5 py-4 pointer-events-none">
          <p className="font-display text-lg text-ink">Nitin Kumar</p>
          <p className="font-mono text-[10px] text-cyan tracking-wider mt-1">
            COMPUTER HARDWARE &amp; NETWORK ENGINEER
          </p>
        </div>
      </div>

      <style>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
      `}</style>
    </div>
  );
}