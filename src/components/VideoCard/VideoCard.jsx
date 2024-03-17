import React, { useState } from "react";
import "./VideoCard.scss";

const VideoCard = ({ image, title, author }) => {
  return (
    <div>
      <div className="card">
        <img className="card__image" src={image} alt={`${title}`} />
        <div className="card__copy">
          <p className="card__title">{title}</p>
          <p className="card__author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
