import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { HStack } from "@/components/HStack";

export const runtime = "edge";

export default function Index() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Build the future.</Heading>
      <p className=' text-gray-500 max-w-[500px] [text-wrap:balance] text-center'>
        Users own their own data, not corporations. Global digital transactions
        are secure. Online exchanges of information and value are decentralized.
      </p>
      <HStack role='group' className='mt-4'>
        <Button>Connect</Button>
        <Button size='sm' variant='link'>
          Learn more
        </Button>
      </HStack>
    </Container>
  );
}
