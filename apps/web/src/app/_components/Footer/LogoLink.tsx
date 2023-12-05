import NextLink from "next/link";
import React from "react";
import { Logo } from "../../_shared/Logo";

export const LogoLink: React.FC = () => {
  // const logoType = useColorModeValue("black", "white");

  return (
    <NextLink href='/'>
      <Logo />
    </NextLink>
  );
};
