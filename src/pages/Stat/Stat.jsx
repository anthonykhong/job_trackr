import React, { useState, useEffect } from "react";
import * as jobsAPI from "../../utilities/jobs-api";
import { getUser } from "../../utilities/users-service";
import StatGraph from "../../components/StatGraph/StatGraph";
import StatusCount from "../../components/StatusCount/StatusCount";

export default function Stat() {
  const [data, setData] = useState([]);
  const currentUser = getUser();

  useEffect(() => {
    async function fetchData() {
      const response = await jobsAPI.getAllJobs();
      const userJobs = response.filter(
        (job) => job.user._id === currentUser._id
      );
      const jobData = userJobs.reduce((acc, job) => {
        const date = new Date(job.date).toLocaleDateString();
        if (acc[date]) {
          acc[date]++;
        } else {
          acc[date] = 1;
        }
        return acc;
      }, {});
      const chartData = Object.entries(jobData).map(([date, applications]) => ({
        date,
        applications,
      }));
      setData(chartData);
    }
    fetchData();
  }, [currentUser]);

  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="flex justify-center font-extrabold text-white text-4xl">
          Statistics
        </h1>
      </div>
      <StatusCount />
      <div className="flex justify-center rounded-lg bg-white bg-opacity-75 m-10 p-10">
        <StatGraph data={data} />
      </div>
    </div>
  );
}
