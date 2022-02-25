import React, { useState } from 'react';
import axios from 'axios';

const UserProfile = () => {
    const [profilePic, setProfilePic] = useState("")
    const [profilePicUrl, setProfilePicUrl] = useState("")
    const [user, setUser] = useState({
        username: "",
        email: "",
        password:"",
        profilePicUrl:""
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
        axios.post("http://localhost:4000/api/users/profile", {
            profile_pic_url: profilePicUrl
        })
        .then(console.log("picture saved"))
        
        })
        .catch ((error) => console.log(error))
    } 
    // const handleChange = (e) => {
    //     setProfilePic(e.target.files[0];
    //     uploadPic();

    // }
    // const handleChange = ({currentTarget: input}) => {
    //     setUser({...user, [input.name]:input.value})
    //   }


    return (
        <>
        <div>
            <h1>UserProfile</h1>
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
            <form>
                <h1>Basic Info</h1>
                <input
                    type= "text"
                    placeholder="Username"
                    name= "username"
                    value= {user.username} 
                    required 
                    // onChange= {handleChange}
                >
                </input>
                <input
                    type= "email"
                    placeholder="Email"
                    name= "email"
                    value= {user.email} 
                    required 
                    // onChange= {handleChange}
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
                    placeholder="Your Story....."
                    rows="10" 
                    cols="50">
                </textarea>
                <button
                    type="submit"
                    onClick
                >
                    Save Changes
                </button>
            </form>
        </div>
        </>
    )
}

export default UserProfile