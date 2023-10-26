import { MouseEventHandler, useMemo } from "react";

import { useBreakpoint } from "./useBreakpoint";

export function useTriggerFix() {
  const breakpoint = useBreakpoint();

  return useMemo(() => {
    let disable: NodeJS.Timeout | false;

    const onClick: MouseEventHandler<HTMLButtonElement> = (e) =>
      disable && e.preventDefault();

    return ["xs", "sm"].includes(breakpoint)
      ? {}
      : {
          onClick,
          onPointerEnter: () => {
            clearTimeout(disable as NodeJS.Timeout);
            disable = setTimeout(() => (disable = false), 1000);
          },
        };
  }, [breakpoint]);
}
