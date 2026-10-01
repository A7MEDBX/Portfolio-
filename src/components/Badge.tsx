import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "status" | "muted";
}

export function Badge({
  children,
  className = "",
  variant = "default",
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#EEF3F0] text-[#2D4A3E] border border-[#D5E0D9] text-xs font-mono px-2 py-0.5 rounded-xs tracking-tight",
    status:
      "bg-[#FAF9F6] text-[#2D4A3E] border border-[#2D4A3E]/30 text-xs font-mono px-2.5 py-0.5 rounded-xs font-medium tracking-tight",
    muted:
      "bg-[#F2EFE9] text-[#686868] border border-[#E5E2DC] text-xs font-mono px-2 py-0.5 rounded-xs tracking-tight",
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-normal ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
