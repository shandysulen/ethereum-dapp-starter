import { SessionOptions } from "iron-session";

export const ironSessionOptions: SessionOptions = {
  cookieName: "session",
  password: process.env.PASSWORD!, // assumes env var is loaded
};
