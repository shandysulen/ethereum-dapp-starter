import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export const P: React.FC<ComponentPropsWithoutRef<"p">> = ({
  children,
  className,
}) => {
  return <p className={cn("leading-7", className)}>{children}</p>;
};
