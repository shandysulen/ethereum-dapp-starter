"use client";

// "@radix-ui/react-navigation-menu" uses useEffect so make sure to keep "use client"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import NextLink from "next/link";
import * as React from "react";
import { cn } from "@/utils/cn";

export interface NavigationMenuProps
  extends React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root> {
  readonly position?: "left" | "right";
}

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuProps
>(({ position = "left", className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn(
      "z-menu relative flex max-w-max flex-1 items-center justify-center",
      className,
    )}
    delayDuration={100}
    skipDelayDuration={0}
    {...props}
  >
    {children}
    <NavigationMenuViewport
      className={cn({
        "left-0": position === "left",
        "right-0": position === "right",
      })}
    />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

export interface NavigationMenuTriggerProps
  extends React.ComponentPropsWithoutRef<
    typeof NavigationMenuPrimitive.Trigger
  > {
  readonly showChevron?: boolean;
}

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerProps
>(({ className, children, showChevron = false, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    // onClick={(e) => {
    //   e.preventDefault();
    // }}
    {...props}
  >
    {children}{" "}
    {showChevron && (
      <ChevronDown
        className='relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180'
        aria-hidden='true'
      />
    )}
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 flex w-full flex-col bg-background md:absolute md:w-auto",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

export const NavigationMenuContentGroupLabel = React.forwardRef<
  React.ElementRef<"span">,
  React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-slate-500", className)} {...props} />
));

export interface NavigationMenuContentItemProps
  extends React.ComponentPropsWithoutRef<typeof NextLink> {
  readonly icon: JSX.Element;
}

/** Renders a `<Link>` from `next/link` inside of a nav item's `NavigationMenuContent`. Always includes an icon. */
export const NavigationMenuContentLinkItem = React.forwardRef<
  React.ElementRef<typeof NextLink>,
  NavigationMenuContentItemProps
>(({ icon, href, className, children, ...props }, ref) => (
  <NextLink
    ref={ref}
    className={cn(
      "text-primary flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 hover:bg-slate-100",
      className,
    )}
    href={href}
    {...props}
  >
    {icon}
    {children}
  </NextLink>
));

/** Renders a `<button>` */
export const NavigationMenuContentButtonItem = React.forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button"> & { icon: JSX.Element }
>(({ icon, className, children, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "text-primary flex items-center gap-2 whitespace-nowrap rounded-md p-2 px-4 hover:bg-slate-100",
      className,
    )}
    {...props}
  >
    {icon}
    {children}
  </button>
));

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>(({ className, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Link ref={ref} className={className} {...props} />
  );
});
NavigationMenuLink.displayName = NavigationMenuPrimitive.Link.displayName;

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute top-full flex justify-center", className)}>
    <NavigationMenuPrimitive.Viewport
      ref={ref}
      className={cn(
        "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
      )}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

export const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "z-menu data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full flex h-1.5 items-end justify-center overflow-hidden",
      className,
    )}
    {...props}
  >
    <div className='bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md' />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;
