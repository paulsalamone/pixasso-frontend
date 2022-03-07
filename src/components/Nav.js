import "../App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import AlgoSelector from "./editorComponents/AlgoSelector";
import Logo from "../images/logo-small-white.png";
//import {UserContext} from "../contexts/UserContext";
import jwt_decode from "jwt-decode";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

const Nav = () => {
  // const [user, setUser] = useContext(UserContext);
  // console.log(user)
  // const name = user.username
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, [user]);


  const getUser = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt_decode(token);
      console.log(user);
      console.log(user.user.username);
      setUser(user.user.username);
    } else {
      navigate("/register");
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    console.log("bye bye");
  };

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
            {/* <Link to="/">About</Link> */}
            <Link to="/editor">Editor</Link>

            {user && user ? (
              <div className="top-nav-right">
                <Link to="/community">Community</Link>
              </div>
            ) : (
              <div className="top-nav-right"></div>
            )}
          </div>
          {/* <div>Algorithm:</div> */}
        </div>
        <div className="top-nav-controls">
          <Routes>
            <Route path="/editor" element={<AlgoSelector />} />
          </Routes>
        </div>

        {user && user ? (
          <div className="top-nav-right">
            <Link to="/profile">{user}</Link>

            <Link to="/update">Settings</Link>

            <Link to="/register">
              <a onClick={handleClick}>Logout</a>
            </Link>
          </div>
        ) : (
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
