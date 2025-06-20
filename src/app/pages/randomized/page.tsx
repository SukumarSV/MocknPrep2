'use client';
import { useState } from 'react';
import questionsByTopic from '../../data/questions';

// Define a type for questions
type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  answer: number; // 0-based index
};

// Add keyframes for blinking effect
const blinkAnimation = `
@keyframes blink {
  0% { background-color: transparent; }
  50% { background-color: rgba(59, 130, 246, 0.1); }
  100% { background-color: transparent; }
}
`;

// Function to get randomized questions ensuring 2 per topic
const getRandomQuestions = (): Question[] => {
  const selectedQuestions: Question[] = [];
  const topics = Array.from(new Set(questionsByTopic.map(q => q.topic)));

  topics.forEach((topic) => {
    const topicQuestions = questionsByTopic.filter(q => q.topic === topic);
    const shuffled = [...topicQuestions].sort(() => Math.random() - 0.5);
    selectedQuestions.push(...shuffled.slice(0, 2)); // Ensure minimum of 2 per topic
  });

  // Fill remaining slots to reach 10 questions
  const extraQuestionsNeeded = 50 - selectedQuestions.length;
  if (extraQuestionsNeeded > 0) {
    const remainingQuestions = questionsByTopic.filter(q => !selectedQuestions.includes(q));
    selectedQuestions.push(...remainingQuestions.sort(() => Math.random() - 0.5).slice(0, extraQuestionsNeeded));
  }

  return selectedQuestions;
};

export default function RandomizedTest() {
  const [questions] = useState<Question[]>(getRandomQuestions());
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [blinkingQuestion, setBlinkingQuestion] = useState<number | null>(null);

  const handleSelect = (qIndex: number, optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[qIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleClearQuestion = (qIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[qIndex] = null;
    setSelectedAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setScore(0);
  };

  const scrollToQuestion = (index: number) => {
    const element = document.getElementById(`question-${index}`);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setBlinkingQuestion(index);
    setTimeout(() => setBlinkingQuestion(null), 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{blinkAnimation}</style>
      {/* Header Banner */}
      <div className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-2 z-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-lg text-center">Mock Test Platform</h2>
        </div>
      </div>

      {/* Test Title and Actions */}
      <div className="fixed top-10 left-0 right-0 bg-white py-2 shadow-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold hover:underline text-black">Randomized Mock Test</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              Attended: {selectedAnswers.filter(answer => answer !== null).length} / {questions.length}
            </div>
            {!submitted ? (
              <div className="flex gap-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
                >
                  Submit Test
                </button>
                {selectedAnswers.some(answer => answer !== null) && (
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors"
                  >
                    Reset All
                  </button>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <h2 className={`text-xl font-bold ${(score / questions.length) < 0.4 ? 'text-red-600' : 'text-green-600'}`}>
                  Score: {score} / {questions.length}
                </h2>
                <button
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pt-4 text-black">
        <div className="flex gap-4">
          {/* Questions Container */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-4">
            {questions.map((q, index) => (
              <div 
                id={`question-${index}`}
                key={q.id} 
                className={`mb-8 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 
                  ${selectedAnswers[index] !== null ? 'bg-blue-50 border-l-2 border-blue-600' : ''}
                  ${blinkingQuestion === index ? 'animate-[blink_1s_ease-in-out_2]' : ''}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className={`font-semibold ${selectedAnswers[index] !== null ? 'text-blue-600 font-bold' : ''}`}>
                    {index + 1}. {q.question} <small>({q.topic})</small>
                  </h4>
                  {selectedAnswers[index] !== null && !submitted && (
                    <button
                      onClick={() => handleClearQuestion(index)}
                      className="text-sm text-gray-600 hover:text-gray-800"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="pl-4">
                    <label className={`hover:text-blue-600 transition-colors duration-200 ${selectedAnswers[index] === oIndex ? 'text-blue-600 font-bold' : ''}`}>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={oIndex}
                        checked={selectedAnswers[index] === oIndex}
                        onChange={(e) => handleSelect(index, Number(e.target.value))}
                        disabled={submitted}
                      />
                      {' '}
                      {oIndex + 1}. {option}
                    </label>
                  </div>
                ))}

                {submitted && (
                  <p className="mt-1" style={{ color: selectedAnswers[index] === q.answer ? 'green' : 'red' }}>
                    {selectedAnswers[index] === q.answer
                      ? 'Correct'
                      : `Wrong. Correct answer: ${q.options[q.answer]}`}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Question Count Tiles */}
          <div className="fixed right-8 top-32 w-64 bg-white rounded-xl shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Question Navigation</h3>
            <div className="grid grid-cols-5 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToQuestion(index)}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-colors duration-200
                    ${selectedAnswers[index] !== null 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 