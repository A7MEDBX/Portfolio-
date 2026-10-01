"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { ProjectCard } from "@/components/ProjectCard";

interface ProjectListProps {
  initialProjects: Project[];
}

export function ProjectList({ initialProjects }: ProjectListProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Distributed Systems & Telemetry",
    "Backend Platform & Search",
    "Logistics & API Engineering",
    "Enterprise System & Resource Scheduling",
    "AI & Information Retrieval",
    "Healthcare & Mission-Critical Backend",
  ];

  const filtered =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="mb-10 pb-4 border-b border-[#E5E2DC] flex items-center gap-2 overflow-x-auto text-xs font-mono">
        <span className="text-[#686868] mr-2 shrink-0">Filter:</span>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 rounded-xs transition-colors shrink-0 ${
                isSelected
                  ? "bg-[#2D4A3E] text-white"
                  : "bg-[#FAF9F6] text-[#686868] hover:text-[#222222] border border-[#E5E2DC]"
              }`}
            >
              {category === "All" ? "All Projects" : category.split("&")[0].trim()}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div>
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
