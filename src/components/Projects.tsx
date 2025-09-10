
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectCard, ProjectData } from "./ProjectCard";

// Updated projects data with only the requested projects
const projects: ProjectData[] = [
  {
    id: 1,
    title: "Brain Tumor Detection System",
    description: "Medical image segmentation system using U-Net and ResNet-50 to localize brain tumors from MRI scans.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3",
    tags: ["Deep Learning", "Medical AI", "Computer Vision", "U-Net", "ResNet-50"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    fullDescription: "Advanced medical image segmentation system combining U-Net architecture with ResNet-50 backbone for precise brain tumor detection and localization from MRI scans. Features real-time processing capabilities, comprehensive image preprocessing pipelines, and Dice Score evaluation metrics for accuracy assessment.",
    techStack: ["Python", "TensorFlow", "OpenCV", "U-Net", "ResNet-50", "Medical Imaging", "NumPy", "Matplotlib"],
    highlights: ["Real-time processing", "Dice Score evaluation", "Image preprocessing pipeline", "Medical-grade accuracy"],
    videoUrl: "https://drive.google.com/file/d/1-TeXjHB5KjCgqaj72SZPF7IwSEopHjqt/view?usp=sharing"
  },
  {
    id: 2,
    title: "Plant Disease Detection System", 
    description: "Deep learning model for classifying crop diseases from leaf images using CNN.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3",
    tags: ["CNN", "Agriculture", "Classification", "Deep Learning"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    fullDescription: "Comprehensive plant disease detection system using convolutional neural networks to identify and classify various crop diseases from leaf images. Features robust data augmentation techniques, high classification accuracy, and deployable interface built with Streamlit for real-world agricultural applications.",
    techStack: ["TensorFlow", "Keras", "Streamlit", "CNN", "Data Augmentation", "Python", "Image Processing"],
    highlights: ["Data augmentation", "Classification accuracy", "Deployable via Streamlit", "Agricultural applications"]
  },
  {
    id: 3,
    title: "Sign Language Classification System",
    description: "Real-time hand gesture recognition system converting sign language to readable text.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3",
    tags: ["Computer Vision", "Real-time", "Gesture Recognition", "Accessibility"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.example.com",
    fullDescription: "Real-time sign language classification system that uses computer vision and deep learning to recognize hand gestures through webcam input. Features live webcam detection, fast CNN inference for real-time processing, and accessibility-focused design to help bridge communication gaps.",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNN", "Real-time Processing", "Webcam Integration", "MediaPipe"],
    highlights: ["Live webcam detection", "Fast CNN inference", "Accessibility-focused", "Real-time text conversion"]
  }
];

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [filter, setFilter] = useState("All");

  const categories = [
    "All", 
    "Deep Learning", 
    "Computer Vision", 
    "Medical AI",
    "Agriculture",
    "Accessibility",
    "Real-time",
    "Classification"
  ];

  const filteredProjects = projects.filter(project => 
    filter === "All" || project.tags.some(tag => tag.includes(filter))
  );

  const handleShowMore = () => {
    setVisibleProjects(Math.min(visibleProjects + 3, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Advanced animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-500/8 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/8 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-purple-500/6 blur-[80px] animate-pulse" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-violet-300 tracking-wider uppercase">
              Featured Work
            </span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-100 to-cyan-100 text-transparent bg-clip-text">
            Innovative Projects
          </h2>
          
          <p className="text-slate-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Explore my portfolio of cutting-edge AI, machine learning, and computer vision projects 
            that address real-world challenges with advanced technology solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setFilter(category);
                  setVisibleProjects(6);
                }}
                className={`
                  relative rounded-full px-6 py-2 font-medium transition-all duration-300
                  ${filter === category 
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/25 border-0' 
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:border-violet-500/50 hover:text-white'
                  }
                  backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20
                `}
              >
                {category}
                {filter === category && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/20 to-cyan-600/20 blur-sm" />
                )}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project}
              index={index}
            />
          ))}
        </div>

        {visibleProjects < filteredProjects.length && (
          <div className="text-center">
            <Button 
              onClick={handleShowMore} 
              variant="outline" 
              size="lg"
              className="relative rounded-full px-8 py-4 bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-gradient-to-r hover:from-violet-600/20 hover:to-cyan-600/20 hover:border-violet-500/50 hover:text-white transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
