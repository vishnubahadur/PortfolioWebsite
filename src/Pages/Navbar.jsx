import { React, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "../Constants/Constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Background from "three/src/renderers/common/Background.js";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -25, opacity: 0, backdropFilter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed w-full z-50 shadow-xl bg-neo-dark "
  
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-4 ">
        <div className="flex items-center justify-between h-16">
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-white cursor-pointer max-sm:px-2"
          >
            <a href="home"> Vishnu Bahadur</a>
          </motion.span>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className=" dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 focus:outline-none max-sm:m-2">
              {mobileMenuOpen ? <ImCross/> : <GiHamburgerMenu/> }
            </button> 
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neo-dark px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col  items-center h-screen">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={()=> setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-2xl font-medium dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
