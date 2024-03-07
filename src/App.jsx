import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import VideoList from './components/VideoList/VideoList'
import SelectedVideo from './components/SelectedVideo/SelectedVideo'
import videoDetails from './data/video-details.json'
import videos from './data/videos.json' 


function App() {
  const allVideoDetails = videoDetails;
  
  const [selectedVideo, setSelectedVideo] = useState(allVideoDetails[6])
  console.log(selectedVideo)
  /* setCurrentVideo(allVideoDetails[1]) */

  const videoPreview = videos;
 /*  console.log(allNextVideos); */

  const [nextVideos, setNextVideos] = useState(videoPreview)
  console.log(nextVideos);

  const filteredNextVideos = nextVideos.filter(video => video.id !== selectedVideo.id);
  console.log(filteredNextVideos);


  return (
    <>
      <Header />
      <SelectedVideo selectedVideo={selectedVideo} />
      <VideoList nextVideo={filteredNextVideos} />
    </>
  )
}

export default App
