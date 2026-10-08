"use client";

import { useState } from "react";
import { titles, type Title, type TitleType } from "@/data/titles";
import { TitleCard } from "./title-card";

const FILTERS: { value: TitleType | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "series", label: "Series" },
  { value: "movie", label: "Movies" },
];

const SORTS = {
  top: { label: "Top rated", fn: (a: Title, b: Title) => b.score - a.score || b.votes - a.votes },
  new: { label: "Newest", fn: (a: Title, b: Title) => b.year - a.year },
  az: { label: "A–Z", fn: (a: Title, b: Title) => a.name.localeCompare(b.name) },
};

export function Browser() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<TitleType | "all">("all");
  const [sort, setSort] = useState<keyof typeof SORTS>("top");

  const q = query.trim().toLowerCase();
  const list = titles
    .filter((t) => type === "all" || t.type === type)
    .filter((t) => !q || [t.name, t.studio, ...t.genres].some((s) => s.toLowerCase().includes(q)))
    .sort(SORTS[sort].fn);

  return (
    <section>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search titles, studios, genres…"
          aria-label="Search"
          className="h-10 flex-1 rounded-lg border border-line bg-surface px-3 outline-none placeholder:text-muted focus:border-accent"
        />
        <div className="flex gap-3">
          <div className="flex rounded-lg border border-line bg-surface p-1">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setType(f.value)}
                aria-pressed={type === f.value}
                className={`rounded-md px-3 py-1 text-sm ${type === f.value ? "bg-fg text-bg" : "text-muted hover:text-fg"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as keyof typeof SORTS)}
            aria-label="Sort"
            className="h-10 rounded-lg border border-line bg-surface px-2 text-sm"
          >
            {Object.entries(SORTS).map(([key, s]) => (
              <option key={key} value={key}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {list.length ? (
        <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {list.map((t) => (
            <TitleCard key={t.slug} title={t} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted">No titles match “{query}”.</p>
      )}
    </section>
  );
}
