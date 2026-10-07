"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Coins,
  Sparkles,
  Smartphone,
  CheckCircle2,
  Lock,
} from "lucide-react";

export function LostprojectArchitectureVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: Finder Mobile &amp; Backend Architecture
        </span>
        <span className="text-[#2D4A3E]">Mobile Client, API Gateway &amp; Storage Layers</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 820 300"
          className="w-full min-w-[720px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* CLIENT TIER */}
          <rect x="15" y="80" width="130" height="140" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="80" y="105" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Flutter Mobile App</text>
          <text x="80" y="122" textAnchor="middle" fill="#686868" fontSize="9.5">iOS &amp; Android Client</text>
          <path d="M25 130 L135 130" stroke="#E5E2DC" strokeWidth="1" />
          <text x="80" y="146" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Item Discovery UI</text>
          <text x="80" y="161" textAnchor="middle" fill="#686868" fontSize="8.5">KYC Identity Verify</text>
          <text x="80" y="176" textAnchor="middle" fill="#686868" fontSize="8.5">Real-time Chat Screen</text>
          <text x="80" y="191" textAnchor="middle" fill="#686868" fontSize="8.5">Points Wallet &amp; Payout</text>
          <text x="80" y="209" textAnchor="middle" fill="#2D4A3E" fontSize="8">Firebase Client SDK</text>

          {/* Client -> Firebase Auth (Top) */}
          <path d="M80 80 L80 45 L200 45" stroke="#2D4A3E" strokeWidth="1.2" strokeDasharray="3 3" />
          <polygon points="200,45 193,41 193,49" fill="#2D4A3E" />
          <text x="140" y="38" textAnchor="middle" fill="#686868" fontSize="8">ID Token</text>

          {/* FIREBASE AUTH */}
          <rect x="200" y="25" width="130" height="40" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="265" y="44" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Firebase Auth</text>
          <text x="265" y="56" textAnchor="middle" fill="#2D4A3E" fontSize="8">JWT Verification</text>

          {/* Client -> Node.js Backend */}
          <path d="M145 150 L200 150" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="200,150 193,146 193,154" fill="#2D4A3E" />
          <text x="172" y="142" textAnchor="middle" fill="#686868" fontSize="8">HTTPS / REST</text>

          {/* Client -> WebSockets (Chat) */}
          <path d="M145 175 L200 175" stroke="#2D4A3E" strokeWidth="1.2" strokeDasharray="2 2" />
          <polygon points="200,175 193,171 193,179" fill="#2D4A3E" />
          <text x="172" y="188" textAnchor="middle" fill="#2D4A3E" fontSize="8">Socket.io</text>

          {/* NODE.JS / EXPRESS BACKEND */}
          <rect x="200" y="90" width="170" height="175" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="285" y="115" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Node.js / Express API</text>
          <text x="285" y="130" textAnchor="middle" fill="#2D4A3E" fontSize="9">Core Application Logic</text>
          <path d="M215 138 L355 138" stroke="#E5E2DC" strokeWidth="1" />
          <text x="285" y="153" textAnchor="middle" fill="#686868" fontSize="8.5">Auth Middleware (Token Check)</text>
          <text x="285" y="168" textAnchor="middle" fill="#686868" fontSize="8.5">KYC &amp; National ID Validator</text>
          <text x="285" y="183" textAnchor="middle" fill="#686868" fontSize="8.5">Hybrid Matching Router</text>
          <text x="285" y="198" textAnchor="middle" fill="#686868" fontSize="8.5">Points Ledger &amp; Cash Out</text>
          <text x="285" y="213" textAnchor="middle" fill="#686868" fontSize="8.5">Cloudinary Signature Signer</text>
          <text x="285" y="228" textAnchor="middle" fill="#686868" fontSize="8.5">Unread Counter Syncer</text>
          <text x="285" y="248" textAnchor="middle" fill="#2D4A3E" fontSize="8">PostgreSQL Client / pg</text>

          {/* Backend -> Firebase Auth Verification */}
          <path d="M285 90 L285 65" stroke="#2D4A3E" strokeWidth="1.2" strokeDasharray="3 3" />

          {/* Backend -> Cloudinary (Media Upload) */}
          <path d="M370 120 L440 85" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,85 432,84 436,91" fill="#2D4A3E" />
          <text x="415" y="98" textAnchor="middle" fill="#686868" fontSize="8">Upload Sign</text>

          {/* CLOUDINARY MEDIA */}
          <rect x="440" y="55" width="140" height="55" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="510" y="75" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Cloudinary CDN</text>
          <text x="510" y="90" textAnchor="middle" fill="#686868" fontSize="8.5">Item &amp; ID Card Photos</text>
          <text x="510" y="102" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Signed Uploads &amp; HTTPS</text>

          {/* Backend -> Pinecone (Vectors) */}
          <path d="M370 180 L440 180" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,180 433,176 433,184" fill="#2D4A3E" />
          <text x="405" y="172" textAnchor="middle" fill="#686868" fontSize="8">Embeddings</text>

          {/* PINECONE VECTOR DB */}
          <rect x="440" y="150" width="140" height="60" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="510" y="172" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Pinecone Vector DB</text>
          <text x="510" y="188" textAnchor="middle" fill="#686868" fontSize="8.5">Cosine Similarity Index</text>
          <text x="510" y="200" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">AI Semantic Matching</text>

          {/* Backend -> PostgreSQL */}
          <path d="M370 235 L440 255" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="440,255 432,251 435,258" fill="#2D4A3E" />
          <text x="410" y="240" textAnchor="middle" fill="#686868" fontSize="8">Relational</text>

          {/* POSTGRESQL DATABASE */}
          <rect x="440" y="230" width="140" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="510" y="252" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10.5">PostgreSQL</text>
          <text x="510" y="267" textAnchor="middle" fill="#686868" fontSize="8.5">Users, Items, Claims, Wallet</text>
          <text x="510" y="280" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">ACID Transactions &amp; Foreign Keys</text>

          {/* MATCHING RESULTS COMBINER */}
          <rect x="620" y="140" width="180" height="110" rx="3" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="710" y="165" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Hybrid Matching Flow</text>
          <path d="M635 175 L785 175" stroke="#E5E2DC" strokeWidth="1" />
          <text x="710" y="192" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">1. SQL Category &amp; Date Filter</text>
          <text x="710" y="207" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">2. Pinecone Vector Similarity</text>
          <text x="710" y="222" textAnchor="middle" fill="#686868" fontSize="8.5">3. Combined Confidence Score</text>
          <text x="710" y="238" textAnchor="middle" fill="#686868" fontSize="8">4. Candidate Match Alert</text>

          {/* Links from Pinecone and PostgreSQL to Match Flow */}
          <path d="M580 180 L620 180" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="620,180 613,176 613,184" fill="#2D4A3E" />
          <path d="M580 260 L600 260 L600 220 L620 220" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="620,220 613,216 613,224" fill="#2D4A3E" />
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        Complete system flow: Flutter client authenticates via Firebase, calls Node.js/Express REST and Socket.io endpoints, persists relational state in PostgreSQL, stores images on Cloudinary, and queries Pinecone for vector item matching.
      </p>
    </figure>
  );
}

export function LostprojectMatchingFlowVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-3 border-b border-[#E5E2DC] pb-2 flex items-center justify-between">
        <span className="font-semibold text-[#222222]">
          Figure 2: Hybrid Matching &amp; Verification Workflow
        </span>
        <span className="text-[#2D4A3E]">Candidate Correlation Logic</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 740 90"
          className="w-full min-w-[620px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Step 1: Lost Item Posted */}
          <rect x="10" y="15" width="130" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="75" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">1. User Post</text>
          <text x="75" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Category, Time, City</text>
          <text x="75" y="65" textAnchor="middle" fill="#2D4A3E" fontSize="8">Text Description</text>

          <path d="M140 45 L180 45" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="180,45 173,41 173,49" fill="#2D4A3E" />

          {/* Step 2: Hard Filters */}
          <rect x="180" y="15" width="135" height="60" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="247" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">2. Hard Filters</text>
          <text x="247" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">PostgreSQL SQL Query</text>
          <text x="247" y="65" textAnchor="middle" fill="#2D4A3E" fontSize="8">Same Category &amp; Date</text>

          <path d="M315 45 L355 45" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="355,45 348,41 348,49" fill="#2D4A3E" />

          {/* Step 3: Vector Embeddings */}
          <rect x="355" y="15" width="140" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="425" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">3. Vector Search</text>
          <text x="425" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Pinecone Embeddings</text>
          <text x="425" y="65" textAnchor="middle" fill="#2D4A3E" fontSize="8">Cosine Similarity &gt; 0.75</text>

          <path d="M495 45 L535 45" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="535,45 528,41 528,49" fill="#2D4A3E" />

          {/* Step 4: Verification & Match */}
          <rect x="535" y="15" width="195" height="60" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="632" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">4. Match Notification</text>
          <text x="632" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Claim Question &amp; In-App Chat</text>
          <text x="632" y="65" textAnchor="middle" fill="#2D4A3E" fontSize="8">Protected Contact Exchange</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-2 text-center">
        Hybrid matching stages: hard relational constraints eliminate geographically impossible items, while Pinecone semantic vectors rank synonym and textual description similarities.
      </p>
    </figure>
  );
}

interface ScreenshotItem {
  src: string;
  title: string;
  subtitle: string;
  category: string;
  badge: string;
  alt: string;
  caption: string;
  technicalDetails: string[];
}

export function FinderAppGallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const screenshots: ScreenshotItem[] = [
    {
      src: "/images/finder/finder-report-item.jpg",
      title: "Item Registration & AI Photo Input",
      subtitle: "Report Item Screen",
      category: "Discovery & Reporting",
      badge: "AI Image Matching",
      alt: "Finder mobile app Report Item screen showing photo capture prompt for AI matching, Lost and Found toggle, Wallet category selection, and privacy notice",
      caption:
        "The core property reporting interface. Users upload photographic evidence required for downstream computer vision feature extraction and vector embedding search. Features defensive input masking instructions cautioning users against exposing bank card numbers.",
      technicalDetails: [
        "Photo upload mandatory for automated AI image embedding extraction",
        "Deterministic category and location metadata indexing in PostgreSQL",
        "Client-side character count and input sanitization (max 140 chars description)",
        "Defensive UX notice preventing accidental disclosure of sensitive credentials",
      ],
    },
    {
      src: "/images/finder/finder-identity-verification.jpg",
      title: "14-Digit National ID KYC Verification",
      subtitle: "Identity Verification Screen",
      category: "Trust & Anti-Fraud",
      badge: "Egyptian KYC",
      alt: "Finder mobile app Identity Verification screen with 14-digit National ID input, phone number, National ID photo upload, and optional selfie",
      caption:
        "Rigorous identity verification workflow designed to prevent fraudulent claims and anonymous abuse. Captures the official 14-digit Egyptian National ID number, verified mobile number, and secure document photo upload.",
      technicalDetails: [
        "Strict 14-digit Egyptian National ID format and checksum validation",
        "Mandatory physical National ID card photograph upload via signed Cloudinary URL",
        "Optional liveness verification selfie to deter automated bot sybils",
        "Encrypted persistence protecting personal identification data at rest",
      ],
    },
    {
      src: "/images/finder/finder-verification-required.jpg",
      title: "Account Verification Guardrail",
      subtitle: "Authorization Checkpoint",
      category: "Security & Permissions",
      badge: "Defensive Gate",
      alt: "Finder mobile app Verification Required warning modal requiring identity verification prior to reporting items",
      caption:
        "Defensive access control barrier. Unverified accounts are strictly gated from creating item listings or initiating claim dialogues, ensuring platform-wide accountability before any community interaction occurs.",
      technicalDetails: [
        "JWT role and verification status claims evaluated at route boundary",
        "Modal interception preventing unauthorized POST requests to /api/items",
        "Deters throwaway scam accounts from spamming fake item reports",
        "Clear call-to-action seamlessly routing users directly into the KYC funnel",
      ],
    },
    {
      src: "/images/finder/finder-points-wallet.jpg",
      title: "Points Wallet & Cash Payout Rails",
      subtitle: "Rewards & Local FinTech",
      category: "Incentive Architecture",
      badge: "Vodafone Cash & InstaPay",
      alt: "Finder mobile app Points Wallet showing 3185 recovery points equal to 318.5 EGP cash value, and Cash Out options for Vodafone Cash, Orange Cash, Etisalat Cash, and InstaPay",
      caption:
        "Incentive ledger converting successful property return points into real-world currency (10 pts = 1 EGP). Integrates local Egyptian mobile cash rails: Vodafone Cash, Orange Cash, Etisalat Cash, and InstaPay for direct withdrawals.",
      technicalDetails: [
        "Double-entry transactional ledger tracking earned, pending, and redeemed points",
        "Fixed monetary conversion rate: 10 Recovery Points = 1.00 EGP cash value",
        "Tiered payout increments (500 pts / 50 EGP up to 2000 pts / 200 EGP)",
        "Direct payout endpoints integrated with Egyptian mobile wallets and InstaPay",
      ],
    },
    {
      src: "/images/finder/finder-settings-account.jpg",
      title: "User Settings & Theme Preferences",
      subtitle: "Account Configuration",
      category: "Profile & System",
      badge: "Account Management",
      alt: "Finder mobile app Settings screen with user profile header, Edit Profile, Verify Account, Change Password, Push Notifications toggle, and Light/Dark appearance selector",
      caption:
        "Centralized configuration hub for account management, password updates, verification status indicators, push notification toggles, and client appearance preferences (Light / Dark / System default).",
      technicalDetails: [
        "Authenticated user profile header with verified email display",
        "Real-time push notification registration via Firebase Cloud Messaging (FCM)",
        "Dynamic theme switching (Light / Dark mode / System Default)",
        "Direct entry points for KYC verification and credential modifications",
      ],
    },
  ];

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : screenshots.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIdx((prev) => (prev !== null && prev < screenshots.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, screenshots.length]);

  return (
    <section className="my-10 border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E5E2DC] pb-4 mb-6 gap-2">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium block mb-1">
            Authentic Application Documentation
          </span>
          <h2 className="font-serif text-2xl font-normal text-[#222222]">
            Finder App — Production Interface Gallery
          </h2>
          <p className="text-xs text-[#686868] mt-1 font-sans">
            Verified mobile screens illustrating AI item reporting, 14-digit Egyptian National ID verification, security guardrails, and mobile cash payouts.
          </p>
        </div>
        <span className="text-xs font-mono text-[#686868] bg-[#F4F1EA] px-2.5 py-1 rounded-xs border border-[#E5E2DC] shrink-0">
          5 Authenticated Screens
        </span>
      </div>

      {/* 5-Card Responsive Mobile Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {screenshots.map((item, idx) => (
          <div
            key={idx}
            className="group border border-[#E5E2DC] bg-white rounded-xs overflow-hidden flex flex-col transition-all hover:border-[#2D4A3E]/50 hover:shadow-sm"
          >
            {/* Phone Screen Frame with Aspect Ratio */}
            <div
              className="relative aspect-[9/19] bg-[#111111] cursor-pointer overflow-hidden"
              onClick={() => setSelectedIdx(idx)}
              title={`Click to inspect ${item.title}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-top group-hover:scale-102 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-[#FAF9F6]/95 backdrop-blur-xs text-[#222222] text-xs font-mono px-3 py-1.5 rounded-xs transition-opacity flex items-center gap-1.5 shadow-sm">
                  <Maximize2 className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span>Inspect UI</span>
                </span>
              </div>
            </div>

            {/* Content & Metadata */}
            <div className="p-3.5 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className="text-[#2D4A3E] font-medium">{item.category}</span>
                  <span className="text-[#686868]">Screen 0{idx + 1}</span>
                </div>
                <h3 className="font-serif text-sm font-medium text-[#222222] mb-1 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#686868] font-sans leading-relaxed line-clamp-3">
                  {item.caption}
                </p>
              </div>

              <div className="pt-2.5 mt-2.5 border-t border-[#E5E2DC]">
                <span className="text-[10px] font-mono text-[#2D4A3E] bg-[#EEF3F0] px-1.5 py-0.5 rounded-xs inline-block">
                  {item.badge}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#1A1A1A]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedIdx(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF9F6] border border-[#E5E2DC] rounded-xs overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 border border-[#E5E2DC] text-[#222222] hover:bg-[#EEF3F0] flex items-center justify-center transition-colors shadow-xs"
              onClick={() => setSelectedIdx(null)}
              aria-label="Close image modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left/Image Area: Vertical Mobile Device Presentation */}
            <div className="relative md:w-1/2 bg-[#0F0F0F] flex items-center justify-center p-4 sm:p-6 min-h-[380px] md:min-h-[580px]">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/19] rounded-md overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={screenshots[selectedIdx].src}
                  alt={screenshots[selectedIdx].alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>

              {/* Prev / Next overlay navigation */}
              <button
                type="button"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                onClick={() =>
                  setSelectedIdx(selectedIdx > 0 ? selectedIdx - 1 : screenshots.length - 1)
                }
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
                onClick={() =>
                  setSelectedIdx(selectedIdx < screenshots.length - 1 ? selectedIdx + 1 : 0)
                }
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right: Technical Explanation & Architectural Details */}
            <div className="md:w-1/2 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto bg-[#FAF9F6]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-2 pb-2 border-b border-[#E5E2DC]">
                  <span className="text-[#2D4A3E] font-medium">
                    {screenshots[selectedIdx].category}
                  </span>
                  <span className="text-[#686868]">
                    Screen {selectedIdx + 1} of {screenshots.length}
                  </span>
                </div>

                <span className="text-[11px] font-mono text-[#686868] uppercase tracking-wider block mb-1">
                  {screenshots[selectedIdx].subtitle}
                </span>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#222222] mb-3">
                  {screenshots[selectedIdx].title}
                </h3>

                <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed mb-5">
                  {screenshots[selectedIdx].caption}
                </p>

                <div className="border border-[#E5E2DC] bg-white p-4 rounded-xs mb-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium mb-2.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Technical &amp; Architectural Implementation</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-[#222222] font-sans">
                    {screenshots[selectedIdx].technicalDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Navigation Footer */}
              <div className="pt-3 border-t border-[#E5E2DC] flex items-center justify-between text-xs font-mono text-[#686868]">
                <span>Use keyboard ← / → to navigate</span>
                <span className="text-[#2D4A3E] font-medium bg-[#EEF3F0] px-2 py-0.5 rounded-xs">
                  {screenshots[selectedIdx].badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
