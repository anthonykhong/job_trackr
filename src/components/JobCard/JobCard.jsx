import React from "react";

export default function JobCard({ user, job }) {
  return (
    <div>
      <h2>{job.position}</h2>
      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>Status: {job.status}</p>
      <p>Job Type: {job.jobType}</p>
      <p>Date Added: {new Date(job.date).toLocaleDateString()}</p>
    </div>
  );
}
