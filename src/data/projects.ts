import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "samcs",
    title: "SAMCS — Smart Autonomous Metro Control & Monitoring Platform",
    subtitle: "Real-time supervisory telemetry, autonomous transit coordination, and hardware gateway integration.",
    category: "Distributed Systems & Telemetry",
    timeline: "2024 — Present",
    status: "Active",
    featured: true,
    technologies: [
      "Python",
      "FastAPI",
      "UART Communication",
      "RabbitMQ",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "WebSockets",
      "Docker",
      "Automated Testing",
    ],
    summary:
      "A centralized backend architecture designed to monitor metro transit fleets, ingest continuous hardware sensor telemetry via serial gateways, and broadcast real-time train positions to operational dispatchers.",
    problemStatement:
      "Transit networks demand reliable telemetry ingestion from rolling stock over serial hardware interfaces without communication blackouts. The system required sub-second latency for position synchronization and fault-tolerant event dispatching to prevent operational bottlenecks between train units and centralized operations centers.",
    contribution:
      "Architected backend telemetry services using Python (FastAPI) and Node.js. Integrated the hardware UART serial communication gateway with CRC packet validation, established RabbitMQ message queues for decoupled event dispatching, implemented Redis in-memory caching for live train positions, and built WebSocket streaming endpoints for real-time dispatch dashboards with PostgreSQL persistence.",
    architectureOverview:
      "Sensor streams and train beacons are ingested through a hardware UART gateway into a FastAPI/Node.js ingestion service. Payloads are verified and published to RabbitMQ queues, where worker services validate safety constraints, update Redis state caches for sub-second WebSocket broadcasting, and commit historical telemetry to PostgreSQL.",
    keyResponsibilities: [
      "Engineered hardware UART serial interface gateway with byte-level framing and CRC packet validation.",
      "Configured RabbitMQ message brokers to decouple telemetry ingestion from state computation and logging.",
      "Implemented real-time bidirectional WebSocket streaming delivering sub-second fleet positions to dispatchers.",
      "Structured PostgreSQL schemas for audit logs and historical train run records alongside Redis caching.",
      "Authored automated unit and integration tests verifying packet parsing, error thresholds, and event workflows.",
    ],
    systemHighlights: [
      "Reliable serial packet decoding with automated error handling and framing recovery.",
      "Decoupled event pipeline separating real-time alerting from historical auditing.",
      "Sub-second state synchronization across dispatcher WebSocket connections.",
    ],
    repositoryUrl: "https://github.com",
  },
  {
    slug: "lostproject",
    title: "Lostproject",
    subtitle: "Mobile application and backend service for asset recovery, attribute matching, and direct messaging.",
    category: "Mobile Backend & Platform",
    timeline: "2023 — 2024",
    status: "Completed",
    featured: true,
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase",
      "Cloudinary",
      "Pinecone",
    ],
    summary:
      "A comprehensive asset recovery platform featuring mobile client interfaces, user authentication, profile management, attribute matching logic, direct chat messaging, and secure media uploads.",
    problemStatement:
      "Misplaced property recovery requires cross-referencing fragmented user descriptions across diverse item categories and locations, managing direct communication between claimants while protecting user privacy, and securely handling image uploads without degrading database performance.",
    contribution:
      "Engineered the backend RESTful API services using Node.js and Express. Designed relational database schemas in PostgreSQL, integrated Firebase for authentication and push notifications, integrated Cloudinary for authenticated media upload storage, and implemented vector-based similarity matching using Pinecone alongside deterministic attribute queries.",
    architectureOverview:
      "The Flutter mobile client communicates with a Node.js/Express backend protected by Firebase authentication middleware. Relational data is persisted in PostgreSQL, uploaded images are processed via Cloudinary, and item attribute embeddings are indexed in Pinecone for semantic matching queries.",
    keyResponsibilities: [
      "Constructed REST API endpoints for user profile management, item registration, and claims verification.",
      "Implemented matching engine combining deterministic SQL attribute filters with Pinecone semantic search.",
      "Integrated Firebase Authentication for secure user onboarding and session validation.",
      "Configured Cloudinary pipeline for image upload validation, thumbnail generation, and secure storage.",
      "Built real-time chat service endpoints facilitating direct communication between item owners and finders.",
    ],
    systemHighlights: [
      "Hybrid matching combining exact attribute indexing with semantic vector similarity.",
      "Secure image storage pipeline isolating media uploads from relational database records.",
      "Structured authentication guards protecting user contact information during recovery claims.",
    ],
    repositoryUrl: "https://github.com",
  },
  {
    slug: "airzigzag",
    title: "Airzigzag",
    subtitle: "Travel-focused website and destination content platform with structured website architecture.",
    category: "Web Architecture & Content",
    timeline: "2023",
    status: "Completed",
    featured: true,
    technologies: [
      "Web Architecture",
      "Content Management",
      "Search & Filtering",
      "REST APIs",
      "Responsive UI",
    ],
    summary:
      "A travel-focused website and content platform designed to deliver structured destination guides, travel articles, and location discovery through an intuitive, responsive interface.",
    problemStatement:
      "Delivering dense destination content, regional travel guides, and categorized flight options requires a coherent content organization scheme, fast client-side and backend search filtering, and a responsive interface that performs reliably across mobile and desktop devices.",
    contribution:
      "Designed and implemented the core website architecture, structured destination content data models, built search and category filtering logic, and ensured a clean, responsive layout optimized for readable editorial travel presentations.",
    architectureOverview:
      "Constructed around modular page routing and structured content collections. Destination articles and travel metadata are indexed for rapid keyword and category filtering, served through responsive layouts that prioritize legibility and fast navigation.",
    keyResponsibilities: [
      "Architected clean website routing and modular layout components for travel destination guides.",
      "Structured data models for categorized travel content, destination profiles, and practical travel advisories.",
      "Implemented multi-attribute search and filtering for locations, travel styles, and trip types.",
      "Optimized frontend responsive behavior and asset delivery across mobile, tablet, and desktop viewports.",
    ],
    systemHighlights: [
      "Clear editorial typography and information hierarchy optimized for travel reading.",
      "Fast client-side destination filtering and category lookup.",
      "Responsive, clean layout structure maintaining design consistency across screen sizes.",
    ],
    liveUrl: "https://airzigzag.com",
  },
  {
    slug: "sport-club-management",
    title: "Sport Club Management System",
    subtitle: "Club administration platform managing facility reservations, memberships, and OTP-secured authentication.",
    category: "Full-Stack System",
    timeline: "2022 — 2023",
    status: "Completed",
    featured: false,
    technologies: [
      "React",
      "Flask (Python)",
      "SQLite",
      "OTP Authentication",
      "REST APIs",
    ],
    summary:
      "An athletic club administration system facilitating member registrations, court scheduling, and administrative operations with OTP-verified access.",
    problemStatement:
      "Managing sports facility court reservations and member access required an accessible interface paired with secure backend endpoints for user identity verification and conflict-free booking records.",
    contribution:
      "Developed the backend API using Python and Flask, designed the normalized SQLite relational schema, built OTP authentication and verification endpoints, and integrated the services with the React frontend.",
    architectureOverview:
      "React single-page application communicating with a Flask REST API backend. SQLite handles local relational persistence with transactional integrity for reservation slots and OTP authentication tokens.",
    keyResponsibilities: [
      "Engineered Flask REST endpoints for member registration, authentication, and court slot reservations.",
      "Implemented OTP-based verification workflows for secure user authentication.",
      "Designed normalized SQLite database tables with foreign key constraints preventing conflicting bookings.",
      "Connected React client components to backend endpoints with structured error handling.",
    ],
    systemHighlights: [
      "Secure OTP verification flow for member logins and sensitive reservation updates.",
      "Simple, lightweight relational architecture with zero external operational dependencies.",
    ],
    repositoryUrl: "https://github.com",
  },
  {
    slug: "egyptian-law-ai-chatbot",
    title: "Egyptian Law AI Chatbot",
    subtitle: "Legal document processing and question-answering assistant for Egyptian statutory documents.",
    category: "Document Processing & AI",
    timeline: "2024",
    status: "In Development",
    featured: false,
    technologies: [
      "Python",
      "FastAPI",
      "OCR Pipeline",
      "Document Chunking",
      "Vector Retrieval",
      "PostgreSQL",
    ],
    summary:
      "A document-processing and question-answering assistant engineered to ingest scanned Egyptian legal documents, extract Arabic text via OCR, and retrieve statutory references for legal queries.",
    problemStatement:
      "Egyptian legal statutes frequently exist as scanned PDF archives with multi-column Arabic layouts and complex cross-references, necessitating specialized OCR extraction, structural text chunking, and precision retrieval to prevent hallucinations.",
    contribution:
      "Constructed the document ingestion and OCR pipeline for Arabic legal documents, implemented structural chunking preserving statute article boundaries, and integrated vector retrieval endpoints in Python/FastAPI for contextual question answering.",
    architectureOverview:
      "Scanned legal documents are processed through an OCR extraction pipeline. Cleaned Arabic text is segmented using structural article-level chunking, indexed for retrieval, and queried via FastAPI backend endpoints.",
    keyResponsibilities: [
      "Engineered OCR document ingestion pipeline extracting Arabic text from statutory archives.",
      "Implemented hierarchical chunking respecting statutory article numbers and legal sections.",
      "Developed retrieval endpoints matching user legal questions against relevant statutory excerpts.",
    ],
    systemHighlights: [
      "Preservation of statutory article numbers during OCR processing and chunking.",
      "Context-grounded query answering aimed at minimizing legal text hallucinations.",
    ],
    repositoryUrl: "https://github.com",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Desktop clinical administration application managing patient records and appointments.",
    category: "Desktop Application",
    timeline: "2022",
    status: "Completed",
    featured: false,
    technologies: [
      "C++",
      "Qt Desktop Framework",
      "SQLite",
      "GUI Development",
    ],
    summary:
      "A native C++/Qt desktop management application providing clinic staff with reliable patient registration, appointment scheduling, and medical record keeping.",
    problemStatement:
      "Clinical receptionists and doctors required a responsive, offline-capable desktop application to manage outpatient registrations, doctor appointments, and medical histories without depending on continuous internet connectivity.",
    contribution:
      "Developed the desktop GUI using C++ and the Qt framework, designed the normalized SQLite database schema, and implemented CRUD operations and validation rules for patient records and appointment schedules.",
    architectureOverview:
      "Native desktop application compiled with C++ and Qt Widgets. Data persistence is managed locally via an embedded SQLite database with transactional ACID guarantees.",
    keyResponsibilities: [
      "Designed desktop user interface views for patient check-in, appointment booking, and record lookups in Qt.",
      "Engineered C++ database access layers managing SQLite queries and parameterized statements.",
      "Implemented appointment conflict validation rules preventing overlapping doctor bookings.",
    ],
    systemHighlights: [
      "High-performance native desktop execution with zero network latency.",
      "Local relational database with full data persistence and backup capabilities.",
    ],
    repositoryUrl: "https://github.com",
  },
];
