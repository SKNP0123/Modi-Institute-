/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero, Stats } from './components/Hero';
import { Features, Courses } from './components/Courses';
import { QuizModule, VideoPlayer } from './components/Quiz';
import { Dashboard, Testimonials, Instructors } from './components/Dashboard';
import { Pricing, FAQ, Newsletter, Footer } from './components/Footer';
import { AuthModal, ToastContainer, Toast } from './components/Modals';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({
    isOpen: false,
    type: 'login',
  });

  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addToast = (message: string, type: 'success' | 'error' = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        openLogin={() => setAuthModal({ isOpen: true, type: 'login' })}
        openSignup={() => setAuthModal({ isOpen: true, type: 'signup' })}
      />
      
      <main>
        <Hero />
        <Stats />
        <Courses />
        <Features />
        <QuizModule />
        <VideoPlayer />
        <Dashboard />
        <Testimonials />
        <Instructors />
        <Pricing />
        <FAQ />
        <Newsletter />
      </main>

      <Footer />

      <AuthModal 
        isOpen={authModal.isOpen} 
        onClose={() => setAuthModal({ ...authModal, isOpen: false })} 
        type={authModal.type} 
      />

      <ToastContainer toasts={toasts} removeToast={removeToast} />
      
      {/* Scroll to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full glass-morphism flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
