import type { Metadata } from "next";
import { MyRatingsList } from "@/components/my-ratings-list";

export const metadata: Metadata = { title: "My ratings" };

export default function MyRatingsPage() {
  return (
    <>
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">My ratings</h1>
      <MyRatingsList />
    </>
  );
}
