import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Projects />
      <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}

export default App;
