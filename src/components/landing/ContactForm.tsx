"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/30 bg-navy/30 p-8 text-center">
        <p className="text-lg font-semibold text-foreground">Thank you for your enquiry.</p>
        <p className="mt-2 text-sm text-muted">
          This is a demo form. Our team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Name *
          </span>
          <input
            required
            type="text"
            name="name"
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Company
          </span>
          <input
            type="text"
            name="company"
            placeholder="Your company"
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
          />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Email *
          </span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="04xx xxx xxx"
            className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Services required
        </span>
        <select
          name="service"
          className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
        >
          <option>Pallet storage</option>
          <option>Cross-docking</option>
          <option>Container handling</option>
          <option>Pick, pack & dispatch</option>
          <option>Multiple services</option>
        </select>
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Message *
        </span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Estimated pallets, turnover, start date..."
          className="w-full resize-none rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-background transition hover:bg-accent-dim hover:shadow-[0_0_24px_var(--glow)] sm:w-auto sm:px-10"
      >
        Send enquiry
      </button>
    </form>
  );
}
