import React from "react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "./Container";
import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#E5E2DC] bg-[#FAF9F6] py-12 text-sm text-[#686868]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Identity & Copyright */}
          <div>
            <div className="flex items-center gap-2">
              <p className="font-serif text-[#222222] font-medium text-base">
                {siteConfig.name}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#2D4A3E] bg-[#EEF3F0] px-1.5 py-0.5 rounded-xs border border-[#2D4A3E]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] animate-pulse" />
                {siteConfig.availability || "Open for Work"}
              </span>
            </div>
            <p className="text-xs text-[#686868] mt-1 font-sans">
              {siteConfig.role} — Based in {siteConfig.location}
            </p>
            <p className="text-xs text-[#686868]/80 font-mono mt-2">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Links: GitHub */}
          <div className="flex items-center gap-6 text-xs font-mono">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="flex items-center gap-1.5 text-[#686868] hover:text-[#222222] transition-colors"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3 h-3 text-[#686868]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
