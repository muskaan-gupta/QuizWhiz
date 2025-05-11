import React from 'react';
import { Brain, Code, FlaskConical, Landmark } from 'lucide-react';
import type { Category } from '../types';
import Button from './Botton';

interface CategoryCardProps {
  category: Category;
  onSelect: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, onSelect }) => {
  const getIcon = () => {
    switch (category.icon) 
    {
      case 'brain':
        return <Brain/>;
      case 'code':
        return <Code  />;
      case 'landmark':
        return <Landmark />;
      case 'flask-conical':
        return <FlaskConical />;
      default:
        return <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`p-3 sm:p-4 ${category.color}`}>
        <div className="rounded-full bg-white bg-opacity-20 p-2 sm:p-3 inline-block">
          {getIcon()}
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 h-12 line-clamp-2">{category.description}</p>
        <Button onClick={onSelect} variant="outline" className="w-full text-sm sm:text-base">
          Start Quiz
        </Button>
      </div>
    </div>
  );
};