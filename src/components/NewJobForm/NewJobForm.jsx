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
    <form onSubmit={handleSubmit}>
      <label htmlFor="position">Position:</label>
      <input
        type="text"
        name="position"
        value={formData.position}
        onChange={handleChange}
      />

      <label htmlFor="company">Company:</label>
      <input
        type="text"
        name="company"
        value={formData.company}
        onChange={handleChange}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      <label htmlFor="status">Status:</label>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="declined">Declined</option>
      </select>

      <label htmlFor="jobType">Job Type:</label>
      <select name="jobType" value={formData.jobType} onChange={handleChange}>
        <option value="remote">Remote</option>
        <option value="on-site">On-site</option>
        <option value="hybrid">Hybrid</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
