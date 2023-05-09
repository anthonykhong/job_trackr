import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import NewJob from "../NewJob/NewJob";
import Stat from "../Stat/Stat";
import EditJob from "../../components/EditJob/EditJob";
import VideoPage from "../VideoPage/VideoPage";

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
              <Route path="/job" element={<Dashboard user={user} />} />
              <Route path="/job/new" element={<NewJob />} />
              <Route path="/job/stat" element={<Stat />} />
              <Route path="/job/:id/edit" element={<EditJob />} />
              <Route path="/video" element={<VideoPage />} />
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
