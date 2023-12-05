import { type InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import * as z from "zod";

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("address", { length: 42 }).notNull(), // should be unique
  email: text("joined_date").notNull(),
  yearly: integer("yearly", { mode: "boolean" }),
});

export const insertSubscriberSchema = createInsertSchema(subscribers, {
  yearly: z.boolean(),
})
  .omit({
    id: true,
  })
  .required();
export type InsertSubscriberSchema = z.infer<typeof insertSubscriberSchema>;
export type DbSubscriber = InferModel<typeof subscribers>; // return type when queried
export type NewDbSubscriber = InferModel<typeof subscribers, "insert">; // return type when inserted
