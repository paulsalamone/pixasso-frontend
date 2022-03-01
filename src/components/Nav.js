import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import AlgoSelector from "./editorComponents/AlgoSelector";
import Logo from "../images/logo-small-white.png";

const Nav = () => {
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
          <Link to="/download">Download</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
