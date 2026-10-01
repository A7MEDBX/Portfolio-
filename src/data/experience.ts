import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Backend Software Engineer",
    company: "[Company / Organization Name]",
    location: "Cairo, Egypt",
    period: "2023 — Present",
    isCurrent: true,
    description:
      "Leading core backend engineering initiatives, designing distributed services, and architecting resilient data pipelines for high-throughput operational workloads.",
    responsibilities: [
      "Design and maintain high-performance RESTful and event-driven APIs handling core business workflows.",
      "Optimize relational database queries, index strategies, and caching layers to maintain sub-second response times.",
      "Collaborate across engineering disciplines to define data contracts, system integration boundaries, and deployment patterns.",
      "Establish automated testing, code review standards, and CI/CD pipelines to ensure production reliability.",
    ],
    technologies: ["Go", "Python", "PostgreSQL", "Redis", "Docker", "Kafka", "Linux"],
  },
  {
    id: "exp-2",
    role: "Software Engineer — Backend & Systems",
    company: "[Technology Solutions / Engineering Firm]",
    location: "Cairo, Egypt",
    period: "2022 — 2023",
    isCurrent: false,
    description:
      "Developed backend microservices, database schemas, and integration adapters for enterprise resource management and scheduling platforms.",
    responsibilities: [
      "Engineered secure authentication, authorization, and role-based access control systems.",
      "Refactored legacy monolith database queries, resolving concurrency deadlocks during peak reservation intervals.",
      "Implemented background task queues for asynchronous report generation, email notifications, and webhook processing.",
      "Drafted comprehensive OpenAPI specifications and technical documentation for client engineering teams.",
    ],
    technologies: ["Node.js / TypeScript", "PostgreSQL", "Redis", "REST APIs", "Git", "Docker"],
  },
  {
    id: "exp-3",
    role: "Junior Software Engineer",
    company: "[Engineering Organization / Tech Incubator]",
    location: "Cairo, Egypt",
    period: "2021 — 2022",
    isCurrent: false,
    description:
      "Contributed to database design, internal tooling development, and API feature implementation across multiple client engagements.",
    responsibilities: [
      "Built CRUD endpoints and automated unit tests for web application backends.",
      "Assisted in database migration scripts, relational schema normalization, and query performance analysis.",
      "Diagnosed and resolved production bugs reported through centralized monitoring and logging systems.",
    ],
    technologies: ["Python", "SQL", "Git", "Linux", "RESTful Architecture"],
  },
];
