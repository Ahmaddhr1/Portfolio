import React from "react";
import { motion } from "framer-motion";
const fadeinleft = {
  initial: {
    x: -100,
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
const Button = ({ text, icon }) => {
  return (
    <motion.a
      variants={fadeinleft}
      initial="initial"
      animate="animate"
      href="/Ahmad Daher CV.docx"
      donwnload="true"
      className="flex items-center justify-center gap-3 px-4 py-3 bg-secondary border-0 rounded-lg cursor-pointer "
    >
      <i className={`${icon} flex items-ce`}></i>
      <span className="font-outfit">{text}</span>
    </motion.a>
  );
};

export default Button;
