import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "./Container";
import { ExternalLink, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[#E5E2DC] bg-[#FAF9F6] py-12 text-sm text-[#686868]">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Identity & Copyright */}
          <div>
            <p className="font-serif text-[#222222] font-medium text-base">
              {siteConfig.name}
            </p>
            <p className="text-xs text-[#686868] mt-1 font-sans">
              {siteConfig.role} — Editorial portfolio & engineering case studies.
            </p>
            <p className="text-xs text-[#686868]/80 font-mono mt-2">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-xs font-mono">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-[#222222] hover:text-[#2D4A3E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#686868]" aria-hidden="true" />
              <span>{siteConfig.email}</span>
            </Link>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#686868] hover:text-[#222222] transition-colors"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#686868]" aria-hidden="true" />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#686868] hover:text-[#222222] transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3 text-[#686868]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
