import React from "react";

export default function JobCard({ user, job, handleEditJob, handleDeleteJob }) {
  function handleEdit() {
    handleEditJob(job._id);
  }

  function handleDelete() {
    handleDeleteJob(job._id);
  }

  return (
    <div className="text-white bg-neutral-400 bg-opacity-50 rounded-lg shadow-md p-6 m-4">
      <h2 className="text-xl font-medium mb-2">{job.position}</h2>
      <p className="text-gray-300 text-sm mb-2">{job.company}</p>
      <p className="text-gray-300 text-sm mb-2">{job.location}</p>
      <p className="text-gray-300 text-sm mb-2">Status: {job.status}</p>
      <p className="text-gray-300 text-sm mb-2">Job Type: {job.jobType}</p>
      <p className="text-gray-300 text-sm mb-2">
        Date Added: {new Date(job.date).toLocaleDateString()}
      </p>
      <button
        className="bg-neutral-200 text-neutral-800 py-2 px-4 rounded"
        onClick={handleEdit}
      >
        Edit
      </button>
      <button
        className="bg-red-500 text-neutral-800 py-2 px-4 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}
