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

  async function handleFavorite(id) {
    try {
      const job = jobs.find((job) => job._id === id);
      if (job.favorites.includes(user._id)) {
        await jobsAPI.removeFavorite(id);
        setJobs(
          jobs.map((job) => {
            if (job._id === id) {
              return {
                ...job,
                favorites: job.favorites.filter(
                  (favorite) => favorite !== user._id
                ),
              };
            }
            return job;
          })
        );
      } else {
        await jobsAPI.addFavorite(id);
        setJobs(
          jobs.map((job) => {
            if (job._id === id) {
              return { ...job, favorites: [...job.favorites, user._id] };
            }
            return job;
          })
        );
      }
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
          handleFavorite={handleFavorite}
        />
      </div>
    </div>
  );
}
