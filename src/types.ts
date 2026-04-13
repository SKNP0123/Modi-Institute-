export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Lesson {
  id: number;
  title: string;
  duration: string;
  isLocked: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  course: string;
  rating: number;
  text: string;
  initials: string;
}

export interface Instructor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  students: number;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  isRecommended?: boolean;
}
