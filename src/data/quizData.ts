import type { Category } from '../types';

const quizData: Category[] = [
  {
    id: 'riddles',
    name: 'Brain Teasers & Riddles',
    description: 'Test your lateral thinking with mind-bending riddles',
    icon: 'brain',
    color: 'bg-purple-500',
    questions: [
      {
        id: 'riddle-1',
        text: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?',
        options: ['Echo', 'Shadow', 'Thought', 'Dream'],
        correctAnswer: 'Echo'
      },
      {
        id: 'riddle-2',
        text: 'What has keys but no locks, space but no room, and you can enter but not go in?',
        options: ['Keyboard', 'Map', 'Piano', 'Book'],
        correctAnswer: 'Keyboard'
      },
      {
        id: 'riddle-3',
        text: 'The more you take, the more you leave behind. What am I?',
        options: ['Money', 'Footsteps', 'Time', 'Breath'],
        correctAnswer: 'Footsteps'
      },
      {
        id: 'riddle-4',
        text: 'What gets wet while drying?',
        options: ['Sand', 'Towel', 'Hair', 'Sponge'],
        correctAnswer: 'Towel'
      },
      {
        id: 'riddle-5',
        text: 'I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?',
        options: ['Cloud', 'Dream', 'Map', 'Globe'],
        correctAnswer: 'Map'
      }
    ]
  },
  {
    id: 'history',
    name: 'Historical Events',
    description: 'Journey through time with historical facts and events',
    icon: 'landmark',
    color: 'bg-amber-500',
    questions: [
      {
        id: 'history-1',
        text: 'In which year did World War II end?',
        options: ['1943', '1944', '1945', '1946'],
        correctAnswer: '1945'
      },
      {
        id: 'history-2',
        text: 'Who was the first person to step on the moon?',
        options: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'John Glenn'],
        correctAnswer: 'Neil Armstrong'
      },
      {
        id: 'history-3',
        text: 'Which ancient wonder was located in Alexandria?',
        options: ['Colossus of Rhodes', 'Hanging Gardens', 'Lighthouse', 'Temple of Artemis'],
        correctAnswer: 'Lighthouse'
      },
      {
        id: 'history-4',
        text: 'Which empire was ruled by Genghis Khan?',
        options: ['Roman Empire', 'Mongol Empire', 'Ottoman Empire', 'Byzantine Empire'],
        correctAnswer: 'Mongol Empire'
      },
      {
        id: 'history-5',
        text: 'Which year was the Declaration of Independence signed?',
        options: ['1772', '1774', '1776', '1778'],
        correctAnswer: '1776'
      }
    ]
  },
  {
    id: 'tech',
    name: 'Technology & Coding',
    description: 'Challenge your knowledge of programming and technology',
    icon: 'code',
    color: 'bg-blue-500',
    questions: [
      {
        id: 'tech-1',
        text: 'Which company created JavaScript?',
        options: ['Microsoft', 'Netscape', 'Mozilla', 'Oracle'],
        correctAnswer: 'Netscape'
      },
      {
        id: 'tech-2',
        text: 'What does CSS stand for?',
        options: ['Computer Style Sheets', 'Creative Style System', 'Cascading Style Sheets', 'Colorful Style Sheets'],
        correctAnswer: 'Cascading Style Sheets'
      },
      {
        id: 'tech-3',
        text: 'Which of these is NOT a JavaScript framework?',
        options: ['React', 'Angular', 'Django', 'Vue'],
        correctAnswer: 'Django'
      },
      {
        id: 'tech-4',
        text: 'What year was the first iPhone released?',
        options: ['2005', '2006', '2007', '2008'],
        correctAnswer: '2007'
      },
      {
        id: 'tech-5',
        text: 'In binary, what is 1 + 1?',
        options: ['10', '2', '11', '01'],
        correctAnswer: '10'
      }
    ]
  },
  {
    id: 'science',
    name: 'Science & Nature',
    description: 'Explore the wonders of our universe and natural world',
    icon: 'flask-conical',
    color: 'bg-emerald-500',
    questions: [
      {
        id: 'science-1',
        text: 'Which is the most abundant gas in Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Nitrogen'
      },
      {
        id: 'science-2',
        text: 'What is the smallest unit of life?',
        options: ['Atom', 'Cell', 'Molecule', 'Gene'],
        correctAnswer: 'Cell'
      },
      {
        id: 'science-3',
        text: 'What is the chemical symbol for gold?',
        options: ['Go', 'Gd', 'Gl', 'Au'],
        correctAnswer: 'Au'
      },
      {
        id: 'science-4',
        text: 'Which planet has the most moons?',
        options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        correctAnswer: 'Saturn'
      },
      {
        id: 'science-5',
        text: 'What is the process by which plants make their own food called?',
        options: ['Respiration', 'Photosynthesis', 'Fermentation', 'Digestion'],
        correctAnswer: 'Photosynthesis'
      }
    ]
  }
];

export default quizData;