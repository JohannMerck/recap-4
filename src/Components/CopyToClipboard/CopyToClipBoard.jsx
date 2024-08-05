import { useState } from "react";
import { StyledCopiedButton, StyledCopyButton } from "../Buttons/StyledButton";

export function CopyToClipboard({ color }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyToClipboard(copiedColor) {
    try {
      await navigator.clipboard.writeText(copiedColor);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (error) {
      console.error(error.message);
    }
  }

  return !isCopied ? (
    <StyledCopyButton
      onClick={() => {
        handleCopyToClipboard(color.hex);
      }}
    >
      Copy Hex
    </StyledCopyButton>
  ) : (
    <StyledCopiedButton>Successfully Copied</StyledCopiedButton>
  );
}
