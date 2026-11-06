
import { Link } from 'react-router-dom';
import type { Essay } from '../data/essays';

interface EssayCardProps {
  essay: Essay;
  index: number;
}

const EssayCard = ({ essay, index }: EssayCardProps) => {
  return (
    <article
      className="border-b border-border py-8 first:pt-0 animate-rise"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link 
        to={`/essay/${essay.slug}`}
        className="block transition-all duration-300 hover:opacity-80"
      >
        <h2 className="text-2xl font-heading font-bold mb-2">{essay.title}</h2>
        {essay.subtitle && (
          <p className="text-lg text-muted-foreground mb-2">{essay.subtitle}</p>
        )}
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
    </article>
  );
};

export default EssayCard;
