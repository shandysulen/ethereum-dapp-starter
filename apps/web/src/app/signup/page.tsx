import { Container, Heading } from "@eds/components";

import { SignupForm } from "./_components/SignupForm";

export default function SignupPage() {
  return (
    <Container
      size='xl'
      className='flex h-full min-h-[calc(100vh-var(--height-header)-var(--height-footer))] flex-col items-center justify-center gap-4'
    >
      <Heading>Signup</Heading>
      <SignupForm />
    </Container>
  );
}
