import { memo } from "react";

import { DesktopNavbar } from "./Navbar/DesktopNavbar";

export interface NavbarProps {
  readonly isDarkMode?: boolean;
  readonly isScrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = memo(function Navbar({
  isDarkMode = false,
  isScrolled = false,
}) {
  // const breakpoint = useBreakpoint({ fallback: undefined });

  return (
    <header className='z-navbar sticky top-0 w-full border-b bg-background/70 backdrop-blur-3xl'>
      {/* {["base", "sm"].includes(breakpoint) ? (
        <MobileNavbar />
      )} */}
      <DesktopNavbar isDarkMode={isDarkMode} isScrolled={isScrolled} />
    </header>
  );
});
