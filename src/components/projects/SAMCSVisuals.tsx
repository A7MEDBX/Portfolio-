import React from "react";

export function SAMCSArchitectureVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-4 border-b border-[#E5E2DC] pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <span className="font-semibold text-[#222222]">
          Figure 1: SAMCS Multi-Service Distributed Architecture
        </span>
        <span className="text-[#2D4A3E]">Hardware Gateway & Asynchronous Pipeline</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 820 320"
          className="w-full min-w-[720px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* HARDWARE DOMAIN */}
          <rect x="15" y="100" width="130" height="110" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="80" y="125" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Train Telemetry</text>
          <text x="80" y="142" textAnchor="middle" fill="#686868" fontSize="9.5">Microcontroller Unit</text>
          <text x="80" y="160" textAnchor="middle" fill="#2D4A3E" fontSize="9">Speed, Sensors, Track</text>
          <text x="80" y="178" textAnchor="middle" fill="#686868" fontSize="8.5">RS-232 / UART</text>
          <rect x="30" y="188" width="100" height="14" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="80" y="198" textAnchor="middle" fill="#2D4A3E" fontSize="8">115200 Baud / 8-N-1</text>

          {/* UART Physical Link */}
          <path d="M145 155 L190 155" stroke="#2D4A3E" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="190,155 183,151 183,159" fill="#2D4A3E" />
          <text x="167" y="148" textAnchor="middle" fill="#686868" fontSize="8">Serial Bytes</text>

          {/* PYTHON UART GATEWAY */}
          <rect x="190" y="90" width="150" height="130" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="265" y="115" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Python UART Gateway</text>
          <text x="265" y="132" textAnchor="middle" fill="#2D4A3E" fontSize="9.5">Serial Frame Ingestion</text>
          <path d="M205 142 L325 142" stroke="#E5E2DC" strokeWidth="1" />
          <text x="265" y="157" textAnchor="middle" fill="#686868" fontSize="8.5">Byte-Level Ring Buffer</text>
          <text x="265" y="172" textAnchor="middle" fill="#686868" fontSize="8.5">CRC-16 Error Check</text>
          <text x="265" y="187" textAnchor="middle" fill="#686868" fontSize="8.5">JSON Payload Framing</text>
          <text x="265" y="205" textAnchor="middle" fill="#2D4A3E" fontSize="8">AMQP Producer</text>

          {/* Gateway -> RabbitMQ */}
          <path d="M340 155 L385 155" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="385,155 378,151 378,159" fill="#2D4A3E" />
          <text x="362" y="147" textAnchor="middle" fill="#686868" fontSize="8">AMQP Push</text>

          {/* RABBITMQ MESSAGE BROKER */}
          <rect x="385" y="70" width="140" height="170" rx="3" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1.5" />
          <text x="455" y="95" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">RabbitMQ Broker</text>
          <text x="455" y="110" textAnchor="middle" fill="#686868" fontSize="9">Decoupled Queuing</text>
          <path d="M400 120 L510 120" stroke="#E5E2DC" strokeWidth="1" />
          <rect x="400" y="128" width="110" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="455" y="144" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">telemetry.raw</text>
          <rect x="400" y="158" width="110" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="455" y="174" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">events.critical</text>
          <rect x="400" y="188" width="110" height="24" rx="2" fill="#FAF9F6" stroke="#E5E2DC" />
          <text x="455" y="204" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">train.state.delta</text>
          <text x="455" y="228" textAnchor="middle" fill="#686868" fontSize="8">Topic Exchange Routing</text>

          {/* RabbitMQ -> Node.js Backend */}
          <path d="M525 155 L570 155" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="570,155 563,151 563,159" fill="#2D4A3E" />
          <text x="547" y="147" textAnchor="middle" fill="#686868" fontSize="8">Consume</text>

          {/* NODE.JS BACKEND */}
          <rect x="570" y="70" width="150" height="170" rx="3" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="645" y="95" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="11">Node.js Backend</text>
          <text x="645" y="110" textAnchor="middle" fill="#2D4A3E" fontSize="9">Core Event Services</text>
          <path d="M585 120 L705 120" stroke="#E5E2DC" strokeWidth="1" />
          <text x="645" y="135" textAnchor="middle" fill="#686868" fontSize="8.5">Domain Safety Rules</text>
          <text x="645" y="150" textAnchor="middle" fill="#686868" fontSize="8.5">WebSocket Manager</text>
          <text x="645" y="165" textAnchor="middle" fill="#686868" fontSize="8.5">REST API Endpoints</text>
          <text x="645" y="180" textAnchor="middle" fill="#686868" fontSize="8.5">Batch DB Commit</text>
          <text x="645" y="200" textAnchor="middle" fill="#2D4A3E" fontSize="8.5">Express + ws</text>

          {/* Auxiliary Service: FastAPI Analytics (Top Branch) */}
          <rect x="570" y="10" width="150" height="45" rx="2" fill="#F5F3EE" stroke="#E5E2DC" strokeWidth="1" />
          <text x="645" y="28" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">FastAPI Analytics API</text>
          <text x="645" y="42" textAnchor="middle" fill="#686868" fontSize="8.5">Sensor Stats & Transformation</text>
          <path d="M645 55 L645 70" stroke="#E5E2DC" strokeWidth="1" strokeDasharray="2 2" />

          {/* Node.js -> PostgreSQL (Down-left) */}
          <path d="M610 240 L610 270 L520 270" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="520,270 527,266 527,274" fill="#2D4A3E" />
          <text x="565" y="263" textAnchor="middle" fill="#686868" fontSize="8">SQL Batch Write</text>

          {/* POSTGRESQL */}
          <rect x="385" y="250" width="135" height="60" rx="2" fill="#FAF9F6" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="452" y="272" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10.5">PostgreSQL DB</text>
          <text x="452" y="288" textAnchor="middle" fill="#686868" fontSize="8.5">Historical Logs & Audit</text>
          <text x="452" y="300" textAnchor="middle" fill="#2D4A3E" fontSize="8">ACID Persistence</text>

          {/* Node.js -> Redis (Down-right) */}
          <path d="M680 240 L680 270 L720 270" stroke="#2D4A3E" strokeWidth="1.2" />
          <polygon points="720,270 713,266 713,274" fill="#2D4A3E" />
          <text x="700" y="263" textAnchor="middle" fill="#686868" fontSize="8">Live Cache</text>

          {/* REDIS CACHE */}
          <rect x="720" y="250" width="90" height="60" rx="2" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="765" y="272" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10.5">Redis</text>
          <text x="765" y="288" textAnchor="middle" fill="#686868" fontSize="8.5">Live Train State</text>
          <text x="765" y="300" textAnchor="middle" fill="#2D4A3E" fontSize="8">In-Memory</text>

          {/* Node.js -> React Dashboard (Right) */}
          <path d="M720 155 L755 155" stroke="#2D4A3E" strokeWidth="1.5" />
          <polygon points="755,155 748,151 748,159" fill="#2D4A3E" />
          <text x="737" y="147" textAnchor="middle" fill="#686868" fontSize="8">WS Stream</text>

          {/* REACT DASHBOARD */}
          <rect x="755" y="90" width="55" height="130" rx="3" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.5" />
          <text x="782" y="130" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10">React</text>
          <text x="782" y="146" textAnchor="middle" fill="#222222" fontWeight="700" fontSize="10">Dashboard</text>
          <text x="782" y="168" textAnchor="middle" fill="#2D4A3E" fontSize="8">Live Map</text>
          <text x="782" y="180" textAnchor="middle" fill="#686868" fontSize="7.5">&amp; Alerts</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-3 text-center">
        Full component topology: Hardware UART Gateway publishes to RabbitMQ queues, Node.js consumes events and broadcasts via WebSockets to React while synchronizing Redis and PostgreSQL.
      </p>
    </figure>
  );
}

export function SAMCSTelemetryFrameVisual() {
  return (
    <figure className="my-8 border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
      <figcaption className="text-xs font-mono text-[#686868] uppercase tracking-wider mb-3 border-b border-[#E5E2DC] pb-2 flex items-center justify-between">
        <span className="font-semibold text-[#222222]">
          Figure 2: Binary Packet Framing & Message Parsing Structure
        </span>
        <span className="text-[#2D4A3E]">Serial Byte Layout</span>
      </figcaption>

      <div className="w-full overflow-x-auto py-2">
        <svg
          viewBox="0 0 740 100"
          className="w-full min-w-[620px] text-xs font-mono"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Header byte */}
          <rect x="10" y="20" width="70" height="55" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="45" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">PREAMBLE</text>
          <text x="45" y="58" textAnchor="middle" fill="#2D4A3E" fontSize="9">0xAA 0x55</text>
          <text x="45" y="70" textAnchor="middle" fill="#686868" fontSize="8">2 Bytes</text>

          {/* Train ID */}
          <rect x="80" y="20" width="80" height="55" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="120" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">TRAIN_ID</text>
          <text x="120" y="58" textAnchor="middle" fill="#686868" fontSize="9">Uint16</text>
          <text x="120" y="70" textAnchor="middle" fill="#686868" fontSize="8">2 Bytes</text>

          {/* Timestamp */}
          <rect x="160" y="20" width="110" height="55" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="215" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">TIMESTAMP_UTC</text>
          <text x="215" y="58" textAnchor="middle" fill="#686868" fontSize="9">Uint32 Epoch</text>
          <text x="215" y="70" textAnchor="middle" fill="#686868" fontSize="8">4 Bytes</text>

          {/* Speed & Direction */}
          <rect x="270" y="20" width="100" height="55" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="320" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">SPEED_KPH</text>
          <text x="320" y="58" textAnchor="middle" fill="#2D4A3E" fontSize="9">Uint16 (x0.1)</text>
          <text x="320" y="70" textAnchor="middle" fill="#686868" fontSize="8">2 Bytes</text>

          {/* Track Segment Coordinates */}
          <rect x="370" y="20" width="130" height="55" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="435" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">SEGMENT_ID / POS</text>
          <text x="435" y="58" textAnchor="middle" fill="#686868" fontSize="9">Track Block Int</text>
          <text x="435" y="70" textAnchor="middle" fill="#686868" fontSize="8">4 Bytes</text>

          {/* Status & Alarm Flags */}
          <rect x="500" y="20" width="120" height="55" fill="#FAF9F6" stroke="#E5E2DC" strokeWidth="1.2" />
          <text x="560" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">FLAGS &amp; ALARMS</text>
          <text x="560" y="58" textAnchor="middle" fill="#686868" fontSize="9">Doors / Emergency</text>
          <text x="560" y="70" textAnchor="middle" fill="#686868" fontSize="8">2 Bytes</text>

          {/* CRC Checksum */}
          <rect x="620" y="20" width="110" height="55" fill="#F5F3EE" stroke="#2D4A3E" strokeWidth="1.2" />
          <text x="675" y="42" textAnchor="middle" fill="#222222" fontWeight="600" fontSize="10">CRC-16</text>
          <text x="675" y="58" textAnchor="middle" fill="#2D4A3E" fontSize="9">CCITT Poly 0x1021</text>
          <text x="675" y="70" textAnchor="middle" fill="#686868" fontSize="8">2 Bytes</text>
        </svg>
      </div>

      <p className="text-[12px] text-[#686868] font-sans mt-2 text-center">
        Fixed-frame packet layout with preambles and CRC-16 checksums guaranteeing serial transmission integrity before queue publishing.
      </p>
    </figure>
  );
}
