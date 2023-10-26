import Image from "next/image";
import React from "react";

export interface LogoProps {
  readonly color: "black" | "white";
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  return <Image src='' alt='' width={120} height={30} />;
};
