import { Route, Routes, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
//import Logout from "./components/Logout";
import Editor from "./components/Editor";
import Community from "./components/Community";
import UploadSketch from "./components/UploadSketch";
import DownloadSketch from "./components/DownloadSketch";
import UpdateProfile from "./components/UpdateProfile";
import UserProfile from "./components/UserProfile";

const AppRouter = () => {
  // const user = localStorage.getItem("token");
  // if (user) {
  //   console.log("welcome");
  // } else {
  //   console.log("you are not logged in");
  // }
  return (
    <>
      <body>
        <header>
          <Nav />
        </header>

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/community" element={<Community />} />
            {/* <Route path="/upload" element={<UploadSketch />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Editor />} />
            {/* <Route path="/download" element={<DownloadSketch />} /> */}
            <Route path="/update" element={<UpdateProfile />} />
            <Route path="/profile" element={<UserProfile />} />
          </Routes>
        </div>

        <Footer />
      </body>
    </>
  );
};

export default AppRouter;
