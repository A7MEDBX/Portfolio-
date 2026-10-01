import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { experience } from "@/data/experience";
import { ArrowRight, Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Engineering career timeline, professional positions, and backend leadership history of Ahmed Ragab.",
};

export default function ExperiencePage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Career Timeline"
        title="Work Experience"
        subtitle="Chronological track record of engineering roles, backend systems development, and architectural delivery."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
      />

      {/* Editorial Timeline */}
      <div className="relative border-l border-[#E5E2DC] ml-2 sm:ml-4 pl-6 sm:pl-8 space-y-12 mb-16">
        {experience.map((item) => (
          <div key={item.id} className="relative">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 ${
                item.isCurrent
                  ? "bg-[#2D4A3E] border-[#FAF9F6] ring-2 ring-[#2D4A3E]/30"
                  : "bg-[#FAF9F6] border-[#686868]"
              }`}
              aria-hidden="true"
            />

            {/* Role Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h2 className="text-xl sm:text-2xl font-serif font-normal text-[#222222]">
                {item.role}
              </h2>
              <div className="flex items-center gap-1.5 text-xs font-mono text-[#2D4A3E] font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Company & Location */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#686868] mb-4">
              <div className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="text-[#222222] font-medium">{item.company}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </div>
              {item.isCurrent && (
                <span className="bg-[#EEF3F0] text-[#2D4A3E] px-2 py-0.5 border border-[#D5E0D9] rounded-xs font-mono text-[11px]">
                  Current Position
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-[#686868] leading-relaxed mb-4 max-w-3xl">
              {item.description}
            </p>

            {/* Key Responsibilities */}
            <div className="mb-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#686868] mb-2 font-medium">
                Core Contributions
              </h3>
              <ul className="space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] mt-0.5 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {item.technologies.map((tech) => (
                <Badge key={tech} variant="muted">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation Callout */}
      <section className="border-t border-[#E5E2DC] pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-normal text-[#222222]">
            Detailed Case Studies
          </h3>
          <p className="text-xs text-[#686868] mt-1">
            Examine in-depth technical breakdowns and system architectures of project deliverables.
          </p>
        </div>
        <Button href="/projects" variant="primary">
          <span>Explore Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </section>
    </Container>
  );
}
