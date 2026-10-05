import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

// WalletConnect requires a real project ID before this goes live — get one
// free at https://cloud.reown.com and set NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID
// in the deploy workflow / .env.local. The fallback below is a public demo
// ID and is rate-limited; wallet connections will be unreliable until swapped.
const walletConnectProjectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ||
  "00000000000000000000000000000000";

export const wagmiConfig = getDefaultConfig({
  appName: "O-R-G — Octagon Research Group and Spirituality Centers",
  projectId: walletConnectProjectId,
  chains: [mainnet, sepolia],
  ssr: true,
});

// Donation / gifts wallet address — placeholder until ORG designates and
// verifies a real treasury address. Do not treat this as a live address.
export const DONATION_ADDRESS =
  (process.env.NEXT_PUBLIC_DONATION_ADDRESS as `0x${string}` | undefined) ||
  ("0x0000000000000000000000000000000000dEaD" as const);

export const DONATION_ADDRESS_IS_PLACEHOLDER =
  !process.env.NEXT_PUBLIC_DONATION_ADDRESS;
