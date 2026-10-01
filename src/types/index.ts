export interface ProjectDecision {
  decision: string;
  rationale: string;
  alternativeConsidered: string;
}

export interface ProjectChallenge {
  challenge: string;
  resolution: string;
  tradeOff: string;
}

export interface ProjectImplementationSection {
  title: string;
  description: string;
  points: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  status: "Completed" | "Active" | "In Development" | "Archived" | "Launched";
  technologies: string[];
  summary: string;
  problemStatement: string;
  objectives: string[];
  systemOverview: string;
  contribution: string;
  keyResponsibilities: string[];
  implementationDetails: ProjectImplementationSection[];
  engineeringDecisions: ProjectDecision[];
  challengesAndTradeoffs: ProjectChallenge[];
  testingAndValidation: string[];
  resultsAndLessons: {
    completedWork: string[];
    plannedWork?: string[];
    lessonsLearned: string[];
  };
  architectureOverview: string;
  systemHighlights: string[];
  featured?: boolean;
  repositoryUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  announcementUrl?: string;
  securityConsiderations?: {
    implemented: string[];
    recommendations: string[];
  };
  teamLeadership?: {
    roleTitle: string;
    responsibilities: string[];
    leadershipNarrative: string;
  };
}

export type ExperienceType =
  | "Internship"
  | "Training"
  | "Technical Team"
  | "Volunteering"
  | "Employment";

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: ExperienceType;
  isCurrent: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  projectLink?: {
    label: string;
    href: string;
  };
}

export interface SkillItem {
  name: string;
  focus?: string;
  projectLink?: {
    title: string;
    href: string;
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  provenSkills: SkillItem[];
  currentlyLearning?: string[];
  relevantProjects: {
    title: string;
    href: string;
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
