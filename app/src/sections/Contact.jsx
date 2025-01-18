import React from "react";
import { socialMediaLinks } from "../utils/tabs";
import { motion } from "framer-motion";
import { fadeInLeft } from "../utils/animations";

const Contact = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col gap-6 padding overflow-x-hidden">
      <motion.div
        variants={fadeInLeft}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="w-full md:w-fit flex flex-col gap-9 justify-center items-left px-9 py-10 border rounded-lg border-gray-800 backdrop-blur-xl "
      >
        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold font-jose">Keep In Touch!</h1>
          <p className="font-semibold font-outfit text-lg text-gray-300">
            Let's Talk
          </p>
        </div>
        <div className="flex gap-4 flex-wrap items-start justify-start">
  {socialMediaLinks.map((link, i) => (
    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
      <i
        className={
          link.icon + " text-4xl hover:text-secondary duration-200 mr-3"
        }
      ></i>
    </a>
  ))}
  <a href="mailto:ahmaddaherr004@gmail.com" target="_blank" rel="noopener noreferrer">
    <i className="fi fi-rr-envelope text-4xl hover:text-secondary duration-200"></i>
  </a>
</div>

        <a
          className="btn-primary justify-center"
          href="/Ahmad Daher CV.pdf"
          download
        >
          <i className="fi fi-rr-eye flex items-center "></i>
          <p>Download CV</p>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
