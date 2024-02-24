import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export const Small: React.FC<ComponentPropsWithoutRef<"small">> = ({
  className,
  ...props
}) => {
  return <small className={cn("text-xs", className)} {...props} />;
};
