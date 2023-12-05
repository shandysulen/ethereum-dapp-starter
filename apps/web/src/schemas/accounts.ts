import { type InferModel } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const accounts = sqliteTable("accounts", {
  id: text("id").primaryKey(),
  address: text("address", { length: 42 }).notNull(), // should be unique
  joinedDate: text("joined_date").notNull(),
});

export type DbAccount = InferModel<typeof accounts>; // return type when queried
export type NewDbAccount = InferModel<typeof accounts, "insert">; // return type when inserted
