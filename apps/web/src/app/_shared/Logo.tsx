import Image from "next/image";
import React from "react";
import logo from "../../../public/eds.png";

export const Logo: React.FC = () => {
  return <Image src={logo} alt='Ethereum Dapp Starter' />;
};
