import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import videoDetails from "./data/video-details.json";
import videos from "./data/videos.json";
import MainVideoPage from "./pages/MainVideoPage/MainVideoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  /* const [selectedVideo, setSelectedVideo] = useState(videoDetails[0]);

  const handleVideoClick = (selectedMainVideo) => {
    const mainVideoDetails = videoDetails.find(
      (video) => video.id === selectedMainVideo.id
    );
    setSelectedVideo(mainVideoDetails);
  };

  const [nextVideos, setNextVideos] = useState(videos);

  const filteredNextVideos = nextVideos.filter(
    (video) => video.id !== selectedVideo.id
  ); */

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<MainVideoPage />} />
          <Route path='/videos' element={<MainVideoPage />} />
          <Route path='/videos/:videId' element={<MainVideoPage />} />
          <Route path='*' element={<div>404 Not Found!</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
