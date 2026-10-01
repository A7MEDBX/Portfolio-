import { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { ContactInteractive } from "./ContactInteractive";
import { siteConfig } from "@/data/siteConfig";
import { ExternalLink, Clock, MapPin, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct contact channels, communication guidelines, and engineering inquiry points for Ahmed Ragab.",
};

export default function ContactPage() {
  return (
    <Container>
      <PageHeader
        eyebrow="Communication & Inquiries"
        title="Get in Touch"
        subtitle="Direct electronic mail is preferred for technical consultations, backend architecture inquiries, and employment opportunities."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main Interactive Contact Section */}
        <div className="md:col-span-2">
          <ContactInteractive />
        </div>

        {/* Sidebar Communication Protocols */}
        <aside className="space-y-6">
          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-4">
              Channel Directory
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-[#686868] block">Electronic Mail</span>
                <span className="text-[#222222] font-medium block mt-0.5">
                  {siteConfig.email}
                </span>
              </div>

              <div className="border-t border-[#E5E2DC] pt-3">
                <span className="text-[#686868] block mb-1">Code Hosting</span>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1.5"
                >
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="border-t border-[#E5E2DC] pt-3">
                <span className="text-[#686868] block mb-1">Professional Network</span>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2D4A3E] hover:underline underline-offset-4 flex items-center gap-1.5"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs space-y-4">
            <h3 className="text-xs uppercase tracking-widest font-mono text-[#686868] font-medium">
              Timezone & Response Policy
            </h3>

            <div className="flex items-start gap-2.5 text-xs text-[#686868]">
              <Clock className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
              <span>
                Based in <strong className="text-[#222222]">Cairo (UTC+2)</strong>. Typical response turnaround is within 24 to 48 business hours.
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#686868]">
              <MapPin className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
              <span>
                Available for remote backend contracts, architectural reviews, and full-time technical positions.
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#686868]">
              <Shield className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
              <span>
                Respectful of NDA and intellectual property guidelines for past proprietary codebases.
              </span>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
