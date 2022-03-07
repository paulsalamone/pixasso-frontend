import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import defaultPic from "../images/profilepic.jpg";
import { UserContext } from "../contexts/UserContext";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const { userid } = useParams();
  const [user, setUser] = useContext(UserContext)
  console.log(user)
//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//     profile_pic_url: "",
//     biography: "",
//   });

  const uploadPic = async () => {
    const picData = new FormData();
    picData.append("file", profilePic);
    picData.append("upload_preset", "profilepic");
    picData.append("cloud_name", "pixasso");

    fetch("https://api.cloudinary.com/v1_1/pixasso/image/upload", {
      method: "post",
      body: picData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProfilePicUrl(data.url);
        console.log(profilePicUrl).catch((err) => console.log(err));
      });
  };

//   const getProfile = () => {
//     const token = localStorage.token;
//     console.log(token);
//     const decoded = jwt_decode(token);
//     console.log(decoded);
//     setUser({
//       id: decoded.user._id,
//       username: decoded.user.username,
//       email: decoded.user.email,
//       password: decoded.user.password,
//       biography: decoded.user.biography,
//       profile_pic_url: profilePicUrl,
//     });
//   };

//   useEffect(() => {
//     getProfile();
//   }, []);

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };

  const handleSubmit = async () => {
    await axios
      .post(`http://localhost:4000/api/users/${userid}`, user) // profile_pic_url: profilePicUrl

      .then(console.log("picture saved"))

      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="content-page">
        <h4>update your settings:</h4>
        <div className="profile-header">
          <div className="profile-edit-image">
            <img
              src={profilePicUrl}
              alt="User Profile Picture"
              height="300px"
              width="300px"
              borderRadius="50px"
              className="profile-pic"
            />
            <input
              type="file"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="input-file"
            />
            <button onClick={uploadPic}>Upload</button>
          </div>
          <div className="profile-info-box">
            <h1>{user.username}</h1>

            <div className="form-page">
              <form onSubmit={handleSubmit}>
                <h2>Basic Info</h2>
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={user.username}
                  required
                  onChange={handleChange}
                />
                <button>Edit</button>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={user.email}
                  required
                  onChange={handleChange}
                ></input>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  required
                  // onChange= {handleChange}
                ></input>
                <h2>Biography</h2>
                <textarea
                  name="biography"
                  value={user.biography}
                  placeholder="Your Story....."
                  rows="10"
                  cols="50"
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
