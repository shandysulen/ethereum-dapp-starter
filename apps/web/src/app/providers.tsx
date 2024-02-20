"use client";

import { TooltipProvider } from "@eds/components";
import {
  ConnectKitProvider,
  getDefaultConfig,
  SIWEConfig,
  SIWEProvider,
} from "connectkit";
import { ThemeProvider } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect } from "react";
import { SiweMessage } from "siwe";
import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import { env } from "@/env.mjs";
import TrpcQueryClientProvider from "./_trpc/TrpcQueryClientProvider";

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

if (typeof window !== "undefined") {
  posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: env.NEXT_PUBLIC_POSTHOG_HOST,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function PostHogPageview() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track pageviews
  useEffect(() => {
    if (pathname) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`; // TODO: consider percent encoding?
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}

export const PHProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PHProvider>
      <WagmiProvider config={wagmiConfig}>
        <TrpcQueryClientProvider>
          <SIWEProvider {...siweConfig}>
            <ConnectKitProvider>
              <ThemeProvider defaultTheme='system' attribute='class'>
                <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
              </ThemeProvider>
            </ConnectKitProvider>
          </SIWEProvider>
        </TrpcQueryClientProvider>
      </WagmiProvider>
    </PHProvider>
  );
};
