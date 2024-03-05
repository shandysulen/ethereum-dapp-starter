"use client";

import { BookOpen, CircleEllipsis, HelpCircle } from "lucide-react";
import React from "react";

import {
  NavigationMenuContent,
  NavigationMenuContentLinkItem,
  NavigationMenuItem,
  NavigationMenuTrigger,
  Separator,
} from "@eds/components";

import { Socials } from "@/app/_shared/Socials";

export interface NavItemProps {
  label: string;
  icon: JSX.Element;
  href: string;
}

export const INTERNAL_NAV_ITEMS: NavItemProps[] = [
  // {
  //   label: "Rankings",
  //   icon: <BiRocket size='20px' />,
  //   href: "/rankings/tlds",
  // },
  // {
  //   label: "Recent activity",
  //   icon: <FiActivity size='20px' />,
  //   href: "/activity",
  // },
  {
    label: "About us",
    icon: <BookOpen size='20px' />,
    href: "/about",
  },
  {
    label: "Help center",
    icon: <HelpCircle size='20px' />,
    // icon: <BiBookBookmark size='20px' />,
    href: "/support",
  },
];

/** Menu for navbar items */
export const OverflowNav: React.FC = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <CircleEllipsis size='24px' className='text-primary' />
      </NavigationMenuTrigger>
      <NavigationMenuContent className='px-2 py-2'>
        {INTERNAL_NAV_ITEMS.map(({ href, icon, label }) => (
          <NavigationMenuContentLinkItem key={href} href={href} icon={icon}>
            {label}
          </NavigationMenuContentLinkItem>
        ))}
        <Separator className='my-2 w-full' />
        <Socials className='px-4 py-2' />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
