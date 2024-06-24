import React from "react";
import { motion } from "framer-motion";
import {parentVariant} from "../utils/animations"

const childVariant = {
  initial: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 1,
      duration: 0.5,
    },
  },
};

const TechTools = ({ arr }) => {
    
  return (
    <motion.div 
      className="flex gap-4 items-center flex-wrap overflow-hidden "
      variants={parentVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {arr.map((tech, i) => (
        <motion.div
          className="flex flex-col gap-2 items-center text-center"
          key={i}
          variants={childVariant}
        >
          <motion.i className={tech.icon + " md:text-[50px] text-[35px]"}></motion.i>
          <motion.p className="md:text-md text-sm">{tech.name}</motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TechTools;
