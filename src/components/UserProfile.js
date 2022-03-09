import { useState, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import defaultPic from "../images/profilepic.jpg";

const UserProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);

  const [user, setUser] = useState({
    id: "",
    username: "",
    email: "",
    password: "",
    profile_pic_url: "",
    biography: "",
    sketch_ids: [],
  });
  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      //console.log(decoded);
      axios
        .get(`http://localhost:4000/api/users/${decoded.user._id}`)
        .then((res) => {
          //console.log(res);
          setUser({
            id: res.data._id,
            username: res.data.username,
            email: res.data.email,
            password: res.data.password,
            biography: res.data.biography,
            sketch_ids: res.data.sketch_ids,
          });
        });
    }
  };

  // console.log(user);

  const handlePublish = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:4000/api/sketch/${e.target.sketchid.value}`, {
        sketch_status: true,
      })
      .then((res) => console.log(res))
      .then(console.log("publish"))
      .catch((error) => console.log(error));
    window.location.reload();
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
    window.location.reload();
  };


  const handleDelete = async (e, id) =>{
    e.preventDefault();
    console.log(id)
    await axios
      .delete(`http://localhost:4000/api/sketch/${id}`)
      
        user.sketch_ids.pop(id)
      .then(res => console.log(res))
     // .then(console.log("deleted"))
      .catch((error) => console.log(error));
  }

  //console.log(user.sketch_ids)

  const placeholderBio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
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
                .reverse()

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
                          {/* <button onClick={handleDelete(element._id)} type="submit">Delete</button> */}
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
                .reverse()

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
