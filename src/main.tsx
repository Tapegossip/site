import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Old links used hash routing (/#/library?owner): move them to the real path before the app starts.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

createRoot(document.getElementById("root")!).render(<App />);
