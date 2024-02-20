import { generateNonce } from "siwe";

export const GET = () => {
  return new Response(generateNonce());
};
