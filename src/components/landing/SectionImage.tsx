import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
  className?: string;
};

export function SectionImage({
  src,
  alt,
  priority = false,
  overlay = true,
  className = "",
}: SectionImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {overlay && <div className="image-overlay absolute inset-0" aria-hidden />}
    </div>
  );
}
