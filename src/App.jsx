import React, { useEffect } from "react";
import { initTheme } from "./Utils/theme";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects"
import Skills from "./Pages/Skills";


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
    </div>
  );
};

export default App;
