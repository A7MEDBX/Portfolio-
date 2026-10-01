import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { projects } from "@/data/projects";
import { ProjectVisualPreview } from "@/components/home/ProjectVisualPreview";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies, backend architectures, and software applications developed by BEDO (Ahmed Ragab).",
};

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const compactProjects = projects.filter((p) => !p.featured);

  return (
    <Container>
      {/* 1. PAGE INTRODUCTION */}
      <PageHeader
        eyebrow="SELECTED WORK"
        title="Projects and engineering explorations."
        subtitle="A concise introduction to the software systems, applications, and technical projects BEDO has worked on across distributed architectures, mobile backends, and data-driven systems."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <div className="space-y-20">
        {/* 2. PROMINENT FEATURED PROJECTS (SAMCS, Lostproject, Airzigzag) */}
        <section>
          <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
                Featured Case Studies
              </p>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Core Systems Engineering
              </h2>
            </div>
            <span className="text-xs font-mono text-[#686868]">
              Detailed Architectural Breakdowns
            </span>
          </div>

          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <article
                key={project.slug}
                className="border-b border-[#E5E2DC] pb-16 last:border-b-0 last:pb-0"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <span className="text-xs font-mono text-[#2D4A3E] font-medium tracking-wider">
                    CASE STUDY 0{index + 1} // {project.category.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#686868]">
                    {project.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#222222] tracking-tight mb-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#2D4A3E] hover:underline underline-offset-4 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                {/* Brief Description */}
                <p className="text-base text-[#686868] font-sans leading-relaxed mb-6 max-w-3xl">
                  {project.summary}
                </p>

                {/* Visual Architecture Preview */}
                <ProjectVisualPreview slug={project.slug} />

                {/* Structured Problem & Contribution Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 bg-[#FAF9F6] border border-[#E5E2DC] p-6 rounded-xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-[#686868] font-medium">
                      <Cpu className="w-3.5 h-3.5 text-[#2D4A3E]" />
                      <span>Problem Addressed</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2 text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E]" />
                      <span>My Contribution</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#222222] font-sans leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack and Navigation Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors"
                        title="GitHub Repository"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <Button href={`/projects/${project.slug}`} variant="primary">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3. COMPACT PRESENTATIONS (Sport Club, Egyptian Law, Hospital Management) */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-1">
                Additional Projects
              </p>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Specialized Systems & Applications
              </h2>
            </div>
            <span className="text-xs font-mono text-[#686868]">
              Compact Presentations
            </span>
          </div>

          <div className="space-y-10">
            {compactProjects.map((project, idx) => (
              <article
                key={project.slug}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <span className="text-xs font-mono text-[#2D4A3E] font-medium tracking-wide">
                    0{featuredProjects.length + idx + 1}. {project.category.toUpperCase()}
                  </span>
                  <span className="text-xs font-mono text-[#686868]">
                    {project.timeline}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#222222] tracking-tight mb-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#2D4A3E] hover:underline underline-offset-4 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Compact Technical Visual Preview */}
                <ProjectVisualPreview slug={project.slug} />

                {/* Problem & Contribution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 pt-3 border-t border-[#E5E2DC] text-xs font-sans">
                  <div>
                    <span className="font-mono text-[#686868] uppercase tracking-wider block mb-1 font-medium">
                      Problem Addressed:
                    </span>
                    <p className="text-[#686868] leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[#2D4A3E] uppercase tracking-wider block mb-1 font-medium">
                      My Contribution:
                    </span>
                    <p className="text-[#222222] leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                </div>

                {/* Stack & Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-[#E5E2DC]">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors"
                        title="GitHub Repository"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <Button href={`/projects/${project.slug}`} variant="secondary">
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
