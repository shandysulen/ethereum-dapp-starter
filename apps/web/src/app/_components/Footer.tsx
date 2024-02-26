import { HStack, Stack } from "@eds/components";
import { GithubLink } from "../_shared/Socials/GithubLink";
import { TwitterLink } from "../_shared/Socials/TwitterLink";
import { Copyright } from "./Footer/Copyright";
import { Description } from "./Footer/Description";
import { LogoLink } from "./Footer/LogoLink";

/** To be shown at the bottom of every page */
export const Footer: React.FC = () => {
  return (
    <HStack
      as='footer'
      className='px-[5%] justify-between shadow-lg-top relative w-full items-center gap-4 py-5 h-footer'
    >
      <Stack className='gap-0'>
        <HStack className='gap-4'>
          <LogoLink />
          <HStack className='gap-3'>
            <TwitterLink username='shando_eth' />
            <GithubLink href='https://github.com/shandysulen/ethereum-dapp-starter' />
          </HStack>
        </HStack>
        <Copyright />
      </Stack>
      {/* <Socials /> */}
      <Description />
      {/* <Sitemap /> */}
    </HStack>
  );
};
