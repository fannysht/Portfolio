// src/App.jsx
import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import StarsBackground from "./components/StarsBackground";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Diplomes from "./pages/Diplomes";
import NotFound from "./components/PagesErrors/NotFound";
import ServerError from "./components/PagesErrors/ServerError";
import Indispo from "./components/PagesErrors/Indispo";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";
import Experience from "./pages/Experience";
import "./styles/loader.css"; 

function App() {
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [loading, setLoading] = useState(true); // État pour le loader

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
      const handleResize = () => setNavHeight(navRef.current.offsetHeight);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    // Simuler un chargement initial, ou remplacer par fetch si nécessaire
    const timer = setTimeout(() => setLoading(false), 2000); // 2s de loader
    return () => clearTimeout(timer);
  }, []);

  const PageWrapper = ({ children }) => {
  const location = useLocation();
  const isDiplomes = location.pathname === "/diplomes";

  return (
    <div className="page-wrapper">
      <NavBar ref={navRef} />
      <div className={`page-content ${isDiplomes ? "animated-bg" : ""}`} style={{ position: "relative" }}>
        {isDiplomes && <StarsBackground />} {/* Étoiles derrière le contenu */}
        {children}
      </div>
      <Footer />
    </div>
  );
};

  // Si loading, afficher le loader uniquement
  if (loading) {
    return (
      <div id="loader-container">
        <span className="loader"></span>
      </div>
    );
  }

  // Sinon afficher le site
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/diplomes" element={<PageWrapper><Diplomes /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/projets" element={<PageWrapper><Projets /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />

        <Route path="/server-error" element={<ServerError />} />
        <Route path="/indisponible" element={<Indispo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
