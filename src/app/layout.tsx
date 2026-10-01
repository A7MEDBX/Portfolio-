import type { Metadata } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const serifFont = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s — Ahmed Ragab",
    default: "Ahmed Ragab — Backend Software Engineer",
  },
  description:
    "Backend Software Engineer specialized in distributed systems, robust APIs, and scalable backend architecture.",
  keywords: [
    "Ahmed Ragab",
    "Backend Software Engineer",
    "Distributed Systems",
    "Go",
    "Python",
    "PostgreSQL",
    "System Design",
    "APIs",
  ],
  authors: [{ name: "Ahmed Ragab" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${monoFont.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-[#DDE7E1] selection:text-[#172B23]">
        <Navbar />
        <main className="flex-1 py-10 md:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
