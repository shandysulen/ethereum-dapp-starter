"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";
import makeBlockie from "ethereum-blockies-base64";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/utils/cn";

import { SkeletonCircle } from "./SkeletonCircle";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        sm: "w-6 h-6",
        md: "w-10 h-10",
        lg: "w-14 h-14",
        xl: "w-20 h-20",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  },
);
export type AvatarVariants = VariantProps<typeof avatarVariants>;

const AvatarRoot = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> & AvatarVariants
>(({ className, size, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, className }), className)}
    {...props}
  />
));
AvatarRoot.displayName = AvatarPrimitive.Root.displayName;

// NOTE: Using next/image instead
// const AvatarImage = React.forwardRef<
//   React.ElementRef<typeof AvatarPrimitive.Image>,
//   React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
// >(({ src, className, ...props }, ref) => (
//   <Image
//     ref={ref}
//     src={src}
//     width={80}
//     height={80}
//     className={cn("aspect-square h-full w-full", className)}
//     {...props}
//   />
// ));
// AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("h-full w-full", className)}
    {...props}
  >
    <SkeletonCircle className='h-full w-full' />
  </AvatarPrimitive.Fallback>
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarRoot>,
  React.ComponentPropsWithoutRef<typeof AvatarRoot> & {
    address: string;
    name?: string | null;
    src?: string | null;
    size?: AvatarVariants["size"];
  }
>(({ name, address, src, ...props }, ref) => {
  const [finalSrc, setFinalSrc] = React.useState(() =>
    src === null ? makeBlockie(address) : src,
  );

  return (
    <AvatarRoot ref={ref} {...props}>
      <Image
        src={finalSrc || ""}
        alt={name || ""}
        width={80}
        height={80}
        onLoad={(event) => {
          event.currentTarget.classList.remove("w-0");
        }}
        onError={() => setFinalSrc(makeBlockie(address))}
        className='w-0'
      />
      <AvatarFallback />
    </AvatarRoot>
  );
});
