import { Browser } from "@/components/browser";

export default function Home() {
  return (
    <>
      <div className="mb-10 max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Rate the animation you love.</h1>
        <p className="mt-3 text-lg text-muted">
          Series and movies, from Ghibli classics to new favourites. Pick a title and give it a few stars.
        </p>
      </div>
      <Browser />
    </>
  );
}
