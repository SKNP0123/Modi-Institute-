import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, Send, Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../constants';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 0,
      desc: 'Perfect for getting started',
      features: ['Access to 50+ free courses', 'Community forum access', 'Basic progress tracking', 'Mobile app access'],
    },
    {
      name: 'Pro',
      price: 9.99,
      desc: 'Best for serious learners',
      features: ['Access to all 500+ courses', 'Verified certificates', 'Offline viewing', 'Priority support', 'Interactive quizzes'],
      isRecommended: true,
    },
    {
      name: 'Enterprise',
      price: 29.99,
      desc: 'For teams and organizations',
      features: ['Unlimited user accounts', 'Custom learning paths', 'Detailed team analytics', 'Dedicated account manager', 'API access'],
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10">Choose the plan that's right for your learning goals.</p>
          
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-7 rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-all relative"
            >
              <div className={`w-5 h-5 rounded-full gradient-bg shadow-md transition-all ${isAnnual ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-bold ${isAnnual ? 'text-slate-900 dark:text-white' : 'text-slate-400'}`}>
              Annual <span className="text-green-500 text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-[32px] border ${plan.isRecommended ? 'border-primary-600 shadow-2xl scale-105 z-10 bg-white dark:bg-slate-900' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'}`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-bg text-white text-xs font-bold uppercase tracking-widest">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-display font-bold">
                  ${isAnnual ? (plan.price * 0.8 * 12).toFixed(2) : plan.price}
                </span>
                <span className="text-slate-500 font-medium">{isAnnual ? '/year' : '/mo'}</span>
              </div>
              
              <div className="space-y-4 mb-10">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.isRecommended ? 'gradient-bg text-white shadow-lg hover:shadow-primary-600/25 hover:scale-105' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Everything you need to know about the platform.</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span className="font-bold">{faq.question}</span>
                {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 border-t border-slate-50 dark:border-slate-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="gradient-bg rounded-[40px] p-10 md:p-20 text-white text-center relative overflow-hidden shadow-2xl">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-white/80 text-lg mb-10">Join our newsletter to get the latest course updates, learning tips, and exclusive offers.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder:text-white/60 outline-none focus:bg-white/30 transition-all"
              />
              <button className="px-8 py-4 rounded-2xl bg-white text-primary-600 font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                {isSubmitted ? 'Subscribed!' : 'Subscribe Now'}
                {!isSubmitted && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white font-bold text-xl">E</div>
              <span className="text-xl font-display font-bold text-white">EduVantage</span>
            </div>
            <p className="mb-8 leading-relaxed">
              Empowering learners worldwide with high-quality, accessible education. Join our community and start your journey today.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Courses', 'Features', 'Quiz', 'Pricing'].map((link) => (
                <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-primary-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              {['Help Center', 'Discussion Forums', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((link) => (
                <li key={link}><a href="#" className="hover:text-primary-400 transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-500 mt-1" />
                <span>123 Education St, Learning City, ED 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-500" />
                <span>hello@eduvantage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-900 text-center text-sm">
          <p>© {new Date().getFullYear()} EduVantage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
