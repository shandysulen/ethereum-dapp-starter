import { HStack } from "@/components/HStack";
import { cn } from "@/utils/cn";
import { TwitterLink } from "./Socials/TwitterLink";

export interface SocialsProps {
  readonly className?: string;
}

export const Socials: React.FC<SocialsProps> = ({ className }) => {
  return (
    <HStack className={cn("text-primary gap-5", className)}>
      <TwitterLink username='' />
    </HStack>
  );
};
