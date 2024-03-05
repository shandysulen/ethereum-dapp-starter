import { ComponentPropsWithoutRef } from "react";

import { Skeleton } from "./Skeleton";
import { cn } from "@/utils/cn";

export const SkeletonCircle: React.FC<ComponentPropsWithoutRef<"div">> = ({
  className,
}) => {
  return <Skeleton className={cn("h-10 w-10", className)} />;
};
