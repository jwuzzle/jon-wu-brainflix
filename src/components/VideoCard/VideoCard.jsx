import "./VideoCard.scss";

const VideoCard = (props) => {

    const handleVideoClick = () => {
        console.log('Video has been clicked!');
    };
    
    
    return (
    <div>
        {/* className="card" 
        onClick={clickHandler} */}
        <div className="card" onClick={handleVideoClick}>
            <img className="card__image" src={props.image} />
            <div className="card__copy">
                <p className="card__title">{props.title}</p>
                <p className="card__author">{props.author}</p>
            </div>
        </div>
    </div>
)
};

export default VideoCard