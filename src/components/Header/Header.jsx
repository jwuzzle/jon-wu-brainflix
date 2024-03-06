import "./Header.scss";
import brainflixLogo from "../../assets/logo/BrainFlix-logo.svg";
import profilePicture from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={brainflixLogo} alt="brainflix logo" />
      </div>
      <div className="navbar__features">
        <input
              className="navbar__search-bar"
              type="text"
              id="search"
              placeholder="Search" />
        <button className="navbar__search-button">Upload</button>
        <div className="navbar__profile">
          <img
            className="navbar__profile-picture"
            src={profilePicture}
            alt="profile picture"
          />
        </div>
      </div>
    </header>
  )}
    
export default Header; 


