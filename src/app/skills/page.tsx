import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { skillCategories } from "@/data/skills";
import {
  ArrowRight,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Radio,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical competencies, backend languages, databases, real-time messaging, and application development skills of BEDO (Ahmed Ragab).",
};

export default function SkillsPage() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return Layers;
      case 1:
        return Database;
      case 2:
        return Terminal;
      case 3:
        return Radio;
      case 4:
        return Cpu;
      case 5:
        return Sparkles;
      default:
        return Layers;
    }
  };

  return (
    <Container>
      {/* 1. PAGE HEADER */}
      <PageHeader
        eyebrow="CAPABILITIES & TOOLING"
        title="Technical Skills & Competencies"
        subtitle="A grounded catalog of backend languages, relational databases, real-time messaging systems, and developer tooling. Technologies are directly linked to real project implementations, clearly separated from areas currently being learned."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Skills" }]}
      />

      <div className="space-y-16">
        {/* Editorial Introduction */}
        <section className="max-w-3xl">
          <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed">
            Rather than displaying arbitrary percentage bars or subjective "expert" ratings, this page catalogs the concrete technologies and frameworks I have implemented across actual systems. Each capability is paired with its real-world application context and linked to its corresponding case study.
          </p>
        </section>

        {/* 6 TECHNICAL CATEGORIES */}
        <div className="space-y-16">
          {skillCategories.map((category, idx) => {
            const Icon = getCategoryIcon(idx);

            return (
              <section
                key={category.title}
                className="border-t border-[#E5E2DC] pt-12 first:border-t-0 first:pt-0"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xs bg-[#EEF3F0] text-[#2D4A3E] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#222222]">
                      {category.title}
                    </h2>
                  </div>
                  <span className="text-xs font-mono text-[#2D4A3E] font-medium tracking-wide">
                    CATEGORY 0{idx + 1}
                  </span>
                </div>

                {/* Practical Explanation */}
                <p className="text-sm sm:text-base text-[#686868] font-sans leading-relaxed mb-6 max-w-3xl">
                  {category.description}
                </p>

                {/* Proven Technologies in Projects */}
                <div className="mb-6">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#2D4A3E] font-medium mb-3">
                    Applied in Projects
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.provenSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="border border-[#E5E2DC] bg-[#FAF9F6] p-4 sm:p-5 rounded-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-baseline justify-between gap-2 mb-1.5">
                            <span className="font-mono text-sm font-semibold text-[#222222]">
                              {skill.name}
                            </span>
                            {skill.projectLink && (
                              <Link
                                href={skill.projectLink.href}
                                className="text-[11px] font-mono text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1 shrink-0"
                              >
                                <span>Used in {skill.projectLink.title}</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                          {skill.focus && (
                            <p className="text-xs text-[#686868] font-sans leading-relaxed">
                              {skill.focus}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Currently Being Learned (Separated!) */}
                {category.currentlyLearning && category.currentlyLearning.length > 0 && (
                  <div className="mb-6 bg-[#F7F5F0] border border-[#E5E2DC] p-4 sm:p-5 rounded-xs">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] font-medium mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#2D4A3E]" />
                      <span>Currently Deepening &amp; Exploring</span>
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#686868] font-sans">
                      {category.currentlyLearning.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#686868] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Relevant Projects Bar */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#E5E2DC] text-xs font-mono">
                  <span className="text-[#686868] mr-1">Case Studies:</span>
                  {category.relevantProjects.map((proj) => (
                    <Link
                      key={proj.href}
                      href={proj.href}
                      className="bg-[#EEF3F0] hover:bg-[#DDE7E1] text-[#2D4A3E] px-2.5 py-1 border border-[#D5E0D9] rounded-xs transition-colors inline-flex items-center gap-1"
                    >
                      <span>{proj.title}</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Practical Application Link to Projects */}
        <section className="border-t border-[#E5E2DC] pt-12 mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl font-normal text-[#222222]">
              Explore Complete Engineering Case Studies
            </h3>
            <p className="text-xs text-[#686868] mt-1">
              Read comprehensive architectural breakdowns detailing how these systems operate in practice.
            </p>
          </div>
          <Button href="/projects" variant="primary">
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </section>
      </div>
    </Container>
  );
}
