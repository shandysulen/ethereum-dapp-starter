"use client";

import { HelpCircle } from "lucide-react";
import React from "react";
import { Popover } from "./Popover";

export interface HelpIconPopoverProps {
  readonly content: string;
  readonly size?: string;
}

export const HelpIconPopover: React.FC<HelpIconPopoverProps> = ({
  content,
  size = "16px",
}) => {
  return (
    <Popover content={content}>
      <HelpCircle size={size} color='#A0AEC0' cursor='help' />
    </Popover>
  );
};
