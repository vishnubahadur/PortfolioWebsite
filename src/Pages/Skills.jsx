import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div id="skills" className="h-screen py-24">
      <motion.div className="text-center">
        <span>
          <h1 className="text-xl font-extrabold  rounded-full px-3 py-1 bg-neo-primary inline-block">
            Technical Expertise
          </h1>
        </span>
        <h1 className="text-4xl gradient-text font-extrabold py-3">My Skills</h1>

      </motion.div> 
    </div>
  );
};

export default Skills;
