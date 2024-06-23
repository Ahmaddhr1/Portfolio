import React, { useState } from "react";
import { skillsTabs } from "../utils/tabs";
import { motion } from "framer-motion";
import { techStack } from "../utils/skillsIutil";
import { tools } from "../utils/skillsIutil";
import TechTools from "../components/techTools";
import { fadeInLeft, fadeInRight } from "../utils/animations";
import img from "../imgs/img1.jpeg";

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full min-h-[70vh] padding flex flex-col md:flex-row gap-6 font-outfit mb-20 overflow-x-hidden">
      <div className="flex flex-wrap flex-col gap-4 flex-1 ">
        <motion.div className="flex flex-col gap-3 justify-center md:w-[500px] w-full h-fit ">
          <motion.h1
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold font-jose"
          >
            Skills
          </motion.h1>
          <motion.p
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-gray-300 "
          >
            As a passionate web developer, I am proficient in a diverse range of
            technologies and tools that empower me to build dynamic, responsive,
            and user-friendly web applications.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex gap-3 w-fit font-outfit bg-darkpurple rounded-tl-lg rounded-tr-lg"
        >
          {skillsTabs.map((tab, i) => (
            <motion.div
              className="relative cursor-pointer"
              onClick={() => setActiveTab(i)}
            >
              <motion.div key={i} className="px-3 py-2">
                {tab.title}
              </motion.div>
              {activeTab === i && (
                <motion.div
                  layoutId="skilltabs"
                  className="absolute top-[93%] left-0 bg-secondary w-full h-[3px]"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        {activeTab === 0 ? (
          <TechTools key="techStack" arr={techStack} />
        ) : (
          <TechTools key="tools" arr={tools} />
        )}
      </div>
      <motion.div className="rounded-xl overflow-hidden md:w-[50%] relative">
        <motion.img
          src={img}
          alt="image"
          variants={fadeInRight}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full md:w-full md:h-[400px] h-[200px] object-cover"
        />
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Skills;
