import React, { useState } from "react";
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";
import "../SelectedVideo/SelectedVideo.scss"


const SelectedVideoDetails = ( { selectedVideo } ) => {
    const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString(
        "en-US"
      );

  return (
    <div className="video__details">
        <h3 className="video__title">{selectedVideo.title}</h3>
        <div className="video__subsection">
          <div className="video__subsection--left">
            <p className="video__author">By {selectedVideo.channel}</p>
            <p className="video__date">{formattedDate}</p>
          </div>
          <div className="video__subsection--right">
            <div className="video__views">
              <img className="video__views--icon" src={viewsIcon} />
              <p className="video__views--count">{selectedVideo.views}</p>
            </div>
            <div className="video__likes">
              <img className="video__likes--icon" src={likesIcon} />
              <p className="video__likes--count">{selectedVideo.likes}</p>
            </div>
          </div>
        </div>
        <p className="video__description">{selectedVideo.description}</p>
    </div>
  )
}

export default SelectedVideoDetails