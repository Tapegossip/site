
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { essays } from '../data/essays';
import { ArrowDown, ArrowRight, ArrowUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  return (
    <div className="page-container">
      <motion.div
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16"
      >
        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">About Me</h2>
          <Collapsible
            open={isAboutExpanded}
            onOpenChange={setIsAboutExpanded}
            className="w-full"
          >
            <div>
              <p className="mb-4">
                I'm a software engineer and writer exploring the intersections of technology, society, and human
                coordination. My work focuses on understanding how technological primitives shape our civilization
                and how we can better design systems for human flourishing.
              </p>
              <CollapsibleContent>
                <div className="mt-4 space-y-4">
                  <p>
                    Currently, I'm researching distributed systems and their parallels in social structures. When not coding
                    or writing, I'm usually reading about complex systems, organizational design, or diving into historical
                    patterns of technological evolution.
                  </p>
                  <p>
                    My background spans across various disciplines, giving me a unique perspective 
                    on contemporary issues. I believe in the power of rational discourse and continuous 
                    learning to improve both individual lives and society at large.
                  </p>
                </div>
              </CollapsibleContent>
            </div>
            <div className="mt-4">
              <CollapsibleTrigger className="inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 transition-colors">
                {isAboutExpanded ? (
                  <>
                    Show less
                    <ArrowUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Learn more about me
                    <ArrowDown className="h-4 w-4" />
                  </>
                )}
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </section>
        
        {/* Essays Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6">Essays:</h2>
          <div className="space-y-4">
            {essays.map((essay, index) => (
              <motion.div
                key={essay.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link 
                  to={`/essay/${essay.slug}`}
                  className="text-blue-500 hover:text-blue-600 transition-colors font-medium"
                >
                  {essay.title}
                </Link>
              </motion.div>
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
      </motion.div>
    </div>
  );
};

export default Home;
