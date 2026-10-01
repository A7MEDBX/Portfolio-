import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Container } from "@/components/Container";
import { CaseStudyTemplate } from "@/components/projects/CaseStudyTemplate";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.summary,
      url: `https://ahmedragab.dev/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  // Select 2 related projects (cross-linking related IEEE initiatives)
  let relatedProjects: typeof projects = [];
  if (project.slug === "ieee-olympics-problem-solving") {
    const ieeeWeb = projects.find((p) => p.slug === "ieee-aswan-student-branch");
    const other = projects.find((p) => p.slug === "samcs");
    relatedProjects = [ieeeWeb, other].filter(Boolean) as typeof projects;
  } else if (project.slug === "ieee-aswan-student-branch") {
    const ieeeOlympics = projects.find(
      (p) => p.slug === "ieee-olympics-problem-solving"
    );
    const other = projects.find((p) => p.slug === "lostproject");
    relatedProjects = [ieeeOlympics, other].filter(Boolean) as typeof projects;
  } else {
    relatedProjects = projects
      .filter((p) => p.slug !== project.slug)
      .slice(0, 2);
  }

  return (
    <Container>
      <CaseStudyTemplate
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
        relatedProjects={relatedProjects}
      />
    </Container>
  );
}
