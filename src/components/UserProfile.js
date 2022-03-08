import { useState, useContext, useEffect } from "react";
import Community from "../components/Community";
import jwt_decode from "jwt-decode";
import axios from "axios";

import defaultPic from "../images/profilepic.jpg";
import GalleryPlaceholder1 from "../images/gallery-placeholder1.png";
import GalleryPlaceholder2 from "../images/gallery-placeholder2.png";
import GalleryPlaceholder3 from "../images/gallery-placeholder3.png";
import GalleryPlaceholder4 from "../images/gallery-placeholder4.png";
import { UserContext } from "../contexts/UserContext";


const UserProfile = () => {
  const [profilePicUrl, setProfilePicUrl] = useState(defaultPic);
  const [user, setUser] = useContext(UserContext);
  const[obj,setObj] =useState([])

  // console.log(user)
  // console.log(user.username)
  console.log(user.sketch_ids)

  const handleUnpublish = async(id) => {
      await axios
      .put(`http://localhost:4000/api/sketch/${id}`, {
        sketch_status: false
      })
      .then(res => console.log(res))
      .catch((error) => console.log(error))
      console.log("unpublish");
    
  }
  
  const handlePublish = (id) => {
    console.log("xxxxx")
        // await axios
        // .put(`http://localhost:4000/api/sketch/${id}`, {
        //   sketch_status: true
        // })
        // .then(res => console.log(res))
        // .then(console.log("publish"))
        // .catch((error) => console.log(error))
}
 


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

          {user.sketch_ids && user.sketch_ids
          .filter(sketch =>sketch.sketch_status=== false)
          .map(element => {
              return (
                <>
                <div className="gallery-cell">
                    <img src={element.sketch_url} />
                    <button onClick={handlePublish}>Publish</button>
                  </div>                  
                </>
              )
          })}
          </div>
        </div>

          
        <div className="gallery-section">
          <h2>Published Sketches</h2>
          <div className="gallery-grid">
          {user.sketch_ids && user.sketch_ids
          .filter(sketch =>sketch.sketch_status=== true)
          .map(element => {
              return (
                <>
                <div className="gallery-cell">
                    <img src={element.sketch_url} />
                    <button onClick={handleUnpublish}>Unpublish</button>
                </div>
                  
                </>
              )
          })}
            
            </div>
            </div>
      </div>

     </div>
  );
};


export default UserProfile;
