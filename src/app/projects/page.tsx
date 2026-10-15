import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { projects } from "@/data/projects";
import { ProjectVisualPreview } from "@/components/home/ProjectVisualPreview";
import { ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies, backend architectures, and software applications developed by Ahmed Ragab.",
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
        subtitle="A concise introduction to the software systems, applications, and technical projects Ahmed Ragab has worked on across distributed architectures, mobile backends, and data-driven systems."
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
              Scannable Overviews &amp; Technical Breakdowns
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
                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#222222] tracking-tight mb-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-[#2D4A3E] hover:underline underline-offset-4 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>

                {/* One-Sentence Description */}
                <p className="text-base text-[#686868] font-sans leading-relaxed mb-6 max-w-3xl">
                  {project.oneSentenceOverview || project.subtitle || project.summary}
                </p>

                {/* Standout Feature / Capability Labels */}
                {project.coreFeatures && project.coreFeatures.length > 0 && (
                  <div className="mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] font-medium block mb-2">
                      Key Capabilities &amp; Workflows
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {project.coreFeatures.slice(0, 3).map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 bg-[#FAF9F6] border border-[#E5E2DC] p-3 rounded-xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                          <div>
                            <p className="text-xs font-mono uppercase tracking-wide font-medium text-[#222222]">
                              {feat.title}
                            </p>
                            <p className="text-[12px] text-[#686868] font-sans leading-snug mt-1">
                              {feat.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Visual Architecture Preview */}
                <ProjectVisualPreview slug={project.slug} />

                {/* Tech Stack and Navigation Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#E5E2DC]/70">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[11px] font-mono text-[#686868] ml-1">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 shrink-0 flex-wrap">
                    {/* Primary direct demo/media action if distinct */}
                    {project.primaryAction &&
                      project.primaryAction.href !== `/projects/${project.slug}` && (
                        <Button
                          href={project.primaryAction.href}
                          external={project.primaryAction.external}
                          variant="secondary"
                        >
                          <span>{project.primaryAction.label}</span>
                          {project.primaryAction.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </Button>
                      )}

                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors px-2 py-1"
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

        {/* 3. COMPACT PRESENTATIONS (IEEE Aswan, IEEE Olympics, Sport Club, Egyptian Law, Hospital) */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="flex items-baseline justify-between border-b border-[#E5E2DC] pb-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-1">
                Additional Projects
              </p>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Specialized Systems &amp; Applications
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

                {/* One-Sentence Description */}
                <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
                  {project.oneSentenceOverview || project.subtitle || project.summary}
                </p>

                {/* Standout Feature / Capability Labels */}
                {project.coreFeatures && project.coreFeatures.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                    {project.coreFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 bg-[#F5F3EE]/80 border border-[#E5E2DC] p-2.5 rounded-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[11px] font-mono uppercase tracking-wide font-medium text-[#222222]">
                            {feat.title}
                          </p>
                          <p className="text-[11px] text-[#686868] font-sans leading-snug mt-0.5">
                            {feat.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Compact Technical Visual Preview */}
                <ProjectVisualPreview slug={project.slug} />

                {/* Stack & Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 mt-4 border-t border-[#E5E2DC]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono text-[#686868] ml-1">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 shrink-0 flex-wrap">
                    {/* Primary direct demo/media action if distinct */}
                    {project.primaryAction &&
                      project.primaryAction.href !== `/projects/${project.slug}` && (
                        <Button
                          href={project.primaryAction.href}
                          external={project.primaryAction.external}
                          variant="secondary"
                        >
                          <span>{project.primaryAction.label}</span>
                          {project.primaryAction.external ? (
                            <ExternalLink className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5" />
                          )}
                        </Button>
                      )}

                    {project.repositoryUrl && (
                      <a
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#686868] hover:text-[#222222] transition-colors px-2 py-1"
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
