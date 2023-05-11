import { useState } from "react";

export default function NewJobForm({ handleAddNewJob }) {
  const [formData, setFormData] = useState({
    position: "",
    company: "",
    location: "",
    status: "applied",
    jobType: "remote",
    contact: "none",
    note: "...",
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
      contact: "none",
      note: "...",
    });
  }

  return (
    <div className="h-full">
      <div className="border-x-4 border-indigo-400 bg-neutral-600 bg-opacity-50 my-12 mx-10 px-10 py-14 rounded-lg text-white lg:mx-60">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="lg:grid grid-cols-2 gap-x-4">
            <div className="mb-2">
              <label htmlFor="position" className="block font-medium mb-2">
                Position:
              </label>
              <input
                type="text"
                name="position"
                placeholder="ex. Full Stack Developer"
                value={formData.position}
                onChange={handleChange}
                className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="company" className="block font-medium mb-2">
                Company:
              </label>
              <input
                type="text"
                name="company"
                placeholder="ex. Google"
                value={formData.company}
                onChange={handleChange}
                className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <label htmlFor="status" className="block font-medium mb-2">
                Status:
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
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
                className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
              >
                <option value="remote">Remote</option>
                <option value="on-site">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Location:
            </label>
            <input
              type="text"
              name="location"
              placeholder="ex. San Fancisco, CA"
              value={formData.location}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Contact:
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded-lg py-2 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="location" className="block font-medium mb-2">
              Note:
            </label>
            <textarea
              type="text"
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="w-full border rounded-lg py-4 px-3 bg-transparent text-white focus:outline-none focus:border-gray-400"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="border bg-neutral-600 bg-opacity-50 text-white rounded-lg py-2 px-4 hover:bg-neutral-800"
            >
              <span className="font-display">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
