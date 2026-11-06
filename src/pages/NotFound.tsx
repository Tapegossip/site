
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const NotFound = () => {
  usePageTitle('Page not found');
  const navigate = useNavigate();

  return (
    <div className="py-32 flex items-center justify-center">
      <div className="text-center space-y-6 animate-rise-slow">
        <h1 className="text-4xl md:text-6xl font-heading font-bold">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 border border-border rounded-md hover:bg-muted transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
