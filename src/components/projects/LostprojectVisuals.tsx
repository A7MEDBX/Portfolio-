import React from "react";

export function LostprojectArchitectureVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: Lostproject Mobile & Backend Architecture
        </span>
        <span className="text-[#2D4A3E]">Mobile Client, API Gateway & Storage Layers</span>
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
          <text x="80" y="161" textAnchor="middle" fill="#686868" fontSize="8.5">Claim Registration</text>
          <text x="80" y="176" textAnchor="middle" fill="#686868" fontSize="8.5">Real-time Chat Screen</text>
          <text x="80" y="191" textAnchor="middle" fill="#686868" fontSize="8.5">Image Capture &amp; Pick</text>
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
          <text x="285" y="168" textAnchor="middle" fill="#686868" fontSize="8.5">Item &amp; Profile Controllers</text>
          <text x="285" y="183" textAnchor="middle" fill="#686868" fontSize="8.5">Hybrid Matching Router</text>
          <text x="285" y="198" textAnchor="middle" fill="#686868" fontSize="8.5">Socket.io Chat Dispatcher</text>
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
          <text x="510" y="90" textAnchor="middle" fill="#686868" fontSize="8.5">Item &amp; Profile Images</text>
          <text x="510" y="102" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Auto-Thumbnail &amp; HTTPS</text>

          {/* Backend -> Pinecone (Vectors) */}
          <path d="M370 180 L440 180" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="440,180 433,176 433,184" fill="#2D4A3E" />
          <text x="405" y="172" textAnchor="middle" fill="#686868" fontSize="8">Embeddings</text>

          {/* PINECONE VECTOR DB */}
          <rect x="440" y="150" width="140" height="60" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="510" y="172" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10.5">Pinecone Vector DB</text>
          <text x="510" y="188" textAnchor="middle" fill="#686868" fontSize="8.5">Cosine Similarity Index</text>
          <text x="510" y="200" textAnchor="middle" fill="#2D4A3E" fontSize="7.5">Semantic Text Retrieval</text>

          {/* Backend -> PostgreSQL */}
          <path d="M370 235 L440 255" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="440,255 432,251 435,258" fill="#2D4A3E" />
          <text x="410" y="240" textAnchor="middle" fill="#686868" fontSize="8">Relational</text>

          {/* POSTGRESQL DATABASE */}
          <rect x="440" y="230" width="140" height="60" rx="2" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="510" y="252" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10.5">PostgreSQL</text>
          <text x="510" y="267" textAnchor="middle" fill="#686868" fontSize="8.5">Users, Items, Claims, Chat</text>
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
