import { InternalLink } from "@eds/components";
import { HStack } from "@eds/components/src/components/server";

export const Sitemap: React.FC = () => {
  return (
    <HStack className='justify-center text-sm'>
      <InternalLink href='/about'>About</InternalLink>
      <span>•</span>
    </HStack>
  );
};
