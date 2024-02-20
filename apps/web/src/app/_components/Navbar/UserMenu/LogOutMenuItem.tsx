import { NavigationMenuContentButtonItem } from "@eds/components";
import { LogOut } from "lucide-react";
import React from "react";

export const LogOutMenuItem: React.FC = () => {
  return (
    <NavigationMenuContentButtonItem icon={<LogOut />}>
      Log out
    </NavigationMenuContentButtonItem>
  );
};
