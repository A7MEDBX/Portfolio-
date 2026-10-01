"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import {
  Copy,
  Check,
  Mail,
  Send,
  ExternalLink,
  AlertCircle,
  Info,
  RotateCcw,
  Loader2,
} from "lucide-react";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactInteractive() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "unconfigured" | "error"
  >("idle");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Validate form fields
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please provide your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@domain.com).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a subject or topic.";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message or project description.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getFormattedBody = () => {
    return `Sender: ${formData.name} <${formData.email}>\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
  };

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(getFormattedBody());
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    formData.subject || "Engineering Inquiry"
  )}&body=${encodeURIComponent(
    `From: ${formData.name} (${formData.email})\n\n${formData.message}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmissionStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("idle");

    // Simulate validation verification state
    setTimeout(() => {
      setIsSubmitting(false);
      // As specified: Do not create a fake working form. If no backend or form provider is configured,
      // clearly indicate that form submission requires configuration, and provide direct email contact as an alternative.
      setSubmissionStatus("unconfigured");
    }, 450);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmissionStatus("idle");
  };

  return (
    <div className="space-y-8">
      {/* Contact Form Container */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E5E2DC]">
          <div>
            <h2 className="font-serif text-xl text-[#222222]">
              Inquiry Form
            </h2>
            <p className="text-xs text-[#686868] mt-1 font-sans">
              Structured correspondence for technical proposals and engineering inquiries.
            </p>
          </div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] bg-[#F4F1EA] px-2.5 py-1 rounded-xs border border-[#E5E2DC]">
            Direct Channel
          </span>
        </div>

        {/* Clear Notice about Backend Configuration Policy */}
        <div className="mb-6 p-3.5 bg-[#F7F5F0] border border-[#E5E2DC] rounded-xs flex items-start gap-2.5 text-xs text-[#686868] leading-relaxed">
          <Info className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#222222] font-medium">Hosting notice: </strong>
            This portfolio operates as a static site without an active backend form handler or third-party tracking scripts. Submissions require server-side configuration; you can validate your draft here and dispatch it directly via email.
          </div>
        </div>

        {/* Unconfigured Alert / Next Step Guidance */}
        {submissionStatus === "unconfigured" && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 p-4 bg-[#F2F5F3] border border-[#2D4A3E]/30 rounded-xs space-y-3"
          >
            <div className="flex items-start gap-2.5">
              <Check className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium text-[#222222]">
                  Draft Validated — Ready for Dispatch
                </h3>
                <p className="text-xs text-[#686868] mt-1 leading-relaxed">
                  Direct HTTP submission is unconfigured on this deployment. To guarantee your message reaches my inbox without silent drops, please send this prepared inquiry via your email client or copy the formatted text.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-1.5 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-3.5 py-2 text-xs font-medium rounded-xs transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyDraft}
                className="inline-flex items-center gap-1.5 bg-white border border-[#E5E2DC] text-[#222222] hover:bg-[#FAF9F6] px-3.5 py-2 text-xs font-medium rounded-xs transition-colors cursor-pointer"
              >
                {copiedDraft ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied Formatted Draft</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#686868]" />
                    <span>Copy Formatted Text</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 text-xs text-[#686868] hover:text-[#222222] px-2.5 py-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        )}

        {/* Global Validation Error Notice */}
        {submissionStatus === "error" && (
          <div
            role="alert"
            className="mb-6 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 rounded-xs flex items-start gap-2.5 text-xs"
          >
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-medium">Please review the form: </strong>
              One or more fields require correction before the inquiry can be processed.
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
              >
                Your Name <span className="text-[#2D4A3E]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="e.g. Sarah Jenkins"
                className={`w-full border px-3.5 py-2 text-sm text-[#222222] bg-white rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#2D4A3E] ${
                  errors.name
                    ? "border-rose-400 bg-rose-50/20"
                    : "border-[#E5E2DC] hover:border-[#CDC8BE]"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-xs text-rose-600 font-mono">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
              >
                Your Email Address <span className="text-[#2D4A3E]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="e.g. s.jenkins@organization.com"
                className={`w-full border px-3.5 py-2 text-sm text-[#222222] bg-white rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#2D4A3E] ${
                  errors.email
                    ? "border-rose-400 bg-rose-50/20"
                    : "border-[#E5E2DC] hover:border-[#CDC8BE]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-rose-600 font-mono">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
            >
              Subject / Topic <span className="text-[#2D4A3E]">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.subject ? "true" : "false"}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              placeholder="e.g. Backend Architecture Consultation or Role Opportunity"
              className={`w-full border px-3.5 py-2 text-sm text-[#222222] bg-white rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#2D4A3E] ${
                errors.subject
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-[#E5E2DC] hover:border-[#CDC8BE]"
              }`}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1 text-xs text-rose-600 font-mono">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono text-[#686868] uppercase tracking-wider mb-1.5"
            >
              Message Content <span className="text-[#2D4A3E]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              aria-required="true"
              aria-invalid={errors.message ? "true" : "false"}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Provide a concise description of your system architecture, project scope, technical problem, or role requirements..."
              className={`w-full border px-3.5 py-2.5 text-sm text-[#222222] bg-white rounded-xs transition-colors focus:outline-hidden focus:ring-1 focus:ring-[#2D4A3E] resize-y ${
                errors.message
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-[#E5E2DC] hover:border-[#CDC8BE]"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-rose-600 font-mono">
                {errors.message}
              </p>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-[#2D4A3E] text-white hover:bg-[#1F342B] disabled:opacity-70 px-5 py-2.5 text-sm font-medium rounded-xs transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4A3E]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white/80" />
                  <span>Validating Submission...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            <span className="text-xs font-mono text-[#686868]">
              Fields marked <span className="text-[#2D4A3E]">*</span> are required
            </span>
          </div>
        </form>
      </div>

      {/* Direct Fallback Option */}
      <div className="border border-[#E5E2DC] bg-[#FAF9F6] p-6 rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#2D4A3E] uppercase tracking-wider block font-medium">
            Alternative Route
          </span>
          <p className="text-sm text-[#222222] font-medium mt-0.5">
            Prefer using your dedicated email client directly?
          </p>
          <p className="text-xs text-[#686868] mt-1">
            Write directly to <span className="font-mono text-[#222222]">{siteConfig.email}</span> without interacting with the form.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 border border-[#E5E2DC] bg-white hover:bg-[#F4F1EA] text-[#222222] px-3.5 py-2 text-xs font-medium rounded-xs transition-colors cursor-pointer"
          >
            {copiedEmail ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#686868]" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-1.5 bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-3.5 py-2 text-xs font-medium rounded-xs transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Compose Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
