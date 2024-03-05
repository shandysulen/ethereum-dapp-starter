import type { PropsWithChildren } from "react";

import { Heading } from "@eds/components";

export const SitemapHeader: React.FC<PropsWithChildren> = ({ children }) => (
  <Heading as='h2' className='text-sm font-bold'>
    {children}
  </Heading>
);
