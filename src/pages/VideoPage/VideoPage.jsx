import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoList from "../../components/VideoList/VideoList";

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  async function fetchVideos(searchQuery) {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet%2Cid&regionCode=US&maxResults=10&order=date`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "7ea9e04689msh390306d73ce8754p1ad7bdjsn792440c3a042",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setVideos(data.items);
      setSelectedVideoId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const handleVideoSelect = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div>
      <div className="rounded-lg bg-neutral-400 bg-opacity-50 mx-6 mt-3 p-6">
        <h1 className="flex justify-center font-extrabold text-white text-4xl">
          Videos
        </h1>
      </div>
      <SearchBar onSearch={fetchVideos} />
      <div className="flex flex-col items-center h-screen">
        <VideoDetail videoId={selectedVideoId} />
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}
