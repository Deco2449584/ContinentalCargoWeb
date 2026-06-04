import Link from "next/link";
import { Logo } from "@/components/landing/Logo";
import { navLinks, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo variant="full-light" linked={false} className="mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {site.description}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Quick links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li>
                <a href={site.phoneHref} className="transition hover:text-accent">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-accent">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} {site.legalName}. Example data — all rights reserved.
          </p>
          <p>
            Warehouse contractor for{" "}
            <a
              href={site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {site.partner.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
