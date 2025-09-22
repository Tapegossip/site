
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import AnimatedLink from './AnimatedLink';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Essays', path: '/essays' },
    { name: 'Library', path: '/library' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled ? 'py-3 bg-background/80 backdrop-blur-md border-b border-white/10' : 'py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex flex-col">
          <NavLink 
            to="/" 
            className="text-xl md:text-2xl font-heading font-bold hover:opacity-80 transition-opacity"
          >
            TapeGossip
          </NavLink>
          <span className="text-xs text-muted-foreground">anon</span>
        </div>
        
  <nav className="flex items-center space-x-2 md:space-x-8">
          {navItems.map((item) => (
            <AnimatedLink 
              key={item.path} 
              to={item.path} 
              isActive={location.pathname === item.path || 
                (item.path === '/' && location.pathname === '/') ||
                (item.path === '/essays' && location.pathname.startsWith('/essay/'))}
              className="text-blue-500 hover:text-blue-600"
            >
              {item.name}
            </AnimatedLink>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
