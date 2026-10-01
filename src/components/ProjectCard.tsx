import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Badge } from "./Badge";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-b border-[#E5E2DC] pb-8 mb-8 last:border-b-0 last:pb-0 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
        <span className="text-xs font-mono text-[#686868] uppercase tracking-wider">
          {project.category}
        </span>
        <span className="text-xs font-mono text-[#686868]">
          {project.timeline}
        </span>
      </div>

      <h2 className="text-2xl font-serif font-normal text-[#222222] tracking-tight group-hover:text-[#2D4A3E] transition-colors">
        <Link href={`/projects/${project.slug}`} className="hover:underline underline-offset-4">
          {project.title}
        </Link>
      </h2>

      <p className="text-sm text-[#686868] font-sans mt-2.5 mb-4 leading-relaxed max-w-3xl">
        {project.summary}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge variant="muted">+{project.technologies.length - 5} more</Badge>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#2D4A3E] hover:text-[#1F342B] group-hover:translate-x-0.5 transition-all"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
