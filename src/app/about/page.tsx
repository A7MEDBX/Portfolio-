import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import {
  ArrowRight,
  ExternalLink,
  FileCode2,
  Database,
  Network,
  Cpu,
  ShieldAlert,
  Users,
  CheckCircle2,
  BookOpen,
  Mail,
  Layers,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Professional background, core positioning, engineering principles, and verified project evidence of Ahmed Ragab, Junior Backend Software Engineer.",
};

export default function AboutPage() {
  const valueProps = [
    {
      num: "01",
      title: "Reliable API Design",
      icon: FileCode2,
      statement:
        "I care about clear API contracts, input validation, predictable error responses, and maintainable endpoint structures.",
      whyItMatters:
        "Strict schema validation at the perimeter stops malformed payloads before they reach domain services, preventing silent 500 runtime crashes and eliminating integration friction for frontend engineers.",
    },
    {
      num: "02",
      title: "Data Integrity & Backend Logic",
      icon: Database,
      statement:
        "I pay attention to relationships between data, business rules, database consistency, and the edge cases that can cause unexpected behavior.",
      whyItMatters:
        "Data models outlive application code. Enforcing explicit relational constraints, foreign keys, and atomic transactions prevents orphaned records, race anomalies, and corrupted persistent state.",
    },
    {
      num: "03",
      title: "System Integration",
      icon: Network,
      statement:
        "I work across backend components and supporting services, thinking about how they communicate, exchange data, handle failures, and support the overall application workflow.",
      whyItMatters:
        "Defensive integration with third-party APIs, media pipelines, and message streams ensures downstream timeouts and transient hiccups fail gracefully rather than taking down user workflows.",
    },
  ];

  const evidenceProjects = [
    {
      name: "SAMCS — Smart Autonomous Metro Control & Monitoring Platform",
      slug: "samcs",
      domain: "Real-time Telemetry & Gateway",
      challenge:
        "Managing continuous telemetry streams from hardware sensors and coordinating live train positions across operational monitoring interfaces.",
      approach:
        "Engineered an event-driven Node.js gateway that validates incoming UART telemetry frames, persists historical states in MongoDB, and dispatches real-time train telemetry via WebSockets to client dashboards.",
      linkText: "View SAMCS Case Study",
    },
    {
      name: "Finder (Lost & Found Asset Recovery Platform)",
      slug: "lostproject",
      domain: "Mobile Backend & Trust Verification",
      challenge:
        "Coordinating multi-step property recovery claims and peer-to-peer communication while preventing fraudulent claims and keeping media storage lightweight.",
      approach:
        "Constructed RESTful Node.js/Express APIs backed by PostgreSQL relational schemas, built 14-digit Egyptian National ID KYC validation, and integrated Cloudinary signed uploads with Pinecone semantic vector matching.",
      linkText: "View Finder Case Study",
    },
    {
      name: "IEEE Aswan Student Branch Website",
      slug: "ieee-aswan-student-branch",
      domain: "Full-Stack Web & Role-Based Access",
      challenge:
        "Structuring a unified web platform that balances public student branch community pages with secure, authenticated administrative and board workflows.",
      approach:
        "Served as Head of the Web Team leading the full-stack MERN implementation, establishing JWT session validation with role-based route guards, and conducting team code reviews to keep API boundaries clean.",
      linkText: "View IEEE Aswan Case Study",
    },
  ];

  const engineeringPrinciples = [
    {
      num: "01",
      title: "Design clear interfaces and contracts",
      description:
        "APIs, database boundaries, and internal modules must define unambiguous inputs, explicit schemas, and predictable responses so dependent services and team members can build with confidence.",
    },
    {
      num: "02",
      title: "Treat invalid input and failure paths as first-class concerns",
      description:
        "Software behavior is defined by how it handles edge cases. Validating all incoming data at system perimeters and structuring deterministic error responses protects internal logic from unexpected exceptions.",
    },
    {
      num: "03",
      title: "Protect data integrity and maintain understandable business logic",
      description:
        "Relational schemas, constraints, and business rules should enforce data consistency at the persistence layer, keeping domain logic auditable and preventing subtle state corruption.",
    },
    {
      num: "04",
      title: "Prefer maintainable solutions over unnecessary complexity",
      description:
        "Clear code structure, standard architectural conventions, and well-organized modular systems are far easier to debug, test, and adapt than prematurely distributed or over-engineered abstractions.",
    },
  ];

  const appliedSkills = [
    "Node.js & Express.js",
    "TypeScript & JavaScript",
    "PostgreSQL (Relational Modeling, Constraints, Transactions)",
    "MongoDB & Document Persistence",
    "RESTful API Architecture & Contract Design",
    "Firebase Authentication & JWT Verification",
    "Cloudinary Signed Media Pipelines",
    "Pinecone Vector Similarity Matching",
    "Git & GitHub Collaborative Workflows",
  ];

  const learningAreas = [
    {
      title: "Concurrency & Asynchronous Messaging",
      description:
        "Deepening practical understanding of asynchronous queue patterns, event ordering guarantees, and pub-sub fundamentals (such as Redis and RabbitMQ concepts).",
    },
    {
      title: "Query Profiling & Index Optimization",
      description:
        "Analyzing PostgreSQL query execution plans using EXPLAIN ANALYZE, evaluating B-tree versus specialized index trade-offs, and tuning connection pools.",
    },
    {
      title: "Containerized Environments & Reproducibility",
      description:
        "Working with multi-stage Docker builds and basic container lifecycle management to ensure identical runtime behavior between local development and deployment targets.",
    },
  ];

  return (
    <Container>
      {/* SECTION A — INTRODUCTION */}
      <PageHeader
        eyebrow="ABOUT // AHMED RAGAB"
        title="I build reliable backend systems for real-world workflows."
        subtitle="Junior Backend Software Engineer based in Luxor, Egypt."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-base sm:text-lg text-[#222222] font-sans leading-relaxed">
            I focus on API design, data integrity, and service integration—turning complex requirements into maintainable backend systems with clear behavior and predictable failure handling. I care about how systems behave beyond the happy path, from validating incoming data to handling failures and keeping components consistent.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="/projects" variant="primary">
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
            <Button href="/experience" variant="secondary">
              <span>Review Experience</span>
            </Button>
          </div>
        </div>
      </PageHeader>

      <div className="space-y-16">
        {/* SECTION B — THE VALUE I BRING */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Core Capabilities
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              The Value I Bring
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Three technical focuses that guide how I contribute to an engineering team and build dependable backend software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.num}
                  className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-[#2D4A3E] pb-3 mb-3 border-b border-[#E5E2DC]">
                      <span className="font-semibold">CAPABILITY {item.num}</span>
                      <Icon className="w-4 h-4 text-[#2D4A3E]" />
                    </div>
                    <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#222222] font-sans leading-relaxed mb-4">
                      {item.statement}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#E5E2DC]/80 bg-white/60 p-3 rounded-xs">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2D4A3E] block mb-1 font-medium">
                      Why It Matters to a Team:
                    </span>
                    <p className="text-xs text-[#686868] font-sans leading-relaxed">
                      {item.whyItMatters}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* SECTION C — EVIDENCE FROM MY WORK */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Proof of Positioning
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              How This Shows Up in My Work
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Concrete evidence from actual implementations demonstrating reliable API contracts, strict data integrity, and multi-service integration.
            </p>
          </div>

          <div className="space-y-6">
            {evidenceProjects.map((project, idx) => (
              <article
                key={project.slug}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2 pb-2 border-b border-[#E5E2DC]">
                  <span className="text-xs font-mono text-[#2D4A3E] font-medium">
                    CASE STUDY 0{idx + 1} // {project.domain.toUpperCase()}
                  </span>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-mono text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                    title={project.linkText}
                  >
                    <span>{project.linkText}</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#222222] mb-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#2D4A3E] transition-colors"
                  >
                    {project.name}
                  </Link>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm font-sans">
                  <div className="bg-white p-4 border border-[#E5E2DC] rounded-xs">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#686868] block mb-1.5 font-medium">
                      The Engineering Challenge:
                    </span>
                    <p className="text-[#686868] leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="bg-white p-4 border border-[#E5E2DC] rounded-xs">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] block mb-1.5 font-medium">
                      Technical Approach &amp; Contribution:
                    </span>
                    <p className="text-[#222222] leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SECTION D — ENGINEERING PRINCIPLES */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Guiding Standards
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Engineering Principles
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Four practical principles that govern my system design decisions, code organization, and failure handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {engineeringPrinciples.map((item) => (
              <div
                key={item.num}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#2D4A3E] mb-2">
                    <span className="font-medium">PRINCIPLE {item.num}</span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION E — COLLABORATION & LEADERSHIP */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-6">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Team Dynamic
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Collaboration &amp; Technical Leadership
            </h2>
          </div>

          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs space-y-4">
            <p className="text-sm sm:text-base text-[#222222] font-sans leading-relaxed">
              While my core focus is backend engineering, I work comfortably across frontend and backend boundaries. I communicate actively with teammates, coordinate data contracts before writing code, and contribute thoughtfully to shared technical decisions.
            </p>
            <p className="text-sm text-[#686868] font-sans leading-relaxed">
              As <strong>Head of the Web Team</strong> for the IEEE Aswan Student Branch website, I put this into practice by helping team members align frontend views with backend endpoints, leading code reviews to ensure consistent security and route guards, and distributing tasks based on individual strengths. This experience reinforced the importance of clear documentation, constructive feedback, and mutual accountability in shipping working software.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#2D4A3E]">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Demonstrated in the IEEE Aswan Student Branch Website project launch</span>
            </div>
          </div>
        </section>

        {/* SECTION F — CURRENT GROWTH */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Practical Development
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Current Technical Growth
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              A transparent breakdown of the technologies I apply in completed projects versus the backend engineering areas I am actively studying.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Applied in Projects */}
            <div className="lg:col-span-5 border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E5E2DC]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <h3 className="font-serif text-base text-[#222222]">
                  Applied in Current Projects
                </h3>
              </div>
              <p className="text-xs text-[#686868] mb-4 font-sans">
                Tools, frameworks, and patterns used to implement working software:
              </p>
              <ul className="space-y-2 text-xs font-mono text-[#222222]">
                {appliedSkills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-white px-2.5 py-1.5 border border-[#E5E2DC] rounded-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Active Study Areas */}
            <div className="lg:col-span-7 border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E5E2DC]">
                <BookOpen className="w-4 h-4 text-[#2D4A3E]" />
                <h3 className="font-serif text-base text-[#222222]">
                  Active Areas of Study &amp; Deliberate Practice
                </h3>
              </div>
              <p className="text-xs text-[#686868] mb-4 font-sans">
                Backend engineering domains I am exploring through technical literature, deliberate exercises, and system prototypes:
              </p>
              <div className="space-y-3.5">
                {learningAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 border border-[#E5E2DC] rounded-xs"
                  >
                    <h4 className="font-serif text-sm font-medium text-[#222222] mb-1">
                      {area.title}
                    </h4>
                    <p className="text-xs text-[#686868] font-sans leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION G — CLOSING CTA */}
        <section className="border-t border-[#E5E2DC] pt-12 pb-6">
          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-8 sm:p-10 rounded-xs text-center max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-2">
              Next Steps
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#222222] mb-3">
              Building something that needs thoughtful backend engineering? Let&apos;s talk.
            </h2>
            <p className="text-sm text-[#686868] font-sans leading-relaxed mb-6 max-w-xl mx-auto">
              I am actively seeking Junior Backend Software Engineer opportunities and technical collaborations where I can contribute to reliable API design, clean data modeling, and dependable service integrations.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" variant="primary">
                <Mail className="w-4 h-4" />
                <span>Contact Ahmed</span>
              </Button>
              <Button href="/projects" variant="secondary">
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                href={siteConfig.linkedin}
                variant="secondary"
                external
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#686868]" />
              </Button>
            </div>

            <p className="text-xs font-mono text-[#686868] mt-6">
              Direct email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2D4A3E] hover:underline underline-offset-4 font-medium"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
}
