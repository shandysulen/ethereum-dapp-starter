import { useBreakpoint } from '@chakra-ui/react';
import { DesktopNavbar } from './Navbar/DesktopNavbar';
import { MobileNavBar } from './Navbar/MobileNavbar';

export const Navbar: React.FC = () => {
    const breakpoint = useBreakpoint();

    return ['base', 'sm'].includes(breakpoint) ? <MobileNavBar /> : <DesktopNavbar />;
};
