import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="flex flex-col h-screen bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-16">
        <a href="/">
          <img
            className="h-12"
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
          />
        </a>
      </div>
      <div className="flex flex-col items-start justify-start flex-grow p-4">
        <Link
          to="/"
          className="py-2 px-4 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded"
        >
          Dashboard
        </Link>
        <Link
          to="/"
          className="py-2 px-4 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded"
        >
          Add Job
        </Link>
        <Link
          to="/"
          className="py-2 px-4 text-sm text-gray-400 hover:text-gray-200 hover:bg-gray-700 rounded"
        >
          Prep
        </Link>
      </div>
    </aside>
  );
}
