
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const AnimatedLink = ({ to, children, isActive, className }: AnimatedLinkProps) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive: active }) => 
        `relative text-sm md:text-base font-medium transition-colors duration-200 ${
          active || isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80'
        } ${className || ''}`
      }
    >
      {({ isActive: active }) => (
        <>
          {children}
          {(active || isActive) && (
            <motion.span
              layoutId="underline"
              className="absolute left-0 top-full block h-[1px] w-full bg-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default AnimatedLink;
