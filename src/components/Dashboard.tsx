import React from 'react';
import { Award, Flame, Zap, Trophy, TrendingUp, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';
import { TESTIMONIALS, INSTRUCTORS } from '../constants';

export const Dashboard: React.FC = () => {
  const courses = [
    { name: 'React 19', progress: 75, color: '#8b5cf6' },
    { name: 'Python DS', progress: 45, color: '#3b82f6' },
    { name: 'UI Design', progress: 90, color: '#ec4899' },
    { name: 'History', progress: 20, color: '#f59e0b' },
  ];

  const leaderboard = [
    { rank: 1, name: 'Emma Wilson', xp: 12500, avatar: 'EW' },
    { rank: 2, name: 'James Chen', xp: 11200, avatar: 'JC' },
    { rank: 3, name: 'Sophia Rodriguez', xp: 10800, avatar: 'SR' },
    { rank: 4, name: 'Liam Smith', xp: 9500, avatar: 'LS' },
    { rank: 5, name: 'Olivia Brown', xp: 8900, avatar: 'OB' },
  ];

  return (
    <section id="dashboard" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Progress & Stats */}
          <div className="flex-[2]">
            <h2 className="text-3xl font-display font-bold mb-8">Your Learning Progress</h2>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {courses.map((course, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 flex items-center gap-6">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        className="text-slate-100 dark:text-slate-800"
                        strokeDasharray="100, 100"
                        strokeWidth="3"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <motion.path
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${course.progress}, 100` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        strokeWidth="3"
                        stroke={course.color}
                        strokeLinecap="round"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                      {course.progress}%
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{course.name}</h3>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Course Progress</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 mb-12">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <TrendingUp className="text-primary-600" /> Weekly Activity
              </h3>
              <div className="flex items-end justify-between gap-2 h-48">
                {[45, 70, 30, 85, 60, 95, 50].map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-3">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="w-full max-w-[40px] gradient-bg rounded-t-lg"
                    />
                    <span className="text-xs font-bold text-slate-400">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {[
                { icon: <Flame className="text-orange-500" />, value: '12', label: 'Day Streak' },
                { icon: <Zap className="text-yellow-500" />, value: '2.5k', label: 'XP Points' },
                { icon: <Award className="text-primary-500" />, value: '8', label: 'Badges' },
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Leaderboard */}
          <div className="flex-1">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 sticky top-32">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Trophy className="text-amber-500" /> Leaderboard
              </h3>
              <div className="space-y-6">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`w-6 text-sm font-bold ${user.rank === 1 ? 'text-amber-500' : user.rank === 2 ? 'text-slate-400' : user.rank === 3 ? 'text-amber-700' : 'text-slate-300'}`}>
                        #{user.rank}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-sm">
                        {user.avatar}
                      </div>
                      <span className="font-bold text-sm">{user.name}</span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {user.xp.toLocaleString()} XP
                    </span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-4 rounded-2xl border-2 border-slate-100 dark:border-slate-800 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                View Full Leaderboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">What Our Students Say</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Real stories from real students who have transformed their lives through learning.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[40px] shadow-xl border border-slate-100 dark:border-slate-800 text-center relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full gradient-bg flex items-center justify-center text-white text-2xl font-bold border-8 border-white dark:border-slate-950 shadow-lg">
                    {t.initials}
                  </div>
                  <div className="flex justify-center gap-1 text-amber-500 mb-8">
                    {[...Array(t.rating)].map((_, i) => <Zap key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-xl md:text-2xl font-medium italic text-slate-700 dark:text-slate-300 leading-relaxed mb-10">
                    "{t.text}"
                  </p>
                  <div>
                    <h4 className="text-lg font-bold">{t.name}</h4>
                    <p className="text-slate-500 font-medium">Student, {t.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-3 mt-12">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeIndex === i ? 'w-10 bg-primary-600' : 'bg-slate-300 dark:bg-slate-700'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Instructors: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Meet Our Instructors</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Learn from the best in the industry. Our instructors are experts with years of experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSTRUCTORS.map((instructor) => (
            <motion.div
              key={instructor.id}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 text-center group"
            >
              <div className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {instructor.avatar}
              </div>
              <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-bold text-sm mb-4 uppercase tracking-wider">{instructor.specialty}</p>
              
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Zap size={16} fill="currentColor" /> {instructor.rating}
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Rating</p>
                </div>
                <div className="text-center">
                  <div className="font-bold">{(instructor.students / 1000).toFixed(1)}k</div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Students</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-bold hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all flex items-center justify-center gap-2">
                <UserPlus size={18} /> Follow
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
