import React from "react";
import Image from "next/image";
import { ExternalLink, Play, Globe, Video, Image as ImageIcon } from "lucide-react";

export function IEEEAswanArchitectureVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: IEEE Aswan MERN Architecture &amp; Cross-Cutting Services
        </span>
        <span className="text-[#2D4A3E]">Full-Stack Web Platform Topology</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 820 330"
          className="w-full min-w-[720px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* CLIENT / FRONTEND TIER */}
          <rect x="20" y="70" width="180" height="190" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="110" y="96" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Frontend Client Layer</text>
          <text x="110" y="112" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">React + Vite SPA</text>
          <path d="M35 122 L185 122" stroke="#E5E2DC" strokeWidth="1" />
          
          <rect x="35" y="132" width="150" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="110" y="148" textAnchor="middle" fill="#222222" fontSize="9">Public Pages &amp; Events</text>
          
          <rect x="35" y="162" width="150" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="110" y="178" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Framer Motion Transitions</text>
          
          <rect x="35" y="192" width="150" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="110" y="208" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Recharts Analytics Views</text>
          
          <text x="110" y="235" textAnchor="middle" fill="#686868" fontSize="8.5">Admin &amp; Board Dashboards</text>
          <text x="110" y="250" textAnchor="middle" fill="#686868" fontSize="8">Client Session State</text>

          {/* Client -> Backend Arrow */}
          <path d="M200 165 L290 165" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="290,165 283,161 283,169" fill="#2D4A3E" />
          <text x="245" y="156" textAnchor="middle" fill="#686868" fontSize="8">REST / HTTPS</text>
          <text x="245" y="180" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Bearer JWT</text>

          {/* BACKEND API TIER */}
          <rect x="290" y="55" width="230" height="220" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="405" y="80" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Backend Application Server</text>
          <text x="405" y="96" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">Node.js + Express.js API</text>
          <path d="M305 106 L505 106" stroke="#E5E2DC" strokeWidth="1" />

          {/* Middleware Pipeline Inside Backend */}
          <rect x="305" y="116" width="200" height="26" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="405" y="133" textAnchor="middle" fill="#222222" fontSize="8.5">Rate Limiting &amp; Input Sanitization</text>

          <rect x="305" y="148" width="200" height="26" rx="2" fill="#F5F3EE" stroke="#E5E2DC" />
          <text x="405" y="165" textAnchor="middle" fill="#222222" fontSize="8.5">Secure HTTP Headers (Helmet)</text>

          <rect x="305" y="180" width="200" height="26" rx="2" fill="#F5F3EE" stroke="#2D4A3E" />
          <text x="405" y="197" textAnchor="middle" fill="#2D4A3E" fontWeight="600" fontSize="8.5">JWT Auth &amp; RBAC Verification</text>

          <rect x="305" y="212" width="200" height="26" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="405" y="229" textAnchor="middle" fill="#686868" fontSize="8.5">Event, Form, Media &amp; Archive Services</text>

          <text x="405" y="258" textAnchor="middle" fill="#686868" fontSize="8">Structured JSON API Responses</text>

          {/* Backend -> Database Arrow */}
          <path d="M520 165 L610 165" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="610,165 603,161 603,169" fill="#2D4A3E" />
          <text x="565" y="156" textAnchor="middle" fill="#686868" fontSize="8">Mongoose ODM</text>
          <text x="565" y="180" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">BSON Storage</text>

          {/* PERSISTENCE TIER */}
          <rect x="610" y="70" width="190" height="190" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="705" y="96" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Persistence Layer</text>
          <text x="705" y="112" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">MongoDB Database</text>
          <path d="M625 122 L785 122" stroke="#E5E2DC" strokeWidth="1" />

          <rect x="625" y="132" width="160" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="705" y="148" textAnchor="middle" fill="#222222" fontSize="8.5">Events &amp; Registrations</text>

          <rect x="625" y="162" width="160" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="705" y="178" textAnchor="middle" fill="#222222" fontSize="8.5">Inquiries &amp; Contact Data</text>

          <rect x="625" y="192" width="160" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="705" y="208" textAnchor="middle" fill="#222222" fontSize="8.5">Members &amp; Branch Archives</text>

          <text x="705" y="235" textAnchor="middle" fill="#686868" fontSize="8.5">Media Gallery &amp; Sponsors</text>
          <text x="705" y="250" textAnchor="middle" fill="#2D4A3E" fontSize="8">Document Indexes</text>

          {/* CROSS-CUTTING CONCERNS CALLOUT (BOTTOM BAR) */}
          <rect x="20" y="288" width="780" height="32" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1" strokeDasharray="4 2" />
          <text x="410" y="308" textAnchor="middle" fill="#2D4A3E" fontWeight="600" fontSize="9">
            Cross-Cutting Concerns: JWT Authentication • Role-Based Access Control (Admin / Board / Member) • Rate Limiting &amp; Input Sanitization
          </text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        MERN platform architecture: React/Vite client interfaces with Node.js/Express.js backend endpoints, secured by cross-cutting JWT verification and rate limiting, persisting data into MongoDB collections.
      </p>
    </figure>
  );
}

export function IEEEAswanPlaceholderVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs space-y-6">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Visual Presentation &amp; Application Showcase
        </span>
        <span className="text-[#2D4A3E]">Verified Video &amp; Interface Preview</span>
      </figcaption>

      {/* 1. Authentic Video Demonstration Card */}
      <div className="border border-[#E5E2DC] bg-white rounded-xs overflow-hidden">
        <div className="relative aspect-16/9 bg-[#1A1A1A] group">
          <Image
            src="/images/website/website-launch-thumbnail.jpg"
            alt="IEEE Aswan Student Branch Website Launch Announcement Video Preview"
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="object-cover group-hover:scale-101 transition-transform duration-200"
          />
          <a
            href="https://www.linkedin.com/posts/mahmoud-ayman-ez_ieee-ieeeaswan-webdevelopment-ugcPost-7445887604815765504-G8Lp/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-black/35 hover:bg-black/45 transition-colors flex flex-col items-center justify-center p-6 text-center group"
            title="Watch full launch demonstration on LinkedIn (No auto-play)"
          >
            <div className="w-14 h-14 rounded-full bg-[#FAF9F6]/95 text-[#2D4A3E] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
              <Play className="w-6 h-6 fill-current ml-0.5" />
            </div>
            <span className="text-white font-serif text-base sm:text-lg font-medium drop-shadow-sm">
              Watch Website Launch &amp; Feature Walkthrough
            </span>
            <span className="text-white/80 text-xs font-mono mt-1 flex items-center gap-1.5">
              <Video className="w-3.5 h-3.5" />
              <span>Full Video on LinkedIn • 16:9 HD</span>
            </span>
          </a>
        </div>

        <div className="p-4 sm:p-5 bg-[#FAF9F6] border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-mono text-[#2D4A3E] uppercase tracking-wider block mb-0.5">
              Live Production Deployment
            </span>
            <p className="text-[#222222] font-medium font-sans">
              The platform is actively live and serving the IEEE Aswan community at{" "}
              <a
                href="https://ieeeasw.dev"
                target="_blank"
                rel="noopener noreferrer"
                title="IEEE Aswan Student Branch Platform"
                className="text-[#2D4A3E] hover:underline underline-offset-4 font-mono font-normal inline-flex items-center gap-1"
              >
                <span>ieeeasw.dev</span>
                <Globe className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>

          <a
            href="https://ieeeasw.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-3.5 py-2 rounded-xs font-medium transition-colors shrink-0"
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Clearly marked neutral placeholder for administrative screenshots */}
      <div className="border border-dashed border-[#CDC8BE] bg-[#F7F5F0] rounded-xs p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#686868] mb-1">
          <ImageIcon className="w-4 h-4 text-[#2D4A3E]" />
          <span className="uppercase tracking-widest text-[#2D4A3E] font-medium">
            Administrative UI Captures
          </span>
        </div>
        <p className="text-xs text-[#686868] max-w-lg mx-auto leading-relaxed">
          High-resolution internal captures of the role-based administrative review dashboard and Recharts attendance analytics will be added following authorized media exports, preserving authentic representation.
        </p>
      </div>
    </figure>
  );
}
