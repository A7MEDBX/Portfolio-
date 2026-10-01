import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  className = "",
  children,
}: PageHeaderProps) {
  return (
    <header className={`border-b border-[#E5E2DC] pb-8 mb-10 ${className}`}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      )}

      {eyebrow && (
        <p className="text-xs uppercase tracking-widest font-mono text-[#2D4A3E] font-medium mb-2">
          {eyebrow}
        </p>
      )}

      <h1 className="text-3xl sm:text-4xl font-serif font-normal text-[#222222] tracking-tight leading-tight">
        {title}
      </h1>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#686868] font-sans mt-3 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}
