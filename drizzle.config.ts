import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_URL as string,
    authToken: process.env.DB_AUTH_TOKEN as string,
  },
  // dbCredentials: {
  //   url: "file:./local.db",
  // },
} satisfies Config;
