import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="fixed text-white p-3">
      <div className="flex flex-col h-100 rounded-lg p-3 bg-neutral-400 bg-opacity-50 shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-12 pr-2"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
              />
            </Link>
            <h2>JobTrackr</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <div>
                <li className="rounded-sm">
                  <Link
                    to="/job"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
                    />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="job/new"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
                    />
                    <span>Add Job</span>
                  </Link>
                </li>
                <li className="rounded-sm">
                  <Link
                    to="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
                    />
                    <span>Getting Ready</span>
                  </Link>
                </li>
              </div>
              <div>
                <li className="rounded-sm">
                  <Link
                    to="#"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <img
                      className="h-10"
                      src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683269824/Screenshot_2023-05-05_at_8.44.27_AM_ro0lja.png"
                    />
                    <span>Logout</span>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
