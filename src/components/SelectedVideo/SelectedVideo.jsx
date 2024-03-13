import "./SelectedVideo.scss";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const SelectedVideo = ({ mainVideo }) => {

  return (
    <div className="video">
      <video
        className="video__image"
        controls
        poster={mainVideo.image}
      ></video>
    </div>
  );
};

export default SelectedVideo;
