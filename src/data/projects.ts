import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "samcs",
    title: "SAMCS — Smart Autonomous Metro Control & Monitoring Platform",
    subtitle: "Real-time supervisory telemetry, autonomous scheduling, and mission-critical transit telemetry platform.",
    category: "Distributed Systems & Telemetry",
    timeline: "2024 — Present",
    status: "Active",
    technologies: ["Go / Python", "PostgreSQL", "Redis", "Kafka", "WebSockets", "Docker"],
    summary:
      "A centralized backend architecture designed to monitor metro transit fleets, process real-time sensor streams, and manage automated dispatch and safety notifications.",
    problemStatement:
      "Metro transit networks demand real-time telemetry ingestion, sub-second latency for position synchronization, and high fault-tolerance to eliminate communication blackouts between moving rolling stock and centralized dispatch centers.",
    architectureOverview:
      "The system is organized around an event-driven telemetry pipeline. Sensor payloads and status beacons are ingested via high-throughput message queues, evaluated against safety rule engines, and cached in memory for sub-second supervisory dashboard updates. Persistent state is maintained in a transactional database with automated failover.",
    keyResponsibilities: [
      "Engineered real-time data ingestion pipelines handling concurrent sensor streams from metro train units.",
      "Designed domain data models and persistence schemas for dispatch records, route telemetry, and event alarms.",
      "Implemented resilient WebSocket streaming services for real-time operations center monitoring.",
      "Structured automated health checking and graceful degradation protocols under high-traffic spikes.",
    ],
    systemHighlights: [
      "Sub-second event ingestion and state synchronization across operational nodes.",
      "Decoupled event pipeline separating real-time alerting from historical auditing.",
      "Robust state machine handling train route allocation and collision avoidance constraints.",
    ],
  },
  {
    slug: "lostproject",
    title: "Lostproject",
    subtitle: "Distributed asset recovery and item matching platform with high-reliability notification dispatch.",
    category: "Backend Platform & Search",
    timeline: "2023 — 2024",
    status: "Completed",
    technologies: ["Node.js / TypeScript", "PostgreSQL", "Elasticsearch / Meilisearch", "Redis", "Docker"],
    summary:
      "A backend service engineered for rapid lost-and-found asset tracking, geo-indexed search queries, and automated attribute correlation across lost property registries.",
    problemStatement:
      "Matching fragmented descriptions of misplaced property across diverse geographic zones requires fuzzy indexing, structured category schemas, and automated notifications without degrading database query performance.",
    architectureOverview:
      "Built with a decoupled search and relational storage layer. Core entity operations utilize transactional isolation in PostgreSQL, while background synchronization workers feed searchable attributes into a specialized search index for instant multi-attribute querying.",
    keyResponsibilities: [
      "Architected RESTful API endpoints for asset registration, categorization, and verification workflows.",
      "Implemented indexed full-text and attribute-based search capabilities with custom scoring heuristics.",
      "Designed asynchronous worker queues for image processing and notification dispatch.",
      "Established strict authorization guards protecting user identity and claim verification data.",
    ],
    systemHighlights: [
      "Optimized query response times through dedicated search indexing and cached lookup tables.",
      "Reliable background task processing with exponential backoff retry mechanisms.",
      "Comprehensive validation layers safeguarding user contact exchanges.",
    ],
  },
  {
    slug: "airzigzag",
    title: "Airzigzag",
    subtitle: "Aviation logistics coordination, route optimization engine, and booking management backend.",
    category: "Logistics & API Engineering",
    timeline: "2023",
    status: "Completed",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Celery", "RabbitMQ", "Redis"],
    summary:
      "A specialized backend system designed to manage air charter routing, passenger capacity allocation, and flight manifest operations with strict transactional consistency.",
    problemStatement:
      "Aviation logistics operations require strict multi-resource booking transactions, conflict detection between flight crew availability and aircraft maintenance windows, and complex cost calculation algorithms.",
    architectureOverview:
      "Leverages an asynchronous API gateway backed by relational storage with pessimistic locking on shared flight slots to prevent double-booking. Asynchronous workers handle manifest generation, invoicing, and third-party supplier webhook processing.",
    keyResponsibilities: [
      "Constructed transactional booking workflows guaranteeing slot reservations without race conditions.",
      "Built calculation engines for route timing, fuel estimates, and pricing matrix lookups.",
      "Integrated secure webhook endpoints for external flight schedule synchronization.",
      "Drafted OpenAPI specifications and automated integration test suites for client consumers.",
    ],
    systemHighlights: [
      "ACID compliance across concurrent booking operations via database isolation levels.",
      "Asynchronous flight manifest generation decoupled from critical booking requests.",
      "Clean separation between domain logic, data persistence, and external vendor adapters.",
    ],
  },
  {
    slug: "sport-club-management",
    title: "Sport Club Management System",
    subtitle: "Multi-facility sports club administration platform managing memberships, court scheduling, and financial records.",
    category: "Enterprise System & Resource Scheduling",
    timeline: "2022 — 2023",
    status: "Completed",
    technologies: ["Java / Spring Boot or C# .NET", "PostgreSQL", "Redis", "Docker", "REST API"],
    summary:
      "A scalable enterprise backend catering to athletic clubs with thousands of active members, managing facility reservations, recurring membership billing, and staff assignments.",
    problemStatement:
      "Athletic clubs experience high concurrency during morning court reservation windows, leading to database deadlocks and inconsistent booking states when multiple members reserve the same facility slot.",
    architectureOverview:
      "Constructed using modular service architecture with strict transactional boundaries. Facility slots are protected via distributed locking in Redis during peak reservation periods, backed by relational data integrity constraints.",
    keyResponsibilities: [
      "Designed normalized relational schemas accommodating multi-tier memberships, guest passes, and recurring subscriptions.",
      "Engineered reservation engine with distributed locks preventing double-booking during peak morning traffic.",
      "Implemented audit logging for all payment adjustments, refund triggers, and member status alterations.",
      "Developed scheduled cron tasks for automated membership renewal and overdue notification workflows.",
    ],
    systemHighlights: [
      "Zero double-booking occurrences through distributed reservation locks and database constraints.",
      "Automated subscription lifecycle management with audit-ready financial tracking.",
      "Role-based access control (RBAC) separating administrative, staff, trainer, and member permissions.",
    ],
  },
  {
    slug: "egyptian-law-ai-chatbot",
    title: "Egyptian Law AI Chatbot",
    subtitle: "RAG-powered legal research assistant indexing Egyptian legal statutes, court rulings, and jurisprudential documents.",
    category: "AI & Information Retrieval",
    timeline: "2024",
    status: "In Development",
    technologies: ["Python", "FastAPI", "PostgreSQL (pgvector)", "LangChain / LlamaIndex", "Redis", "Docker"],
    summary:
      "A backend retrieval-augmented generation (RAG) system engineered to index, retrieve, and synthesize complex Egyptian civil, criminal, and commercial legal codes with verifiable citations.",
    problemStatement:
      "Legal texts in Arabic feature complex linguistic structures, cross-referenced statutory revisions, and massive corpus size, making generic search inadequate and prone to legal hallucinations.",
    architectureOverview:
      "Employs a hybrid retrieval pipeline combining lexical search (BM25) with dense vector embeddings stored in PostgreSQL via pgvector. Ingested legal documents undergo hierarchical chunking respecting legal article boundaries, followed by reranking before prompt augmentation.",
    keyResponsibilities: [
      "Engineered hierarchical document ingestion pipeline preserving legal article structure, amendments, and cross-references.",
      "Implemented hybrid search strategy blending dense semantic embeddings with exact keyword statute lookups.",
      "Designed citation-verification middleware ensuring all generated responses reference precise legal article identifiers.",
      "Structured low-latency caching for frequent statutory queries to minimize vector database load.",
    ],
    systemHighlights: [
      "Precision retrieval combining keyword statute indices with semantic vector search.",
      "Strict citation-grounded outputs minimizing generative hallucinations in critical legal domains.",
      "Structured Arabic text preprocessing tailored for legal terminology and morphological variations.",
    ],
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Clinical workflow backend managing patient records, electronic health records (EHR), and clinic appointment dispatch.",
    category: "Healthcare & Mission-Critical Backend",
    timeline: "2022",
    status: "Completed",
    technologies: ["Node.js / Express", "PostgreSQL", "Redis", "JWT Auth", "Docker"],
    summary:
      "A secure, HIPAA-conscious medical administration platform unifying outpatient scheduling, doctor duty rosters, prescription dispatch, and laboratory test result tracking.",
    problemStatement:
      "Healthcare backend systems must balance strict data security and patient privacy regulations with the need for immediate, sub-second data accessibility for attending physicians and emergency staff.",
    architectureOverview:
      "Designed with field-level encryption for sensitive health records, detailed audit logging on all patient chart reads/writes, and normalized relational storage for medical histories, prescriptions, and billing claims.",
    keyResponsibilities: [
      "Structured role-based security layers enforcing least-privilege data access across doctors, nurses, and billing staff.",
      "Built appointment scheduling system with doctor availability matrices and real-time waiting list queues.",
      "Implemented comprehensive immutable audit logging for medical record access tracking compliance.",
      "Designed laboratory order pipeline routing test requests from clinic rooms to diagnostics laboratories.",
    ],
    systemHighlights: [
      "Granular role-based security and immutable audit trails for sensitive health data.",
      "Efficient appointment conflict detection engine factoring in doctor shifts and procedure durations.",
      "Clean relational database design ensuring long-term data consistency across historical medical records.",
    ],
  },
];
