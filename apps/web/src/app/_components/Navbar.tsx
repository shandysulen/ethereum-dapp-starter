import "server-only";

import { memo } from "react";

import { DesktopNavbar } from "./Navbar/DesktopNavbar";

export const Navbar: React.FC = memo(function Navbar() {
  return (
    <header className='z-navbar bg-background/70 sticky top-0 w-full border-b backdrop-blur-3xl'>
      <DesktopNavbar />
    </header>
  );
});
