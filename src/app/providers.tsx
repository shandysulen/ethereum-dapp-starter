"use client";

import { ThemeProvider } from "next-themes";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { PropsWithChildren, useEffect } from "react";
import { TooltipProvider } from "@/components/Tooltip";
import TrpcQueryClientProvider from "./_trpc/TrpcQueryClientProvider";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
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
        <ThemeProvider defaultTheme='light' attribute='class'>
          <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
        </ThemeProvider>
      </TrpcQueryClientProvider>
    </PHProvider>
  );
};
