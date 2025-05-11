import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { QuizProvider, useQuiz } from './context/QuizContext';
import { Layout } from './components/Layout';
import CategorySelection from './pages/CategorySection';
import QuizScreen from './pages/QuizScreen';
import ResultsScreen from './pages/ResultScreen';
import './styles/animations.css';
import './index.css';

const QuizApp: React.FC = () => {
  const { isQuizActive, isQuizComplete } = useQuiz();

  return (
    <Layout>
      {!isQuizActive && !isQuizComplete && <CategorySelection />}
      {isQuizActive && <QuizScreen />}
      {!isQuizActive && isQuizComplete && <ResultsScreen />}
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <QuizApp />
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;