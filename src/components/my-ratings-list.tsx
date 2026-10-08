"use client";

import Link from "next/link";
import { titles } from "@/data/titles";
import { useRatings } from "@/lib/ratings";
import { TitleCard } from "./title-card";

export function MyRatingsList() {
  const ratings = useRatings();
  const rated = titles
    .filter((t) => ratings[t.slug])
    .sort((a, b) => ratings[b.slug] - ratings[a.slug] || a.name.localeCompare(b.name));

  if (!rated.length) {
    return (
      <div className="rounded-xl border border-dashed border-line p-10 text-center">
        <p className="text-muted">You haven&apos;t rated anything yet.</p>
        <Link href="/" className="mt-3 inline-block font-medium text-accent hover:underline">
          Browse titles →
        </Link>
      </div>
    );
  }

  const avg = rated.reduce((sum, t) => sum + ratings[t.slug], 0) / rated.length;

  return (
    <>
      <p className="text-muted">
        {rated.length} rated · your average <span className="text-star">★</span> {avg.toFixed(1)}
      </p>
      <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
        {rated.map((t) => (
          <TitleCard key={t.slug} title={t} />
        ))}
      </div>
    </>
  );
}
