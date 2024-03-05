import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "@/utils/cn";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  readonly size: "sm" | "md" | "lg" | "xl";
}

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  size,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        {
          "max-w-md": size === "sm",
          "max-w-xl": size === "md",
          "max-w-3xl": size === "lg",
          "max-w-7xl": size === "xl",
        },
        className,
      )}
      {...props}
    ></div>
  );
};
