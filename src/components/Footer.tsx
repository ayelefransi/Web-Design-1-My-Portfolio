import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import useTheme from "@/hooks/useTheme";
export function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    resolvedTheme
  } = useTheme();

  // Choose logo based on theme
  const logoSrc = resolvedTheme === 'dark' ? "/lovable-uploads/01a92c80-c89a-4d3c-b9cc-2014322b8ec4.png" // White logo for dark theme
  : "/lovable-uploads/Franso logo.png"; // Black logo for light theme

  return <footer className="py-10 bg-slate-950">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoSrc} alt="FRANSI Logo" className="w-10 h-10 md:w-12 md:h-12 transition-transform hover:scale-110" />
              <div>
                
                <p className="text-sm text-muted-foreground">Cyber Security Analyst | AI Engineer</p>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/Fransi777" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/fransi-mengesha/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="mailto:francyayele@gmail.com" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} FRANSI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text transition-all duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
export default Footer;