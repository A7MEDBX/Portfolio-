import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { experience } from "@/data/experience";
import { ExperienceType } from "@/types";
import {
  Briefcase,
  GraduationCap,
  Users,
  HeartHandshake,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  GitPullRequest,
  MessageSquare,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Engineering track record, internships, technical initiatives, and community leadership of Ahmed Ragab.",
};

export default function ExperiencePage() {
  const getTypeBadge = (type: ExperienceType) => {
    switch (type) {
      case "Internship":
        return {
          label: "Internship",
          icon: Briefcase,
          className: "bg-[#EEF3F0] text-[#2D4A3E] border-[#D5E0D9]",
        };
      case "Training":
        return {
          label: "Technical Initiative / Traineeship",
          icon: GraduationCap,
          className: "bg-[#FAF5EE] text-[#7A5826] border-[#E8DEC8]",
        };
      case "Technical Team":
        return {
          label: "Technical Community Team",
          icon: Users,
          className: "bg-[#F0F3F7] text-[#2D445D] border-[#D6DFE8]",
        };
      case "Volunteering":
        return {
          label: "Student Branch Volunteering",
          icon: HeartHandshake,
          className: "bg-[#F7F4F0] text-[#6E5A49] border-[#E5DDD4]",
        };
      default:
        return {
          label: "Professional",
          icon: Briefcase,
          className: "bg-[#EEF3F0] text-[#2D4A3E] border-[#D5E0D9]",
        };
    }
  };

  return (
    <Container>
      {/* 1. PAGE HEADING */}
      <PageHeader
        eyebrow="EXPERIENCE"
        title="Career & Technical Experience"
        subtitle="A chronological record of engineering internships, specialized training initiatives, technical teams, and community leadership."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
      />

      <div className="space-y-16">
        {/* 2. SHORT PROFESSIONAL INTRODUCTION */}
        <section className="max-w-3xl">
          <h2 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium mb-3">
            Professional Overview
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-[#222222] font-sans leading-relaxed">
            <p>
              My professional journey combines hands-on engineering internships, intensive government technology training initiatives, and active student technical community contributions. This foundation has cultivated both my practical backend engineering capabilities and a collaborative team mindset.
            </p>
            <p className="text-sm sm:text-base text-[#686868]">
              Below is an authentic timeline detailing verified engagements across industry, specialized engineering programs like DEPI, and technical volunteer teams like GDG and IEEE. Dates and internal metrics are clearly delineated with placeholders where exact institutional verification is pending.
            </p>
          </div>
        </section>

        {/* 3 & 4. CHRONOLOGICAL EXPERIENCE TIMELINE & TECHNICAL CONTRIBUTIONS */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-10">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Timeline
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Chronological Track Record
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Internships, structured training programs, and community volunteer engagements presented with semantic distinction:
            </p>
          </div>

          <div className="relative border-l border-[#E5E2DC] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12">
            {experience.map((item) => {
              const typeConfig = getTypeBadge(item.type);
              const TypeIcon = typeConfig.icon;

              return (
                <article key={item.id} className="relative">
                  {/* Timeline Node */}
                  <div
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#FAF9F6] border-2 border-[#2D4A3E]"
                    aria-hidden="true"
                  />

                  {/* Category Type Badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono border rounded-xs ${typeConfig.className}`}
                    >
                      <TypeIcon className="w-3 h-3" />
                      <span>{typeConfig.label}</span>
                    </span>

                    {item.type === "Volunteering" && (
                      <span className="text-[11px] font-mono text-[#686868] italic">
                        (Unpaid Academic & Community Service)
                      </span>
                    )}
                  </div>

                  {/* Role Title and Period */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="text-xl sm:text-2xl font-serif font-normal text-[#222222]">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#686868]">
                      <Calendar className="w-3.5 h-3.5 text-[#2D4A3E]" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Organization & Location */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#686868] mb-4">
                    <span className="text-[#222222] font-semibold text-sm">
                      {item.company}
                    </span>
                    <span className="text-[#E5E2DC]">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#686868] font-sans leading-relaxed mb-4 max-w-3xl">
                    {item.description}
                  </p>

                  {/* Concrete Responsibilities & Contributions */}
                  <div className="mb-4 bg-[#FAF9F6] border border-[#E5E2DC] p-4 sm:p-5 rounded-xs">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] mb-3 font-medium">
                      Key Responsibilities & Contributions
                    </h4>
                    <ul className="space-y-2.5">
                      {item.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-sm text-[#222222] font-sans leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-xs font-mono text-[#686868] mr-1">
                      Focus:
                    </span>
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 5. TEAMWORK AND COLLABORATION SECTION */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-8">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Engineering Practice
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Teamwork & Collaborative Discipline
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              How I integrate into engineering teams, communicate technical decisions, and maintain collaborative momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
                <GitPullRequest className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
                Code Review Rigor
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Active participant in constructive pull request reviews. I focus on error-handling edge cases, schema consistency, unit test completeness, and clear commit hygiene.
              </p>
            </div>

            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
                Cross-Functional Clarity
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Documenting API contracts, expected payload schemas, and error codes upfront prevents friction when collaborating with frontend engineers and mobile client developers.
              </p>
            </div>

            <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
              <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-serif text-lg font-normal text-[#222222] mb-2">
                Community & Knowledge Sharing
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Experience in GDG and IEEE student branches taught me the value of breaking down complex engineering concepts for peers through workshops and collaborative problem-solving.
              </p>
            </div>
          </div>
        </section>

        {/* 6. LINKS TO RELEVANT PROJECTS */}
        <section className="border-t border-[#E5E2DC] pt-12">
          <div className="max-w-2xl mb-6">
            <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-1">
              Applied Experience
            </p>
            <h2 className="font-serif text-3xl font-normal text-[#222222] tracking-tight">
              Relevant Project Case Studies
            </h2>
            <p className="text-sm text-[#686868] font-sans mt-2">
              Explore how this practical experience connects directly to system architectures built across academic and personal engineering projects:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/projects/samcs"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                TELEMETRY & HARDWARE
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between mb-2">
                <span>SAMCS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Autonomous metro platform with UART gateway integration, event-driven pipelines, and WebSockets.
              </p>
            </Link>

            <Link
              href="/projects/lostproject"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                MOBILE BACKEND
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between mb-2">
                <span>Lostproject</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Asset recovery service featuring user authentication, attribute matching, direct chat, and media handling.
              </p>
            </Link>

            <Link
              href="/projects/airzigzag"
              className="group border border-[#E5E2DC] bg-[#FAF9F6] hover:bg-[#EEF3F0] hover:border-[#2D4A3E]/40 p-5 rounded-xs transition-colors"
            >
              <span className="text-xs font-mono text-[#2D4A3E] block mb-1">
                WEB ARCHITECTURE
              </span>
              <h3 className="font-serif text-lg text-[#222222] group-hover:text-[#2D4A3E] flex items-center justify-between mb-2">
                <span>Airzigzag</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-[#686868] font-sans leading-relaxed">
                Travel content platform with structured destination indexing, search filtering, and responsive delivery.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
