import { router } from "../trpc";
import { greetingRouter } from "./greeting";

export const appRouter = router({
  greeting: greetingRouter,
});

export type AppRouter = typeof appRouter;
