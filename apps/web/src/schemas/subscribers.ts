import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const subscribers = pgTable("subscribers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // should be unique
  email: text("email").notNull(),
});

// export type DbSubscriber = InferModel<typeof subscribers>; // return type when queried
// export type NewDbSubscriber = InferModel<typeof subscribers, "insert">; // return type when inserted
