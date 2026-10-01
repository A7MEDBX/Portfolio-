import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  variant = "primary",
  external = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-150 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2D4A3E] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#2D4A3E] text-white hover:bg-[#1F342B] px-4 py-2 border border-[#2D4A3E]",
    secondary:
      "bg-[#FAF9F6] text-[#222222] border border-[#E5E2DC] hover:border-[#2D4A3E]/40 hover:bg-[#EEF3F0] px-4 py-2",
    ghost:
      "text-[#2D4A3E] hover:text-[#1F342B] hover:bg-[#EEF3F0] px-3 py-1.5",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
