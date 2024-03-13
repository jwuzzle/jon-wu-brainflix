import React, { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";
import { Link } from "react-router-dom";

const VideoList = ({filteredNextVideos, }) => {
  console.log("these are the non-selected videos:", filteredNextVideos);

  return (
    <div className="card-list">
      <p className="card-list__heading">Next Videos</p>
      {filteredNextVideos.map((video) => (
        <Link to={`/video/${video.id}`}><VideoCard
          key={video.id}
          id={video.id}
          image={video.image}
          title={video.title}
          author={video.channel}
          video={video}
        /></Link>
      ))}
    </div> 
  );
};

export default VideoList;

