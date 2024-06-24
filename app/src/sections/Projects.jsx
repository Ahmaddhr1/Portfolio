import React from "react";
import ProjectCard from "../components/ProjectCard";
import noteImg from "../imgs/noteapp.png";
import youtubeImg from "../imgs/youtubeclone.png";
import { motion } from "framer-motion";
import { fadeInLeft, parentVariant } from "../utils/animations";
const Projects = () => {
  return (
    <div className="min-h-screen padding flex items-center justify-center flex-wrap w-full flex-col gap-4 overflow-x-hidden">
      <motion.h1
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl font-bold uppercase w-full text-left"
      >
        Projects
      </motion.h1>
      <motion.div
        variants={parentVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.125 }}
        className="flex flex-wrap w-full gap-3 flex-col md:flex-row"
      >
        <ProjectCard
          img={noteImg}
          title={"Note It"}
          heading={
            "A MERN stack web app for saving notes including Google authentication and CRUD operations"
          }
          languages={[
            "React",
            "MongoDB",
            "ExpressJS",
            "Firebase",
            "TailwindCSS",
          ]}
          demoHref={"https://noteit-ahmad.vercel.app/"}
          githubHref={"https://github.com/Ahmaddhr1/MERN-Note-Application"}
        />
        <motion.div
          variants={parentVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.125 }}
          className="flex flex-wrap w-full gap-3 flex-col md:flex-row"
        >
          <ProjectCard
            img={youtubeImg}
            title={"Youtube Clone"}
            heading={"React youtube clone using youtube-v3 from Rapid API"}
            languages={["React", "TailwindCSS"]}
            demoHref={"https://yt-ahmad.vercel.app/"}
            githubHref={"https://github.com/Ahmaddhr1/Youtube_Clone"}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
