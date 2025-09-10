
import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RadialProgressProps {
  name: string;
  level: number;
  category?: string;
  proficiency?: string;
  color?: string;
}

const RadialProgress = ({ name, level, category, proficiency, color }: RadialProgressProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  // Calculate the stroke dash offset for the progress indicator
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
      className="flex flex-col items-center justify-center group"
      whileHover={{
        scale: 1.05,
        y: -5
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Container with glassmorphism effect */}
      <div className="relative p-4">
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Main circle container */}
        <div className="relative w-32 h-32 flex items-center justify-center bg-slate-800/60 backdrop-blur-xl rounded-full border border-slate-700/50 group-hover:border-purple-500/30 transition-all duration-300">
          {/* Background pattern */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-700/30 to-slate-800/30" />
          
          {/* SVG Progress Circle */}
          <svg className="w-28 h-28 absolute" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke="currentColor"
              strokeWidth="4"
              className="text-slate-700/50"
            />
            
            {/* Progress Circle */}
            <motion.circle
              cx="50"
              cy="50"
              r={radius}
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray={circumference}
              initial={{
                strokeDashoffset: circumference
              }}
              animate={{
                strokeDashoffset: progressOffset
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
                ease: "easeOut"
              }}
              strokeLinecap="round"
              className="rotate-[-90deg] origin-center drop-shadow-lg"
            />
            
            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" /> {/* purple-500 */}
                <stop offset="50%" stopColor="#A855F7" /> {/* purple-500 */}
                <stop offset="100%" stopColor="#06B6D4" /> {/* cyan-500 */}
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
          </svg>

          {/* Percentage Text */}
          <motion.div
            className="relative z-10 flex flex-col items-center justify-center"
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.8,
              duration: 0.4
            }}
          >
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">
              {level}%
            </span>
          </motion.div>
          
          {/* Subtle inner glow */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-purple-500/5 to-cyan-500/5 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
        </div>
      </div>
      
      {/* Label */}
      <motion.div
        className="mt-3 text-center max-w-[120px]"
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 1,
          duration: 0.4
        }}
      >
        <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300 leading-tight">
          {name}
        </span>
        {proficiency && (
          <div className="text-xs text-cyan-400 mt-1">{proficiency}</div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default RadialProgress;
