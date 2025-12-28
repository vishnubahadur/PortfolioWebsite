import React from "react";
import { motion } from "framer-motion";
import { skills } from "../Constants/Constant";

const Skills = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };
  return (
    <section id="skills" className="py-24">
      <div className=" mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center mb:18 max-sm:mb-16"
        >
          <span className="inline-block px-4 glass text-neo-secondary font-medium  rounded-full">
            Skills
          </span>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-10 max-sm:gap-6"
        >
            {skills.filter((items)=>items.category === "front-end").map((items) => (
              <motion.div
                variants={cardVariants}
                key={items.id}
                className="w-60 h-20 flex justify-center items-center gap-2 max-sm:h-60 rounded-2xl overflow-hidden glass transition-all duration-500"
              >
                {items.icon && <items.icon className="w-4 h-4 text-white inline-block"/>}
                <h1 className="text-white">{items.title}</h1>
               
              </motion.div>
            ))}
    
            {skills.filter((items)=>items.category === "backend").map((items) => (
              <motion.div
                variants={cardVariants}
                key={items.id}
                className="w-60 h-20 flex justify-center items-center gap-2 max-sm:h-60 rounded-2xl overflow-hidden glass transition-all duration-500"
              >
                {items.icon && <items.icon className="w-4 h-4 text-white inline-block"/>}
                <h1 className="text-white">{items.title}</h1>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
