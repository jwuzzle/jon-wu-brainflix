import "./SelectedVideo.scss";
import React, {useState} from 'react';
import likesIcon from "../../assets/icons/likes.svg";
import viewsIcon from "../../assets/icons/views.svg";

/* const VideoDetails = ( {allVideoDetails} ) => {
    console.log("child data:", allVideoDetails) */

const VideoDetails = ( {selectedVideo} ) => {
    console.log(selectedVideo)


  return (
    <div>
        <div className="video">
          {/* <video className="video__image" control poster="Url('{currentVideo.image}')"></video> */}
             {/* <source src='{currentVideo.image}'></source> */}
            <img className="video_image" src={selectedVideo.image} />
        </div>
        <div className="video__details">
          <h3 className="video__title">{selectedVideo.title}</h3>
          <div className="video__subsection">
            <div className="video__subsection--left">
              <p className="video__author">By {selectedVideo.channel}</p>
              <p className="video__date">{selectedVideo.timestamp}</p>
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
    </div>
  )
}

export default VideoDetails