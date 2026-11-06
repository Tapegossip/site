
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
  className?: string;
}

const ExternalLink = ({ 
  href, 
  children, 
  showIcon = true,
  className = ""
}: ExternalLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 hover:opacity-80 transition-opacity ${className}`}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.2 }}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="h-3 w-3" />}
    </motion.a>
  );
};

export default ExternalLink;
