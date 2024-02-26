import { type InferModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("address", { length: 42 }).notNull(), // should be unique
  email: text("joined_date").notNull(),
  yearly: integer("yearly", { mode: "boolean" }),
});

export type DbSubscriber = InferModel<typeof subscribers>; // return type when queried
export type NewDbSubscriber = InferModel<typeof subscribers, "insert">; // return type when inserted
