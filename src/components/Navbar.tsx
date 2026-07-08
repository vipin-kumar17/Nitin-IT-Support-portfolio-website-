"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home", node: "00" },
  { href: "/services", label: "Services", node: "01" },
  { href: "/portfolio", label: "Portfolio", node: "02" },
  { href: "/about", label: "About", node: "03" },
  { href: "/contact", label: "Contact", node: "04" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-cyan/50 group-hover:border-cyan transition-colors" />
            <span className="h-1.5 w-1.5 rounded-full bg-cyan pulse-dot" />
          </span>
          <span className="font-display text-lg tracking-tight text-ink">
            NITIN KUMAR
          </span>
          <span className="hidden sm:flex items-center gap-1.5 ml-1">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" className="text-cyan/70">
              <rect x="2.5" y="4" width="14" height="9.5" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <line x1="7" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="1.3" />
              <line x1="9.5" y1="13.5" x2="9.5" y2="17" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="9.5" cy="8.75" r="2.1" stroke="currentColor" strokeWidth="1" opacity="0.6">
                <animate attributeName="r" values="1.6;2.3;1.6" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </svg>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" className="text-signal/80">
              <rect x="15" y="7" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.3" />
              <circle cx="18.5" cy="9.5" r="1.4" stroke="currentColor" strokeWidth="1" />
              <circle cx="21" cy="7.7" r="0.8" fill="currentColor">
                <animate attributeName="opacity" values="1;0.2;1" dur="1.6s" repeatCount="indefinite" />
              </circle>
            </svg>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`group relative flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
                    active ? "text-cyan" : "text-muted hover:text-ink"
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-60">
                    {link.node}
                  </span>
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-cyan transition-transform origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 border border-cyan/40 px-5 py-2.5 text-sm font-medium text-cyan hover:bg-cyan hover:text-bg transition-colors"
        >
          Get a Quote
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.65, 0, 0.35, 1] }}
            className="md:hidden bg-bg border-t border-line overflow-hidden"
          >
            <div className="px-6 py-6">
              <ul className="flex flex-col gap-1">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 py-3 text-lg font-display ${
                        pathname === link.href ? "text-cyan" : "text-ink"
                      }`}
                    >
                      <span className="font-mono text-xs text-muted">{link.node}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 block text-center border border-cyan/40 px-5 py-3 text-sm text-cyan"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
