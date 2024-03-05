import React from "react";

import { cn } from "@/utils/cn";

export const Kbd: React.FC<React.ComponentPropsWithoutRef<"kbd">> = ({
  className,
  ...props
}) => {
  return (
    <kbd
      className={cn(
        "whitespace-nowrap rounded-md border border-b-[3px] bg-gray-100 p-2 font-mono text-sm font-bold",
        className,
      )}
      {...props}
    />
  );
};
