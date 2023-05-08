import React from "react";

export default function JobCard({
  user,
  job,
  handleEditJob,
  handleDeleteJob,
  handleFavorite,
}) {
  function handleEdit() {
    handleEditJob(job._id);
  }

  function handleDelete() {
    handleDeleteJob(job._id);
  }

  function favoriteHandler() {
    handleFavorite(job._id);
  }

  return (
    <div className="text-white bg-neutral-400 bg-opacity-50 rounded-lg shadow-md p-6 m-4">
      <h2 className="text-xl font-medium mb-2">{job.position}</h2>
      <p className="text-gray-300 text-sm mb-2">{job.company}</p>
      <p className="text-gray-300 text-sm mb-2">{job.location}</p>
      <p className="text-gray-300 text-sm mb-2">Status: {job.status}</p>
      <p className="text-gray-300 text-sm mb-2">Job Type: {job.jobType}</p>
      <p className="text-gray-300 text-sm mb-2">Contact: {job.contact}</p>
      <p className="text-gray-300 text-sm mb-2">Note: {job.note}</p>
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
      <button
        className="px-4 py-2 rounded text-white mb-2"
        onClick={favoriteHandler}
      >
        <div className="flex flex-row items-center">
          <img
            className="h-8 mr-1"
            src={
              job.favorites.length > 0
                ? "https://res.cloudinary.com/diw7vmgum/image/upload/v1683581483/icons8-star-100_b7fu5f.png"
                : "https://res.cloudinary.com/diw7vmgum/image/upload/v1683581432/icons8-star-100_copy_x7fewz.png"
            }
          />
        </div>
      </button>
    </div>
  );
}
