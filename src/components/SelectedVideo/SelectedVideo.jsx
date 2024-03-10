import "./SelectedVideo.scss";
import React, { useState } from "react";

const VideoDetails = ({ selectedVideo }) => {
  return (
    <div className="video">
      <video
        className="video__image"
        controls
        poster={selectedVideo.image}
      ></video>
    </div>
  );
};

export default VideoDetails;
