"use client";

import { cva } from "class-variance-authority";
import NextLink, { LinkProps } from "next/link";
import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "@/utils/cn";

export const linkVariants = cva(
  "transition-opacity hover:opacity-70 whitespace-nowrap",
);

export interface InternalLinkProps
  extends LinkProps,
    PropsWithChildren,
    Omit<ComponentPropsWithoutRef<"a">, "href"> {}

export const InternalLink: React.FC<InternalLinkProps> = ({
  className,
  ...props
}) => <NextLink className={cn(linkVariants(), className)} {...props} />;
