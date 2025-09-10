
import { motion } from "framer-motion";
import { ExperienceItem, ExperienceData } from "./ExperienceItem";

// Updated experience data focusing on ML projects and professional roles only
const experiences: ExperienceData[] = [
  {
    id: 1,
    company: "Information Network Security Agency (INSA)",
    role: "Cyber Security Analyst",
    period: "Feb 2025 - Present",
    description: [
      "Conducting comprehensive threat analysis and vulnerability assessments for national digital infrastructure.",
      "Developing and implementing security policies and procedures to protect critical government systems.",
      "Leading incident response initiatives for high-priority cybersecurity threats affecting national security.",
      "Collaborating with international cybersecurity agencies to share threat intelligence and best practices.",
      "Designing AI-enhanced security monitoring systems to detect advanced persistent threats (APTs).",
      "Training government personnel on cybersecurity awareness and best practices."
    ],
    technologies: ["SIEM Tools", "Threat Intelligence", "Incident Response", "Network Security", "AI Security", "Policy Development", "Risk Assessment", "Forensics", "SOC Operations"]
  },
  {
    id: 2,
    company: "Raras Technologies PLC",
    role: "Network Engineer",
    period: "July 2023 - Sept 2023",
    description: [
      "Designed and implemented robust network infrastructure solutions for enterprise clients.",
      "Configured and maintained network security protocols including firewalls, VPNs, and intrusion detection systems.",
      "Optimized network performance and troubleshooted connectivity issues across complex network topologies.",
      "Implemented network monitoring solutions to ensure 99.9% uptime for critical business operations.",
      "Collaborated with cybersecurity teams to strengthen network defenses against emerging threats.",
      "Documented network configurations and created technical specifications for future maintenance."
    ],
    technologies: ["Cisco Technologies", "Network Security", "Firewalls", "VPN", "IDS/IPS", "Network Monitoring", "TCP/IP", "VLAN", "Routing Protocols"]
  },
  {
    id: 3,
    company: "SYNC INTERN'S",
    role: "Machine Learning Engineer Intern",
    period: "Jan 2023 - April 2023",
    description: [
      "Developed and trained machine learning models for predictive analytics and data classification tasks.",
      "Implemented computer vision algorithms for image recognition and object detection applications.",
      "Built natural language processing models for text analysis and sentiment classification.",
      "Optimized model performance through feature engineering and hyperparameter tuning.",
      "Created data preprocessing pipelines to clean and prepare datasets for machine learning workflows.",
      "Collaborated with senior engineers to deploy ML models in production environments."
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Computer Vision", "NLP", "Data Preprocessing", "Model Optimization", "MLOps"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-secondary/30 backdrop-blur-sm">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through cybersecurity, AI engineering, and network infrastructure, 
            building expertise that bridges multiple critical technology domains.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              experience={exp} 
              isLast={index === experiences.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
