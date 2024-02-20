"use client";

import * as React from "react";
import { cn } from "@/utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly leftElement?: JSX.Element;
  readonly rightElement?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftElement, rightElement, ...props }, ref) => {
    return (
      <div className='relative'>
        {leftElement && (
          <div className='pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2'>
            {leftElement}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(
            "text-md relative flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-10": !!leftElement },
            { "pr-10": !!rightElement },
            className,
          )}
          {...props}
        />
        {rightElement && (
          <div className='pointer-events-none absolute right-4 top-1/2 z-10 -translate-y-1/2'>
            {rightElement}
          </div>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
