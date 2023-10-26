import type { PropsWithChildren } from "react";

import { Heading } from "@/components/Heading";

export const SitemapHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <Heading as='h2' className='font-bold text-sm'>
    {children}
  </Heading>
);
