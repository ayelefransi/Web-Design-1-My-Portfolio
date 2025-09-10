
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className = "" }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas to full window size
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        // Re-initialize particles when canvas size changes
        initParticles();
      }
    };

    // Track mouse position for interactive effects
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.min(
        100,
        Math.floor((canvas.width * canvas.height) / 10000)
      );

      const isDarkMode = document.documentElement.classList.contains("dark");
      
      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: isDarkMode 
            ? `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.2})`
            : `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 200 + 55)}, ${Math.random() * 0.4 + 0.1})`
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.current.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nearby particles (neural network effect)
        connectParticles(particle);
      });
      
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    // Draw connections between nearby particles
    const connectParticles = (p1: Particle) => {
      particles.current.forEach((p2) => {
        const distance = Math.sqrt(
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
        
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          const opacity = 1 - distance / maxDistance;
          
          // Mouse influence - particles closer to mouse get brighter connections
          const mouseDistance = Math.sqrt(
            Math.pow((p1.x + p2.x) / 2 - mousePosition.current.x, 2) +
            Math.pow((p1.y + p2.y) / 2 - mousePosition.current.y, 2)
          );
          
          const mouseInfluence = Math.max(0, 1 - mouseDistance / 200);
          
          const isDarkMode = document.documentElement.classList.contains("dark");
          
          ctx.strokeStyle = isDarkMode
            ? `rgba(138, 92, 246, ${opacity * 0.5 + mouseInfluence * 0.5})`
            : `rgba(79, 70, 229, ${opacity * 0.3 + mouseInfluence * 0.2})`;
          
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      });
    };

    // Set up canvas and start animation
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

export default ParticleBackground;
