interface GetTruncatedWalletAddressOptions {
  include0x?: boolean;
  showEllipsis?: boolean;
  showEndingChars?: boolean;
}

/** Truncates the standard 42-character Ethereum address to 0x1234...5678 */
export const getTruncatedWalletAddress = (
  walletAddress: string,
  options: GetTruncatedWalletAddressOptions = {
    include0x: true,
    showEllipsis: true,
    showEndingChars: true,
  },
) => {
  const start =
    options.include0x === undefined || options.include0x ? "0x" : "";
  const middle =
    options.showEllipsis === undefined || options.showEllipsis
      ? `${walletAddress.slice(2, 6)}...`
      : walletAddress.slice(2, -4);
  const end =
    options.showEndingChars === undefined || options.showEndingChars
      ? walletAddress.slice(-4)
      : "";

  return start + middle + end;
};

/** Determines if `owner` is an Ethereum wallet address */
// TODO: should be more accurate
export const isEthereumWalletAddress = (owner: string) => {
  return owner.length === 42 && owner.startsWith("0x");
};
