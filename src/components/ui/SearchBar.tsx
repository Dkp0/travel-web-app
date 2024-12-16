import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-2">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Where to?"
            className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <input
            type="date"
            className="w-full px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <Search className="h-5 w-5" />
          Search
        </button>
      </div>
    </div>
  );
}