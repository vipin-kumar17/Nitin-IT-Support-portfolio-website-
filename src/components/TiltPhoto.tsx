"use client";

import { useRef } from "react";
import Image from "next/image";

export default function TiltPhoto({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
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
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={{ animation: "float-y 5s ease-in-out infinite" }}
    >
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="relative aspect-square rounded-lg overflow-hidden border border-cyan/25 shadow-2xl shadow-cyan/10 transition-transform duration-300 ease-out"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 220px, 420px"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-cyan/10 pointer-events-none" />
        <div className="absolute inset-0 border border-cyan/10 pointer-events-none" />
        <span className="absolute top-3 left-3 h-5 w-5 border-t-2 border-l-2 border-cyan/70" />
        <span className="absolute top-3 right-3 h-5 w-5 border-t-2 border-r-2 border-cyan/70" />
        <span className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-cyan/70" />
        <span className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-cyan/70" />
        <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-bg/60 backdrop-blur px-2 py-1 rounded-full">
          <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" />
          <span className="font-mono text-[9px] text-signal tracking-wider">LIVE</span>
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