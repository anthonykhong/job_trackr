import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({ user, jobs, handleEditJob }) {
  return (
    <>
      <main className="flex justify-center flex-col p-10">
        {jobs.map((j, idx) => (
          <JobCard
            user={user}
            job={j}
            handleEditJob={handleEditJob}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}