"use client";

import { useSyncExternalStore } from "react";

/** Your own ratings, stored in this browser: slug -> 1..5 stars. */
export type Ratings = Record<string, number>;

const KEY = "aniate:ratings";
const EMPTY: Ratings = {};
const listeners = new Set<() => void>();
let cache: Ratings | null = null;

function read(): Ratings {
  if (cache) return cache;
  try {
    cache = JSON.parse(localStorage.getItem(KEY) ?? "{}") as Ratings;
  } catch {
    cache = {};
  }
  return cache;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    cache = null;
    listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function setRating(slug: string, stars: number) {
  const next = { ...read() };
  if (stars > 0) next[slug] = stars;
  else delete next[slug];
  cache = next;
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode); keep the in-memory value.
  }
  listeners.forEach((l) => l());
}

export function useRatings() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}
