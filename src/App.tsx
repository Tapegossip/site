import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Essays from "./pages/Essays";

import EssayDetail from "./pages/EssayDetail";
import NotFound from "./pages/NotFound";

const Library = lazy(() => import("./pages/Library"));

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-background flex flex-col">
      <NavBar />
      <main className="pt-16 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/essays" element={<Essays />} />
            <Route path="/essay/:slug" element={<EssayDetail />} />
            <Route path="/library" element={<Suspense fallback={<div className="page-container" />}><Library /></Suspense>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
