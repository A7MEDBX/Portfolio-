import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "gestel-internship",
    role: "Software Engineering Intern",
    company: "Gestel",
    location: "Cairo, Egypt",
    period: "[Dates to be verified]",
    type: "Internship",
    isCurrent: false,
    description:
      "Contributed to software development workflows, backend service maintenance, and API feature delivery within Gestel's engineering environment.",
    responsibilities: [
      "Assisted in developing and maintaining backend endpoints following structured REST principles.",
      "Conducted database query analysis and schema normalization checks for operational services.",
      "Participated in internal code reviews, regression testing, and technical documentation drafting.",
    ],
    technologies: ["Backend Development", "REST APIs", "Relational Databases", "Git", "Testing"],
  },
  {
    id: "depi-training",
    role: "Backend Track Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Egypt",
    period: "[Cohort Duration to be verified]",
    type: "Training",
    isCurrent: false,
    description:
      "Selected for an intensive professional software development initiative focused on modern backend architectures, software craftsmanship, and enterprise application engineering.",
    responsibilities: [
      "Completed rigorous technical curriculum covering data modeling, API design patterns, and system design fundamentals.",
      "Engineered capstone backend applications with strict input validation, database migrations, and unit test suites.",
      "Applied industry-standard team collaboration practices, including Git branching models and pull-request code reviews.",
    ],
    technologies: ["System Design", "Database Architecture", "RESTful APIs", "Software Craftsmanship", "Git"],
  },
  {
    id: "gdg-web-team",
    role: "Web Development Team Member",
    company: "Google Developer Groups (GDG)",
    location: "Egypt",
    period: "[Term / Year to be verified]",
    type: "Technical Team",
    isCurrent: false,
    description:
      "Active participant in the GDG community technical team, building web solutions, supporting technical workshops, and collaborating on open developer initiatives.",
    responsibilities: [
      "Collaborated with team developers on implementing responsive web components and backend integrations.",
      "Contributed to code reviews, technical discussions, and sprint planning for community platforms.",
      "Assisted in facilitating developer study jams and hands-on technical sessions for student attendees.",
    ],
    technologies: ["Web Technologies", "API Integration", "Version Control", "Peer Code Reviews"],
  },
  {
    id: "ieee-volunteering",
    role: "Technical Volunteer",
    company: "IEEE Student Branch",
    location: "Egypt",
    period: "[Volunteering Period to be verified]",
    type: "Volunteering",
    isCurrent: false,
    description:
      "Volunteered within the IEEE student branch community, contributing to engineering events, technical workshops, and peer mentorship initiatives.",
    responsibilities: [
      "Assisted in coordinating technical sessions, guest lectures, and student engineering hackathons.",
      "Collaborated with multi-disciplinary volunteer teams to deliver student branch technical tracks.",
      "Helped foster peer learning and foundational programming knowledge sharing among engineering peers.",
    ],
    technologies: ["Technical Communication", "Community Organizing", "Workshop Coordination", "Teamwork"],
  },
];
