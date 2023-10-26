import { Center } from "@/components/Center";
import { HStack } from "@/components/HStack";
import { Heading } from "@/components/Heading";
import { Separator } from "@/components/Separator";

export default function NotFound() {
  return (
    <Center className='min-h-screen'>
      <HStack className='gap-5'>
        <Heading>404</Heading>
        <Separator orientation='vertical' className='h-10' />
        <span>Page not found</span>
      </HStack>
    </Center>
  );
}
