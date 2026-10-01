import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectVisualPreview } from "@/components/home/ProjectVisualPreview";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  FileCode2,
  ExternalLink,
  Code2,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const diagramType =
    project.slug === "egyptian-law-ai-chatbot"
      ? "rag"
      : project.slug === "samcs" || project.slug === "airzigzag"
      ? "stream"
      : "monolith";

  return (
    <Container>
      <PageHeader
        eyebrow={`Case Study • ${project.category}`}
        title={project.title}
        subtitle={project.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        {/* Project Metadata Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#E5E2DC] text-xs font-mono">
          <div>
            <span className="text-[#686868] block mb-1">Status</span>
            <Badge variant="status">{project.status}</Badge>
          </div>
          <div>
            <span className="text-[#686868] block mb-1">Timeline</span>
            <span className="text-[#222222] font-medium">{project.timeline}</span>
          </div>
          <div>
            <span className="text-[#686868] block mb-1">Domain</span>
            <span className="text-[#222222] font-medium">{project.category}</span>
          </div>
          <div>
            <span className="text-[#686868] block mb-1">External Links</span>
            <div className="flex items-center gap-2">
              {project.repositoryUrl ? (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-[#686868] italic">Internal</span>
              )}

              {project.liveUrl && (
                <>
                  <span className="text-[#E5E2DC]">•</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </PageHeader>

      {/* Main Editorial Content */}
      <article className="space-y-12">
        {/* Technologies List */}
        <div>
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] mb-3 font-medium">
            Core Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Section 1: Executive Summary */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-4 flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#2D4A3E]" />
            <span>Executive Overview</span>
          </h2>
          <p className="text-base text-[#222222] leading-relaxed">
            {project.summary}
          </p>
        </section>

        {/* Section 2: Problem Statement & Engineering Constraints */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-4 flex items-center gap-2.5">
            <Cpu className="w-5 h-5 text-[#2D4A3E]" />
            <span>The Problem Addressed</span>
          </h2>
          <p className="text-base text-[#686868] leading-relaxed">
            {project.problemStatement}
          </p>
        </section>

        {/* Section 3: My Contribution */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-4 flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-[#2D4A3E]" />
            <span>My Contribution</span>
          </h2>
          <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-6 rounded-xs">
            <p className="text-base text-[#222222] font-sans leading-relaxed">
              {project.contribution}
            </p>
          </div>
        </section>

        {/* Section 4: System Architecture & Visual Schematic */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-2 flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#2D4A3E]" />
            <span>System Architecture & Data Flow</span>
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed mb-4">
            {project.architectureOverview}
          </p>

          <ProjectVisualPreview slug={project.slug} />

          <ArchitectureDiagram
            title={`${project.title} — Topology`}
            type={diagramType}
          />
        </section>

        {/* Section 5: Key Backend Responsibilities */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-6 flex items-center gap-2.5">
            <FileCode2 className="w-5 h-5 text-[#2D4A3E]" />
            <span>Key Engineering Responsibilities</span>
          </h2>
          <ul className="space-y-4">
            {project.keyResponsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-1 shrink-0" />
                <span className="text-sm text-[#222222] leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section 6: System Highlights & Technical Highlights */}
        <section className="border-t border-[#E5E2DC] pt-8">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-6">
            Architectural Guarantees & Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.systemHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 rounded-xs"
              >
                <span className="text-xs font-mono text-[#2D4A3E] font-medium block mb-2">
                  0{idx + 1} // GUARANTEE
                </span>
                <p className="text-sm text-[#222222] leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Between Case Studies */}
        <nav
          aria-label="Case Study Navigation"
          className="border-t border-[#E5E2DC] pt-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-2 text-sm text-[#686868] hover:text-[#222222] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#2D4A3E] group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="text-xs font-mono block text-[#686868]">
                  Previous Case Study
                </span>
                <span className="font-serif text-base text-[#222222]">
                  {prevProject.title.split("—")[0].trim()}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Button href="/projects" variant="secondary">
            All Projects Catalog
          </Button>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-2 text-sm text-[#686868] hover:text-[#222222] text-right transition-colors"
            >
              <div>
                <span className="text-xs font-mono block text-[#686868]">
                  Next Case Study
                </span>
                <span className="font-serif text-base text-[#222222]">
                  {nextProject.title.split("—")[0].trim()}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-[#2D4A3E] group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </Container>
  );
}
