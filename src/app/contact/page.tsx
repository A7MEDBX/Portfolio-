import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactInteractive } from "./ContactInteractive";
import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, Clock, MapPin, ShieldCheck, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact channels, verified communication methods, and technical inquiry points for Ahmed Ragab.",
};

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="CONTACT"
        title="Let's start a conversation."
        subtitle="I welcome thoughtful discussions regarding backend engineering opportunities, technical collaboration, system design inquiries, and software projects."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
        {/* Main Form Column */}
        <div className="lg:col-span-7">
          <ContactInteractive />
        </div>

        {/* Sidebar: Verified Contact Methods & Engineering Protocols */}
        <aside className="lg:col-span-5 space-y-6">
          {/* Contact Methods Directory */}
          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs">
            <h2 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-4">
              Verified Contact Methods
            </h2>
            <p className="text-xs text-[#686868] mb-5 leading-relaxed">
              Direct channels for asynchronous communication, technical inquiries, and code evaluation:
            </p>

            <ul className="space-y-4 text-xs font-mono">
              {/* Email */}
              <li className="p-3 bg-white border border-[#E5E2DC] rounded-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#686868] flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#2D4A3E]" />
                    <span>Electronic Mail</span>
                  </span>
                  <span className="text-[10px] text-[#2D4A3E] bg-[#EEF3F0] px-1.5 py-0.5 rounded-xs">
                    Primary
                  </span>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm font-medium text-[#222222] hover:text-[#2D4A3E] hover:underline underline-offset-4 break-all block"
                >
                  {siteConfig.email}
                </a>
              </li>

              {/* LinkedIn */}
              <li className="p-3 bg-white border border-[#E5E2DC] rounded-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#686868] flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#2D4A3E] fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.97 0 1.75-.79 1.75-1.76s-.78-1.75-1.75-1.75c-.97 0-1.76.78-1.76 1.75s.79 1.76 1.76 1.76m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                    <span>Professional Network</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#686868]" />
                </div>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#222222] hover:text-[#2D4A3E] hover:underline underline-offset-4 flex items-center justify-between"
                >
                  <span>LinkedIn Profile</span>
                  <span className="text-[11px] text-[#686868] font-sans">Connect →</span>
                </a>
              </li>

              {/* GitHub */}
              <li className="p-3 bg-white border border-[#E5E2DC] rounded-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#686868] flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#2D4A3E] fill-current" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                    </svg>
                    <span>Code Hosting</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#686868]" />
                </div>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#222222] hover:text-[#2D4A3E] hover:underline underline-offset-4 flex items-center justify-between"
                >
                  <span>GitHub Repositories</span>
                  <span className="text-[11px] text-[#686868] font-sans">Inspect Code →</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Availability & Communication Protocols */}
          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-7 rounded-xs space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium">
              Communication Guidelines
            </h3>

            <div className="space-y-3.5 text-xs text-[#686868]">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#222222] font-medium">Timezone & Cadence:</strong>{" "}
                  Operating from Cairo (UTC+2 / EET). Inquiries typically receive a thoughtful response within 24–48 business hours.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#222222] font-medium">Engagement Scope:</strong>{" "}
                  Available for full-time backend roles, distributed system architecture consultations, and contract engineering projects.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#222222] font-medium">Confidentiality:</strong>{" "}
                  Compliant with NDAs and intellectual property protections for past proprietary work and ongoing institutional engagements.
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
