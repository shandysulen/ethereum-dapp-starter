"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export const Center = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex justify-center items-center", className)}
      {...props}
    />
  );
});
