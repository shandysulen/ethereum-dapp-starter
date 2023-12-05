import { PropsWithClassName } from "@/types/classname";
import { cn } from "@/utils/cn";
import { PropsWithChildren } from "react";

export interface SmallProps extends PropsWithChildren, PropsWithClassName {}

export const Small: React.FC<SmallProps> = ({ className, ...props }) => {
  return <small className={cn("text-xs", className)} {...props} />;
};
