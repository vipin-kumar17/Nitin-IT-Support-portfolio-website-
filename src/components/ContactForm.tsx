"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { SITE } from "@/lib/site-config";

const SERVICE_OPTIONS = [
  "CCTV Installation",
  "Network Setup",
  "IT AMC / Support",
  "Access Control",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: SERVICE_OPTIONS[0],
    message: "",
  });

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // NOTE: This currently opens the user's email client with a pre-filled
    // message. To send directly from the form, wire this up to an API route
    // (e.g. using Resend, Nodemailer, or a form backend like Formspree).
    const subject = encodeURIComponent(`New enquiry: ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="eyebrow block mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-line focus:border-cyan outline-none py-3 text-ink transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="eyebrow block mb-2">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-line focus:border-cyan outline-none py-3 text-ink transition-colors font-mono"
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="eyebrow block mb-2">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-line focus:border-cyan outline-none py-3 text-ink transition-colors"
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-panel">
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">
          Tell me about the space
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-line focus:border-cyan outline-none py-3 text-ink transition-colors resize-none"
          placeholder="Home, office, warehouse — how many rooms or entry points roughly?"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors"
      >
        {status === "sent" ? "Opening your email…" : "Send Enquiry"}
      </button>
    </form>
  );
}
