import { generateNonce } from "siwe";

export const GET = async () => {
  return new Response(generateNonce());
};
