import React from "react";
import * as userService from "../../utilities/users-service";
import { Link } from "react-router-dom";

export default function SideBar({ updateUser }) {
  function handleLogOut() {
    userService.logOut();
    updateUser(null);
  }

  return (
    <aside className="fixed text-white p-3">
      <div className="flex flex-col h-100 rounded-lg p-3 bg-neutral-400 bg-opacity-50 shadow w-60">
        <div className="space-y-3 flex-1">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-12 pr-2 hover:scale-110"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683397609/Screenshot_2023-05-06_at_8.25.08_PM_auqlcq.png"
              />
            </Link>
            <h2 className="font-bold">JobTrackr</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm">
                <Link
                  to="/job"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    className="h-8"
                    src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683357798/icons8-dashboard-100_fbrdz0.png"
                  />
                  <span className="hover:scale-110 hover:text-neutral-200">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="job/new"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    className="h-8"
                    src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683357953/icons8-add-100_bjrzsa.png"
                  />
                  <span className="hover:scale-110 hover:text-neutral-200">
                    Add Job
                  </span>
                </Link>
              </li>
              <li className="rounded-sm">
                <Link
                  to="#"
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    className="h-8"
                    src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683358054/icons8-circled-play-100_iu8ikl.png"
                  />
                  <span className="hover:scale-110 hover:text-neutral-200">
                    Getting Ready
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm mt-auto">
                <Link
                  to=""
                  onClick={handleLogOut}
                  className="flex items-center p-2 space-x-3 rounded-md"
                >
                  <img
                    className="h-8"
                    src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683358171/icons8-logout-rounded-left-100_jflu2n.png"
                  />
                  <span className="hover:scale-110 hover:text-neutral-200">
                    Logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}
