"use client";

import { useAccount } from "wagmi";

import { Container, Heading } from "@eds/components";

export default function ProfilePage() {
  const { address } = useAccount();

  return (
    <Container
      size='xl'
      className='flex h-full min-h-[calc(100vh-var(--height-header)-var(--height-footer))] flex-col items-center justify-center gap-4'
    >
      <Heading>Profile</Heading>
      <div className='flex flex-col gap-4'>
        <div>
          <h3 className='text-lg font-semibold'>User</h3>
          <span>{address}</span>
        </div>
      </div>
    </Container>
  );
}
