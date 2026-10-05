"use client";

import { useState } from "react";
import { parseEther } from "viem";
import { useAccount, useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { DONATION_ADDRESS, DONATION_ADDRESS_IS_PLACEHOLDER } from "@/lib/web3-config";

const PRESET_AMOUNTS = ["0.01", "0.05", "0.1"];

export function DonateForm() {
  const { isConnected } = useAccount();
  const [amount, setAmount] = useState("0.05");
  const { sendTransaction, data: hash, isPending, error } = useSendTransaction();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  return (
    <div className="rounded-xl border border-border bg-surface p-6">
      <h3 className="font-semibold text-heading">
        Give crypto
      </h3>

      {DONATION_ADDRESS_IS_PLACEHOLDER && (
        <p className="mt-2 rounded-md bg-surface-muted px-3 py-2 text-xs text-foreground/60">
          This is an early preview. The donation address below is a
          placeholder until ORG designates and verifies a real treasury
          address — sending funds now will not reach ORG.
        </p>
      )}

      <p className="mt-3 break-all text-xs text-foreground/50">
        {DONATION_ADDRESS}
      </p>

      {!isConnected ? (
        <div className="mt-4">
          <ConnectButton />
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap gap-2">
            {PRESET_AMOUNTS.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setAmount(preset)}
                className={`rounded-md border px-3 py-1.5 text-sm ${
                  amount === preset
                    ? "border-accent bg-accent text-on-accent"
                    : "border-border text-foreground/70"
                }`}
              >
                {preset} ETH
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min="0"
              step="0.001"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-32 rounded-md border border-border bg-background px-3 py-1.5 text-sm"
            />
            <span className="text-sm text-foreground/60">ETH</span>
          </div>
          <button
            type="button"
            disabled={isPending || isConfirming || !amount}
            onClick={() =>
              sendTransaction({
                to: DONATION_ADDRESS,
                value: parseEther(amount || "0"),
              })
            }
            className="w-full rounded-md bg-accent px-4 py-2 text-sm font-medium text-on-accent hover:bg-accent-strong disabled:opacity-50"
          >
            {isPending || isConfirming ? "Confirming…" : `Send ${amount || "0"} ETH`}
          </button>

          {isSuccess && (
            <p className="text-sm text-heading">
              Thank you — transaction confirmed.
            </p>
          )}
          {error && (
            <p className="text-sm text-red-600">
              {error.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
