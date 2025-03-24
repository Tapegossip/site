
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { essays } from '../data/essays';
import { ArrowLeft } from 'lucide-react';

const EssayDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const essay = essays.find(e => e.slug === slug);
  
  if (!essay) {
    return (
      <div className="page-container">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-heading font-bold">Essay Not Found</h1>
          <p className="text-muted-foreground">The essay you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md glass-morphism hover:bg-white/10 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <motion.button
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </motion.button>
      
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">{essay.title}</h1>
          <time className="text-sm text-muted-foreground block">
            {new Date(essay.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>
        
        <div 
          className="prose prose-invert prose-sm sm:prose-base max-w-none"
          dangerouslySetInnerHTML={{ __html: essay.content }}
        />
        
        <div className="mt-12 pt-6 border-t border-white/10 flex gap-2 flex-wrap">
          {essay.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-white/5 rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  );
};

export default EssayDetail;
