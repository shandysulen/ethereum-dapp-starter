import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { env } from "@/env.mjs";
import * as schema from "@/schemas";

export const createDbClient = () => {
  const client = createClient({
    url: env.DB_URL,
    authToken: env.DB_AUTH_TOKEN,
  });

  return drizzle(client, { schema });
};
