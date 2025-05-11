import React from 'react';
import { useQuiz } from '../context/QuizContext';
import QuizQuestion from '../components/QuizQuestion';
import ProgressBar from '../components/ProgessBar';

const QuizScreen: React.FC = () => {
  const { 
    currentCategory,
    currentQuestionIndex,
    submitAnswer,
    nextQuestion,
  } = useQuiz();

  if (!currentCategory) return null;

  const currentQuestion = currentCategory.questions[currentQuestionIndex];
  
  return (
    <div className="animate-fadeIn max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
        {currentCategory.name}
      </h2>
      
      <div className="mb-6">
        <ProgressBar 
          current={currentQuestionIndex + 1} 
          total={currentCategory.questions.length} 
        />
      </div>
      
      <QuizQuestion
        question={currentQuestion}
        onAnswer={submitAnswer}
        onNext={nextQuestion}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={currentCategory.questions.length}
      />
    </div>
  );
};

export default QuizScreen;