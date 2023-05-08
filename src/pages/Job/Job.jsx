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

  return (
    <div>
      <div>
        <JobList user={user} jobs={jobs} handleEditJob={handleEditJob} />
      </div>
    </div>
  );
}
