import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import AlgoSelector from "./components/editorComponents/AlgoSelector";
import Editor from "./components/editorComponents/Editor";
import EditorMobile from "./components/mobileComponents/EditorMobile";

import Community from "./components/Community";

import UpdateProfile from "./components/UpdateProfile";
import UserProfile from "./components/UserProfile";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/editor" element={<Nav />} />
        <Route path="/community" element={<Nav />} />
        <Route path="/register" element={<Nav />} />
        <Route path="/editor" element={<AlgoSelector />} />
        <Route path="/login" element={<Nav />} />
        <Route path="/update" element={<Nav />} />
        <Route path="/profile" element={<Nav />} />
      </Routes>

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/editormobile" element={<EditorMobile />} />

          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/update" element={<UpdateProfile />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;
