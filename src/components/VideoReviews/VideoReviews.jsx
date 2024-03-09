import React, { useState } from 'react';
import "./VideoReviews.scss";

const VideoReviews = ( {selectedVideo} ) => {

    const formattedDate = new Date(selectedVideo.timestamp).toLocaleDateString(
    "en-US");

  return (
    <div>
    <ul className="reviews">
    {selectedVideo.comments.map((video) => (
        <li className="reviews__section" key={video.id}>
            <div className="reviews__avatar-container">
                <img className="reviews__avatar" />
            </div>
            <div className="reviews__data">
                <div className="reviews__top">
                    <p className="reviews__name">{video.name}</p>
                    <p className="reviews__date">{formattedDate}</p>
                </div>
                <p className="reviews__comment">{video.comment}</p>
            </div>
        </li>
    ))}
    </ul>
    </div>
  )
}

export default VideoReviews