import React, { useEffect } from "react";
import { initTheme } from "./Utils/theme";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact"
import About from "./Pages/About"


const App = () => {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <div className="min-h-screen grid-pattern">
    <Navbar/>
     <Hero/>
     <Projects/>
     <Skills/>
     <About/>
     <Contact/>
    </div>
  );
};

export default App;
