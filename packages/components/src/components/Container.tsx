"use client";

import { PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export interface ContainerProps {
  readonly size: "sm" | "md" | "lg" | "xl";
  readonly className?: string;
}

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  size,
  className,
  children,
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        {
          "max-w-md": size === "sm",
          "max-w-xl": size === "md",
          "max-w-3xl": size === "lg",
          "max-w-7xl": size === "xl",
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
