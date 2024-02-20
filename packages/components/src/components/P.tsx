import React, { PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/className";
import { cn } from "@/utils/cn";

export interface PProps extends PropsWithChildren, PropsWithClassName {}

export const P: React.FC<PProps> = ({ children, className }) => {
  return <p className={cn("leading-7", className)}>{children}</p>;
};
