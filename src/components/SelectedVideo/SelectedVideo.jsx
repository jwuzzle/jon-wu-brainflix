import "./SelectedVideo.scss";
import React, { useState } from "react";

const VideoDetails = ({ selectedVideo }) => {
  /* const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString(
    "en-US" //dont think I need this here
  ); */

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
