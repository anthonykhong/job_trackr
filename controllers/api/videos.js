require("dotenv").config();

async function fetchVideos(req, res) {
  const searchQuery = req.params.searchQuery;
  const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet%2Cid&regionCode=US&maxResults=10&order=date`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    res.json(data.items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
}

module.exports = { fetchVideos };
