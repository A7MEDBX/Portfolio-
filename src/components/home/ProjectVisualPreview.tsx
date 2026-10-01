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
            <text x="255" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">RabbitMQ / Redis</text>
            <text x="255" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">FastAPI / Node.js</text>
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
            SYSTEM PREVIEW: FLUTTER APP, MATCHING & CLOUDINARY MEDIA
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
            {/* Box 1: Flutter Client */}
            <rect x="10" y="25" width="130" height="90" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="75" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Flutter Client</text>
            <text x="75" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Mobile Application</text>
            <text x="75" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Firebase Auth / Token</text>
            <text x="75" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Profiles & Claims</text>

            {/* Link 1 */}
            <path d="M140 70 L185 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="185,70 178,67 178,73" fill="#2D4A3E" />
            <text x="162" y="63" textAnchor="middle" fill="#686868" fontSize="8">REST / JSON</text>

            {/* Box 2: Node.js Express Backend */}
            <rect x="185" y="25" width="145" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="257" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Node.js Express</text>
            <text x="257" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Profile Management</text>
            <text x="257" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Matching Engine</text>
            <text x="257" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Pinecone Vector Match</text>

            {/* Split arrows to Chat and Cloudinary */}
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
            <text x="445" y="96" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Cloudinary Media</text>
            <text x="445" y="112" textAnchor="middle" fill="#686868" fontSize="9">Secure Upload Storage</text>

            {/* Link to Persistence */}
            <path d="M515 70 L555 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="555,70 548,67 548,73" fill="#2D4A3E" />

            {/* Box 4: PostgreSQL Storage */}
            <rect x="555" y="25" width="115" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="612" y="55" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">PostgreSQL</text>
            <text x="612" y="73" textAnchor="middle" fill="#686868" fontSize="9">Relational Schemas</text>
            <text x="612" y="90" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">ACID Integrity</text>
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
            SYSTEM PREVIEW: TRAVEL CONTENT PLATFORM & WEBSITE ARCHITECTURE
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
            <text x="162" y="63" textAnchor="middle" fill="#686868" fontSize="8">HTTP / Web</text>

            {/* Box 2: Platform Architecture & Routing */}
            <rect x="185" y="25" width="145" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="257" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Web Routing</text>
            <text x="257" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Destination Pages</text>
            <text x="257" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Clean Layouts</text>
            <text x="257" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Information Hierarchy</text>

            {/* Split arrows to Content and Search */}
            <path d="M330 55 L375 45" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,45 368,42 370,48" fill="#2D4A3E" />

            <path d="M330 85 L375 95" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="375,95 370,92 368,98" fill="#2D4A3E" />

            {/* Box 3A: Content Management */}
            <rect x="375" y="15" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="445" y="36" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Content Engine</text>
            <text x="445" y="52" textAnchor="middle" fill="#686868" fontSize="9">Destination Guides</text>

            {/* Box 3B: Search & Filtering */}
            <rect x="375" y="75" width="140" height="52" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="445" y="96" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Search & Filter</text>
            <text x="445" y="112" textAnchor="middle" fill="#686868" fontSize="9">Attribute Lookup</text>

            {/* Link to Data Storage */}
            <path d="M515 70 L555 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="555,70 548,67 548,73" fill="#2D4A3E" />

            {/* Box 4: Database & Cache */}
            <rect x="555" y="25" width="115" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="612" y="55" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Content Store</text>
            <text x="612" y="73" textAnchor="middle" fill="#686868" fontSize="9">Structured Articles</text>
            <text x="612" y="90" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Static Delivery</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "sport-club-management") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-3 sm:p-4 rounded-xs my-3 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-1.5 mb-2">
          <span>REACT FRONTEND & FLASK BACKEND WITH OTP</span>
          <span className="text-[#2D4A3E]">SQLITE STORAGE</span>
        </div>
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 580 80" className="w-full min-w-[460px] text-xs font-mono" fill="none">
            <rect x="10" y="15" width="110" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="65" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">React Frontend</text>
            <text x="65" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Member UI</text>

            <path d="M120 40 L165 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="165,40 160,37 160,43" fill="#2D4A3E" />

            <rect x="165" y="15" width="120" height="50" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
            <text x="225" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Flask REST API</text>
            <text x="225" y="52" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Endpoints & Logic</text>

            <path d="M285 40 L330 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="330,40 325,37 325,43" fill="#2D4A3E" />

            <rect x="330" y="15" width="115" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="387" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">OTP Module</text>
            <text x="387" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Secure Token Auth</text>

            <path d="M445 40 L485 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="485,40 480,37 480,43" fill="#2D4A3E" />

            <rect x="485" y="15" width="85" height="50" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
            <text x="527" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">SQLite DB</text>
            <text x="527" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Reservations</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "egyptian-law-ai-chatbot") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-3 sm:p-4 rounded-xs my-3 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-1.5 mb-2">
          <span>OCR PIPELINE & ARTICLE-LEVEL CHUNKING</span>
          <span className="text-[#2D4A3E]">VECTOR RETRIEVAL</span>
        </div>
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 580 80" className="w-full min-w-[460px] text-xs font-mono" fill="none">
            <rect x="10" y="15" width="110" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="65" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Arabic PDF Ingestion</text>
            <text x="65" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Statute Scans</text>

            <path d="M120 40 L165 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="165,40 160,37 160,43" fill="#2D4A3E" />

            <rect x="165" y="15" width="120" height="50" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
            <text x="225" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">OCR Pipeline</text>
            <text x="225" y="52" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Text Extraction</text>

            <path d="M285 40 L330 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="330,40 325,37 325,43" fill="#2D4A3E" />

            <rect x="330" y="15" width="120" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="390" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Article Chunking</text>
            <text x="390" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Statutory Sections</text>

            <path d="M450 40 L490 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="490,40 485,37 485,43" fill="#2D4A3E" />

            <rect x="490" y="15" width="80" height="50" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
            <text x="530" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">FastAPI</text>
            <text x="530" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">QA Retrieval</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "hospital-management-system") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-3 sm:p-4 rounded-xs my-3 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-1.5 mb-2">
          <span>NATIVE C++ / QT DESKTOP APPLICATION</span>
          <span className="text-[#2D4A3E]">SQLITE CLINICAL DB</span>
        </div>
        <div className="w-full overflow-x-auto">
          <svg viewBox="0 0 580 80" className="w-full min-w-[460px] text-xs font-mono" fill="none">
            <rect x="10" y="15" width="140" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="80" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Qt Desktop GUI</text>
            <text x="80" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Reception & Doctor Views</text>

            <path d="M150 40 L210 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="210,40 205,37 205,43" fill="#2D4A3E" />

            <rect x="210" y="15" width="155" height="50" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
            <text x="287" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">C++ Business Logic</text>
            <text x="287" y="52" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Appointment Validation</text>

            <path d="M365 40 L425 40" stroke="#2D4A3E" strokeWidth="1" />
            <polygon points="425,40 420,37 420,43" fill="#2D4A3E" />

            <rect x="425" y="15" width="145" height="50" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1" />
            <text x="497" y="38" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">Embedded SQLite</text>
            <text x="497" y="52" textAnchor="middle" fill="#686868" fontSize="8.5">Local ACID Storage</text>
          </svg>
        </div>
      </div>
    );
  }

  if (slug === "ieee-aswan-student-branch") {
    return (
      <div className="w-full border border-[#E5E2DC] bg-[#FAF9F6] p-4 sm:p-5 rounded-xs my-4 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-mono text-[#686868] border-b border-[#E5E2DC] pb-2 mb-3">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
            SYSTEM PREVIEW: MERN FULL-STACK PLATFORM &amp; RBAC
          </span>
          <span className="text-[#2D4A3E] font-medium">LAUNCHED PLATFORM</span>
        </div>

        <div className="w-full overflow-x-auto">
          <svg
            viewBox="0 0 680 140"
            className="w-full min-w-[540px] text-xs font-mono"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Box 1: React / Vite SPA */}
            <rect x="10" y="25" width="140" height="90" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="80" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">React + Vite</text>
            <text x="80" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Public &amp; Board UI</text>
            <text x="80" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Framer Motion</text>
            <text x="80" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Recharts Analytics</text>

            {/* Link 1 */}
            <path d="M150 70 L195 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="195,70 188,67 188,73" fill="#2D4A3E" />
            <text x="172" y="63" textAnchor="middle" fill="#686868" fontSize="8">HTTPS / JWT</text>

            {/* Box 2: Node.js Express API */}
            <rect x="195" y="25" width="150" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="270" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">Express.js API</text>
            <text x="270" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">JWT Auth &amp; RBAC</text>
            <text x="270" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Rate Limiting / Sanitization</text>
            <text x="270" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Event &amp; Inquiry Routes</text>

            {/* Link 2 */}
            <path d="M345 70 L390 70" stroke="#2D4A3E" strokeWidth="1.2" />
            <polygon points="390,70 383,67 383,73" fill="#2D4A3E" />
            <text x="367" y="63" textAnchor="middle" fill="#686868" fontSize="8">Mongoose</text>

            {/* Box 3: MongoDB Persistence */}
            <rect x="390" y="25" width="145" height="90" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
            <text x="462" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="11">MongoDB</text>
            <text x="462" y="70" textAnchor="middle" fill="#686868" fontSize="9.5">Events &amp; Registrations</text>
            <text x="462" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="9">Member Archives</text>
            <text x="462" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Inquiries &amp; Gallery</text>

            {/* Box 4: Operational Leadership */}
            <rect x="545" y="25" width="125" height="90" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.2" />
            <text x="607" y="52" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Team Leadership</text>
            <text x="607" y="70" textAnchor="middle" fill="#686868" fontSize="9">Head of Web Team</text>
            <text x="607" y="86" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Sprint Coordination</text>
            <text x="607" y="100" textAnchor="middle" fill="#686868" fontSize="8.5">Code Review</text>
          </svg>
        </div>
      </div>
    );
  }

  return null;
}
