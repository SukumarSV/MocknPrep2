'use client';
import React, { useState } from 'react';

// Define a type for contact submissions
interface Contact {
  name: string;
  email: string;
  phone?: string;
  message: string;
  createdAt: string;
}

export default function ViewContactsPage() {
  const [password, setPassword] = useState('');
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [error, setError] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchContacts = async (pwd: string) => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/contact?password=${encodeURIComponent(pwd)}`);
      if (res.ok) {
        setContacts(await res.json());
        setAuthenticated(true);
      } else {
        setError('Incorrect password or unauthorized.');
      }
    } catch {
      setError('Failed to fetch contacts.');
    }
    setLoading(false);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-sm w-full">
          <h1 className="text-2xl font-bold text-orange-500 mb-4">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 font-medium mb-4"
          />
          {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
          <button
            onClick={() => fetchContacts(password)}
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition-colors"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'View Contacts'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Contact Submissions</h1>
        {contacts.length === 0 ? (
          <div className="text-gray-600">No contacts found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-gray-800">
              <thead>
                <tr className="bg-gray-100 text-gray-900">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Phone</th>
                  <th className="p-2 border">Message</th>
                  <th className="p-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border">{c.name}</td>
                    <td className="p-2 border">{c.email}</td>
                    <td className="p-2 border">{c.phone || '-'}</td>
                    <td className="p-2 border max-w-xs break-words">{c.message}</td>
                    <td className="p-2 border">{c.createdAt ? new Date(c.createdAt).toLocaleString() : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 