import { HStack, InternalLink } from "@eds/components";

export const Sitemap: React.FC = () => {
  return (
    <HStack className='justify-center text-sm'>
      <InternalLink href='/about'>About</InternalLink>
      <span>•</span>
    </HStack>
  );
};
