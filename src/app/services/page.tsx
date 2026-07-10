import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltPhoto from "@/components/TiltPhoto";
import { SITE } from "@/lib/site-config";

const CATEGORIES = [
  {
    node: "01",
    title: "Computer Services",
    items: ["Desktop Assembly", "Laptop Repair", "Windows Installation", "Printer Setup"],
  },
  {
    node: "02",
    title: "Networking Services",
    items: [
      "LAN Setup",
      "WiFi Installation",
      "Router Configuration",
      "Switch Configuration",
      "Network Troubleshooting",
    ],
  },
  {
    node: "03",
    title: "CCTV Services",
    items: [
      "CCTV Camera Installation",
      "DVR/NVR Setup",
      "Remote Mobile Viewing Setup",
      "Camera Maintenance",
      "IP Camera Installation",
    ],
  },
  {
    node: "04",
    title: "AMC Services",
    items: ["Annual Maintenance Contract", "Office IT Support", "Preventive Maintenance"],
  },
  {
    node: "05",
    title: "Intercom & Conference Hall Setup",
    items: ["Intercom System Installation", "Conference Room Audio Setup", "Microphone & Speaker Configuration", "PA System & Audio Distribution", "Video Conferencing Equipment Setup"],
  },
  {
    node: "06",
    title: "Access Control Systems",
    items: ["Biometric Attendance System", "RFID Card Access Control System", "Face Recognition Access Control System" , "Smart Lock Installation"],
  },
];

const PROCESS = [
  { step: "01", title: "Site Survey", desc: "On-site walkthrough to map coverage zones, cable routes, and network demands." },
  { step: "02", title: "System Design", desc: "A layout matched to your property and budget — no unnecessary hardware." },
  { step: "03", title: "Installation", desc: "Clean, labeled installation with minimal disruption to your daily operations." },
  { step: "04", title: "Handover & Training", desc: "You get a full walkthrough of the system, mobile app setup, and access details." },
  { step: "05", title: "Ongoing Support", desc: "AMC and on-call support to keep everything running long after install day." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 border-b border-line grid-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-14 items-center">
          <Reveal className="lg:col-span-3">
            <p className="eyebrow mb-6">01 / Services</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink text-balance max-w-3xl">
              Built for the way your space actually runs.
            </h1>
            <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">
            Professional IT Infrastructure Setup — IP Cameras, Networking, Wi-Fi, Intercom Systems & Ongoing Support.
            </p>
          </Reveal>
          <div className="flex lg:col-span-2 justify-center order-first lg:order-last mb-4 lg:mb-0 px-8 lg:px-0">
            <TiltPhoto
              src="/setup-showcase.jpg"
              alt="CCTV and network monitoring setup"
              className="w-full max-w-[260px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[480px]"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.node} delay={(i % 3) * 0.08}>
              <div className="border border-line rounded-lg p-8 h-full bg-panel/30 hover:border-cyan/40 transition-colors">
                <span className="font-mono text-xs text-cyan">{cat.node}</span>
                <h3 className="font-display text-2xl text-ink mt-5 mb-5">
                  {cat.title}
                </h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink/80">
                      <span className="h-1 w-1 rounded-full bg-cyan flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative z-10 py-24 md:py-32 border-t border-line bg-panel/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">How It Works</p>
            <h2 className="font-display text-3xl md:text-5xl text-ink text-balance">
              From site survey to switched-on system.
            </h2>
          </Reveal>

          <div className="space-y-0">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 border-t border-line last:border-b">
                  <span className="font-mono text-cyan text-sm md:w-16 flex-shrink-0">
                    {p.step}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-ink md:w-64 flex-shrink-0">
                    {p.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl text-ink mb-8">
            Not sure what you need yet?
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors"
            >
              Talk It Through With Nitin
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
