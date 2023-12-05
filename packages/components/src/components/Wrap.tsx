import React from "react";
import { cn } from "@/utils/cn";

export const Test: React.FC<React.ComponentPropsWithoutRef<"ul">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)} {...props}>
      {children}
    </ul>
  );
};
