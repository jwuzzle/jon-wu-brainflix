import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "../../components/VideoList/VideoList";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import SelectedVideoDetails from "../../components/SelectedVideoDetails/SelectedVideoDetails";
import VideoReviewForm from "../../components/VideoReviewForm/VideoReviewForm";
import VideoReviews from "../../components/VideoReviews/VideoReviews";

const MainVideoPage = () => {
  const [mainVideo, setMainVideo] = useState(null);
  let { videoId } = useParams();

  if(!videoId) {
    videoId = '84e96018-4022-434e-80bf-000ce4cd12b8'
  }

  //API Call #1 for all details of a video, uses video Id
  const fetchVideoDetails = async () => {
    try {
      const detailsResponse = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=d76a25f6-c65b-49f6-96fa-5d82d3c84842`
      );
      console.log("this is the data for one video:", detailsResponse.data);
      /* onst mainVideoDetails = detailsResponse.find(
        (video) => video.id === videoId */
     /*  ); */
      setMainVideo(detailsResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  /* fetchVideoDetails() */
  /*   console.log(mainVideo); */
  /* useEffect(() => {
    fetchVideoDetails();
  }, []); */

  useEffect(() => {
    fetchVideoDetails();
  }, []);
 

  //API Call #2 for video list, uses video Id
  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        "https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=d76a25f6-c65b-49f6-96fa-5d82d3c84842"
      );
      console.log("this is the video api data:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const [nextVideos, setNextVideos] = useState([]);

  const filteredNextVideos = nextVideos.filter(
    (video) => video.id !== mainVideo.id
  );

  if(!mainVideo) return ("")
  
    return (
    <>
      <SelectedVideo mainVideo={mainVideo} />
      <div className="page-bottom">
        <div className="page-bottom__left">
          <SelectedVideoDetails mainVideo={mainVideo} />
          <VideoReviewForm mainVideo={mainVideo} />
          <VideoReviews mainVideo={mainVideo} />
        </div>
        <div className="page-bottom__right">
          <VideoList filteredNextVideos={filteredNextVideos} />
        </div>
      </div>
    </>
  );
};

export default MainVideoPage;
