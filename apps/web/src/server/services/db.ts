import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import { env } from "@/env.mjs";

// export const createDbClient = () => {
//   return drizzle(process.env.DB_URL!);
// };

export const createDbClient = () => {
  const client = postgres(env.DB_URL, { prepare: false })
  return drizzle({ client });
};
