import React from "react";
import NewJobForm from "../../components/NewJobForm/NewJobForm";
import * as jobsAPI from "../../utilities//jobs-api";

export default function NewJob() {
  async function handleAddNewJob(formData) {
    await jobsAPI.createNewJob(formData);
  }

  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="flex justify-center font-extrabold text-white text-4xl">
          Add a Job
        </h1>
      </div>
      <NewJobForm handleAddNewJob={handleAddNewJob} />
    </div>
  );
}
