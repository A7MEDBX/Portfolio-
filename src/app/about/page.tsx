import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Compass, Terminal, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Engineering background, technical philosophy, and backend specialization of Ahmed Ragab.",
};

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Background & Philosophy"
        title="About Ahmed Ragab"
        subtitle="Backend Software Engineer specializing in resilient systems, distributed telemetry, and transactional data pipelines."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Editorial Story */}
        <div className="md:col-span-2 space-y-8 text-base text-[#222222] leading-relaxed font-sans">
          <section>
            <h2 className="font-serif text-2xl font-normal text-[#222222] mb-3">
              Engineering Focus
            </h2>
            <p className="text-[#686868] mb-4">
              I am a Backend Software Engineer dedicated to constructing systems that maintain their composure under pressure. My engineering experience centers on scalable API design, event-driven pipelines, relational database architecture, and real-time telemetry ingestion.
            </p>
            <p className="text-[#686868]">
              Whether synchronizing rolling stock telemetry across an autonomous metro platform or engineering transactional reservations for high-volume logistics engines, I prioritize correct data modeling, predictable latency profiles, and defensive error boundaries.
            </p>
          </section>

          <section className="border-t border-[#E5E2DC] pt-8">
            <h2 className="font-serif text-2xl font-normal text-[#222222] mb-3">
              Architectural Values
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Terminal className="w-5 h-5 text-[#2D4A3E] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#222222]">
                    Pragmatic Over Dogmatic
                  </h3>
                  <p className="text-sm text-[#686868] mt-1">
                    I favor modular architectures with clear domain boundaries over premature microservice fragmentation. Complexity should only be introduced when concrete scale or organizational boundaries necessitate it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Cpu className="w-5 h-5 text-[#2D4A3E] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#222222]">
                    Data Integrity First
                  </h3>
                  <p className="text-sm text-[#686868] mt-1">
                    Databases outlive application code. Careful normalization, intentional index design, explicit foreign keys, and strict transaction isolation levels form the bedrock of lasting software systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#2D4A3E] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-[#222222]">
                    Operational Empathy & Observability
                  </h3>
                  <p className="text-sm text-[#686868] mt-1">
                    Software running in production must be observable. Structured logs, actionable metrics, distributed tracing, and graceful degradation ensure systems can be diagnosed without guesswork.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-[#E5E2DC] pt-8">
            <h2 className="font-serif text-2xl font-normal text-[#222222] mb-3">
              How I Work
            </h2>
            <p className="text-[#686868] mb-4">
              I believe clear writing precedes clear code. Before writing non-trivial features or refactors, I formulate concise technical RFCs to document data contracts, failure modes, trade-offs, and rollback strategies.
            </p>
            <p className="text-[#686868]">
              Continuous integration, deterministic test suites, and thorough code reviews are central to how I maintain momentum and confidence across team environments.
            </p>
          </section>

          <div className="border-t border-[#E5E2DC] pt-8 flex items-center gap-4">
            <Button href="/experience" variant="primary">
              <span>View Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/contact" variant="secondary">
              <span>Contact Ahmed</span>
            </Button>
          </div>
        </div>

        {/* Sidebar Metadata */}
        <aside className="space-y-6">
          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-4">
              Overview
            </h3>

            <dl className="space-y-4 text-xs font-mono">
              <div>
                <dt className="text-[#686868]">Profession</dt>
                <dd className="text-[#222222] font-medium text-sm mt-0.5">
                  Backend Software Engineer
                </dd>
              </div>

              <div>
                <dt className="text-[#686868]">Location</dt>
                <dd className="text-[#222222] font-medium text-sm mt-0.5">
                  {siteConfig.location}
                </dd>
              </div>

              <div>
                <dt className="text-[#686868]">Primary Stacks</dt>
                <dd className="text-[#222222] font-medium text-sm mt-0.5">
                  Go, Python, TypeScript, PostgreSQL, Redis, Docker
                </dd>
              </div>

              <div>
                <dt className="text-[#686868]">Specializations</dt>
                <dd className="text-[#222222] font-medium text-sm mt-0.5">
                  APIs, Distributed Telemetry, Concurrency, RAG Systems
                </dd>
              </div>

              <div>
                <dt className="text-[#686868]">Availability</dt>
                <dd className="text-[#2D4A3E] font-medium text-sm mt-0.5">
                  Open for opportunities & technical advisory
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-[#E5E2DC] bg-[#F7F5F0] p-6 rounded-xs">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-2">
              Inspiration & Standards
            </h3>
            <p className="text-xs text-[#686868] leading-relaxed">
              This portfolio adheres to high editorial standards, prioritizing clean typography, readable prose, and technical transparency without superficial visual noise.
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}
