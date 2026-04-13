import React, { useState } from 'react';
import { X, Mail, Lock, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'login' | 'signup';
}

export const AuthModal: React.FC<ModalProps> = ({ isOpen, onClose, type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[70] p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-3xl font-display font-bold">
                    {type === 'login' ? 'Welcome Back' : 'Create Account'}
                  </h2>
                  <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {type === 'signup' && (
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hello@example.com"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Password</label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {type === 'login' && (
                    <div className="flex justify-end">
                      <a href="#" className="text-xs font-bold text-primary-600 hover:underline">Forgot Password?</a>
                    </div>
                  )}

                  <button type="submit" className="w-full py-4 rounded-xl gradient-bg text-white font-bold shadow-lg hover:shadow-primary-600/25 hover:scale-[1.02] transition-all mt-4">
                    {type === 'login' ? 'Login' : 'Sign Up'}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-sm text-slate-500">
                    {type === 'login' ? "Don't have an account?" : "Already have an account?"}
                    <button className="ml-2 font-bold text-primary-600 hover:underline">
                      {type === 'login' ? 'Sign Up' : 'Login'}
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export const ToastContainer: React.FC<{ toasts: Toast[], removeToast: (id: number) => void }> = ({ toasts, removeToast }) => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border ${
              toast.type === 'success' 
                ? 'bg-white dark:bg-slate-900 border-green-100 dark:border-green-900/30 text-slate-900 dark:text-white' 
                : 'bg-white dark:bg-slate-900 border-red-100 dark:border-red-900/30 text-slate-900 dark:text-white'
            }`}
          >
            {toast.type === 'success' ? (
              <CheckCircle2 className="text-green-500" size={20} />
            ) : (
              <AlertCircle className="text-red-500" size={20} />
            )}
            <span className="font-bold text-sm">{toast.message}</span>
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-slate-400 hover:text-slate-600">
              <X size={16} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
