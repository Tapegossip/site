import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

type Theme = 'dark' | 'light';

const ThemeToggle = () => {
  // index.html has already applied the saved/system theme before React loads.
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage blocked (private mode); the theme still applies for this visit.
    }
    setTheme(next);
  };

  return (
    <motion.div whileTap={{ scale: 0.9 }} whileHover={{ rotate: 15 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="p-0 hover:bg-muted"
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
