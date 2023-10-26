import { useEffect, useState } from "react";

interface WindowSize {
  readonly width: number;
  readonly height: number;
}

// create breakpoints array
const breakpoints = [0, 600, 960, 1280, 1920] as const;
export type Breakpoint = (typeof breakpoints)[number];

// create breakpoint value array
const breakpointValues = ["xs", "sm", "md", "lg", "xl"] as const;
export type BreakpointValue = (typeof breakpointValues)[number];

const breakpointMap: Record<Breakpoint, BreakpointValue> = {
  0: "xs",
  600: "sm",
  960: "md",
  1280: "lg",
  1920: "xl",
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<BreakpointValue>("xs");
  const [windowSize, setWindowSize] = useState<WindowSize>();

  // Function that sets window size on resize
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  // Register resize event
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Whenever window size changes, set breakpoint value
  useEffect(() => {
    if (windowSize) {
      if (0 < windowSize.width && windowSize.width < 600) {
        setBreakpoint(breakpointMap[0]);
      }
      if (600 < windowSize.width && windowSize.width < 960) {
        setBreakpoint(breakpointMap[600]);
      }
      if (960 < windowSize.width && windowSize.width < 1280) {
        setBreakpoint(breakpointMap[960]);
      }
      if (1280 < windowSize.width && windowSize.width < 1920) {
        setBreakpoint(breakpointMap[1280]);
      }
      if (windowSize.width >= 1920) {
        setBreakpoint(breakpointMap[1920]);
      }
    }
  }, [windowSize]);

  return breakpoint;
};
