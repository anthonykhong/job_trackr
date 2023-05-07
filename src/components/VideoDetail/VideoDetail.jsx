import React from "react";

export default function VideoDetail({ videoId }) {
  if (!videoId) {
    return (
      <div className="relative">
        <iframe
          className="w-90 h-96 mx-20"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Default Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div className="relative">
      <iframe
        className="w-90 h-96 mx-20"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Selected Video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
