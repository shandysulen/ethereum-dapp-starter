import { HStack, NavigationMenu, NavigationMenuList } from "@eds/components";
import React from "react";
import { LogoLink } from "../Footer/LogoLink";
import { OverflowNav } from "./OverflowNav";

export const DesktopNavbar: React.FC = () => {
  return (
    <HStack
      className='h-header min-h-[60px] w-full justify-between px-[5%] py-4'
      // bg={isDarkMode ? "transparent" : "rgba(255,255,255,0.5)"}
      // h={navbarHeight}
      // color={isDarkMode ? "white" : "black"}
      // shadow={isDarkMode ? "none" : "sm"}
    >
      <LogoLink />
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
