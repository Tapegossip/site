import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Essays', path: '/essays' },
  { name: 'Library', path: '/library' },
];

const activePath = (pathname: string) => {
  const p = pathname.replace(/(.)\/$/, '$1'); // ignore a trailing slash
  return p.startsWith('/essay') ? '/essays' : navItems.find(i => i.path === p)?.path ?? null;
};

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = activePath(pathname);

  // One underline that slides to the active link (CSS transition on left/width).
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [underline, setUnderline] = useState<{ left: number; top: number; width: number } | null>(null);

  useLayoutEffect(() => {
    const place = () => {
      const el = active ? linkRefs.current[active] : null;
      setUnderline(el ? { left: el.offsetLeft, top: el.offsetTop + el.offsetHeight, width: el.offsetWidth } : null);
    };
    place();
    window.addEventListener('resize', place);
    document.fonts?.ready.then(place); // widths change once web fonts load
    return () => window.removeEventListener('resize', place);
  }, [active]);

  // Hide while scrolling down (more room to read), show again on any scroll up.
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      if (Math.abs(y - lastY) < 6) return; // ignore jitter
      setHidden(y > lastY && y > 120);
      lastY = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background border-b border-border' : 'py-5'
      } ${hidden ? '-translate-y-full' : ''}`}
      onFocusCapture={() => setHidden(false)}
    >
      {/* items-baseline: the links sit on the same line as the wordmark, not centered on wordmark + "anon". */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 flex items-baseline justify-between">
        <div className="flex flex-col">
          <NavLink
            to="/"
            className="text-xl max-[359px]:text-lg md:text-2xl font-heading font-bold hover:opacity-80 transition-opacity"
          >
            TapeGossip
          </NavLink>
          <span className="text-xs text-muted-foreground">anon</span>
        </div>

        <div className="flex items-center">
          <nav className="relative flex items-center gap-4 max-[359px]:gap-2.5 md:gap-8">
            {navItems.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                ref={el => { linkRefs.current[item.path] = el; }}
                className={`relative text-sm md:text-base font-medium transition-colors duration-200 ${
                  active === item.path ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'
                }`}
              >
                {item.name}
              </NavLink>
            ))}
            {underline && (
              <span
                aria-hidden="true"
                className="absolute h-px bg-foreground transition-all duration-300 ease-out"
                style={underline}
              />
            )}
          </nav>
          {/* The icon button has ~11px of padding; pull it out so the icon lines up with the content's right edge. */}
          <div className="ml-2 max-[359px]:ml-0.5 md:ml-5 -mr-2.5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
