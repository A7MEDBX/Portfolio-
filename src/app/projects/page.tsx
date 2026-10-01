import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/data/projects";
import { ProjectList } from "./ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Engineering case studies, backend architectures, and production systems built by Ahmed Ragab.",
};

export default function ProjectsPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Portfolio & Systems Catalog"
        title="Projects & Case Studies"
        subtitle="Detailed architectural breakdowns of backend services, telemetry systems, search engines, and enterprise platforms."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
      />

      <ProjectList initialProjects={projects} />
    </Container>
  );
}
