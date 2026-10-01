import React from "react";

interface ProjectVisualPreviewProps {
  slug: string;
}

export function ProjectVisualPreview({ slug }: ProjectVisualPreviewProps) {
  if (slug === "samcs") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-4 sm:p-5 rounded-xs my-4 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-2 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
            SYSTEM PREVIEW: UART GATEWAY & TELEMETRY DISPATCH
          </span>
          <span className="text-[#2D4A3E] font-medium">REAL-TIME PIPELINE</span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 680 140"
            className="w-full min-w-[540px] text-xs font-mono"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Box 1: UART Hardware Gateway */}
            <rect x="10" y="25" width="130" height="90" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="75" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">UART Gateway</text>
            <text x="75" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Serial / Hardware</text>
            <text x="75" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">115200 Baud / CRC</text>
            <text x="75" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Train Sensor Feed</text>

            {/* Link 1 */}
            <path d="M140 70 L185 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="185,70 178,67 178,73" fill="#2D4A3E" />
            <text x="162" y="63" textAnchor="middle" fill="#686868" fontSize="8">Byte Stream</text>

            {/* Box 2: Event-Driven Processing */}
            <rect x="185" y="25" width="140" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="255" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Event Broker</text>
            <text x="255" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">State & Telemetry</text>
            <text x="255" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Packet Parser</text>
            <text x="255" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Collision Logic</text>

            {/* Split arrows to DB and WebSockets */}
            <path d="M325 55 L370 45" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="370,45 363,42 365,48" fill="#2D4A3E" />

            <path d="M325 85 L370 95" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="370,95 365,92 363,98" fill="#2D4A3E" />

            {/* Box 3A: WebSockets */}
            <rect x="370" y="15" width="135" height="52" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="437" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">WebSocket Service</text>
            <text x="437" y="52" textAnchor="middle" fill="#686868" fontSize="9">Sub-second Stream</text>

            {/* Box 3B: Database Persistence */}
            <rect x="370" y="75" width="135" height="52" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="437" y="96" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">DB Persistence</text>
            <text x="437" y="112" textAnchor="middle" fill="#686868" fontSize="9">PostgreSQL Logs</text>

            {/* Link to Operational Dashboard */}
            <path d="M505 41 L545 41" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="545,41 538,38 538,44" fill="#2D4A3E" />

            {/* Box 4: Control Room / Operations */}
            <rect x="545" y="25" width="125" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="607" y="55" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Control Center</text>
            <text x="607" y="73" textAnchor="middle" fill="#686868" fontSize="9">Fleet Supervisor</text>
            <text x="607" y="90" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Live Diagnostics</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "lostproject") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-4 sm:p-5 rounded-xs my-4 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-2 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
            SYSTEM PREVIEW: MOBILE BACKEND, MATCHING & MEDIA PIPELINE
          </span>
          <span className="text-[#2D4A3E] font-medium">CORE ARCHITECTURE</span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 680 140"
            className="w-full min-w-[540px] text-xs font-mono"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Box 1: Mobile App Clients */}
            <rect x="10" y="25" width="130" height="90" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="75" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Mobile Client</text>
            <text x="75" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">iOS & Android</text>
            <text x="75" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">JWT Auth / Session</text>
            <text x="75" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Profile & Claims</text>

            {/* Link 1 */}
            <path d="M140 70 L185 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="185,70 178,67 178,73" fill="#2D4A3E" />
            <text x="162" y="63" textAnchor="middle" fill="#686868" fontSize="8">REST / TLS</text>

            {/* Box 2: API Gateway & Service Core */}
            <rect x="185" y="25" width="145" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="257" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Backend API</text>
            <text x="257" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Profile Management</text>
            <text x="257" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Matching Engine</text>
            <text x="257" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Auth Middleware</text>

            {/* Split arrows to Chat and Media */}
            <path d="M330 55 L375 45" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,45 368,42 370,48" fill="#2D4A3E" />

            <path d="M330 85 L375 95" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,95 370,92 368,98" fill="#2D4A3E" />

            {/* Box 3A: Chat & Messaging */}
            <rect x="375" y="15" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="445" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Chat & Messaging</text>
            <text x="445" y="52" textAnchor="middle" fill="#686868" fontSize="9">Peer Communication</text>

            {/* Box 3B: Media Upload Pipeline */}
            <rect x="375" y="75" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="445" y="96" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Media Storage</text>
            <text x="445" y="112" textAnchor="middle" fill="#686868" fontSize="9">Upload Validation</text>

            {/* Link to Persistence */}
            <path d="M515 70 L555 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="555,70 548,67 548,73" fill="#2D4A3E" />

            {/* Box 4: Database & Search Storage */}
            <rect x="555" y="25" width="115" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="612" y="55" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Persistence</text>
            <text x="612" y="73" textAnchor="middle" fill="#686868" fontSize="9">PostgreSQL DB</text>
            <text x="612" y="90" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Search Indexes</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "airzigzag") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-4 sm:p-5 rounded-xs my-4 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-2 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
            SYSTEM PREVIEW: TRAVEL CONTENT PLATFORM & WEB ARCHITECTURE
          </span>
          <span className="text-[#2D4A3E] font-medium">CONTENT PIPELINE</span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 680 140"
            className="w-full min-w-[540px] text-xs font-mono"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Box 1: Web Visitors / Clients */}
            <rect x="10" y="25" width="130" height="90" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="75" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Web Client</text>
            <text x="75" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Responsive Platform</text>
            <text x="75" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Fast Navigation</text>
            <text x="75" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Travel Guides UI</text>

            {/* Link 1 */}
            <path d="M140 70 L185 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="185,70 178,67 178,73" fill="#2D4A3E" />
            <text x="162" y="63" textAnchor="middle" fill="#686868" fontSize="8">HTTP / CDN</text>

            {/* Box 2: Platform Architecture & Routing */}
            <rect x="185" y="25" width="145" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="257" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Web Routing</text>
            <text x="257" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Dynamic Pages</text>
            <text x="257" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Edge Delivery</text>
            <text x="257" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">SEO Optimization</text>

            {/* Split arrows to Content and Search */}
            <path d="M330 55 L375 45" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,45 368,42 370,48" fill="#2D4A3E" />

            <path d="M330 85 L375 95" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,95 370,92 368,98" fill="#2D4A3E" />

            {/* Box 3A: Content Management */}
            <rect x="375" y="15" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="445" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Content Engine</text>
            <text x="445" y="52" textAnchor="middle" fill="#686868" fontSize="9">Articles & Guides</text>

            {/* Box 3B: Search & Filtering */}
            <rect x="375" y="75" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="445" y="96" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Search & Filter</text>
            <text x="445" y="112" textAnchor="middle" fill="#686868" fontSize="9">Destination Index</text>

            {/* Link to Data Storage */}
            <path d="M515 70 L555 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="555,70 548,67 548,73" fill="#2D4A3E" />

            {/* Box 4: Database & Cache */}
            <rect x="555" y="25" width="115" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="612" y="55" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Storage Layer</text>
            <text x="612" y="73" textAnchor="middle" fill="#686868" fontSize="9">Structured Data</text>
            <text x="612" y="90" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Cached Queries</text>
          </svg>
        </div>
      </div>
    );
  }

  return null;
}
