import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    description:
      "Developing modular server architectures, designing clean RESTful contracts, and orchestrating asynchronous service communication.",
    provenSkills: [
      {
        name: "Python",
        focus: "Telemetry ingestion pipelines, algorithmic parsing, and data transformations",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "FastAPI",
        focus: "High-performance asynchronous API endpoints with strict Pydantic schemas",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "Node.js",
        focus: "High-concurrency event loops, WebSocket connection management, and service orchestration",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "Express.js",
        focus: "Layered REST architectures, authentication middleware, and route controllers",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
      {
        name: "REST APIs",
        focus: "Resource-oriented URL design, predictable status codes, and OpenAPI specifications",
        projectLink: { title: "Airzigzag", href: "/projects/airzigzag" },
      },
    ],
    currentlyLearning: [
      "Go concurrency patterns (goroutines, channels, and worker pools)",
      "gRPC and Protocol Buffers for typed inter-service RPC communication",
    ],
    relevantProjects: [
      { title: "SAMCS — Autonomous Metro Platform", href: "/projects/samcs" },
      { title: "Lostproject — Mobile Backend", href: "/projects/lostproject" },
      { title: "Airzigzag — Travel Architecture", href: "/projects/airzigzag" },
      { title: "Sport Club Management System", href: "/projects/sport-club-management" },
    ],
  },
  {
    title: "Databases & Persistence",
    description:
      "Relational database modeling, query optimization, ACID transactional integrity, and embedded local storage.",
    provenSkills: [
      {
        name: "PostgreSQL",
        focus: "Normalized schemas, composite B-tree indexes, foreign key cascades, and transactional integrity",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "SQLite",
        focus: "Zero-configuration embedded relational persistence with ACID guarantees for desktop and single-facility apps",
        projectLink: { title: "Hospital Management", href: "/projects/hospital-management-system" },
      },
      {
        name: "SQL",
        focus: "Complex multi-table joins, subqueries, group aggregations, and execution plan analysis",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
      {
        name: "SQLAlchemy",
        focus: "Python object-relational mapping, declarative models, and parameterized query execution",
        projectLink: { title: "Sport Club", href: "/projects/sport-club-management" },
      },
      {
        name: "Database Modeling & Query Optimization",
        focus: "Third-normal-form relational design, query plan inspection (EXPLAIN ANALYZE), and index tuning",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
    ],
    currentlyLearning: [
      "Database partitioning and sharding strategies for high-volume historical tables",
      "Read-replica replication topologies and connection pool tuning under high concurrency",
    ],
    relevantProjects: [
      { title: "SAMCS — Dual-Tier Persistence", href: "/projects/samcs" },
      { title: "Lostproject — Relational Schemas", href: "/projects/lostproject" },
      { title: "Hospital Management — Embedded SQLite", href: "/projects/hospital-management-system" },
      { title: "Sport Club Management System", href: "/projects/sport-club-management" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    description:
      "Containerization, reproducible multi-service local environments, operating system fundamentals, and version control discipline.",
    provenSkills: [
      {
        name: "Docker",
        focus: "Multi-stage builds, container isolation, and local multi-service orchestration with Docker Compose",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "Linux / Unix",
        focus: "Shell scripting, process lifecycle management, serial tty device handling, and permissions",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "Git & GitHub",
        focus: "Branching strategies, pull request reviews, merge/rebase hygiene, and version history integrity",
        projectLink: { title: "Gestel & Teams", href: "/experience" },
      },
      {
        name: "Postman",
        focus: "Automated API contract testing, environment variable collections, and endpoint regression suites",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
    ],
    currentlyLearning: [
      "CI/CD workflow automation with GitHub Actions (automated linting, test suites, and Docker builds)",
      "Container orchestration fundamentals (Kubernetes pod concepts and declarative manifests)",
    ],
    relevantProjects: [
      { title: "SAMCS — Docker Compose Topology", href: "/projects/samcs" },
      { title: "Gestel — Engineering Workflows", href: "/experience" },
      { title: "Lostproject — Postman Test Suites", href: "/projects/lostproject" },
    ],
  },
  {
    title: "Messaging & Real-Time Systems",
    description:
      "Asynchronous message brokering, in-memory volatile caching, bidirectional socket streaming, and hardware serial interfacing.",
    provenSkills: [
      {
        name: "RabbitMQ",
        focus: "Topic exchanges, queue decoupling, publisher confirms, and dead-letter queue routing",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "Redis",
        focus: "Sub-second key-value caching, transient telemetry lookups, and session state storage",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "WebSockets",
        focus: "Full-duplex bidirectional streaming, room-based line subscriptions, and connection lifecycle heartbeats",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
      {
        name: "UART Communication",
        focus: "Hardware serial byte-level reading (115200 baud), non-blocking ring buffers, and CRC-16 validation",
        projectLink: { title: "SAMCS", href: "/projects/samcs" },
      },
    ],
    currentlyLearning: [
      "Distributed event stream compaction and persistent consumer group offsets",
      "Exponential backoff retry algorithms with jitter for network socket reconnects",
    ],
    relevantProjects: [
      { title: "SAMCS — Hardware Gateway & WebSockets", href: "/projects/samcs" },
      { title: "Lostproject — Socket.io Peer Messaging", href: "/projects/lostproject" },
    ],
  },
  {
    title: "Frontend & Application Development",
    description:
      "Responsive web user interfaces, cross-platform mobile applications, and native desktop GUI software.",
    provenSkills: [
      {
        name: "React",
        focus: "Component-driven user interfaces, state management, and API integration hooks",
        projectLink: { title: "Sport Club", href: "/projects/sport-club-management" },
      },
      {
        name: "JavaScript",
        focus: "ES6+ asynchronous syntax, promises, DOM manipulation, and Node.js runtime fundamentals",
        projectLink: { title: "Airzigzag", href: "/projects/airzigzag" },
      },
      {
        name: "Flutter & Dart",
        focus: "Cross-platform mobile UI for iOS and Android, device camera/media picking, and responsive widgets",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
      {
        name: "Qt / C++",
        focus: "Native desktop GUI applications, custom Qt widgets, signals/slots architecture, and local SQLite data access",
        projectLink: { title: "Hospital Management", href: "/projects/hospital-management-system" },
      },
    ],
    currentlyLearning: [
      "Next.js App Router and Server Components architecture",
      "Advanced Flutter state management patterns (Bloc / Riverpod)",
    ],
    relevantProjects: [
      { title: "Lostproject — Flutter Mobile Client", href: "/projects/lostproject" },
      { title: "Sport Club Management — React UI", href: "/projects/sport-club-management" },
      { title: "Hospital Management — C++/Qt Desktop", href: "/projects/hospital-management-system" },
      { title: "Airzigzag — Responsive Web Platform", href: "/projects/airzigzag" },
    ],
  },
  {
    title: "AI & Data Processing",
    description:
      "Document ingestion pipelines, optical character recognition for non-Latin scripts, vector embedding search, and retrieval techniques.",
    provenSkills: [
      {
        name: "Embeddings & Vector Retrieval",
        focus: "Generating dense semantic embeddings and querying nearest neighbors via cosine similarity",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
      {
        name: "Retrieval-Augmented Generation (RAG)",
        focus: "Grounding queries on statutory documents, article-level boundary chunking, and source citation",
        projectLink: { title: "Egyptian Law AI", href: "/projects/egyptian-law-ai-chatbot" },
      },
      {
        name: "Pinecone",
        focus: "Managed vector database index management, metadata filtering, and semantic similarity scoring",
        projectLink: { title: "Lostproject", href: "/projects/lostproject" },
      },
      {
        name: "OCR (Optical Character Recognition)",
        focus: "Extracting Arabic legal text from scanned statutory archives with image deskewing and cleanup",
        projectLink: { title: "Egyptian Law AI", href: "/projects/egyptian-law-ai-chatbot" },
      },
      {
        name: "Model Evaluation",
        focus: "Benchmarking retrieval precision against sample ground-truth legal queries and item match datasets",
        projectLink: { title: "Egyptian Law AI", href: "/projects/egyptian-law-ai-chatbot" },
      },
    ],
    currentlyLearning: [
      "Re-ranking models (Cross-encoders) to improve top-k document retrieval precision",
      "Automated evaluation frameworks for assessing RAG retrieval faithfulness and context recall",
    ],
    relevantProjects: [
      { title: "Egyptian Law AI Chatbot — OCR & RAG", href: "/projects/egyptian-law-ai-chatbot" },
      { title: "Lostproject — Pinecone Vector Matching", href: "/projects/lostproject" },
    ],
  },
];
