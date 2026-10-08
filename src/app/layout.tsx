import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Aniate — rate animated series & movies", template: "%s · Aniate" },
  description: "A simple place to discover and rate animated TV series and movies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-bg font-sans text-fg">
        <header className="border-b border-line">
          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              ani<span className="text-accent">ate</span>
            </Link>
            <div className="flex gap-6 text-sm text-muted">
              <Link href="/" className="hover:text-fg">
                Browse
              </Link>
              <Link href="/my-ratings" className="hover:text-fg">
                My ratings
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 pb-10 text-sm text-muted sm:px-6">
          Aniate · Your ratings are saved in this browser.
        </footer>
      </body>
    </html>
  );
}
