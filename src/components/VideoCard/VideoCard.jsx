import React from "react";

export default function VideoCard({ video, onVideoSelect }) {
  const handleVideoSelect = () => {
    onVideoSelect(video.id.videoId);
  };

  return (
    <div
      className="rounded-lg bg-neutral-900 bg-opacity-50 m-5 p-6 overflow-y-scroll hover:bg-neutral-500 hover:bg-opacity-50 cursor-pointer"
      onClick={handleVideoSelect}
    >
      <div className="flex">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
          className="h-16 w-16 rounded-md mr-3"
        />
        <div>
          <h3 className="font-bold text-white text-lg mb-1">
            {video.snippet.title}
          </h3>
          <p className="text-sm text-neutral-300">
            {video.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
