import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/landing/ContactForm";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { ServiceIcon } from "@/components/landing/icons";
import { SectionImage } from "@/components/landing/SectionImage";
import {
  faqs,
  processSteps,
  services,
  site,
  stats,
} from "@/data/site";
import { images } from "@/data/images";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative min-h-screen overflow-hidden pt-20">
          <Image
            src={images.hero}
            alt="Modern warehouse with pallet racking and logistics operations"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="grid-bg absolute inset-0 opacity-40" />

          <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
            <div className="animate-fade-up max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-sm border border-white/20 bg-brand/60 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-silver">
                <span className="h-1.5 w-1.5 rounded-full bg-silver" />
                {site.partner.role}
              </span>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Warehouse excellence</span>
                <br />
                <span className="text-foreground">in Sydney&apos;s cargo corridor</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-silver">
                {site.legalName} delivers secure storage, cross-dock and local
                distribution for {site.partner.name} operations — warehouse only,
                built for reliability and control.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="#contact" className="btn-primary inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-semibold">
                  Request a warehouse quote
                </Link>
                <Link href="#services" className="btn-secondary inline-flex items-center justify-center rounded-sm px-8 py-4 text-sm font-semibold">
                  Explore services
                </Link>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="card-shine rounded-sm border border-white/10 bg-brand/50 p-5 backdrop-blur-md"
                >
                  <p className="stat-value text-2xl font-bold sm:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-silver sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner */}
        <section className="border-y border-white/10 bg-brand py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-8">
            <p className="text-center text-sm text-silver sm:text-left">
              Proud warehouse partner supporting{" "}
              <strong className="text-foreground">{site.partner.name}</strong>{" "}
              consignments in Botany and greater Sydney
            </p>
            <a
              href={site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-sm font-semibold text-foreground underline-offset-4 transition hover:underline"
            >
              Visit airway.com.au →
            </a>
          </div>
        </section>

        {/* Operations gallery */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm md:col-span-2 md:aspect-[21/9]">
                <SectionImage
                  src={images.operations}
                  alt="Forklift moving pallets in a distribution warehouse"
                  className="h-full min-h-[220px] rounded-sm"
                  overlay
                />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-widest text-silver">
                    Operations
                  </p>
                  <p className="mt-1 max-w-md text-lg font-semibold text-foreground">
                    High-throughput staging aligned with Airway schedules
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <SectionImage
                  src={images.containers}
                  alt="Shipping containers at a logistics terminal"
                  className="h-full min-h-[220px] rounded-sm"
                  overlay
                />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-sm font-semibold uppercase tracking-widest text-silver">
                    Port proximity
                  </p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    Botany & Sydney corridor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="label-brand text-sm font-semibold uppercase">What we do</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Warehouse services only
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  End-to-end ground operations — no air terminal handling. Every
                  service integrates with your existing Airway flows.
                </p>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-sm border border-white/10">
                <SectionImage
                  src={images.hero}
                  alt="Warehouse interior with inventory storage"
                  className="aspect-video rounded-sm"
                />
              </div>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="card-shine group rounded-sm border border-white/10 bg-card p-8 transition hover:border-white/20 hover:bg-card-elevated"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-white/15 bg-brand">
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
          <div className="absolute inset-0 bg-brand/30" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
                <SectionImage
                  src={images.facility}
                  alt="Warehouse loading docks and distribution facility"
                  className="aspect-[4/3] rounded-sm"
                />
              </div>

              <div>
                <p className="label-brand text-sm font-semibold uppercase">Our facility</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Strategically located in Botany
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Minutes from Port Botany and Sydney&apos;s air cargo precinct.
                  Modern docks, racking and staging lanes for professional warehouse
                  operations.
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "Multiple loading docks & forklift fleet",
                    "Climate-controlled staging (sample)",
                    "WMS integration & daily inventory reports",
                    "Dedicated account manager for Airway flows",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm bg-brand text-xs text-silver">
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
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 lg:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center">
              <p className="label-brand text-sm font-semibold uppercase">How it works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Simple onboarding
              </h2>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {processSteps.map((step, i) => (
                <div key={step.step} className="relative text-center md:text-left">
                  {i < processSteps.length - 1 && (
                    <div className="absolute top-8 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-white/25 to-transparent md:block" />
                  )}
                  <span className="inline-block text-4xl font-bold text-brand-soft/50">
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
        <section className="border-y border-white/10 py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-sm border border-white/10 bg-card">
              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[280px] lg:min-h-full">
                  <SectionImage
                    src={images.containers}
                    alt="Container yard near Sydney logistics hub"
                    overlay
                    className="min-h-[280px] lg:absolute lg:inset-0 lg:min-h-full"
                  />
                </div>
                <div className="p-10 sm:p-14 lg:p-16">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Built for contractors who need reliability
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    We focus exclusively on warehouse and road distribution — predictable
                    SLAs, transparent reporting and a facility aligned with Airway
                    standards.
                  </p>
                  <div className="mt-10 grid grid-cols-2 gap-4">
                    {[
                      { label: "Dedicated lanes", sub: "for Airway staging" },
                      { label: "Real-time", sub: "inventory snapshots" },
                      { label: "Flexible", sub: "storage terms" },
                      { label: "Local", sub: "Sydney distribution" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-sm border border-white/10 bg-brand/40 p-5"
                      >
                        <p className="font-semibold text-silver">{item.label}</p>
                        <p className="mt-1 text-xs text-muted">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 lg:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center">
              <p className="label-brand text-sm font-semibold uppercase">FAQ</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Common questions</h2>
            </div>

            <dl className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-sm border border-white/10 bg-card p-6"
                >
                  <dt className="font-semibold">{faq.question}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-24 lg:py-32">
          <Image
            src={images.operations}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            aria-hidden
          />
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="label-brand text-sm font-semibold uppercase">Contact</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Request a warehouse quote
                </h2>
                <p className="mt-4 leading-relaxed text-muted">
                  Tell us about your storage and distribution needs. Example contact
                  details below.
                </p>

                <div className="mt-10 space-y-6">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">Phone</p>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block text-lg font-semibold text-foreground hover:underline"
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block text-lg font-semibold text-silver hover:text-foreground"
                    >
                      {site.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">Location</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-sm border border-white/10 bg-card p-8">
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
