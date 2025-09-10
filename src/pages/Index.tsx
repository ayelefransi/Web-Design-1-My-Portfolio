
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillProficiency from "@/components/SkillProficiency";
import TechnicalOverview from "@/components/TechnicalOverview";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import LoadingScreen from "@/components/LoadingScreen";
import useTheme from "@/hooks/useTheme";

const Index = () => {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Initialize theme on page load and handle loading
  useEffect(() => {
    console.log("Current theme:", theme);
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div className="relative min-h-screen">
      <LoadingScreen isLoading={isLoading} />
      {!isLoading && (
        <>
          <ParticleBackground />
          <Navbar />
          <Hero />
          <About />
          <SkillProficiency />
          <TechnicalOverview />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
