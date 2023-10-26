import { HStack } from "@/components/HStack";
import { InternalLink } from "@/components/InternalLink";

export const Sitemap: React.FC = () => {
  return (
    <HStack className='justify-center text-sm'>
      <InternalLink href='/about'>About</InternalLink>
      <span>•</span>
    </HStack>
  );
};
