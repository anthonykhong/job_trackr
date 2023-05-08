import sendRequest from "./send-request";

const BASE_URL = "/api/jobs";

export function getAllJobs() {
  return sendRequest(`${BASE_URL}`);
}

export function getJob(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createNewJob(jobData) {
  return sendRequest(`${BASE_URL}`, "POST", jobData);
}

export function updateJob(id, jobData) {
  return sendRequest(`${BASE_URL}/${id}`, "PATCH", jobData);
}

export function deleteJob(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE", { id });
}
