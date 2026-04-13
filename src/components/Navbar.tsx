import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openLogin: () => void;
  openSignup: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, openLogin, openSignup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'courses', 'features', 'quiz', 'dashboard', 'pricing', 'faq'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Courses', href: '#courses', id: 'courses' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Quiz', href: '#quiz', id: 'quiz' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">E</div>
          <span className="text-xl font-display font-bold tracking-tight">EduVantage</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${activeSection === link.id ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-400'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={openLogin} className="text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Login</button>
          <button onClick={openSignup} className="text-sm font-semibold px-5 py-2.5 rounded-lg gradient-bg text-white shadow-md hover:shadow-lg hover:scale-105 transition-all">Sign Up</button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white dark:bg-slate-900 z-50 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display font-bold text-xl">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col gap-6 mb-auto">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium ${activeSection === link.id ? 'text-primary-600' : ''}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-200 dark:border-slate-800">
                <button onClick={() => { openLogin(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-slate-200 dark:border-slate-800 font-semibold">
                  <LogIn size={18} /> Login
                </button>
                <button onClick={() => { openSignup(); setIsMobileMenuOpen(false); }} className="flex items-center justify-center gap-2 w-full py-3 rounded-xl gradient-bg text-white font-semibold shadow-lg">
                  <UserPlus size={18} /> Sign Up
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
