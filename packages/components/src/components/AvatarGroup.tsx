"use client";

import React, { PropsWithChildren } from "react";
import { HStack } from "./HStack";

export const AvatarGroup: React.FC<PropsWithChildren> = (props) => {
  return <HStack className='relative gap-0' {...props} />;
};
