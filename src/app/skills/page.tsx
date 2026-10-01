import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { skillCategories } from "@/data/skills";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical competencies, programming languages, database architectures, and distributed systems tooling of Ahmed Ragab.",
};

export default function SkillsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Capabilities & Tooling"
        title="Technical Skills"
        subtitle="A categorized inventory of backend languages, persistence engines, distributed architectures, and software engineering disciplines."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Skills" }]}
      />

      <div className="space-y-12">
        {skillCategories.map((category, index) => (
          <section
            key={category.title}
            className={`pt-8 ${
              index === 0 ? "pt-0" : "border-t border-[#E5E2DC]"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div className="md:w-1/3">
                <h2 className="font-serif text-2xl font-normal text-[#222222]">
                  {category.title}
                </h2>
                <p className="text-xs text-[#686868] mt-2 font-sans leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="md:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="border border-[#E5E2DC] bg-[#FAF9F6] p-4 rounded-xs"
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
                        <h3 className="font-mono text-sm font-semibold text-[#222222]">
                          {skill.name}
                        </h3>
                      </div>
                      {skill.focus && (
                        <p className="text-xs text-[#686868] font-sans leading-relaxed">
                          {skill.focus}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Practical Application Link */}
      <section className="border-t border-[#E5E2DC] pt-12 mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-normal text-[#222222]">
            See Skills Applied in Real Systems
          </h3>
          <p className="text-xs text-[#686868] mt-1">
            Review detailed case studies demonstrating how these technologies are applied in production contexts.
          </p>
        </div>
        <Button href="/projects" variant="primary">
          <span>View Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </Container>
  );
}
