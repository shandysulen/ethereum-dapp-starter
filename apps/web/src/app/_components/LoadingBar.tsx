"use client";

import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import nProgress from "nprogress";
import React, { useEffect } from "react";

// Configure loading bar
nProgress.configure({ parent: "#loading-bar" });

export const LoadingBar: React.FC = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  useEffect(() => {
    if (isFetching || isMutating) {
      nProgress.start();
    } else {
      nProgress.done();
    }
  }, [isFetching, isMutating]);

  return <div id='loading-bar' className='z-loading-bar fixed w-full' />;
};
