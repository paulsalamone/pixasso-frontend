import React, { useState, useContext } from "react";
import axios from "axios";
import defaultPic from "../images/profilepic.jpg";
import { UserContext } from "../contexts/UserContext";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const [user, setUser] = useContext(UserContext);
  console.log(user);

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
        <div className="profile-info-box">
          <div className="form-page">
            <form onSubmit={handleSubmit}>
              <h2>Update your settings:</h2>
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={user.username}
                required
                style={{
                  color: "black",
                  padding: "8px",
                  fontSize: "1.2rem",
                  width: "350px",
                }}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user.email}
                required
                style={{
                  color: "black",
                  padding: "8px",
                  fontSize: "1.2rem",
                  width: "350px",
                }}
                onChange={handleChange}
              ></input>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={user.password}
                required
                style={{
                  color: "black",
                  padding: "8px",
                  fontSize: "1.2rem",
                  width: "350px",
                }}
              ></input>
              <h2>Biography</h2>
              <textarea
                name="biography"
                value={user.biography}
                placeholder="Your Story....."
                rows="10"
                cols="50"
                onChange={handleChange}
                style={{
                  color: "black",
                  padding: "8px",
                  fontSize: "1.2rem",
                  width: "550px",
                  marginBottom: "15px",
                }}
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
