import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import * as schema from "@/schemas";

// export class DbClient {
//   client: ReturnType<typeof drizzle>;

//   constructor() {
//     const client = createClient({
//       url: process.env.DB_URL as string,
//       authToken: process.env.DB_AUTH_TOKEN as string,
//     });
//     this.client = drizzle(client, { schema });
//   }
// }

export const createDbClient = () => {
  const client = createClient({
    url: process.env.DB_URL,
    authToken: process.env.DB_AUTH_TOKEN,
  });

  return drizzle(client, { schema });
};
