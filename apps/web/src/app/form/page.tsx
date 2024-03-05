import { Container, Heading } from "@eds/components";

import { PremiumSubscriptionForm } from "./_components/PremiumSubscriptionForm";

export default function FormPage() {
  return (
    <Container
      size='xl'
      className='flex h-full min-h-[calc(100vh-var(--height-header)-var(--height-footer))] flex-col items-center justify-center gap-4'
    >
      <Heading>Premium Subscription</Heading>
      <PremiumSubscriptionForm />
    </Container>
  );
}
