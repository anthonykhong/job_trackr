import { useState } from "react";

export default function NewJobForm({ handleAddNewJob }) {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    status: "applied",
    jobType: "remote",
  });

  async function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await handleAddNewJob(formData);
    setFormData({
      position: "",
      company: "",
      location: "",
      status: "applied",
      jobType: "remote",
    });
  }

  return (
    <div className="bg-neutral-400 bg-opacity-50 m-6 px-10 py-20 rounded-lg text-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="position" className="block font-medium mb-2">
            Position:
          </label>
          <input
            type="text"
            name="position"
            value={formData.position}
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
            value={formData.company}
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
            value={formData.location}
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
            value={formData.status}
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
            value={formData.jobType}
            onChange={handleChange}
            className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-500"
          >
            <option value="remote">Remote</option>
            <option value="on-site">On-site</option>
            <option value="hybrid">Hybrid</option>
          </select>
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
  );
}
