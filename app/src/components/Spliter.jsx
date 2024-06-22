import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const HeadingParent = {
  initial: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.07,
    },
  },
};

const headingVariants = {
  initial: {
    y: 130,
    opacity:0
  },
  animate: {
    y: 0,
    rotate: 0,
    opacity:1,
    transition: {
      duration: 0.3,
      type: "zoom",
    },
  },
};

const Spliter = ({ text, styles, delay = 0 }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsAnimated(true), delay * 1000); // Convert delay to milliseconds
    return () => clearTimeout(timeout);
  }, [delay]); // Re-run useEffect on delay change

  return (
    <motion.div
      variants={HeadingParent}
      initial="initial"
      animate={isAnimated ? "animate" : "initial"} // Control animation based on state
      className={styles}
    >
      {text.split("").map((char, i) =>
        char !== " " ? (
          <motion.span
            key={i}
            variants={headingVariants}
            style={{
              display: "inline-block", // Ensure inline-block behavior
            }}
          >
            {char}
          </motion.span>
        ) : (
          <span key={i}>&nbsp;</span>
        )
      )}
    </motion.div>
  );
};

export default Spliter;
