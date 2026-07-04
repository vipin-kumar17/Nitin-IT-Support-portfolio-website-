import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 border-b border-line grid-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">04 / Contact</p>
            <h1 className="font-display text-5xl md:text-7xl text-ink text-balance max-w-3xl">
              Let&apos;s look at your space.
            </h1>
            <p className="mt-6 max-w-xl text-muted text-lg leading-relaxed">
              Share a few details and Nitin will get back to you to schedule
              a free site visit.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-5 gap-16">
          <Reveal className="md:col-span-3">
            <ContactForm />
          </Reveal>

          <Reveal className="md:col-span-2" delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="eyebrow mb-3">Phone</p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="font-display text-2xl text-ink hover:text-cyan transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">WhatsApp</p>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-[#25D366]/50 text-[#25D366] px-5 py-3 font-medium hover:bg-[#25D366]/10 transition-colors"
                >
                  <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor">
                    <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.373.7 4.583 1.902 6.437L4 29l7.73-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3z" />
                  </svg>
                  Chat Now
                </a>
              </div>

              <div>
                <p className="eyebrow mb-3">Email</p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-display text-xl text-ink hover:text-cyan transition-colors break-all"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="eyebrow mb-3">Address</p>
                <p className="font-display text-xl text-ink">{SITE.address}</p>
              </div>
              <div>
                <p className="eyebrow mb-3">Response Time</p>
                <p className="text-muted leading-relaxed">
                  Enquiries are typically answered within 24 hours. AMC
                  clients get priority response for active issues.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="relative z-10 border-t border-line">
        <div className="aspect-[16/6] w-full grayscale-[30%] opacity-90">
          <iframe
            src={SITE.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nitin Kumar service location map"
          />
        </div>
      </section>
    </>
  );
}
