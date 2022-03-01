import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from "jwt-decode";

const UserProfile = () => {
    const [profilePic, setProfilePic] = useState("")
    const [profilePicUrl, setProfilePicUrl] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password:"",
        profile_pic_Url:"",
        biography: ""
    })

    const uploadPic = async() => {
        const picData = new FormData()
        picData.append("file",profilePic)
        picData.append("upload_preset", "profilepic")
        picData.append("cloud_name","pixasso")

        fetch(" https://api.cloudinary.com/v1_1/pixasso/image/upload",{
            method:"post",
            body: picData
        })
        .then(resp => resp.json())
        .then(data => {
        setProfilePicUrl(data.url)
        console.log(profilePicUrl)
        .catch(err => console.log(err))
        })  
    }

    const getProfile= () =>{
        const token = localStorage.token;
        console.log(token)
        const decoded = jwt_decode(token);
        console.log(decoded);
        setUser({
            id : decoded.user._id,
            username: decoded.user.username,
            email: decoded.user.email,
            password: decoded.user.password,
            biography:decoded.user.biography,
        })
    }

    useEffect(() => {
        getProfile();
      }, []);

    console.log(user)

    const handleChange = ({currentTarget: input}) => {
        setUser({...user, [input.name]:input.value})
      }


      const handleSubmit= async()=>{
        await axios
        .post("http://localhost:4000/api/users/profile", user )     // profile_pic_url: profilePicUrl
    
        .then(console.log("picture saved"))
        
        .catch ((error) => console.log(error))

      }
      

    return (
        <>
        <div>
            <h1>username</h1>
            <img 
                src={profilePicUrl} 
                alt="user picture"
                height= "300px"
                width= "300px"
                />
            <input 
                type="file"
                onChange= {(e) => setProfilePic(e.target.files[0])}
            >
            </input>
            <button onClick={uploadPic}>Upload</button>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Basic Info</h1>
                <input
                    type= "text"
                    placeholder="Username"
                    name= "username"
                    value= {user.username} 
                    required
                    onChange= {handleChange}
                >
                </input>
                <input
                    type= "email"
                    placeholder="Email"
                    name= "email"
                    value= {user.email} 
                    required 
                    onChange= {handleChange}
                >
                </input>
                <input
                    type= "password"
                    placeholder="Password"
                    name= "password"
                    value= {user.password} 
                    required 
                    // onChange= {handleChange}
                >
                </input>
                <h1>Biography</h1>
                <textarea
                    name= "biography"
                    value= {user.biography}
                    placeholder="Your Story....."
                    rows="10" 
                    cols="50"
                    onChange= {handleChange}>
                </textarea>
                <button
                    type="submit"
                >
                    Save Changes
                </button>
            </form>
        </div>
        </>
    )
}

export default UserProfile