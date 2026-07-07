"use client";

import { useState, FormEvent, ChangeEvent } from "react";

const SERVICE_OPTIONS = [
  "CCTV Installation",
  "Network Setup",
  "IT AMC / Support",
  "Access Control",
  "Not sure yet",
];

// const WEBHOOK_URL = "https://agenticvipin.app.n8n.cloud/webhook/6838dc1a-9b57-47ef-8243-b18ad97317fb";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
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

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setForm({ name: "", phone: "", service: SERVICE_OPTIONS[0], message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-cyan/30 rounded-lg p-8 text-center">
        <p className="font-display text-2xl text-ink mb-2">Thank you!</p>
        <p className="text-muted">
          Your enquiry has been received. Nitin will get back to you within 24 hours.
        </p>
      </div>
    );
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

      {status === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again or call directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 bg-cyan text-bg px-8 py-4 font-medium hover:bg-cyan-glow transition-colors disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}