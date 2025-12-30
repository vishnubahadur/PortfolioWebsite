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
    <section id="skills" className="py-24 max-sm:py-0">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl text-center mx-auto">
        <h2 className="text-3xl gradient-text font-extrabold mb-5 rounded-full glass inline-block px-5 py-2 max-sm:text-xl">
          Technical Skills
        </h2>
        <h1 className="text-2xl font-bold">My Skills</h1>
      </div>
      <motion.div
        variants={containerVariants}
        inital="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="flex justify-center items-center gap-15 max-sm:flex-col mt-10 px-5 max-sm:gap-5"
      >
        <div className="flex flex-col glass w-[30vw] px-10 py-8 rounded-2xl max-sm:w-full max-sm:m-0">
          <h1 className="text-2xl gradient-text inline-block font-extrabold mb-5">Front-end</h1>
          <div>
            {skills
              .filter((skill) => skill.category === "front-end")
              .map((skill, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <progress value={skill.progress} max={100} className="w-full h-1" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        <div className="flex flex-col glass w-[30vw] px-10 py-8 rounded-2xl max-sm:w-full max-sm:m-0 ">
          <h1 className="text-2xl gradient-text inline-block font-extrabold mb-5">Backend</h1>
          <div>
            {skills
              .filter((skill) => skill.category === "backend")
              .map((skill, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <progress value={skill.progress} max={100} className="w-full h-1" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
