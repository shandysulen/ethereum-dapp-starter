import { SessionOptions } from "iron-session";

export const ironSessionOptions: SessionOptions = {
  cookieName: "session",
  password: process.env.PASSWORD as string, // assumes env var is loaded
};
