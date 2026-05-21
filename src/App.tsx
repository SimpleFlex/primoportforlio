import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useMouseGlow } from './hooks/useMouseGlow';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

const App: React.FC = () => {
  const glowRef = useMouseGlow();
  useRevealOnScroll();

  return (
    <div className="dark">
      <div ref={glowRef} className="mouse-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
