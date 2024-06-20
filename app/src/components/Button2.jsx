import React from "react";
import { motion } from "framer-motion";
const fadeinleft = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay:3,
      duration: 2,
      type: "spring",
    },
  },
};
const Button2 = ({ text, icon, section }) => {
  return (
    <motion.a
      variants={fadeinleft}
      initial="initial"
      animate="animate"
      href={"#" + section}
      className="flex items-center justify-center gap-3 px-4 py-3 bg-transparent border border-secondary rounded-lg cursor-pointer "
    >
      <i className={`${icon} flex items-center`}></i>
      <span className="font-outfit">{text}</span>
    </motion.a>
  );
};

export default Button2;
