import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getTitle, titles } from "@/data/titles";
import { StarRating } from "@/components/stars";
import { Poster, TitleCard } from "@/components/title-card";

export function generateStaticParams() {
  return titles.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: PageProps<"/title/[slug]">): Promise<Metadata> {
  const title = getTitle((await props.params).slug);
  return title ? { title: title.name, description: title.summary } : {};
}

export default function TitlePage(props: PageProps<"/title/[slug]">) {
  return (
    <>
      <Link href="/" className="text-sm text-muted hover:text-fg">
        ← All titles
      </Link>
      <Suspense fallback={<TitleSkeleton />}>
        <TitleDetails params={props.params} />
      </Suspense>
    </>
  );
}

function TitleSkeleton() {
  return (
    <div className="mt-6 grid animate-pulse gap-8 sm:grid-cols-[220px_1fr] sm:gap-10" aria-hidden>
      <div className="aspect-[2/3] w-full max-w-[220px] rounded-xl bg-line" />
      <div className="space-y-4">
        <div className="h-4 w-48 rounded bg-line" />
        <div className="h-9 w-2/3 rounded bg-line" />
        <div className="h-4 w-full max-w-prose rounded bg-line" />
        <div className="h-4 w-5/6 max-w-prose rounded bg-line" />
      </div>
    </div>
  );
}

async function TitleDetails({ params }: { params: PageProps<"/title/[slug]">["params"] }) {
  const title = getTitle((await params).slug);
  if (!title) notFound();

  const related = titles
    .filter((t) => t.slug !== title.slug && t.genres.some((g) => title.genres.includes(g)))
    .slice(0, 4);

  return (
    <>
      <article className="mt-6 grid gap-8 sm:grid-cols-[220px_1fr] sm:gap-10">
        <Poster title={title} className="w-full max-w-[220px]" sizes="220px" preload />

        <div>
          <p className="text-sm text-muted">
            {title.type === "movie" ? "Movie" : "Series"} · {title.year} · {title.studio}
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">{title.name}</h1>

          <div className="mt-3 flex flex-wrap gap-2">
            {title.genres.map((g) => (
              <span key={g} className="rounded-full border border-line px-3 py-0.5 text-sm text-muted">
                {g}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-prose text-lg leading-relaxed">{title.summary}</p>

          <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="text-sm text-muted">Community</p>
              <p className="mt-1 text-2xl font-semibold">
                <span className="text-star">★</span> {title.score.toFixed(1)}
                <span className="text-base font-normal text-muted"> / 5</span>
              </p>
              <p className="mt-1 text-sm text-muted">{title.votes.toLocaleString("en-US")} ratings</p>
            </div>
            <div className="rounded-xl border border-line bg-surface p-4">
              <p className="mb-2 text-sm text-muted">Your rating</p>
              <StarRating slug={title.slug} />
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-xl font-semibold">You might also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
            {related.map((t) => (
              <TitleCard key={t.slug} title={t} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
