import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Stack } from "@/components/Stack";

export const runtime = "edge";

export default function Index() {
  return (
    <Container size='xl'>
      <Stack>
        <Heading>
          Believe in the
          <br />
          <span className='bg-gradient-to-l bg-clip-text'>power of wagmi</span>
        </Heading>
        <p color='gray.500'>
          Users own their own data, not corporations. Global digital
          transactions are secure. Online exchanges of information and value are
          decentralized.
        </p>
        <Stack>
          <Button>Connect</Button>
          <Button size='sm' variant='link'>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
