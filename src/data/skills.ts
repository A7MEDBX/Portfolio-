import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for backend services, concurrent systems, and data processing.",
    skills: [
      { name: "Go", focus: "Concurrent servers & network microservices" },
      { name: "Python", focus: "Data pipelines, APIs (FastAPI), RAG & scripting" },
      { name: "TypeScript / Node.js", focus: "Asynchronous backend runtimes & services" },
      { name: "SQL", focus: "Relational query optimization & schema modeling" },
      { name: "Java / C#", focus: "Object-oriented enterprise backend architectures" },
    ],
  },
  {
    title: "Databases & Storage",
    description: "Relational persistence, in-memory caching, indexing engines, and vector stores.",
    skills: [
      { name: "PostgreSQL", focus: "Schema design, indexing, transactions & query tuning" },
      { name: "Redis", focus: "Caching, distributed locks & pub/sub streaming" },
      { name: "pgvector", focus: "Vector embeddings & similarity search" },
      { name: "Elasticsearch / Meilisearch", focus: "Full-text indexing & search relevance" },
      { name: "MySQL", focus: "Relational data management & ACID transactions" },
    ],
  },
  {
    title: "Distributed Systems & Architecture",
    description: "System design patterns, communication protocols, and scaling strategies.",
    skills: [
      { name: "RESTful API Design", focus: "Resource modeling, versioning & OpenAPI standards" },
      { name: "Event-Driven Architecture", focus: "Message decoupling, pub/sub & asynchronous workers" },
      { name: "Message Brokers (Kafka / RabbitMQ)", focus: "High-throughput streams & background job queues" },
      { name: "Concurrency & Synchronization", focus: "Thread safety, race condition prevention & mutexes" },
      { name: "Microservices & Modular Monoliths", focus: "Service boundaries & data consistency" },
      { name: "WebSockets & Streaming", focus: "Real-time bidirectional event dispatch" },
    ],
  },
  {
    title: "Infrastructure, Cloud & Tooling",
    description: "Containerization, runtime environments, automation, and operational observability.",
    skills: [
      { name: "Docker & Containerization", focus: "Multi-stage builds & environment parity" },
      { name: "Linux / Unix Environments", focus: "Shell scripting, process management & system internals" },
      { name: "Git & Version Control", focus: "Branching workflows, code reviews & rebase hygiene" },
      { name: "CI/CD Automation", focus: "Automated test suites & deployment pipelines" },
      { name: "Monitoring & Observability", focus: "Structured logging, metrics & health instrumentation" },
    ],
  },
  {
    title: "Engineering Disciplines",
    description: "Foundational software craftsmanship and engineering rigour.",
    skills: [
      { name: "System Design", focus: "Trade-off analysis, bottlenecks & capacity planning" },
      { name: "Database Normalization & Indexing", focus: "B-Trees, composite indexes & query plan analysis" },
      { name: "Testing Methodologies", focus: "Unit, integration, and end-to-end API verification" },
      { name: "Security & Authorization", focus: "JWT, RBAC, encryption at rest & input sanitization" },
    ],
  },
];
