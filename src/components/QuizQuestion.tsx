import React, { useState } from 'react';
import type { Question, UserAnswer } from '../types';
import Button from './Botton';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (questionId: string, selectedAnswer: string) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  onNext,
  questionNumber,
  totalQuestions,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);
  const [animation, setAnimation] = useState('');

  const handleOptionSelect = (option: string) => {
    if (answered) return;
    
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (!selectedOption || answered) return;
    
    onAnswer(question.id, selectedOption);
    setAnswered(true);
  };

  const handleNext = () => {
    setAnimation('animate-fadeOut');
    
    setTimeout(() => {
      setSelectedOption(null);
      setAnswered(false);
      setAnimation('animate-fadeIn');
      onNext();
    }, 300);
  };

  const getOptionClasses = (option: string) => {
    const baseClasses = 'p-4 border rounded-lg mb-3 cursor-pointer transition-all duration-300';
    
    if (!answered) {
      return `${baseClasses} ${
        selectedOption === option
          ? 'border-purple-500 bg-purple-50 dark:bg-purple-900 dark:bg-opacity-20'
          : 'border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700'
      }`;
    }
    
    if (option === question.correctAnswer) {
      return `${baseClasses} border-green-500 bg-green-50 dark:bg-green-900 dark:bg-opacity-20`;
    }
    
    if (selectedOption === option) {
      return `${baseClasses} border-red-500 bg-red-50 dark:bg-red-900 dark:bg-opacity-20`;
    }
    
    return `${baseClasses} opacity-50 border-gray-200 dark:border-gray-700`;
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-2xl mx-auto ${animation}`}>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">{question.text}</h2>
      
      <div className="space-y-2">
        {question.options.map((option) => (
          <div
            key={option}
            className={getOptionClasses(option)}
            onClick={() => handleOptionSelect(option)}
          >
            <span className="text-gray-800 dark:text-gray-200">{option}</span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        {!answered ? (
          <Button 
            onClick={handleSubmit} 
            disabled={!selectedOption}
            className="w-full"
          >
            Submit Answer
          </Button>
        ) : (
          <Button 
            onClick={handleNext} 
            variant="secondary"
            className="w-full"
          >
            {questionNumber === totalQuestions ? 'See Results' : 'Next Question'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizQuestion;