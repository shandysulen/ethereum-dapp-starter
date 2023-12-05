import { motion, type HTMLMotionProps, type Variants } from "framer-motion";

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

export const AnimationItem: React.FC<HTMLMotionProps<"div">> = ({
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
