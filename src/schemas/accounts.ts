import { type InferModel } from "drizzle-orm";
import { char, date, mysqlTable, serial } from "drizzle-orm/mysql-core";

export const accounts = mysqlTable("accounts", {
  id: serial("id").primaryKey(),
  address: char("address", { length: 42 }).notNull(), // should be unique
  joinedDate: date("joined_date").notNull(),
  // PROFILE
  // avatar: text("avatar"),
  // bio: text("bio"),
  // TODO: add socials
  // NOTIFICATIONS
  // TODO: add notifications
});

export type DbAccount = InferModel<typeof accounts>; // return type when queried
export type NewDbAccount = InferModel<typeof accounts, "insert">; // return type when inserted
