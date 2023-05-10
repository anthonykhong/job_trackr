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
    <div className="flex justify-center">
      <div className="lg:flex justify-even m-6">
        <div className="text-neutral-100 border-b-4 border-yellow-500 rounded-lg bg-white bg-opacity-40 m-4 p-2 w-96">
          <div className="flex justify-between items-center mx-10 my-6">
            <span className="text-yellow-500 text-4xl">{data.applied}</span>
            <img
              className="rounded-lg bg-yellow-500 bg-opacity-50 h-14 p-2"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683753283/icons8-briefcase-64_sxtj1g.png"
            />
          </div>
          <p className="font-display text-2xl ml-10 my-6">Applied</p>
        </div>
        <div className="text-neutral-100 border-b-4 border-green-500 rounded-lg bg-white bg-opacity-40 m-4 p-2 w-96">
          <div className="flex justify-between items-center mx-10 my-6">
            <span className="text-green-500 text-4xl">{data.interview}</span>
            <img
              className="rounded-lg bg-green-500 bg-opacity-50 h-14 p-2"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683753247/icons8-schedule-64_iidhwm.png"
            />
          </div>
          <p className="font-display text-2xl ml-10 my-6">
            Interviews Scheduled
          </p>
        </div>
        <div className="text-neutral-100 border-b-4 border-red-500 rounded-lg bg-white bg-opacity-40 m-4 p-2 w-96">
          <div className="flex justify-between items-center mx-10 my-6">
            <span className="text-red-500 text-4xl">{data.declined}</span>
            <img
              className="rounded-lg bg-red-500 bg-opacity-50 h-14 p-2"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1683753268/icons8-stop-50_m942jb.png"
            />
          </div>
          <p className="font-display text-2xl ml-10 my-6">
            Declined Opportunity
          </p>
        </div>
      </div>
    </div>
  );
}
