"use client";

import { Container, Heading } from "@eds/components";
import { useAccount } from "wagmi";

export default function ProfilePage() {
  const { address } = useAccount();

  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
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
