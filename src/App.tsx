import { lazy, Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Essays from "./pages/Essays";

const Library = lazy(() => import("./pages/Library"));
import EssayDetail from "./pages/EssayDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <HashRouter>
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <main className="pt-16 flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/essay/:slug" element={<EssayDetail />} />
            <Route path="/library" element={<Suspense fallback={<div className="page-container" />}><Library /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  </HashRouter>
);

export default App;
