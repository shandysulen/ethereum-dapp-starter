import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

export const Skeleton: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn("bg-muted animate-pulse rounded-md", className)}
      {...props}
    />
  );
};
