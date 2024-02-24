import "server-only";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { AsProps } from "@/types/as";
import { IdProps } from "@/types/id";
import { cn } from "@/utils/cn";

export interface StackProps
  extends ComponentPropsWithoutRef<"div">,
    AsProps,
    IdProps {}

export const Stack: React.FC<StackProps> = ({ as, className, ...props }) => {
  const Comp = as ?? "div";

  return (
    <Comp
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
};
