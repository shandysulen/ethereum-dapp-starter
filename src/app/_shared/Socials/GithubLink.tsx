import { Github } from "lucide-react";
import React from "react";
import { ExternalLink } from "@/components/ExternalLink";

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
      <Github />
    </ExternalLink>
  );
};
