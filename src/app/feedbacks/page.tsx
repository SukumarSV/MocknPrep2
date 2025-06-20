"use client";
import React, { useState } from 'react';

// Define a type for feedback
interface Feedback {
  feedback: string;
  createdAt: string;
}

export default function FeedbacksPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [error, setError] = useState('');

  const correctPassword = 'mocknprep2024'; // Change this to your desired password

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAuthenticated(true);
      setError('');
      // Fetch feedbacks from the API
      const res = await fetch('/api/feedback');
      if (res.ok) {
        setFeedbacks(await res.json());
      } else {
        setFeedbacks([]);
      }
    } else {
      setError('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-sm w-full">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Admin Login</h1>
          <form onSubmit={handleAuth} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 font-medium"
            />
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              View Feedbacks
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-16 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-2xl w-full">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">User Feedbacks</h1>
        {feedbacks.length === 0 ? (
          <div className="text-gray-500">No feedbacks yet.</div>
        ) : (
          <ul className="space-y-4">
            {feedbacks.map((fb, idx: number) => (
              <li key={idx} className="border-b border-gray-200 pb-2">
                <div className="text-gray-800">{fb.feedback}</div>
                <div className="text-xs text-gray-500 mt-1">{new Date(fb.createdAt).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 