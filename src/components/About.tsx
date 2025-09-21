import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { Shield, Brain, Cpu, Lock, Network, Bot } from "lucide-react";
import ProfilePhoto from "@/components/ProfilePhoto";
export function About() {
  const bioRef = useRef(null);
  const bioInView = useInView(bioRef, {
    once: true
  });
  const controls = useAnimation();
  useEffect(() => {
    if (bioInView) {
      controls.start("visible");
    }
  }, [bioInView, controls]);
  const fadeInUpVariant = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };
  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: {
        duration: 0.3
      }
    }
  };

  // Animated background blobs
  const blobVariants = {
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -15, 15, 0],
      scale: [1, 1.05, 0.95, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  return <section id="about" className="min-h-screen py-24 relative overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-gradient-to-br from-red-500/20 to-blue-600/20 blur-3xl" variants={blobVariants} animate="animate" />
        <motion.div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl" variants={blobVariants} animate="animate" style={{
        animationDelay: "2s"
      }} />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center mb-16">
            <div className="flex flex-col items-center justify-center mb-8">
              <ProfilePhoto />
            </div>
          </motion.div>
          
          {/* Expertise Areas */}
          <motion.div ref={bioRef} initial="hidden" animate={controls} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Cybersecurity Card */}
            <motion.div custom={0} variants={fadeInUpVariant} className="glass-card p-8 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300" whileHover={{
            y: -5,
            boxShadow: "0 20px 40px -12px rgba(239, 68, 68, 0.25)"
          }}>
              <motion.div variants={iconVariants} whileHover="hover" className="p-4 rounded-full bg-red-500/20 w-fit mb-6">
                <Shield className="h-8 w-8 text-red-500" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-red-500">Cybersecurity Expertise</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Lock className="h-4 w-4 mr-3 text-red-400" />
                  Threat Analysis & Incident Response
                </li>
                <li className="flex items-center">
                  <Network className="h-4 w-4 mr-3 text-red-400" />
                  Network Security & Infrastructure Protection
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-3 text-red-400" />
                  Security Policy Development & Compliance
                </li>
                <li className="flex items-center">
                  <Brain className="h-4 w-4 mr-3 text-red-400" />
                  AI-Powered Security Solutions
                </li>
              </ul>
            </motion.div>

            {/* AI Engineering Card */}
            <motion.div custom={1} variants={fadeInUpVariant} className="glass-card p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300" whileHover={{
            y: -5,
            boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)"
          }}>
              <motion.div variants={iconVariants} whileHover="hover" className="p-4 rounded-full bg-blue-500/20 w-fit mb-6">
                <Brain className="h-8 w-8 text-blue-500" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-blue-500">AI Engineering</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <Cpu className="h-4 w-4 mr-3 text-blue-400" />
                  Machine Learning Model Development
                </li>
                <li className="flex items-center">
                  <Bot className="h-4 w-4 mr-3 text-blue-400" />
                  Deep Learning & Neural Networks
                </li>
                <li className="flex items-center">
                  <Brain className="h-4 w-4 mr-3 text-blue-400" />
                  Computer Vision & NLP
                </li>
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-3 text-blue-400" />
                  Secure AI Implementation
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div custom={2} variants={fadeInUpVariant} initial="hidden" animate={controls} className="text-center glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">My Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              To develop intelligent security solutions that not only protect against current threats but anticipate 
              future challenges. I believe the convergence of AI and cybersecurity is essential for building resilient 
              digital infrastructure that can adapt and evolve with emerging threats while maintaining the highest 
              standards of privacy and security.
            </p>
          </motion.div>
        </div>
      </div>
    </section>;
}
export default About;
