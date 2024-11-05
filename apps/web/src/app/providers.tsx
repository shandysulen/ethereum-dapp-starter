"use client";

import {
  ConnectKitProvider,
  getDefaultConfig,
  SIWEConfig,
  SIWEProvider,
} from "connectkit";
import { ThemeProvider } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { SiweMessage } from "siwe";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";

import { TooltipProvider } from "@eds/components";

import TrpcQueryClientProvider from "./_trpc/TrpcQueryClientProvider";
import { env } from "@/env.mjs";

const wagmiConfig = createConfig(
  getDefaultConfig({
    chains: [mainnet],
    transports: {
      [mainnet.id]: http(),
    },
    appName: "EDS",
    walletConnectProjectId: "",
  }),
);

const siweConfig: SIWEConfig = {
  getNonce: async () => fetch("/api/siwe/nonce").then((res) => res.text()),
  createMessage: ({ nonce, address, chainId }) =>
    new SiweMessage({
      version: "1",
      domain: window.location.host,
      uri: window.location.origin,
      address,
      chainId,
      nonce,
      statement: "Sign in With Ethereum.",
    }).prepareMessage(),
  verifyMessage: async ({ message, signature }) =>
    fetch("/api/siwe/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, signature }),
    }).then((res) => res.ok),
  getSession: async () =>
    fetch("/api/siwe/session").then((res) => (res.ok ? res.json() : null)),
  signOut: async () => fetch("/api/siwe/logout").then((res) => res.ok),
};

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
      <WagmiProvider config={wagmiConfig}>
        <TrpcQueryClientProvider>
          <SIWEProvider {...siweConfig}>
            <ConnectKitProvider>
              <ThemeProvider defaultTheme='light' attribute='class'>
                <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
              </ThemeProvider>
            </ConnectKitProvider>
          </SIWEProvider>
        </TrpcQueryClientProvider>
      </WagmiProvider>
  );
};
