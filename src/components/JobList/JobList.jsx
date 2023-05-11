import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({
  user,
  jobs,
  handleEditJob,
  handleDeleteJob,
  handleFavorite,
}) {
  const containerStyle = jobs.length <= 2 ? "h-screen" : "h-full";

  return (
    <div className={containerStyle}>
      {jobs.length === 0 && (
        <div className="flex flex-col justify-center items-center mt-60">
          <p className="text-center text-neutral-200 text-xl">
            It's like a ghost town in here.{" "}
          </p>
          <img
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683674763/cute-alien_syzt4u.gif"
            className="h-24"
          />
        </div>
      )}
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
    </div>
  );
}
