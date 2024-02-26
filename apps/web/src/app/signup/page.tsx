import { Container, Heading } from "@eds/components";
import { SignupForm } from "./_components/SignupForm";

export default function SignupPage() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Signup</Heading>
      <SignupForm />
    </Container>
  );
}
