import "server-only";

import { Container, Heading, HStack } from "@eds/components";

import { ConnectButton } from "./_components/ConnectButton";
import { Description } from "./_components/Description";
import { LearnMoreButton } from "./_components/LearnMoreButton";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex h-full min-h-[calc(100vh-var(--height-header)-var(--height-footer))] flex-col items-center justify-center gap-4'
    >
      <Heading>Build the future.</Heading>
      <Description />
      <HStack role='group' className='mt-4'>
        <ConnectButton />
        <LearnMoreButton />
      </HStack>
    </Container>
  );
}
