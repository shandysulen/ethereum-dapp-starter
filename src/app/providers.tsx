"use client";

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";
import { TooltipProvider } from "@/components/Tooltip";
import TrpcQueryClientProvider from "./_trpc/TrpcQueryClientProvider";

export const Providers: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <TrpcQueryClientProvider>
      <ThemeProvider defaultTheme='light' attribute='class'>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </ThemeProvider>
    </TrpcQueryClientProvider>
  );
};
