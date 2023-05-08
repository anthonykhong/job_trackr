import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "../../components/JobList/JobList";
import * as jobsAPI from "../../utilities/jobs-api";
export default function Job({ user }) {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      const allJobs = await jobsAPI.getAllJobs();
      setJobs(allJobs);
    }
    fetchJobs();
  }, []);

  function handleEditJob(id) {
    navigate(`/job/${id}/edit`);
  }

  async function handleDeleteJob(id) {
    try {
      await jobsAPI.deleteJob(id);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <JobList
          user={user}
          jobs={jobs}
          handleEditJob={handleEditJob}
          handleDeleteJob={handleDeleteJob}
        />
      </div>
    </div>
  );
}
