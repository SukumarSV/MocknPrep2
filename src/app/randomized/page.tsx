'use client';
import React, { useState, useEffect } from 'react';
import questionsByTopic from '../data/questions';

// Define a type for questions
type Question = {
  id: number;
  topic: string;
  question: string;
  options: string[];
  answer: number; // 0-based index
  explanation?: {
    step_1: string;
    step_2: string;
    step_3: string;
    step_4: string;
    step_5: string;
    final_answer: string;
  };
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
  const [mounted, setMounted] = useState(false);
  const [showExplanations, setShowExplanations] = useState<{[key: number]: boolean}>({});
  const [feedback, setFeedback] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackError, setFeedbackError] = useState('');
  const [navOpen, setNavOpen] = useState(false); // For mobile drawer

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Add beforeunload event listener
      const handleBeforeUnload = (/*e: BeforeUnloadEvent*/) => {
        if (selectedAnswers.some(answer => answer !== null) && !submitted) {
          // e.preventDefault();
          return true;
        }
      };

      // Add popstate event listener for back button
      const handlePopState = (/*e: PopStateEvent*/) => {
        if (selectedAnswers.some(answer => answer !== null) && !submitted) {
          if (!window.confirm('You have unsaved answers. Are you sure you want to leave?')) {
            // e.preventDefault();
            window.history.go(1);
          }
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [mounted, selectedAnswers, submitted]);

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
    if (window.confirm('Are you sure you want to reset all answers? This action cannot be undone.')) {
      setSelectedAnswers(Array(questions.length).fill(null));
      setSubmitted(false);
      setScore(0);
    }
  };

  const scrollToQuestion = (index: number) => {
    if (!mounted) return;
    
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

  const toggleExplanation = (index: number) => {
    setShowExplanations(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      <style>{blinkAnimation}</style>

      {/* Test Title and Actions */}
      <div className="fixed top-0 left-0 right-0 bg-white py-2 shadow-md z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            <button
              className="text-gray-600 hover:text-gray-900 relative group focus:outline-none focus:ring-0 focus:ring-offset-0 focus:border-0 border-0 p-2 md:p-0"
              style={{ outline: 'none', border: 'none' }}
              onClick={(e) => {
                if (selectedAnswers.some(answer => answer !== null) && !submitted) {
                  if (!window.confirm('You have unsaved answers. Are you sure you want to leave?')) {
                    e.preventDefault();
                    return;
                  }
                }
                window.location.href = '/';
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Back to Test List
              </span>
            </button>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-black truncate">TN MRB - Pharmacist - Mock Test</h1>
          </div>
          {/* Desktop: Controls in header */}
          <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full md:w-auto mt-2 md:mt-0">
            <div className="text-xs sm:text-sm text-gray-600">
              Attended: {selectedAnswers.filter(answer => answer !== null).length} / {questions.length}
            </div>
            {!submitted ? (
              <div className="flex gap-2 sm:gap-4 w-full md:w-auto">
                {selectedAnswers.some(answer => answer !== null) && (
                  <button
                    onClick={handleReset}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors w-full md:w-auto"
                  >
                    Reset All
                  </button>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={!selectedAnswers.some(answer => answer !== null)}
                  className={`bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition-colors w-full md:w-auto ${!selectedAnswers.some(answer => answer !== null) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                >
                  Submit Test
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 w-full md:w-auto">
                <h2 className={`text-lg sm:text-xl font-bold ${(score / questions.length) < 0.4 ? 'text-red-600' : 'text-green-600'}`}> 
                  Score: {score} / {questions.length}
                </h2>
                <button
                  onClick={handleReset}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors w-full md:w-auto"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pt-20 text-black">
        <div className="flex gap-4">
          {/* Left Vertical Banner (desktop only) */}
          <div className="hidden lg:block fixed left-8 top-20 w-[160px] bg-white rounded-xl shadow-md p-4">
            <div className="bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500 h-[600px] flex items-center justify-center">
              Google Ads Vertical Banner (160x600)
            </div>
          </div>

          {/* Questions Container */}
          <div className="flex-1 bg-white rounded-xl shadow-md p-4 lg:ml-[176px]">
            {/* Mobile: Floating nav button at bottom right */}
            {/* Mobile: Fixed bottom bar for controls */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg px-4 py-3 flex flex-col gap-2">
              <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-gray-600">
                  Attended: {selectedAnswers.filter(answer => answer !== null).length} / {questions.length}
                </div>
                {submitted && (
                  <span className={`text-sm font-bold ${score / questions.length < 0.4 ? 'text-red-600' : 'text-green-600'}`}>Score: {score} / {questions.length}</span>
                )}
              </div>
              {!submitted ? (
                <div className="flex gap-2">
                  {/* Questions Navigation Button (compact, circular) */}
                  <button
                    onClick={() => setNavOpen(true)}
                    className="bg-gray-200 text-gray-800 w-12 h-12 rounded-full shadow hover:bg-gray-300 transition-colors flex items-center justify-center focus:outline-none"
                    aria-label="Open question navigation"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <rect x="4" y="5" width="16" height="2.5" rx="1" fill="currentColor" />
                      <rect x="4" y="10.25" width="16" height="2.5" rx="1" fill="currentColor" />
                      <rect x="4" y="15.5" width="16" height="2.5" rx="1" fill="currentColor" />
                    </svg>
                  </button>
                  {selectedAnswers.some(answer => answer !== null) && (
                    <button
                      onClick={handleReset}
                      className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors"
                    >
                      Reset All
                    </button>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedAnswers.some(answer => answer !== null)}
                    className={`flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg shadow transition-colors ${!selectedAnswers.some(answer => answer !== null) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                  >
                    Submit Test
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 items-center">
                  <button
                    onClick={handleReset}
                    className="flex-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
            {questions.map((q, index) => (
              <div 
                id={`question-${index}`}
                key={q.id} 
                className={`mb-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 
                  ${selectedAnswers[index] !== null ? 'bg-blue-50 border-l-2 border-blue-600' : ''}
                  ${blinkingQuestion === index ? 'animate-[blink_1s_ease-in-out_2]' : ''}
                  ${showExplanations[index] ? 'border border-gray-300' : ''}`}
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
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <p style={{ color: selectedAnswers[index] === q.answer ? 'green' : 'red' }}>
                        {selectedAnswers[index] === q.answer
                          ? 'Correct'
                          : `Wrong. Correct answer: ${q.options[q.answer]}`}
                      </p>
                      {q.explanation && (
                        <button
                          onClick={() => toggleExplanation(index)}
                          className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                        >
                          {showExplanations[index] ? 'Hide Explanation' : 'Show Explanation'}
                          <span className="text-xs">
                            {showExplanations[index] ? '▲' : '▼'}
                          </span>
                        </button>
                      )}
                    </div>
                    {q.explanation && showExplanations[index] && (
                      <div className="bg-gray-50 p-4 rounded-lg mt-2">
                        <h5 className="font-semibold mb-2 text-gray-700">Explanation:</h5>
                        <ol className="list-decimal pl-5 space-y-1">
                          {Object.entries(q.explanation).map(([key, value]) => (
                            key !== 'final_answer' && (
                              <li key={key} className="text-gray-600">{value}</li>
                            )
                          ))}
                        </ol>
                        <p className="mt-2 font-semibold text-blue-600">{q.explanation.final_answer}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Bottom Horizontal Banner */}
            <div className="mt-8 bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500">
              Google Ads Bottom Banner (728x90)
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block fixed right-8 top-32 w-64 bg-white rounded-xl shadow-md p-4">
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
            {/* Feedback Area */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-md font-semibold mb-2 text-gray-700">Feedback</h4>
              {feedbackSent ? (
                <div className="text-green-600 text-sm font-medium">Thank you for your feedback!</div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFeedbackError('');
                    try {
                      const res = await fetch('/api/feedback', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ feedback }),
                      });
                      if (res.ok) {
                        setFeedbackSent(true);
                        setFeedback('');
                      } else {
                        const data = await res.json();
                        setFeedbackError(data.error || 'Failed to send feedback.');
                      }
                    } catch {
                      setFeedbackError('Failed to send feedback.');
                    }
                  }}
                >
                  <textarea
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                    rows={3}
                    placeholder="Share your feedback..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 text-sm mb-2 resize-none"
                  />
                  {feedbackError && <div className="text-red-600 text-xs mb-2">{feedbackError}</div>}
                  <button
                    type="submit"
                    disabled={!feedback.trim()}
                    className={`w-full bg-orange-500 text-white font-bold py-1.5 rounded-lg transition-colors ${!feedback.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}`}
                  >
                    Send Feedback
                  </button>
                </form>
              )}
            </div>
            {/* Google Ads Sidebar Placeholder */}
            <div className="mt-6 bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500">
              Google Ads Sidebar (300x250)
            </div>
          </div>

          {/* Mobile Navigation Bottom Sheet */}
          <div
            className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${navOpen ? 'translate-y-0' : 'translate-y-full'}`}
            style={{ pointerEvents: navOpen ? 'auto' : 'none' }}
            aria-hidden={!navOpen}
          >
            <div className={`absolute left-0 bottom-0 w-full max-h-[70vh] bg-white shadow-2xl p-4 rounded-t-2xl transition-transform duration-300 ${navOpen ? 'translate-y-0' : 'translate-y-full'}`}
              style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.35)' }}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Question Navigation</h3>
                <button onClick={() => setNavOpen(false)} aria-label="Close navigation" className="text-gray-600 hover:text-gray-900 text-2xl font-bold">&times;</button>
              </div>
              <div className="overflow-x-auto mb-6">
                <div className="flex gap-2 min-w-max">
                  {questions.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => { scrollToQuestion(index); setNavOpen(false); }}
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
              {/* Feedback Area (optional, can be omitted on mobile) */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="text-md font-semibold mb-2 text-gray-700">Feedback</h4>
                {feedbackSent ? (
                  <div className="text-green-600 text-sm font-medium">Thank you for your feedback!</div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFeedbackError('');
                      try {
                        const res = await fetch('/api/feedback', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify({ feedback }),
                        });
                        if (res.ok) {
                          setFeedbackSent(true);
                          setFeedback('');
                        } else {
                          const data = await res.json();
                          setFeedbackError(data.error || 'Failed to send feedback.');
                        }
                      } catch {
                        setFeedbackError('Failed to send feedback.');
                      }
                    }}
                  >
                    <textarea
                      value={feedback}
                      onChange={e => setFeedback(e.target.value)}
                      rows={3}
                      placeholder="Share your feedback..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 text-sm mb-2 resize-none"
                    />
                    {feedbackError && <div className="text-red-600 text-xs mb-2">{feedbackError}</div>}
                    <button
                      type="submit"
                      disabled={!feedback.trim()}
                      className={`w-full bg-orange-500 text-white font-bold py-1.5 rounded-lg transition-colors ${!feedback.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}`}
                    >
                      Send Feedback
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 