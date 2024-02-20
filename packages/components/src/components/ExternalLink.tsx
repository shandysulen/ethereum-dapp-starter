"use client";

import { forwardRef } from "react";
import { cn } from "@/utils/cn";
import { buttonVariants } from "./Button";

export interface ExternalLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  readonly variant?: "button";
  readonly icon?: JSX.Element;
}

export const ExternalLink: React.FC<ExternalLinkProps> = forwardRef<
  React.ElementRef<"a">
>(
  (
    { className, variant, icon, children, ...props }: ExternalLinkProps,
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={cn(
          "text-foreground transition-opacity hover:opacity-70",
          variant === "button" ? buttonVariants() : undefined,
          className,
        )}
        target='_blank'
        rel='noopener'
        {...props}
      >
        {icon && <span className='mr-2'>{icon}</span>}
        {children}
      </a>
    );
  },
);
