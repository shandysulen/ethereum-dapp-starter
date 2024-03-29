import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const runtime = "edge";

export const GET = async () => {
  const session = await getIronSession(cookies(), {
    cookieName: "session",
    password: process.env.PASSWORD!,
  });

  return Response.json(session);
};
