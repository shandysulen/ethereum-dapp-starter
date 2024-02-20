"use client";

import {
  NavigationMenuContent,
  NavigationMenuContentButtonItem,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@eds/components";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeMenu: React.FC = () => {
  const { theme, setTheme } = useTheme();

  let triggerContent: JSX.Element;
  switch (theme) {
    case "dark":
      triggerContent = <Moon size={20} />;
      break;
    case "light":
      triggerContent = <Sun size={20} />;
      break;
    default:
      triggerContent = <Monitor size={20} />;
      break;
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{triggerContent}</NavigationMenuTrigger>
      <NavigationMenuContent className='px-2 py-2'>
        <NavigationMenuContentButtonItem
          icon={<Sun size={20} />}
          onClick={() => setTheme("light")}
        >
          Light
        </NavigationMenuContentButtonItem>
        <NavigationMenuContentButtonItem
          icon={<Moon size={20} />}
          onClick={() => setTheme("dark")}
        >
          Dark
        </NavigationMenuContentButtonItem>
        <NavigationMenuContentButtonItem
          icon={<Monitor size={20} />}
          onClick={() => setTheme("system")}
        >
          System
        </NavigationMenuContentButtonItem>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};
