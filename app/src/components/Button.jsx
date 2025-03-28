import React from "react";
import { motion } from "framer-motion";
import { fadeInLeftDelayed } from "../utils/animations";

const Button = ({ text, icon }) => {
  return (
    <motion.a
      variants={fadeInLeftDelayed}
      initial="initial"
      animate="animate"
      href="/Ahmad Daher CV.pdf"
      donwnload="true"
      className="flex items-center justify-center gap-3 px-4 py-3 bg-secondary border-0 rounded-lg cursor-pointer "
    >
      <i className={`${icon} flex items-ce`}></i>
      <span className="font-outfit">{text}</span>
    </motion.a>
  );
};

export default Button;
