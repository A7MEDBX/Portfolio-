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
      "Modern autonomous and semi-autonomous transit systems require continuous tracking of train coordinates, speed, and track occupancy. Data transmitted from moving rolling stock over hardware serial connections can experience frame desynchronization and transient noise. Dispatchers require sub-second state updates without placing unbounded write locks on the persistent database.",
    objectives: [
      "Ingest high-frequency sensor frames from train units via hardware serial UART interfaces with framing error detection.",
      "Decouple real-time state synchronization from persistent telemetry logging using asynchronous message queues.",
      "Broadcast sub-second train positioning updates to operational dispatch dashboards over WebSockets.",
      "Enforce deterministic collision avoidance and track occupancy constraints at the service layer.",
    ],
    systemOverview:
      "SAMCS bridges physical hardware telemetry with web-based operational monitoring. The system receives raw sensor byte frames from train controllers via a UART gateway. Frames undergo CRC validation and are forwarded into a FastAPI/Node.js ingestion pipeline. Verified events are published to RabbitMQ queues: one consumer updates in-memory Redis state caches that feed dispatcher WebSockets, while another asynchronously commits audit logs to PostgreSQL.",
    contribution:
      "Designed and implemented backend telemetry ingestion services, hardware UART interface gateway logic, RabbitMQ message dispatch queues, Redis state caching, and WebSocket streaming infrastructure.",
    keyResponsibilities: [
      "Engineered hardware UART serial interface gateway with byte-level framing and CRC packet validation.",
      "Configured RabbitMQ message brokers to decouple telemetry ingestion from state computation and logging.",
      "Implemented real-time bidirectional WebSocket streaming delivering sub-second fleet positions to dispatchers.",
      "Structured PostgreSQL schemas for audit logs and historical train run records alongside Redis caching.",
      "Authored automated unit and integration tests verifying packet parsing, error thresholds, and event workflows.",
    ],
    implementationDetails: [
      {
        title: "Hardware UART Gateway & Serial Parsing",
        description:
          "Communication with physical train telemetry units occurs through serial UART interfaces configured with explicit baud rates and parity checking.",
        points: [
          "Implemented frame delimiter detection and cyclic redundancy checks (CRC-16) to discard corrupted packets.",
          "Designed non-blocking ring buffers to prevent byte loss during sudden burst transmissions.",
          "Established automated reconnection logic to re-establish serial port handles upon physical disconnects.",
        ],
      },
      {
        title: "Asynchronous Event Pipeline & State Caching",
        description:
          "To avoid blocking hardware ingestion routines, raw events are handed off immediately to RabbitMQ.",
        points: [
          "Topic-based exchanges route telemetry data to dedicated queues for live monitoring and historical persistence.",
          "Redis holds the latest canonical coordinates, speed vectors, and alert flags for instantaneous retrieval.",
          "PostgreSQL receives batch-committed event logs to minimize disk I/O pressure.",
        ],
      },
      {
        title: "WebSocket Dispatcher Gateway",
        description:
          "Operational centers monitor metro fleet movements through low-latency full-duplex WebSocket connections.",
        points: [
          "Implemented room-based channel subscriptions allowing operators to monitor specific metro lines or trains.",
          "Integrated heartbeat ping/pong mechanisms to detect stale connections and clean up subscriber sets.",
          "Maintained state delta broadcasts to minimize bandwidth over mobile networks.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Adopting RabbitMQ for Telemetry Queueing",
        rationale:
          "Ingestion and storage operate at vastly different speeds. A message queue prevents database write latency from stalling high-frequency serial packet reads.",
        alternativeConsidered:
          "Direct in-memory queueing in Python was evaluated but rejected due to lack of persistence across process restarts.",
      },
      {
        decision: "Dual-Tier Storage Architecture (Redis + PostgreSQL)",
        rationale:
          "Dispatchers only require current train positions in sub-second intervals, making Redis optimal. PostgreSQL is reserved for historical audits and incident analysis.",
        alternativeConsidered:
          "Single PostgreSQL database with polling was rejected due to lock contention during continuous high-frequency updates.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Handling Serial Frame Noise and Corrupted Bytes",
        resolution:
          "Introduced a state-machine parser that scans for magic header bytes and verifies CRC before emitting valid telemetry structures.",
        tradeOff:
          "Slight CPU overhead per frame in exchange for guaranteed packet validity.",
      },
      {
        challenge: "WebSocket Connection Drops Under Fluctuating Networks",
        resolution:
          "Implemented client-side reconnection routines with exponential backoff and server-side connection lifecycle tracking.",
        tradeOff:
          "Clients must handle brief state reconciliations upon reconnecting.",
      },
    ],
    testingAndValidation: [
      "Authored unit tests using Pytest for the byte parser, covering malformed packets, truncated buffers, and CRC mismatch scenarios.",
      "Developed mock hardware serial telemetry generators simulating multi-train movements, speed variations, and signal alarms.",
      "Conducted integration tests validating end-to-end message delivery from serial simulator through RabbitMQ to connected WebSocket clients.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Functional UART serial ingestion gateway with CRC packet validation.",
        "RabbitMQ message queuing pipeline separating real-time caching from persistence.",
        "WebSocket server streaming live train telemetry to operational dashboards.",
        "PostgreSQL persistence schema for historical operational telemetry.",
        "Comprehensive automated unit test suite for packet parsing and state computation.",
      ],
      plannedWork: [
        "Automated failover clustering for the message broker nodes.",
        "Predictive maintenance heuristics based on historical sensor deviation logs.",
      ],
      lessonsLearned: [
        "Hardware-software boundaries require defensive programming at every byte boundary.",
        "Separating transient operational state from permanent audit trails significantly simplifies database indexing and backup strategies.",
      ],
    },
    architectureOverview:
      "Sensor streams and train beacons are ingested through a hardware UART gateway into a FastAPI/Node.js ingestion service. Payloads are verified and published to RabbitMQ queues, where worker services validate safety constraints, update Redis state caches for sub-second WebSocket broadcasting, and commit historical telemetry to PostgreSQL.",
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
    objectives: [
      "Construct a secure, authenticated mobile backend for property registration and recovery claims.",
      "Implement a hybrid matching engine combining categorical attribute filters with semantic vector similarity.",
      "Provide real-time peer-to-peer messaging so item finders and claimants can coordinate return logistics.",
      "Ensure image uploads are validated, optimized, and stored in dedicated object storage rather than database BLOBs.",
    ],
    systemOverview:
      "Lostproject connects a Flutter mobile application with a Node.js/Express backend service. User authentication and token verification are handled via Firebase Auth. Relational entities (users, items, categories, claim tickets) reside in PostgreSQL. When users register misplaced or found property with images, media is uploaded to Cloudinary, and descriptive embeddings are indexed in Pinecone to identify potential matches.",
    contribution:
      "Engineered backend RESTful API services in Node.js/Express, designed relational schemas in PostgreSQL, integrated Firebase Authentication, built the Cloudinary media pipeline, and implemented item matching logic using SQL filters and Pinecone vector search.",
    keyResponsibilities: [
      "Constructed REST API endpoints for user profile management, item registration, and claims verification.",
      "Implemented matching engine combining deterministic SQL attribute filters with Pinecone semantic search.",
      "Integrated Firebase Authentication for secure user onboarding and session validation.",
      "Configured Cloudinary pipeline for image upload validation, thumbnail generation, and secure storage.",
      "Built real-time chat service endpoints facilitating direct communication between item owners and finders.",
    ],
    implementationDetails: [
      {
        title: "Authentication & User Profile Management",
        description:
          "User accounts are managed with strict privacy boundaries to prevent exposure of personal contact details.",
        points: [
          "Firebase Auth tokens are validated via backend middleware on every private endpoint.",
          "User profiles are stored in PostgreSQL with normalized contact and notification preferences.",
          "Claim verification workflows require explicit mutual confirmation before contact exchange is permitted.",
        ],
      },
      {
        title: "Hybrid Item Matching Pipeline",
        description:
          "Matching items based solely on exact text fails when descriptions vary in vocabulary or language.",
        points: [
          "Deterministic SQL queries filter by geographic radius, date range, and primary category.",
          "Pinecone vector search matches semantic text descriptions across multilingual inputs.",
          "Scores are combined to rank prospective matches presented to the user.",
        ],
      },
      {
        title: "Media Upload & Chat Coordination",
        description:
          "Users submit photos of found items to substantiate claims, requiring secure media pipelines.",
        points: [
          "Direct authenticated uploads to Cloudinary with server-side signature validation.",
          "Image dimensions and file sizes are strictly checked before storing CDN URLs in PostgreSQL.",
          "In-app messaging service enables claimants and finders to discuss item verification safely.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Hybrid Matching (SQL Filters + Pinecone Vectors)",
        rationale:
          "Pure vector search can return geographically impossible matches. Combining categorical SQL filters with vector similarity yields accurate, localized results.",
        alternativeConsidered:
          "Full-text search in PostgreSQL was evaluated, but lacked semantic comprehension for differing item synonyms.",
      },
      {
        decision: "External Media Storage via Cloudinary",
        rationale:
          "Storing binary images in PostgreSQL leads to database bloat and slow backups. Cloudinary offloads transformation, compression, and global CDN delivery.",
        alternativeConsidered:
          "Local file storage on the server was rejected due to lack of persistence across container redeployments.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Preventing Spam and False Recovery Claims",
        resolution:
          "Enforced rate limiting on claim submissions and required security verification questions set by the original poster.",
        tradeOff:
          "Adds slight friction to claim creation, but drastically reduces fraudulent interactions.",
      },
      {
        challenge: "Handling Image Upload Latency on Mobile Networks",
        resolution:
          "Implemented client-side image compression in Flutter prior to upload dispatch.",
        tradeOff:
          "Client device performs slight compression work before transmitting bytes.",
      },
    ],
    testingAndValidation: [
      "Tested API endpoints with automated Jest test suites covering authentication guards, profile updates, and claim state transitions.",
      "Validated vector similarity queries against test item datasets containing synonym variations.",
      "Performed integration tests ensuring invalid image formats (e.g., non-image binaries) are rejected at the upload boundary.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Full RESTful backend API with authentication middleware and profile management.",
        "PostgreSQL schema design with foreign key constraints across items, claims, and chat rooms.",
        "Cloudinary signed media upload integration with thumbnail generation.",
        "Hybrid matching pipeline incorporating SQL constraints and Pinecone vector search.",
        "Flutter mobile application screens for item discovery, claim tracking, and chat.",
      ],
      plannedWork: [
        "Push notifications for instant match alerts when new matching listings are posted.",
        "Automated optical character recognition (OCR) on uploaded receipts or serial numbers.",
      ],
      lessonsLearned: [
        "Combining relational SQL constraints with vector embeddings provides much higher precision than either method alone.",
        "Decoupling media storage from core database instances is vital for keeping relational backups small and agile.",
      ],
    },
    architectureOverview:
      "The Flutter mobile client communicates with a Node.js/Express backend protected by Firebase authentication middleware. Relational data is persisted in PostgreSQL, uploaded images are processed via Cloudinary, and item attribute embeddings are indexed in Pinecone for semantic matching queries.",
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
    objectives: [
      "Organize diverse destination articles and travel metadata into a structured, queryable taxonomy.",
      "Implement responsive website layouts that prioritize reading legibility and fast navigation.",
      "Build multi-attribute search and filtering across locations, travel styles, and trip types.",
      "Maintain clean separation between editorial content data models and presentation components.",
    ],
    systemOverview:
      "Airzigzag is architected around clean information design and modular layout components. Destination guides and articles are indexed by region, category, and travel style. Search queries are resolved with low latency through optimized lookup tables, and pages are rendered with a focus on editorial typography, responsive layouts, and performance.",
    contribution:
      "Designed and implemented the core website architecture, structured destination content data models, built search and category filtering logic, and ensured a clean, responsive layout optimized for readable editorial travel presentations.",
    keyResponsibilities: [
      "Architected clean website routing and modular layout components for travel destination guides.",
      "Structured data models for categorized travel content, destination profiles, and practical travel advisories.",
      "Implemented multi-attribute search and filtering for locations, travel styles, and trip types.",
      "Optimized frontend responsive behavior and asset delivery across mobile, tablet, and desktop viewports.",
    ],
    implementationDetails: [
      {
        title: "Content Modeling & Taxonomy",
        description:
          "Travel content requires structured relationships between continents, countries, regional guides, and localized advice.",
        points: [
          "Constructed hierarchical schemas connecting destinations to articles, practical tips, and travel seasons.",
          "Standardized article metadata including reading time, difficulty ratings, and recommended visit durations.",
        ],
      },
      {
        title: "Search & Attribute Filtering",
        description:
          "Visitors need to locate travel ideas based on various travel styles (solo, budget, adventure) or specific locations.",
        points: [
          "Built multi-criteria filtering enabling users to narrow guides by region, budget, and season.",
          "Implemented lightweight client-side caching to make category browsing instant.",
        ],
      },
      {
        title: "Editorial Presentation & Responsive Design",
        description:
          "Long-form travel guides require readable typography, scannable layouts, and fast asset loading.",
        points: [
          "Developed fluid typography scale and balanced spacing systems across screen breakpoints.",
          "Implemented lazy loading for editorial imagery to minimize initial page payload.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Modular Component Architecture",
        rationale:
          "Breaking down travel cards, destination headers, and editorial blocks into reusable modules ensures visual consistency and maintainability.",
        alternativeConsidered:
          "Monolithic page templates were rejected due to high code duplication across destination guides.",
      },
      {
        decision: "Static Asset Optimization Strategy",
        rationale:
          "Travel websites are media-heavy. Enforcing image sizing constraints and responsive image attributes prevents layout shifts.",
        alternativeConsidered:
          "Serving raw uncompressed photography was rejected due to mobile bandwidth constraints.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Balancing Visual Richness with Fast Mobile Page Loads",
        resolution:
          "Adopted responsive image srcsets and prioritized critical CSS to ensure fast first contentful paint.",
        tradeOff:
          "Requires asset pre-processing pipeline during content publishing.",
      },
      {
        challenge: "Managing Deep Destination Hierarchies",
        resolution:
          "Structured breadcrumbs and categorical sidebar navigation to keep users oriented.",
        tradeOff:
          "Slightly increased layout complexity on smaller mobile viewports.",
      },
    ],
    testingAndValidation: [
      "Tested layout responsiveness across mobile, tablet, and desktop browser viewports.",
      "Verified navigation breadcrumbs and internal links across all destination hierarchies.",
      "Validated accessibility contrast scores across typography and interactive navigation elements.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Structured content architecture and data models for destinations and travel guides.",
        "Multi-attribute search and destination category filtering system.",
        "Fully responsive editorial layout and typography system.",
        "Cross-browser tested interface with verified mobile navigation.",
      ],
      plannedWork: [
        "Integration of live flight and accommodation fare comparison widgets.",
        "Interactive destination mapping with downloadable offline itinerary summaries.",
      ],
      lessonsLearned: [
        "Clear content hierarchies and information architecture are more important for usability than complex visual effects.",
        "Consistent spacing and disciplined typography significantly elevate editorial credibility.",
      ],
    },
    architectureOverview:
      "Constructed around modular page routing and structured content collections. Destination articles and travel metadata are indexed for rapid keyword and category filtering, served through responsive layouts that prioritize legibility and fast navigation.",
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
    objectives: [
      "Provide administrative staff and club members with a reliable facility booking system.",
      "Prevent double-booking of sports courts during overlapping reservation requests.",
      "Secure sensitive member actions and login requests using one-time password (OTP) verification.",
      "Maintain a lightweight, self-contained relational database requiring minimal operational overhead.",
    ],
    systemOverview:
      "The application couples a React single-page frontend with a lightweight Flask REST backend. SQLite provides local relational persistence. When members log in or request court reservations, OTP verification endpoints ensure identity confirmation before booking transactions are committed.",
    contribution:
      "Developed the backend API using Python and Flask, designed the normalized SQLite relational schema, built OTP authentication and verification endpoints, and integrated the services with the React frontend.",
    keyResponsibilities: [
      "Engineered Flask REST endpoints for member registration, authentication, and court slot reservations.",
      "Implemented OTP-based verification workflows for secure user authentication.",
      "Designed normalized SQLite database tables with foreign key constraints preventing conflicting bookings.",
      "Connected React client components to backend endpoints with structured error handling.",
    ],
    implementationDetails: [
      {
        title: "Flask API & Endpoint Design",
        description:
          "Constructed RESTful endpoints handling member records, membership status, and court slot schedules.",
        points: [
          "Built parameterized request handlers with defensive input sanitization.",
          "Implemented structured JSON error payloads for client-side feedback.",
        ],
      },
      {
        title: "OTP Verification Logic",
        description:
          "Authentication workflows incorporate time-limited OTP tokens for identity verification.",
        points: [
          "Engineered token generation routines with explicit expiration timeouts.",
          "Maintained attempt counters to protect endpoints from brute-force token guessing.",
        ],
      },
      {
        title: "Database Modeling in SQLite",
        description:
          "Normalized relational schema enforcing constraints across members, court slots, and bookings.",
        points: [
          "Unique composite keys on court ID and time interval prevent overlapping reservations.",
          "Foreign key constraints enforce referential integrity between members and bookings.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Lightweight SQLite Architecture",
        rationale:
          "For a local sports club deployment, an embedded SQLite database avoids the operational complexity and server overhead of a standalone database server.",
        alternativeConsidered:
          "PostgreSQL was evaluated, but deemed unnecessary given the single-facility operational scale.",
      },
      {
        decision: "Database-Enforced Booking Constraints",
        rationale:
          "Relying solely on application-level checks can allow race conditions. Enforcing constraints in SQL guarantees slot uniqueness.",
        alternativeConsidered:
          "Application-only lock checking was considered but discarded due to concurrency risks.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Handling Simultaneous Booking Requests for Popular Slots",
        resolution:
          "Utilized database transaction isolation and explicit unique constraints on time slots to immediately reject conflicting attempts.",
        tradeOff:
          "The second conflicting user receives a booking error and must select an alternative slot.",
      },
    ],
    testingAndValidation: [
      "Unit tested OTP generation, validation, and expiration routines.",
      "Tested API endpoints with mock request payloads verifying error responses for invalid inputs.",
      "Verified conflict prevention by attempting duplicate bookings on identical court and time intervals.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Complete Flask REST API supporting member CRUD and court scheduling.",
        "OTP verification workflow for authenticated operations.",
        "Normalized SQLite relational schema with constraint enforcement.",
        "React frontend integration for booking creation and management.",
      ],
      plannedWork: [
        "Automated SMS gateway integration for mobile OTP delivery.",
        "Recurring membership subscription payment processing.",
      ],
      lessonsLearned: [
        "Database constraints are the most reliable defense against race conditions and double bookings.",
        "Keeping operational architecture lightweight for single-facility tools drastically reduces maintenance burden.",
      ],
    },
    architectureOverview:
      "React single-page application communicating with a Flask REST API backend. SQLite handles local relational persistence with transactional integrity for reservation slots and OTP authentication tokens.",
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
    objectives: [
      "Extract readable Arabic legal text from scanned PDF archives using specialized OCR pipelines.",
      "Segment extracted legal text using structural article-level boundaries rather than arbitrary character splits.",
      "Implement vector retrieval endpoints matching user questions with relevant statutory passages.",
      "Ensure retrieved answers reference exact statutory article numbers for legal citation.",
    ],
    systemOverview:
      "Scanned legal documents are processed through an OCR extraction pipeline. Cleaned Arabic text is segmented using structural article-level chunking, indexed for retrieval, and queried via FastAPI backend endpoints.",
    contribution:
      "Constructed the document ingestion and OCR pipeline for Arabic legal documents, implemented structural chunking preserving statute article boundaries, and integrated vector retrieval endpoints in Python/FastAPI for contextual question answering.",
    keyResponsibilities: [
      "Engineered OCR document ingestion pipeline extracting Arabic text from statutory archives.",
      "Implemented hierarchical chunking respecting statutory article numbers and legal sections.",
      "Developed retrieval endpoints matching user legal questions against relevant statutory excerpts.",
    ],
    implementationDetails: [
      {
        title: "Arabic OCR Pipeline & Text Preprocessing",
        description:
          "Scanned government gazettes feature historical typography and multi-column formats requiring careful preprocessing.",
        points: [
          "Applied image thresholding and deskewing to improve character recognition quality.",
          "Handled Arabic text shaping, diacritics removal, and normalization of common ligature variations.",
        ],
      },
      {
        title: "Article-Level Structural Chunking",
        description:
          "Splitting legal statutes arbitrarily can sever legal definitions from their penalties.",
        points: [
          "Developed regex and structural parsers recognizing statutory article markers (e.g., 'المادة رقم').",
          "Preserved article metadata, law numbers, and chapter headings within each text chunk.",
        ],
      },
      {
        title: "FastAPI Retrieval Interface",
        description:
          "Backend endpoints accept natural language legal inquiries and retrieve top-ranking statutory excerpts.",
        points: [
          "Integrated dense vector embedding search for semantic query matching.",
          "Attached statutory source citations to returned excerpts for legal verification.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Article-Boundary Chunking Over Fixed-Size Tokens",
        rationale:
          "Legal articles are coherent semantic units. Splitting across article boundaries corrupts legal meaning and degrades retrieval precision.",
        alternativeConsidered:
          "Standard 500-token chunking was evaluated but discarded due to severed cross-references.",
      },
      {
        decision: "FastAPI for Ingestion & Query Serving",
        rationale:
          "FastAPI provides asynchronous request handling, native typing, and seamless integration with Python ML/OCR libraries.",
        alternativeConsidered:
          "Flask was considered but FastAPI offered cleaner asynchronous concurrency for document processing.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "OCR Inaccuracies on Degraded Historical Scans",
        resolution:
          "Implemented post-OCR dictionary-based spell-checking tailored to formal Egyptian legal terminology.",
        tradeOff:
          "Heavily degraded historical scans still occasionally require manual review.",
      },
    ],
    testingAndValidation: [
      "Evaluated OCR extraction accuracy against sample verified legal statute excerpts.",
      "Tested article chunking parser across diverse law documents to ensure article markers are consistently identified.",
      "Benchmarked retrieval endpoints against common legal inquiry test queries.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Arabic OCR ingestion pipeline with image deskewing and text normalization.",
        "Article-level structural chunking parser preserving statute numbers.",
        "FastAPI service serving vector retrieval queries against indexed legal statutes.",
      ],
      plannedWork: [
        "Hybrid retrieval combining dense vectors with exact lexical BM25 search.",
        "Fine-tuned citation verification model assessing answer faithfulness.",
      ],
      lessonsLearned: [
        "Domain-aware document chunking (such as respecting legal article boundaries) is the single most impactful factor in retrieval quality.",
        "Arabic text preprocessing requires dedicated handling of ligatures and diacritics.",
      ],
    },
    architectureOverview:
      "Scanned legal documents are processed through an OCR extraction pipeline. Cleaned Arabic text is segmented using structural article-level chunking, indexed for retrieval, and queried via FastAPI backend endpoints.",
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
    objectives: [
      "Deliver a high-performance native desktop GUI for hospital reception and outpatient clinics.",
      "Manage patient records, doctor availability matrices, and appointment bookings with zero network latency.",
      "Prevent scheduling conflicts across doctor schedules through robust relational validation.",
      "Ensure local data persistence with reliable SQLite transactional guarantees.",
    ],
    systemOverview:
      "Native desktop application compiled with C++ and Qt Widgets. Data persistence is managed locally via an embedded SQLite database with transactional ACID guarantees.",
    contribution:
      "Developed the desktop GUI using C++ and the Qt framework, designed normalized SQLite relational schemas, and implemented CRUD operations and validation rules for patient records and doctor appointments.",
    keyResponsibilities: [
      "Designed desktop user interface views for patient check-in, appointment booking, and record lookups in Qt.",
      "Engineered C++ database access layers managing SQLite queries and parameterized statements.",
      "Implemented appointment conflict validation rules preventing overlapping doctor bookings.",
    ],
    implementationDetails: [
      {
        title: "Qt Widget Desktop Interface",
        description:
          "Constructed native desktop screens tailored for rapid keyboard input by reception staff.",
        points: [
          "Developed tabbed interfaces for patient intake, appointment scheduling, and doctor roster views.",
          "Implemented input masks and validators for phone numbers, dates, and medical identification numbers.",
        ],
      },
      {
        title: "C++ Data Access Layer",
        description:
          "Encapsulated SQLite database operations within a modular C++ repository pattern.",
        points: [
          "Utilized prepared SQL statements to prevent syntax injection and ensure query execution speed.",
          "Implemented transactional error handling with rollbacks on failed multi-record insertions.",
        ],
      },
      {
        title: "Scheduling Conflict Engine",
        description:
          "Algorithms verify doctor availability before finalizing appointment bookings.",
        points: [
          "Evaluates doctor working hours, break periods, and existing bookings to detect time overlaps.",
          "Presents real-time visual alerts to staff if a requested appointment slot is unavailable.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Native C++/Qt Architecture",
        rationale:
          "Provides immediate desktop responsiveness, low memory footprint, and full offline autonomy for clinical environments.",
        alternativeConsidered:
          "Electron was evaluated, but rejected due to high resource usage and unnecessary runtime complexity.",
      },
      {
        decision: "Embedded SQLite for Local Storage",
        rationale:
          "Zero-configuration embedded database ensures the clinic application can run on standalone workstations without a dedicated database administrator.",
        alternativeConsidered:
          "Client-server MySQL was considered, but deemed excessive for independent clinic setups.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Managing UI State Synchronization with SQLite Operations",
        resolution:
          "Utilized Qt's signal-and-slot mechanism to decouple database operations from UI widget updates.",
        tradeOff:
          "Requires careful lifetime management of C++ model objects.",
      },
    ],
    testingAndValidation: [
      "Conducted manual and automated testing of scheduling logic verifying conflict detection on overlapping slots.",
      "Validated database schema integrity with edge cases including patient record deletion and cascade behaviors.",
      "Tested application responsiveness under simulated datasets of several thousand patient records.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Fully functional C++/Qt desktop interface with appointment booking and patient intake views.",
        "Modular C++ data access layer interfacing with embedded SQLite.",
        "Conflict detection engine preventing overlapping doctor appointments.",
        "Input validation guards ensuring data consistency across patient records.",
      ],
      plannedWork: [
        "Local database automated backup routines to external storage media.",
        "Export capabilities generating printable PDF appointment summaries.",
      ],
      lessonsLearned: [
        "Native desktop applications offer unparalleled responsiveness and reliability in offline-first operational settings.",
        "Separating the UI presentation layer from database access layers in C++ via signals and slots makes testing and maintenance straightforward.",
      ],
    },
    architectureOverview:
      "Native desktop application compiled with C++ and Qt Widgets. Data persistence is managed locally via an embedded SQLite database with transactional ACID guarantees.",
    systemHighlights: [
      "High-performance native desktop execution with zero network latency.",
      "Local relational database with full data persistence and backup capabilities.",
    ],
    repositoryUrl: "https://github.com",
  },
];
