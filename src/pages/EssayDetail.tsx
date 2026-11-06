
import { useParams, useNavigate } from 'react-router-dom';
import { essays } from '../data/essays';
import { ArrowLeft } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const EssayDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const essay = essays.find(e => e.slug === slug);
  usePageTitle(essay ? essay.title : 'Essay not found');
  
  if (!essay) {
    return (
      <div className="page-container">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-heading font-bold">Essay Not Found</h1>
          <p className="text-muted-foreground">The essay you're looking for doesn't exist or has been moved.</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md border border-border hover:bg-muted transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors animate-nudge-in"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      
      <article className="max-w-3xl mx-auto animate-appear">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">{essay.title}</h1>
          {essay.subtitle && (
            <p className="text-xl text-muted-foreground mb-4">{essay.subtitle}</p>
          )}
          <time className="text-sm text-muted-foreground block">
            {new Date(essay.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </header>
        
        <div 
          className="max-w-none"
          dangerouslySetInnerHTML={{ __html: essay.html }}
        />
        
        <div className="mt-12 pt-6 border-t border-border flex gap-2 flex-wrap">
          {essay.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 text-xs bg-muted rounded-full text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default EssayDetail;
