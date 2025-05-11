export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

export interface UserAnswer {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
}

export interface QuizResult {
  categoryId: string;
  score: number;
  totalQuestions: number;
  answers: UserAnswer[];
  timeTaken: number;
}

export type Theme = 'light' | 'dark';