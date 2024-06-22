import React from "react";
import { motion } from "framer-motion";
import { fadeInRight } from "../utils/animations";
const Button2 = ({ text, icon, section }) => {
  return (
    <motion.a
      variants={fadeInRight}
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
