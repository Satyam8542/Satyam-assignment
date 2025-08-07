'use client';

import { useState } from 'react';

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <button className="text-sm hover:text-blue-600">Login</button>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700">Sign up</button>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Corporate Wellness</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Practo for Providers</a>
          <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Security & Help</a>
        </div>
      )}
    </div>
  );
}
