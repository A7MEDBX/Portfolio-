"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, Menu, X } from "lucide-react";
import { Container } from "./Container";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-xs border-b border-[#E5E2DC]">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Brand Name & Availability */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="group flex items-baseline gap-2 text-[#222222] hover:text-[#2D4A3E] transition-colors"
            >
              <span className="font-serif text-lg tracking-tight font-medium">
                {siteConfig.name}
              </span>
              <span className="hidden sm:inline text-xs font-mono text-[#686868] font-normal">
                / Backend Engineer
              </span>
            </Link>

            <span className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-mono font-medium text-[#2D4A3E] bg-[#EEF3F0] border border-[#2D4A3E]/20 px-2 py-0.5 rounded-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] animate-pulse" />
              Open for Work
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-6 text-sm"
          >
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 relative ${
                    active
                      ? "text-[#222222] font-medium"
                      : "text-[#686868] hover:text-[#222222]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2D4A3E]" />
                  )}
                </Link>
              );
            })}

            {/* Subtle GitHub External Link */}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#686868] hover:text-[#222222] transition-colors flex items-center gap-1.5 text-xs font-mono pl-3 border-l border-[#E5E2DC]"
              title="GitHub Profile (Subtle external link)"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#686868]" aria-hidden="true" />
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="md:hidden p-2 text-[#222222] hover:text-[#2D4A3E] hover:bg-[#EEF3F0] rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-[#2D4A3E]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E2DC] bg-[#FAF9F6] px-6 py-5 shadow-xs">
          <nav className="flex flex-col space-y-3.5">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base transition-colors py-1 ${
                    active
                      ? "text-[#2D4A3E] font-medium"
                      : "text-[#686868] hover:text-[#222222]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#E5E2DC] mt-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-[#686868] hover:text-[#222222] flex items-center gap-2 py-1"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
