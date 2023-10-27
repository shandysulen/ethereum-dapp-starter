import Image from "next/image";
import React from "react";
import logo from "../../public/eds.png";

export interface LogoProps {
  readonly color: "black" | "white";
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  return <Image src={logo} alt='Ethereum Dapp Starter' />;
};
