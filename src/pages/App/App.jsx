import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import Job from "../Job/Job";
import NewJob from "../NewJob/NewJob";
import EditJob from "../../components/EditJob/EditJob";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());

  function updateUser(userState) {
    setUser(userState);
  }

  return (
    <main className="flex">
      {user ? (
        <>
          <SideBar updateUser={updateUser} />
          <div className="flex-grow ml-60">
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/job" element={<Dashboard />} />
              <Route path="/job/new" element={<NewJob />} />
              <Route path="/job/:id/edit" element={<EditJob />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
