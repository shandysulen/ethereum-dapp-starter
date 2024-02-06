import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import { SessionData, sessionOptions } from "./lib";

export async function GET() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  return Response.json(session);
}

export async function POST(request: NextRequest) {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const { username = "No username" } = (await request.json()) as {
    username: string;
  };

  session.isLoggedIn = true;
  session.username = username;
  await session.save();

  return Response.json(session);
}
