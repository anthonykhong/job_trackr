import React from "react";

export default function VideoDetail({ videoId }) {
  return (
    <div className="relative" style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full px-20"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Selected Video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
