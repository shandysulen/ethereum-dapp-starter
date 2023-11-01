"use client";

import { usePostHog } from "posthog-js/react";
import { Button } from "@/components/Button";

export interface ConnectButtonProps {}

export const ConnectButton: React.FC<ConnectButtonProps> = () => {
  const posthog = usePostHog();

  const connect = () => {
    posthog?.capture("clicked_connect");
  };

  return <Button onClick={connect}>Connect</Button>;
};
