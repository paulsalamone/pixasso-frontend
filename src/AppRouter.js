import { Route, Routes, Link } from "react-router-dom";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Editor from "./components/Editor";
import UploadSketch from "./components/UploadSketch";
import DownloadSketch from "./components/DownloadSketch";

const AppRouter = () => {
  const user =localStorage.getItem("token")
  if (user){
    console.log("welcome")
  }else{
    console.log("you are not logged in")
  }
  return (
    <>
   <TopNav />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadSketch />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/download" element={<DownloadSketch />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
};

export default AppRouter;
