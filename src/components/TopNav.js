import "../App.css";
import { Route, Routes, Link } from "react-router-dom";

const TopNav = () => {
  return (
    <>
      <nav>
        [LOGO]
        <Link to="/">Home</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/download">Download</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/login">Logout</Link>
      </nav>
    </>
  );
};

export default TopNav;
