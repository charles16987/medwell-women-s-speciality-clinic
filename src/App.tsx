import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/ui/Navbar';
import { FloatingActions } from './components/ui/FloatingActions';
import { Preloader } from './components/ui/Preloader';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import PatientStories from './pages/PatientStories';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Footer = () => (
  <footer className="bg-white py-20 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-terracotta rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">M</div>
          <span className="font-serif text-xl font-bold tracking-tight text-slate-900 uppercase">Medwell</span>
        </div>
        <p className="text-slate-500 max-w-sm leading-relaxed mb-8 italic italic">
          "Where every woman’s story matters." A women's speciality clinic dedicated to clinical excellence and compassionate care in Tamil Nadu.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-terracotta transition-all"><Facebook size={20} /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50 text-slate-400 hover:text-terracotta transition-all"><Instagram size={20} /></a>
        </div>
      </div>
      <div>
        <h4 className="font-serif text-xl font-bold mb-6">Pages</h4>
        <ul className="space-y-4 text-slate-600 font-medium">
          <li><a href="/" className="hover:text-terracotta">Home</a></li>
          <li><a href="/about" className="hover:text-terracotta">About Us</a></li>
          <li><a href="/services" className="hover:text-terracotta">Services</a></li>
          <li><a href="/stories" className="hover:text-terracotta">Patient Stories</a></li>
          <li><a href="/contact" className="hover:text-terracotta">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif text-xl font-bold mb-6">Visit Us</h4>
        <p className="text-slate-600 leading-relaxed italic">
          MIG, 10/261, near M TEENZ SHOWROOM,<br /> New Housing Unit, <br />Thanjavur, Tamil Nadu 613005
        </p>
        <div className="mt-6 pt-6 border-t border-slate-50">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Contact</p>
           <p className="text-terracotta font-bold text-lg">967760 5596</p>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">
       <p>© {new Date().getFullYear()} Medwell Women's Clinic. All rights reserved.</p>
       <p>Designed with Charles</p>
    </div>
  </footer>
);

import { Facebook, Instagram } from 'lucide-react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/stories" element={<PatientStories />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
            <FloatingActions />
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}
