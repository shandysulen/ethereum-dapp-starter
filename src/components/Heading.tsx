import { VariantProps, cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { PropsWithClassName } from "@/types/classname";
import { cn } from "@/utils/cn";

const headingVariants = cva("scroll-m-20 tracking-tight [text-wrap:balance]", {
  variants: {
    variant: {
      h1: "text-5xl lg:text-6xl font-extrabold",
      h2: "text-3xl font-semibold",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

export interface HeadingProps
  extends PropsWithChildren,
    ComponentPropsWithoutRef<"h1">,
    PropsWithClassName {
  as?: VariantProps<typeof headingVariants>["variant"];
}

export const Heading: React.FC<HeadingProps> = ({
  as,
  className,
  ...props
}) => {
  const Comp = as ?? "h1";

  return (
    <Comp
      className={cn(headingVariants({ variant: as }), className)}
      {...props}
    />
  );
};
