import { Container, Heading, HStack } from "@eds/components";
import "server-only";
import { ConnectButton } from "./_components/ConnectButton";
import { Description } from "./_components/Description";
import { LearnMoreButton } from "./_components/LearnMoreButton";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4 bg-red-300'
    >
      <Heading className='color-purple'>Build the future.</Heading>
      <Description />
      <HStack role='group' className='mt-4'>
        <ConnectButton />
        <LearnMoreButton />
      </HStack>
    </Container>
  );
}
