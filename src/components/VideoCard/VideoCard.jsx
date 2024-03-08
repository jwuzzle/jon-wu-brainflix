import "./VideoCard.scss";

const VideoCard = ({ image, title, author, video, handleVideoClick }) => {
  return (
    <div>
      <div className="card" onClick={() => handleVideoClick(video)}>
        <img className="card__image" src={image} />
        <div className="card__copy">
          <p className="card__title">{title}</p>
          <p className="card__author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
