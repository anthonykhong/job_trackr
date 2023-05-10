import React, { useState } from "react";

export default function JobCard({
  user,
  job,
  handleEditJob,
  handleDeleteJob,
  handleFavorite,
}) {
  const currentUser = user._id === job.user._id;
  const [showFunctions, setShowFunctions] = useState(false);
  const statusClassName = getStatusClassName(job.status);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };

  function handleEdit() {
    handleEditJob(job._id);
  }

  function handleDelete() {
    handleDeleteJob(job._id);
  }

  function favoriteHandler() {
    handleFavorite(job._id);
  }

  function getStatusClassName(status) {
    if (status === "applied") {
      return "bg-yellow-500";
    } else if (status === "interview") {
      return "bg-green-500";
    } else if (status === "declined") {
      return "bg-red-500";
    }
    return "";
  }

  if (currentUser) {
    return (
      <div className="text-white bg-neutral-400 bg-opacity-50 rounded-lg shadow-md p-6 m-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-300 text-sm mb-2">
            {new Date(job.date).toLocaleDateString("en-US", options)}
          </p>
          <div className="flex items-center">
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
            <div className="relative">
              <button
                className="h-6 w-6 text-neutral-800 hover:bg-neutral-500 hover:bg-opacity-50 rounded-full flex items-center justify-center"
                onClick={() => setShowFunctions(!showFunctions)}
              >
                <img
                  className="h-4 w-4"
                  src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683652157/icons8-menu-vertical-90_j24jvv.png"
                  alt="Menu icon"
                />
              </button>
              {showFunctions && (
                <div className="absolute right-0 mt-2 w-28 bg-neutral-300 bg-opacity-50 rounded-md shadow-lg z-10">
                  <button
                    className="block w-full text-neutral-100 px-4 py-2 hover:bg-neutral-500 hover:bg-opacity-50"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-neutral-100 px-4 py-2 hover:bg-neutral-500 hover:bg-opacity-50"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <h2 className="flex items-center text-xl font-medium mb-3">
          {job.position}
        </h2>
        <div className="flex items-center mb-4">
          <p className="font-display text-white text-lg mb-2 mr-2">
            {job.company}
          </p>
          <p
            className={`flex justify-center rounded-full text-white text-sm mb-2 p-2 ${statusClassName} bg-opacity-75 w-20`}
          >
            {job.status}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6">
          <p className="flex items-center text-gray-300 text-sm mb-2">
            <img
              className="h-4 mr-1"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683590484/icons8-location-100_sbghbb.png"
            />{" "}
            {job.location}
          </p>
          <p className="flex items-center text-gray-300 text-sm mb-2">
            <img
              className="h-4 mr-1"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683651689/icons8-briefcase-128_csg4ox.png"
            />{" "}
            {job.jobType}
          </p>
          <div className="text-gray-300 text-sm mb-2">
            <div className="flex items-center ">
              <img
                className="h-4 mr-1"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683654175/icons8-note-64_qimefa.png"
                alt="Menu icon"
              />
              <p>Note:</p>
            </div>
            <p className="rounded-lg bg-white bg-opacity-50 text-neutral-600 text-sm m-2 p-2 w-52">
              {job.note}
            </p>
          </div>
          <div className="text-gray-300 text-sm mb-2">
            <div className="flex items-center ">
              <img
                className="h-4 mr-1"
                src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683651927/icons8-contact-96_dms0is.png"
                alt="Menu icon"
              />
              <p>Contact:</p>
            </div>
            <p className="rounded-lg bg-white bg-opacity-50 text-neutral-600 text-sm m-2 p-2 w-52">
              {job.contact}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
