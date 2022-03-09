import { useState, useContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

import defaultPic from "../images/profilepic.jpg";

const UserProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const [toDelete, setToDelete] = useState();

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

  const handleDelete = async (e, id) => {
    e.preventDefault();
    console.log(e.target.sketchid);
    await axios
      .delete(`http://localhost:4000/api/sketch/${id}`)

      // user.sketch_ids
      //   .pop(id)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    window.location.reload();
  };

  console.log(user.sketch_ids);

  const placeholderBio =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="content-page">
      <h5>artist profile</h5>
      <div className="profile-header">
        <div className="profile-info-box" style={{ marginBottom: "45px" }}>
          <h1
            style={{
              borderBottom: "1px solid grey",
              paddingBottom: "4px",
              marginBottom: "15px",
            }}
          >
            {user.username}
          </h1>

          <h6>Artist Statement:</h6>
          <p>{user.biography}</p>
        </div>
      </div>

      <div className="gallery">
        <div className="gallery-section">
          <h3>Unpublished Sketches 2</h3>

          <div className="gallery-grid">
            {user.sketch_ids &&
              user.sketch_ids
                .filter((sketch) => sketch.sketch_status === false)
                .reverse()

                .map((element) => {
                  return (
                    <>
                      <div className="gallery-cell" key={element._id}>
                        <form onSubmit={handlePublish}>
                          <img src={element.sketch_url} />
                          <div>
                            <input
                              name="sketchid"
                              type="text"
                              value={element._id}
                              style={{ display: "none" }}
                            ></input>
                            <button type="submit">Publish</button>
                            <button
                              onClick={(e) => handleDelete(e, element._id)}
                              type="submit"
                            >
                              Delete
                            </button>
                          </div>
                        </form>
                      </div>
                    </>
                  );
                })}
          </div>
        </div>

        <div className="gallery-section">
          <h3>Published Sketches</h3>
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
                          <div>
                            <button type="submit">Unpublish</button>
                            <button
                              onClick={(e) => handleDelete(e, element._id)}
                              type="submit"
                            >
                              Delete
                            </button>
                          </div>
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
