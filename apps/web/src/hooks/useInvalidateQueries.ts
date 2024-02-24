import { useQueryClient } from "@tanstack/react-query";
import { getQueryKey } from "@trpc/react-query";

/**
 * Workaround hook to get function to invalidate queries,
 * in lieu of `trpc.your.route.invalidate()` which is not working 🤔
 */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const useInvalidateQueries = (input: any) => {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: getQueryKey(input) });
};
