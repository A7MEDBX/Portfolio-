import React from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { siteConfig } from "@/data/siteConfig";
import { ArrowRight, Server, Database, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);
  const currentRole = experience[0];

  return (
    <Container>
      {/* Editorial Hero Section */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-3">
            {siteConfig.role}
          </p>

          <h1 className="text-4xl sm:text-5xl font-serif font-normal text-[#222222] tracking-tight leading-[1.15]">
            Engineering resilient backend systems, distributed services, and high-throughput data pipelines.
          </h1>

          <p className="text-base sm:text-lg text-[#686868] font-sans mt-6 leading-relaxed">
            I am {siteConfig.name}, a Backend Software Engineer focused on solving complex data concurrency,
            scalable API infrastructure, and mission-critical telemetry. Dedicated to pragmatic software craftsmanship,
            clean architectural boundaries, and rigorous performance engineering.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mt-8">
            <Button href="/projects" variant="primary">
              <span>View Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button href="/experience" variant="secondary">
              <span>Work Experience</span>
            </Button>
            <Button href="/contact" variant="ghost">
              <span>Contact Me →</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy / Focus Areas */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] mb-8 font-medium">
          Core Engineering Principles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
              Distributed Reliability
            </h3>
            <p className="text-sm text-[#686868] leading-relaxed">
              Designing services around failure domains, asynchronous message brokering, and idempotency to withstand network volatility.
            </p>
          </div>

          <div>
            <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
              Data Integrity & Modeling
            </h3>
            <p className="text-sm text-[#686868] leading-relaxed">
              Normalized relational schemas, precise indexing strategies, and multi-resource transactional isolation levels.
            </p>
          </div>

          <div>
            <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
              API Craftsmanship
            </h3>
            <p className="text-sm text-[#686868] leading-relaxed">
              Clean contracts, strict schema validation, defensive input sanitization, and predictable operational latency.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-b border-[#E5E2DC] pb-14 mb-16">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Case Studies
            </h2>
            <p className="font-serif text-2xl font-normal text-[#222222]">
              Selected Systems Engineering
            </p>
          </div>
          <Link
            href="/projects"
            className="text-xs font-mono font-medium text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
          >
            <span>View all {projects.length} projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Snapshot of Current Experience */}
      {currentRole && (
        <section className="border-b border-[#E5E2DC] pb-14 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-6">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium">
              Current Engineering Engagement
            </h2>
            <Link
              href="/experience"
              className="text-xs font-mono font-medium text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
            >
              <span>Full Work History</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-6 rounded-xs">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="font-serif text-xl font-normal text-[#222222]">
                {currentRole.role}
              </h3>
              <span className="text-xs font-mono text-[#2D4A3E] font-medium">
                {currentRole.period}
              </span>
            </div>
            <p className="text-xs font-mono text-[#686868] mb-3">
              {currentRole.company} • {currentRole.location}
            </p>
            <p className="text-sm text-[#686868] leading-relaxed mb-4">
              {currentRole.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {currentRole.technologies.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono bg-[#EEF3F0] text-[#2D4A3E] px-2 py-0.5 border border-[#D5E0D9] rounded-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Editorial Contact Invitation */}
      <section className="py-4">
        <div className="max-w-2xl">
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-2">
            Inquiries
          </h2>
          <p className="font-serif text-2xl font-normal text-[#222222] mb-3">
            Interested in backend collaboration or systems consulting?
          </p>
          <p className="text-sm text-[#686868] leading-relaxed mb-6">
            I am always open to discussing distributed systems architectures, backend challenges, or engineering opportunities.
          </p>
          <div className="flex items-center gap-4">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href="/about" variant="secondary">
              Read Background
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
