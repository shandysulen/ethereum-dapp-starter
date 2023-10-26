import { ComponentPropsWithoutRef } from "react";

import { Skeleton } from "@/components/Skeleton";
import { cn } from "@/utils/cn";

export const SkeletonCircle: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
}) => {
  return <Skeleton className={cn("w-10 h-10", className)} />;
};
