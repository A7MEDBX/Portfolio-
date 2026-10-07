import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "samcs",
    title: "SAMCS — Smart Autonomous Metro Control & Monitoring Platform",
    subtitle: "Real-time supervisory telemetry, autonomous transit coordination, and hardware gateway integration.",
    category: "Distributed Systems & Telemetry",
    timeline: "2026",
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
        title: "UART Communication & Frame Handling",
        description:
          "Communication with physical train telemetry microcontrollers occurs over serial UART interfaces configured with 115200 baud, 8 data bits, no parity, and 1 stop bit (8-N-1).",
        points: [
          "Developed non-blocking serial reading routines in Python utilizing pyserial and ring buffers to prevent byte loss during sudden bursts.",
          "Implemented automated port discovery and reconnect handlers to seamlessly recover from physical cable disconnects or USB-to-UART adapter resets.",
          "Applied frame synchronization scanning for magic preamble bytes (0xAA 0x55) to establish clean frame boundaries amidst serial line noise.",
        ],
      },
      {
        title: "Message Parsing & Validation",
        description:
          "Incoming binary frames are strictly parsed and validated before being converted into structured application payloads.",
        points: [
          "Enforced strict 18-byte fixed-header binary layout containing preamble, train identifier, 32-bit UTC epoch timestamp, speed in tenths of km/h, track block ID, and alarm bitmasks.",
          "Computed and verified CRC-16 (CCITT polynomial 0x1021) checksums over the payload bytes; corrupted packets are logged and immediately discarded without polluting downstream systems.",
          "Validated domain invariants (e.g., maximum permissible acceleration thresholds and valid track block identifiers) at the gateway boundary.",
        ],
      },
      {
        title: "Event-Driven Processing with RabbitMQ",
        description:
          "To insulate the serial hardware ingestion loop from backend database latency, events are published asynchronously to a centralized RabbitMQ broker.",
        points: [
          "Configured a topic exchange ('amq.topic') routing telemetry packets based on routing keys like 'metro.line1.train4.telemetry' and 'metro.alerts.emergency'.",
          "Decoupled telemetry ingestion from state computation, allowing workers to scale independently based on processing load.",
          "Implemented publisher confirms and dead-letter exchanges (DLX) to safely capture unroutable or malformed payloads for post-incident debugging.",
        ],
      },
      {
        title: "Backend APIs & Service Organization",
        description:
          "The backend architecture separates operational event coordination, client REST APIs, and analytical computations into dedicated services.",
        points: [
          "The primary Node.js service manages RabbitMQ consumer loops, executes state updates, and coordinates WebSocket client connections.",
          "A companion Python/FastAPI analytics service provides dedicated REST endpoints for complex sensor data aggregation and historical query transformations.",
          "Clear separation of concerns is maintained across transport handlers, domain business rules, and repository persistence layers.",
        ],
      },
      {
        title: "Database Persistence (PostgreSQL & Redis)",
        description:
          "Persistence utilizes a dual-tier strategy balancing sub-second access requirements with long-term audit trail durability.",
        points: [
          "PostgreSQL stores normalized relational tables for trains, metro lines, driver shifts, emergency alarm logs, and historical trip telemetry.",
          "Telemetry write operations are batched in memory and committed periodically to PostgreSQL to minimize disk I/O contention during peak traffic.",
          "Composite B-tree indexes on (train_id, recorded_at) optimize historical trajectory and velocity queries.",
          "Redis caches current train coordinates, speed vectors, and active alarm states with short TTLs for instant retrieval.",
        ],
      },
      {
        title: "WebSocket Connection Management & Broadcasting",
        description:
          "The React operational dashboard receives live train movements and alarms via low-latency full-duplex WebSockets.",
        points: [
          "Built a connection lifecycle manager in Node.js tracking connected dispatcher clients and active subscription channels.",
          "Implemented channel-based filtering allowing dispatchers to subscribe to specific metro lines rather than receiving all network traffic.",
          "Heartbeat ping/pong frames detect broken connections; stale sockets are pruned to prevent memory leaks.",
          "Emitted state deltas rather than full state trees to conserve mobile bandwidth for field supervisors.",
        ],
      },
      {
        title: "Testing & Error Handling",
        description:
          "Rigorously validated with automated test suites and synthetic telemetry generators simulating edge cases.",
        points: [
          "Pytest suites verify byte parser edge cases including truncated frames, corrupted CRCs, and out-of-order byte streams.",
          "Developed a mock hardware simulator generating realistic multi-train telemetry, emergency brake triggers, and line blockages.",
          "Jest integration suites verify Node.js RabbitMQ consumers, ensuring state changes correctly update Redis and trigger WebSocket broadcasts.",
        ],
      },
      {
        title: "Docker & Local Development",
        description:
          "The entire multi-service distributed topology is orchestrated via Docker Compose for reproducible local development and testing.",
        points: [
          "Configured multi-container topology orchestrating the Python UART Gateway, RabbitMQ, Node.js Backend, Redis, PostgreSQL, and FastAPI services.",
          "Defined health checks and startup dependency graphs (e.g., backend waits for RabbitMQ and PostgreSQL readiness).",
          "Mounted development volumes and explicit environment variable files for seamless local iteration without configuration drift.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Adopting RabbitMQ as the Central Message Broker",
        rationale:
          "RabbitMQ provides flexible AMQP topic-based routing, robust delivery acknowledgments, and lightweight broker footprint. It cleanly decouples the real-time serial hardware loop from backend processing and disk I/O.",
        alternativeConsidered:
          "Apache Kafka was evaluated but rejected as overly heavy and operational overkill for the transit fleet scale. In-process event emitters were rejected due to lack of persistence across process restarts.",
      },
      {
        decision: "Dual-Tier Persistence (Redis for Live State, PostgreSQL for Audit)",
        rationale:
          "Dispatchers only require current train positions in sub-second intervals, making in-memory key-value lookups in Redis optimal. PostgreSQL is reserved for durable historical audits and incident analysis, insulated from high-frequency telemetry writes.",
        alternativeConsidered:
          "Writing every raw frame directly to PostgreSQL was evaluated but led to excessive disk write volume and lock contention during high-frequency telemetry bursts.",
      },
      {
        decision: "Full-Duplex WebSockets Over HTTP Long Polling",
        rationale:
          "Sub-second fleet monitoring demands instant bidirectional dispatching. WebSockets eliminate HTTP header overhead and latency associated with repetitive polling.",
        alternativeConsidered:
          "Server-Sent Events (SSE) were considered for unidirectional streaming, but WebSockets allowed future bidirectional dispatcher commands over the same socket.",
      },
      {
        decision: "Boundary Validation at the Hardware Gateway Layer",
        rationale:
          "Validating frames (preamble check and CRC verification) immediately at the serial interface prevents malformed or corrupted packets from ever reaching RabbitMQ or downstream services.",
        alternativeConsidered:
          "Pushing raw bytes directly into queues and delegating validation downstream was rejected to avoid wasted compute and poisoned consumer queues.",
      },
      {
        decision: "Multi-Language Service Separation (Python for Serial, Node.js for WebSockets)",
        rationale:
          "Python provides mature serial communication and mathematical libraries for sensor decoding. Node.js excels at high-concurrency asynchronous I/O and managing thousands of concurrent WebSocket client connections.",
        alternativeConsidered:
          "Building everything in a single monolithic Python process was evaluated, but GIL constraints caused occasional WebSocket broadcast latency spikes during heavy sensor decoding.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Handling Serial Frame Noise and Corrupted Byte Streams",
        resolution:
          "Constructed a state-machine parser that scans for magic preambles and verifies CRC-16 before emitting valid telemetry structures.",
        tradeOff:
          "Introduces slight CPU parsing overhead per frame, which is an acceptable trade-off for guaranteed packet validity.",
      },
      {
        challenge: "WebSocket Connection Drops and Network Volatility",
        resolution:
          "Implemented client-side reconnection routines with exponential backoff, state reconciliation upon reconnect, and server-side heartbeat tracking.",
        tradeOff:
          "Clients must briefly reconcile state upon reconnecting rather than assuming seamless continuity.",
      },
      {
        challenge: "Concurrency and Race Conditions in Multi-Train Collision Warnings",
        resolution:
          "Track segment reservations are managed through centralized state validations before updating track occupancy tables.",
        tradeOff:
          "Slight serialization delay when multiple trains report simultaneous block occupancy.",
      },
    ],
    testingAndValidation: [
      "Authored unit tests using Pytest for the byte parser, covering malformed packets, truncated buffers, and CRC mismatch scenarios.",
      "Developed mock hardware serial telemetry generators simulating multi-train movements, speed variations, and signal alarms.",
      "Conducted integration tests validating end-to-end message delivery from serial simulator through RabbitMQ to connected WebSocket clients.",
      "Verified database schema integrity and foreign key constraints under simulated concurrent batch insert loads.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Functional Python UART serial ingestion gateway with CRC-16 packet validation and ring-buffer framing.",
        "RabbitMQ message queuing pipeline separating real-time caching from relational persistence.",
        "Node.js backend service consuming queue events and broadcasting live train state to connected WebSocket clients.",
        "Dual-tier persistence: Redis for sub-second live telemetry reads, PostgreSQL for historical audit logs.",
        "FastAPI service endpoints providing sensor data transformations and analytics.",
        "Multi-container Docker Compose configuration orchestrating the entire platform locally.",
        "Automated unit test suite verifying parser robustness and simulated multi-train telemetry.",
      ],
      plannedWork: [
        "High-availability clustering and automated failover for RabbitMQ broker nodes.",
        "Predictive maintenance models based on historical sensor deviation trends.",
        "Hardware-in-the-loop (HIL) testing against physical scale-model railway track controllers.",
      ],
      lessonsLearned: [
        "Boundary validation at the ingestion layer is the single best defense against distributed system pollution.",
        "Decoupling physical hardware serial reading from web-facing event distribution using message queues is essential for system stability.",
        "Explicitly separating transient operational state from permanent audit logs keeps databases performant and backups agile.",
        "Engineering Prototype Notice: SAMCS is an advanced engineering prototype and distributed systems research platform developed for technical research; it does not claim formal railway safety integrity certifications (SIL-4) or municipal transit production deployment.",
      ],
    },
    architectureOverview:
      "Sensor streams and train beacons are ingested through a hardware UART gateway into a FastAPI/Node.js ingestion service. Payloads are verified and published to RabbitMQ queues, where worker services validate safety constraints, update Redis state caches for sub-second WebSocket broadcasting, and commit historical telemetry to PostgreSQL.",
    systemHighlights: [
      "Reliable serial packet decoding with automated error handling and framing recovery.",
      "Decoupled event pipeline separating real-time alerting from historical auditing.",
      "Sub-second state synchronization across dispatcher WebSocket connections.",
    ],
    repositoryUrl: "https://github.com/A7MEDBX",
  },
  {
    slug: "lostproject",
    title: "Finder (Lost & Found Asset Recovery Platform)",
    subtitle: "Mobile application and backend service for asset recovery, 14-digit National ID verification, AI matching, and recovery rewards.",
    category: "Mobile Backend & Platform",
    timeline: "2025 — 2026",
    status: "Completed",
    featured: true,
    technologies: [
      "Flutter",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Firebase Auth",
      "Cloudinary",
      "Pinecone (AI Matching)",
      "National ID KYC",
      "Vodafone Cash & InstaPay",
    ],
    summary:
      "Finder (developed under the project codename Lostproject) is an end-to-end asset recovery mobile application and backend service. Features include 14-digit Egyptian National ID KYC verification, AI image-assisted property registration, hybrid semantic matching via Pinecone, peer-to-peer chat, and an incentive Points Wallet with direct mobile cash out rails (Vodafone Cash, InstaPay).",
    problemStatement:
      "Misplaced property recovery requires cross-referencing fragmented user descriptions across diverse item categories and locations, protecting communities from anonymous scammers and fraudulent claims, securely handling image uploads without degrading database performance, and providing meaningful incentives for citizens to return lost belongings.",
    objectives: [
      "Construct a secure, authenticated mobile backend for property registration, search, and recovery claims.",
      "Enforce mandatory KYC identity verification using 14-digit Egyptian National ID validation and document uploads before allowing item submissions.",
      "Implement a hybrid matching engine combining categorical attribute filters with semantic vector similarity.",
      "Provide real-time peer-to-peer messaging so item finders and claimants can coordinate return logistics.",
      "Architect an incentive Points Wallet ledger enabling cash withdrawals via Vodafone Cash and InstaPay.",
      "Ensure image uploads are validated, optimized, and stored in dedicated object storage rather than database BLOBs.",
    ],
    systemOverview:
      "Finder connects a cross-platform Flutter mobile client with a Node.js/Express backend. To protect community integrity, users complete mandatory KYC verification using their 14-digit Egyptian National ID and ID card photo before submitting reports. When property is reported, uploaded photos are processed via Cloudinary and transformed into vector embeddings in Pinecone for semantic similarity matching. Upon successful asset recovery, finders earn points redeemable for cash via Egyptian payment rails (Vodafone Cash, Orange Cash, Etisalat Cash, InstaPay).",
    contribution:
      "Engineered backend RESTful API services in Node.js/Express, designed relational schemas in PostgreSQL, built 14-digit Egyptian National ID verification routines, integrated Firebase Authentication, constructed the Cloudinary media pipeline, and implemented item matching logic using SQL filters and Pinecone vector search.",
    keyResponsibilities: [
      "Constructed REST API endpoints for user profile management, item registration, and claims verification.",
      "Engineered KYC identity verification endpoints validating 14-digit Egyptian National ID numbers and document photos.",
      "Implemented matching engine combining deterministic SQL attribute filters with Pinecone semantic search.",
      "Built incentive Points Wallet ledger supporting tiered cash out requests via local mobile payment rails (Vodafone Cash, InstaPay).",
      "Integrated Firebase Authentication for secure user onboarding and session validation.",
      "Configured Cloudinary pipeline for image upload validation, thumbnail generation, and secure storage.",
      "Built real-time chat service endpoints facilitating direct communication between item owners and finders.",
    ],
    implementationDetails: [
      {
        title: "Flutter Mobile Application Architecture",
        description:
          "The mobile client was constructed in Flutter (Dart) to provide cross-platform parity on iOS and Android with native performance.",
        points: [
          "Developed modular screen architectures for the Community Feed with privacy-protected incident cards, lost/found registration with AI image input, 14-digit Egyptian National ID KYC verification, user profiles, and chat rooms.",
          "Integrated camera and media picker plugins with client-side image compression prior to network dispatch.",
          "Implemented state management routines tracking user sessions, active filters, and real-time chat message streams.",
        ],
      },
      {
        title: "Node.js & Express REST Backend & API Boundaries",
        description:
          "The backend is structured around a decoupled layered architecture separating HTTP routing, validation middleware, domain logic, and persistence.",
        points: [
          "Organized controllers and service modules with clean boundary encapsulation for users, items, claims, and chat.",
          "Enforced strict request body validation using schema validation middleware to reject malformed payloads before domain processing.",
          "Implemented standardized JSON API response formats with contextual error messages and status codes.",
        ],
      },
      {
        title: "PostgreSQL Relational Schema Design",
        description:
          "A normalized relational model enforces data integrity across users, property listings, and recovery communication.",
        points: [
          "Created tables for 'users', 'item_categories', 'items', 'claims', 'chat_rooms', and 'messages' with foreign key cascades.",
          "Maintained indexes on category ID, location coordinates, status flags, and creation timestamps for rapid filtering.",
          "Applied transaction blocks (BEGIN / COMMIT) on item claim transitions to ensure mutually exclusive resolution.",
        ],
      },
      {
        title: "Authentication & Authorization via Firebase Auth",
        description:
          "User authentication is delegated to Firebase Auth on the client, with strict verification on the backend.",
        points: [
          "Clients transmit Firebase JWT bearer tokens in HTTP authorization headers.",
          "Custom backend middleware decodes and verifies tokens via the Firebase Admin SDK on all protected endpoints.",
          "Enforced role-based checks ensuring only item owners can modify listings, accept claim requests, or close tickets.",
        ],
      },
      {
        title: "Hybrid Matching: Pinecone Vector Embeddings & SQL Constraints",
        description:
          "Item matching incorporates both hard relational constraints and semantic vector similarity.",
        points: [
          "Deterministic SQL queries filter candidate items by geographic proximity, date boundaries, and primary categories.",
          "Text descriptions are embedded and indexed in Pinecone to calculate cosine similarity across synonym-heavy descriptions.",
          "Combined scoring ranks prospective matches, notifying users when high-confidence matches are registered.",
        ],
      },
      {
        title: "Media Management & Cloudinary Integration",
        description:
          "Images of lost and found property are handled securely via dedicated media pipelines without overloading the database.",
        points: [
          "Backend issues signed upload parameters allowing authenticated clients to upload images directly to Cloudinary.",
          "Enforced file size restrictions and image MIME-type validation before committing Cloudinary public IDs and URLs to PostgreSQL.",
          "Utilized Cloudinary on-the-fly transformations to generate uniform thumbnails for discovery lists and high-res views for claims.",
        ],
      },
      {
        title: "Real-Time Chat & Socket.io Communication",
        description:
          "Claimants and finders communicate via real-time messaging to coordinate property return logistics safely.",
        points: [
          "Integrated Socket.io server handling authenticated room-based messaging between claim participants.",
          "Persisted all messages in PostgreSQL with delivered and read status flags.",
          "Engineered unread message counter sync routines updating badge notifications on client reconnection.",
        ],
      },
      {
        title: "Administrative & Content Moderation Endpoints",
        description:
          "Backend incorporates moderation capabilities to prevent abuse, spam, and inappropriate listings.",
        points: [
          "Implemented endpoints allowing users to flag suspicious items or abusive chat interactions.",
          "Provided administrative listing review endpoints to deactivate fraudulent items and ban malicious user accounts.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Hybrid Matching Strategy (SQL Relational Filters + Pinecone Vectors)",
        rationale:
          "Pure vector search can match an item with an identical description located hundreds of miles away. Enforcing strict SQL geographic and categorical filters first, then running Pinecone vector similarity on the subset, ensures high relevance and minimal false positives.",
        alternativeConsidered:
          "PostgreSQL full-text search (tsvector) was evaluated, but failed to reliably associate synonyms (e.g. 'rucksack' vs 'backpack' or 'keys' vs 'keychain').",
      },
      {
        decision: "Offloading Media Storage to Cloudinary via Signed Uploads",
        rationale:
          "Storing binary image data directly in PostgreSQL causes severe table bloat, slow backups, and high memory consumption. Cloudinary signed uploads eliminate server bandwidth bottlenecks while providing automated image optimization and CDN delivery.",
        alternativeConsidered:
          "Local file storage on the server was rejected due to lack of persistence across container redeployments and absence of built-in image resizing.",
      },
      {
        decision: "Firebase Auth Token Verification on Express Middleware",
        rationale:
          "Leveraging Firebase Auth on the client provides battle-tested password, email, and social login workflows. Verifying the JWT tokens on the Node.js backend maintains full ownership of user data and relational business logic in PostgreSQL.",
        alternativeConsidered:
          "Custom JWT authentication was considered, but delegating identity management to Firebase accelerated delivery while providing robust token rotation.",
      },
      {
        decision: "Socket.io with PostgreSQL Message Persistence",
        rationale:
          "In-app peer messaging requires immediate delivery when both users are online, combined with durable persistence so offline users receive messages upon reconnection.",
        alternativeConsidered:
          "Third-party managed chat APIs were rejected to keep user communication data entirely self-contained and private.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Maintaining Accurate Unread Message Counts Across App Restarts",
        resolution:
          "Stored an explicit 'read_at' timestamp per participant in the database, allowing instant calculation of unread counts via indexed SQL count queries on reconnect.",
        tradeOff:
          "Requires updating room participant read states on client view focus.",
      },
      {
        challenge: "Synchronizing Relational Database State with Pinecone Vector Indexes",
        resolution:
          "Updated Pinecone vector records immediately following successful PostgreSQL transaction commits; flagged items that fail indexing for automated retry.",
        tradeOff:
          "Adds slight latency to item creation requests to guarantee search consistency.",
      },
      {
        challenge: "Preventing Malicious and Non-Image Media Uploads",
        resolution:
          "Enforced strict file signature checks and Cloudinary upload presets restricting accepted formats to JPEG, PNG, and WebP under 5MB.",
        tradeOff:
          "Requires explicit client-side pre-flight checks before upload dispatch.",
      },
    ],
    testingAndValidation: [
      "Authored automated integration tests using Jest and Supertest covering all REST endpoints, authentication token validation, and claim workflows.",
      "Verified Pinecone similarity scoring across synthetic item descriptions with varied vocabulary and intentional spelling variations.",
      "Tested Socket.io communication under simulated network disconnections, verifying message persistence and unread count reconciliation.",
      "Conducted mobile UI smoke tests in Flutter verifying camera capture, image upload flows, and chat responsiveness.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Cross-platform Flutter mobile application featuring item discovery, claim flows, and real-time chat screens.",
        "Node.js/Express REST backend with Firebase authentication token verification middleware.",
        "PostgreSQL relational schema with normalized tables, foreign keys, and transaction guards.",
        "Cloudinary signed upload integration with automated thumbnail generation.",
        "Pinecone vector index integration providing semantic item description matching.",
        "Socket.io real-time chat service with message persistence and unread tracking.",
        "Content moderation and listing deactivation endpoints.",
      ],
      plannedWork: [
        "Background worker queue for asynchronous push notification delivery upon new potential matches.",
        "Automated OCR scanning on uploaded receipts to extract serial numbers or purchase dates.",
      ],
      lessonsLearned: [
        "A hybrid matching approach (deterministic SQL boundaries + vector similarity) is significantly more accurate than pure semantic search in localized domain applications.",
        "Signed client-to-CDN media uploads save substantial backend bandwidth and isolate image processing risks from application servers.",
        "Engineering Transparency Notice: Lostproject is documented according to its actual implementation; it does not claim multi-million user scalability, third-party security audits, or commercial deployment beyond verified test environments.",
      ],
    },
    architectureOverview:
      "The Flutter mobile client communicates with a Node.js/Express backend protected by Firebase authentication middleware. Relational data is persisted in PostgreSQL, uploaded images are processed via Cloudinary, and item attribute embeddings are indexed in Pinecone for semantic matching queries.",
    systemHighlights: [
      "Hybrid matching combining exact attribute indexing with semantic vector similarity.",
      "Secure image storage pipeline isolating media uploads from relational database records.",
      "Structured authentication guards protecting user contact information during recovery claims.",
    ],
    repositoryUrl: "https://github.com/A7MEDBX",
  },
  {
    slug: "airzigzag",
    title: "Airzigzag",
    subtitle: "Travel-focused website and destination content platform with structured website architecture.",
    category: "Web Architecture & Content",
    timeline: "2025 — 2026",
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
        title: "Content Structure & Hierarchical Taxonomy",
        description:
          "Travel content is organized into a scalable relational taxonomy reflecting real-world geography and traveler mindsets.",
        points: [
          "Engineered hierarchical categorization linking continents to countries, regional destination guides, and city itineraries.",
          "Standardized article metadata including reading duration, visa requirements, best seasonal visit windows, and budget tiers.",
          "Established structured tagging for travel styles: solo travel, family vacations, budget exploration, and adventure itineraries.",
        ],
      },
      {
        title: "Routing & Canonical URL Design",
        description:
          "Constructed intuitive, SEO-friendly URL hierarchies reflecting the geographical content tree.",
        points: [
          "Implemented clean RESTful URL paths such as '/destinations/[region]/[country]' and '/blog/[article-slug]'.",
          "Configured canonical tag generation to eliminate duplicate content penalties across cross-tagged travel guides.",
          "Handled trailing slash normalizations and route redirect mappings for relocated content paths.",
        ],
      },
      {
        title: "Quick Trip Finder Filter Engine",
        description:
          "An interactive discovery module allowing users to rapidly filter destinations by travel criteria.",
        points: [
          "Built multi-attribute filtering logic resolving combinations of budget range, flight duration, season, and travel style.",
          "Implemented client-side memoized filter evaluation ensuring instantaneous query updates without page reloads.",
          "Provided fallback empty-state handling recommending adjacent alternative destinations when filter criteria are too restrictive.",
        ],
      },
      {
        title: "Search Engine Discoverability & Metadata",
        description:
          "Ensured search engines and social platforms accurately index and preview travel guides.",
        points: [
          "Dynamic generation of OpenGraph images, Twitter cards, and semantic meta tags per destination guide.",
          "Structured JSON-LD schema markup for travel articles and breadcrumb navigation trails.",
          "Semantic HTML5 hierarchy utilizing article, header, section, and nav elements with accessible landmarks.",
        ],
      },
      {
        title: "Responsive Editorial Design & Asset Optimization",
        description:
          "Editorial presentation prioritizes long-form reading comfort across mobile, tablet, and desktop displays.",
        points: [
          "Developed fluid typography scale and balanced spacing rules matching editorial literary standards.",
          "Implemented responsive image delivery utilizing WebP formats, image srcsets, and lazy-loading for off-screen photography.",
          "Optimized critical CSS delivery to maintain low first contentful paint (FCP) times on mobile connections.",
        ],
      },
      {
        title: "Deployment & Static Delivery",
        description:
          "Engineered the deployment topology for global edge distribution and high cache hit ratios.",
        points: [
          "Configured automated build and deployment pipelines serving pre-rendered static content over edge CDNs.",
          "Established aggressive caching headers for static image assets while keeping content metadata revalidation agile.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Hierarchical Canonical URL Structure Over Query Strings",
        rationale:
          "Clean geographic path URLs (e.g. '/destinations/europe/italy') provide clear information scent for users and indexable keyword hierarchies for search engines, unlike opaque query strings.",
        alternativeConsidered:
          "Single-page destination browsing with hash-based routing was rejected due to lack of individual search indexing and poor shareability.",
      },
      {
        decision: "Client-Side In-Memory Filtering for the Quick Trip Finder",
        rationale:
          "Pre-loading the lightweight destination metadata index allows instant interactive filtering as users adjust budget and style sliders, eliminating repetitive network round-trips.",
        alternativeConsidered:
          "Server-side filter execution on every slider adjustment was evaluated, but added noticeable UI latency on fluctuating mobile connections.",
      },
      {
        decision: "Decoupled Content Taxonomy from Presentation",
        rationale:
          "Separating destination metadata schemas from presentation components allows travel guides to be rendered across various page contexts (landing cards, detailed guides, and trip finder results) without code duplication.",
        alternativeConsidered:
          "Embedding content hardcoded within page templates was rejected to avoid maintainability bottlenecks.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Balancing Media-Rich Photography with Mobile Page Weight",
        resolution:
          "Enforced strict responsive image sizing, automated WebP conversion, and prioritized above-the-fold assets.",
        tradeOff:
          "Requires asset pre-processing pipeline and slight build-time compression overhead.",
      },
      {
        challenge: "Deep Navigation Complexity on Small Viewports",
        resolution:
          "Implemented accessible breadcrumb trails and collapsible geographic category drawers.",
        tradeOff:
          "Requires deliberate touch target spacing on mobile screens.",
      },
    ],
    testingAndValidation: [
      "Tested layout responsiveness across mobile, tablet, and desktop browser viewports and varied screen densities.",
      "Audited OpenGraph and Twitter card rendering using social metadata debuggers to verify link preview accuracy.",
      "Verified navigation breadcrumbs and internal links across all destination hierarchies using link crawler scripts.",
      "Validated accessibility contrast scores across typography and interactive navigation elements.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Fully responsive website architecture with editorial typography and layouts.",
        "Structured destination taxonomy and content data models.",
        "Interactive Quick Trip Finder module with multi-attribute filtering.",
        "Clean, canonical routing hierarchy and dynamic SEO metadata generation.",
        "Edge CDN asset delivery with responsive image optimization.",
      ],
      plannedWork: [
        "Third-party flight and accommodation price comparison API widgets.",
        "Interactive destination mapping with downloadable offline itinerary summaries.",
      ],
      lessonsLearned: [
        "Thoughtful information architecture and URL design form the strongest foundation for long-term website discoverability.",
        "Editorial readability depends heavily on consistent vertical rhythm and disciplined typography rather than visual ornament.",
        "Engineering Transparency Notice: Airzigzag is documented strictly according to its implemented architecture; it does not claim commercial booking transactions, third-party GDS partnerships, or unverified traffic metrics.",
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
    slug: "ieee-aswan-student-branch",
    title: "IEEE Aswan Student Branch Website",
    subtitle:
      "Collaborative full-stack web platform powering public presence, event registrations, and administrative operations.",
    category: "Full-Stack Web Platform",
    timeline: "2025 — 2026",
    status: "Launched",
    featured: true,
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Vite",
      "JWT Authentication",
      "Framer Motion",
      "Recharts",
      "REST APIs",
      "Role-Based Access Control",
    ],
    summary:
      "A comprehensive full-stack redesign and launch of the IEEE Aswan Student Branch web platform, providing student members, attendees, and operational committees with verified event registrations, responsive community content, and role-based administrative dashboards.",
    problemStatement:
      "The student branch required a modern, unified digital presence capable of presenting activities and technical workshops to the student body while replacing disorganized external spreadsheets with a centralized administrative system for registration reviews, event coordination, and persistent community inquiries.",
    objectives: [
      "Design and deliver a responsive, accessible public web interface representing IEEE Aswan's technical tracks, executive committee, and community activities.",
      "Implement secure JWT authentication and role-based authorization distinguishing public visitors, branch members, and administrative officers.",
      "Build structured event registration pipelines featuring multi-step applicant data collection and officer verification workflows.",
      "Establish persistent data storage in MongoDB for member archives, event rosters, contact inquiries, and sponsor management.",
      "Lead and coordinate the student branch web development team through collaborative coding conventions, code reviews, and task distribution.",
    ],
    systemOverview:
      "The platform is built on the MERN stack with a React/Vite single-page application communicating over HTTPS with a modular Express.js/Node.js API backend. MongoDB serves as the persistent document database. The application incorporates cross-cutting authentication guards (JSON Web Tokens) and role-based access control (RBAC) to protect administrative endpoints, with Framer Motion delivering interface transitions and Recharts visualizing event registration statistics.",
    contribution:
      "Served as Head of the Web Team, leading the collaborative development lifecycle, establishing backend architectural patterns, overseeing task allocation and code reviews, and implementing core authentication, database persistence, and administrative review workflows.",
    keyResponsibilities: [
      "Led the web team throughout the project lifecycle, defining technical milestones, sprint task distributions, and coding standards.",
      "Architected backend Express.js route structures, MongoDB Mongoose data schemas, and role-based authorization middleware.",
      "Implemented secure JWT session management, input validation sanitization, and rate-limiting guards against automated submissions.",
      "Engineered administrative dashboard views integrating Recharts for real-time registration data visualization and attendee verification.",
      "Conducted thorough pull request code reviews to ensure consistency across frontend components and backend controller logic.",
    ],
    teamLeadership: {
      roleTitle: "Head of the Web Team",
      leadershipNarrative:
        "Leading the IEEE Aswan web team required balancing technical engineering with team coordination, mentoring junior student contributors, and aligning technical milestones with branch leadership expectations. Emphasizing clean separation of responsibilities, predictable Git collaboration workflows, and regular code reviews ensured the team delivered a cohesive, maintainable platform rather than fragmented modules.",
      responsibilities: [
        "Task Distribution & Sprint Coordination: Deconstructed platform requirements into well-defined modular tasks distributed across team members based on specialization.",
        "Code Quality & Pull Request Reviews: Enforced consistent linting, uniform formatting, and defensive input validation across all merged contributions.",
        "Architectural Governance: Guided the team on API contract design, MongoDB relationship structures, and state management conventions.",
        "Cross-Committee Collaboration: Liaised with branch officers and event organizers to gather operational requirements for registration verification and media archives.",
      ],
    },
    securityConsiderations: {
      implemented: [
        "JSON Web Token (JWT) Authentication: Stateless bearer token authentication verifying client identity across administrative API endpoints.",
        "Role-Based Access Control (RBAC): Middleware guards enforcing strict privilege boundaries between public visitors, verified members, and board administrators.",
        "Express Rate Limiting: Protection against brute-force authentication attempts and high-frequency automated form submissions.",
        "Defensive Input Sanitization: Server-side validation filtering malicious payloads and guarding against NoSQL injection vectors.",
        "Secure HTTP Headers: Helmet middleware configuring X-Content-Type-Options, frameguard, and cross-site scripting filters.",
      ],
      recommendations: [
        "Automated Secret Rotation & Refresh Tokens: Implement rotating refresh tokens with short-lived access token lifecycles in future release iterations.",
        "Comprehensive Audit Logging: Introduce immutable access logging for sensitive administrative actions and privilege elevation.",
        "Independent Penetration Testing: Conduct third-party vulnerability audits before high-traffic regional event rollouts.",
      ],
    },
    implementationDetails: [
      {
        title: "Responsive Public Website & Editorial Layout",
        description:
          "The public-facing interface serves as the primary gateway for university students, prospective members, and external partners.",
        points: [
          "Developed fluid, mobile-first responsive layouts in React with Vite for fast client compilation and minimal bundle overhead.",
          "Integrated Framer Motion for tasteful, performance-conscious micro-interactions and page transitions across key sections.",
          "Organized clear editorial sections presenting branch history, active technical chapters, executive board rosters, and upcoming workshop calendars.",
        ],
      },
      {
        title: "Authentication & Role-Based Session Architecture",
        description:
          "A multi-tiered authorization model secures administrative operations while preserving friction-free access for public visitors.",
        points: [
          "Implemented stateless JWT bearer token workflows with client-side credential storage and automatic session expiry handling.",
          "Engineered reusable Express middleware inspecting token claims and verifying role permissions (Admin, Board, Member) before routing.",
          "Protected sensitive routes against unauthorized deep linking with client-side navigation guards and server-side authorization enforcement.",
        ],
      },
      {
        title: "Event Registration & Verification Pipeline",
        description:
          "Replacing ad-hoc external forms with a self-hosted, verified registration mechanism tailored to branch event logistics.",
        points: [
          "Designed multi-step registration forms with client-side input validation and server-side duplicate check constraints.",
          "Constructed administrative verification workflows allowing officers to review participant submissions and approve tickets.",
          "Integrated Recharts data visualization components rendering event attendance distributions and registration velocity over time.",
        ],
      },
      {
        title: "Inquiry Management & Media Archives",
        description:
          "Centralized data ingestion for community questions, sponsor recognition, and historical branch activities.",
        points: [
          "Engineered contact form pipelines persisting incoming questions into MongoDB with status flags (New, In Review, Resolved).",
          "Structured media gallery collections organizing photo highlights from past engineering competitions and workshops.",
          "Built sponsor management components providing prominent, structured placement for corporate and academic branch partners.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "MERN Stack Architecture with Vite",
        rationale:
          "React with Vite provides rapid client build cycles and responsive SPA navigation, paired with Express and Node.js for straightforward JavaScript full-stack development that allowed student contributors to collaborate effectively across the stack.",
        alternativeConsidered:
          "A multi-page server-rendered framework was evaluated, but a React SPA was selected to deliver dynamic administrative dashboards and smooth interactive transitions without page reloads.",
      },
      {
        decision: "Stateless JWT Authentication with Role Middleware",
        rationale:
          "Stateless token validation avoids server-side session memory consumption and simplifies role verification across distinct administrative route groups.",
        alternativeConsidered:
          "Server-side session stores in Redis were considered, but avoided to minimize operational infrastructure complexity for student branch hosting.",
      },
      {
        decision: "Document-Based MongoDB Persistence for Flexible Event Schemas",
        rationale:
          "Different branch events (technical workshops vs. hackathons) often require variable registration questionnaire fields. MongoDB's flexible schema models accommodate schema variations without heavy migration overhead.",
        alternativeConsidered:
          "Relational PostgreSQL was evaluated, but document flexibility for dynamic questionnaire forms provided greater adaptability for evolving student committee needs.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Authentication & Authorization Boundary Enforcement",
        resolution:
          "Designed layered middleware separating token signature verification from granular permission checks, ensuring routes fail closed by default.",
        tradeOff:
          "Requires strict maintenance of role claims across both frontend route guards and backend endpoint handlers.",
      },
      {
        challenge: "Event Registration & Verification Workflows",
        resolution:
          "Constructed distinct status stages (Submitted, Under Review, Confirmed, Waitlisted) preventing race conditions during popular workshop signups.",
        tradeOff:
          "Requires operational vigilance by committee members to manually review submissions before triggering confirmations.",
      },
      {
        challenge: "Persistent Inquiry Management & Follow-Up",
        resolution:
          "Implemented state tracking flags on incoming contact inquiries to prevent duplicate replies from multiple committee officers.",
        tradeOff:
          "Adds minimal database storage overhead compared to ephemeral stateless email relays.",
      },
      {
        challenge: "Administrative Functionality & Analytics Latency",
        resolution:
          "Aggregated attendee statistics via MongoDB aggregation pipelines and cached chart metrics for the Recharts dashboard.",
        tradeOff:
          "Dashboard metrics reflect slightly batched data rather than true real-time sub-second streams.",
      },
      {
        challenge: "Maintainability & Future Codebase Growth Across Student Cohorts",
        resolution:
          "Established comprehensive code documentation, modular directory conventions, and automated linting so future incoming web teams can inherit the codebase seamlessly.",
        tradeOff:
          "Demanded significant upfront effort in code review and architecture standardization during active sprint cycles.",
      },
    ],
    testingAndValidation: [
      "Conducted comprehensive manual and automated endpoint testing verifying role permission barriers on administrative routes.",
      "Tested event registration workflows under concurrent submission attempts to ensure duplicate email constraints are strictly enforced.",
      "Validated form input sanitization against common XSS and NoSQL injection payloads.",
      "Verified responsive layout rendering and navigation drawer functionality across mobile, tablet, and desktop browser viewports.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Fully responsive public website launched for the IEEE Aswan Student Branch.",
        "Role-based administrative dashboard with Recharts analytics and Framer Motion transitions.",
        "Stateless JWT authentication and authorization middleware protecting privileged actions.",
        "Event registration pipeline with committee verification and duplicate protection.",
        "Persistent inquiry management, media gallery, and sponsor showcase in MongoDB.",
      ],
      plannedWork: [
        "Automated email notification triggers for registration confirmation receipts.",
        "Public member verification directory with QR code badge scanning for physical event check-in.",
      ],
      lessonsLearned: [
        "Clear architectural boundaries and collaborative code standards are essential when leading student engineering teams with diverse experience levels.",
        "Security must be built into route handlers from the beginning rather than patched in post-launch.",
        "Engineering Transparency Notice: This case study reflects the implemented and launched web platform as documented in the public announcement; it does not claim unverified user traffic metrics or independent third-party penetration certification.",
      ],
    },
    architectureOverview:
      "A MERN stack web platform comprising a React/Vite single-page application communicating over RESTful APIs with an Express.js/Node.js backend. MongoDB provides persistent document storage, while JWT authentication and role-based access control operate as cross-cutting concerns protecting administrative and committee operations.",
    systemHighlights: [
      "Role-based administrative dashboards with interactive Recharts registration telemetry.",
      "Secure JWT authentication, rate limiting, and defensive input sanitization.",
      "Coordinated and delivered under student engineering leadership as Head of the Web Team.",
    ],
    announcementUrl:
      "https://www.linkedin.com/posts/mahmoud-ayman-ez_ieee-ieeeaswan-webdevelopment-ugcPost-7445887604815765504-G8Lp/",
    liveUrl: "https://ieeeasw.dev",
  },
  {
    slug: "ieee-olympics-problem-solving",
    title: "IEEE Olympics — Problem Solving Duel Competition",
    subtitle:
      "Competitive programming event featuring a qualification round and a double-elimination duel tournament.",
    category: "Competition Design & Event Operations",
    timeline: "2025 — 2026",
    status: "Completed",
    featured: true,
    roleTitle: "Head of the Competition",
    heroImage: "/images/olympics/olympics-duel-match.jpg",
    technologies: [
      "Competition Design",
      "Tournament Bracket Architecture",
      "Double-Elimination Logic",
      "Problem Difficulty Calibration",
      "Tiebreaker Resolution",
      "Event Operations",
    ],
    summary:
      "A structured competitive programming tournament format engineered to evaluate authentic algorithmic problem-solving ability, decision-making under strict time limits, and competitive consistency through a 90-minute qualification contest and a 16-participant double-elimination duel tournament.",
    problemStatement:
      "Traditional collegiate coding contests typically evaluate aggregate problem sets in quiet batch sessions, failing to test direct head-to-head performance under intense pressure or provide clear, dramatic spectator engagement. The student branch needed a structured, fair tournament format that tested rapid problem comprehension while guaranteeing that a single bad problem would not prematurely eliminate a skilled competitor.",
    objectives: [
      "Design a two-stage competitive programming tournament structure balancing broad initial participation with high-stakes 1-on-1 duels.",
      "Establish fair qualification ranking rules based on total solved problems and penalty time over a 90-minute 10-problem contest.",
      "Structure a deterministic double-elimination duel bracket ensuring every qualified contestant must lose two matches before elimination.",
      "Define unambiguous match resolution protocols: single-problem rapid duels with instant tiebreaker escalation when unresolved.",
      "Coordinate on-site event operations, match tracking, judge deliberations, and competitor station logistics as Head of the Competition.",
    ],
    systemOverview:
      "The competition is structured into two sequential stages designed to simulate high-pressure competitive programming environments. Stage 1 executes as a 90-minute contest where all registered participants tackle 10 problems of varying difficulty. Leaderboard standings are computed via solved count and penalty time, advancing the top 16 contestants to Stage 2. Stage 2 executes as a double-elimination duel tournament: participants compete in paired workstations on a single problem where the first accepted submission claims victory. Losers drop to the lower bracket for redemption duels, while survivors advance through winner and loser finals to the Grand Championship.",
    contribution:
      "Served as Head of the Competition, designing the full competition format, formalizing qualification ranking rules, architecting the double-elimination tournament progression, establishing tiebreaker protocols, and coordinating on-site event execution.",
    keyResponsibilities: [
      "Designed the two-stage competition format, balancing qualification breadth with head-to-head duel intensity.",
      "Authored qualification advancement criteria selecting the top 16 performers based on solved problem count and submission penalty time.",
      "Structured the complete double-elimination duel tournament bracket, mapping winner and loser progressions through to the Grand Final.",
      "Formulated deterministic match-resolution and tiebreaker rules to handle edge cases where neither competitor solves the primary duel problem.",
      "Supervised on-site operational logistics, timing clocks, match tracking boards, and technical jury coordination throughout the event.",
    ],
    teamLeadership: {
      roleTitle: "Head of the Competition",
      leadershipNarrative:
        "Directing the IEEE Olympics competition required bridging contest design theory with real-time operational execution. Designing tournament brackets, calibrating problem difficulty curves, and maintaining absolute fairness during fast-paced head-to-head duels required clear technical rules and tight coordination with judges, problem setters, and venue logistics volunteers.",
      responsibilities: [
        "Tournament Format Architecture: Formalized bracket progression logic, seeding rules, and double-elimination constraints.",
        "Problem Difficulty Calibration: Reviewed problem sets with jury members to ensure balanced problem curves across qualification and duels.",
        "Operational Floor Management: Managed duel station rotations, timing monitors, and live spectator scoreboard updates.",
        "Dispute Prevention & Rule Enforcement: Established transparent arbitration criteria for edge cases, tiebreakers, and submission timestamp validation.",
      ],
    },
    implementationDetails: [
      {
        title: "Stage 1: Qualification Round Architecture",
        description:
          "The qualification stage functioned as a comprehensive, objective filter evaluating foundational problem-solving across all entrants.",
        points: [
          "90-minute simultaneous individual programming contest covering a curated pool of 10 algorithmic problems of graded difficulty.",
          "Participants were ranked based on standard competitive programming scoring: total number of accepted problems, with cumulative penalty time resolving ties.",
          "Deterministic cutoff rules advanced the top 16 performers into the tournament stage, while providing non-advancing participants with verified ranking certificates.",
        ],
      },
      {
        title: "Stage 2: Double-Elimination Duel Tournament Structure",
        description:
          "A structured head-to-head elimination bracket where each match is a direct, time-constrained coding duel.",
        points: [
          "Contestants seeded into an 8-match Round of 16 based strictly on qualification standings (Seed 1 vs. Seed 16, Seed 2 vs. Seed 15).",
          "Double-elimination rule: A competitor is only eliminated from the tournament after suffering two match defeats, granting a second chance in the loser bracket.",
          "Each duel features a single problem under strict countdown timing; the first competitor to achieve an Accepted (AC) verdict on all test cases wins immediately.",
        ],
      },
      {
        title: "Tiebreaker Protocols & Match Resolution",
        description:
          "Pre-defined algorithmic rules designed to guarantee decisive outcomes without subjective jury intervention.",
        points: [
          "In the event that neither competitor provides a successful solution within the allotted match window, a curated tiebreaker problem of equal difficulty is introduced.",
          "When both participants solve the problem, timestamp precision down to the second determines the victorious contestant.",
          "Eliminated subjective judging debates by binding all outcomes to verifiable automated verdict timestamps.",
        ],
      },
      {
        title: "Operational Logistics & Physical Tournament Workflow",
        description:
          "Coordinating venue hardware, competitor rotations, and physical bracket tracking.",
        points: [
          "Configured paired coding stations with isolated test networks to guarantee contest integrity and prevent unauthorized collaboration.",
          "Maintained a physical live tournament tracking board in the main auditorium so audience members and participants could follow progressions.",
          "Coordinated rapid turnaround protocols between duel rounds to sustain high energy and maintain event scheduling milestones.",
        ],
      },
    ],
    engineeringDecisions: [
      {
        decision: "Double-Elimination Format Over Single-Elimination",
        rationale:
          "Single-elimination brackets possess high variance: an accidental typo or subtle corner case on a single problem can prematurely eliminate an exceptional competitor. Double-elimination guarantees that every finalist has demonstrated sustained consistency by surviving the loser bracket.",
        alternativeConsidered:
          "Single-elimination was evaluated for schedule brevity, but discarded because it failed to reward competitive resilience.",
      },
      {
        decision: "Single-Problem Duels with First-Solver Advantage",
        rationale:
          "Multi-problem head-to-head matches diffuse focus and reduce dramatic tension. A single problem forces instant strategic trade-offs: writing quick brute-force checks versus architecting optimal asymptotic solutions.",
        alternativeConsidered:
          "3-problem sprint matches were considered, but significantly inflated duel duration and diminished spectator clarity.",
      },
      {
        decision: "Honest Operational Scope (Format Design Over Custom Software Platform)",
        rationale:
          "In strict alignment with portfolio truthfulness, this initiative is documented as an event and competition design achievement rather than an automated software platform. The competition utilized established contest platforms and manual tournament coordination.",
        alternativeConsidered:
          "Claiming custom automated judge software development was strictly avoided to maintain uncompromised professional integrity.",
      },
    ],
    challengesAndTradeoffs: [
      {
        challenge: "Calibrating Problem Difficulty for Fast-Paced Duels",
        resolution:
          "Selected problems featuring elegant mathematical or algorithmic insights rather than tedious implementation, accompanied by pre-calibrated tiebreaker reserves.",
        tradeOff:
          "Required extensive pre-event difficulty benchmarking across multiple programming languages.",
      },
      {
        challenge: "Managing Schedule Constraints in a Double-Elimination Bracket",
        resolution:
          "Staggered match stations and parallel duel execution during early elimination rounds to keep total tournament duration within venue reservations.",
        tradeOff:
          "Demanded vigilant floor coordination to ensure competitors were seated and prepped on schedule.",
      },
      {
        challenge: "Handling Ambiguous or Stalled Dual-Failure Matches",
        resolution:
          "Introduced standardized tiebreaker problems with reduced time limits to prevent deadlocked matches from delaying subsequent rounds.",
        tradeOff:
          "Placed heightened psychological pressure on competitors during sudden-death tiebreaker rounds.",
      },
    ],
    testingAndValidation: [
      "Pre-tested all 10 qualification problems across C++, Python, and Java to guarantee balanced time-limit and memory-limit thresholds.",
      "Simulated mock duel matches with organizers prior to the event to verify problem solve-time distributions and tiebreaker readiness.",
      "Audited tournament bracket seeding logic to ensure qualification performance yielded fair bracket distribution.",
      "Conducted post-event review analyzing solve rates, duel durations, and participant progression fairness.",
    ],
    resultsAndLessons: {
      completedWork: [
        "Complete tournament architecture designed and successfully executed for the IEEE Olympics.",
        "90-minute qualification round with 10 calibrated algorithmic problems.",
        "Top-16 double-elimination duel tournament culminating in the Grand Final.",
        "Deterministic tiebreaker escalation protocols successfully applied during contested duels.",
        "Photo documentation capturing competition hall, duel matches, live bracket tracking, and awards ceremony.",
      ],
      plannedWork: [
        "Custom automated bracket display dashboard with real-time duel code delta visualization for future iterations.",
        "Automated tiebreaker problem dispenser integration with online judge APIs.",
      ],
      lessonsLearned: [
        "Competitive tournament design requires the same rigor as distributed system design: deterministic state transitions, clear failure modes, and elimination of edge-case ambiguities.",
        "Double-elimination formats dramatically increase participant satisfaction by forgiving single-match variance while rewarding endurance and composure.",
        "Engineering Transparency Notice: The IEEE Olympics project is presented strictly according to its implemented format design and operational coordination; it does not claim custom judging software or unverified participant metrics.",
      ],
    },
    architectureOverview:
      "A two-stage tournament architecture connecting a 90-minute multi-problem qualification contest to a 16-participant double-elimination duel bracket. Match progression is determined by first-to-solve criteria on single curated problems, backed by instant tiebreaker escalation protocols.",
    systemHighlights: [
      "Structured two-stage qualification and double-elimination duel bracket.",
      "Deterministic match-resolution and rapid tiebreaker problem escalation.",
      "Documented with 4 authentic event photographs capturing duels, qualification, and awards.",
    ],
    announcementUrl:
      "https://www.linkedin.com/posts/mahmoud-ayman-ez_ieee-ieeesb-ieeeaswan-activity-7454910465849122817-QGLo",
  },
  {
    slug: "sport-club-management",
    title: "Sport Club Management System",
    subtitle: "Club administration platform managing facility reservations, memberships, and OTP-secured authentication.",
    category: "Full-Stack System",
    timeline: "2025 — 2026",
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
    repositoryUrl: "https://github.com/A7MEDBX",
  },
  {
    slug: "egyptian-law-ai-chatbot",
    title: "Egyptian Law AI Chatbot",
    subtitle: "Legal document processing and question-answering assistant for Egyptian statutory documents.",
    category: "Document Processing & AI",
    timeline: "2025 — 2026",
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
    repositoryUrl: "https://github.com/A7MEDBX",
  },
  {
    slug: "hospital-management-system",
    title: "Hospital Management System",
    subtitle: "Desktop clinical administration application managing patient records and appointments.",
    category: "Desktop Application",
    timeline: "2025 — 2026",
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
    repositoryUrl: "https://github.com/A7MEDBX",
  },
];
