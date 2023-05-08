import React from "react";
import Job from "../Job/Job";

export default function Dashboard({ user }) {
  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="flex justify-center font-extrabold text-white text-4xl">
          Dashboard
        </h1>
      </div>
      <Job user={user} />
    </div>
  );
}
