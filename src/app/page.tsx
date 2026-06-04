import Link from "next/link";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { ServiceIcon } from "@/components/landing/icons";
import { Logo } from "@/components/landing/Logo";
import {
  faqs,
  processSteps,
  services,
  site,
  stats,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden pt-20">
          <div className="hero-glow grid-bg absolute inset-0" />
          <div className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-1/4 h-80 w-80 rounded-full bg-navy-light/30 blur-3xl" />

          <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-navy/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                {site.partner.role}
              </span>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Warehouse excellence</span>
                <br />
                <span className="text-foreground">in Sydney&apos;s cargo corridor</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
                {site.legalName} delivers secure storage, cross-dock and local
                distribution for {site.partner.name} operations — warehouse only,
                built for speed and visibility.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-semibold text-background transition hover:bg-accent-dim hover:shadow-[0_0_32px_var(--glow)]"
                >
                  Request a warehouse quote
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold transition hover:border-accent/40 hover:bg-white/5"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-shine rounded-2xl border border-card-border bg-card/80 p-5 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-accent sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        <section className="border-y border-white/5 bg-navy/20 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
            <p className="text-center text-sm text-muted sm:text-left">
              Proud warehouse partner supporting{" "}
              <strong className="text-foreground">{site.partner.name}</strong>{" "}
              consignments in Botany and greater Sydney
            </p>
            <a
              href={site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-accent transition hover:underline"
            >
              Visit airway.com.au →
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                What we do
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Warehouse services only
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                End-to-end ground operations — no air terminal handling. Every
                service is designed to integrate with your existing Airway flows.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card-shine group rounded-2xl border border-card-border bg-card p-8 transition hover:border-accent/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-navy/60 transition group-hover:border-accent/40 group-hover:shadow-[0_0_16px_var(--glow)]">
                    <ServiceIcon type={service.icon} />
                  </div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Facility */}
        <section id="facility" className="relative overflow-hidden py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-background to-background" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Our facility
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Strategically located in Botany
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Minutes from Port Botany and Sydney&apos;s air cargo precinct.
                  Modern docks, racking and staging lanes built for high-throughput
                  warehouse operations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Multiple loading docks & forklift fleet",
                    "Climate-controlled staging (sample)",
                    "WMS integration & daily inventory reports",
                    "Dedicated account manager for Airway flows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-muted">
                  <strong className="text-foreground">Address (example):</strong>
                  <br />
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </p>
                <p className="mt-2 text-sm text-muted">{site.hours}</p>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-card-border bg-card">
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <Logo variant="full-light" linked={false} className="mb-6" />
                  <p className="text-sm font-medium uppercase tracking-widest text-accent">
                    Botany NSW · Sydney
                  </p>
                  <p className="mt-2 max-w-xs text-xs text-muted">
                    Replace with facility photography when available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                How it works
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Simple onboarding
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {processSteps.map((step, i) => (
                <div key={step.step} className="relative text-center md:text-left">
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-accent/40 to-transparent md:block" />
                  )}
                  <span className="inline-block text-4xl font-bold text-accent/30">
                    {step.step}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="border-y border-white/5 bg-card/50 py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-3xl border border-card-border bg-gradient-to-br from-navy/80 to-card p-10 sm:p-14 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Built for contractors who need reliability
                  </h2>
                  <p className="mt-4 text-muted leading-relaxed">
                    We focus exclusively on warehouse and road distribution — so
                    your team can rely on predictable SLAs, transparent reporting
                    and a facility aligned with Airway standards.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Dedicated lanes", sub: "for Airway staging" },
                    { label: "Real-time", sub: "inventory snapshots" },
                    { label: "Flexible", sub: "storage terms" },
                    { label: "Local", sub: "Sydney distribution" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-white/10 bg-background/50 p-5"
                    >
                      <p className="font-semibold text-accent">{item.label}</p>
                      <p className="mt-1 text-xs text-muted">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Common questions
              </h2>
            </div>

            <dl className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-card-border bg-card p-6"
                >
                  <dt className="font-semibold">{faq.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Request a warehouse quote
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Tell us about your storage and distribution needs. Example
                  contact details below.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Phone
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block text-lg font-semibold text-accent hover:underline"
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-lg font-semibold hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      Location
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-card-border bg-card p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
