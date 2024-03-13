import React, { useState } from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "../SelectedVideo/SelectedVideo.scss";
import "./SelectedVideoDetails.scss";

const SelectedVideoDetails = ({ mainVideo }) => {
  const formattedDate = new Date(mainVideo.timestamp).toLocaleDateString(
    "en-US"
  );

  return (
    <div className="video-details">
      <h1 className="video-details__title">{mainVideo.title}</h1>
      <div className="video-details__subsection">
        <div className="video-details__subsection--left">
          <p className="video-details__author">By {mainVideo.channel}</p>
          <p className="video-details__date">{formattedDate}</p>
        </div>
        <div className="video-details__subsection--right">
          <div className="video-details__views">
            <img className="video-details__views--icon" src={viewsIcon} />
            <p className="video-details__views--count">{mainVideo.views}</p>
          </div>
          <div className="video-details__likes">
            <img className="video-details__likes--icon" src={likesIcon} />
            <p className="video-details__likes--count">{mainVideo.likes}</p>
          </div>
        </div>
      </div>
      <p className="video-details__description">{mainVideo.description}</p>
    </div>
  );
};

export default SelectedVideoDetails;
