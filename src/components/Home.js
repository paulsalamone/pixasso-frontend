import BigLogo from "../images/logo-large-home-tagline.png";
import "../styles/home.css";
import { Link, Route, Routes } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* <div className="home-spacer"></div> */}{" "}
      <h3 className="mobile-message">
        NOTE: you are viewing the mobile version of this site. For the full
        Pixasso experience, please view the desktop version.
      </h3>
      <div className="hero-div">
        <img
          src={BigLogo}
          className="big-logo"
          alt="generative art for everyone"
        />
        <div className="hero-text">
          <h1 className="hero-h1">
            Welcome to <span className="yellow">Pixasso</span>, the{" "}
            <b>user-friendly art tool</b> that lets you create cool, futuristic
            <span className="green"> generative art</span> without needing to
            code. Just choose an algorithm, slide some parameters, and go!
          </h1>
          <Link to="/editor">
            <button className="button-home-big">make some art!</button>
          </Link>
          <Link to="/mobile">
            <button className="button-home-mobile">make some art!??!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
