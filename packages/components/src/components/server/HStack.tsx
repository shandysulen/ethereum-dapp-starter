import React from "react";

import { AsProps } from "@/types/as";
import { cn } from "@/utils/cn";

export interface HStackProps
  extends React.ComponentPropsWithoutRef<"div">,
    AsProps {}

export const HStack: React.FC<HStackProps> = ({
  children,
  className,
  as,
  ...props
}) => {
  const Comp = as ?? "div";

  return (
    <Comp className={cn("flex items-center gap-2", className)} {...props}>
      {children}
    </Comp>
  );
};
