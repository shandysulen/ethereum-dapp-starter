import { SiweMessage } from "siwe";
import { Address, createWalletClient, http } from "viem";
import { mainnet } from "viem/chains";

// Create wallet
export const walletClient = createWalletClient({
  chain: mainnet,
  account: "0x6Ee9894c677EFa1c56392e5E7533DE76004C8D94",
  transport: http(),
});

// Create SIWE message
const createSiweMessage = (address: Address, statement: string) =>
  new SiweMessage({
    domain: "localhost",
    address,
    statement,
    uri: "https://localhost/login",
    version: "1",
    chainId: 1,
  });

const siweMessage = createSiweMessage(
  "0x6Ee9894c677EFa1c56392e5E7533DE76004C8D94",
  "This is a test statement.",
);
const message = siweMessage.prepareMessage();
console.log("message", message);

// Sign message
// const signature = walletClient.signMessage(message);

// await siweMessage.verify({ signature: });
