'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (copied from home page) */}
      <header className="w-full mt-0 mb-10 bg-white shadow">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/MocknPrep_logo.png" alt="MockNPrep Logo" width={48} height={48} className="h-12 w-12 object-contain rounded-full bg-white cursor-pointer" />
            </Link>
            <span className="text-2xl font-bold text-emerald-800">MockNPrep</span>
          </div>
          <nav>
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
        </div>
      </header>
      {/* Contact Form */}
      <div className="flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-xl w-full">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Contact MockNPrep</h1>
          {submitted ? (
            <div className="text-green-600 font-semibold text-center">Thank you for contacting us! We will get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Phone (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 font-medium"
                  required
                />
              </div>
              {error && <div className="text-red-600 text-sm font-medium">{error}</div>}
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