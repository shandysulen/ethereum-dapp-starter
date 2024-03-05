import { HStack } from "@eds/components";

import { GithubLink } from "./Socials/GithubLink";
import { TwitterLink } from "./Socials/TwitterLink";
import { cn } from "@/utils/cn";

export interface SocialsProps {
  readonly className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  return (
    <HStack className={cn("gap-3", className)}>
      <TwitterLink username='shando_eth' />
      <GithubLink href='https://github.com/shandysulen/ethereum-dapp-starter' />
    </HStack>
  );
};
