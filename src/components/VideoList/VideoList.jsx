import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";

const VideoList = ({ filteredNextVideos, handleVideoClick }) => {
  console.log("these are the non-selected videos:", filteredNextVideos);

  return (
    <div className="card-list">
      <p className="card-list__heading">Next Videos</p>
      {filteredNextVideos.map((video) => (
        <VideoCard
          key={video.id}
          image={video.image}
          title={video.title}
          author={video.channel}
          video={video}
          handleVideoClick={handleVideoClick}
        />
      ))}
    </div>
  );
};

export default VideoList;

