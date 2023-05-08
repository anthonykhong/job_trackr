import React from "react";
import JobCard from "../JobCard/JobCard";

export default function JobList({ user, jobs }) {
  return (
    <>
      <main>
        {jobs.map((j, idx) => (
          <JobCard user={user} job={j} index={idx} key={idx} />
        ))}
      </main>
    </>
  );
}
