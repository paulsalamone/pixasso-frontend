import React from 'react'
import Community from "../components/Community";
import jwt_decode from "jwt-decode";



const UserProfile = () => {
    const token = localStorage.getItem("token")
    const user = jwt_decode(token);
    console.log(user.user.username);
    
    return (
        <div className="profile">
            <div>
                <h1>
                   {user.user.username}
                </h1>
                <img src=""/>
            </div>
            <div>
                <h1>
                    Unpublished Sketches
                </h1>
                <img src="https://res.cloudinary.com/pixasso/image/upload/v1646306373/fc2o0dnlga7lzjubtnka.jpg"/>
                <button onClick={<Community/>} >publish</button>
            </div>
            <div>
                <h1>
                    Published Sketches
                </h1>
                <img src="https://res.cloudinary.com/pixasso/image/upload/v1646300481/ae6cct2tky57obshjhgx.jpg"/>
                <button>unpublish</button>
            </div>
        </div>
    )
}

export default UserProfile