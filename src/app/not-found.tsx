import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Container>
      <div className="py-20 text-center max-w-lg mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-[#2D4A3E] font-medium mb-3">
          Error 404 — Page Not Found
        </p>
        <h1 className="font-serif text-4xl text-[#222222] font-normal mb-4">
          Resource Unavailable
        </h1>
        <p className="text-sm text-[#686868] font-sans leading-relaxed mb-8">
          The requested route does not exist or has been relocated within the engineering catalog.
        </p>

        <div className="flex justify-center gap-3">
          <Button href="/" variant="primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/projects" variant="secondary">
            <span>Browse Case Studies</span>
          </Button>
        </div>
      </div>
    </Container>
  );
}
