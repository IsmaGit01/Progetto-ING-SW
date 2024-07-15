import { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search functionality here
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full h-12 pl-14 pr-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-4 border-blue-500"
          placeholder="Cerca..."
        />
        <div className="absolute left-0 top-0 mt-3 ml-3">
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
