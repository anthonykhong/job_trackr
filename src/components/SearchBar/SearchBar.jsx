import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="p-10 mx-10">
      <form
        className="flex justify-between items-center"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search"
          className="border border-gray-400 p-2 rounded-lg w-full focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          className="bg-neutral-700 text-white ml-2 px-4 py-2 rounded-lg hover:bg-neutral-800"
        >
          <img
            className="px-2 py-1"
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683412709/icons8-search-24_nhzexf.png"
          />
        </button>
      </form>
    </div>
  );
}
