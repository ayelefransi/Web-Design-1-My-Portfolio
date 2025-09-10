
import { useState } from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface ExperienceData {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  logo?: string;
}

interface ExperienceItemProps {
  experience: ExperienceData;
  isLast: boolean;
  index: number;
}

export function ExperienceItem({ experience, isLast, index }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Animation variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      y: 0 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Dot animation variants
  const dotVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1, 
      transition: {
        delay: index * 0.2 + 0.3,
        duration: 0.4,
        type: "spring",
        stiffness: 200
      }
    }
  };

  // Line animation variants
  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: "100%",
      transition: {
        delay: index * 0.2 + 0.5,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Text reveal animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2 + 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Pulse animation for the dot
  const pulseVariants = {
    pulse: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative pl-8 sm:pl-12 py-6 group">
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center absolute left-0 top-0 h-full">
        <motion.div 
          className="h-6 w-6 rounded-full bg-gradient-to-br from-ml-purple to-ml-cyan flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300"
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="h-3 w-3 rounded-full bg-background"
            variants={pulseVariants}
            animate="pulse"
          />
        </motion.div>
        
        {!isLast && (
          <motion.div 
            className="h-full w-0.5 bg-gradient-to-b from-ml-purple/80 via-ml-indigo/40 to-ml-cyan/10"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        )}
      </div>

      {/* Content */}
      <motion.div 
        className="glass-card p-5 rounded-xl transition-all duration-300 backdrop-blur-lg border border-white/10"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      >
        <div className="flex items-center justify-between mb-3">
          <motion.div custom={0} variants={textVariants} initial="hidden" animate="visible">
            <h3 className="text-lg font-bold text-foreground">{experience.role}</h3>
            <h4 className="text-md font-medium gradient-text">{experience.company}</h4>
          </motion.div>
          
          <motion.span 
            custom={1}
            variants={textVariants} 
            initial="hidden" 
            animate="visible"
            className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full"
          >
            {experience.period}
          </motion.span>
        </div>

        <motion.div 
          className={`transition-all duration-500 ${!isExpanded ? "max-h-24 overflow-hidden relative" : "max-h-[1000px]"}`}
        >
          {experience.description.map((point, idx) => (
            <motion.p 
              key={idx} 
              custom={idx + 2}
              variants={textVariants} 
              initial="hidden" 
              animate="visible"
              className="text-sm text-muted-foreground mb-2 flex items-start"
            >
              <span className="text-ml-indigo mr-2 text-lg leading-none">•</span> 
              <span>{point}</span>
            </motion.p>
          ))}
          
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
          )}
        </motion.div>

        <div className="mt-4 flex justify-between items-center">
          <motion.button 
            custom={experience.description.length + 2}
            variants={textVariants} 
            initial="hidden" 
            animate="visible"
            className="text-sm text-ml-indigo hover:text-ml-indigo/80 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </motion.button>
          
          <motion.div 
            custom={experience.description.length + 3}
            variants={textVariants} 
            initial="hidden" 
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {experience.technologies.slice(0, 3).map((tech, idx) => (
              <HoverCard key={idx}>
                <HoverCardTrigger asChild>
                  <span 
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground cursor-pointer hover:bg-secondary transition-colors"
                  >
                    {tech}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{tech}</h4>
                      <p className="text-sm">
                        Used for {experience.company}'s {experience.role.toLowerCase()} projects.
                      </p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
            {experience.technologies.length > 3 && (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span 
                    className="text-xs px-2 py-0.5 rounded-full bg-secondary/50 text-secondary-foreground cursor-pointer hover:bg-secondary transition-colors"
                  >
                    +{experience.technologies.length - 3}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Additional Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.slice(3).map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-secondary/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default ExperienceItem;
