import { initTRPC } from "@trpc/server";
import superjson from "superjson";
import { createDbClient } from "./services/db";

/**
 * This is the actual context you'll use in your router. It will be used to
 * process every request that goes through your tRPC endpoint
 * @link https://trpc.io/docs/context
 */
export const createContext = () => {
  // Get the session from the server using the unstable_getServerSession wrapper function
  // const session = await auth();

  const db = createDbClient();

  return {
    db,
  };
};

const t = initTRPC.context<typeof createContext>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;
export const publicProcedure = t.procedure;
