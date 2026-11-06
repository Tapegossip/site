import { Link } from 'react-router-dom';
import { essays } from '../data/essays';
import { ArrowRight } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle();
  return (
    <div className="page-container">
      <div className="space-y-16 animate-appear">
        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">About Me</h2>
          <div className="space-y-4">
            <p>
              I'm a trader and researcher exploring the intersections of markets, risk, and human behavior. My work focuses on understanding how financial systems evolve, the psychological forces driving market dynamics, and how we can better design strategies for long-term success.
            </p>
            <p>
              Currently, I'm studying market cycles, liquidity flows, and the impact of macroeconomic trends on asset pricing. When not analyzing charts or refining strategies, I'm usually reading about economic history, complex systems, or the behavioral patterns that shape financial decision-making.
            </p>
            <p>
              My background spans multiple disciplines, giving me a unique perspective on market structure and risk. I believe in the power of rigorous analysis, adaptive thinking, and continuous learning to navigate uncertainty and build a sustainable trading edge.
            </p>
          </div>
        </section>
        
        {/* Essays Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Essays:</h2>
          <div className="space-y-4">
            {essays.map((essay, index) => (
              <div key={essay.slug} className="animate-rise" style={{ animationDelay: `${index * 0.1}s` }}>
                <Link 
                  to={`/essay/${essay.slug}`}
                  className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
                >
                  {essay.title}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="w-full flex justify-end pt-8">
            <Link 
              to="/library" 
              className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors"
            >
              Explore my library
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
