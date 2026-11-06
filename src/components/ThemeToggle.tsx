import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
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
    <div className="transition-transform duration-200 hover:rotate-[15deg] active:scale-90">
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
    </div>
  );
};

export default ThemeToggle;
