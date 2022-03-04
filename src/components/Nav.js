import "../App.css";
import React, { useEffect, useState} from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import AlgoSelector from "./editorComponents/AlgoSelector";
import Logo from "../images/logo-small-white.png";
//import {UserContext} from "../contexts/UserContext";
import jwt_decode from "jwt-decode";

const Nav = () => {
  const[user, setUser] = useState("")
  let navigate= useNavigate()
  useEffect(()=>{
    getUser()
  },[user])
 
  const getUser =() =>{
    const token = localStorage.getItem("token");
    if(token){
      const user = jwt_decode(token);
      console.log(user)
      console.log(user.user.username)
      setUser(user.user.username)
    }else{
      navigate("/register")
    }
      
    }

  
  const handleClick = (e)=>{
    e.preventDefault()
    localStorage.removeItem("token")
    //navigate("/")
    console.log("bye bye")
}

  return (
    <>
      <nav>
        <div className="top-nav-left">
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="small white pixasso logo"
                className="nav-logo"
              />
            </Link>
            <Link to="/">About</Link>
            <Link to="/editor">Editor</Link>
          </div>
          {/* <div>Algorithm:</div> */}
        </div>
        <div className="top-nav-controls">
          <Routes>
            <Route path="/editor" element={<AlgoSelector />} />
          </Routes>

          {/* <StartStop /> */}
        </div>
        {/* working navbar */}
        {/* <div className="top-nav-right">
          <Link to="/community">Community</Link>
          <Link to="/update">Update</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/"><a onClick={handleClick}>Logout</a></Link>
          {user ?
          (<Link to="/profile">{user}</Link>)
          :(  
          <Link to="/profile">Profile</Link>
          )}
          </div> */}

        {user && user ? (
          <div className="top-nav-right">
          <Link to="/community">Community</Link>
          <Link to="/update">Update Profile</Link>
          <Link to="/profile">{user}</Link>
          <Link to="/register"><a onClick={handleClick}>Logout</a></Link>
        </div>
        ):(
          <div className="top-nav-right">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
        )}
        
      </nav>
    </>
  );
};

export default Nav;
