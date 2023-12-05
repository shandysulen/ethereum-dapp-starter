import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/utils/cn";
import { Skeleton } from "./Skeleton";

export const SkeletonCircle: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
}) => {
  return <Skeleton className={cn("w-10 h-10", className)} />;
};
