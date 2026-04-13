import React, { useState, useEffect } from 'react';
import { Search, Play, Users, BookOpen, UserCheck, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [subjectIndex, setSubjectIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const subjects = ['Math', 'Science', 'History', 'Coding', 'Languages'];
  const speed = isDeleting ? 100 : 200;

  useEffect(() => {
    const handleType = () => {
      const currentSubject = subjects[subjectIndex];
      if (isDeleting) {
        setText(currentSubject.substring(0, text.length - 1));
      } else {
        setText(currentSubject.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentSubject) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setSubjectIndex((prev) => (prev + 1) % subjects.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, subjectIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-bold mb-6">
                🚀 The Future of Learning
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold leading-tight mb-6">
                Master <span className="gradient-text">{text}</span><span className="animate-pulse">|</span><br />
                From Anywhere.
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                Join over 10,000 students worldwide and start your journey today with our expert-led courses across multiple disciplines.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
                <div className="relative w-full max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search for courses..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-primary-500 outline-none transition-all shadow-sm"
                  />
                </div>
                <button className="w-full sm:w-auto px-8 py-4 rounded-2xl gradient-bg text-white font-bold shadow-xl hover:shadow-primary-500/25 hover:scale-105 transition-all">
                  Explore Now
                </button>
              </div>

              <div className="flex items-center gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-primary-500 flex items-center justify-center text-xs font-bold text-white">
                    +
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-500">
                  <span className="text-slate-900 dark:text-white font-bold">10k+</span> students already joined
                </p>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <img
                  src="https://picsum.photos/seed/education/800/600"
                  alt="Learning"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent flex items-center justify-center">
                  <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:scale-110 transition-transform">
                    <Play fill="currentColor" size={32} />
                  </button>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-morphism p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 text-green-600 flex items-center justify-center">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Certificates</p>
                  <p className="text-sm font-bold">Verified Skills</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-morphism p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-600 flex items-center justify-center">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Community</p>
                  <p className="text-sm font-bold">24/7 Support</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Stats: React.FC = () => {
  const stats = [
    { icon: <Users size={28} />, value: 10000, label: 'Students', suffix: '+' },
    { icon: <BookOpen size={28} />, value: 500, label: 'Courses', suffix: '+' },
    { icon: <UserCheck size={28} />, value: 200, label: 'Instructors', suffix: '+' },
    { icon: <Award size={28} />, value: 98, label: 'Success Rate', suffix: '%' },
  ];

  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-primary-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-display font-bold mb-1">
                <Counter value={stat.value} />{stat.suffix}
              </div>
              <p className="text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter: React.FC<{ value: number }> = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count.toLocaleString()}</>;
};
