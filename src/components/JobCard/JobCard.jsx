import React from "react";

export default function JobCard({
  user,
  job,
  handleEditJob,
  handleDeleteJob,
  handleFavorite,
}) {
  const currentUser = user._id === job.user._id;

  function handleEdit() {
    handleEditJob(job._id);
  }

  function handleDelete() {
    handleDeleteJob(job._id);
  }

  function favoriteHandler() {
    handleFavorite(job._id);
  }

  if (currentUser) {
    return (
      <div className="text-white bg-neutral-400 bg-opacity-50 rounded-lg shadow-md p-6 m-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-300 text-sm mb-2">
            {new Date(job.date).toLocaleString()}
          </p>
          <button
            className="px-4 py-2 rounded text-white"
            onClick={favoriteHandler}
          >
            <div className="flex flex-row items-center">
              <img
                className="h-7 mr-1"
                src={
                  job.favorites.length > 0
                    ? "https://res.cloudinary.com/diw7vmgum/image/upload/v1683581483/icons8-star-100_b7fu5f.png"
                    : "https://res.cloudinary.com/diw7vmgum/image/upload/v1683581432/icons8-star-100_copy_x7fewz.png"
                }
              />
            </div>
          </button>
        </div>
        <div className="flex justify-between">
          <h2 className="flex items-center text-xl font-medium mb-3">
            {job.position}
          </h2>
        </div>
        <p className="text-white text-lg mb-2">{job.company}</p>
        <p className="text-gray-300 text-sm mb-2">Status: {job.status}</p>
        <p className="flex items-center text-gray-300 text-sm mb-2">
          <img
            className="h-4 mr-1"
            src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683590484/icons8-location-100_sbghbb.png"
          />{" "}
          {job.location}
        </p>
        <p className="text-gray-300 text-sm mb-2">Job Type: {job.jobType}</p>
        <p className="text-gray-300 text-sm mb-2">Contact: {job.contact}</p>
        <div className="text-gray-300 text-sm mb-2">
          <p>Note:</p>
          <p className="rounded-lg bg-white bg-opacity-50 text-neutral-600 text-sm m-2 p-2">
            {job.note}
          </p>
        </div>
        <div className="">
          <button
            className="text-neutral-800 hover:bg-neutral-500 hover:bg-opacity-50 py-2 px-4 rounded"
            onClick={handleEdit}
          >
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013994/Edit_noqugx.png"
              alt="Comment icon"
            />
          </button>
          <button
            className="text-neutral-800 hover:bg-neutral-500 hover:bg-opacity-50 py-2 px-4 rounded"
            onClick={handleDelete}
          >
            <img
              className="h-6"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1682013449/delete_q7jh3x.png"
              alt="Comment icon"
            />
          </button>
        </div>
      </div>
    );
  }
}
