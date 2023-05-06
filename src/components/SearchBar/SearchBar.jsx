import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="p-10">
      <form
        className="flex justify-between items-center"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Enter search keyword"
          className="border border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}
