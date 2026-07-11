"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const TESTIMONIALS = [
  { quote: "Handled Our Hyundai Showroom's Complete IT Infrastructure Installation and Network Setup Efficiently and On Time.", name: "Mr.Rohit Chhapariya.", role: "Showroom Owner",},
  { quote: "Successfully Executed Our Multiplex's Complete IT Infrastructure Setup with Professional Installation, Integration and Ongoing Support.", name: "Mr.Er.Javed Ahmad.", role: "Engineer" },
  { quote: "Handled Our Complete IT Network Infrastructure Setup Efficiently and Delivered Everything Within the Committed Timeline.", name: "Mr.Ar.Shashikant.", role: "Architect" },
  { quote: "From Initial Planning to Final Deployment, the Entire IT Setup Was Executed Efficiently and with Great Attention to Detail.", name: "Mr.Ar.Gautam Agrawal", role: "Architect" },
  { quote: "From IT Infrastructure to Audio Mini Theater Integration, Every Aspect of the Project Was Handled Smoothly and Professionally.", name: "Mr.Ar.Himanshu Arya", role: "Architect" },
  { quote: "Very Satisfied with the IP Camera Setup. Everything Was Installed Neatly, Configured Properly and Delivered as Promised.", name: "Mr.Vivek Mishra", role: "Asistant Manager(Book My Show)" },
];



export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    function updatePerView() {
      if (window.innerWidth < 768) setPerView(1);
      else if (window.innerWidth < 1024) setPerView(2);
      else setPerView(3);
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  useEffect(() => {
    if (!paused) return;
    if (typeof window === "undefined" || !("ontouchstart" in window)) return;
    const resumeTimer = setTimeout(() => setPaused(false), 6000);
    return () => clearTimeout(resumeTimer);
  }, [paused]);

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 8000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / perView}%` }}
            >
              <div className="border border-line rounded-lg p-7 h-full bg-bg/40">
                <p className="text-cyan text-2xl leading-none mb-4">&ldquo;</p>
                <p className="text-ink/90 leading-relaxed mb-6 min-h-[72px]">{t.quote}</p>
                <p className="font-display text-sm text-ink">{t.name}</p>
                <p className="font-mono text-[11px] text-muted mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-cyan/60 hover:text-cyan transition-colors"
        >
          &larr;
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-cyan" : "w-1.5 bg-line"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-cyan/60 hover:text-cyan transition-colors"
        >
          &rarr;
        </button>
      </div>

      {paused && (
        <p className="text-center text-[11px] font-mono text-cyan/70 mt-3">
          Paused — move away to resume
        </p>
      )}
    </div>
  );
}