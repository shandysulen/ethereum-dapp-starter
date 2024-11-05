import { router } from "../trpc";
import { formRouter } from "./form";
import { greetingRouter } from "./greeting";

export const appRouter = router({
  greeting: greetingRouter,
  form: formRouter,
});

export type AppRouter = typeof appRouter;
