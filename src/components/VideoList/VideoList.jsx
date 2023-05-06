import React from "react";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg m-10 p-10 bg-neutral-400 bg-opacity-50">
      {videos.map((video) => (
        <VideoCard
          key={video.id.videoId}
          video={video}
          onVideoSelect={onVideoSelect}
        />
      ))}
    </div>
  );
}
