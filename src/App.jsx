import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";
import SelectedVideo from "./components/SelectedVideo/SelectedVideo";
import SelectedVideoDetails from "./components/SelectedVideoDetails/SelectedVideoDetails";
import VideoReviewForm from "./components/VideoReviewForm/VideoReviewForm";
import VideoReviews from "./components/VideoReviews/VideoReviews";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);
  /* console.log(selectedVideo); */

  const handleVideoClick = (selectedMainVideo) => {
    const mainVideoDetails = videoDetails.find(
      (video) => video.id === selectedMainVideo.id
    );
    setSelectedVideo(mainVideoDetails);
  };

  /* const videoPreview = videos;  */
  const [nextVideos, setNextVideos] = useState(videos);
  /* console.log(nextVideos); */

  const filteredNextVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.id
  );
  /* console.log(filteredNextVideos); */

  return (
    <>
      <Header />
      <SelectedVideo selectedVideo={selectedVideo} />
      <div className="page-bottom">
        <div className="page-bottom__left">
          <SelectedVideoDetails selectedVideo={selectedVideo} />
          <VideoReviewForm selectedVideo={selectedVideo} />
          <VideoReviews selectedVideo={selectedVideo} /> 
        </div>
        <div className="page-bottom__right">
          <VideoList
            filteredNextVideos={filteredNextVideos}
            handleVideoClick={handleVideoClick}
          />
        </div>
      </div>
    </>
  );
}

export default App;

//pass down the function setSelectedVideo to change the selectedVideo variable to the one the user clicked.
