import sendRequest from "./send-request";

const BASE_URL = "/api/jobs";

export function getJob(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function createNewJob(jobData) {
  return sendRequest(`${BASE_URL}`, "POST", jobData);
}