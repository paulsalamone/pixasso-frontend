import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import AlgoSelector from "./editorComponents/AlgoSelector";
import Logo from "../images/logo-small-white.png";
//import {UserContext} from "../contexts/UserContext";
import jwt_decode from "jwt-decode";

const Nav = () => {
  //const[state, dispatch] = useContext(UserContext);
  
  const token = localStorage.getItem("token");
  const user = jwt_decode(token);
  console.log(user.user.username);
  //setUser({username:userInfo.username})
  //console.log(user.username)
  
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
        <div className="top-nav-right">
          {/* <Link to="/download">Download</Link> */}
          {/* <Link to="/upload">Upload</Link> */}
          <Link to="/community">Community</Link>
          <Link to="/update">Update</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/">Logout</Link>
          {user && user ?
          (<Link to="/profile">{user.user.username}</Link>)
          :(  
          <Link to="/profile">Profile</Link>
          )}
          
          </div>

        
        {/* {user ? (
          <div className="top-nav-right">
          <Link to="/download">Download</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
        ):(
          <div className="top-nav-right">
          <Link to="/download">Download</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
        )} */}
        
      </nav>
    </>
  );
};

export default Nav;
