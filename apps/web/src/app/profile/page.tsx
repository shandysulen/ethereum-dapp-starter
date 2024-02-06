"use client";

import { useQuery } from "@tanstack/react-query";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";

export default function ProfilePage() {
  const { data } = useQuery(["status"], () =>
    fetch("/api/auth").then((res) => res.json()),
  );

  console.log(data);

  return (
    <Container
      size='xl'
      className='flex flex-col justify-center items-center min-h-[calc(100vh-var(--height-header)-var(--height-footer))] h-full gap-4'
    >
      <Heading>Profile</Heading>
      <div className='flex flex-col gap-4'>
        <div>
          <h3 className='text-lg font-semibold'>User</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    </Container>
  );
}
