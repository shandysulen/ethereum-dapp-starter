"use client";

import { cva } from "class-variance-authority";
import NextLink, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import { PropsWithClassName } from "@/types/className";
import { cn } from "@/utils/cn";

export const linkVariants = cva(
  "transition-opacity hover:opacity-70 whitespace-nowrap",
);

export interface InternalLinkProps
  extends LinkProps,
    PropsWithChildren<unknown>,
    PropsWithClassName {}

export const InternalLink: React.FC<InternalLinkProps> = ({
  className,
  ...props
}) => <NextLink className={cn(linkVariants(), className)} {...props} />;
