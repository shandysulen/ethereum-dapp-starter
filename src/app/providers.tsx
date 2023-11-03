"use client";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ThemeProvider } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect } from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, base, mainnet, optimism, polygon, zora } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { TooltipProvider } from "@/components/Tooltip";
import { env } from "@/env.mjs";
import TrpcQueryClientProvider from "./_trpc/TrpcQueryClientProvider";

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [alchemyProvider({ apiKey: env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()],
);

const { connectors } = getDefaultWallets({
  appName: "Ethereum Dapp Starter",
  projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

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

export function PHProvider({ children }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PHProvider>
      <TrpcQueryClientProvider>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ThemeProvider defaultTheme='light' attribute='class'>
              <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            </ThemeProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </TrpcQueryClientProvider>
    </PHProvider>
  );
};
