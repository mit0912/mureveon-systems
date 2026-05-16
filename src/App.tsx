import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Components
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Services = lazy(() => import("./pages/Services.tsx"));
const Contact = lazy(() => import("./pages/Contact.tsx"));
const CaseStudies = lazy(() => import("./pages/CaseStudies.tsx"));
// Loading Component
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-accent border-t-transparent"></div>
  </div>
);

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Convex Setup
const CONVEX_URL = import.meta.env.VITE_CONVEX_URL;
if (!CONVEX_URL) {
  throw new Error("VITE_CONVEX_URL is not defined in environment variables");
}
const convex = new ConvexReactClient(CONVEX_URL);

export default function App() {
  return (
    <ConvexProvider client={convex}>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                {/* Fallback for 404 */}
                <Route path="*" element={<Home />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </ConvexProvider>
  );
}