import React, { useState } from "react";
import "./VideoReviews.scss";

const VideoReviews = ({ mainVideo }) => {
  return (
    <section className="reviews">
      <ul className="reviews__list">
        {mainVideo.comments.map((video) => (
          <li className="reviews__section" key={video.id}>
            <div className="reviews__avatar-container">
              <img className="reviews__avatar" />
            </div>
            <div className="reviews__data">
              <div className="reviews__top">
                <p className="reviews__name">{video.name}</p>
                <p className="reviews__date">
                  {
                    (video.timestamp = new Date(
                      video.timestamp
                    ).toLocaleDateString("en-US"))
                  }
                </p>
              </div>
              <p className="reviews__comment">{video.comment}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VideoReviews;
