
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Essay } from '../data/essays';

interface EssayCardProps {
  essay: Essay;
  index: number;
}

const EssayCard = ({ essay, index }: EssayCardProps) => {
  const isComingSoon = essay.content === 'Coming soon...';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border-b border-border py-8 first:pt-0"
    >
      <Link 
        to={isComingSoon ? '#' : `/essay/${essay.slug}`}
        className="block transition-all duration-300 hover:opacity-80"
      >
        <h2 className="text-2xl font-heading font-bold mb-2">{essay.title}</h2>
        <time className="text-sm text-muted-foreground block mb-3">
          {new Date(essay.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
        <p className="text-base text-muted-foreground">
          {essay.excerpt || 'Coming soon...'}
        </p>
      </Link>
    </motion.article>
  );
};

export default EssayCard;
