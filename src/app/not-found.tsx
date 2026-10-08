import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Title not found</h1>
      <p className="mt-3 text-muted">We couldn&apos;t find what you were looking for.</p>
      <Link href="/" className="mt-6 inline-block font-medium text-accent hover:underline">
        ← Back to all titles
      </Link>
    </div>
  );
}
