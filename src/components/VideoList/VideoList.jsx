import VideoCard from "../VideoCard/VideoCard"
import "./VideoList.scss";

const VideoList = (filteredNextVideos) => {
  console.log('these are the non-selected videos:', filteredNextVideos)


  return (
    <section className="card-list">
      <p className="card-list__heading">Next Videos</p>
            {filteredNextVideos.nextVideo.map((video, index) => (
                <VideoCard 
                key={index}
                    image={video.image}
                    title={video.title} 
                    author={video.channel}
                />
            ))}
        </section>
  )
}

export default VideoList


/* don't use axios here
import file with the import statement  */