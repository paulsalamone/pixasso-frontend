import BigLogo from "../images/logo-large-home-tagline.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* <div className="home-spacer"></div> */}
      <div className="hero-div">
        <img
          src={BigLogo}
          className="big-logo"
          alt="generative art for everyone"
        />
        <div className="hero-text">
          <h1>
            Welcome to <span className="yellow">Pixasso</span>, the{" "}
            <b>user-friendly art tool</b> that lets you create cool, futuristic
            <span className="green"> generative art</span> without needing to
            code. Just choose an algorithm, slide some parameters, and go!
          </h1>
          <Link to="/editor">
            <button className="button-home-big">make some art!</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
