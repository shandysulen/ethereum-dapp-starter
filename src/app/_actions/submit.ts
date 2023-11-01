"use server";

import { insertSubscriberSchema, subscribers } from "@/schemas/subscribers";
import { createDbClient } from "@/server/services/db";

export async function submit(data: FormData) {
  data.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  const insertData = insertSubscriberSchema.parse(data);

  const db = createDbClient();
  await db.insert(subscribers).values(insertData);
}
