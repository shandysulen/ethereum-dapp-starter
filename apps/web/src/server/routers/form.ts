import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { subscribers } from "@/schemas/subscribers";

const formSchema = z.object({
  name: z.string().min(1, "Must provide a name."),
  email: z.string().email(),
});

export const formRouter = router({
  test: publicProcedure.query(() => {
    return `test`;
  }),
  submit: publicProcedure.input(formSchema).mutation(async ({ input, ctx: { db } }) => {
    await db.insert(subscribers).values(input);

    return 'success';
  }),
});
