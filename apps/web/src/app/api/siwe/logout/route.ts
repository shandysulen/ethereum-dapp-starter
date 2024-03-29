import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const runtime = "edge";

export const GET = async () => {
  const session = await getIronSession(cookies(), {
    cookieName: "session",
    password: process.env.PASSWORD!,
  });

  session.destroy();

  return new Response("Logged out");
};
