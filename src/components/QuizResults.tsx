import React, { useMemo } from 'react';
import type { QuizResult } from '../types';
import Button from './Botton';

interface QuizResultsProps {
  result: QuizResult;
  categoryName: string;
  onRestart: () => void;
  onNewCategory: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
  result, 
  categoryName,
  onRestart, 
  onNewCategory 
}) => {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  
  const minutes = Math.floor(result.timeTaken / 60000);
  const seconds = Math.floor((result.timeTaken % 60000) / 1000);
  
  const formattedTime = `${minutes}m ${seconds}s`;
  
  const resultMessage = useMemo(() => {
    if (percentage >= 80) {
      return {
        title: 'Excellent!',
        message: 'You really know your stuff! Impressive knowledge!',
        color: 'text-green-500'
      };
    } else if (percentage >= 60) {
      return {
        title: 'Good Job!',
        message: 'You have a solid understanding of this topic.',
        color: 'text-blue-500'
      };
    } else if (percentage >= 40) {
      return {
        title: 'Not Bad!',
        message: 'You\'re getting there! A bit more study and you\'ll ace it.',
        color: 'text-yellow-500'
      };
    } else {
      return {
        title: 'Keep Learning!',
        message: 'There\'s room for improvement. Don\'t give up!',
        color: 'text-red-500'
      };
    }
  }, [percentage]);

  return (
    <div className="animate-scaleUp bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quiz Complete!</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{categoryName}</p>
      
      <div className="relative mb-8 pt-4">
        <div className="overflow-hidden h-32 w-32 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full mx-auto">
          <span className="text-3xl font-bold">
            {percentage}%
          </span>
        </div>
        <svg className="absolute top-0 left-1/2 -translate-x-1/2" width="140" height="140" viewBox="0 0 120 120">
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            fill="none" 
            stroke="#e2e8f0" 
            strokeWidth="12"
          />
          <circle 
            cx="60" 
            cy="60" 
            r="54" 
            fill="none" 
            stroke="#8b5cf6" 
            strokeWidth="12"
            strokeDasharray="339.3"
            strokeDashoffset={339.3 - (339.3 * percentage / 100)}
            className="transform -rotate-90 origin-center transition-all duration-1000 ease-out"
          />
        </svg>
      </div>
      
      <h3 className={`text-xl font-bold ${resultMessage.color} mb-2`}>{resultMessage.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{resultMessage.message}</p>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Score</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{result.score}/{result.totalQuestions}</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">{formattedTime}</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={onRestart} variant="primary" className="flex-1">
          Try Again
        </Button>
        <Button onClick={onNewCategory} variant="outline" className="flex-1">
          New Category
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;