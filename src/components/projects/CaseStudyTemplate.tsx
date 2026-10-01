import React from "react";
import Link from "next/link";
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
} from "./LostprojectVisuals";
import Image from "next/image";
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
  Beaker,
  CheckCircle,
  Clock,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  FileCode2,
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
      {/* 1. PROJECT TITLE & SHORT SUMMARY */}
      <PageHeader
        eyebrow={`ENGINEERING CASE STUDY // ${project.category.toUpperCase()}`}
        title={project.title}
        subtitle={project.subtitle}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
      >
        {/* 2. PROJECT METADATA */}
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
            <span className="text-[#686868] block mb-1">Links & Access</span>
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

              {project.announcementUrl && (
                <>
                  <span className="text-[#E5E2DC]">•</span>
                  <a
                    href={project.announcementUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Public Announcement on LinkedIn"
                    className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1 font-medium"
                  >
                    <span>LinkedIn Announcement</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {project.roleTitle && (
          <div className="pt-3 border-t border-[#E5E2DC] mt-3 flex items-center gap-2 text-xs font-mono">
            <span className="text-[#686868]">Leadership Role:</span>
            <span className="text-[#2D4A3E] font-medium">{project.roleTitle}</span>
          </div>
        )}
      </PageHeader>

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
            Authentic event documentation: Direct head-to-head coding duel during the IEEE Olympics Problem Solving competition.
          </p>
        </div>
      )}

      <article className="space-y-14">
        {/* Executive Summary paragraph */}
        <section className="bg-[#FAF9F6] border border-[#E5E2DC] p-6 sm:p-7 rounded-xs">
          <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium block mb-2">
            Executive Summary
          </span>
          <p className="text-base text-[#222222] font-sans leading-relaxed">
            {project.summary}
          </p>
        </section>

        {/* 3. PROBLEM AND OBJECTIVES */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Cpu className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Problem & Engineering Objectives
            </h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] mb-2 font-medium">
                The Problem
              </h3>
              <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-5 sm:p-6 rounded-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] mb-3 font-medium flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5" />
                <span>Primary Engineering Objectives</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-[#222222] font-sans">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 shrink-0" />
                    <span className="leading-relaxed">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 4. SYSTEM OVERVIEW */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Layers className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              System Overview
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            {project.systemOverview}
          </p>
        </section>

        {/* 5. MY ROLE AND CONTRIBUTIONS */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Code2 className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              My Role & Contributions
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
              {project.keyResponsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#222222] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* DEDICATED SECTION: LEADING THE WEB TEAM */}
        {project.teamLeadership && (
          <section className="border-t border-[#E5E2DC] pt-10">
            <div className="flex items-center gap-2.5 mb-4">
              <Users className="w-5 h-5 text-[#2D4A3E]" />
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Leading the Web Team
              </h2>
            </div>
            <div className="bg-[#FAF9F6] border border-[#E5E2DC] p-6 rounded-xs mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] block mb-2 font-medium">
                Leadership Context // {project.teamLeadership.roleTitle}
              </span>
              <p className="text-sm sm:text-base text-[#222222] font-sans leading-relaxed">
                {project.teamLeadership.leadershipNarrative}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] mb-3 font-medium">
                Coordination, Code Review &amp; Task Distribution
              </h3>
              <ul className="space-y-3">
                {project.teamLeadership.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#222222] font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* 6. ARCHITECTURE DIAGRAM */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-2">
            <GitBranch className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Architecture Diagram & Data Flow
            </h2>
          </div>
          <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
            {project.architectureOverview}
          </p>

          {/* Genuine Labeled Technical Visual Preview */}
          {project.slug === "samcs" ? (
            <div className="space-y-6">
              <SAMCSArchitectureVisual />
              <SAMCSTelemetryFrameVisual />
            </div>
          ) : project.slug === "lostproject" ? (
            <div className="space-y-6">
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
              <IEEEAswanArchitectureVisual />
              <IEEEAswanPlaceholderVisual />
            </div>
          ) : project.slug === "ieee-olympics-problem-solving" ? (
            <div className="space-y-6">
              <OlympicsBracketVisual />
              <OlympicsEventGallery />
            </div>
          ) : (
            <div>
              <ProjectVisualPreview slug={project.slug} />
              <ArchitectureDiagram
                title={`${project.title} — System Topology`}
                type={diagramType}
              />
            </div>
          )}
        </section>

        {/* 7. TECHNOLOGY STACK */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-sm py-1 px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* 8. IMPLEMENTATION DETAILS */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-6">
            <FileCode2 className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Implementation Details
            </h2>
          </div>

          <div className="space-y-6">
            {project.implementationDetails.map((impl, idx) => (
              <div
                key={idx}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="font-serif text-lg font-normal text-[#222222]">
                    {impl.title}
                  </h3>
                  <span className="text-xs font-mono text-[#2D4A3E]">
                    SECTION 0{idx + 1}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#686868] font-sans leading-relaxed mb-4">
                  {impl.description}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-[#222222] font-sans">
                  {impl.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 shrink-0" />
                      <span className="leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* DEDICATED SECTION: SECURITY CONSIDERATIONS */}
        {project.securityConsiderations && (
          <section className="border-t border-[#E5E2DC] pt-10">
            <div className="flex items-center gap-2.5 mb-6">
              <Lock className="w-5 h-5 text-[#2D4A3E]" />
              <h2 className="font-serif text-2xl font-normal text-[#222222]">
                Security Considerations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E5E2DC]">
                  <ShieldCheck className="w-4 h-4 text-[#2D4A3E]" />
                  <h3 className="font-serif text-base text-[#222222]">
                    Implemented Measures
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#222222] font-sans">
                  {project.securityConsiderations.implemented.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 shrink-0" />
                      <span className="leading-relaxed">{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-[#E5E2DC] bg-[#F7F5F0] p-6 rounded-xs">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#E5E2DC]">
                  <ShieldAlert className="w-4 h-4 text-[#686868]" />
                  <h3 className="font-serif text-base text-[#222222]">
                    Recommendations &amp; Future Improvements
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#686868] font-sans">
                  {project.securityConsiderations.recommendations.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#686868] mt-2 shrink-0" />
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] font-mono text-[#686868] mt-5 pt-3 border-t border-[#E5E2DC] italic">
                  Note: The system is documented strictly by its implemented controls and does not claim independent third-party penetration certification.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 9. IMPORTANT ENGINEERING DECISIONS */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-6">
            Important Engineering Decisions
          </h2>

          <div className="space-y-6">
            {project.engineeringDecisions.map((dec, idx) => (
              <div
                key={idx}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs"
              >
                <h3 className="font-serif text-lg font-normal text-[#222222] mb-3">
                  {dec.decision}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm font-sans">
                  <div>
                    <span className="font-mono text-[#2D4A3E] uppercase tracking-wider block mb-1 font-medium">
                      Rationale & Design Justification:
                    </span>
                    <p className="text-[#222222] leading-relaxed">
                      {dec.rationale}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[#686868] uppercase tracking-wider block mb-1 font-medium">
                      Alternative Considered & Rejected:
                    </span>
                    <p className="text-[#686868] leading-relaxed">
                      {dec.alternativeConsidered}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. CHALLENGES AND TRADE-OFFS */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-6">
            <ShieldAlert className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Challenges & Trade-offs
            </h2>
          </div>

          <div className="space-y-6">
            {project.challengesAndTradeoffs.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs"
              >
                <h3 className="font-serif text-lg font-normal text-[#222222] mb-3">
                  {item.challenge}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-sans pt-2 border-t border-[#E5E2DC]">
                  <div>
                    <span className="font-mono text-[#2D4A3E] uppercase tracking-wider block mb-1 font-medium">
                      Technical Resolution:
                    </span>
                    <p className="text-[#222222] leading-relaxed">
                      {item.resolution}
                    </p>
                  </div>
                  <div>
                    <span className="font-mono text-[#686868] uppercase tracking-wider block mb-1 font-medium">
                      Accepted Trade-off / Limitation:
                    </span>
                    <p className="text-[#686868] leading-relaxed">
                      {item.tradeOff}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. TESTING AND VALIDATION */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Beaker className="w-5 h-5 text-[#2D4A3E]" />
            <h2 className="font-serif text-2xl font-normal text-[#222222]">
              Testing & Verification
            </h2>
          </div>
          <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4">
            Methodologies applied to verify system correctness, error boundary resilience, and protocol conformance:
          </p>
          <ul className="space-y-3">
            {project.testingAndValidation.map((test, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-[#222222] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                <span className="leading-relaxed">{test}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 12. RESULTS AND LESSONS LEARNED */}
        <section className="border-t border-[#E5E2DC] pt-10">
          <h2 className="font-serif text-2xl font-normal text-[#222222] mb-6">
            Results & Lessons Learned
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Completed Work */}
            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] mb-3 font-medium flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#2D4A3E]" />
                <span>Completed Functionality</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#222222] font-sans">
                {project.resultsAndLessons.completedWork.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Planned Work */}
            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] mb-3 font-medium flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#686868]" />
                <span>Planned Next Steps & Unfinished Scope</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#686868] font-sans">
                {(project.resultsAndLessons.plannedWork || []).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#686868] mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="border border-[#E5E2DC] bg-[#F7F5F0] p-6 rounded-xs">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] mb-3 font-medium flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-[#2D4A3E]" />
              <span>Engineering Lessons Learned</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#222222] font-sans">
              {project.resultsAndLessons.lessonsLearned.map((lesson, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E] mt-2 shrink-0" />
                  <span className="leading-relaxed">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. RELATED PROJECTS */}
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
                    {rel.summary}
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

        {/* 14. PREVIOUS / NEXT PROJECT NAVIGATION */}
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
    </div>
  );
}
