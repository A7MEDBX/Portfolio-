import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { ProjectVisualPreview } from "@/components/home/ProjectVisualPreview";
import {
  SAMCSArchitectureVisual,
  SAMCSTelemetryFrameVisual,
} from "./SAMCSVisuals";
import {
  LostprojectArchitectureVisual,
  LostprojectMatchingFlowVisual,
  FinderAppGallery,
} from "./LostprojectVisuals";
import {
  AirzigzagArchitectureVisual,
  AirzigzagUserJourneyVisual,
} from "./AirzigzagVisuals";
import {
  IEEEAswanArchitectureVisual,
  IEEEAswanPlaceholderVisual,
} from "./IEEEAswanVisuals";
import {
  OlympicsBracketVisual,
  OlympicsEventGallery,
} from "./OlympicsVisuals";
import {
  ExternalLink,
  Layers,
  Cpu,
  Target,
  Code2,
  CheckCircle2,
  GitBranch,
  ShieldAlert,
  ShieldCheck,
  Lock,
  Users,
  ArrowLeft,
  ArrowRight,
  FileCode2,
  ChevronDown,
} from "lucide-react";

interface CaseStudyTemplateProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
  relatedProjects: Project[];
}

export function CaseStudyTemplate({
  project,
  prevProject,
  nextProject,
  relatedProjects,
}: CaseStudyTemplateProps) {
  const diagramType =
    project.slug === "egyptian-law-ai-chatbot"
      ? "rag"
      : project.slug === "samcs" || project.slug === "airzigzag"
      ? "stream"
      : "monolith";

  return (
    <div>
      {/* 1. PROJECT HERO */}
      <PageHeader
        eyebrow={`CASE STUDY // ${project.category.toUpperCase()}`}
        title={project.title}
        subtitle={project.oneSentenceOverview || project.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        {/* Value Statement Box */}
        {project.valueStatement && (
          <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-4 sm:p-5 rounded-xs my-4">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-1">
              Core Problem &amp; Value Proposition
            </span>
            <p className="text-sm sm:text-base text-[#222222] font-sans leading-relaxed">
              {project.valueStatement}
            </p>
          </div>
        )}

        {/* Project Metadata Strip */}
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
            <span className="text-[#686868] block mb-1">Role</span>
            <span className="text-[#222222] font-medium">
              {project.roleTitle || "Backend Software Engineer"}
            </span>
          </div>
          <div>
            <span className="text-[#686868] block mb-1">Links &amp; Code</span>
            <div className="flex flex-wrap items-center gap-2">
              {project.repositoryUrl ? (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub Profile & Repositories"
                  className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-[#686868] italic">Proprietary</span>
              )}

              {project.liveUrl && (
                <>
                  <span className="text-[#E5E2DC]">•</span>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Platform"
                    className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                  >
                    <span>Live Platform</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Top Tech Badges & Primary Action Bar */}
        <div className="pt-4 mt-4 border-t border-[#E5E2DC] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-mono text-[#686868] mr-1">Core Tech:</span>
            {project.technologies.slice(0, 5).map((tech) => (
              <Badge key={tech} variant="default" className="text-xs py-0.5 px-2">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {project.primaryAction && (
              <Button
                href={project.primaryAction.href}
                variant="primary"
                external={project.primaryAction.external}
              >
                <span>{project.primaryAction.label}</span>
                {project.primaryAction.external ? (
                  <ExternalLink className="w-3.5 h-3.5" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </Button>
            )}

            <Button href="#technical-details" variant="secondary">
              <span>Technical Details</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#686868]" />
            </Button>
          </div>
        </div>
      </PageHeader>

      {/* Hero Image if authentic photograph available */}
      {project.heroImage && (
        <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-3 sm:p-4 rounded-xs my-8 overflow-hidden">
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full bg-[#1A1A1A] rounded-xs overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className="object-cover"
            />
          </div>
          <p className="text-[11px] font-mono text-[#686868] mt-2.5 text-center">
            {project.heroImageCaption ||
              (project.slug === "ieee-olympics-problem-solving"
                ? "Authentic event documentation: Direct head-to-head coding duel during the IEEE Olympics Problem Solving competition."
                : `Authentic documentation: Visual capture from ${project.title}.`)}
          </p>
        </div>
      )}

      <article className="space-y-14">
        {/* 2. CORE FEATURES (3-5 COMPELLING FEATURES) */}
        {project.coreFeatures && project.coreFeatures.length > 0 && (
          <section className="border-t border-[#E5E2DC] pt-10">
            <div className="max-w-2xl mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-1">
                Core Capabilities &amp; Features
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                What This System Enables
              </h2>
              <p className="text-xs text-[#686868] font-sans mt-1">
                Key user workflows, operational capabilities, and engineering solutions delivered in this project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {project.coreFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs flex flex-col justify-between hover:border-[#2D4A3E]/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2 pb-2 border-b border-[#E5E2DC]">
                      <span className="text-[#2D4A3E] font-medium">FEATURE 0{idx + 1}</span>
                      {feat.workflow && (
                        <span className="text-[#686868] bg-white px-2 py-0.5 rounded-xs border border-[#E5E2DC] text-[10px]">
                          {feat.workflow}
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#222222] mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 3. MEDIA AND DEMONSTRATIONS */}
        <section id="project-media" className="border-t border-[#E5E2DC] pt-10 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-1">
                Visual Documentation &amp; Demonstrations
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                System Visuals &amp; Live Artifacts
              </h2>
            </div>
            <span className="text-xs font-mono text-[#686868]">
              Authentic Production Evidence
            </span>
          </div>

          {/* Genuine Labeled Technical Visual Preview */}
          {project.slug === "samcs" ? (
            <div className="space-y-6">
              <SAMCSArchitectureVisual />
              <SAMCSTelemetryFrameVisual />
            </div>
          ) : project.slug === "lostproject" ? (
            <div className="space-y-6">
              <FinderAppGallery />
              <LostprojectArchitectureVisual />
              <LostprojectMatchingFlowVisual />
            </div>
          ) : project.slug === "airzigzag" ? (
            <div className="space-y-6">
              <AirzigzagArchitectureVisual />
              <AirzigzagUserJourneyVisual />
            </div>
          ) : project.slug === "ieee-aswan-student-branch" ? (
            <div className="space-y-6">
              <IEEEAswanPlaceholderVisual />
              <IEEEAswanArchitectureVisual />
            </div>
          ) : project.slug === "ieee-olympics-problem-solving" ? (
            <div className="space-y-6">
              <OlympicsBracketVisual />
              <OlympicsEventGallery />
            </div>
          ) : (
            <div>
              <ProjectVisualPreview slug={project.slug} />
            </div>
          )}
        </section>

        {/* 4. MY CONTRIBUTION & ENGINEERING ROLE */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Code2 className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              My Contribution &amp; Engineering Role
            </h2>
          </div>

          <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-6 rounded-xs mb-6">
            <p className="text-sm sm:text-base text-[#222222] font-sans leading-relaxed">
              {project.contribution}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] mb-3 font-medium">
              Concrete Engineering Deliverables
            </h3>
            <ul className="space-y-3">
              {project.keyResponsibilities.slice(0, 4).map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#222222] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DEDICATED LEADERSHIP SUMMARY (If applicable) */}
          {project.teamLeadership && (
            <div className="mt-6 border border-[#E5E2DC] bg-white p-5 rounded-xs">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] block mb-2 font-medium">
                Leadership Context // {project.teamLeadership.roleTitle}
              </span>
              <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed mb-3">
                {project.teamLeadership.leadershipNarrative}
              </p>
              <ul className="space-y-2 text-xs text-[#222222] font-sans">
                {project.teamLeadership.responsibilities.slice(0, 3).map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 5. TECHNICAL DETAILS (COLLAPSIBLE DISCLOSURE) */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <details
            id="technical-details"
            className="group border border-[#E5E2DC] bg-[#FAF9F6] rounded-xs overflow-hidden scroll-mt-24 transition-all"
          >
            <summary className="p-6 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 list-none hover:bg-[#EEF3F0] transition-colors select-none">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-1">
                  Deep Technical Exploration
                </span>
                <h2 className="font-serif text-2xl font-normal text-[#222222]">
                  Technical Details &amp; Architecture Breakdown
                </h2>
                <p className="text-xs text-[#686868] font-sans mt-1">
                  Expand to inspect architecture diagrams, database schemas, API boundaries, and security considerations.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#2D4A3E] bg-white border border-[#E5E2DC] px-3 py-1.5 rounded-xs shrink-0 shadow-xs group-hover:border-[#2D4A3E]/40">
                <span className="group-open:hidden">+ View Architecture &amp; Code Specs</span>
                <span className="hidden group-open:inline">- Collapse Technical Details</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
              </div>
            </summary>

            <div className="p-6 sm:p-8 border-t border-[#E5E2DC] bg-white space-y-12">
              {/* Problem & Objectives */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="w-4 h-4 text-[#2D4A3E]" />
                  <h3 className="font-serif text-xl font-normal text-[#222222]">
                    Problem &amp; Engineering Objectives
                  </h3>
                </div>
                <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
                  {project.problemStatement}
                </p>
                <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-4 rounded-xs">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-2.5">
                    Primary Objectives:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#222222] font-sans">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 shrink-0" />
                        <span className="leading-relaxed">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* System Overview */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-4 h-4 text-[#2D4A3E]" />
                  <h3 className="font-serif text-xl font-normal text-[#222222]">
                    System Architecture &amp; Data Flow
                  </h3>
                </div>
                <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
                  {project.systemOverview}
                </p>
                <ArchitectureDiagram
                  title={`${project.title} — System Topology`}
                  type={diagramType}
                />
              </div>

              {/* Deep Implementation Details */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FileCode2 className="w-4 h-4 text-[#2D4A3E]" />
                  <h3 className="font-serif text-xl font-normal text-[#222222]">
                    Component Implementation Breakdown
                  </h3>
                </div>
                <div className="space-y-4">
                  {project.implementationDetails.map((impl, idx) => (
                    <div
                      key={idx}
                      className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 rounded-xs"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-serif text-base font-normal text-[#222222]">
                          {impl.title}
                        </h4>
                        <span className="text-xs font-mono text-[#2D4A3E]">
                          SPEC 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs text-[#686868] font-sans leading-relaxed mb-3">
                        {impl.description}
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#222222] font-sans">
                        {impl.points.map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Considerations */}
              {project.securityConsiderations && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Lock className="w-4 h-4 text-[#2D4A3E]" />
                    <h3 className="font-serif text-xl font-normal text-[#222222]">
                      Security Considerations &amp; Defenses
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-4 rounded-xs">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] block mb-2 font-medium">
                        Implemented Controls
                      </span>
                      <ul className="space-y-2 text-xs text-[#222222] font-sans">
                        {project.securityConsiderations.implemented.map((m, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border border-[#E5E2DC] bg-[#F7F5F0] p-4 rounded-xs">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#686868] block mb-2 font-medium">
                        Operational Boundaries &amp; Recommendations
                      </span>
                      <ul className="space-y-2 text-xs text-[#686868] font-sans">
                        {project.securityConsiderations.recommendations.map((r, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#686868] mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete Technology Stack */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#686868] block mb-2 font-medium">
                  Full Technology Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="default" className="text-xs py-1 px-2.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </section>

        {/* 6. RELATED PROJECTS */}
        {relatedProjects.length > 0 && (
          <section className="border-t border-[#E5E2DC] pt-10">
            <div className="max-w-2xl mb-6">
              <p className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-1">
                Complementary Systems
              </p>
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Related Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/projects/${rel.slug}`}
                  className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
                >
                  <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                    {rel.category.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between mb-2">
                    <span>{rel.title.split("—")[0].trim()}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-xs text-[#686868] font-sans leading-relaxed mb-3">
                    {rel.oneSentenceOverview || rel.summary}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {rel.technologies.slice(0, 3).map((t) => (
                      <Badge key={t} variant="muted">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* 7. PREVIOUS / NEXT PROJECT NAVIGATION */}
        <nav
          aria-label="Case Study Navigation"
          className="border-t border-[#E5E2DC] pt-10 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-[#686868] hover:text-[#2D4A3E] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous: {prevProject.title.split("—")[0].trim()}</span>
            </Link>
          ) : (
            <div />
          )}

          <Button href="/projects" variant="secondary">
            <span>All Projects Catalog</span>
          </Button>

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center gap-2 text-xs font-mono text-[#686868] hover:text-[#2D4A3E] transition-colors"
            >
              <span>Next: {nextProject.title.split("—")[0].trim()}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </article>
    </div>
  );
}
