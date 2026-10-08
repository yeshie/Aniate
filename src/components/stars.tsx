"use client";

import { useState } from "react";
import { setRating, useRatings } from "@/lib/ratings";

const LABELS = ["", "Didn't like it", "It was okay", "Liked it", "Really liked it", "Loved it"];

/** Interactive 1–5 star rating for one title, saved in this browser. */
export function StarRating({ slug }: { slug: string }) {
  const mine = useRatings()[slug] ?? 0;
  const [hover, setHover] = useState(0);
  const shown = hover || mine;

  return (
    <div>
      <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)} role="radiogroup" aria-label="Your rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={mine === n}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            onMouseEnter={() => setHover(n)}
            onClick={() => setRating(slug, mine === n ? 0 : n)}
            className={`text-3xl leading-none transition-transform hover:scale-110 ${n <= shown ? "text-star" : "text-line"}`}
          >
            ★
          </button>
        ))}
      </div>
      <p className="mt-2 h-5 text-sm text-muted">
        {shown ? LABELS[shown] : "Tap a star to rate"}
        {mine > 0 && !hover && (
          <button type="button" onClick={() => setRating(slug, 0)} className="ml-3 underline underline-offset-2 hover:text-fg">
            Clear
          </button>
        )}
      </p>
    </div>
  );
}

/** Small read-only badge showing your rating, if any. */
export function MyRating({ slug }: { slug: string }) {
  const mine = useRatings()[slug];
  if (!mine) return null;
  return <span className="text-accent">You ★ {mine}</span>;
}
