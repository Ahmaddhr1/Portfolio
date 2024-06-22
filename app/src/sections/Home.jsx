import React from "react";
import Button from "../components/Button";
import Button2 from "../components/Button2";
import { motion } from "framer-motion";
import Spliter from "../components/Spliter";
import WordSpliter from "../components/WordSpliter";
import { headingVariants } from "../utils/animations";
const Home = () => {
  const heading = "A Full Stack Web";
  const subheading = "I'm Ahmad Daher!";
  const text =
    "Transforming ideas into interactive digital masterpieces. Crafting web experiences with a touch of magic.";
  const headingSpan = "Developer";
  const letters = heading.split("");
 
  return (
    <div className="relative h-cover w-full padding flex items-center justify-center text-center">
      <div className="flex flex-col  items-center justify-center text-center gap-3 w-[510px] font-jose">
        <motion.div className="text-xl text-gray-300 font-medium h-[50px] flex items-center justify-center overflow-hidden">
          <motion.p variants={headingVariants} initial="initial" animate="animate">
            {subheading}
          </motion.p>
        </motion.div>
        <div className="md:text-6xl text-[40px] font-bold h-fit overflow-hidden ">
          <Spliter text={heading} styles="h-[50px] md:h-fit" />
        </div>
        <Spliter
          text={headingSpan}
          styles="text-secondary md:text-6xl text-[40px] font-bold h-fit overflow-hidden mt-[-20px] md:mt-0"
          delay={0.9}
        />
        <p className="h-fit overflow-hidden">
          <WordSpliter text={text} delay={1.3} styles={"text-gray-300"} />
        </p>
        <div className="flex gap-3 ">
          <Button text={"Download CV"} icon={"fi fi-rr-download"} />
          <Button2
            text={"Contact Me"}
            icon={"fi fi-rr-comment-dots"}
            section={"contact"}
          />
        </div>
      </div>
      <div className=" absolute top-[20%] z-80 w-32 h-32 md:w-24 md:h-24 right-5 bg-secondary blur-3xl rounded-full"></div>
    </div>
  );
};

export default Home;
