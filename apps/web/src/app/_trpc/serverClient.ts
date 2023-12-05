import { appRouter } from "@/server/routers/_app";
import { createDbClient } from "@/server/services/db";

export const serverClient = appRouter.createCaller({
  db: createDbClient(),
});
