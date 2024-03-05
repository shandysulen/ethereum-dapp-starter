import { Twitter } from "lucide-react";
import React from "react";

import { ExternalLink } from "@eds/components";

export interface TwitterLinkProps {
  readonly username: string;
}

export const TwitterLink: React.FC<TwitterLinkProps> = ({ username }) => {
  return (
    <ExternalLink
      aria-label='X account'
      href={`https://x.com/${username}`}
      className='hover:text-twitter transition-colors'
    >
      <Twitter size={18} />
    </ExternalLink>
  );
};
