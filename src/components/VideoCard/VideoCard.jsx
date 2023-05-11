import React from "react";

export default function VideoCard({ video, onVideoSelect }) {
  const handleVideoSelect = () => {
    onVideoSelect(video.id.videoId);
  };

  return (
    <div
      className="rounded-lg border-b-4 border-indigo-400 bg-neutral-800 bg-opacity-50 m-5 p-6 overflow-y-scroll hover:bg-neutral-500 hover:bg-opacity-50 cursor-pointer"
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
            <span className="font-display">{video.snippet.title}</span>
          </h3>
          <p className="text-sm text-neutral-300">
            {video.snippet.description}
          </p>
        </div>
      </div>
    </div>
  );
}
