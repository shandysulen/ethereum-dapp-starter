import React from "react";
import { cn } from "@/utils/cn";

export const Kbd: React.FC<React.ComponentPropsWithoutRef<"kbd">> = ({
  className,
  ...props
}) => {
  return (
    <kbd
      className={cn(
        "bg-gray-100 rounded-md font-mono border border-b-[3px] text-sm font-bold p-2 whitespace-nowrap",
        className,
      )}
      {...props}
    />
  );
};
