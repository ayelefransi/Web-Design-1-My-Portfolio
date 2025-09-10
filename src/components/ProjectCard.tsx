
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink, Play, Maximize } from "lucide-react";

export interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  fullDescription?: string;
  techStack?: string[];
  highlights?: string[];
  videoUrl?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);

  // Convert Google Drive links to embeddable format
  const getEmbeddableVideoUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }
    return url;
  };

  return (
    <>
      <motion.div 
        className="glass-card rounded-xl overflow-hidden group cursor-pointer relative"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        onClick={() => setIsOpen(true)}
      >
        {/* Project Image with Video Play Button */}
        <div className="relative h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {project.videoUrl && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 border border-white/20">
                <Play className="w-8 h-8 text-white" fill="currentColor" />
              </div>
            </motion.div>
          )}
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, '_blank');
                }}
              >
                <Github className="w-4 h-4" />
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="secondary"
                size="icon"
                className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.demoUrl, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 gradient-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-blue-400 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <span 
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button 
            variant="outline" 
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
          >
            View Details
          </Button>
        </div>
      </motion.div>

      {/* Project Details Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl gradient-text">{project.title}</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            {/* Video Section */}
            {project.videoUrl && (
              <div className="relative">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-medium">Demo Video</h4>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsVideoFullscreen(true)}
                    className="gap-2"
                  >
                    <Maximize className="w-4 h-4" />
                    Fullscreen
                  </Button>
                </div>
                <div className="rounded-lg overflow-hidden bg-black aspect-video">
                  <iframe
                    src={getEmbeddableVideoUrl(project.videoUrl)}
                    className="w-full h-full"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            )}

            {/* Project Image */}
            <div className="rounded-lg overflow-hidden h-64">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
            </div>

            {/* Description */}
            <div>
              <h4 className="text-lg font-medium mb-3">About This Project</h4>
              <p className="text-foreground leading-relaxed">
                {project.fullDescription || project.description}
              </p>
            </div>

            {/* Highlights */}
            {project.highlights && (
              <div>
                <h4 className="text-lg font-medium mb-3">Key Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Tech Stack */}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h4 className="text-lg font-medium mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.demoUrl && (
                <Button asChild className="gap-2">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" asChild className="gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    View Source
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Fullscreen Video Modal */}
      {project.videoUrl && (
        <Dialog open={isVideoFullscreen} onOpenChange={setIsVideoFullscreen}>
          <DialogContent className="sm:max-w-7xl max-h-[95vh] p-2">
            <div className="relative w-full h-[80vh]">
              <iframe
                src={getEmbeddableVideoUrl(project.videoUrl)}
                className="w-full h-full rounded-lg"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default ProjectCard;
