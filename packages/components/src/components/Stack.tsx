import { PropsWithChildren } from "react";
import { AsProps } from "@/types/as";
import { PropsWithClassName } from "@/types/className";
import { IdProps } from "@/types/id";
import { cn } from "@/utils/cn";

export interface StackProps extends PropsWithClassName, AsProps, IdProps {}

export const Stack: React.FC<PropsWithChildren<StackProps>> = ({
  as,
  className,
  ...props
}) => {
  const Comp = as ?? "div";

  return (
    <Comp
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
};
