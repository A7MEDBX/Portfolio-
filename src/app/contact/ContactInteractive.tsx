"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Copy, Check, Mail, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/Button";

export function ContactInteractive() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subject || "Engineering Inquiry / Contact"
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className="space-y-8">
      {/* Primary Direct Contact Block */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs">
        <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-2">
          Direct Electronic Mail
        </span>
        <p className="font-serif text-2xl text-[#222222] mb-3">
          {siteConfig.email}
        </p>
        <p className="text-sm text-[#686868] mb-6 leading-relaxed">
          For technical inquiries, system design reviews, or backend opportunities, writing directly to my inbox ensures prompt and focused communication.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-4 py-2 text-sm font-medium rounded-xs transition-colors duration-150 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email Address</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 bg-[#FAF9F6] text-[#222222] border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#EEF3F0] px-4 py-2 text-sm font-medium rounded-xs transition-colors duration-150"
          >
            <Mail className="w-4 h-4 text-[#2D4A3E]" />
            <span>Open Email Client</span>
          </a>
        </div>
      </div>

      {/* Structured Email Drafter (Mailto composer - no fake backend API) */}
      <div className="border border-[#E5E2DC] bg-[#F7F5F0] p-6 sm:p-8 rounded-xs">
        <h3 className="font-serif text-xl text-[#222222] mb-2">
          Draft a Message
        </h3>
        <p className="text-xs text-[#686868] mb-6 font-sans">
          Prepare your inquiry below to trigger your default email client with structured fields:
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoLink;
          }}
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
            >
              Subject / Topic
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Backend Architecture Consultation"
              className="w-full border border-[#E5E2DC] bg-[#FAF9F6] px-3.5 py-2 text-sm text-[#222222] rounded-xs focus:outline-hidden focus:border-[#2D4A3E]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
            >
              Message Content
            </label>
            <textarea
              id="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Brief overview of your project, requirements, or inquiry..."
              className="w-full border border-[#E5E2DC] bg-[#FAF9F6] px-3.5 py-2 text-sm text-[#222222] rounded-xs focus:outline-hidden focus:border-[#2D4A3E] resize-none"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-4 py-2 text-sm font-medium rounded-xs transition-colors duration-150 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Launch Email Draft</span>
          </button>
        </form>
      </div>
    </div>
  );
}
