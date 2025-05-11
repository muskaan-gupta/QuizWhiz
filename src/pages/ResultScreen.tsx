import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuizResults from '../components/QuizResults';

const ResultsScreen: React.FC = () => {
  const { currentCategory, quizResult, startQuiz, resetQuiz } = useQuiz();

  if (!currentCategory || !quizResult) return null;

  return (
    <div className="max-w-3xl mx-auto">
      <QuizResults
        result={quizResult}
        categoryName={currentCategory.name}
        onRestart={startQuiz}
        onNewCategory={resetQuiz}
      />
    </div>
  );
};

export default ResultsScreen;