import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Badge } from "@/components/Badge";
import { siteConfig } from "@/data/siteConfig";
import { ProjectVisualPreview } from "@/components/home/ProjectVisualPreview";
import {
  ArrowRight,
  ExternalLink,
  Calendar,
  Briefcase,
  Layers,
  FileCode,
  Database,
  CheckCircle2,
  Lock,
  Terminal,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = [
    {
      num: "01",
      slug: "samcs",
      title: "SAMCS — Smart Autonomous Metro Control & Monitoring Platform",
      description:
        "A real-time supervisory transit platform coordinating rolling stock telemetry. Engineered around hardware UART gateway integration, event-driven communication protocols, WebSocket streaming for dispatchers, and reliable database persistence.",
      technologies: [
        "UART Gateway",
        "WebSockets",
        "Event-Driven",
        "PostgreSQL",
        "Go / Python",
        "Docker",
      ],
    },
    {
      num: "02",
      slug: "lostproject",
      title: "Lostproject",
      description:
        "A mobile application and backend service engineered for asset recovery. Features implemented include user authentication, profile management, attribute matching logic, direct chat messaging, and secure media upload handling.",
      technologies: [
        "Mobile Backend",
        "User Auth",
        "Matching Engine",
        "Chat Services",
        "Media Storage",
        "PostgreSQL",
      ],
    },
    {
      num: "03",
      slug: "airzigzag",
      title: "Airzigzag",
      description:
        "A travel-focused website and content platform. Architected for fast editorial delivery, structured destination content organization, responsive interface layout, and backend search & filtering.",
      technologies: [
        "Web Architecture",
        "Content Management",
        "Search & Filtering",
        "API Integration",
        "Responsive UI",
      ],
    },
  ];

  const experienceItems = [
    {
      role: "Backend Software Engineer",
      organization: "Technical Team / Engineering Organization",
      period: "2023 — Present",
      description:
        "Designing modular backend services, API interfaces, and persistent relational data models for real-time and operational platforms.",
      tech: ["Go", "Python", "PostgreSQL", "Docker", "Event-Driven"],
    },
    {
      role: "Software Engineering Intern",
      organization: "Software Solutions Firm",
      period: "2022 — 2023",
      description:
        "Contributed to database schema designs, authentication middleware, and automated unit and integration test coverage.",
      tech: ["Python / Node.js", "SQL", "Git", "REST APIs"],
    },
  ];

  const engineeringFocus = [
    {
      title: "Backend Architecture",
      icon: Layers,
      items: [
        "Modular service boundaries and clear separation of concerns",
        "Event-driven messaging and asynchronous background processing",
        "Concurrency safety and race condition avoidance",
      ],
    },
    {
      title: "API Design",
      icon: FileCode,
      items: [
        "RESTful endpoint conventions and predictable resource modeling",
        "Strict input validation schemas and defensive error responses",
        "Standardized OpenAPI / Swagger documentation",
      ],
    },
    {
      title: "Databases",
      icon: Database,
      items: [
        "Relational modeling and third-normal-form schemas in PostgreSQL",
        "B-Tree and composite indexing for query optimization",
        "ACID transactions and explicit isolation levels",
      ],
    },
    {
      title: "Testing",
      icon: CheckCircle2,
      items: [
        "Automated unit testing for core business logic",
        "Integration test suites against live database fixtures",
        "Regression prevention and deterministic assertions",
      ],
    },
    {
      title: "Security",
      icon: Lock,
      items: [
        "Token-based authentication (JWT) and session validation",
        "Role-based access control (RBAC) authorization guards",
        "Defensive input sanitization and least-privilege principles",
      ],
    },
    {
      title: "Deployment",
      icon: Terminal,
      items: [
        "Containerization with multi-stage Docker builds",
        "Environment consistency across development and staging",
        "Linux server environments, logging, and health monitoring",
      ],
    },
  ];

  return (
    <Container>
      {/* 1. HERO SECTION */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="max-w-3xl">
          {/* Eyebrow / Name & Role */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium">
              BEDO
            </span>
            <span className="text-xs font-mono text-[#686868]">/</span>
            <span className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium">
              Backend Software Engineer
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-[#222222] tracking-tight leading-[1.18] mb-6">
            Building reliable backend systems with thoughtful engineering.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#686868] font-sans leading-relaxed max-w-2xl mb-8">
            I develop APIs, database-driven applications, and backend services with a focus on maintainability, system design, and reliability.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#selected-projects" variant="primary">
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/about" variant="secondary">
              <span>About Me</span>
            </Button>

            {/* Real subtle links if provided */}
            <div className="flex items-center gap-3 ml-0 sm:ml-2 pt-2 sm:pt-0">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors flex items-center gap-1"
                title="GitHub Profile"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-[#686868]" />
              </a>
              <span className="text-[#E5E2DC]">•</span>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors flex items-center gap-1"
                title="LinkedIn Profile"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-[#686868]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROFESSIONAL INTRODUCTION */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="max-w-3xl">
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-3">
            Professional Introduction
          </h2>
          <p className="font-serif text-2xl font-normal text-[#222222] leading-snug mb-4">
            Pragmatic software craftsmanship centered on stability, clear interfaces, and predictable execution.
          </p>
          <p className="text-sm sm:text-base text-[#686868] leading-relaxed mb-6 font-sans">
            As a backend engineer, I prioritize systems that are straightforward to maintain, verify, and operate. My work spans designing robust REST APIs, establishing disciplined relational schemas, orchestrating event-driven pipelines, and integrating real-time telemetry over WebSockets and serial gateways.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#2D4A3E] hover:underline underline-offset-4"
          >
            <span>Read more about my background & engineering values</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 3. SELECTED PROJECTS */}
      <section id="selected-projects" className="border-b border-[#E5E2DC] pb-14 mb-16 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-10">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Selected Projects
            </h2>
            <p className="font-serif text-2xl font-normal text-[#222222]">
              Featured Engineering Work
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono font-medium text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
          >
            <span>View all projects catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-12">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="border-b border-[#E5E2DC] pb-12 last:border-b-0 last:pb-0"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <span className="text-xs font-mono text-[#2D4A3E] font-medium tracking-wide">
                  PROJECT {project.num}
                </span>
                <span className="text-xs font-mono text-[#686868]">
                  Dedicated Case Study Available
                </span>
              </div>

              <h3 className="font-serif text-2xl font-normal text-[#222222] tracking-tight mb-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="hover:text-[#2D4A3E] hover:underline underline-offset-4 transition-colors"
                >
                  {project.title}
                </Link>
              </h3>

              <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4 max-w-3xl">
                {project.description}
              </p>

              {/* Real SVG Technical Visual Preview */}
              <ProjectVisualPreview slug={project.slug} />

              {/* Technologies and Case Study Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button href={`/projects/${project.slug}`} variant="ghost">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE PREVIEW */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-1">
              Career Snapshot
            </h2>
            <p className="font-serif text-2xl font-normal text-[#222222]">
              Experience & Technical Teams
            </p>
          </div>
          <Link
            href="/experience"
            className="text-xs font-mono font-medium text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
          >
            <span>View full experience timeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="space-y-6">
          {experienceItems.map((exp, idx) => (
            <div
              key={idx}
              className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                <h3 className="font-serif text-lg font-normal text-[#222222]">
                  {exp.role}
                </h3>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#2D4A3E]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-[#686868] mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>{exp.organization}</span>
              </div>

              <p className="text-sm text-[#686868] leading-relaxed mb-4 font-sans">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="muted">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ENGINEERING FOCUS */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="max-w-2xl mb-8">
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
            Technical Disciplines
          </h2>
          <p className="font-serif text-2xl font-normal text-[#222222]">
            Engineering Focus Areas
          </p>
          <p className="text-xs text-[#686868] font-sans mt-2">
            Structured text-based breakdown of core backend capabilities and system competencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engineeringFocus.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#222222]">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 text-xs text-[#686868] font-sans leading-relaxed">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. CLOSING SECTION */}
      <section className="py-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-2">
            Inquiries & Collaboration
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#222222] tracking-tight mb-4">
            Let's talk about engineering.
          </h2>
          <p className="text-sm sm:text-base text-[#686868] leading-relaxed mb-8 font-sans">
            Whether you are looking to discuss distributed systems, API architecture, database optimization, or prospective backend opportunities, I welcome thoughtful technical discussions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="/contact" variant="primary">
              <span>Contact Ahmed</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FAF9F6] text-[#222222] border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#EEF3F0] px-4 py-2 text-sm font-medium rounded-xs transition-colors duration-150"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#686868]" />
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#FAF9F6] text-[#222222] border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#EEF3F0] px-4 py-2 text-sm font-medium rounded-xs transition-colors duration-150"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#686868]" />
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
}
