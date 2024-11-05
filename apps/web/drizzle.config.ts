import { defineConfig } from 'drizzle-kit';

import { env } from "@/env.mjs";

export default defineConfig({
  dialect: "postgresql",
  out: "./drizzle",
  schema: "./src/schemas/*",
  dbCredentials: {
    url: env.DB_URL,
  },
})
