'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const availableTests = [
  {
    id: 'TN-MRB',
    title: 'TN MRB - Pharmacist - Mock Test',
    description: 'A comprehensive test with randomized questions from all topics',
    duration: '60 minutes',
    questions: 50,
    difficulty: 'Mixed'
  },
  {
    id: 'topic-wise',
    title: 'Topic-wise Practice',
    description: 'Practice questions organized by specific topics',
    duration: '30 minutes',
    questions: 25,
    difficulty: 'Mixed'
  },
  {
    id: 'quick-test',
    title: 'Quick Assessment',
    description: 'A shorter test for quick assessment',
    duration: '15 minutes',
    questions: 15,
    difficulty: 'Easy'
  },
  {
    id: 'mrb-tamil',
    title: 'MRB Tamil - Mock Test',
    description: 'Tamil language mock test for MRB exam',
    duration: '30 minutes',
    questions: 25,
    difficulty: 'Medium'
  }
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const filteredTests = availableTests.filter(test =>
    test.title.toLowerCase().includes(search.toLowerCase()) ||
    test.description.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full mt-0 mb-10 bg-white shadow">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <Image src="/MocknPrep_logo.png" alt="MockNPrep Logo" width={48} height={48} className="h-12 w-12 object-contain rounded-full bg-white cursor-pointer group-hover:opacity-80 transition" />
              <span className="text-2xl font-bold text-emerald-800 cursor-pointer group-hover:text-orange-500 transition">MockNPrep</span>
            </Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-gray-700 font-medium">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-gray-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-white shadow-2xl border-b border-gray-200 z-50">
            <ul className="flex flex-col py-2 px-4 gap-2 text-gray-700 font-medium">
              <li>
                <Link href="/" className="block py-2 px-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 px-2 rounded hover:bg-gray-100 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </header>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Available Tests</h1>
          <div className="relative w-full md:w-72">
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search exams..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition text-gray-800 font-medium pr-10"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 focus:outline-none"
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 8.586l4.95-4.95a1 1 0 111.414 1.414L11.414 10l4.95 4.95a1 1 0 01-1.414 1.414L10 11.414l-4.95 4.95a1 1 0 01-1.414-1.414L8.586 10l-4.95-4.95A1 1 0 115.05 3.636L10 8.586z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          {/* Exam List */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTests.map((test) => (
                <Link 
                  href={test.id === 'TN-MRB' ? '/randomized' : `/${test.id}`} 
                  key={test.id}
                  className="block"
                >
                  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-200 h-72 flex flex-col justify-between">
                    {test.id === 'TN-MRB' && (
                      <div className="mb-1">
                        <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">Trending</span>
                      </div>
                    )}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 flex items-center gap-2">
                      {test.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{test.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Duration:</span>
                        <br />
                        {test.duration}
                      </div>
                      <div>
                        <span className="font-medium">Questions:</span>
                        <br />
                        {test.questions}
                      </div>
                      <div>
                        <span className="font-medium">Difficulty:</span>
                        <br />
                        {test.difficulty}
                      </div>
                      <div className="flex items-end">
                        <span className="text-blue-600 font-medium">Start Test →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Bottom Horizontal Banner */}
            <div className="mt-8 bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500">
              Google Ads Bottom Banner (728x90)
            </div>
          </div>
          {/* Right Vertical Banner (desktop only) */}
          <div className="hidden lg:block w-[160px]">
            <div className="bg-gray-100 rounded-lg p-2 text-center text-sm text-gray-500 h-[600px] flex items-center justify-center">
              Google Ads Vertical Banner (160x600)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}