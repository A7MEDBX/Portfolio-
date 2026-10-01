import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  Layers,
  FileCode2,
  Database,
  ShieldAlert,
  Server,
  Cpu,
  Compass,
  GitBranch,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, engineering philosophy, and technical journey of Ahmed Ragab, Backend Software Engineer.",
};

export default function AboutPage() {
  const philosophies = [
    {
      num: "01",
      title: "Architecture & Separation of Responsibilities",
      icon: Layers,
      content:
        "Clean boundaries between transport interfaces, domain services, and persistence layers protect systems from cascading failures. Decoupling business logic from framework-specific HTTP handlers ensures code remains testable, modular, and adaptable as requirements evolve.",
    },
    {
      num: "02",
      title: "API Design & Input Validation",
      icon: FileCode2,
      content:
        "APIs are contracts with clients. I focus on predictable resource modeling, defensive schema validation at system perimeters, and clear error responses. Validating inputs strictly before payloads reach domain services eliminates entire classes of runtime anomalies.",
    },
    {
      num: "03",
      title: "Database Modeling & Query Optimization",
      icon: Database,
      content:
        "Data structures outlive application frameworks. I prioritize normalized relational schemas, intentional foreign key constraints, and thoughtful indexing strategies. Understanding query execution plans and explicit transaction boundaries guarantees consistency without unexpected database bottlenecks.",
    },
    {
      num: "04",
      title: "Error Handling, Testing & Reliability",
      icon: ShieldAlert,
      content:
        "Failures are unavoidable in distributed and networked environments. Handling errors as first-class domain values, attaching operational context, and writing deterministic automated unit and integration tests against real database fixtures build genuine operational confidence.",
    },
    {
      num: "05",
      title: "Deployment & Reproducible Environments",
      icon: Server,
      content:
        "Software should run identically across local development, staging, and production environments. Utilizing multi-stage Docker containerization, declarative environment configurations, and minimal Linux runtime bases ensures reproducible builds and smooth operational maintenance.",
    },
  ];

  const currentInterests = [
    {
      title: "Backend Architecture",
      description:
        "Studying domain-driven design, service boundary definition, and modular monolith structures that balance operational simplicity with team scalability.",
    },
    {
      title: "Distributed Systems Concepts",
      description:
        "Deepening understanding of asynchronous message brokers, event-driven ordering guarantees, idempotency patterns, and fault-tolerant state synchronization.",
    },
    {
      title: "DevOps & Reproducibility",
      description:
        "Investigating infrastructure automation, continuous integration workflows, container orchestration fundamentals, and secure secret management.",
    },
    {
      title: "System Design & Scalability",
      description:
        "Analyzing real-world distributed architectures, caching topology trade-offs, database sharding strategies, and latency reduction in networked services.",
    },
    {
      title: "Performance Analysis & Profiling",
      description:
        "Learning tooling for memory profiling, connection pool tuning, database slow-query inspection, and network socket throughput benchmarking.",
    },
  ];

  return (
    <Container>
      {/* 1. PAGE INTRODUCTION */}
      <PageHeader
        eyebrow="ABOUT"
        title="The engineer behind the systems."
        subtitle="Backend Software Engineer with a practical focus on robust APIs, relational database design, and maintainable software architectures."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="space-y-16">
        {/* Professional Introduction Prose */}
        <section className="max-w-3xl">
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-4">
            Professional Introduction
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#222222] font-sans leading-relaxed">
            <p>
              I am Ahmed Ragab, a Backend Software Engineer driven by how server-side systems are structured, validated, and kept reliable over time. My technical focus centers on constructing resilient backend APIs, establishing disciplined database schemas, and writing maintainable code that prioritizes operational clarity.
            </p>
            <p className="text-base text-[#686868]">
              Rather than chasing fleeting trends or adding unnecessary architectural complexity, I approach engineering problems with pragmatism. I value systems with clear data contracts, predictable execution paths, explicit error boundaries, and comprehensive tests that reflect real-world operational constraints.
            </p>
          </div>
        </section>

        {/* 2. ENGINEERING PHILOSOPHY */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Guiding Principles
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Engineering Philosophy
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Five core tenets that shape how I approach system design, code craftsmanship, and operational reliability.
            </p>
          </div>

          <div className="space-y-8">
            {philosophies.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.num}
                  className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 border-b border-[#E5E2DC] pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-xl font-normal text-[#222222]">
                        {item.title}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#2D4A3E] font-medium">
                      PRINCIPLE {item.num}
                    </span>
                  </div>

                  <p className="text-sm text-[#686868] font-sans leading-relaxed max-w-3xl">
                    {item.content}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* 3. TECHNICAL JOURNEY */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Background & Evolution
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Technical Journey
            </h2>
          </div>

          <div className="max-w-3xl space-y-6 text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            <p>
              My journey began with software fundamentals: data structures, algorithmic problem solving, and object-oriented programming. Building foundational applications cemented my appreciation for clean logic, code readability, and modular design.
            </p>

            <p>
              As I transitioned deeper into backend development, I focused on building database-backed services and RESTful APIs. This progression materialized in projects like{" "}
              <Link
                href="/projects/lostproject"
                className="text-[#222222] font-medium underline underline-offset-4 decoration-[#2D4A3E] hover:text-[#2D4A3E] transition-colors"
              >
                Lostproject
              </Link>
              , where I implemented end-to-end backend workflows including token-based authentication, user profile management, attribute matching logic, direct chat messaging services, and secure media upload processing. Managing these multi-service dependencies deepened my focus on transactional integrity and defensive validation.
            </p>

            <p>
              Moving toward complex and real-time operational platforms, I engaged in developing the backend architecture for{" "}
              <Link
                href="/projects/samcs"
                className="text-[#222222] font-medium underline underline-offset-4 decoration-[#2D4A3E] hover:text-[#2D4A3E] transition-colors"
              >
                SAMCS (Smart Autonomous Metro Control & Monitoring Platform)
              </Link>
              . This required bridging hardware communication through UART serial gateways, ingesting continuous telemetry streams, managing event-driven dispatching, and broadcasting live train coordinates to operational dashboards via WebSockets. It marked a key step in my understanding of event-driven architectures, concurrency, and telemetry persistence under real-time constraints.
            </p>
          </div>
        </section>

        {/* 4. CURRENT INTERESTS */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Continuous Growth
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Current Learning & Exploration Interests
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Areas I am actively studying and developing through technical literature, deliberate practice, and system prototypes:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {currentInterests.map((interest) => (
              <div
                key={interest.title}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
                    <h3 className="font-serif text-lg font-normal text-[#222222]">
                      {interest.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#686868] font-sans leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CONTEXTUAL NAVIGATION */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-6">
            <p className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-1">
              Explore Further
            </p>
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Contextual Navigation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Link
              href="/experience"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                CAREER TIMELINE
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between">
                <span>Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] mt-2 font-sans">
                Review roles, team contributions, and chronological engineering track record.
              </p>
            </Link>

            <Link
              href="/projects"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                SYSTEM CATALOG
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between">
                <span>Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] mt-2 font-sans">
                Explore in-depth architectural case studies including SAMCS and Lostproject.
              </p>
            </Link>

            <Link
              href="/skills"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                TECHNICAL TOOLING
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between">
                <span>Skills</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] mt-2 font-sans">
                Inspect categorized backend languages, databases, and infrastructure tools.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
