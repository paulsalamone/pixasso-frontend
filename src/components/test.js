import { useState, useContext, useEffect } from "react";
import Community from "../components/Community";
import jwt_decode from "jwt-decode";
import axios from "axios";

import defaultPic from "../images/profilepic.jpg";

import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const [user, setUser] = useContext(UserContext);
  const [obj, setObj] = useState([]);

  // console.log(user);
  // console.log(user.username)
  // console.log(user.sketch_ids);

  // let test = `http://localhost:4000/api/sketch/62276eef5ee22a2fb5e66357`;
  // console.log(test);

  const handlePublish = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/api/sketch/${e.target.sketchid.value}`, {
        sketch_status: true,
      })
      .then((res) => console.log(res))
      .then(console.log("publish"))
      .catch((error) => console.log(error));
  };

  const handleUnpublish = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/api/sketch/${e.target.sketchid.value}`, {
        sketch_status: false,
      })
      .then((res) => console.log(res))
      .then(console.log("publish"))
      .catch((error) => console.log(error));
  };

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
          <h1>{user.username}</h1>
          {/* <h1>hello</h1> */}
          {/* <p>Email: {user.user.email}</p> */}
          <h3>Artist Statement:</h3>
          <p>{placeholderBio}</p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-section">
          <h2>Unpublished Sketches</h2>
          <div className="gallery-grid">
            {user.sketch_ids &&
              user.sketch_ids
                .filter((sketch) => sketch.sketch_status === false)
                .map((element) => {
                  return (
                    <>
                      <div className="gallery-cell">
                        <form onSubmit={handlePublish}>
                          <img src={element.sketch_url} />
                          <input
                            name="sketchid"
                            type="text"
                            value={element._id}
                            style={{ display: "none" }}
                          ></input>
                          <button type="submit">Publish</button>
                        </form>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>

        <div className="gallery-section">
          <h2>Published Sketches</h2>
          <div className="gallery-grid">
            {user.sketch_ids &&
              user.sketch_ids
                .filter((sketch) => sketch.sketch_status === true)
                .map((element) => {
                  return (
                    <>
                      <div className="gallery-cell">
                        <form onSubmit={handleUnpublish}>
                          <img src={element.sketch_url} />
                          <input
                            name="sketchid"
                            type="text"
                            value={element._id}
                            style={{ display: "none" }}
                          ></input>
                          <button type="submit">Unpublish</button>
                        </form>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;