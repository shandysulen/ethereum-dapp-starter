import { memo } from "react";
import { DesktopNavbar } from "./Navbar/DesktopNavbar";

export const Navbar: React.FC = memo(function Navbar() {
  return (
    <header className='z-navbar sticky top-0 w-full border-b bg-background/70 backdrop-blur-3xl'>
      <DesktopNavbar />
    </header>
  );
});
