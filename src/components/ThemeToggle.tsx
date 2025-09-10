import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import useTheme from "@/hooks/useTheme";
export function ThemeToggle() {
  const {
    resolvedTheme,
    setTheme
  } = useTheme();
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  return;
}
export default ThemeToggle;