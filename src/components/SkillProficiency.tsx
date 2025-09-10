import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SkillBar from "./SkillBar";
import RadialProgress from "./RadialProgress";
const skillCategories = ["All", "Cybersecurity", "AI/ML", "Networking", "Programming", "Systems", "DevOps", "Tools", "Security Tools"];
const skillLevels = ["All", "Beginner", "Intermediate", "Advanced", "Expert"];
const skills = [{
  name: "Network Security",
  level: 95,
  category: "Cybersecurity",
  proficiency: "Expert",
  color: "from-purple-500 to-purple-600"
}, {
  name: "Threat Analysis",
  level: 92,
  category: "Cybersecurity",
  proficiency: "Expert",
  color: "from-violet-500 to-violet-600"
}, {
  name: "Incident Response",
  level: 90,
  category: "Cybersecurity",
  proficiency: "Expert",
  color: "from-blue-500 to-blue-600"
}, {
  name: "SIEM Tools",
  level: 88,
  category: "Security Tools",
  proficiency: "Advanced",
  color: "from-cyan-500 to-cyan-600"
}, {
  name: "Penetration Testing",
  level: 85,
  category: "Security Tools",
  proficiency: "Advanced",
  color: "from-indigo-500 to-indigo-600"
}, {
  name: "Risk Assessment",
  level: 90,
  category: "Cybersecurity",
  proficiency: "Expert",
  color: "from-purple-500 to-blue-500"
}, {
  name: "Python",
  level: 95,
  category: "Programming",
  proficiency: "Expert",
  color: "from-green-500 to-green-600"
}, {
  name: "Machine Learning",
  level: 90,
  category: "AI/ML",
  proficiency: "Expert",
  color: "from-blue-500 to-cyan-500"
}, {
  name: "Deep Learning",
  level: 88,
  category: "AI/ML",
  proficiency: "Advanced",
  color: "from-violet-500 to-purple-500"
}, {
  name: "Computer Vision",
  level: 85,
  category: "AI/ML",
  proficiency: "Advanced",
  color: "from-cyan-500 to-blue-500"
}, {
  name: "TensorFlow",
  level: 87,
  category: "AI/ML",
  proficiency: "Advanced",
  color: "from-orange-500 to-red-500"
}, {
  name: "PyTorch",
  level: 82,
  category: "AI/ML",
  proficiency: "Advanced",
  color: "from-red-500 to-pink-500"
}, {
  name: "TCP/IP",
  level: 92,
  category: "Networking",
  proficiency: "Expert",
  color: "from-blue-500 to-indigo-500"
}, {
  name: "Firewall Configuration",
  level: 88,
  category: "Networking",
  proficiency: "Advanced",
  color: "from-purple-500 to-violet-500"
}, {
  name: "VPN Setup",
  level: 85,
  category: "Networking",
  proficiency: "Advanced",
  color: "from-indigo-500 to-blue-500"
}, {
  name: "JavaScript",
  level: 80,
  category: "Programming",
  proficiency: "Advanced",
  color: "from-yellow-500 to-orange-500"
}, {
  name: "React",
  level: 78,
  category: "Programming",
  proficiency: "Advanced",
  color: "from-cyan-500 to-teal-500"
}, {
  name: "Docker",
  level: 82,
  category: "DevOps",
  proficiency: "Advanced",
  color: "from-blue-500 to-cyan-500"
}, {
  name: "Kubernetes",
  level: 75,
  category: "DevOps",
  proficiency: "Intermediate",
  color: "from-purple-500 to-blue-500"
}, {
  name: "Linux Administration",
  level: 90,
  category: "Systems",
  proficiency: "Expert",
  color: "from-green-500 to-teal-500"
}, {
  name: "Windows Security",
  level: 85,
  category: "Systems",
  proficiency: "Advanced",
  color: "from-blue-500 to-purple-500"
}, {
  name: "Wireshark",
  level: 88,
  category: "Tools",
  proficiency: "Advanced",
  color: "from-cyan-500 to-blue-500"
}, {
  name: "Metasploit",
  level: 80,
  category: "Security Tools",
  proficiency: "Advanced",
  color: "from-red-500 to-orange-500"
}, {
  name: "Nmap",
  level: 85,
  category: "Security Tools",
  proficiency: "Advanced",
  color: "from-green-500 to-cyan-500"
}];
export function SkillProficiency() {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [levelFilter, setLevelFilter] = useState("All");
  const [viewType, setViewType] = useState<"bars" | "radial">("bars");
  const filteredSkills = skills.filter(skill => {
    const categoryMatch = categoryFilter === "All" || skill.category === categoryFilter;
    const levelMatch = levelFilter === "All" || skill.proficiency === levelFilter;
    return categoryMatch && levelMatch;
  });
  return <section id="skills" className="relative py-24 overflow-hidden">
      {/* Quantum Grid Background */}
      

      
    </section>;
}
export default SkillProficiency;