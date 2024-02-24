import "server-only";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";

export const Skeleton: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
};
