
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'system'
  );
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Update theme
  const updateTheme = (newTheme: Theme) => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    
    let resolvedNewTheme: 'light' | 'dark';
    
    if (newTheme === 'system') {
      resolvedNewTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } else {
      resolvedNewTheme = newTheme;
    }
    
    root.classList.add(resolvedNewTheme);
    setResolvedTheme(resolvedNewTheme);
  };

  // Initialize theme
  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (savedTheme) {
      updateTheme(savedTheme);
    } else {
      updateTheme('system');
    }
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        updateTheme('system');
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  return { theme, resolvedTheme, setTheme: updateTheme };
}

export default useTheme;
