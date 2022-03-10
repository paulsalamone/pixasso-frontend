import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import defaultPic from "../images/profilepic.jpg";
import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  //const { userid } = useParams();
  const [user, setUser] = useContext(UserContext);
  console.log(user);
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

  const handleChange = ({ currentTarget: input }) => {
    setUser({ ...user, [input.name]: input.value });
  };

  const handleSubmit = async () => {
    await axios
      .put(`https://pixasso.herokuapp.com/api/users/${user.id}`, user, {
        profile_pic_url: profilePicUrl,
      }) // profile_pic_url: profilePicUrl

      .then(console.log("picture saved"))

      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="content-page">
        <h5>update your settings:</h5>
        {/* <div className="profile-edit-image">
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
          </div> */}
        <div className="profile-info-box">
          <h1>{user.username}</h1>

          <div className="form-page">
            <form onSubmit={handleSubmit}>
              <h6>Basic Info</h6>
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
                style={{ color: "black", padding: "8px", fontSize: "1.2rem" }}
              ></textarea>
              <button type="submit">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
