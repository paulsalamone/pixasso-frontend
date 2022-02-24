import { Route, Routes, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Editor from "./components/Editor";
import SketchImage from "./components/SketchImage";

const AppRouter = () => {
  return (
    <>
      <body>
        <header>
          <Nav />
        </header>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<SketchImage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/editor" element={<Editor />} />
          </Routes>
        </div>
        <Footer />
      </body>
    </>
  );
};

export default AppRouter;
