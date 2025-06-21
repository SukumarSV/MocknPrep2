'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to send message.');
      }
    } catch {
      setError('Failed to send message.');
    }
  };

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
      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center px-4 text-gray-800">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact MockNPrep</h1>
          {submitted ? (
            <div className="text-green-700 font-semibold text-center">Thank you for contacting us! We will get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-900 font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800"
                />
              </div>
              <div>
                <label className="block text-gray-900 font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 font-medium"
                  required
                />
              </div>
              {error && <div className="text-red-700 text-sm font-medium">{error}</div>}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
} 