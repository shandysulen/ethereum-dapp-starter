import { Logo } from "@/components/Logo";
import NextLink from "next/link";

export const LogoLink: React.FC = () => {
  // const logoType = useColorModeValue("black", "white");

  return (
    <NextLink href='/'>
      <Logo color={"black"} />
    </NextLink>
  );
};
