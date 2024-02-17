import "siwe";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SiweMessage } from "siwe";
import { z } from "zod";
import { ironSessionOptions } from "@/constants/iron-session";
import { Session } from "@/types/session";

const verifyBody = z.object({
  message: z.string(),
  signature: z.string(),
});

type VerifyBody = z.infer<typeof verifyBody>;

export const POST = async (request: Request) => {
  const body = (await request.json()) as VerifyBody;

  // Parse request body to ensure it has `message` and `signature`
  try {
    verifyBody.parse(body);
  } catch (err) {
    return new Response("Body must include message and signature", {
      status: 400,
    });
  }

  // Verify signature against message
  const siweResponse = await new SiweMessage(body.message).verify({
    signature: body.signature,
  });

  // If the signature is invalid, return a 401 (Unauthorized)
  if (!siweResponse.success) {
    return new Response("Invalid signature", { status: 401 });
  }

  // Save session (set is as cookie)
  const session = await getIronSession<Session>(cookies(), ironSessionOptions);
  session.address = siweResponse.data.address;
  await session.save();

  return Response.json(session);
};
