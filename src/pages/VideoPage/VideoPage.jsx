import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import VideoList from "../../components/VideoList/VideoList";
import * as videosAPI from "../../utilities/videos-api";

export default function VideoPage() {
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  async function handleSearch(searchQuery) {
    try {
      const data = await videosAPI.fetchVideos(searchQuery);
      setVideos(data);
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
        <h1 className="font-display flex justify-center font-extrabold text-white text-4xl">
          Videos
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col items-center h-screen">
        <VideoDetail videoId={selectedVideoId} />
        <VideoList videos={videos} onVideoSelect={handleVideoSelect} />
      </div>
    </div>
  );
}
