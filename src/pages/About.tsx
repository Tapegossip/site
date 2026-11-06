import { motion } from 'framer-motion';
import { Twitter, Mail } from 'lucide-react';
import { useAnimationOnScroll } from '../hooks/useAnimationOnScroll';

const About = () => {
  const { ref: bioRef, isVisible: bioVisible } = useAnimationOnScroll<HTMLDivElement>();
  const { ref: currentlyRef, isVisible: currentlyVisible } = useAnimationOnScroll<HTMLDivElement>();
  const { ref: essaysRef, isVisible: essaysVisible } = useAnimationOnScroll<HTMLDivElement>();
  
  return (
    <div className="page-container">
      <h1 className="page-title">About Me</h1>
      
      <motion.div
        ref={bioRef}
        initial={{ opacity: 0, y: 20 }}
        animate={bioVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="page-section"
      >
        <p className="text-lg mb-6">
          I'm a trader and researcher exploring the intersections of markets, risk, and human behavior. My work focuses on understanding how financial systems evolve, the psychological forces driving market dynamics, and how we can better design strategies for long-term success.
        </p>
      </motion.div>
      
      <div className="section-divider" />
      
      <motion.div
        ref={currentlyRef}
        initial={{ opacity: 0, y: 20 }}
        animate={currentlyVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="page-section"
      >
        <p className="text-lg mb-6">
          Currently, I'm studying market cycles, liquidity flows, and the impact of macroeconomic trends on asset pricing. When not analyzing charts or refining strategies, I'm usually reading about economic history, complex systems, or the behavioral patterns that shape financial decision-making.
        </p>
      </motion.div>
      
      <div className="section-divider" />
      
      <motion.div
        ref={essaysRef}
        initial={{ opacity: 0, y: 20 }}
        animate={essaysVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="page-section"
      >
        <h2 className="page-subtitle">Essays:</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li>
            <a href="/essay/civilizational-primitives" className="hover:text-foreground transition-colors">
              Civilizational Primitives
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition-colors">
              Investing in Synthesis
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-foreground transition-colors">
              Why Learn Compilers
            </a>
          </li>
        </ul>
      </motion.div>
      
      <div className="section-divider" />
      
      <div className="flex items-center space-x-6 text-muted-foreground">
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors flex items-center gap-2"
        >
          <Twitter className="h-5 w-5" />
          <span className="text-sm">Twitter</span>
        </a>
        <a 
          href="mailto:example@example.com" 
          className="hover:text-foreground transition-colors flex items-center gap-2"
        >
          <Mail className="h-5 w-5" />
          <span className="text-sm">Email</span>
        </a>
      </div>
      
      <div className="mt-16 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} TapeGossip
      </div>
    </div>
  );
};

export default About;
