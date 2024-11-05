import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
  id: text("id").primaryKey(),
  address: text("address").notNull(), // should be unique
  joinedDate: text("joined_date").notNull(),
});

// export type DbAccount = InferModel<typeof accounts>; // return type when queried
// export type NewDbAccount = InferModel<typeof accounts, "insert">; // return type when inserted
