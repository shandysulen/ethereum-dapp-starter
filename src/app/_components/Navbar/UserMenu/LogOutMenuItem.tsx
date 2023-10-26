import { LogOut } from "lucide-react";
import React from "react";

import { NavigationMenuContentButtonItem } from "@/components/NavigationMenu";

export const LogOutMenuItem: React.FC = () => {
  return (
    <NavigationMenuContentButtonItem icon={<LogOut />}>
      Log out
    </NavigationMenuContentButtonItem>
  );
};
