
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark component as mounted
    setMounted(true);
    
    // Check if user has a preferred theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    applyTheme(savedTheme as 'dark' | 'light');
  }, []);

  const applyTheme = (newTheme: 'dark' | 'light') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  }

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  };

  // Prevent flash of incorrect theme
  if (!mounted) return null;

  // Instead of using the Button with motion props directly, we'll wrap the button in a motion.div
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 15 }}
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="p-0 hover:bg-slate-100 dark:hover:bg-white/5"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? (
          <Sun className="h-[18px] w-[18px]" />
        ) : (
          <Moon className="h-[18px] w-[18px]" />
        )}
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
