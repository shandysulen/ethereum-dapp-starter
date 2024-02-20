import { PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/className";
import { cn } from "@/utils/cn";

export interface SmallProps extends PropsWithChildren, PropsWithClassName {}

export const Small: React.FC<SmallProps> = ({ className, ...props }) => {
  return <small className={cn("text-xs", className)} {...props} />;
};
