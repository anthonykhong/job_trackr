import React from "react";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList({ videos, onVideoSelect }) {
  return (
    <div className="max-h-96 overflow-y-auto rounded-lg my-10 mx-10 bg-neutral-400 bg-opacity-50">
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
