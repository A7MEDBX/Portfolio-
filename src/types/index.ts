export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  status: "Completed" | "Active" | "In Development" | "Archived";
  technologies: string[];
  summary: string;
  problemStatement: string;
  architectureOverview: string;
  keyResponsibilities: string[];
  systemHighlights: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    focus?: string;
  }[];
}

export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  bioShort: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  navLinks: { name: string; href: string; external?: boolean }[];
}
