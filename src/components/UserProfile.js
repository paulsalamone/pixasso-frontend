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
  const[publishUrl, setPublishUrl] = useState([]);
  const[unpublishUrl, setUnpublishUrl] = useState([]);
  const[obj,setObj] =useState([])
  
  const[sketch, setSketch] =useState({})
  // console.log(user)
  // console.log(user.username)
  // console.log(user.sketch_ids)
  
  useEffect(()=>{
    getUrl()
    console.log("hello")
  },[])


  
  const getUrl =  () => {
    user.sketch_ids.map(async sketchId =>{
          await axios
          .get(`http://localhost:4000/api/sketch/${sketchId}`) 
          .then(res=> setObj(obj=>[...obj,
            {_id: res.data._id,
              url:res.data.sketch_Url,
              status:res.data.sketch_status
          }]))
          .catch((error) => console.log(error))   
  })
  }
  console.log(obj)

  const handleUnpublish = () => {
    

  }
  
  const handlePublish = () => {
//     user.sketch_ids.map(async(_id) =>{
//       await axios
//       .get(`http://localhost:4000/api/sketch/${_id}`) 
//       // .then(res=> console.log(res.data))
//       .then(res =>console.log(res.data._id))
//       .catch((error) => console.log(error));
//       // console.log(sketch)  
// })
}
  // console.log(obj)

  // const section =  () => {
  //   user.sketch_ids.map(async(sketchId) =>{
  //         await axios
  //         .get(`http://localhost:4000/api/sketch/${sketchId}`)
  //         .then(res => {
  //           if(!res.data.sketch_status){
  //             console.log(res.data.sketch_status)
  //             setUnpublishUrl(unpublishUrl => [...unpublishUrl, res.data.sketch_Url])
  //             console.log(unpublishUrl)
  //           } else {
  //             setPublishUrl(publishUrl => [...publishUrl, res.data.sketch_Url])
  //             console.log(publishUrl)
  //           }
  //         })
  //         .catch((error) => console.log(error))   
  // })
  // }

  // const updateStatus = () => {
  //   axios.post()    i need  sketch id here and cprrespong to that id i can update sketch status using put route


  // }


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
          {/* {obj.map(each =>{
            return(
              <>
              {console.log(each._id)}
              </>
            )

          })}   */}

               
              {obj.filter(e => e.status === false)
              .map(e => {
                return(
                  <div className="gallery-cell">
                    <img src={e.url} />
                    <button onClick={handlePublish}>Publish</button>
                  </div>

                )
              })}

            
          </div>
        </div>
          
        <div className="gallery-section">
          <h2>Published Sketches</h2>
          <div className="gallery-grid">
          {obj.filter(e => e.status === true)
              .map(e => {
                return(
                  <div className="gallery-cell">
                    <img src={e.url} />
                    <button onClick={handleUnpublish}>Unpublish</button>
                  </div>

                )
              })}
            
            </div>
            </div>
      </div>

     </div>
  );
};


export default UserProfile;
