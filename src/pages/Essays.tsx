
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import EssayCard from '../components/EssayCard';
import { essays } from '../data/essays';

const Essays = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  return (
    <div className="page-container">
      <h1 className="page-title">Essays</h1>
      
      <motion.div
        initial="hidden"
        animate={mounted ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16"
      >
        {essays.map((essay, index) => (
          <EssayCard key={essay.id} essay={essay} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Essays;
