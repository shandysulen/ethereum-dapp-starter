"use client";

import React from "react";
import { AsProps } from "@/types/as";
import { cn } from "@/utils/cn";

export interface HStackProps
  extends React.ComponentPropsWithoutRef<"div">,
    AsProps {}

export const HStack: React.FC<HStackProps> = ({
  children,
  className,
  as,
  ...props
}) => {
  const Comp = as ?? "div";

  return (
    <Comp className={cn("flex gap-2 items-center", className)} {...props}>
      {children}
    </Comp>
  );
};
