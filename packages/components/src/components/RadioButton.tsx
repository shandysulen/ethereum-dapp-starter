"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

import { cn } from "@/utils/cn";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("flex", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioButton = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, value, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "relative h-8 cursor-default rounded-full px-3 py-1 text-sm font-bold text-primary ring-offset-background transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-slate-200 data-unchecked:hover:opacity-70",
        className,
      )}
      value={value}
      {...props}
    >
      {children}
      {/* <RadioGroupPrimitive.Indicator className='absolute w-full h-full bg-slate-200 left-0 top-0 -z-10 rounded-lg' /> */}
    </RadioGroupPrimitive.Item>
  );
});
RadioButton.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioButton, RadioGroup };
