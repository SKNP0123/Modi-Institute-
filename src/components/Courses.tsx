import React, { useState } from 'react';
import { Video, ClipboardCheck, Award, TrendingUp, MessageSquare, Smartphone, Star, Users, Clock, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COURSES } from '../constants';
import { Course } from '../types';

export const Features: React.FC = () => {
  const features = [
    { icon: <Video />, title: 'Live Classes', desc: 'Interactive real-time sessions with industry experts.' },
    { icon: <ClipboardCheck />, title: 'Quizzes', desc: 'Test your knowledge with subject-specific assessments.' },
    { icon: <Award />, title: 'Certificates', desc: 'Earn industry-recognized certificates upon completion.' },
    { icon: <TrendingUp />, title: 'Progress Tracking', desc: 'Monitor your learning journey with detailed analytics.' },
    { icon: <MessageSquare />, title: 'Discussion Forums', desc: 'Connect with peers and mentors in our active community.' },
    { icon: <Smartphone />, title: 'Mobile Friendly', desc: 'Learn on the go with our fully responsive platform.' },
  ];

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Choose EduVantage?</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            We provide the tools and resources you need to succeed in your educational journey, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Courses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Math', 'Science', 'Coding', 'History', 'Languages', 'Arts'];

  const filteredCourses = activeCategory === 'All' 
    ? COURSES 
    : COURSES.filter(c => c.category === activeCategory);

  return (
    <section id="courses" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Explore Our Courses</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Choose from over 500+ courses taught by industry experts and academic professionals.
            </p>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'gradient-bg text-white shadow-lg' : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 rounded-2xl border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-600 hover:text-white transition-all">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-800"
    >
      <div className={`h-48 ${course.thumbnail} relative p-6 flex flex-col justify-between`}>
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
            {course.category}
          </span>
          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors">
            <Star size={16} />
          </button>
        </div>
        <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-xs font-bold w-fit">
          {course.difficulty}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 line-clamp-2 hover:text-primary-600 transition-colors cursor-pointer">
          {course.title}
        </h3>
        <p className="text-sm text-slate-500 mb-4">by {course.instructor}</p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-bold text-slate-900 dark:text-white">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Users size={16} />
            <span className="text-sm font-medium">{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <Clock size={16} />
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xl font-bold">$49.99</span>
          <button className="px-4 py-2 rounded-xl gradient-bg text-white text-sm font-bold hover:scale-105 transition-transform">
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
