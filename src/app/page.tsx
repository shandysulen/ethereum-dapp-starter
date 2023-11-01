import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { HStack } from "@/components/HStack";
import { ConnectButton } from "./_components/ConnectButton";
import { Description } from "./_components/Description";
import { LearnMoreButton } from "./_components/LearnMoreButton";

export default async function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
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
