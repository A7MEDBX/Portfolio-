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
  metadataBase: new URL("https://ahmedragab.dev"),
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
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "RabbitMQ",
    "System Design",
    "APIs",
  ],
  authors: [{ name: "Ahmed Ragab", url: "https://ahmedragab.dev" }],
  creator: "Ahmed Ragab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedragab.dev",
    siteName: "Ahmed Ragab — Portfolio",
    title: "Ahmed Ragab — Backend Software Engineer",
    description:
      "Backend Software Engineer specialized in distributed systems, robust APIs, and scalable backend architecture.",
  },
  twitter: {
    card: "summary",
    title: "Ahmed Ragab — Backend Software Engineer",
    description:
      "Backend Software Engineer specialized in distributed systems, robust APIs, and scalable backend architecture.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
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
