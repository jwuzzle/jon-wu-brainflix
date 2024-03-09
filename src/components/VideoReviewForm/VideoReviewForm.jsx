import React, { useState } from 'react'
import "./VideoReviewForm.scss";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";

const VideoReviewForm = ( {selectedVideo} ) => {

    const commentsArr = selectedVideo.comments.filter((video) => video.id !== '');
    const commentsArrlength = commentsArr.length;
    console.log(commentsArrlength);

  return (
    <div className="comments-form">
    <p className="comments-form__heading">{commentsArrlength} Comments</p>
    <div class="comments-form__section">
        <div class="comments-form__avatar-container">
            <img class="comments-form__avatar" src={profilePicture} /> 
        </div>
        <form id="commentsForm" className="comments-form__new-entry">
            <div className="comments-form__field">
                <label name="comment" className="comments-form__field-name">Join the Conversation</label>
                <textarea type="text" name="comment" className="comments-form__field-area comments-form__field-area--comment" id="comment" placeholder="Add a new comment" required="required"></textarea>
            </div>
            <div className="comments-form__submit">
                <button type="submit" className="comments-form__button">Comment</button>
            </div>
        </form>
        </div>
</div>
  )
}

export default VideoReviewForm