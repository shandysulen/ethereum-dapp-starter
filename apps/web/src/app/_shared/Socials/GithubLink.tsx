import { ExternalLink } from "@eds/components";
import { Github } from "lucide-react";
import React from "react";

export interface GithubLinkProps {
  readonly href: string;
}

export const GithubLink: React.FC<GithubLinkProps> = ({ href }) => {
  return (
    <ExternalLink
      aria-label='GitHub account'
      href={href}
      className='hover:opacity-70 transition-opacity'
    >
      <Github size={18} />
    </ExternalLink>
  );
};
