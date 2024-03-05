import type { Config } from "drizzle-kit";

import { env } from "@/env.mjs";

export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: env.DB_URL as string,
    authToken: env.DB_AUTH_TOKEN as string,
  },
  // dbCredentials: {
  //   url: "file:./local.db",
  // },
} satisfies Config;
