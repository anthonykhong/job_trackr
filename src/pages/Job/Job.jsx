import { useState, useEffect } from "react";
import JobList from "../../components/JobList/JobList";
import * as jobsAPI from "../../utilities/jobs-api";
export default function Job({ user }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const allJobs = await jobsAPI.getAllJobs();
      setJobs(allJobs);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <div>
        <JobList user={user} jobs={jobs} />
      </div>
    </div>
  );
}
