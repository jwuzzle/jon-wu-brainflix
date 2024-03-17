import React, { useState } from "react";
import "./VideoReviewForm.scss";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";

const VideoReviewForm = ({ mainVideo }) => {
  const commentsArr = mainVideo.comments.filter((video) => video.id !== "");
  const commentsArrlength = commentsArr.length;
  console.log(commentsArrlength);

  return (
    <section className="comments-form">
      <p className="comments-form__heading">{commentsArrlength} Comments</p>
      <div className="comments-form__section">
        <div className="comments-form__avatar-container">
          <img className="comments-form__avatar" src={profilePicture} />
        </div>
        <form id="commentsForm" className="comments-form__new-entry">
          <div className="comments-form__field">
            <label name="comment" className="comments-form__field-name">
              Join the Conversation
            </label>
            <textarea
              type="text"
              name="comment"
              className="comments-form__field-area"
              id="comment"
              placeholder="Add a new comment"
              required
            ></textarea>
          </div>
          <div className="comments-form__submit">
            <button type="submit" className="comments-form__button">
              Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default VideoReviewForm;
