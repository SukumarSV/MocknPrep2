'use client';
import { useState } from 'react';

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
};

type QuizComponentProps = {
  questions: Question[];
  onComplete?: (score: number) => void;
};

const QuizComponent: React.FC<QuizComponentProps> = ({ questions, onComplete }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const handleSelect = (optionIndex: number): void => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = (): void => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = (): void => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = (): void => {
    let newScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
    if (onComplete) {
      onComplete(newScore);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {!submitted ? (
        <>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Question {currentQuestion + 1} of {questions.length}</h2>
              <div className="text-sm text-gray-600">
                Score: {score}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">{currentQ.question}</h3>
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-colors
                      ${selectedAnswers[currentQuestion] === index 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-blue-300'}`}
                    onClick={() => handleSelect(index)}
                  >
                    <div className="flex items-center">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-3
                        ${selectedAnswers[currentQuestion] === index 
                          ? 'border-blue-500 bg-blue-500 text-white' 
                          : 'border-gray-300'}`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span>{option}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-4 py-2 rounded-lg ${
                  currentQuestion === 0 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                Previous
              </button>
              
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">
            Your Score: {score} out of {questions.length}
          </p>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={q.id} className="p-4 border rounded-lg">
                <p className="font-medium mb-2">{q.question}</p>
                <p className={`${
                  selectedAnswers[index] === q.answer ? 'text-green-600' : 'text-red-600'
                }`}>
                  {selectedAnswers[index] === q.answer
                    ? '✓ Correct'
                    : `✗ Wrong. Correct answer: ${q.options[q.answer]}`}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComponent; 