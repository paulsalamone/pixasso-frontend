import { useState } from "react";
import Community from "../components/Community";
import jwt_decode from "jwt-decode";

import defaultPic from "../images/profilepic.jpg";
import GalleryPlaceholder1 from "../images/gallery-placeholder1.png";
import GalleryPlaceholder2 from "../images/gallery-placeholder2.png";
import GalleryPlaceholder3 from "../images/gallery-placeholder3.png";
import GalleryPlaceholder4 from "../images/gallery-placeholder4.png";
import {UserContext} from "../contexts/UserContext";
import { useContext} from "react";

const UserProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const token = localStorage.getItem("token");
  const temp = jwt_decode(token);
  const [user, setUser] = useContext(UserContext);

  console.log(user.user.username);
  
  const placeholderBio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <div className="content-page">
      <h4>artist profile</h4>
      <div className="profile-header">
        <img
          src={profilePicUrl}
          alt="User Profile Picture"
          height="300px"
          width="300px"
          borderRadius="50px"
          className="profile-pic"
        />
        <div className="profile-info-box">
          <h1>{user.user.username}</h1>
          {/* <p>Email: {user.user.email}</p> */}
          <h3>Artist Statement:</h3>
          <p>{placeholderBio}</p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-section">
          <h2>Unpublished Sketches</h2>
          <div className="gallery-grid">
            <div className="gallery-cell">
              <img src={GalleryPlaceholder1} />
              <button onClick={<Community />}>publish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder2} />
              <button onClick={<Community />}>publish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder3} />
              <button onClick={<Community />}>publish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder4} />
              <button onClick={<Community />}>publish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder1} />
              <button onClick={<Community />}>publish</button>
            </div>
          </div>
        </div>
        <div className="gallery-section">
          <h2>Published Sketches</h2>
          <div className="gallery-grid">
            <div className="gallery-cell">
              <img src={GalleryPlaceholder2} />
              <button onClick={<Community />}>unpublish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder3} />
              <button onClick={<Community />}>unpublish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder4} />
              <button onClick={<Community />}>unpublish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder1} />
              <button onClick={<Community />}>unpublish</button>
            </div>
            <div className="gallery-cell">
              <img src={GalleryPlaceholder2} />
              <button onClick={<Community />}>unpublish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <img src="https://res.cloudinary.com/pixasso/image/upload/v1646300481/ae6cct2tky57obshjhgx.jpg" /> */
}

export default UserProfile;
