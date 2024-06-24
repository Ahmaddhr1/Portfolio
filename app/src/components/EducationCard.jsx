import React from "react";
import { fadeInRight } from "../utils/animations";
import { motion } from "framer-motion";

const EducationCard = ({title,location,date,desc}) => {
  return (
    <motion.div variants={fadeInRight} className="flex flex-col gap-4  w-full padding border border-gray-800 rounded-lg">
      <div className="flex flex-col w-full">
        <h1 className="font-semibold text-2xl">{title}</h1>
        <h3 className="font-semibold">{location}</h3>
        <h3 className="text-gray-300">{date}</h3>
      </div>
      <p className="w-full text-gray-300">
       {desc}
      </p>
    </motion.div>
  );
};

export default EducationCard;
