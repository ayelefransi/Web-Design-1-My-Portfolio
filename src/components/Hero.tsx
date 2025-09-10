import { Button } from "@/components/ui/button";
import { Download, Shield, Brain } from "lucide-react";
import AnimatedText from "./AnimatedText";
export function Hero() {
  return <section id="home" className="min-h-screen flex items-center relative">
      <div className="container pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 font-semibold text-sm flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Cyber Security Analyst
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 font-semibold text-sm flex items-center gap-2">
              <Brain className="h-4 w-4" />
              AI Engineer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Securing Tomorrow's
            <span className="block gradient-text">
              <AnimatedText phrases={["Digital Infrastructure", "AI-Powered Solutions", "Intelligent Systems", "Cyber Defenses"]} />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">I'm Fransi, a Cyber Security Analyst and AI Engineer passionate about building secure, intelligent systems. I bridge cybersecurity and artificial intelligence to create resilient digital solutions that protect and empower our connected world.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-600 hover:to-blue-700">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center">
            <a href="#about" className="animate-bounce p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Scroll down">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
}
export default Hero;