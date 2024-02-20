"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import React, { PropsWithChildren } from "react";

export const animationItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
};

interface AnimationItemProps extends HTMLMotionProps<"div">, PropsWithChildren {
  readonly className: string;
}

export const AnimationItem: React.FC<AnimationItemProps> = ({
  children,
  ...props
}) => {
  return (
    <motion.div
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
      variants={animationItemVariants}
      {...props}
    >
      {children}
    </motion.div>
  );
};
