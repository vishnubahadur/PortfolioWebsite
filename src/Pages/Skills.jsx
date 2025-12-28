import React from "react";
import { motion } from "framer-motion";
import { skills } from "../Constants/Constant";
import { div } from "framer-motion/client";

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

      <div className="mt-10 text-center">
        <h1>Front-end</h1>
        <motion.div 
        className="flex justify-center items-start gap-5 mt-3 max-sm:flex-col max-sm:gap-2 max-sm:items-center max-sm:justify-center"
        >
          {skills.map((items)=>(
      
              <div className="p-2 rounded-2xl bg-neo-primary flex justify-center items-end pb-2 max-sm:text-sm">
                <h1 className="text-white">{items.title}</h1>
           </div>
           
          ))}
        </motion.div>
      </div>
                 
              
    </div>
  );
};

export default Skills;
