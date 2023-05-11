import sendRequest from "./send-request";

const BASE_URL = "/api/videos";

export function fetchVideos(searchQuery) {
  return sendRequest(`${BASE_URL}/${searchQuery}`);
}
