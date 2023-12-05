// app/posthog.js
import { PostHog } from "posthog-node";
import { env } from "@/env.mjs";

export default function PostHogClient() {
  return new PostHog(env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: env.NEXT_PUBLIC_POSTHOG_HOST,
    flushAt: 1,
    flushInterval: 0,
  });
}
