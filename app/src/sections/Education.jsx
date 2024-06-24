import React from "react";
import EducationCard from "../components/EducationCard";
import img2 from "../imgs/img2.jpg";
import { fadeInLeft, fadeInRight, parentVariant } from "../utils/animations";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-3 padding overflow-x-hidden">
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold uppercase  flex text-left w-full mb-3 mt-8 md:mt-0"
      >
        Education
      </motion.h1>
      <div className="flex flex-wrap gap-3">
        <motion.div variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true,amount:0.125 }} className="rounded-xl overflow-hidden md:w-[30%] h-[180px] md:h-[380px] w-full relative">
          <motion.img
            src={img2}
            alt="image"
            className="w-full md:w-full md:h-full h-full object-cover"
          />
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />
        </motion.div>
        <div className="md:w-[68%] w-full flex flex-wrap gap-3">
          <motion.div
            className="w-full"
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
          >
            <EducationCard
              title={"Pursuing a Bachelor in Computer Science"}
              location={"Beirut Arab University"}
              date={"Sep 2022 - present"}
              desc={
                "Currently pursuing a comprehensive curriculum in Computer Science,including courses in data structures and algorithms ,software engineering ,database managment etc ...,Worked on several projects including web apps and data  structures event managment etc.."
              }
            />
          </motion.div>
          <motion.div
            variants={parentVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.125 }}
            className="w-full"
          >
            <EducationCard
              title={"Web Development Bootcamp from Colt Steele"}
              location={"Coursera"}
              date={"Oct 2023 - Feb 2024"}
              desc={
                "Completed a full stack web development course including html,css,javascript,ejs,mongodb,express,react,etc..."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
