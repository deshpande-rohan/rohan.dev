import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import HeroSection from "../Components/HeroSection";
import About from "../Components/AboutSection";
import StackSection from "../Components/StackSection";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <About />
      <StackSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
