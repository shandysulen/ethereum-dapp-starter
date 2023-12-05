"use client";

import { Button } from "@eds/components";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { usePostHog } from "posthog-js/react";

export const ConnectButton: React.FC = () => {
  const { openConnectModal } = useConnectModal();
  const posthog = usePostHog();

  const connect = () => {
    openConnectModal();
    posthog?.capture("clicked_connect");
  };

  return <Button onClick={connect}>Connect</Button>;
};
