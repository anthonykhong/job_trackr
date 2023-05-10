import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({
  user,
  jobs,
  handleEditJob,
  handleDeleteJob,
  handleFavorite,
}) {
  return (
    <>
      <main className="flex justify-center flex-col p-10 lg:grid grid-cols-2 gap-x-6">
        {jobs.map((j, idx) => (
          <JobCard
            user={user}
            job={j}
            handleEditJob={handleEditJob}
            handleDeleteJob={handleDeleteJob}
            handleFavorite={handleFavorite}
            index={idx}
            key={idx}
          />
        ))}
      </main>
    </>
  );
}
