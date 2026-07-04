"use client";

import { SITE } from "@/lib/site-config";

export default function WhatsAppFloat() {
  return (
    <a
      href={`${SITE.whatsapp}?text=${encodeURIComponent(
        "Hi Nitin, I'd like to know more about your CCTV/networking services."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40 hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.373.7 4.583 1.902 6.437L4 29l7.73-1.865A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3zm0 21.75c-1.99 0-3.85-.55-5.44-1.51l-.39-.23-4.59 1.107 1.13-4.46-.25-.4A9.71 9.71 0 0 1 5.75 15c0-5.66 4.6-10.25 10.254-10.25S26.25 9.34 26.25 15 21.66 24.75 16.004 24.75zm5.62-7.67c-.31-.155-1.83-.9-2.11-1.005-.283-.104-.49-.155-.696.156-.207.31-.8 1.005-.98 1.212-.18.207-.36.233-.67.078-.31-.155-1.31-.483-2.494-1.54-.922-.822-1.545-1.837-1.726-2.148-.18-.31-.02-.478.136-.633.14-.14.31-.362.465-.543.155-.18.207-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.696-1.68-.954-2.3-.252-.605-.508-.523-.696-.533l-.593-.01c-.207 0-.543.078-.827.388-.283.31-1.083 1.058-1.083 2.58s1.11 2.99 1.264 3.196c.155.207 2.19 3.345 5.31 4.69.742.32 1.32.512 1.772.655.744.237 1.42.203 1.955.123.596-.089 1.83-.748 2.088-1.47.259-.723.259-1.343.181-1.47-.078-.13-.284-.207-.594-.362z" />
      </svg>
    </a>
  );
}
