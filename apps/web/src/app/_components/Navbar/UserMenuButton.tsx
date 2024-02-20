import { Avatar, Button, HStack } from "@eds/components";

export const UserMenuButton: React.FC = ({}) => (
  <Button className='rounded-full border border-slate-200 bg-slate-50'>
    <HStack className='items-center justify-start gap-2.5 pl-4'>
      <span className='font-bold'>shando.eth</span>
      <Avatar
        name='shando.eth'
        address='0xc4DaD120712A92117Cc65D46514BE8B49ED846a1'
        src='/accounts/shando.png'
        className='w-10'
      />
    </HStack>
  </Button>
);
