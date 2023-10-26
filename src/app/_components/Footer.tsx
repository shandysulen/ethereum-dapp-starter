import React from "react";

import { Socials } from "@/app/_shared/Socials";
import { Stack } from "@/components/Stack";

import { Copyright } from "./Footer/Copyright";
import { Description } from "./Footer/Description";
import { LogoLink } from "./Footer/LogoLink";
import { Sitemap } from "./Footer/Sitemap";

/** To be shown at the bottom of every page */
export const Footer: React.FC = () => {
  return (
    <Stack
      as='footer'
      className='space-between shadow-lg-top relative w-full items-center gap-4 py-5'
    >
      <LogoLink />
      <Socials />
      <Description />
      <Sitemap />
      <Copyright />
    </Stack>
  );
};
