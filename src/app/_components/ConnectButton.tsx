"use client";

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/Button";

export const ConnectButton: React.FC = () => {
  const { openConnectModal } = useConnectModal();
  const posthog = usePostHog();

  const connect = () => {
    openConnectModal();
    posthog?.capture("clicked_connect");
  };

  return <Button onClick={connect}>Connect</Button>;
};
