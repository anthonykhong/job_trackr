import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobList from "../../components/JobList/JobList";
import * as jobsAPI from "../../utilities/jobs-api";

export default function Job({ user }) {
  const [jobs, setJobs] = useState([]);
  const [sortOption, setSortOption] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobs() {
      const allJobs = await jobsAPI.getAllJobs();
      setJobs(allJobs);
      setIsLoading(false);
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

  const sortedJobs = jobs
    .filter((job) => {
      if (sortOption === "all") {
        return true;
      }
      return job.favorites.includes(user._id);
    })
    .sort((a, b) => {
      if (sortOption === "favorites") {
        return b.favorites.length - a.favorites.length;
      }
      return 0;
    });

  return (
    <div>
      <div>
        <div className="flex items-center justify-center pt-10">
          <label htmlFor="sortOption" className="text-white pr-2">
            Sort by:
          </label>
          <select
            id="sortOption"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="rounded-md text-sm text-neutral-700 bg-white bg-opacity-50 px-3 py-2 pr-8"
          >
            <option value="all" className="text-gray-700">
              All jobs
            </option>
            <option value="favorites" className="text-gray-700">
              Favorites
            </option>
          </select>
        </div>
        {isLoading ? (
          <div className="flex justify-center my-60">
            <img
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683831603/kakaotalk-emoticon_z2ft1q.gif"
              className="h-28 mb-60"
            />
          </div>
        ) : (
          <JobList
            user={user}
            jobs={sortedJobs}
            handleEditJob={handleEditJob}
            handleDeleteJob={handleDeleteJob}
            handleFavorite={handleFavorite}
          />
        )}
      </div>
    </div>
  );
}
