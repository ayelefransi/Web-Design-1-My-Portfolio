
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu } from "lucide-react";
import useTheme from "@/hooks/useTheme";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technical", href: "#technical-overview" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { resolvedTheme } = useTheme();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Choose logo based on theme
  const logoSrc = resolvedTheme === 'dark' 
    ? "/lovable-uploads/01a92c80-c89a-4d3c-b9cc-2014322b8ec4.png" // White logo for dark theme
    : "/lovable-uploads/Franso logo.png"; // Black logo for light theme

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg shadow-md py-3" 
        : "bg-transparent py-5"
    }`}>
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2 group">
          <img 
            src={logoSrc} 
            alt="FRANSI Logo" 
            className="w-12 h-12 md:w-14 md:h-14 transition-transform group-hover:scale-110" 
          />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text rounded-md transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild className="ml-4">
            <a href="#contact">Let's Connect</a>
          </Button>
        </nav>
        
        {/* Mobile Navigation Controls */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-2"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-lg">
          <nav className="container py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-sm font-medium text-foreground hover:bg-gradient-to-r hover:from-red-500/10 hover:to-blue-500/10 rounded-md transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Let's Connect
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
