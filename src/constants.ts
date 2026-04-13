import { Course, QuizQuestion, Lesson, Testimonial, Instructor } from './types';

export const COURSES: Course[] = [
  { id: 1, title: 'Mastering React 19', instructor: 'Sarah Johnson', category: 'Coding', rating: 4.9, students: 1250, duration: '12h 30m', difficulty: 'Intermediate', thumbnail: 'bg-linear-to-br from-blue-500 to-cyan-400' },
  { id: 2, title: 'Advanced Mathematics', instructor: 'Prof. David Chen', category: 'Math', rating: 4.8, students: 850, duration: '20h 15m', difficulty: 'Advanced', thumbnail: 'bg-linear-to-br from-purple-500 to-pink-400' },
  { id: 3, title: 'World History: Modern Era', instructor: 'Dr. Emily White', category: 'History', rating: 4.7, students: 2100, duration: '15h 45m', difficulty: 'Beginner', thumbnail: 'bg-linear-to-br from-orange-500 to-yellow-400' },
  { id: 4, title: 'Python for Data Science', instructor: 'Michael Brown', category: 'Coding', rating: 4.9, students: 3200, duration: '18h 20m', difficulty: 'Intermediate', thumbnail: 'bg-linear-to-br from-green-500 to-emerald-400' },
  { id: 5, title: 'Quantum Physics Basics', instructor: 'Dr. Robert Miller', category: 'Science', rating: 4.6, students: 450, duration: '10h 00m', difficulty: 'Advanced', thumbnail: 'bg-linear-to-br from-indigo-500 to-blue-400' },
  { id: 6, title: 'Creative Writing Workshop', instructor: 'Alice Walker', category: 'Arts', rating: 4.8, students: 1100, duration: '8h 30m', difficulty: 'Beginner', thumbnail: 'bg-linear-to-br from-rose-500 to-red-400' },
  { id: 7, title: 'Spanish for Beginners', instructor: 'Maria Garcia', category: 'Languages', rating: 4.7, students: 1800, duration: '25h 00m', difficulty: 'Beginner', thumbnail: 'bg-linear-to-br from-amber-500 to-orange-400' },
  { id: 8, title: 'UI/UX Design Principles', instructor: 'James Wilson', category: 'Arts', rating: 4.9, students: 2500, duration: '14h 10m', difficulty: 'Intermediate', thumbnail: 'bg-linear-to-br from-teal-500 to-cyan-400' },
  { id: 9, title: 'Organic Chemistry', instructor: 'Dr. Linda Ross', category: 'Science', rating: 4.5, students: 600, duration: '22h 45m', difficulty: 'Advanced', thumbnail: 'bg-linear-to-br from-lime-500 to-green-400' },
  { id: 10, title: 'Machine Learning A-Z', instructor: 'Kevin Lee', category: 'Coding', rating: 4.9, students: 4100, duration: '35h 30m', difficulty: 'Advanced', thumbnail: 'bg-linear-to-br from-violet-500 to-purple-400' },
  { id: 11, title: 'Ancient Civilizations', instructor: 'Dr. Sarah Smith', category: 'History', rating: 4.8, students: 1400, duration: '12h 00m', difficulty: 'Beginner', thumbnail: 'bg-linear-to-br from-stone-500 to-gray-400' },
  { id: 12, title: 'French Level 2', instructor: 'Jean Dupont', category: 'Languages', rating: 4.6, students: 900, duration: '30h 00m', difficulty: 'Intermediate', thumbnail: 'bg-linear-to-br from-sky-500 to-blue-400' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { id: 1, question: 'What is the capital of France?', options: ['London', 'Berlin', 'Paris', 'Madrid'], correctAnswer: 2, explanation: 'Paris is the capital and most populous city of France.' },
  { id: 2, question: 'Which planet is known as the Red Planet?', options: ['Venus', 'Mars', 'Jupiter', 'Saturn'], correctAnswer: 1, explanation: 'Mars is often called the "Red Planet" because of iron oxide on its surface.' },
  { id: 3, question: 'What is 15 * 8?', options: ['110', '120', '130', '140'], correctAnswer: 1, explanation: '15 multiplied by 8 equals 120.' },
  { id: 4, question: 'Who wrote "Romeo and Juliet"?', options: ['Charles Dickens', 'William Shakespeare', 'Mark Twain', 'Jane Austen'], correctAnswer: 1, explanation: 'William Shakespeare wrote the famous tragedy Romeo and Juliet.' },
  { id: 5, question: 'What is the chemical symbol for Gold?', options: ['Gd', 'Go', 'Ag', 'Au'], correctAnswer: 3, explanation: 'Au is the chemical symbol for gold, from the Latin word aurum.' },
  { id: 6, question: 'Which programming language is known as the language of the web?', options: ['Python', 'C++', 'JavaScript', 'Java'], correctAnswer: 2, explanation: 'JavaScript is the primary language used for web development.' },
  { id: 7, question: 'What is the largest ocean on Earth?', options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'], correctAnswer: 3, explanation: 'The Pacific Ocean is the largest and deepest of Earth\'s oceanic divisions.' },
  { id: 8, question: 'In what year did World War II end?', options: ['1943', '1944', '1945', '1946'], correctAnswer: 2, explanation: 'World War II ended in 1945.' },
  { id: 9, question: 'What does CPU stand for?', options: ['Central Process Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Central Processor Utility'], correctAnswer: 1, explanation: 'CPU stands for Central Processing Unit.' },
  { id: 10, question: 'Which gas do plants absorb from the atmosphere?', options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'], correctAnswer: 2, explanation: 'Plants absorb carbon dioxide for photosynthesis.' },
];

export const LESSONS: Lesson[] = [
  { id: 1, title: 'Introduction to the Course', duration: '05:20', isLocked: false },
  { id: 2, title: 'Setting Up Your Environment', duration: '12:45', isLocked: false },
  { id: 3, title: 'Core Concepts and Syntax', duration: '25:10', isLocked: true },
  { id: 4, title: 'Building Your First Project', duration: '45:30', isLocked: true },
  { id: 5, title: 'Advanced Techniques', duration: '38:15', isLocked: true },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: 'Alex Rivera', course: 'Mastering React 19', rating: 5, text: 'This platform changed my career. The courses are top-notch and the community is so helpful!', initials: 'AR' },
  { id: 2, name: 'Samantha Lee', course: 'UI/UX Design Principles', rating: 5, text: 'The interactive quizzes and progress tracking kept me motivated throughout the entire course.', initials: 'SL' },
  { id: 3, name: 'David Miller', course: 'Python for Data Science', rating: 4, text: 'Great content and very professional instructors. I highly recommend the Pro plan.', initials: 'DM' },
];

export const INSTRUCTORS: Instructor[] = [
  { id: 1, name: 'Sarah Johnson', specialty: 'Web Development', rating: 4.9, students: 15000, avatar: 'SJ' },
  { id: 2, name: 'Dr. Emily White', specialty: 'History & Humanities', rating: 4.8, students: 12000, avatar: 'EW' },
  { id: 3, name: 'Prof. David Chen', specialty: 'Mathematics', rating: 4.9, students: 9000, avatar: 'DC' },
  { id: 4, name: 'Michael Brown', specialty: 'Data Science', rating: 4.7, students: 11000, avatar: 'MB' },
];

export const FAQS = [
  { question: 'How do I get a certificate?', answer: 'Once you complete all lessons and pass the final quiz with at least 80%, you can download your certificate from the dashboard.', category: 'General' },
  { question: 'Can I access courses offline?', answer: 'Yes, with our Pro and Enterprise plans, you can download lessons on our mobile app for offline viewing.', category: 'Technical' },
  { question: 'What is the refund policy?', answer: 'We offer a 30-day money-back guarantee if you are not satisfied with your purchase.', category: 'Billing' },
  { question: 'Are there any free courses?', answer: 'Yes, we have a selection of free introductory courses available for all registered users.', category: 'Courses' },
  { question: 'How can I contact my instructor?', answer: 'You can use the discussion forums within each course to ask questions and interact with instructors.', category: 'General' },
  { question: 'Can I switch plans later?', answer: 'Absolutely! You can upgrade or downgrade your plan at any time from your account settings.', category: 'Billing' },
  { question: 'Is there a student discount?', answer: 'Yes, students with a valid .edu email address are eligible for a 50% discount on the Pro plan.', category: 'Billing' },
  { question: 'What technical requirements are there?', answer: 'You just need a modern web browser and a stable internet connection. Our platform is mobile-friendly too!', category: 'Technical' },
];
