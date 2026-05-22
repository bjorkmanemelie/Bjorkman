import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import Skills from "./components/Skills";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Projects />
      <Skills />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
