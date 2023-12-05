import { cn } from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

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
