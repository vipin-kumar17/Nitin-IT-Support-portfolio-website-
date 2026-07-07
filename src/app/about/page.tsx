"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import AboutPhotoTilt from "@/components/AboutPhotoTilt";
import SkillBars from "@/components/SkillBars";
import { SITE } from "@/lib/site-config";

const CERTIFICATIONS = [
  { node: "01", title: "CCNA", desc: "Cisco Certified Network Associate" },
  { node: "02", title: "CompTIA A+", desc: "Hardware & IT fundamentals certification" },
  { node: "03", title: "Hardware & Networking Diploma", desc: "Formal diploma in computer hardware and networking" },
  { node: "04", title: "CCTV Training Certificate", desc: "Specialized surveillance systems training" },
];

const VALUES = [
  {
    node: "01",
    title: "Straight assessments",
    desc: "You get told exactly what your property needs — not the most expensive package.",
  },
  {
    node: "02",
    title: "Clean installations",
    desc: "Labeled cabling, tidy runs, and documentation so the next person can understand the system too.",
  },
  {
    node: "03",
    title: "Support that answers",
    desc: "AMC clients get a real response when something goes wrong, not a ticket queue.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 border-b border-line grid-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">03 / About</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink text-balance max-w-3xl">
              The engineer behind the install.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-5 gap-14 items-start">

        <Reveal className="md:col-span-2">
            <AboutPhotoTilt />
          </Reveal>

          <Reveal className="md:col-span-3" delay={0.1}>
            <p className="text-lg text-ink leading-relaxed mb-6">
              I am a Computer Hardware and Networking Engineer with 15+ years
              of experience in CCTV installation, LAN setup, WiFi networking,
              computer repair, and IT maintenance services — based in
              Baragadwa, Gorakhpur, Uttar Pradesh.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              My work sits at the intersection of three disciplines most
              installers only know one of: computer hardware, network
              infrastructure, and security systems. That combination means a
              camera system I install is also a network I can vouch for —
              properly cabled, correctly segmented, and stable under real
              daily use rather than just working on install day.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Every project starts with a site visit, not a sales pitch —
              understanding how a space is actually used before recommending
              any hardware.
            </p>

            <p className="eyebrow mb-4">Certifications</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((c) => (
                <div key={c.node} className="border border-line rounded-lg p-5 hover:border-cyan/40 transition-colors">
                  <span className="font-mono text-[10px] text-cyan">{c.node}</span>
                  <p className="font-display text-base text-ink mt-2">{c.title}</p>
                  <p className="text-muted text-xs mt-1">{c.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section className="relative z-10 py-24 md:py-32 border-t border-line bg-panel/40">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Skills</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              Hands-on with every layer of the system.
            </h2>
          </Reveal>
          <Reveal>
            <SkillBars />
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative z-10 py-24 md:py-32 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">How I Work</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              A few things that don&apos;t change per project.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.node} delay={i * 0.1}>
                <div className="border border-line rounded-lg p-8 h-full bg-panel/30 hover:border-cyan/40 transition-colors">
                  <span className="font-mono text-xs text-cyan">{v.node}</span>
                  <h3 className="font-display text-xl text-ink mt-5 mb-3">{v.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 text-center border-t border-line">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-8">
            Have a project in mind?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors"
            >
              Get in Touch
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#25D366]/50 text-[#25D366] px-8 py-4 font-medium hover:bg-[#25D366]/10 transition-colors"
            >
              WhatsApp Nitin
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
