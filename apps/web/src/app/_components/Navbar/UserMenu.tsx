import React from "react";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@eds/components";

import { LogOutMenuItem } from "./UserMenu/LogOutMenuItem";
import { ProfileMenuItem } from "./UserMenu/ProfileMenuItem";
import { UserMenuButton } from "./UserMenuButton";

export interface UserMenuProps {
  readonly isDarkMode?: boolean;
}

export const UserMenu: React.FC<UserMenuProps> = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>
        <UserMenuButton />
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ProfileMenuItem />
        {/* <WatchlistMenuItem />
        <FavoritesMenuItem /> */}
        {/* <ColorModeMenuItem /> */}
        {/* <SettingsMenuItem /> */}
        <LogOutMenuItem />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
