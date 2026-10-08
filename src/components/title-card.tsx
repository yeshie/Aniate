import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Title } from "@/data/titles";
import { MyRating } from "./stars";

export function Poster({
  title,
  className = "",
  sizes = "(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw",
  preload = false,
}: {
  title: Title;
  className?: string;
  sizes?: string;
  preload?: boolean;
}) {
  if (title.poster) {
    return (
      <div className={`relative aspect-[2/3] overflow-hidden rounded-xl bg-line ${className}`}>
        <Image
          src={title.poster}
          alt={`${title.name} poster`}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`poster flex aspect-[2/3] items-end rounded-xl p-4 ${className}`}
      style={{ "--hue": title.hue } as CSSProperties}
      aria-hidden
    >
      <span className="text-lg leading-tight font-semibold">{title.name}</span>
    </div>
  );
}

export function TitleCard({ title }: { title: Title }) {
  return (
    <Link href={`/title/${title.slug}`} className="group block">
      <Poster title={title} className="transition-transform group-hover:-translate-y-1" />
      <h3 className="mt-3 leading-snug font-medium group-hover:text-accent">{title.name}</h3>
      <p className="mt-1 flex flex-wrap gap-x-3 text-sm text-muted">
        <span>
          {title.year} · {title.type === "movie" ? "Movie" : "Series"}
        </span>
        <span>
          <span className="text-star">★</span> {title.score.toFixed(1)}
        </span>
        <MyRating slug={title.slug} />
      </p>
    </Link>
  );
}
