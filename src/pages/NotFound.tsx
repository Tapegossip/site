
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-heading font-bold">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 glass-morphism rounded-md hover:bg-white/10 transition-colors"
        >
          Return Home
        </button>
      </motion.div>
    </div>
  );
};

export default NotFound;
