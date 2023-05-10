import React, { useState, useEffect } from "react";
import * as jobsAPI from "../../utilities/jobs-api";
import { getUser } from "../../utilities/users-service";

export default function StatusCount() {
  const [data, setData] = useState({ applied: 0, interview: 0, declined: 0 });
  const currentUser = getUser();

  useEffect(() => {
    async function fetchData() {
      const response = await jobsAPI.getAllJobs();
      const userJobs = response.filter(
        (job) => job.user._id === currentUser._id
      );
      const counts = userJobs.reduce(
        (acc, job) => {
          const status = job.status;
          if (!acc[status]) {
            acc[status] = 0;
          }
          acc[status]++;
          return acc;
        },
        { applied: 0, interview: 0, declined: 0 }
      );
      setData(counts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-around m-6">
        <div className="flex justify-center rounded-lg bg-neutral-400 bg-opacity-50 p-2">
          <p>Applied: {data.applied}</p>
        </div>
        <div className="flex justify-center rounded-lg bg-neutral-400 bg-opacity-50 p-2">
          <p>Interview: {data.interview}</p>
        </div>
        <div className="flex justify-center rounded-lg bg-neutral-400 bg-opacity-50 p-2">
          <p>Declined: {data.declined}</p>
        </div>
      </div>
    </div>
  );
}
