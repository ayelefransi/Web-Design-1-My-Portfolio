
import React from "react";
import { motion } from "framer-motion";
import RadialProgress from "./RadialProgress";

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  category?: string;
  proficiency?: string;
  viewType?: "bars" | "radial";
}

export function SkillBar({ 
  name, 
  level, 
  color, 
  category, 
  proficiency,
  viewType = "bars" 
}: SkillBarProps) {
  if (viewType === "radial") {
    return (
      <motion.div 
        className="glass-card p-6 rounded-xl hover-card-animation group"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
                {category}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {proficiency} • {level}% proficiency
            </p>
          </div>
          <div className="ml-6">
            <RadialProgress 
              name={name}
              level={level}
              proficiency={proficiency}
            />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="glass-card p-6 rounded-xl hover-card-animation group skill-bar-glow"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        <div className="flex items-center gap-2">
          {proficiency && (
            <span className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
              {proficiency}
            </span>
          )}
          <span className="text-sm font-bold text-primary">
            {level}%
          </span>
        </div>
      </div>
      
      {category && (
        <p className="text-xs text-muted-foreground mb-3">
          {category}
        </p>
      )}
      
      <div className="w-full bg-secondary/30 rounded-full h-3 overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Modern TechnicalSkillBar component with glassmorphism and neon effects
interface TechnicalSkillBarProps {
  skill: {
    name: string;
    level: number;
    category?: string;
    icon?: React.ElementType;
    color?: string;
  };
  index: number;
}

export function TechnicalSkillBar({ skill, index }: TechnicalSkillBarProps) {
  const Icon = skill.icon;
  
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main container */}
      <div className="relative flex items-center justify-between p-6 rounded-2xl bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300">
        <div className="flex items-center gap-4">
          {/* Icon container */}
          {Icon && (
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center border border-slate-600/30 group-hover:border-purple-500/50 transition-all duration-300">
              <Icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
            </div>
          )}
          
          {/* Skill info */}
          <div>
            <h4 className="font-semibold text-white text-lg group-hover:text-purple-100 transition-colors duration-300">
              {skill.name}
            </h4>
            {skill.category && (
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-3 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30">
                  {skill.category}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Progress section */}
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text min-w-[4rem] text-right">
            {skill.level}%
          </span>
          
          {/* Progress bar */}
          <div className="relative w-32 h-3 bg-slate-700/50 rounded-full overflow-hidden border border-slate-600/30">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-cyan-400 rounded-full relative"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </motion.div>
            
            {/* Glow overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-full blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300"
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SkillBar;
