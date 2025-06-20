'use client';
import QuizComponent from '../components/Quiz/QuizComponent';

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: 2,
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1,
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: 1,
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: 2,
  },
  {
    id: 5,
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Fe", "Au", "Cu"],
    answer: 2,
  },
];

export default function QuizPage() {
  const handleQuizComplete = (score: number) => {
    console.log(`Quiz completed with score: ${score}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Knowledge Quiz</h1>
        <QuizComponent 
          questions={sampleQuestions} 
          onComplete={handleQuizComplete}
        />
      </div>
    </div>
  );
} 