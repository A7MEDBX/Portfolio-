import React from "react";

export function AirzigzagArchitectureVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: Airzigzag Content Platform &amp; Web Architecture
        </span>
        <span className="text-[#2D4A3E]">Information Hierarchy &amp; Routing Topology</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 820 280"
          className="w-full min-w-[720px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* CLIENT VISITOR TIER */}
          <rect x="15" y="70" width="130" height="135" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="80" y="95" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Travel Visitors</text>
          <text x="80" y="112" textAnchor="middle" fill="#686868" fontSize="9.5">Desktop &amp; Mobile Web</text>
          <path d="M25 120 L135 120" stroke="#E5E2DC" strokeWidth="1" />
          <text x="80" y="136" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Destination Guides</text>
          <text x="80" y="151" textAnchor="middle" fill="#686868" fontSize="8.5">Quick Trip Finder</text>
          <text x="80" y="166" textAnchor="middle" fill="#686868" fontSize="8.5">International Journeys</text>
          <text x="80" y="181" textAnchor="middle" fill="#686868" fontSize="8.5">Blog &amp; Travel Advice</text>
          <text x="80" y="196" textAnchor="middle" fill="#2D4A3E" fontSize="8">Fluid Responsive UI</text>

          {/* Client -> Edge & Web Routing */}
          <path d="M145 135 L200 135" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="200,135 193,131 193,139" fill="#2D4A3E" />
          <text x="172" y="127" textAnchor="middle" fill="#686868" fontSize="8">HTTPS / CDN</text>

          {/* WEB ROUTING & CONTROLLERS */}
          <rect x="200" y="60" width="170" height="160" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="285" y="85" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Web Routing Layer</text>
          <text x="285" y="100" textAnchor="middle" fill="#2D4A3E" fontSize="9">URL Design &amp; Controller</text>
          <path d="M215 108 L355 108" stroke="#E5E2DC" strokeWidth="1" />
          <text x="285" y="123" textAnchor="middle" fill="#686868" fontSize="8.5">/destinations/[region]/[country]</text>
          <text x="285" y="138" textAnchor="middle" fill="#686868" fontSize="8.5">/quick-trip-finder</text>
          <text x="285" y="153" textAnchor="middle" fill="#686868" fontSize="8.5">/blog/[article-slug]</text>
          <text x="285" y="168" textAnchor="middle" fill="#686868" fontSize="8.5">SEO Meta Tags &amp; OpenGraph</text>
          <text x="285" y="183" textAnchor="middle" fill="#686868" fontSize="8.5">Redirect &amp; Canonical Rules</text>
          <text x="285" y="205" textAnchor="middle" fill="#2D4A3E" fontSize="8">Responsive Rendering</text>

          {/* Routing -> Quick Trip Finder Module (Top) */}
          <path d="M370 100 L440 60" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,60 432,60 436,67" fill="#2D4A3E" />
          <text x="415" y="73" textAnchor="middle" fill="#686868" fontSize="8">Trip Query</text>

          {/* QUICK TRIP FINDER MODULE */}
          <rect x="440" y="30" width="160" height="65" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="520" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Quick Trip Finder Engine</text>
          <text x="520" y="67" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Multi-Attribute Filter</text>
          <text x="520" y="80" textAnchor="middle" fill="#686868" fontSize="7.5">Budget, Season, Duration, Style</text>

          {/* Routing -> Content Taxonomies (Middle) */}
          <path d="M370 140 L440 140" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,140 433,136 433,144" fill="#2D4A3E" />
          <text x="405" y="132" textAnchor="middle" fill="#686868" fontSize="8">Content</text>

          {/* DESTINATION CONTENT STRUCTURE */}
          <rect x="440" y="110" width="160" height="70" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="520" y="132" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Destination Taxonomy</text>
          <text x="520" y="148" textAnchor="middle" fill="#686868" fontSize="8.5">Continents &rarr; Countries &rarr; Cities</text>
          <text x="520" y="162" textAnchor="middle" fill="#2D4A3E" fontSize="8">Travel Itineraries &amp; Logistics</text>

          {/* Routing -> Blog / Content System (Bottom) */}
          <path d="M370 180 L440 215" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,215 432,211 436,218" fill="#2D4A3E" />
          <text x="410" y="202" textAnchor="middle" fill="#686868" fontSize="8">Articles</text>

          {/* BLOG & EDITORIAL GUIDES */}
          <rect x="440" y="195" width="160" height="60" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="520" y="217" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Blog &amp; Editorial Guides</text>
          <text x="520" y="232" textAnchor="middle" fill="#686868" fontSize="8.5">Rich Text &amp; Photography</text>
          <text x="520" y="245" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Reading Times &amp; Meta</text>

          {/* Modules -> Data Layer */}
          <path d="M600 62 L650 110" stroke="#2D4A3E" strokeWidth="1.2" />
          <path d="M600 145 L650 145" stroke="#2D4A3E" strokeWidth="1.2" />
          <path d="M600 225 L650 180" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="650,145 643,141 643,149" fill="#2D4A3E" />

          {/* DATA STORAGE & ASSET PIPELINE */}
          <rect x="650" y="90" width="155" height="110" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="727" y="115" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Data &amp; Asset Layer</text>
          <path d="M660 125 L795 125" stroke="#E5E2DC" strokeWidth="1" />
          <text x="727" y="142" textAnchor="middle" fill="#686868" fontSize="8.5">Structured Content Store</text>
          <text x="727" y="157" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Optimized Image CDN</text>
          <text x="727" y="172" textAnchor="middle" fill="#686868" fontSize="8.5">Client &amp; Edge Query Cache</text>
          <text x="727" y="188" textAnchor="middle" fill="#686868" fontSize="7.5">Fast First Contentful Paint</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        Component topology: Web routing directs requests through SEO metadata and clean URL structures, interfacing with the Quick Trip Finder, destination taxonomy, and cached editorial storage.
      </p>
    </figure>
  );
}

export function AirzigzagUserJourneyVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-3 border-b border-[#E5E2DC] pb-2 flex items-center justify-between">
        <span className="font-semibold text-[#222222]">
          Figure 2: Key Travel User Journeys
        </span>
        <span className="text-[#2D4A3E]">Discovery &amp; Filtering Flows</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 740 90"
          className="w-full min-w-[620px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Journey 1: Geographic Discovery */}
          <rect x="10" y="15" width="220" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="120" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">1. Geographic Exploration</text>
          <text x="120" y="50" textAnchor="middle" fill="#686868" fontSize="8.5">Browse Continent &rarr; Country &rarr; City</text>
          <text x="120" y="64" textAnchor="middle" fill="#2D4A3E" fontSize="8">Canonical Hierarchical URLs</text>

          {/* Journey 2: Quick Trip Finder */}
          <rect x="260" y="15" width="220" height="60" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="370" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">2. Quick Trip Finder</text>
          <text x="370" y="50" textAnchor="middle" fill="#686868" fontSize="8.5">Select Budget, Style &amp; Season</text>
          <text x="370" y="64" textAnchor="middle" fill="#2D4A3E" fontSize="8">Instant Attribute Query Matching</text>

          {/* Journey 3: Editorial Guides */}
          <rect x="510" y="15" width="220" height="60" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="620" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">3. In-Depth Travel Guides</text>
          <text x="620" y="50" textAnchor="middle" fill="#686868" fontSize="8.5">Read Itineraries, Visas &amp; Transit</text>
          <text x="620" y="64" textAnchor="middle" fill="#686868" fontSize="8">Responsive Editorial Typography</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-2 text-center">
        User journeys emphasize structured geographic exploration, interactive criteria filtering via the Quick Trip Finder, and deep editorial content reading.
      </p>
    </figure>
  );
}
