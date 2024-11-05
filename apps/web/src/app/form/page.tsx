"use client";

import { Container, Heading } from "@eds/components";

import { PremiumSubscriptionForm } from "./_components/PremiumSubscriptionForm";
import { trpc } from "../_trpc/client";

export default function FormPage() {
  const { data } = trpc.form.test.useQuery();

  console.log('DATA', data)

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
