import React, { useState } from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "../SelectedVideo/SelectedVideo.scss";
import "./SelectedVideoDetails.scss";

const SelectedVideoDetails = ({ selectedVideo }) => {
  const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString(
    "en-US"
  );

  return (
    <div className="video-details">
      <h1 className="video-details__title">{selectedVideo.title}</h1>
      <div className="video-details__subsection">
        <div className="video-details__subsection--left">
          <p className="video-details__author">By {selectedVideo.channel}</p>
          <p className="video-details__date">{formattedDate}</p>
        </div>
        <div className="video-details__subsection--right">
          <div className="video-details__views">
            <img className="video-details__views--icon" src={viewsIcon} />
            <p className="video-details__views--count">{selectedVideo.views}</p>
          </div>
          <div className="video-details__likes">
            <img className="video-details__likes--icon" src={likesIcon} />
            <p className="video-details__likes--count">{selectedVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{selectedVideo.description}</p>
    </div>
  );
};

export default SelectedVideoDetails;
