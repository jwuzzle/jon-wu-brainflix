import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList/VideoList";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedVideoDetails from "../../components/SelectedVideoDetails/SelectedVideoDetails";
import VideoReviewForm from "../../components/VideoReviewForm/VideoReviewForm";
import VideoReviews from "../../components/VideoReviews/VideoReviews";

const URL = import.meta.env.VITE_APP_BASE_URL

const MainVideoPage = () => {
  const [mainVideo, setMainVideo] = useState(null);
  let { videoId } = useParams();

  if (!videoId) {
    videoId = "84e96018-4022-434e-80bf-000ce4cd12b8";
  }

  //API Call #1 for all details of a video, uses video Id
  const fetchVideoDetails = async () => {
    try {
      const detailsResponse = await axios.get(
        `${URL}/videos/${videoId}`
      ); 
      setMainVideo(detailsResponse.data);
    } catch (error) {
      console.error(error);
      
    }
  };

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  //API Call #2 for video list, uses video Id
  const [nextVideos, setNextVideos] = useState([]);
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `${URL}/videos/`
      );
      setNextVideos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const filteredNextVideos = nextVideos.filter(
    (video) => video.id !== mainVideo.id
  );

  if (!mainVideo) return ""; //ensure pages waits until there is a mainVideo from the api call before it renders

  return (
    <main>
      <SelectedVideo mainVideo={mainVideo} />
      <section className="page-bottom">
        <section className="page-bottom__left">
          <SelectedVideoDetails mainVideo={mainVideo} />
          <VideoReviewForm mainVideo={mainVideo} />
          <VideoReviews mainVideo={mainVideo} />
        </section>
        <section className="page-bottom__right">
          <VideoList filteredNextVideos={filteredNextVideos} />
        </section>
      </section>
    </main>
  );
};

export default MainVideoPage;
