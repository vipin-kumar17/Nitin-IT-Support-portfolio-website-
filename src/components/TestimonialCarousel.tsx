"use client";

import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
  { quote: "Excellent CCTV installation and quick support.", name: "Rohit S.", role: "Shop Owner, Gorakhpur" },
  { quote: "Professional networking setup with affordable pricing.", name: "Javed Ahmed.", role: "Engineer" },
  { quote: "Fixed our office network issue same day. Very reliable.", name: "Shashikant.", role: "Architect" },
  { quote: "Camera quality is excellent and the mobile app works perfectly, even from outside the city.", name: "Sanjay Gupta", role: "Homeowner" },
  { quote: "Set up our entire school network without any downtime. Very professional work.", name: "Priya Singh", role: "School Administrator" },
  { quote: "AMC service is genuinely worth it — they respond within hours, not days.", name: "Manoj Yadav", role: "Restaurant Owner" },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);

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

  const next = useCallback(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const prev = () => {
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative">
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
    </div>
  );
}