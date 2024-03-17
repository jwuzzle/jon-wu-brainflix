import "./SelectedVideo.scss";

const SelectedVideo = ({ mainVideo }) => {
  return (
    <section className="video">
      <video className="video__image" controls poster={mainVideo.image}></video>
    </section>
  );
};

export default SelectedVideo;
