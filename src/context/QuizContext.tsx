import React, { createContext, useContext, useState } from 'react';
import type { Category, QuizResult, UserAnswer } from '../types';
import quizData from '../data/quizData';

interface QuizContextType {
  categories: Category[];
  currentCategory: Category | null;
  currentQuestionIndex: number;
  userAnswers: UserAnswer[];
  quizResult: QuizResult | null;
  isQuizActive: boolean;
  isQuizComplete: boolean;
  startTime: number | null;
  selectCategory: (categoryId: string) => void;
  startQuiz: () => void;
  submitAnswer: (questionId: string, selectedAnswer: string) => void;
  nextQuestion: () => void;
  completeQuiz: () => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [categories] = useState<Category[]>(quizData);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [isQuizComplete, setIsQuizComplete] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  const selectCategory = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
      setCurrentCategory(category);
    }
  };

  const startQuiz = () => {
    setIsQuizActive(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizResult(null);
    setIsQuizComplete(false);
    setStartTime(Date.now());
  };

  const submitAnswer = (questionId: string, selectedAnswer: string) => {
    if (!currentCategory) return;
    
    const currentQuestion = currentCategory.questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    const userAnswer: UserAnswer = {
      questionId,
      selectedAnswer,
      isCorrect,
    };
    
    setUserAnswers(prev => [...prev, userAnswer]);
  };

  const nextQuestion = () => {
    if (!currentCategory) return;
    
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    if (!currentCategory || !startTime) return;
    
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const timeTaken = Date.now() - startTime;
    
    const result: QuizResult = {
      categoryId: currentCategory.id,
      score: correctAnswers,
      totalQuestions: currentCategory.questions.length,
      answers: userAnswers,
      timeTaken,
    };
    
    setQuizResult(result);
    setIsQuizActive(false);
    setIsQuizComplete(true);
  };

  const resetQuiz = () => {
    setCurrentCategory(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizResult(null);
    setIsQuizActive(false);
    setIsQuizComplete(false);
    setStartTime(null);
  };

  return (
    <QuizContext.Provider
      value={{
        categories,
        currentCategory,
        currentQuestionIndex,
        userAnswers,
        quizResult,
        isQuizActive,
        isQuizComplete,
        startTime,
        selectCategory,
        startQuiz,
        submitAnswer,
        nextQuestion,
        completeQuiz,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = (): QuizContextType => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};