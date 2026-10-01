"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";

export function ContactInteractive() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    if (siteConfig.phone) {
      navigator.clipboard.writeText(siteConfig.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const whatsappUrl = siteConfig.phone
    ? `https://wa.me/2${siteConfig.phone}?text=${encodeURIComponent(
        "Hello Ahmed, I came across your portfolio and would like to connect."
      )}`
    : "#";

  return (
    <div className="space-y-6">
      {/* 1. Profile & Availability Header Card */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-[#E5E2DC]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium">
                Direct Contact Profile
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#222222] font-normal">
              {siteConfig.name}
            </h2>
            <p className="text-sm text-[#686868] mt-1 font-sans">
              {siteConfig.role}
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 shrink-0">
            {/* Open for Work Status Badge */}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#2D4A3E] bg-[#EEF3F0] border border-[#2D4A3E]/25 px-2.5 py-1 rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#2D4A3E] animate-pulse" />
              {siteConfig.availability || "Open for Work"}
            </span>

            {/* Location Badge */}
            <span className="inline-flex items-center gap-1 text-xs font-mono text-[#686868] bg-white border border-[#E5E2DC] px-2 py-0.5 rounded-xs">
              <MapPin className="w-3 h-3 text-[#2D4A3E]" />
              {siteConfig.location}
            </span>
          </div>
        </div>

        <p className="text-xs text-[#686868] leading-relaxed pt-4 font-sans">
          I am actively exploring full-time backend software engineering positions, distributed systems design opportunities, and technical consulting engagements. Reach out directly through any of the verified channels below.
        </p>
      </div>

      {/* 2. Primary Channel: Electronic Mail */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E2DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#222222]">
                Electronic Mail
              </h3>
              <span className="text-[11px] font-mono text-[#686868]">
                Primary Asynchronous Channel
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-wider text-[#2D4A3E] bg-[#EEF3F0] px-2 py-0.5 rounded-xs border border-[#2D4A3E]/20">
            Recommended
          </span>
        </div>

        <div className="bg-white border border-[#E5E2DC] p-4 rounded-xs mb-4">
          <span className="text-[11px] font-mono text-[#686868] uppercase tracking-wider block mb-1">
            Email Address
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-base sm:text-lg font-mono font-medium text-[#222222] hover:text-[#2D4A3E] hover:underline underline-offset-4 break-all block"
          >
            {siteConfig.email}
          </a>
        </div>

        <p className="text-xs text-[#686868] leading-relaxed mb-5 font-sans">
          Best suited for project specifications, technical inquiries, job opportunities, and formal proposals. Inquiries typically receive a comprehensive reply within 24 hours.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-4 py-2.5 text-xs font-medium rounded-xs transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Compose Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 border border-[#E5E2DC] bg-white hover:bg-[#FAF9F6] text-[#222222] px-4 py-2.5 text-xs font-medium rounded-xs transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#686868]" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 3. Direct Line: Phone & WhatsApp */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E2DC]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#222222]">
                Direct Line & WhatsApp
              </h3>
              <span className="text-[11px] font-mono text-[#686868]">
                Voice Calls & Instant Messaging
              </span>
            </div>
          </div>

          <span className="text-[10px] font-mono uppercase tracking-wider text-[#686868] bg-[#F4F1EA] px-2 py-0.5 rounded-xs border border-[#E5E2DC]">
            Direct
          </span>
        </div>

        <div className="bg-white border border-[#E5E2DC] p-4 rounded-xs mb-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <span className="text-[11px] font-mono text-[#686868] uppercase tracking-wider">
              Phone Number
            </span>
            <span className="text-[11px] font-mono text-[#686868]">
              International: {siteConfig.phoneFormatted || "+20 100 718 4732"}
            </span>
          </div>
          <a
            href={`tel:${siteConfig.phone || "01007184732"}`}
            className="text-lg sm:text-xl font-mono font-medium text-[#222222] hover:text-[#2D4A3E] hover:underline underline-offset-4 mt-1 block"
          >
            {siteConfig.phone || "01007184732"}
          </a>
        </div>

        <p className="text-xs text-[#686868] leading-relaxed mb-5 font-sans">
          Direct line for technical recruiting screenings, immediate coordination, voice calls, or WhatsApp text conversations.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${siteConfig.phone || "01007184732"}`}
            className="inline-flex items-center gap-2 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-4 py-2.5 text-xs font-medium rounded-xs transition-colors shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {siteConfig.phone}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[#2D4A3E]/30 bg-[#EEF3F0] hover:bg-[#E3ECE7] text-[#2D4A3E] px-4 py-2.5 text-xs font-medium rounded-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
            <ExternalLink className="w-3 h-3 text-[#2D4A3E]/70" />
          </a>

          <button
            type="button"
            onClick={handleCopyPhone}
            className="inline-flex items-center gap-1.5 border border-[#E5E2DC] bg-white hover:bg-[#FAF9F6] text-[#222222] px-4 py-2.5 text-xs font-medium rounded-xs transition-colors cursor-pointer"
          >
            {copiedPhone ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#686868]" />
                <span>Copy Number</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* 4. Professional & Code Profiles Card */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
        <h3 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-3">
          Engineering & Professional Profiles
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* GitHub */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            className="group p-4 bg-white border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#FAF9F6] rounded-xs transition-all block"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-[#686868] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#2D4A3E] fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <span>Code Repositories</span>
              </span>
              <ExternalLink className="w-3 h-3 text-[#686868] group-hover:text-[#2D4A3E] transition-colors" />
            </div>
            <div className="font-mono text-sm font-medium text-[#222222] group-hover:text-[#2D4A3E] transition-colors">
              GitHub Profile
            </div>
            <p className="text-[11px] text-[#686868] mt-1 font-sans">
              Inspect repositories, architecture implementations, and git commits.
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="group p-4 bg-white border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#FAF9F6] rounded-xs transition-all block"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono text-[#686868] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#2D4A3E] fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
                <span>Professional Network</span>
              </span>
              <ExternalLink className="w-3 h-3 text-[#686868] group-hover:text-[#2D4A3E] transition-colors" />
            </div>
            <div className="font-mono text-sm font-medium text-[#222222] group-hover:text-[#2D4A3E] transition-colors">
              LinkedIn Profile
            </div>
            <p className="text-[11px] text-[#686868] mt-1 font-sans">
              Connect professionally, review network updates, and explore background.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
