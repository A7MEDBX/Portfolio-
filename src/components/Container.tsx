import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component className={`max-w-4xl mx-auto px-6 md:px-8 w-full ${className}`}>
      {children}
    </Component>
  );
}
