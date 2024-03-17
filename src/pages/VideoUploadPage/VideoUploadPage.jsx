import videoPreview from "../../assets/images/Upload-video-preview.jpg";
import "./VideoUploadPage.scss";
import { Link } from "react-router-dom";

const VideoUploadPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("You did it! The video has launched! 🚀");
    window.location = "/";
  };

  return (
    <section className="upload">
      <h1 className="upload__header">Upload Video</h1>
      <form className="upload__form" onSubmit={handleSubmit}>
        <div className="upload__form--data">
          <label className="upload__form--label">
            Video thumbnail
            <img
              className="upload__form--image"
              src={videoPreview}
              alt="video thumbnail of track runner at start holding a relay baton"
            />
          </label>
          <div className="upload__form--text">
            <label className="upload__form--label">
              Title your video
              <input
                type="text"
                name="title"
                className="upload__form--single-field"
                id="title"
                placeholder="Add a title to your video"
              />
            </label>
            <label className="upload__form--label">
              Add a video description
              <textarea
                type="text"
                name="description"
                className="upload__form--multiple-field"
                id="description"
                placeholder="Add a description to your video"
              />
            </label>
          </div>
        </div>
        <div className="upload__form--buttons">
          <button className="upload__form--publish" type="submit">
            Publish
          </button>
          <Link to={"/"}>
            <button className="upload__form--cancel noHover">Cancel</button>
          </Link>
        </div>
      </form>
    </section>
  );
};

export default VideoUploadPage;
