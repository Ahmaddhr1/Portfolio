import React from "react";
import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

const ProjectCard = ({
  img,
  heading,
  title,
  languages = [],
  demoHref,
  githubHref,
}) => {
  return (
    <motion.div
      variants={fadeInLeft}
      className="flex flex-col gap-2 items-center w-full"
    >
      <motion.div className="md:w-full md:flex-row md:min-h-[180px] sm:w-full rounded-lg flex flex-col gap-3 items-left font-outfit p-2 border border-gray-800">
        <div className="md:w-[250px] h-[220px] w-full rounded-lg overflow-hidden">
          <img src={img} alt="image" className="w-full object-cover h-full" />
        </div>
        <motion.div className="flex flex-col gap-5 h-full justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-semibold">{title}</h1>
            <div className="flex gap-1 flex-wrap">
              {languages.map((lang, i) => (
                <p
                  key={i}
                  className="text-outfit px-1 py-1 bg-gray-800 w-fit rounded-md"
                >
                  {lang}
                </p>
              ))}
            </div>
          </div>
          <p className="text-outfit text-lg text-gray-300">{heading}</p>
          <div className="flex gap-2 flex-wrap">
            <a href={demoHref} className="btn-primary">
              <i className="fi fi-rr-site-alt flex items-center "></i>
              <span>Live demo</span>
            </a>
            <a href={githubHref} className="btn-secondary">
              <i class="fi fi-brands-github flex items-center"></i>
              <span>Github repository</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
