import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState({
    position: "",
    company: "",
    location: "",
    status: "applied",
    jobType: "remote",
    contact: "",
    note: "",
  });

  useEffect(() => {
    async function getJob() {
      try {
        const jobData = await jobsAPI.getJob(id);
        setJob(jobData);
      } catch (error) {
        console.error(error);
      }
    }
    getJob();
  }, [id]);

  function handleChange(event) {
    setJob({ ...job, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await jobsAPI.updateJob(id, job);
      navigate("/job");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="font-display flex justify-center font-extrabold text-white text-4xl">
          Edit
        </h1>
      </div>
      <div className="bg-neutral-400 bg-opacity-50 m-10 px-10 py-20 rounded-lg text-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="position" className="block font-medium mb-2">
              Position:
            </label>
            <input
              type="text"
              name="position"
              value={job.position}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block font-medium mb-2">
              Company:
            </label>
            <input
              type="text"
              name="company"
              value={job.company}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={job.location}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="status" className="block font-medium mb-2">
              Status:
            </label>
            <select
              name="status"
              value={job.status}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            >
              <option value="applied">Applied</option>
              <option value="interview">Interview</option>
              <option value="declined">Declined</option>
            </select>
          </div>
          <div>
            <label htmlFor="jobType" className="block font-medium mb-2">
              Job Type:
            </label>
            <select
              name="jobType"
              value={job.jobType}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            >
              <option value="remote">Remote</option>
              <option value="on-site">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              contact:
            </label>
            <input
              type="text"
              name="contact"
              value={job.contact}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Note:
            </label>
            <textarea
              type="text"
              name="note"
              value={job.note}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-white text-gray-800 rounded-lg py-2 px-4 hover:bg-gray-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
