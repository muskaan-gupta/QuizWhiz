import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { CategoryCard } from '../components/CategoryCard';

const CategorySelection: React.FC = () => {
  const { categories, selectCategory, startQuiz } = useQuiz();

  const handleCategorySelect = (categoryId: string) => {
    selectCategory(categoryId);
    startQuiz();
  };

  return (
    <div className="animate-fadeIn">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">Quiz Challenge</h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8">Select a category to start your quiz</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(category => (
          <CategoryCard 
            key={category.id}
            category={category}
            onSelect={() => handleCategorySelect(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;