import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { projects } from "../Constants/Constant";
import { hover, motion, propEffect } from "framer-motion";
import { GiDuration } from "react-icons/gi";
import { Progress } from "@react-three/drei";

const Projects = () => {
  const containerVariants = {
    hidde: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, transition: { duration: 0.2} },
  };

  const linkVariants = {
    hover: { x: 6, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.06,
      transition: { type: "spring", stiffness: 200 },
    },
  };

  return (
    <section id="work" className="py-24">
      <div className=" mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-center mb:18 max-sm:mb-16"
        >
          <span className="inline-block px-4 glass text-neo-secondary font-medium  rounded-full">
            Selected Work
          </span>
          <h2 className="gradient-text font-extrabold text-4xl py-4">Innovative Projects </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-10 max-sm:gap-6"
        >
          {projects.map((item) => (
            
            <motion.div
              variants={cardVariants}
              key={item.id}
              className="w-120 h-100 max-sm:h-60 rounded-2xl overflow-hidden glass transition-all duration-500"
            >
              <motion.img
                
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover z-10"
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.8 }}
              />
              <motion.div 
        
                className="absolute bottom-0 p-10 max-sm:p-2 w-full bg-neo-dark"
              >
                <span className="rounded-full border-2 border-amber-50 px-2 bg-neo-primary">{item.category}</span>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                
              </motion.div>

            </motion.div>


          ))}
        </motion.div>
        
      </div>
      
    </section>
  );
};

export default Projects;
