import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
      <div 
        className="bg-purple-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${percentage}%` }}
        role="progressbar" 
        aria-valuenow={current} 
        aria-valuemin={0} 
        aria-valuemax={total}
      />
      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
        Question {current} of {total}
      </p>
    </div>
  );
};

export default ProgressBar;