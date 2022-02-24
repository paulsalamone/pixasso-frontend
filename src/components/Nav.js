import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import AlgoSelector from "./editorComponents/AlgoSelector";
import StartStop from "./editorComponents/StartStop";
const Nav = () => {
  return (
    <>
      <nav>
        <div className="top-nav-left">
          <div>
            [LOGO]
            <Link to="/">Home</Link>
            <Link to="/editor">Editor</Link>
          </div>
          {/* <div>Algorithm:</div> */}
        </div>
        <div className="top-nav-controls">
          <AlgoSelector />
          {/* <StartStop /> */}
        </div>

        <div className="top-nav-right">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
