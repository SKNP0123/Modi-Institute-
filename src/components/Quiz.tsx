import React, { useState, useEffect } from 'react';
import { Timer, CheckCircle2, XCircle, ChevronRight, RotateCcw, Share2, Play, Pause, SkipBack, SkipForward, Volume2, Maximize, Lock, Unlock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS, LESSONS } from '../constants';

export const QuizModule: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && !showScore) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleAnswer(-1);
    }
  }, [timeLeft, isAnswered, showScore]);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUIZ_QUESTIONS[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    const next = currentQuestion + 1;
    if (next < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(next);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(60);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimeLeft(60);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <section id="quiz" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto glass-morphism rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            {!showScore ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Interactive Quiz</h2>
                    <p className="text-slate-500 font-medium">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</p>
                  </div>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${timeLeft < 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-primary-50 text-primary-600'}`}>
                    <Timer size={20} />
                    <span>{timeLeft}s</span>
                  </div>
                </div>

                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full mb-12 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    className="h-full gradient-bg"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-8">{QUIZ_QUESTIONS[currentQuestion].question}</h3>

                <div className="grid gap-4 mb-8">
                  {QUIZ_QUESTIONS[currentQuestion].options.map((option, i) => (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleAnswer(i)}
                      className={`w-full p-5 rounded-2xl text-left font-semibold transition-all flex items-center justify-between border-2 ${
                        isAnswered
                          ? i === QUIZ_QUESTIONS[currentQuestion].correctAnswer
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : i === selectedOption
                              ? 'bg-red-50 border-red-500 text-red-700'
                              : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-50'
                          : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 hover:border-primary-500 hover:shadow-md'
                      }`}
                    >
                      <span>{option}</span>
                      {isAnswered && i === QUIZ_QUESTIONS[currentQuestion].correctAnswer && <CheckCircle2 size={20} />}
                      {isAnswered && i === selectedOption && i !== QUIZ_QUESTIONS[currentQuestion].correctAnswer && <XCircle size={20} />}
                    </button>
                  ))}
                </div>

                <AnimatePresence>
                  {isAnswered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 mb-8"
                    >
                      <p className="font-bold text-slate-900 dark:text-white mb-2">Explanation:</p>
                      <p className="text-slate-600 dark:text-slate-400">{QUIZ_QUESTIONS[currentQuestion].explanation}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex justify-end">
                  <button
                    disabled={!isAnswered}
                    onClick={nextQuestion}
                    className="flex items-center gap-2 px-8 py-3 rounded-xl gradient-bg text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
                  >
                    {currentQuestion === QUIZ_QUESTIONS.length - 1 ? 'Finish' : 'Next Question'}
                    <ChevronRight size={20} />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 flex items-center justify-center mx-auto mb-8">
                  <Award size={48} />
                </div>
                <h2 className="text-4xl font-display font-bold mb-4">Quiz Completed!</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
                  You scored <span className="font-bold text-primary-600">{score}</span> out of <span className="font-bold">{QUIZ_QUESTIONS.length}</span>
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={resetQuiz} className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold hover:bg-slate-200 transition-colors">
                    <RotateCcw size={20} /> Retake Quiz
                  </button>
                  <button className="flex items-center gap-2 px-8 py-4 rounded-2xl gradient-bg text-white font-bold shadow-lg hover:scale-105 transition-transform">
                    <Share2 size={20} /> Share Results
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const VideoPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLesson, setCurrentLesson] = useState(LESSONS[0]);

  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Player */}
          <div className="flex-[2]">
            <div className="relative aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img 
                src={`https://picsum.photos/seed/lesson${currentLesson.id}/1280/720`} 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-20 h-20 rounded-full bg-primary-600/80 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
                </button>
              </div>

              {/* Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-black/80 to-transparent">
                <div className="w-full h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer relative group">
                  <div className="absolute top-0 left-0 h-full w-1/3 bg-primary-500 rounded-full" />
                  <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button className="hover:text-primary-400 transition-colors"><SkipBack size={20} /></button>
                    <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-primary-400 transition-colors">
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button className="hover:text-primary-400 transition-colors"><SkipForward size={20} /></button>
                    <div className="flex items-center gap-2">
                      <Volume2 size={20} />
                      <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-white" />
                      </div>
                    </div>
                    <span className="text-sm font-medium">12:45 / 45:30</span>
                  </div>
                  <button className="hover:text-primary-400 transition-colors"><Maximize size={20} /></button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl font-bold mb-4">{currentLesson.title}</h2>
              <p className="text-slate-400 leading-relaxed max-w-3xl">
                In this lesson, we'll dive deep into the core concepts of the subject. We'll cover everything from the basic syntax to advanced implementation patterns. By the end of this video, you'll have a solid understanding of how to apply these techniques in real-world scenarios.
              </p>
            </div>
          </div>

          {/* Playlist */}
          <div className="flex-1">
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 h-full">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                Course Content
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400">5 Lessons</span>
              </h3>
              <div className="space-y-3">
                {LESSONS.map((lesson) => (
                  <button
                    key={lesson.id}
                    disabled={lesson.isLocked}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border ${
                      currentLesson.id === lesson.id
                        ? 'bg-primary-600/10 border-primary-600 text-primary-400'
                        : 'bg-slate-800/50 border-transparent hover:bg-slate-800'
                    } ${lesson.isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${currentLesson.id === lesson.id ? 'bg-primary-600 text-white' : 'bg-slate-700'}`}>
                        {lesson.id}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{lesson.title}</p>
                        <p className="text-xs text-slate-500">{lesson.duration}</p>
                      </div>
                    </div>
                    {lesson.isLocked ? <Lock size={16} /> : <Unlock size={16} />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
