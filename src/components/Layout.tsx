import React from 'react';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <header className="border-b border-gray-200 dark:border-gray-700 sticky top-0 bg-gray-50 dark:bg-gray-900 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
            Quiz<span className="text-teal-500">Whiz</span>
          </h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-6 sm:py-8">
        {children}
      </main>
      
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-auto py-4">
        <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} QuizWhiz - All questions are for educational purposes.
        </div>
      </footer>
    </div>
  );
};