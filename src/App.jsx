// App.jsx

import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./styles/index.css";
import "./styles/loader.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
// Pages d’erreur
import NotFound from "./components/PagesErrors/NotFound";
import ServerError from "./components/PagesErrors/ServerError";
import Indispo from "./components/PagesErrors/Indispo";

// Lazy load des pages
const Home = lazy(() => import("./pages/Home"));
const Diplomes = lazy(() => import("./pages/Diplomes"));
const Contact = lazy(() => import("./pages/Contact"));
const Projets = lazy(() => import("./pages/Projets"));
const Experience = lazy(() => import("./pages/Experience"));

// Loader
function Loader({ duration = 2000 }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!loading) return null;
  return (
    <div id="loader-container" data-testid="loader-container">
      <span className="loader"></span>
    </div>
  );
}

// Wrapper pour les pages avec loader
function PageWrapper({ children, showLoader = false }) {
  return (
    <div className="page-wrapper">
      <NavBar />
      {showLoader && <Loader />}
      <div className="page-content">{children}</div>
      <Footer />
    </div>
  );
}

export default function App() {
  const siteIndispo = false; // true si le site est indisponible

  return (
    <div className="app-bg">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Si le site est indisponible, toutes les routes redirigent vers /indisponible */}
          {siteIndispo && (
            <Route path="*" element={<Navigate to="/indisponible" replace />} />
          )}

          {/* Redirection racine */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Pages normales avec loader, uniquement si site disponible */}
          {!siteIndispo && (
            <>
              <Route
                path="/home"
                element={
                  <Suspense fallback={<Loader />}>
                    <PageWrapper showLoader={true}>
                      <Home /> 
                    </PageWrapper>
                  </Suspense>
                }
              />
              <Route
                path="/contact"
                element={
                  <Suspense fallback={<Loader />}>
                    <PageWrapper showLoader={true}>
                      <Contact />
                    </PageWrapper>
                  </Suspense>
                }
              />

              <Route
                path="/diplomes"
                element={
                  <Suspense fallback={<Loader />}>
                    <PageWrapper showLoader={true}>
                      <Diplomes />
                    </PageWrapper>
                  </Suspense>
                }
              />
              <Route
                path="/projets"
                element={
                  <Suspense fallback={<Loader />}>
                    <PageWrapper showLoader={true}>
                      <Projets />
                    </PageWrapper>
                  </Suspense>
                }
              />
              <Route
                path="/experience"
                element={
                  <Suspense fallback={<Loader />}>
                    <PageWrapper showLoader={true}>
                      <Experience />
                    </PageWrapper>
                  </Suspense>
                }
              />
            </>
          )}

          {/* Pages d'erreur et indisponibilité */}
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/indisponible" element={<Indispo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
