"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/lib/web3-config";
import { useTheme } from "@/lib/experience";

import "@rainbow-me/rainbowkit/styles.css";

const WALLET_THEMES = {
  night: darkTheme({ accentColor: "#e9be72", accentColorForeground: "#1b1408", borderRadius: "small" }),
  prism: lightTheme({ accentColor: "#6b4fa0", borderRadius: "small" }),
  stone: lightTheme({ accentColor: "#22408a", borderRadius: "none" }),
};

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const theme = useTheme();

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={WALLET_THEMES[theme]}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
