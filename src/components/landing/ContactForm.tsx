"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-sm outline-none transition focus:border-brand-soft focus:ring-1 focus:ring-brand-soft/40";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/15 bg-brand/40 p-8 text-center">
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
          <input required type="text" name="name" placeholder="Jane Smith" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Company
          </span>
          <input type="text" name="company" placeholder="Your company" className={inputClass} />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Email *
          </span>
          <input required type="email" name="email" placeholder="you@company.com" className={inputClass} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
            Phone
          </span>
          <input type="tel" name="phone" placeholder="04xx xxx xxx" className={inputClass} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted">
          Services required
        </span>
        <select name="service" className={inputClass}>
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
          className={`${inputClass} resize-none`}
        />
      </label>
      <button type="submit" className="btn-primary w-full rounded-full py-3.5 text-sm font-semibold sm:w-auto sm:px-10">
        Send enquiry
      </button>
    </form>
  );
}
