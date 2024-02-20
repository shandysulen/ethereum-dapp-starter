import { Center, Heading, HStack, Separator } from "@eds/components";

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
