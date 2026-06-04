import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

type LogoVariant = "header" | "full-light" | "full-dark";

const sources: Record<LogoVariant, { src: string; width: number; height: number }> = {
  header: { src: "/logo-mark-light.svg", width: 52, height: 52 },
  "full-light": { src: "/logo-light.svg", width: 280, height: 268 },
  "full-dark": { src: "/logo.svg", width: 280, height: 268 },
};

export function Logo({
  variant = "header",
  linked = true,
  className = "",
}: {
  variant?: LogoVariant;
  linked?: boolean;
  className?: string;
}) {
  const { src, width, height } = sources[variant];

  if (variant === "header") {
    const content = (
      <div className={`flex items-center gap-3 ${className}`}>
        <Image
          src={src}
          alt=""
          width={width}
          height={height}
          className="h-11 w-11 shrink-0"
          priority
        />
        <div className="hidden leading-tight sm:block">
          <span className="block text-sm font-bold tracking-wide text-foreground">
            CONTINENTAL CARGO
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-silver">
            Logistics Company
          </span>
        </div>
      </div>
    );

    if (!linked) return content;

    return (
      <Link
        href="#"
        aria-label={site.legalName}
        className="group transition-opacity hover:opacity-90"
      >
        {content}
      </Link>
    );
  }

  const img = (
    <Image
      src={src}
      alt={site.legalName}
      width={width}
      height={height}
      className={
        variant === "full-light"
          ? `h-auto w-full max-w-[220px] object-contain ${className}`
          : `h-auto w-full max-w-[220px] object-contain ${className}`
      }
    />
  );

  if (variant === "full-dark") {
    return (
      <div className={`rounded-2xl bg-white px-6 py-5 shadow-lg ${className}`}>
        {img}
      </div>
    );
  }

  return <div className={className}>{img}</div>;
}
