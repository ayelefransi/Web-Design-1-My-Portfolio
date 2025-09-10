
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, BarChart, Brain, Code, FileCode, Gauge, Settings, SlidersHorizontal, ChevronDown, ChevronUp, Shield, Lock, Network, Cpu, Zap, Eye } from "lucide-react";
import { TechnicalSkillBar } from "@/components/SkillBar";
import RadialProgress from "@/components/RadialProgress";

interface Skill {
  name: string;
  level: number;
  category?: string;
  icon?: React.ElementType;
  color?: string;
}

const skills: Skill[] = [
  // Cybersecurity Skills
  {
    name: "Network Security",
    level: 95,
    category: "Cybersecurity",
    icon: Shield
  }, 
  {
    name: "Threat Analysis",
    level: 92,
    category: "Cybersecurity",
    icon: Brain
  }, 
  {
    name: "Incident Response",
    level: 90,
    category: "Cybersecurity",
    icon: Shield
  }, 
  {
    name: "SIEM Tools",
    level: 88,
    category: "Cybersecurity",
    icon: Settings
  },
  {
    name: "Penetration Testing",
    level: 85,
    category: "Cybersecurity",
    icon: Lock
  },
  {
    name: "Risk Assessment",
    level: 90,
    category: "Cybersecurity",
    icon: FileCode
  },
  
  // AI/ML Skills
  {
    name: "Python",
    level: 95,
    category: "Programming",
    icon: Code
  }, 
  {
    name: "Machine Learning",
    level: 90,
    category: "AI/ML",
    icon: Brain
  }, 
  {
    name: "TensorFlow",
    level: 88,
    category: "AI/ML",
    icon: Brain
  }, 
  {
    name: "PyTorch",
    level: 85,
    category: "AI/ML",
    icon: Brain
  }, 
  {
    name: "Computer Vision",
    level: 87,
    category: "AI/ML",
    icon: Eye
  }, 
  {
    name: "Natural Language Processing",
    level: 83,
    category: "AI/ML",
    icon: FileCode
  },
  
  // Network Engineering
  {
    name: "Cisco Technologies",
    level: 88,
    category: "Networking",
    icon: Network
  }, 
  {
    name: "Network Protocols",
    level: 92,
    category: "Networking",
    icon: Network
  }, 
  {
    name: "Firewall Configuration",
    level: 90,
    category: "Networking",
    icon: Shield
  }, 
  
  // Programming & Tools
  {
    name: "Linux/Unix",
    level: 90,
    category: "Systems",
    icon: Code
  }, 
  {
    name: "Docker",
    level: 80,
    category: "DevOps",
    icon: Settings
  }, 
  {
    name: "Git/GitHub",
    level: 85,
    category: "Tools",
    icon: Code
  },
  
  // Security Tools
  {
    name: "Wireshark",
    level: 88,
    category: "Security Tools",
    icon: Network
  },
  {
    name: "Metasploit",
    level: 82,
    category: "Security Tools",
    icon: Lock
  },
  {
    name: "Nmap",
    level: 90,
    category: "Security Tools",
    icon: Network
  }
];

type SkillCategory = "All" | "Cybersecurity" | "AI/ML" | "Networking" | "Programming" | "Systems" | "DevOps" | "Tools" | "Security Tools";
type SkillLevel = "All" | "Beginner" | "Intermediate" | "Advanced";

export function TechnicalOverview() {
  const [category, setCategory] = useState<SkillCategory>("All");
  const [skillLevel, setSkillLevel] = useState<SkillLevel>("All");
  const [displayMode, setDisplayMode] = useState<"bars" | "radial">("bars");
  const [showAllSkills, setShowAllSkills] = useState(false);
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, {
    once: true
  });

  // Filter skills based on category and level
  const filteredSkills = skills.filter(skill => {
    const categoryMatch = category === "All" || skill.category === category;
    if (skillLevel === "All") return categoryMatch;
    if (skillLevel === "Beginner" && skill.level < 75) return categoryMatch;
    if (skillLevel === "Intermediate" && skill.level >= 75 && skill.level < 85) return categoryMatch;
    if (skillLevel === "Advanced" && skill.level >= 85) return categoryMatch;
    return false;
  });

  // Determine which skills to actually display
  const visibleSkills = showAllSkills ? filteredSkills : filteredSkills.slice(0, 6);
  const categories: SkillCategory[] = ["All", "Cybersecurity", "AI/ML", "Networking", "Programming", "Systems", "DevOps", "Tools", "Security Tools"];
  const levels: SkillLevel[] = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <section id="technical-overview" className="py-20 relative overflow-hidden">
      {/* Advanced background with multiple animated layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-violet-500/8 blur-[80px]"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <Zap className="w-6 h-6 text-purple-400" />
            <span className="text-sm font-medium text-purple-300 tracking-wider uppercase">
              Technical Proficiency
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-cyan-100 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Advanced Expertise
          </motion.h2>
          
          <motion.p 
            className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive mastery across cybersecurity, artificial intelligence, 
            network engineering, and cutting-edge software development technologies.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, index) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button 
                  variant={category === cat ? "default" : "outline"} 
                  size="sm" 
                  onClick={() => setCategory(cat)} 
                  className={`
                    relative rounded-full px-6 py-2 font-medium transition-all duration-300
                    ${category === cat 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25 border-0' 
                      : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-purple-500/50 hover:text-white'
                    }
                    backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20
                  `}
                >
                  {cat}
                  {category === cat && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-sm"
                      layoutId="activeCategory"
                    />
                  )}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Level Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {levels.map((level, index) => (
              <motion.div
                key={level}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Button 
                  variant={skillLevel === level ? "secondary" : "ghost"} 
                  size="sm" 
                  onClick={() => setSkillLevel(level)} 
                  className={`
                    rounded-full px-4 py-2 font-medium transition-all duration-300
                    ${skillLevel === level 
                      ? 'bg-slate-700/80 text-cyan-300 shadow-md border-cyan-500/30' 
                      : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50'
                    }
                    backdrop-blur-sm hover:scale-105
                  `}
                >
                  {level}
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Display Mode Toggle */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-flex rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-1">
            <Button 
              variant={displayMode === "bars" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setDisplayMode("bars")} 
              className={`
                rounded-xl px-6 py-3 font-medium transition-all duration-300
                ${displayMode === "bars"
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }
              `}
            >
              <BarChart className="mr-2 h-4 w-4" />
              Skill Bars
            </Button>
            <Button 
              variant={displayMode === "radial" ? "default" : "ghost"} 
              size="sm" 
              onClick={() => setDisplayMode("radial")} 
              className={`
                rounded-xl px-6 py-3 font-medium transition-all duration-300
                ${displayMode === "radial"
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                }
              `}
            >
              <Gauge className="mr-2 h-4 w-4" />
              Radial Meters
            </Button>
          </div>
        </motion.div>

        <motion.div 
          ref={skillsRef} 
          initial={{ opacity: 0 }} 
          animate={skillsInView ? { opacity: 1, x: 0 } : {}} 
          transition={{ duration: 0.8, delay: 1 }} 
          className="grid grid-cols-1 gap-12"
        >
          {displayMode === "bars" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
              <Card className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10" />
                <CardContent className="relative p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Technical Mastery Overview
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    {visibleSkills.map((skill, index) => (
                      <TechnicalSkillBar key={skill.name} skill={skill} index={index} />
                    ))}

                    {filteredSkills.length === 0 && (
                      <div className="text-center py-16">
                        <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-4">
                          <FileCode className="w-8 h-8 text-slate-400" />
                        </div>
                        <p className="text-slate-400 text-lg">
                          No skills match the selected filters
                        </p>
                      </div>
                    )}
                  </div>

                  {/* View More/Less Button */}
                  {filteredSkills.length > 6 && (
                    <motion.div 
                      className="mt-12 flex justify-center" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      transition={{ delay: 1.5 }}
                    >
                      <Button 
                        variant="outline" 
                        onClick={() => setShowAllSkills(!showAllSkills)} 
                        className="group relative rounded-full px-8 py-3 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                      >
                        <div className="flex items-center gap-2">
                          {showAllSkills ? (
                            <>
                              Show Less
                              <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                            </>
                          ) : (
                            <>
                              View More Skills
                              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                            </>
                          )}
                        </div>
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {displayMode === "radial" && (
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                {visibleSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <RadialProgress 
                      name={skill.name}
                      level={skill.level}
                    />
                  </motion.div>
                ))}

                {filteredSkills.length === 0 && (
                  <div className="col-span-full text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mx-auto mb-4">
                      <FileCode className="w-8 h-8 text-slate-400" />
                    </div>
                    <p className="text-slate-400 text-lg">
                      No skills match the selected filters
                    </p>
                  </div>
                )}
              </div>
              
              {/* View More/Less Button */}
              {filteredSkills.length > 6 && (
                <motion.div 
                  className="flex justify-center" 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ delay: 1.5 }}
                >
                  <Button 
                    variant="outline" 
                    onClick={() => setShowAllSkills(!showAllSkills)} 
                    className="group relative rounded-full px-8 py-3 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      {showAllSkills ? (
                        <>
                          Show Less
                          <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                        </>
                      ) : (
                        <>
                          View More Skills
                          <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                        </>
                      )}
                    </div>
                  </Button>
                </motion.div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default TechnicalOverview;
