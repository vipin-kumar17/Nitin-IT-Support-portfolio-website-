import Link from "next/link";
import { SITE } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-cyan/50" />
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            </span>
            <span className="font-display text-lg text-ink">NITIN KUMAR</span>
          </div>
          <p className="text-muted text-sm max-w-sm leading-relaxed">
            CCTV surveillance, network infrastructure, and IT support engineered
            for reliability. Serving homes and businesses with certified
            hardware and network expertise.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["About", "/about"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-muted hover:text-cyan transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>Computer Hardware</li>
            <li>Networking</li>
            <li>CCTV Installation</li>
            <li>AMC Support</li>
            <li>Data Recovery</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-cyan transition-colors font-mono">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-cyan transition-colors">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.address}</li>
          </ul>
          {/* <div className="flex items-center gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="text-muted hover:text-cyan transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-muted hover:text-cyan transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.5.5.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77c-.5.5-1.11.9-1.77 1.15-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94.01 9.28 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5ZM18.4 6.85a1.17 1.17 0 1 0 0-2.34 1.17 1.17 0 0 0 0 2.34Z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="text-muted hover:text-cyan transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.3 3.6Z"/></svg>
            </a>
          </div> */}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted font-mono">
            © {new Date().getFullYear()} NITIN KUMAR — ALL SYSTEMS SECURED
          </p>
          <p className="text-xs text-muted flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal pulse-dot" />
            Available for new installations
          </p>
        </div>
      </div>
    </footer>
  );
}
