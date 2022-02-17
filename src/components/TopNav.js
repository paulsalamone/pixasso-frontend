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
      </nav>
    </>
  );
};

export default TopNav;
