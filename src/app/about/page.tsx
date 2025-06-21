'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (copied from home page) */}
      <header className="w-full mt-0 mb-10 bg-white shadow relative">
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
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">About MockNPrep</h1>
          <p className="text-gray-700 mb-2">MockNPrep is a modern platform designed to help you prepare for competitive exams with high-quality mock tests, instant feedback, and detailed explanations. Our mission is to make exam preparation accessible, effective, and engaging for everyone.</p>
        </div>
      </div>
    </div>
  );
} 