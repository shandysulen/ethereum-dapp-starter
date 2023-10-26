import NextLink from "next/link";
import React from "react";

import { HStack } from "@/components/HStack";
import { Logo } from "@/components/Logo";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/NavigationMenu";

import { OverflowNav } from "./OverflowNav";

export interface DesktopNavbarProps {
  readonly isDarkMode?: boolean;
  readonly isScrolled?: boolean;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ isDarkMode }) => {
  return (
    <HStack
      className='h-header min-h-[60px] w-full justify-between px-[5%] py-4'
      // bg={isDarkMode ? "transparent" : "rgba(255,255,255,0.5)"}
      // h={navbarHeight}
      // color={isDarkMode ? "white" : "black"}
      // shadow={isDarkMode ? "none" : "sm"}
    >
      <NextLink href='/'>
        <Logo color={isDarkMode ? "white" : "black"} />
      </NextLink>
      <NavigationMenu position='right'>
        <NavigationMenuList>
          <OverflowNav />
          {/* <Separator orientation='vertical' className='gap-10' /> */}
          {/* <ThemeMenu /> */}
        </NavigationMenuList>
      </NavigationMenu>
      {/* <HStack className='gap-[26px]'> */}
      {/* <WalletPopover isDarkMode={isDarkMode} />
        {isAuthenticated ? (
          <UserMenu isDarkMode={isDarkMode} />
        ) : (
          <ConnectWalletButton />
        )} */}
      {/* <CartButton color={isDarkMode ? "white" : "black"} /> */}
      {/* </HStack> */}
    </HStack>
  );
};
