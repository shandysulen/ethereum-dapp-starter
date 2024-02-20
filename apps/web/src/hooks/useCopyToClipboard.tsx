import { Tooltip } from "@eds/components";
import { PropsWithChildren, useEffect, useState } from "react";

type CopyFn = (text: string) => Promise<boolean>; // Return success

export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>();

  useEffect(() => {
    if (copiedText) {
      setTimeout(() => setCopiedText(undefined), 1_000);
    }
  }, [copiedText]);

  const copy: CopyFn = async (text) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported"); // WARNING: clipboard doesn't work on mobile http localhost
      return false;
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  };

  const CopyTooltip: React.FC<PropsWithChildren> = ({ children }) => (
    <Tooltip content={copiedText ? "Copied" : "Share"} isOpen={!!copiedText}>
      <span>{children}</span>
    </Tooltip>
  );

  return { copiedText, hasCopied: !!copiedText, copy, CopyTooltip };
}
