import React from "react";

interface ArchitectureDiagramProps {
  title?: string;
  type?: "stream" | "monolith" | "rag" | "enterprise";
}

export function ArchitectureDiagram({
  title = "System Architecture & Data Flow",
  type = "stream",
}: ArchitectureDiagramProps) {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#F7F5F0] p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex items-center justify-between">
        <span>Figure: {title}</span>
        <span className="text-[11px] text-[#2D4A3E]">High-Level Architectural Model</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 760 170"
          className="w-full min-w-[620px] max-w-full text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Component 1: Ingestion / Client */}
          <rect
            x="20"
            y="40"
            width="140"
            height="90"
            rx="2"
            fill="#FAF9F6"
            stroke="#2D4A3E"
            strokeWidth="1.5"
          />
          <text x="90" y="70" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="12">
            Ingestion Layer
          </text>
          <text x="90" y="88" textAnchor="middle" fill="#686868" fontSize="10">
            {type === "rag" ? "Statute Docs & Queries" : "Sensors / REST Clients"}
          </text>
          <text x="90" y="104" textAnchor="middle" fill="#2D4A3E" fontSize="9">
            TLS / WebSockets / HTTP
          </text>

          {/* Arrow 1 */}
          <path d="M160 85 L210 85" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="210,85 204,81 204,89" fill="#2D4A3E" />

          {/* Component 2: Core Processing / Broker */}
          <rect
            x="210"
            y="40"
            width="150"
            height="90"
            rx="2"
            fill="#FAF9F6"
            stroke="#E5E2DC"
            strokeWidth="1.5"
          />
          <text x="285" y="70" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="12">
            {type === "rag" ? "Embedding & RAG" : "Event Pipeline"}
          </text>
          <text x="285" y="88" textAnchor="middle" fill="#686868" fontSize="10">
            {type === "rag" ? "Chunking / Re-ranker" : "Kafka / Redis Streams"}
          </text>
          <text x="285" y="104" textAnchor="middle" fill="#686868" fontSize="9">
            Decoupled Processing
          </text>

          {/* Arrow 2 */}
          <path d="M360 85 L410 85" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="410,85 404,81 404,89" fill="#2D4A3E" />

          {/* Component 3: Domain Engine */}
          <rect
            x="410"
            y="40"
            width="150"
            height="90"
            rx="2"
            fill="#FAF9F6"
            stroke="#2D4A3E"
            strokeWidth="1.5"
          />
          <text x="485" y="70" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="12">
            Domain Services
          </text>
          <text x="485" y="88" textAnchor="middle" fill="#686868" fontSize="10">
            Business Logic & Rules
          </text>
          <text x="485" y="104" textAnchor="middle" fill="#2D4A3E" fontSize="9">
            Idempotent Handlers
          </text>

          {/* Arrow 3 */}
          <path d="M560 85 L610 85" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="610,85 604,81 604,89" fill="#2D4A3E" />

          {/* Component 4: Persistence Layer */}
          <rect
            x="610"
            y="40"
            width="130"
            height="90"
            rx="2"
            fill="#FAF9F6"
            stroke="#E5E2DC"
            strokeWidth="1.5"
          />
          <text x="675" y="70" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="12">
            Storage Engine
          </text>
          <text x="675" y="88" textAnchor="middle" fill="#686868" fontSize="10">
            PostgreSQL + Cache
          </text>
          <text x="675" y="104" textAnchor="middle" fill="#686868" fontSize="9">
            ACID / In-Memory
          </text>
        </svg>
      </div>
      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        Editorial representation of distributed service boundaries, queue mediation, and persistence guarantees.
      </p>
    </figure>
  );
}
