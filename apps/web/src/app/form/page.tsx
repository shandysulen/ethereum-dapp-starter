import { Container, Heading } from "@eds/components";
import { PremiumSubscriptionForm } from "./_components/PremiumSubscriptionForm";

export default function FormPage() {
  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Premium Subscription</Heading>
      <PremiumSubscriptionForm />
    </Container>
  );
}
