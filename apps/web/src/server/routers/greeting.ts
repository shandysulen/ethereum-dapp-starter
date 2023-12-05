import z from "zod";
import { publicProcedure, router } from "../trpc";

export const greetingRouter = router({
  name: publicProcedure.input(z.string()).query(({ input: name }) => {
    return `Hello, ${name}`;
  }),
});

export type GreetingRouter = typeof greetingRouter;
