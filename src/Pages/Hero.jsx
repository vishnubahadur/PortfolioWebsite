import Navbar from "./Navbar";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import robotHi from "../assets/robotHi.json";
import atom from "../assets/atom.png"
import js from "../assets/js.png"

const Hero = () => {
  return (
    <div className="min-h-screen ">
      <motion.div
        id="home"
        className="flex flex-row justify-between items-center h-screen px-4  max-sm:w-full max-sm:flex-row flex-wrap-reverse"
      >
        <div className="w-1/2 flex flex-col justify-center px-26 max-sm:px-4 max-sm:w-full ">
          <h1 className="text-4xl text-white  sm:text-5xl md:text-6xl font-bold mb-4">
            Coding What I Can Visualize — Building What You Can Experience.
          </h1>
          <p className="text-gray-300 text-xl max-sm:text-sm">
            Hey! I’m Vishnu Bahadur, a MERN stack developer who loves creating
            websites you can feel, use, and enjoy. For me, coding isn’t just
            logic — it’s making ideas visible.
          </p>
        </div>

        <div className="w-1/2  relative flex justify-center  bg-neo-primary/40 border-b-2 shadow-2xl shadow-neo-primary/50 rounded-full max-sm:mt-24 max-sm:ml-25">
          <Lottie
            className="inline-block w-sm" 
            animationData={robotHi}
            loop={true}
          />
          <img src={atom} alt="" className="w-20 h-20 animate-bounce absolute top-24 left-35 inline-block max-sm:text-3xl max-sm:hidden"/>
          <img src={js} alt="" className="w-20 h-20 animate-float absolute bottom-24 right-35 inline-block max-sm:text-3xl max-sm:hidden"/>
         
          
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
