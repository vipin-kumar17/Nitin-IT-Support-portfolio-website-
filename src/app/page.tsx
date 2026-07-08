import Link from "next/link";
import HeroScene from "@/components/HeroScene";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import TiltPhoto from "@/components/TiltPhoto";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE } from "@/lib/site-config";

const PILLARS = [
  {
    node: "01",
    title: "Computer Hardware",
    desc: "Desktop assembly, laptop repair, Windows installation, and printer setup — done right the first time.",
    href: "/services",
  },
  {
    node: "02",
    title: "Networking",
    desc: "Structured cabling, enterprise Wi-Fi, and LAN design that stays fast under real daily load.",
    href: "/services",
  },
  {
    node: "03",
    title: "CCTV Surveillance",
    desc: "HD & 4K CCTV systems designed around your property's real blind spots, not a generic layout.",
    href: "/services",
  },
  {
    node: "04",
    title: "AMC & IT Support",
    desc: "Ongoing maintenance contracts and rapid-response troubleshooting when something goes down.",
    href: "/services",
  },
];

const WHY_US = [
  { title: "Experienced Engineer", desc: "15+ years hands-on with hardware, networks, and CCTV systems." },
  { title: "Fast Service", desc: "Most on-site visits scheduled within 24 hours of your call." },
  { title: "Affordable Pricing", desc: "Transparent quotes with no hidden charges, ever." },
  { title: "24×7 Support", desc: "AMC clients get priority response, day or night." },
  { title: "On-Site Service", desc: "Nitin comes to your home, office, or shop — not the other way around." },
  { title: "Genuine Parts", desc: "Only certified, genuine hardware and camera equipment used." },
];


export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20 grid lg:grid-cols-5 gap-14 items-center">
          <div className="lg:col-span-3">
            <p className="eyebrow mb-6 pr-4">
              COMPUTER HARDWARE &middot; NETWORKING &middot; CCTV
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.98] text-ink text-balance">
              Nothing moves
              <br />
              without you <span className="text-cyan">knowing.</span>
            </h1>
            <p className="mt-6 max-w-lg text-muted text-lg leading-relaxed">
              Professional Computer Hardware, Networking &amp; CCTV Solutions —
              Installation, Maintenance, Repair &amp; AMC Services by Nitin Kumar.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-cyan text-bg px-6 py-3.5 font-medium hover:bg-cyan-glow transition-colors"
              >
                Call Now
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#25D366]/50 text-[#25D366] px-6 py-3.5 font-medium hover:bg-[#25D366]/10 transition-colors"
              >
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-line px-6 py-3.5 font-medium text-ink hover:border-cyan/60 hover:text-cyan transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          <div className="flex lg:col-span-2 justify-center order-first lg:order-last mb-4 lg:mb-0 pr-6 lg:pr-0">
            <TiltPhoto
              src="/nitin-workspace.png"
              alt="Nitin Kumar — Computer Hardware, Networking & CCTV Engineer"
              className="w-72 pl-6 sm:w-96 md:w-[500px] lg:w-[580px]"
            />
          </div>
        </div>

        <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted z-10">
          <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
          <span className="h-10 w-px bg-gradient-to-b from-cyan to-transparent" />
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative z-10 py-28 md:py-36 border-t border-line bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What I Handle</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              Four disciplines. One point of contact.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {PILLARS.map((p, i) => (
              <Reveal key={p.node} delay={i * 0.08}>
                <Link
                  href={p.href}
                  className="group block bg-bg p-8 h-full hover:bg-panel transition-colors"
                >
                  <span className="font-mono text-xs text-cyan">{p.node}</span>
                  <h3 className="font-display text-xl md:text-2xl text-ink mt-6 mb-4 group-hover:text-cyan transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">{p.desc}</p>
                  <span className="inline-flex items-center gap-2 mt-6 text-sm text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more &rarr;
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-10 py-24 md:py-32 border-t border-line bg-panel/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              Reasons clients come back.
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="border border-line rounded-lg p-7 h-full hover:border-cyan/40 transition-colors bg-bg/40">
                  <span className="text-signal text-lg">&#10003;</span>
                  <h3 className="font-display text-lg text-ink mt-3 mb-2">{w.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-24 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <StatCounter value={500} suffix="+" label="Happy clients" />
              <StatCounter value={1000} suffix="+" label="CCTV cameras installed" />
              <StatCounter value={300} suffix="+" label="Network projects" />
              <StatCounter value={15} suffix="+" label="Years experience" />
            </div>
          </Reveal>
        </div>
      </section>
      
     {/* TESTIMONIALS */}
     <section className="relative z-10 py-24 md:py-32 border-t border-line bg-panel/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">Client Words</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              What clients say.
            </h2>
          </Reveal>

          <Reveal>
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>
      {/* FAQ */}
      <section className="relative z-10 py-24 md:py-32 border-t border-line">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              Common questions.
            </h2>
          </Reveal>
          <Reveal>
            <FAQAccordion />
          </Reveal>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative z-10 py-28 md:py-36 border-t border-line overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <Reveal>
            <p className="eyebrow mb-6 justify-center flex">Ready When You Are</p>
            <h2 className="font-display text-4xl md:text-6xl text-ink text-balance max-w-3xl mx-auto">
              Let&apos;s cover every angle of your space.
            </h2>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors"
              >
                Start Your Project
              </Link>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#25D366]/50 text-[#25D366] px-8 py-4 font-medium hover:bg-[#25D366]/10 transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
