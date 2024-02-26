import { generateNonce } from "siwe";

export const runtime = "edge";

export const GET = () => {
  return new Response(generateNonce());
};
