import { Github } from "lucide-react";
import React from "react";

import { ExternalLink } from "@eds/components";

export interface GithubLinkProps {
  readonly href: string;
}

export const GithubLink: React.FC<GithubLinkProps> = ({ href }) => {
  return (
    <ExternalLink
      aria-label='GitHub account'
      href={href}
      className='transition-opacity hover:opacity-70'
    >
      <Github size={18} />
    </ExternalLink>
  );
};
